import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CurrentPageType = 'Main' | 'Others';

type PagesState = {
    currentPage: CurrentPageType;
}

const initialState: PagesState = {
    currentPage: 'Main'
}

const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<CurrentPageType>) {
            state.currentPage = action.payload;
        }
    }
})

export const {setCurrentPage} = pagesSlice.actions;

export default pagesSlice.reducer;