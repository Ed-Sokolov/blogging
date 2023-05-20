import {createSlice} from '@reduxjs/toolkit';
import {CommentType} from '../Types/comment';
import {addComment, destroyComment, getComments} from "../api/AsyncComment";

const initialState = {
    comments: [] as Array<CommentType>,
    loading: false as boolean,
    error: false as boolean
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder): void => {
        builder
            .addCase(getComments.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.comments = action.payload;
            })
            .addCase(addComment.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addComment.fulfilled, (state) => {
                state.loading = false;
                state.error = false;
            })
            .addCase(destroyComment.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(destroyComment.fulfilled, (state) => {
                state.loading = false;
                state.error = false;
            })
    }
})

export default commentsSlice.reducer;