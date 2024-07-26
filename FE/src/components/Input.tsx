import { useState, RefObject } from "react";

interface InputProps {
  type: "text" | "password" | "email" | "tel" | "number" | "textarea" | "radio";
  label?: string;
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
  onChange: (value: string) => void;
  onFocus?: (value: string) => void;
  onBlur?: (value: boolean) => void;
  handleKeyDown?: (value: any) => void;
  transparentStyle?: boolean;
  className?: string;
  minimum?: number;
  icon?: JSX.Element | boolean;
  iconOther?: JSX.Element | boolean;
  iconPosition?: string;
  lableMargin?: boolean;
  checked?: boolean;
  error?: boolean;
  errorText?: string;
  name?: string;
  height?: number;
  inptRef?: RefObject<HTMLInputElement>;
}

const Input = ({
  type,
  label,
  value,
  disabled,
  onChange,
  onFocus,
  onBlur,
  handleKeyDown,
  placeholder = "",
  transparentStyle,
  className = "",
  minimum = 0,
  icon,
  iconOther,
  error = false,
  errorText,
  name,
  iconPosition = "right",
  height = 48,
  inptRef,
}: InputProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showPwd, set_showPwd] = useState(false);

  return (
    <div>
      {label && (
        <p className="text-sm font-medium text-blackColour pb-1 pl-1">
          {label}
        </p>
      )}
      <div className="relative">
        <div
          className={`flex justify-center items-center bg-light-100 rounded-md border ${
            error
              ? "border-errorColour"
              : isInputFocused
              ? "border-mainColour1"
              : "border-light-100"
          } bg-blend-soft-light`}
          style={{ height: `${height}px` }}
        >
          {icon && iconPosition === "left" && (
            <>
              <span
                className="ml-[10px] cursor-pointer"
                onClick={() => set_showPwd(!showPwd)}
                onKeyDown={() => {}}
              >
                {icon}
              </span>
            </>
          )}
          <input
            type={type === "password" && showPwd ? "text" : type}
            className={`p-3 w-full text-sm !bg-transparent dark:text-white text-blackColour  outline-none border-none rounded-md
                ${transparentStyle ? "bg-transparent" : ""}
                ${className}
              `}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => (handleKeyDown ? handleKeyDown(e.key) : {})}
            placeholder={placeholder}
            min={minimum}
            value={value}
            onFocus={() => {
              if (onFocus) {
                onFocus("tradeLog");
              }
              setIsInputFocused(true);
            }}
            onBlur={() => {
              if (onBlur) {
                onBlur(true);
              }
              setIsInputFocused(false);
            }}
            name={name ? name : ""}
            ref={inptRef}
            autoComplete="off"
            aria-autocomplete="none"
          />
          {icon && iconPosition === "right" && (
            <>
              {iconOther && showPwd ? (
                <span
                  data-testid="inpt_icon"
                  className="mr-[10px] cursor-pointer"
                  onClick={() => set_showPwd(!showPwd)}
                  onKeyDown={() => {}}
                >
                  {iconOther}
                </span>
              ) : (
                <span
                  data-testid="inpt_icon"
                  className="mr-[10px] cursor-pointer"
                  onClick={() => set_showPwd(!showPwd)}
                  onKeyDown={() => {}}
                >
                  {icon}
                </span>
              )}
            </>
          )}
        </div>
        {error && (
          <p className="text-errorColour text-xs font-medium text-left absolute">
            {errorText ? errorText : "Error"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
