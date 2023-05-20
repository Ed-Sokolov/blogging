import {useAppDispatch, useAppSelector} from "../../../hook"
import {Setting} from "../../Pages/Setting/Setting"
import {useEffect, useState} from "react";
import {changeBio, destroyUser, getUser, newAvatar, removeAvatar} from "../../api/AsyncUser";
import {validationSchemaForAbout, validationSchemaForAvatar} from "../../Validations";
import {useNavigate} from "react-router-dom";
import {checkAuthentication} from "../../api/AsyncAuth";

export type AboutDataType = {
    nickname: string;
    name: string | null;
    information: string | null;
}

export type AvatarType = {
    photo: File | null;
}

export type SettingNavType = 'avatar' | 'about you' | 'setups';

export const SettingContainer: React.FC = () => {
    const [settingNav, setSettingNav] = useState<SettingNavType>('avatar');
    const {user, authId, loading} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (authId !== null) {
            dispatch(getUser(Number(authId)));
        }
    }, [authId, dispatch]);

    const initialValuesForAbout: AboutDataType = {
        nickname: user?.nickname || '',
        name: user?.name || '',
        information: user?.information || ''
    }

    const initialValueForAvatar: AvatarType = {
        photo: null
    }

    const handleChangePhoto = (values, action) => {
        if (user !== null && user.id !== null) {
            const data = {
                id: user.id,
                data: values
            }
            dispatch(newAvatar(data));
            action.setSubmitting(false);
        }
    }

    const handleRemovePhoto = (id: number) => {
        dispatch(removeAvatar(id));
    }

    const handleChangeBio = (values, action) => {
        if (user !== null && user.id !== null) {
            const data = {
                id: user.id,
                data: values
            }
            dispatch(changeBio(data)).then(response => {
                if (response.meta.requestStatus === 'fulfilled') {
                    action.setSubmitting(false);
                } else {
                    action.setFieldError(response.payload.field, response.payload.message);
                }
            });
        }
    }

    const handleRemoveUser = (id: number) => {
        dispatch(destroyUser(id)).then(() => navigate('/')).then(() => dispatch(checkAuthentication()));
    }

    const changeSettingNav = (item: SettingNavType) => {
        setSettingNav(item);
    }

    return (
        <>
            {user && <Setting {...user} handleRemovePhoto={handleRemovePhoto} loading={loading}
                              validationSchemaForAbout={validationSchemaForAbout}
                              validationSchemaForAvatar={validationSchemaForAvatar}
                              initialValuesForAbout={initialValuesForAbout}
                              initialValueForAvatar={initialValueForAvatar}
                              handleChangePhoto={handleChangePhoto}
                              handleChangeBio={handleChangeBio}
                              handleRemoveUser={handleRemoveUser}
                              changeSettingNav={changeSettingNav}
                              settingNav={settingNav}
            />}
        </>
    )
}