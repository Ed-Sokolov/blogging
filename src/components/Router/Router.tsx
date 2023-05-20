import {useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {useAppDispatch} from '../../hook';
import {PostControlContainer} from '../Containers/PostControlContainer/PostControlContainer';
import PostContainer from '../Containers/PostContainer/PostContainer';
import PostsContainer from '../Containers/PostsContainer/PostsContainer';
import MainPageContainer from '../Containers/MainContainer/MainPageContainer';
import {ProfileContainer} from '../Containers/ProfileContainer/ProfileContainer';
import {SettingContainer} from '../Containers/SettingContainer/SettingContainer';
import {SignContainer} from '../Containers/SignContainer/SignContainer';
import {setCurrentPage} from '../Store/pagesSlice';

export const Routing: React.FC = () => {
    let pathname = useLocation().pathname;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (pathname === '/') {
            dispatch(setCurrentPage('Main'));
        } else {
            dispatch(setCurrentPage('Others'));
        }
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" element={<MainPageContainer/>}/>
            <Route path="/sign-in" element={<SignContainer/>}/>
            <Route path="/sign-up" element={<SignContainer/>}/>
            <Route path="/posts" element={<PostsContainer/>}/>
            <Route path="/posts/:id" element={<PostContainer/>}/>
            <Route path="/add-post" element={<PostControlContainer/>}/>
            <Route path="/posts/:id/edit" element={<PostControlContainer isEditPage={true}/>}/>
            <Route path="/profile/:id" element={<ProfileContainer/>}/>
            <Route path="/profile" element={<ProfileContainer/>}/>
            <Route path="/profile/setting" element={<SettingContainer/>}/>
        </Routes>
    )
}