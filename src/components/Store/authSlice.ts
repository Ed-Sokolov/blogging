import {createSlice} from '@reduxjs/toolkit';
import {UserType} from '../Types/user';
import {checkAuthentication, login, logoutUser, register} from "../api/AsyncAuth";
import {changeBio, destroyUser, getUser, newAvatar, removeAvatar} from "../api/AsyncUser";

const initialState = {
    user: null as UserType | null,
    authId: null as number | null,
    photo: null as string | null,
    authRole: null as string | null,
    authNickname: null as string | null,
    isAuth: false as boolean,
    loading: false as boolean,
    error: false as boolean,
    authLoading: false as boolean,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder): void => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.user = action.payload;
                state.authId = action.payload.id;
                state.photo = action.payload.photo;
                state.authRole = action.payload.role;
                state.authNickname = action.payload.nickname;
                state.isAuth = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(register.fulfilled, (state) => {
                state.loading = false;
                state.error = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(checkAuthentication.pending, (state, action) => {
                state.authLoading = true;
                state.error = false;
                state.isAuth = false;
            })
            .addCase(checkAuthentication.fulfilled, (state, action) => {
                state.error = false;
                state.user = action.payload;
                state.authLoading = false;
                state.authId = action.payload.id;
                state.photo = action.payload.photo;
                state.authRole = action.payload.role;
                state.authNickname = action.payload.nickname;
                state.isAuth = true;
            })
            .addCase(checkAuthentication.rejected, (state, action) => {
                state.authLoading = false;
                state.error = true;
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.error = false;
                state.isAuth = false;
                state.authId = null;
                state.photo = null;
                state.authRole = null;
                state.authNickname = null;
            })
            .addCase(logoutUser.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.user = action.payload;
            })
            .addCase(changeBio.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(changeBio.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.user = action.payload;
            })
            .addCase(changeBio.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(newAvatar.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(newAvatar.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.user = action.payload;
                state.photo = action.payload.photo;
            })
            .addCase(newAvatar.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(removeAvatar.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(removeAvatar.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.user = action.payload;
                state.photo = action.payload.photo;
            })
            .addCase(removeAvatar.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(destroyUser.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(destroyUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.user = null;
            })
            .addCase(destroyUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export default authSlice.reducer;