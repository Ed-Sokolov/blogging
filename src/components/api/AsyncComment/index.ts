import {createAsyncThunk} from "@reduxjs/toolkit";
import {CommentFormType, CommentType} from "../../Types/comment";

export const getComments = createAsyncThunk<CommentType[], number, { rejectValue: string }> (
    'comments/getComments',
    async function (articleId, {rejectWithValue}) {
        const response = await fetch(`http://edsokolov-001-site1.atempurl.com/api/Comments/${articleId}`);

        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        return await response.json();
    }
)

export const addComment = createAsyncThunk<number, CommentFormType, {rejectValue: string}>(
    'comments/addComment',
    async function (data, {rejectWithValue}) {
        const formData = new FormData();

        for (const name in data) {
            formData.append(name, data[name]);
        }

        const response = await fetch('http://edsokolov-001-site1.atempurl.com/api/Comments', {
            method: 'POST',
            body: formData
        })

        if (!response.ok) {
            return rejectWithValue('Can\'t add new comment. Server Error!');
        }

        return await response.json();
    }
)

export const destroyComment = createAsyncThunk<number, number, { rejectValue: string }>(
    'comments/destroyComment',
    async function (commentId, {rejectWithValue}) {
        const response = await fetch(`http://edsokolov-001-site1.atempurl.com/api/Comments/${commentId}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return rejectWithValue('Can\'t delete comment. Server Error!');
        }

        return await response.json();
    }
)
