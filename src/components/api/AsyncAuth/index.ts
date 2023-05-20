import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserType} from "../../Types/user";

export type LoginType = {
    'nickname': string;
    'password': string;
}

export type RegisterType = LoginType & {
    'email': string;
}

export const login = createAsyncThunk<UserType, LoginType, { rejectValue: any }>(
    'auth/login',
    async function (data, {rejectWithValue}) {
        const formData = new FormData();

        for (const name in data) {
            formData.append(name, data[name])
        }

        const response = await fetch('http://edsokolov-001-site1.atempurl.com/api/user/login', {
            method: 'POST',
            headers: {},
            body: formData
        })

        if (!response.ok) {
            const error = await response.json();
            return rejectWithValue(error);
        }

        const user = await response.json();

        const {token} = user;

        localStorage.setItem('token', token);

        return user as UserType;
    }
)

export const register = createAsyncThunk<boolean, RegisterType, { rejectValue: any }>(
    'auth/register',
    async function (data, {rejectWithValue}) {
        const formData = new FormData();

        for (const name in data) {
            formData.append(name, data[name])
        }

        const response = await fetch('http://edsokolov-001-site1.atempurl.com/api/user/register', {
            method: 'POST',
            headers: {},
            body: formData
        })

        if (!response.ok) {
            const error = await response.json();
            return rejectWithValue(error);
        }

        return true;
    }
)

export const checkAuthentication = createAsyncThunk<UserType, undefined, { rejectValue: string }>(
    'auth/checkAuth',
    async function (_, {rejectWithValue}) {
        const token = localStorage.getItem('token');

        if (!token) {
            return rejectWithValue('Token doesn\'t exist');
        }

        const response = await fetch('http://edsokolov-001-site1.atempurl.com/api/user/check-authentication', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            localStorage.removeItem('token');
            return rejectWithValue('Token doesn\'t exist');
        }

        return await response.json() as UserType;
    }
)

export const logoutUser = createAsyncThunk<undefined, undefined, { rejectValue: string }>(
    'auth/logoutUser',
    async function (_, {rejectWithValue}) {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                return rejectWithValue('Token doesn\'t exist');
            }

            const response = await fetch('http://edsokolov-001-site1.atempurl.com/api/user/logout', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            localStorage.removeItem('token');

            return await response.json();
        } catch (error) {
            return rejectWithValue('Token doesn\'t exist');
        }
    }
);