import { useEffect, useState } from "react";
import mixpanel from 'mixpanel-browser';

import styles from './styles.module.css'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type IProps = {
  url: string;
  children: React.ReactNode;
}

const DownloadCountdown: React.FC<IProps> = ({ url, children }) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const [countdown, setCountdown] = useState(14);

  useEffect(() => {
    const MIXPANEL_TOKEN = customFields.MIXPANEL_TOKEN as string;

    if (!MIXPANEL_TOKEN) {
      return;
    }

    mixpanel.init(MIXPANEL_TOKEN, {
      debug: false,
      track_pageview: true,
      persistence: 'localStorage',
      batch_requests: false,
    });

    mixpanel.track("download_waiting", {
      file: url,
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        const nextCount = prevCount - 1;

        if (nextCount <= 0) {
          clearInterval(timer);
        }

        return nextCount;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const startDownload = (isRetry = false) => {
    try {
      mixpanel.track(isRetry ? "download_retry" : "download_start", {
        file: url,
      }, {
        send_immediately: true,
      }, () => {
        window.location.href = url;
      });
    } catch (error) {
      console.error(error.message)
      window.location.href = url;
    }
  }

  const handleRetryDownloadClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    startDownload(true);
  }

  useEffect(() => {
    if (countdown === 0) {
      startDownload()
    }
  }, [countdown]);

  return (
    <div className="row">
      <div className="col col--8 col--offset-2">
        {countdown > 0 ? (
          <p className="text-center">
            Tập tin sẽ được tải xuống sau <span className={styles.countdown}>{countdown} giây</span>
          </p>
        ) : (
          <p className="text-center">
            Vui lòng <a href="#" className={styles.countdown} onClick={handleRetryDownloadClick}>Nhấn vào đây</a> nếu tập tin vẫn chưa được tải xuống
          </p>
        )}

        {/* <div className="margin-bottom--md">
          <a href="https://www.digitalocean.com/?refcode=474b42f30e7d&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge" title="DigitalOcean Referral Badge" aria-label="DigitalOcean Referral Badge" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" height="40" />
          </a>
        </div> */}

        <div>
          {children}
        </div>

        {/* <div className="alert alert--info" role="alert">
          ZaDark thêm quảng cáo để có kinh phí phát triển. Chúng tôi xin lỗi nếu quảng cáo làm phiền bạn!
        </div> */}
      </div>
    </div>
  );
}

export default DownloadCountdown;
