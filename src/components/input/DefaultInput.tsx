// import {Label} from "@radix-ui/react-label";
// import {Input} from "@/components/ui/input.tsx";
// import EyeIcon from "@/assets/icons/eye.svg";
// import EyeOffIcon from "@/assets/icons/eye-off.svg";
// import * as React from "react";
// import {useState} from "react";

// interface DefaultInputProps extends React.ComponentProps<"input">{
//     label?: string;
//     mask?: boolean;
//     shouldUseEyeIcon?: boolean;
//     leftIcon?: React.ReactNode;
//     rightIcon?: React.ReactNode;
//     leftIconSpace?: number;
//     rightIconSpace?: number;
//     formik?: any;
//     mainClassName?: string;
// }

// export const DefaultInput = ({
//     label, 
//     mainClassName, 
//     mask = false, 
//     shouldUseEyeIcon = true, // Default to true to maintain existing behavior
//     formik,
//     rightIconSpace = 8, 
//     leftIconSpace = 8, 
//     ...props
// }: DefaultInputProps) => {
//     const isError = formik?.touched[props?.name ?? ""] && formik?.errors[props?.name ?? ""]
//     const [toggleEye, setToggleEye] = useState<boolean>(true)

//     const forId = String(new Date().getTime() * Math.random());

//     const security = mask ? (toggleEye ? 'password' : 'text') : props.type
    
//     // Updated logic: Check both mask, password type, AND shouldUseEyeIcon
//     const shouldShowEyeIcon = mask && props?.type === "password" && shouldUseEyeIcon

//     const rightPadding = shouldShowEyeIcon ? 8 : (props.rightIcon ? rightIconSpace : 0)

//     return (
//       <div className={`grid ${mainClassName}`}>
//           <Label htmlFor={forId} className={'text-[14px] font-light'}>{label}</Label>
//           <div className="relative">
//               {
//                   props.leftIcon && (
//                       <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
//                           {props.leftIcon}
//                       </div>
//                   )
//               }
//               <Input
//                   id={forId}
//                   {...props}
//                   type={security}
//                   onChange={formik?.handleChange(props?.name)}
//                   onBlur={formik?.handleBlur(props?.name)}
//                   value={formik?.values[props?.name ?? ""]}
//                   className={`${props.leftIcon ? `pl-${leftIconSpace}` : ''} ${rightPadding ? `pr-${rightPadding}` : ''} ${props.className} placeholder:text-[12px]`}
//               />

//               {
//                   props.rightIcon && (
//                       <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
//                           {props.rightIcon}
//                       </div>
//                   )
//               }
//               {
//                   shouldShowEyeIcon && (
//                       <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-50 text-muted-foreground">
//                           {
//                               !toggleEye ?
//                               <button onClick={() => setToggleEye(!toggleEye)} className={'w-[18px] h-[16px] cursor-pointer'}>
//                                     <EyeIcon   />
//                               </button>:
//                                 <button onClick={() => setToggleEye(!toggleEye)} className={'w-[18px] h-[16px] cursor-pointer'}>
//                                     <EyeOffIcon />
//                                 </button>
//                           }
//                       </div>
//                   )
//               }
//           </div>
//           <p className={'text-[#525252] text-[12px] '}>{isError ? formik?.errors[props?.name ?? ""] : ''}</p>
//       </div>
//   )
// };




import {Label} from "@radix-ui/react-label";
import {Input} from "@/components/ui/input.tsx";
import EyeIcon from "@/assets/icons/eye.svg";
import EyeOffIcon from "@/assets/icons/eye-off.svg";
import * as React from "react";
import {useState} from "react";
interface DefaultInputProps extends React.ComponentProps<"input">{
    label?: string;
    mask?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftIconSpace?: number
    rightIconSpace?: number
    formik?: any
    mainClassName?: string
}
export const DefaultInput = ({label, mainClassName, mask=false, formik,rightIconSpace=8, leftIconSpace=8, ...props}: DefaultInputProps) => {
    const isError = formik?.touched[props?.name ?? ""] && formik?.errors[props?.name ?? ""]
    const [toggleEye, setToggleEye] = useState<boolean>(true)


    const forId = String(new Date().getTime() * Math.random());


    const security = mask ? (toggleEye ? 'password' : 'text') : props.type
    const shouldShowEyeIcon = mask && props?.type === "password"

    const rightPadding = shouldShowEyeIcon ? 8 : (props.rightIcon ? rightIconSpace : 0)

    return (
      <div className={`grid ${mainClassName}`}>
          <Label htmlFor={forId} className={'text-[14px] font-light text-[#1e1e1e] pb-0.5 pl-0.5'}>{label}</Label>
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
                  onChange={formik?.handleChange(props?.name)}
                  onBlur={formik?.handleBlur(props?.name)}
                  value={formik?.values[props?.name ?? ""]}
                  className={`${props.leftIcon ? `pl-${leftIconSpace}` : ''} ${rightPadding ? `pr-${rightPadding}` : ''} ${props.className} placeholder:text-[12px]
                  border-[#1e1e1e] rounded-sm focus-visible:border-none focus-visible:ring-offset-0 focus-visible:ring-[#1B1E69] 
                 `}
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
                              <button onClick={() => setToggleEye(!toggleEye)} className={'w-[18px] h-[16px] cursor-pointer'}>
                                    <EyeIcon   />
                              </button>:
                                <button onClick={() => setToggleEye(!toggleEye)} className={'w-[18px] h-[16px] cursor-pointer'}>
                                    <EyeOffIcon />
                                </button>
                          }
                      </div>
                  )
              }
          </div>
          <p className={'text-[#525252] text-[12px] '}>{isError ? formik?.errors[props?.name ?? ""] : ''}</p>

      </div>
  )
};