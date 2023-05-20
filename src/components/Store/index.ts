import {configureStore} from "@reduxjs/toolkit";
import pagesReducer from './pagesSlice';
import authReducer from './authSlice';
import postsReducer from './postsSlice';
import commentsReducer from './commentsSlice';

const store = configureStore({
    reducer: {
        pages: pagesReducer,
        auth: authReducer,
        posts: postsReducer,
        comments: commentsReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;