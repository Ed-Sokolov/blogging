import {Field} from "formik";

type CustomCheckboxType = {
    id: string;
    name: string;
    text: string;
}

export const CustomCheckbox: React.FC<CustomCheckboxType> = ({
                                                                 id, name, text
                                                             }) => {
    return (
        <div className="checkbox_field">
            <div className="checkbox_wrapper">
                <label className="switch">
                    <Field
                        type="checkbox"
                        id={id}
                        name={name}
                    />
                    <span className="slider"></span>
                </label>
            </div>
            <p>{text}</p>
        </div>
    )
}