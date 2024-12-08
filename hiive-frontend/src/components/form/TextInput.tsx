import { forwardRef, InputHTMLAttributes } from "react"

export default forwardRef(
    function TextInput(
        {
            type = "text",
            className = "",
            ...props
        }: InputHTMLAttributes<HTMLInputElement>,
        _ref,
    ) {
        return (
            <>
                <input
                    {...props}
                    className={
                        "border rounded w-full px-2 py-1" +
                        className
                    }/>
            </>
        )
    })
