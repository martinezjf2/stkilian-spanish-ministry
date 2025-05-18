import Script from "next/script";

const GA_TRACKING_IDS = ["G-T94Q6D7ZC3", "G-5SVDW08ZPG"];

export default function GoogleAnalyticsScripts() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_IDS[0]}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          ${GA_TRACKING_IDS.map(
            (id) => `gtag('config', '${id}', { debug_mode: true });`
          ).join("\n")}
        `}
      </Script>
    </>
  );
}
