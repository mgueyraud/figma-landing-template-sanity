import React from "react";

function Cinemark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
      <g clipPath="url(#a)">
        <path fill="#D00" d="M0 0h18v18H0V0Z" />
        <path
          fill="#fff"
          d="M7.262 13.64a5.132 5.132 0 0 1-1.593-1.081 4.609 4.609 0 0 1-1.08-1.606 4.814 4.814 0 0 1-.405-1.954c0-2.767 2.268-5.018 5.031-5.018.779 0 1.562.19 2.25.54.688.338 1.31.865 1.77 1.486l.215.27-1.445 1.066-.203-.27a3.174 3.174 0 0 0-2.587-1.296A3.233 3.233 0 0 0 5.98 9a3.248 3.248 0 0 0 3.235 3.25 3.223 3.223 0 0 0 2.588-1.296l.202-.257 1.432 1.053-.217.27a4.938 4.938 0 0 1-1.768 1.485 4.898 4.898 0 0 1-2.237.527 5.102 5.102 0 0 1-1.953-.391Z"
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

export default Cinemark;
