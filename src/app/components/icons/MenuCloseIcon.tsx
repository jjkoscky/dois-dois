import { SVGProps } from "react";
interface CopyIconProps extends SVGProps<SVGSVGElement>{
    title?: string;
}

export const MenuClose = (props: SVGProps<SVGSVGElement>) => {
    return(
        <svg
        {...props}
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1wm"
        xmlns="https://www.w3.org/TR/SVG2/"
        >
        
        
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </svg>
    )
}