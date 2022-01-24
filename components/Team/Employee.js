import React from "react";
import AdminOptions from "../Reusable/AdminOptions";
import myLoader from "../../utils/loader";
export default function Employee({ name, position, resume, image, _id: id }) {
  const adminButtons = [
    {
      title: "Измени го вработениот",
      type: "edit",
      location: `/team/${id}/edit`,
    },
    {
      title: "Избриши го вработениот",
      type: "delete",
      location: `team/${id}`,
      req: {
        method: "DELETE",
        data: { delete: "true" },
        options: { credentials: "include" },
      },
    },
  ];

  const loaderUrl = myLoader(`/Employees/${image}.jpg`);
  return (
    <div className="team__articleFlex">
      <article className="team__article">
        <img src={loaderUrl} alt={name} />
        <div className="team__typography">
          <h3>{name}</h3>
          <span>{position}</span>
          <p>{resume}</p>
        </div>
      </article>
      <AdminOptions btns={adminButtons}></AdminOptions>
    </div>
  );
}
