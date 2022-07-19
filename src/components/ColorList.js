import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colors.map((obj) => {
          return <li key={obj} style={{ color: obj }}>{obj}</li>
        })}
      </ol>
    </div>
  );
}

export default ColorList;
