import { useEffect, useState, useRef } from "react";

interface ButtonWrapper {
  onClick: (e?: any) => void;
  children: JSX.Element | string;
  icon?: JSX.Element;
  size?: "Lg" | "Md" | "Sm";
  className?: string;
  id?: string;
  disabled?: boolean;
  type?: "submit" | "button";
  buttonStyle?: "Primary" | "Secondary";
  redText?: boolean;
  rounded?: boolean;
  secondaryLightBlue?: boolean;
}

const Button = ({
  onClick,
  icon,
  children,
  size = "Sm",
  className,
  disabled,
  type,
  id,
  buttonStyle = "Primary",
  redText = false,
  rounded = false,
  secondaryLightBlue = true,
  ...props
}: ButtonWrapper): JSX.Element => {
  const buttonRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMouseDown(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <button
      ref={buttonRef}
      className={`cutomButton w-full flex gap-3 items-center justify-center transform transition duration-300 hover:scale-[1.01] border-2  ${
        rounded ? "rounded-full" : "rounded-lg"
      } ${disabled ? "opacity-75" : "opacity-100"} ${
        !disabled && isMouseDown && "border-blackColour"
      } ${
        size === "Sm"
          ? "px-4 py-[6px]"
          : size === "Md"
          ? "px-6 py-[10px]"
          : "px-6 py-[14px]"
      }
        ${className ? className : ""} 
        ${
          buttonStyle === "Primary"
            ? "bg-blackColour border-blackColour"
            : "bg-whiteColour border-gray-400"
        }`}
      onClick={!disabled ? onClick : () => {}}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      disabled={disabled}
      type={type}
      id={`${id ? id : ""}`}
      {...props}
    >
      <span
        className={`${icon && "buttonText"} text-center text-sm font-semibold ${
          redText
            ? "text-errorColour"
            : buttonStyle === "Primary"
            ? "text-white"
            : "text-blackColour"
        } `}
      >
        {children}
      </span>
      {icon && <span className="buttonIcon mt-1">{icon}</span>}
    </button>
  );
};

export default Button;
