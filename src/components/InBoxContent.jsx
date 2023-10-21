import React from "react";

export default function InBoxContent(props) {
  const { contents } = props;

  return (
    <div className="mt-4">
      <ul>
        {contents.map((item, index) => (
          <li key={index}>
            <img className="inline-block mr-4" src={item.imgSrc} alt="" />{" "}
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
