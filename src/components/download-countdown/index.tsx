import { useEffect, useState } from "react";

import styles from './styles.module.css'

type IProps = {
  url: string;
  children: React.ReactNode;
}

const DownloadCountdown: React.FC<IProps> = ({ url, children }) => {
  const [countdown, setCountdown] = useState(15);

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
      <p className="text-center">
        Tập tin sẽ được tải xuống sau <span className={styles.countdown}>{countdown} giây</span>
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
