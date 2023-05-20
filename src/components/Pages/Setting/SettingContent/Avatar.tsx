import {useFormik} from "formik";
import {RemoveField} from "../../../Elements/RemoveField/RemoveField";
import {UseSvg} from "../../../Elements/UseSvg/UseSvg";
import {Loading} from "../../../Elements/Loading/Loading";
import * as Yup from "yup";
import {AvatarType} from "../../../Containers/SettingContainer/SettingContainer";
import {CustomErrorMessage} from "../../../Elements/Inputs/CustomErrorMessage";

type AvatarPropsType = {
    photo: string | null;
    handleRemovePhoto: (id: number) => void;
    loading: boolean;
    validationSchemaForAvatar: Yup.Schema;
    userId: number | null;
    initialValueForAvatar: AvatarType;
    handleChangePhoto: (values, action) => void;
}

export const Avatar: React.FC<AvatarPropsType> = ({
                                                      photo,
                                                      userId,
                                                      handleRemovePhoto,
                                                      loading,
                                                      validationSchemaForAvatar,
                                                      initialValueForAvatar,
                                                      handleChangePhoto
                                                  }) => {
    const formik = useFormik({
        initialValues: initialValueForAvatar,
        validationSchema: validationSchemaForAvatar,
        onSubmit: (values, action) => {
            handleChangePhoto(values, action)
        }
    })

    const removePhoto = (id: number | null) => {
        if (id !== null) {
            handleRemovePhoto(id)
        }
    }

    return (
        <div className="avatar_item">
            <div className="user_photo">
                <div className="background">
                    <div className="first_layout"></div>
                    <div className="second_layout"></div>
                </div>
                <div className="photo">
                    {photo ?
                        <img src={photo} alt="user photo"/> :
                        <UseSvg spriteName="user_icon_default" className="user_icon_default"
                                title="default user photo"/>
                    }
                </div>
            </div>
            <div className="photo_operations">
                <div className="change_photo">
                    <form encType="multipart/form-data">
                        <label className="custom_upload">
                            <CustomErrorMessage message={formik.errors.photo} isTouched={formik.touched.photo}/>
                            <div className={`as_btn ${loading ? 'disabled' : ''}`}
                                 onClick={() => formik.setFieldTouched('photo')}>{loading ?
                                <Loading size="32px" color="#fff"/> : 'change'}</div>
                            <input
                                type="file"
                                name="photo"
                                onBlur={formik.handleBlur}
                                onChange={(e) => {
                                    if(e.currentTarget.files) {
                                        formik.setFieldValue('photo', e.currentTarget.files[0]);
                                        e.target.value = '';
                                        formik.validateForm().then(() => {
                                            formik.handleSubmit();
                                        });
                                    }
                                }}
                            />
                        </label>
                    </form>
                </div>
                <RemoveField text="remove" collback={() => removePhoto(userId)} loading={loading}/>
            </div>
        </div>
    )
}