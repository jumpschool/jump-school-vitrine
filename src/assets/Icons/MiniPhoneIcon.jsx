import React from "react";

function MiniPhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <g filter="url(#filter0_d_102_24505)">
        <path
          fill="#DE245C"
          d="M11.001 22.002c6.076 0 11.001-4.925 11.001-11 0-6.077-4.925-11.002-11-11.002C4.924 0 0 4.925 0 11.001s4.925 11.001 11.001 11.001z"
        ></path>
        <path
          fill="url(#pattern0_102_24505)"
          d="M3.406 3.388H19.098V19.08H3.406z"
        ></path>
        <path
          fill="#fff"
          d="M7.224 4.559c.256.054.501.132.704.306.03.025.06.048.085.073.578.579 1.16 1.155 1.733 1.735.428.432.5 1.027.201 1.52a1.09 1.09 0 01-.571.47c-.355.127-.63.345-.782.697a1.068 1.068 0 00-.05.724c.17.647.528 1.191.96 1.69.519.597 1.113 1.104 1.829 1.454.297.146.605.274.95.226.456-.064.805-.286.984-.72.116-.286.26-.542.537-.704.45-.263 1.017-.229 1.404.121.352.322.683.668 1.022 1.006.308.309.626.608.914.935.361.414.373 1.058.053 1.507-.067.091-.14.178-.217.258-.339.343-.689.677-1.02 1.026-.355.373-.791.538-1.292.558-.535.023-1.05-.096-1.552-.267-.99-.334-1.882-.855-2.728-1.459a17.66 17.66 0 01-3.685-3.546c-.78-.999-1.445-2.066-1.856-3.276-.179-.526-.3-1.063-.272-1.625.025-.492.185-.922.553-1.267.309-.29.606-.592.898-.898.256-.27.535-.494.92-.544h.278z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_102_24505"
          width="30.002"
          height="30.002"
          x="-4"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_102_24505"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_102_24505"
            result="shape"
          ></feBlend>
        </filter>
        <pattern
          id="pattern0_102_24505"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00685)" xlinkHref="#image0_102_24505"></use>
        </pattern>
        <image
          id="image0_102_24505"
          width="146"
          height="146"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default MiniPhoneIcon;
