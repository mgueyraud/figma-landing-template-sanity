import React from "react";

function Atlassian(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
      <g clipPath="url(#a)">
        <path fill="#2251C5" d="M0 0h18v18H0V0Z" />
        <path
          fill="url(#b)"
          d="M7.18 8.14c-.13-.157-.339-.13-.443.051l-2.21 4.419c-.077.182.053.39.235.39h3.067c.104 0 .182-.052.234-.156.676-1.378.26-3.457-.884-4.705Z"
        />
        <path
          fill="#fff"
          d="M8.79 4.136c-1.221 1.95-1.143 4.107-.337 5.745.806 1.637 1.43 2.859 1.481 2.963.052.104.13.156.234.156h3.067c.208 0 .312-.208.234-.39L9.233 4.136c-.078-.181-.338-.181-.442 0Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="8.379"
          x2="6.139"
          y1="8.829"
          y2="11.943"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7799D7" />
          <stop offset=".923" stopColor="#fff" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Atlassian;
