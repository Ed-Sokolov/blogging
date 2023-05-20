import {TopPostsContainer} from "../../Containers/TopPostsContainer/TopPostsContainer"
import {AboutAuthor} from "./AboutAuthor/AboutAuthor"
import {MainSlider} from "./MainSlider/MainSlider"

type MainPageProps = {
    isAuth: boolean;
    userName: string | null;
}

export const MainPage: React.FC<MainPageProps> = ({isAuth, userName}) => {
    return (
        <div className={`main ${isAuth && 'additional_margin'}`}>
            <MainSlider/>
            <AboutAuthor userName={userName}/>
            <TopPostsContainer/>
        </div>
    )
}