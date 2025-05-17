import { useEffect } from "react";

const KlaviyoForm = () => {
  useEffect(() => {
    // Prevent duplicate form rendering
    const existingScript = document.querySelector(
      'script[src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XuTWxP"]'
    );

    // Only inject the script if it doesn't exist yet
    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XuTWxP";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window._klOnsite = window._klOnsite || [];

        setTimeout(() => {
          window._klOnsite.push(["openForm", "Yerzc7"]);
        }, 6000);
      };

      // Optional: clean up if navigating away
      return () => {
        document.body.removeChild(script);
      };
    } else {
      // Script is already there, just open the form after a delay (if not already open)
      window._klOnsite = window._klOnsite || [];

      setTimeout(() => {
        window._klOnsite.push(["openForm", "Yerzc7"]);
      }, 6000);
    }
  }, []);

  return null;
};

export default KlaviyoForm;
