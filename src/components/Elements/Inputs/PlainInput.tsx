import {Field} from "formik";
import {ReactElement} from "react";
import {CustomErrorMessage} from "./CustomErrorMessage";

type PlainInputType = {
    labelValue?: string | ReactElement;
    isWithLabel?: boolean;
    id?: string;
    name?: string;
    placeholder?: string;
    as?: string | false;
    type?: string;
    className?: string;
    children?: ReactElement | false;
    message?: string;
    isTouched?: boolean;
}

export const PlainInput: React.FC<PlainInputType> = ({
                                                         labelValue,
                                                         isWithLabel = true,
                                                         id,
                                                         name,
                                                         placeholder,
                                                         type = "text",
                                                         className = "input_field",
                                                         as = false,
                                                         children = false,
                                                         message,
                                                         isTouched
                                                     }) => {
    return (
        <div className={className}>
            {isWithLabel &&  <label htmlFor={id}>
                {labelValue}
            </label>}
            {
                children ? children : <Field type={type} as={as} id={id} name={name} placeholder={placeholder}/>
            }
            {
                (message && isTouched) ? <CustomErrorMessage message={message} isTouched={isTouched}/> : <></>
            }
        </div>
    )
}