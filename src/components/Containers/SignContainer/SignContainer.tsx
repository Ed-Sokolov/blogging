import {ReactElement} from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {SignInPage} from "../../Pages/Sign/Sections/SignInPage";
import {SignUpPage} from "../../Pages/Sign/Sections/SignUpPage";
import {Sign} from "../../Pages/Sign/Sign";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {checkAuthentication, login, LoginType, register, RegisterType} from "../../api/AsyncAuth";
import {validationSchemaForLogin, validationSchemaForRegister} from "../../Validations";

export type SignPageType = '/sign-in' | '/sign-up';

export const SignContainer: React.FC = () => {
    const {loading, isAuth} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const pathname = useLocation().pathname as SignPageType;
    const navigate = useNavigate();

    const signInValues: LoginType = {
        nickname: '',
        password: '',
    }

    const signUpValues: RegisterType = {
        nickname: '',
        email: '',
        password: ''
    }

    const handleLogin = (value: LoginType, action) => {
        dispatch(login(value)).then(response => {
            if (response.meta.requestStatus === 'fulfilled') {
                action.resetForm();
                action.setSubmitting(false);
                navigate('/');
                dispatch(checkAuthentication());
            } else {
                action.setFieldError(response.payload.field, response.payload.message);
            }
        })
    }

    const handleRegister = (value: RegisterType, action?) => {
        dispatch(register(value)).then(response => {
            if (response.meta.requestStatus === 'fulfilled') {
                action.resetForm();
                action.setSubmitting(false);
                navigate('/sign-in');
            } else {
                action.setFieldError(response.payload.field, response.payload.message);
            }
        });
    }

    const changePage = (value: SignPageType): void => {
        navigate(value);
    }

    const SignPage: { [K in SignPageType]: ReactElement } = {
        "/sign-in": <SignInPage signInValues={signInValues} changePage={changePage} handleLogin={handleLogin}
                                validationSchemaForLogin={validationSchemaForLogin} loading={loading}/>,
        "/sign-up": <SignUpPage signUpValues={signUpValues} changePage={changePage} handleRegister={handleRegister}
                                validationSchemaForRegister={validationSchemaForRegister} loading={loading}/>
    }

    if (isAuth) {
        return <Navigate to={'/'} />
    }

    return (
        <Sign>
            {SignPage[pathname]}
        </Sign>
    )
}