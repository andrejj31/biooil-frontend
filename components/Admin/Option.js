import React from "react";
import Link from "next/link";

export default function Option({ heading, options }) {
  return (
    <div className="option">
      <h3 className="option__heading">{heading}</h3>
      <ul className="option__options">
        {options.map((option, i) => {
          const { title, href } = option;
          return (
            <li key={i}>
              <Link href={href}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
