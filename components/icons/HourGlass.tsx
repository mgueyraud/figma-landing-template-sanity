import React from "react";

function HourGlass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3002_21)">
        <mask
          id="mask0_3002_21"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="13"
        >
          <path d="M12 0.780029H0V12.78H12V0.780029Z" fill="white" />
        </mask>
        <g mask="url(#mask0_3002_21)">
          <path
            d="M0 0.780029C-1.3911e-07 2.37133 0.63214 3.89745 1.75736 5.02267C2.88258 6.14789 4.4087 6.78003 6 6.78003C7.5913 6.78003 9.11742 6.14789 10.2426 5.02267C11.3679 3.89745 12 2.37133 12 0.780031L0 0.780029Z"
            fill="currentColor"
          />
          <path
            d="M12 12.78C12 11.1887 11.3679 9.66261 10.2426 8.53739C9.11742 7.41217 7.5913 6.78003 6 6.78003C4.4087 6.78003 2.88258 7.41217 1.75736 8.53739C0.632141 9.66261 2.40279e-07 11.1887 0 12.78H12Z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3002_21">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0 0.780029)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HourGlass;
