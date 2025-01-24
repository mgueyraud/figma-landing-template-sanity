import React from "react";

function Dell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
      <g clipPath="url(#a)">
        <path fill="#007DB8" d="M0 0h18v18H0V0Z" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M15.217 10.02v.713h-2.242V7.217h.815v2.802h1.427ZM8.44 7.012 9 7.47 7.115 8.897l.407.357 1.886-1.478.56.459L9 9l-.917.713.408.357 1.885-1.529V7.217h.816v2.802h1.477v.714h-2.242V9.408L8.44 10.936 6.452 9.408c-.153.764-.866 1.325-1.681 1.325H3.344V7.217h1.427c.815 0 1.478.56 1.682 1.325L8.44 7.013Zm-4.331.917v2.14h.611c.14 0 .27-.032.388-.088a.963.963 0 0 0 .306-.237c.086-.098.155-.215.202-.341a1.161 1.161 0 0 0-.007-.83 1.076 1.076 0 0 0-.214-.338.984.984 0 0 0-.308-.225.877.877 0 0 0-.367-.081h-.61Z"
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

export default Dell;
