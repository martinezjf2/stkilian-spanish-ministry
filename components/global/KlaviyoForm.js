import React, { useEffect } from "react";

const KlaviyoForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XuTWxP";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window._klOnsite = window._klOnsite || [];

      // Set a 5-second delay before showing the form
      setTimeout(() => {
        // window._klOnsite.push(["form.disable"]);
        window._klOnsite.push(["openForm", "Yerzc7"]);
      }, 6000);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>;
};

export default KlaviyoForm;
