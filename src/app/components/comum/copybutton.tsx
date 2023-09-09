'use client';
import { CopyIcon } from "../icons/CopyIcon"
interface CopyButtonProps {
    textToCopy: string;
}

export const CopyButton = ({textToCopy}: CopyButtonProps ) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
    }

    return (
        <button onClick={handleCopy} className="inline-flex items-center justify-center">
            <CopyIcon className="fill-white"/>
        </button>
    )
}