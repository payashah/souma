import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ContentItem {
    id?: string;
    fileContent?: string;
    title?: string;
    brief?: string;
    date?: string;
    views?: number;
    isPdf?: boolean;
    category?: string;
}

interface MehrTahlilState {
    data: ContentItem[];
    loading: boolean;
    error: string | null;
}

const initialState: MehrTahlilState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchMehrTahlil = createAsyncThunk('mehrTahlil/fetchData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'https://mehrapi.souma-p.ir/api/v1/Content/get-contents',
                {},
                { headers: { 'Content-Type': 'application/json' } }
            );
            return response.data.data.map((item: any) => ({
                id: item.id || '',
                title: item.title || 'بدون عنوان',
                brief: item.brief || 'بدون توضیحات',
                fileContent: item.fileContent || "بدون عکس",
                date: item.date || "1404-01-22",
                views: item.views || "بدون بازدید",
                isPdf: item.isPdf || "دارد",
                category: item.category || "خبر",
            }));
        } catch (err: any) {
            return rejectWithValue(err.message || 'خطا در دریافت داده‌ها');
        }
    }
);

const mehrTahlilSlice = createSlice({
    name: 'mehrAnalytics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMehrTahlil.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMehrTahlil.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMehrTahlil.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default mehrTahlilSlice.reducer;