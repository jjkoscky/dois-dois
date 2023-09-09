import { SVGProps } from "react";
interface CopyIconProps extends SVGProps<SVGSVGElement>{
    title?: string;
}

export const CopyIcon = ({title, ...props}:CopyIconProps) => {
    return(
        <svg
        {...props}
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1wm"
        xmlns="https://www.w3.org/TR/SVG2/"
        >
            
        {title && <title>{title}</title>}
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeWidth="2" d="M9,15 L17,15 L9,15 Z M9,11 L19,11 L9,11 Z M9,7 L13,7 L9,7 Z M16,1 L16,7 L22,7 M6,5 L2,5 L2,23 L18,23 L18,19 M22,19 L6,19 L6,1 L17,1 L22,6 L22,19 L22,19 Z"></path></svg>
        </svg>
       

    )
}

