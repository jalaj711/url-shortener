import React from "react";

export default function CopyIcon(props: React.ComponentProps<'svg'>) {
  return (
    <>
    <svg
      width="45"
      height="52"
      viewBox="0 0 45 52"
      xmlns="http://www.w3.org/2000/svg"
      className="svg"
      {...props}
    >
      <path d="M33.1579 0H4.73684C2.13158 0 0 2.12727 0 4.72727V37.8182H4.73684V4.72727H33.1579V0ZM40.2632 9.45455H14.2105C11.6053 9.45455 9.47368 11.5818 9.47368 14.1818V47.2727C9.47368 49.8727 11.6053 52 14.2105 52H40.2632C42.8684 52 45 49.8727 45 47.2727V14.1818C45 11.5818 42.8684 9.45455 40.2632 9.45455ZM40.2632 47.2727H14.2105V14.1818H40.2632V47.2727Z" />
    </svg>
    <style jsx>
      {`
      .svg {
        height: 30px;
        fill: white;
        transition: all 150ms;
      }
      .svg:hover {
        filter: drop-shadow(0 0 4px white);
        cursor: pointer;
        transform: translateY(-8px);
      }
      `}
    </style>
    </>
  );
}
