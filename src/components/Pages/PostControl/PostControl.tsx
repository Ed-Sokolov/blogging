import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {RemoveField} from "../../Elements/RemoveField/RemoveField";
import {UseSvg} from "../../Elements/UseSvg/UseSvg";
import {prevPage} from "../../Router/Functions";
import {PostType} from "../../Types/post";
import * as Yup from 'yup';
import {CustomErrorMessage} from "../../Elements/Inputs/CustomErrorMessage";
import {Loading} from "../../Elements/Loading/Loading";

type PostControlProps = {
    isEditPage: boolean;
    post?: PostType;
    addPost: (title: string, text: string, isOpenedComments: boolean, photo: File) => void;
    postEdit: (id: number, title: string, text: string, isOpenedComments: boolean, photo: File | null) => void;
    deletePost: (id: number) => void;
    loading: boolean;
    validationSchemaForStore: Yup.Schema;
    validationSchemaForUpdate: Yup.Schema;
}

export type MyFormikType = {
    title: string;
    text: string;
    photo: File | null;
    isOpenedComments: boolean;
}

export const PostControl: React.FC<PostControlProps> = ({
                                                            isEditPage,
                                                            post,
                                                            addPost,
                                                            postEdit,
                                                            deletePost,
                                                            loading,
                                                            validationSchemaForStore,
                                                            validationSchemaForUpdate
                                                        }) => {
    const navigate = useNavigate();

    const initialValues: MyFormikType = {
        title: isEditPage && post !== undefined ? post.title : '',
        text: isEditPage && post !== undefined ? post.text : '',
        photo: null,
        isOpenedComments: true,
    }

    const formik = useFormik({
        initialValues,
        validationSchema: isEditPage ? validationSchemaForUpdate : validationSchemaForStore,
        onSubmit: (values, action) => {
            if (isEditPage) {
                if (post) {
                    postEdit(post.id, values.title, values.text, values.isOpenedComments, values.photo);
                }
            } else {
                if (values.photo) {
                    addPost(values.title, values.text, values.isOpenedComments, values.photo);
                }
            }
            action.resetForm();
            action.setSubmitting(false);
        }
    })

    return (
        <div className="add_post_page">
            <div className="container">
                <div className="field">
                    <h2 className="title">{isEditPage ? 'edit post' : 'add post'}</h2>
                    <form onSubmit={formik.handleSubmit} encType="multipart/form-data" className="form_field">
                        <div className="input_field">
                            <label htmlFor="title">title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="input title"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                            <CustomErrorMessage message={formik.errors.title} isTouched={formik.touched.title}/>
                        </div>
                        <div className="input_field">
                            <label htmlFor="text">text</label>
                            <textarea
                                id="text"
                                name="text"
                                placeholder="input text"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.text}
                            />
                            <CustomErrorMessage message={formik.errors.text} isTouched={formik.touched.text}/>
                        </div>
                        <div className="input_field">
                            <label htmlFor="photo">image</label>
                            <div className="photo_upload">
                                <label className="custom_photo_upload bottom_hover"
                                       onClick={() => formik.setFieldTouched('photo')}>
                                    <UseSvg spriteName="camera" className="camera_icon"
                                            title="select photo for post"/>
                                    <input
                                        type="file"
                                        id="photo"
                                        name="photo"
                                        onBlur={formik.handleBlur}
                                        onChange={(e) => {
                                            formik.setFieldValue('photo', e.currentTarget.files && e.currentTarget.files[0])
                                            e.target.value = '';
                                        }}
                                    />
                                </label>
                                {formik.values.photo ?
                                    <div className="selected">
                                        <UseSvg spriteName="selected" className="icon"/>
                                        selected
                                        <button onClick={() => formik.setFieldValue('photo', null)}>cancel</button>
                                    </div> : <div className="unselected">
                                        <UseSvg spriteName="full_arrow_left" className="icon"/>
                                        {isEditPage ? 'change photo' : 'select photo'}
                                    </div>
                                }
                            </div>
                            <CustomErrorMessage message={formik.errors.photo} isTouched={formik.touched.photo}/>
                        </div>
                        <div className="checkbox_field">
                            <div className="checkbox_wrapper">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        id="is_opened"
                                        name="isOpenedComments"
                                        onChange={formik.handleChange}
                                        checked={formik.values.isOpenedComments}
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                            <p>opened comments</p>
                        </div>
                        <div className="buttons_field">
                            <button onClick={() => prevPage(navigate)}>cancel</button>
                            <button type="submit" disabled={loading}>{loading ?
                                <Loading size='32px' color='#fff'/> : isEditPage ? 'apply' : 'add'}
                            </button>
                        </div>
                    </form>
                    {
                        isEditPage && <div className="remove_field">
                            <RemoveField text="delete post"
                                         collback={() => post && deletePost(post.id)} loading={loading}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}