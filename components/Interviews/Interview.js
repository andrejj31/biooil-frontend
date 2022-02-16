import React from "react";
import AdminOptions from "../Reusable/AdminOptions";
export default function Interview({ source, title, link, _id: id }) {
  const adminButtons = [
    {
      title: "Измени го интервјуто",
      type: "edit",
      location: `/interviews/${id}/edit`,
    },
    {
      title: "Избриши го интервјуто",
      type: "delete",
      location: `interviews/${id}`,
      req: {
        data: { delete: "true" },
        method: "DELETE",
        options: { credentials: "include" },
      },
    },
  ];

  return (
    <article className="interviews__interview ">
      <h3>{source}</h3>
      <p>{title}</p>
      <a className="btn btn-round btn-green" href={link}>
        погледни интервју
      </a>
      <AdminOptions btns={adminButtons}></AdminOptions>
    </article>
  );
}
