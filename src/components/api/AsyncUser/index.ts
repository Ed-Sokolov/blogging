import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserType} from "../../Types/user";
import {AboutDataType} from "../../Containers/SettingContainer/SettingContainer";

export const getUser = createAsyncThunk<UserType, number, { rejectValue: string }>(
    'user/getUser',
    async function (id, {rejectWithValue}) {
        const response = await fetch(`https://edsokolov-001-site1.atempurl.com/api/User/${id}`)

        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        return await response.json();
    }
)

export const changeBio = createAsyncThunk<UserType, {id: number, data: AboutDataType}, { rejectValue: any }>(
    'user/changeAbout',
    async function ({id, data}, {rejectWithValue}) {
        const formData = new FormData();

        for (const name in data) {
            formData.append(name, data[name])
        }

        const response = await fetch(`https://edsokolov-001-site1.atempurl.com/api/User/${id}/about`, {
            method: 'POST',
            headers: {},
            body: formData
        })

        if (!response.ok) {
            const error = await response.json();
            return rejectWithValue(error);
        }

        return await response.json();
    }
)

export const newAvatar = createAsyncThunk<UserType, {id: number, data: AboutDataType}, { rejectValue: any }>(
    'user/newAvatar',
    async function ({id, data}, {rejectWithValue}) {
        const formData = new FormData();

        for (const name in data) {
            formData.append(name, data[name])
        }

        const response = await fetch(`https://edsokolov-001-site1.atempurl.com/api/User/${id}/avatar`, {
            method: 'POST',
            headers: {},
            body: formData
        })

        if (!response.ok) {
            const error = await response.json();
            return rejectWithValue(error);
        }

        return await response.json();
    }
)

export const removeAvatar = createAsyncThunk<UserType, number, { rejectValue: any }>(
    'user/deleteAvatar',
    async function (id, {rejectWithValue}) {

        const response = await fetch(`https://edsokolov-001-site1.atempurl.com/api/User/${id}/avatar`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            const error = await response.json();
            return rejectWithValue(error);
        }

        return await response.json();
    }
)

export const destroyUser = createAsyncThunk<undefined, number, { rejectValue: any }>(
    'user/destroyUser',
    async function (id, {rejectWithValue}) {

        const response = await fetch(`https://edsokolov-001-site1.atempurl.com/api/User/${id}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            const error = await response.json();
            return rejectWithValue(error);
        }

        return await response.json();
    }
)