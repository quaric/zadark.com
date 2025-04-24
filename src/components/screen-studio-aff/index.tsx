export default function ScreenStudioAff() {
  return (
    <div className="margin-bottom--md" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          padding: "0.25rem 1rem",
          borderRadius: "var(--ifm-global-radius)",

          backgroundColor: "#27272a",
          color: "#fff",
          fontWeight: "var(--ifm-font-weight-bold)",
        }}
      >
        Affiliate
      </div>

      <a href="https://screen.studio/@lVkgmj" target="_blank" rel="noopener dofollow" aria-label="Screen Studio" style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={require('./screenstudio.png').default}
          alt="Screen Studio"
          style={{ width: "100%", height: "auto", borderRadius: "var(--ifm-global-radius)" }}
        />
      </a>
    </div>
  )
}