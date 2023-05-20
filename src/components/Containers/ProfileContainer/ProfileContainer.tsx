import {useAppDispatch, useAppSelector} from "../../../hook";
import {Profile} from "../../Pages/Profile/Profile";
import {getUser} from "../../api/AsyncUser";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {Loading} from "../../Elements/Loading/Loading";

export const ProfileContainer: React.FC = () => {
    const {user, loading, error, authId} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getUser(Number(id)));
    }, [dispatch, id]);

    return (
        <>
            {loading ? <Loading/> : <Profile user={user} authId={authId}/>}
        </>
    )
}