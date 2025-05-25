import { useEffect, useState } from "react";
import mixpanel from 'mixpanel-browser';
import Link from '@docusaurus/Link';
import styles from './styles.module.css'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ScreenStudioAff from '@site/src/components/screen-studio-aff'

type IProps = {
  url: string;
  children: React.ReactNode;
}

const DownloadCountdown: React.FC<IProps> = ({ url, children }) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const [countdown, setCountdown] = useState(10);

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
            Tập tin sẽ được tải xuống sau <span className={styles.countdown}>{countdown.toString().padStart(2, '0')} giây</span>
          </p>
        ) : (
          <p className="text-center">
            Vui lòng <a href="#" className={styles.countdown} onClick={handleRetryDownloadClick}>Nhấn vào đây</a> nếu tập tin vẫn chưa được tải xuống.
          </p>
        )}

        <div className="alert alert--warning margin-bottom--md" role="alert">
          <strong>ZaDark không chứa bất kỳ virus, mã độc nào</strong>. Nếu trình bảo vệ máy tính phát hiện tập tin cài đặt ZaDark có Virus, bạn tuyệt đối không tiếp tục mở tập tin và thông báo cho chúng tôi <Link to="/contact"><strong>tại đây</strong></Link>.
        </div>

        <ScreenStudioAff />

        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DownloadCountdown;
