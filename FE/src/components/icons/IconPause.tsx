interface IconPause {
  className: string | undefined;
}

export default function IconPause({ className }: IconPause) {
  return (
    <svg
      className={className ? className : "w-full h-full"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7V17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17V7ZM17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V7Z"
        fill="currentColor"
      />
    </svg>
  );
}
