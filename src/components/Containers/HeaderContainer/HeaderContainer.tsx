import {useAppDispatch, useAppSelector} from "../../../hook";
import {Header} from "../../Elements/Header/Header";
import {checkAuthentication, logoutUser} from "../../api/AsyncAuth";
import {useNavigate} from "react-router-dom";

const HeaderContainer = () => {
    const currentPage = useAppSelector(state => state.pages.currentPage);
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const {authId, photo: userPhoto} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser()).then(() => navigate(`/`)).then(() => dispatch(checkAuthentication()));
    }

    return (
        <Header
            currentPage={currentPage}
            isAuth={isAuth}
            userId={authId}
            userPhoto={userPhoto}
            handleLogout={handleLogout}/>
    )
}

export default HeaderContainer;