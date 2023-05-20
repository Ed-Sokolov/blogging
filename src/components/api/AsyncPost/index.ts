import {createAsyncThunk} from "@reduxjs/toolkit";
import {PostType} from "../../Types/post";
import {MyFormikType} from "../../Pages/PostControl/PostControl";

type AddPostType = MyFormikType & { authorId: number };

type UpdatePostType = AddPostType & { postId: number };

export const getPosts = createAsyncThunk<PostType[], undefined, { rejectValue: string }>(
    'posts/getPosts',
    async function (_, {rejectWithValue}) {
        const response = await fetch('http://edsokolov-001-site1.atempurl.com/api/Posts');

        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        return await response.json() as PostType[];
    }
)

export const getPopularPosts = createAsyncThunk<PostType[], undefined, { rejectValue: string }>(
    'posts/getPopularPosts',
    async function (_, {rejectWithValue}) {
        const response = await fetch('http://edsokolov-001-site1.atempurl.com/api/Posts/popular');

        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        return await response.json() as PostType[];
    }
)

export const getPost = createAsyncThunk<PostType, number, { rejectValue: string }>(
    'posts/getPost',
    async function (id, {rejectWithValue}) {
        const response = await fetch(`http://edsokolov-001-site1.atempurl.com/api/Posts/${id}`);

        if (!response.ok) {
            return rejectWithValue('Can\'t add task. Server Error!');
        }

        return await response.json();
    }
)

export const addNewPost = createAsyncThunk<number, AddPostType, { rejectValue: string }>(
    'posts/addNewPost',
    async function (data, {rejectWithValue}) {
        const formData = new FormData();

        for (const name in data) {
            formData.append(name, data[name])
        }

        const response = await fetch('http://edsokolov-001-site1.atempurl.com/api/Posts', {
            method: 'POST',
            headers: {},
            body: formData
        })

        if (!response.ok) {
            return rejectWithValue('Can\'t add new article. Server Error!');
        }

        return await response.json();
    }
)

export const updatePost = createAsyncThunk<number, UpdatePostType, { rejectValue: string }>(
    'posts/updatePost',
    async function (data, {rejectWithValue}) {
        const formData = new FormData();

        console.log(data);

        for (const name in data) {
            formData.append(name, data[name])
        }

        const response = await fetch(`http://edsokolov-001-site1.atempurl.com/api/Posts/${data.postId}/edit`, {
            method: 'PATCH',
            headers: {},
            body: formData
        })

        if (!response.ok) {
            return rejectWithValue('Can\'t update article. Server Error!');
        }

        return await response.json();
    }
)

export const destroyPost = createAsyncThunk<number, number, { rejectValue: string }>(
    'posts/destroyPost',
    async function (postId, {rejectWithValue}) {
        const response = await fetch(`http://edsokolov-001-site1.atempurl.com/api/Posts/${postId}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return rejectWithValue('Can\'t delete article. Server Error!');
        }

        return await response.json();
    }
)