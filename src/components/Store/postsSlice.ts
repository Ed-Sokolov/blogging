import {createSlice} from '@reduxjs/toolkit';
import {PostType} from '../Types/post';
import {addNewPost, destroyPost, getPopularPosts, getPost, getPosts, updatePost} from "../api/AsyncPost";

const initialState = {
    posts: null as Array<PostType> | null,
    post: null as PostType | null,
    loading: false as boolean,
    error: false as boolean
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder): void => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.posts = action.payload;
            })
            .addCase(getPopularPosts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getPopularPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.posts = action.payload;
            })
            .addCase(getPost.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.post = action.payload;
            })
            .addCase(addNewPost.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.post = null;
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
            })
            .addCase(updatePost.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(updatePost.fulfilled, (state) => {
                state.loading = true;
                state.error = false;
                state.post = null;
            })
            .addCase(destroyPost.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(destroyPost.fulfilled, (state) => {
                state.loading = true;
                state.error = false;
                state.post = null;
            })
    }
})

export default postsSlice.reducer;