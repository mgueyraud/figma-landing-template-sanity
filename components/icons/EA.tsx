import React from "react";

function EA(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
      <g clipPath="url(#a)">
        <path d="M0 0h18v18H0V0Z" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M10.474 5.9h-4.7l-.713 1.146h4.694l.719-1.146Zm.96.01-2.872 4.571H5.375l.736-1.147h1.91L8.75 8.19H4.335l-.73 1.144h1.046L3.2 11.622h6.056l2.238-3.525.815 1.237h-.736l-.696 1.147h2.178l.756 1.141H15.2l-3.765-5.711Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default EA;
