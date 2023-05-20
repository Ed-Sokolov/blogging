import {useAppSelector} from "../../../hook";
import {MainPage} from "../../Pages/Main/MainPage";

const MainPageContainer: React.FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const {authNickname: userName} = useAppSelector(state => state.auth);

    return (
        <MainPage isAuth={isAuth} userName={userName}/>
    )
}

export default MainPageContainer;