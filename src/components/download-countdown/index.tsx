import { useEffect, useState } from "react";

import styles from './styles.module.css'

type IProps = {
  url: string;
  children: React.ReactNode;
}

const DownloadCountdown: React.FC<IProps> = ({ url, children }) => {
  const [countdown, setCountdown] = useState(14);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        const nextCount = prevCount - 1

        if (nextCount <= 0) {
          clearInterval(timer);
        }

        return nextCount;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = url;
    }
  }, [countdown]);

  return (
    <div>
      {countdown > 0 ? (
        <p className="text-center">
          Tập tin sẽ được tải xuống sau <span className={styles.countdown}>{countdown} giây</span>
        </p>
      ) : (
        <p className="text-center">
          Vui lòng <a href={url} className={styles.countdown}>Nhấn vào đây</a> nếu tập tin vẫn chưa được tải xuống
        </p>
      )}

      <p>
        <a href="https://www.digitalocean.com/?refcode=474b42f30e7d&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge" title="DigitalOcean Referral Badge" aria-label="DigitalOcean Referral Badge" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" height="40" />
        </a>
      </p>

      <p>
        {children}
      </p>

      <div className="alert alert--info" role="alert">
        ZaDark thêm quảng cáo để có kinh phí phát triển. Chúng tôi xin lỗi nếu quảng cáo làm phiền bạn!
      </div>
    </div>
  );
}

export default DownloadCountdown;
