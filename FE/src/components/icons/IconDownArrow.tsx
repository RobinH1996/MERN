interface IconDownArrow {
  className: string | undefined;
}

export default function IconDownArrow({ className }: IconDownArrow) {
  return (
    <svg
      className={className ? className : "w-full h-full"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 6L8.47141 10.8619C8.21106 11.1223 7.78895 11.1223 7.5286 10.8619L2.66666 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
