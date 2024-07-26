interface IconPlay {
  className: string | undefined;
}

export default function IconPlay({ className }: IconPlay) {
  return (
    <svg
      className={className ? className : "w-full h-full"}
      viewBox="-3 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>play</title>
      <desc>Created with Sketch Beta.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Icon-Set-Filled"
          transform="translate(-419.000000, -571.000000)"
          fill="currentColor"
        >
          <path
            d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
            id="play"
          ></path>
        </g>
      </g>
    </svg>
  );
}
