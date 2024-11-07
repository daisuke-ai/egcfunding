import React, { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

export default function HubSpotForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "47974339",
          formId: "9cc65f43-e5c1-4d02-bcbf-299e3f7dc483",
          target: '#hubspot-form-container'
        });
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hubspot-form-container"></div>;
} 