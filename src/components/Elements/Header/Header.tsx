import {NavLink} from 'react-router-dom';
import {CurrentPageType} from '../../Store/pagesSlice';
import {UseSvg} from '../UseSvg/UseSvg';
import {MainPart} from './MainPart';

type HeaderProps = {
    currentPage: CurrentPageType;
    isAuth: boolean;
    userId: number | null;
    userPhoto: string | null;
    handleLogout: () => void
}

export const Header: React.FC<HeaderProps> = ({ currentPage, isAuth, userId, userPhoto, handleLogout }) => {
    return (
        <header className={`header ${isAuth && 'auth_header'} ${currentPage === 'Others' && 'changed_header'}`}>
            {
                !isAuth ?
                    <div className="container">
                        <MainPart />
                    </div> :
                    <div className="container">
                        <div className="main_part">
                            <MainPart userId={userId} userPhoto={userPhoto} isAuth={isAuth} handleLogout={handleLogout} />
                        </div>
                        <div className="second_part">
                            <ul>
                                <li>
                                    <UseSvg spriteName='add_circle' className='add_circle' title='add new post'/>
                                </li>
                                <li><NavLink to="add-post" className="bottom_hover">Post</NavLink></li>
                            </ul>
                        </div>
                    </div>
                }
        </header>
    )
}