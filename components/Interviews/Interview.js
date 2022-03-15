import React from "react";
import AdminOptions from "../Reusable/AdminOptions";
import myLoader from "../../utils/loader";
import Link from "next/link";

export default function Interview({
  source,
  title,
  link,
  _id: id,
  slug,
  image,
}) {
  const adminButtons = [
    {
      title: "Измени го интервјуто",
      type: "edit",
      location: `/interviews/${slug}/edit`,
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

  const loaderUrl = myLoader(`/Interviews/${image}.jpg`);
  return (
    <article className="interviews__interview ">
      <img src={loaderUrl} alt="title" />
      <h3>{source}</h3>
      <p>{title}</p>
      <Link href={`/interviews/${slug}`}>
        <a className="btn btn-round btn-green">погледни интервју</a>
      </Link>
      <AdminOptions btns={adminButtons}></AdminOptions>
    </article>
  );
}
