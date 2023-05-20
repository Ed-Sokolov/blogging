import {Form, Formik} from "formik";
import {SignPageType} from "../../../Containers/SignContainer/SignContainer";
import {PlainInput} from "../../../Elements/Inputs/PlainInput";
import {InformationPart} from "./InformationPart";
import {LoginType} from "../../../api/AsyncAuth";
import * as Yup from "yup";
import {Loading} from "../../../Elements/Loading/Loading";

type SignInPageType = {
    signInValues: LoginType;
    changePage: (value: SignPageType) => void;
    handleLogin: (value: LoginType, action: any) => void;
    validationSchemaForLogin: Yup.Schema;
    loading: boolean;
}

export const SignInPage: React.FC<SignInPageType> = ({
                                                         signInValues,
                                                         changePage,
                                                         handleLogin,
                                                         validationSchemaForLogin,
                                                         loading
                                                     }) => {
    return (
        <>
            <div className="first_page page">
                <Formik
                    initialValues={signInValues}
                    validationSchema={validationSchemaForLogin}
                    onSubmit={handleLogin}
                >
                    {({errors, touched}) =>
                        <Form className="form_field">
                            <PlainInput labelValue="nickname" id="nickname" name="nickname" placeholder="input nickname"
                                        message={errors.nickname}
                                        isTouched={touched.nickname}/>
                            <PlainInput labelValue="password" id="password" name="password" type="password"
                                        placeholder="input password" message={errors.password}
                                        isTouched={touched.password}/>
                            <button type="submit" disabled={loading}>{loading ?
                                <Loading size='36px' color='#fff'/> : 'sign in'}</button>
                        </Form>
                    }
                </Formik>
            </div>
            <InformationPart className="second_page page" moveName="sign up" moveTo="/sign-up"
                             phrase="nice to see you again buddy" svgTitle="move to sign up page"
                             changePage={changePage}
            />
        </>
    )
}