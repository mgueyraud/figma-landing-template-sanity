import React from "react";

function Adidas(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
      <g clipPath="url(#a)">
        <path d="M0 0h18v18H0V0Z" />
        <path
          fill="#fff"
          d="m8.518 6.19 2.365-1.39 1.63 2.824c.826 1.437 1.656 2.872 2.483 4.307H11.81c-.906-1.58-1.812-3.16-2.717-4.742-.192-.332-.38-.667-.574-.999ZM5.776 8.674l2.4-1.356c.875 1.54 1.757 3.076 2.633 4.614H9.053c-.474-.002-.95.004-1.424.002l-1.853-3.26ZM3 11.13c.788-.46 1.577-.917 2.365-1.375l1.267 2.176H3.445L3 11.13Z"
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

export default Adidas;
