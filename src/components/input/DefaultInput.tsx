import { Input } from "@/components/ui/input.tsx";
import * as React from "react";
import { useState } from "react";
import { Label } from "@/components/ui/label.tsx";
import { Eye, EyeOff, Check, CheckCheck } from "lucide-react";

interface DefaultInputProps extends React.ComponentProps<"input"> {
  label?: string;
  mask?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconSpace?: number;
  rightIconSpace?: number;
  formik?: any;
  minClassName?: string;
}

export const DefaultInput = ({
  label,
  minClassName,
  mask = false,
  formik,
  rightIconSpace = 8,
  leftIconSpace = 8,
  ...props
}: DefaultInputProps) => {
  const isError =
    formik?.touched[props?.name ?? ""] && formik?.errors[props?.name ?? ""];
  
  const isValid = 
    formik?.touched[props?.name ?? ""] && 
    !formik?.errors[props?.name ?? ""] && 
    formik?.values[props?.name ?? ""];
    
  const [toggleEye, setToggleEye] = useState<boolean>(true);

  const forId = String(new Date().getTime() * Math.random());

  const security = mask ? (toggleEye ? "password" : "text") : props.type;
  const shouldShowEyeIcon = mask && props?.type == "password";
  const shouldShowValidationIcon = isValid && !shouldShowEyeIcon;

  // console.log(
  //   `shouldShowEyeIcon: ${shouldShowEyeIcon}, toggleEye: ${toggleEye}, security: ${security}`
  // );

  // console.log(mask, props.type, security);

  // Calculate right padding based on what icons are showing
  const rightPadding = shouldShowEyeIcon
    ? 8
    : shouldShowValidationIcon
    ? 10
    : props.rightIcon
    ? rightIconSpace
    : 0;

  return (
    <div className={`grid gap-1 ${minClassName}`}>
      <Label htmlFor={forId} className={"text-[14px] font-normal"}>
        {label}
      </Label>
      <div className="relative">
        {props.leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {props.leftIcon}
          </div>
        )}

        <Input
          id={forId}
          {...props}
          type={security}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          value={formik?.values[props?.name ?? ""]}
          className={`
            border outline-0
            focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0
                ${isError ? "border-red-500" : isValid ? "border-green-500" : "border-black"} 
                ${props.leftIcon ? `pl-${leftIconSpace}` : ""} 
                ${rightPadding ? `pr-${rightPadding}` : ""} 
                ${props.className}
            `}
        />

        {/* Validation Success Icon (double check) */}
        {shouldShowValidationIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black">
            <div className="flex items-center">
              <CheckCheck className="h-4 w-4" />
            </div>
          </div>
        )}

        {/* Custom Right Icon */}
        {props.rightIcon && !shouldShowEyeIcon && !shouldShowValidationIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {props.rightIcon}
          </div>
        )}

        {/* Password Eye Icon */}
        {shouldShowEyeIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-50 text-muted-foreground">
            {/* Validation icon for password fields */}
            {isValid && (
              <div className="absolute right-8 top-0 text-black">
                <div className="flex items-center">
                  <CheckCheck className="h-4 w-4" />
                </div>
              </div>
            )}
            {!toggleEye ? (
              <Eye
                onClick={() => setToggleEye(!toggleEye)}
                className={"w-[18px] h-[16px] cursor-pointer"}
              />
            ) : (
              <EyeOff
                onClick={() => setToggleEye(!toggleEye)}
                className={"w-[18px] h-[16px] cursor-pointer"}
              />
            )}
          </div>
        )}
      </div>
      <p className={"text-red-600 text-[12px] "}>
        {isError ? formik?.errors[props?.name ?? ""] : ""}
      </p>
    </div>
  );
};