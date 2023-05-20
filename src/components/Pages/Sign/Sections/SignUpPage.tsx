import {Form, Formik} from "formik";
import {SignPageType} from "../../../Containers/SignContainer/SignContainer";
import {PlainInput} from "../../../Elements/Inputs/PlainInput";
import {InformationPart} from "./InformationPart";
import {RegisterType} from "../../../api/AsyncAuth";
import * as Yup from 'yup';
import {Loading} from "../../../Elements/Loading/Loading";

type SignUpPageType = {
    signUpValues: RegisterType;
    changePage: (value: SignPageType) => void;
    handleRegister: (value: RegisterType, action?: any) => void;
    validationSchemaForRegister: Yup.Schema;
    loading: boolean;
}

export const SignUpPage: React.FC<SignUpPageType> = ({
                                                         signUpValues,
                                                         changePage,
                                                         handleRegister,
                                                         validationSchemaForRegister,
                                                         loading
                                                     }) => {
    return (
        <>
            <InformationPart className="third_page page" moveName="sign in" moveTo="/sign-in"
                             phrase="this is blogging! i hope you will like it" svgTitle="move to sign in page"
                             changePage={changePage}
            >
                <div className="website_author">by Sokolov Eduard</div>
            </InformationPart>
            <div className="fourth_page page">
                <Formik
                    initialValues={signUpValues}
                    validationSchema={validationSchemaForRegister}
                    onSubmit={handleRegister}
                >
                    {({errors, touched, isValid}) =>
                        <Form className="form_field">
                            <PlainInput id="nickname" labelValue="nickname" name="nickname"
                                        placeholder="input nickname" message={errors.nickname}
                                        isTouched={touched.nickname}/>
                            <PlainInput id="email" labelValue="email" name="email" placeholder="input email"
                                        message={errors.email}
                                        isTouched={touched.email}/>
                            <PlainInput id="password" labelValue="password" name="password" type="password"
                                        placeholder="input password" message={errors.password}
                                        isTouched={touched.password}/>
                            <button type="submit" disabled={loading}>{loading ?
                                <Loading size='36px' color='#fff'/> : 'sign in'}</button>
                        </Form>
                    }
                </Formik>
            </div>
        </>
    )
}