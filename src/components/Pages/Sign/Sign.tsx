import {ReactElement} from "react";

type SignPropsType = {
    children: ReactElement
}

export const Sign: React.FC<SignPropsType> = ({children}) => {
    return (
        <div className="sign_page">
            <div className="sign_page_background"></div>
            <div className="background"></div>
            <div className="sign_page_content">
                {children}
            </div>
        </div>
    )
}