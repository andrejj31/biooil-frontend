import React from "react";

export default function FacebookShare({ url }) {
  return (
    <iframe
      className="blog__facebook"
      src={`https://www.facebook.com/plugins/share_button.php?href=${process.env.NEXT_PUBLIC_SITE_LINK}${url}&layout=button_count&size=large&width=110&height=28&appId`}
      width={110}
      height={28}
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder={0}
      allowFullScreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
}
