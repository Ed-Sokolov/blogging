import {Routing} from './components/Router/Router';
import HeaderContainer from './components/Containers/HeaderContainer/HeaderContainer';
import {Footer} from './components/Elements/Footer/Footer';
import {useLocation} from 'react-router-dom';
import './App.scss';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hook";
import {checkAuthentication} from "./components/api/AsyncAuth";
import {Loading} from "./components/Elements/Loading/Loading";

function App() {
    const {authLoading} = useAppSelector(state => state.auth);
    let pathname = useLocation().pathname;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(checkAuthentication());
    }, [dispatch]);

    const isShowElements = pathname !== "/sign-in" && pathname !== "/sign-up";

    return (
        <div className='app'>
            {
                authLoading ? <Loading/> :
                    <>
                        {isShowElements && <HeaderContainer/>}
                        <div className="content">
                            <Routing/>
                        </div>
                        {isShowElements && <Footer/>}
                    </>
            }
        </div>
    );
}

export default App;