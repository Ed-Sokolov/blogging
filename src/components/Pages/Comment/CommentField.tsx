import {Form, Formik} from 'formik';
import {Loading} from "../../Elements/Loading/Loading";
import * as Yup from "yup";
import {PlainInput} from "../../Elements/Inputs/PlainInput";

type CommentFieldProps = {
    loading: boolean;
    validationSchemaForComment: Yup.Schema;
    values: { text: string };
    handleAddComment: (values: { text: string }, action: any) => void;
}

export const CommentField: React.FC<CommentFieldProps> = ({
                                                              loading,
                                                              validationSchemaForComment,
                                                              values,
                                                              handleAddComment
                                                          }) => {
    return (
        <Formik
            initialValues={values}
            validationSchema={validationSchemaForComment}
            onSubmit={handleAddComment}
        >
            {({errors, touched}) =>
                <Form className="add_comment">
                    {/*<Field as="textarea" name="text" placeholder="leave your comment"/>*/}
                    <PlainInput as="textarea" name="text" placeholder="leave your comment" isWithLabel={false}
                                message={errors.text} isTouched={touched.text}/>
                    <button type='submit' disabled={loading}>{loading ?
                        <Loading size="24px" color="#fff"/> : 'add'}</button>
                </Form>
            }
        </Formik>
    )
}