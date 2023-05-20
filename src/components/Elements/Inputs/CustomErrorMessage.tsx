import React from "react";
import {UseSvg} from "../UseSvg/UseSvg";

type CustomErrorMessageProps = {
    message: string | undefined;
    isTouched: boolean | undefined;
}

export const CustomErrorMessage: React.FC<CustomErrorMessageProps> = ({message, isTouched}) => {
    return (
        <>
            {
                message && isTouched ?
                    <div className="custom_error_message">
                        <UseSvg spriteName='warning' className="error_icon"
                                title={"show an error message"}/>
                        <p className="message">{message}</p>
                    </div> : null
            }
        </>
    )
}