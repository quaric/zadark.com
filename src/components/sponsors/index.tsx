import styles from "./styles.module.css";
import { ORGANIZATIONAL_SPONSORS } from "./data";
import Link from "@docusaurus/Link";

export default function Sponsors() {
  return (
    <div className={styles.grid}>
      {ORGANIZATIONAL_SPONSORS.map((sponsor) => {
        const SponsorLogo = sponsor.logo;

        return (
          <a
            key={sponsor.name}
            className={`card ${styles.sponsor}`}
            href={sponsor.url}
            target="_blank"
            rel="noopener sponsored"
          >
            <SponsorLogo
              className={styles.logo}
              aria-label={`${sponsor.name} logo`}
            />
          </a>
        );
      })}

      <Link className={`card ${styles.sponsor} ${styles['sponsor--plus']}`} to="/sponsors/become-a-sponsor">
        <svg fill="none" width="32" height="32" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
      </Link>
    </div>
  );
}