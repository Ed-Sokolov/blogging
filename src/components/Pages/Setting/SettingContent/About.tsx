import {Form, Formik} from "formik"
import {PlainInput} from "../../../Elements/Inputs/PlainInput";
import {Loading} from "../../../Elements/Loading/Loading";
import * as Yup from "yup";
import {AboutDataType} from "../../../Containers/SettingContainer/SettingContainer";

type AboutProps = {
    loading: boolean;
    validationSchemaForAbout: Yup.Schema;
    initialValuesForAbout: AboutDataType;
    handleChangeBio: (values, action) => void;
}

export const About: React.FC<AboutProps> = ({
                                                loading,
                                                validationSchemaForAbout,
                                                initialValuesForAbout,
                                                handleChangeBio
                                            }) => {
    return (
        <div className="about_item">
            <Formik
                initialValues={initialValuesForAbout}
                validationSchema={validationSchemaForAbout}
                onSubmit={handleChangeBio}
            >
                {({errors, touched}) =>
                    <Form className="form_field">
                        <PlainInput className="input_item input_field" id="nickname" labelValue="your nickname"
                                    name="nickname" placeholder="your nickname" message={errors.nickname}
                                    isTouched={touched.nickname}/>
                        <PlainInput className="input_item input_field" id="name" labelValue="name" name="name"
                                    placeholder="your name" message={errors.name} isTouched={touched.name}/>
                        <PlainInput className="input_item input_field" id="information" labelValue="bio"
                                    name="information"
                                    placeholder="bio" as="textarea" message={errors.information}
                                    isTouched={touched.information}/>
                        <button type="submit" disabled={loading}>{loading ?
                            <Loading size="32px" color="#fff"/> : 'apply'}</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}