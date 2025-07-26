import {Input} from "@/components/ui/input.tsx";
import * as React from "react";
import {useState} from "react";
import {Label} from "@/components/ui/label.tsx";
import { Eye, EyeOff } from "lucide-react";
interface DefaultInputProps extends React.ComponentProps<"input">{
    label?: string;
    mask?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftIconSpace?: number
    rightIconSpace?: number
    formik?: any,
    minClassName?: string
}

export const DefaultInput = ({label, minClassName, mask=false, formik,rightIconSpace=8, leftIconSpace=8, ...props}: DefaultInputProps) => {
    const isError = formik?.touched[props?.name ?? ""] && formik?.errors[props?.name ?? ""]
    const [toggleEye, setToggleEye] = useState<boolean>(true)


    const forId = String(new Date().getTime() * Math.random());


    const security = mask ? (toggleEye ? 'password' : 'text') : props.type
    const shouldShowEyeIcon = mask && props?.type == "password"
    // const shouldShowEyeIcon = true

    console.log(`shouldShowEyeIcon: ${shouldShowEyeIcon}, toggleEye: ${toggleEye}, security: ${security}`);
    
    console.log(mask, props.type, security);
    
    const rightPadding = shouldShowEyeIcon ? 8 : (props.rightIcon ? rightIconSpace : 0)


    return (
      <div className={`grid gap-1 ${minClassName}`}>
          <Label htmlFor={forId} className={'text-[12px] font-light'}>{label}</Label>
          <div className="relative">
              {
                  props.leftIcon && (
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                          {props.leftIcon}
                      </div>
                  )
              }
              <Input
                  id={forId}
                  {...props}
                  type={security}
                  // onChange={formik?.handleChange(props?.name)}
                  // onBlur={formik?.handleBlur(props?.name)}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                  value={formik?.values[props?.name ?? ""]}
                  className={`${props.leftIcon ? `pl-${leftIconSpace}` : ''} ${rightPadding ? `pr-${rightPadding}` : ''} ${props.className}`}
              />

              {
                  props.rightIcon && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                          {props.rightIcon}
                      </div>
                  )
              }
              {
                  shouldShowEyeIcon && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-50 text-muted-foreground">
                          {
                              !toggleEye ?
                                  <Eye onClick={()=> setToggleEye(!toggleEye)} className={'w-[18px] h-[16px] cursor-pointer'} /> :
                                  <EyeOff onClick={()=> setToggleEye(!toggleEye)} className={'w-[18px] h-[16px] cursor-pointer'} />
                          }
                      </div>
                  )
              }
          </div>
          <p className={'text-red-600 text-[12px] '}>{isError ? formik?.errors[props?.name ?? ""] : ''}</p>
      </div>
  )
};