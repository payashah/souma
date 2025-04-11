import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DropdownState {
    dropdownItems: DropdownItems[];
    activeDropdown: string | null;
}

export interface DropdownItems {
    label: string;
    items: string[];
}

const initialState: DropdownState = {
    dropdownItems: [
        {
            label: 'خدمات',
            items: ["معاملات آنلاین", "بورس کالا", "معاملات آپشن"]
        },
        {
            label: 'سامانه های معاملاتی',
            items: ["مهر تریدر", "اپ موبایل"]
        },
        {
            label: 'خبرنامه',
            items: ["محتوای آموزشی", "اخبار", "مقالات"]
        },
        {
            label: 'آکادمی مهر',
            items: ["محتوای آموزشی", "اخبار", "مقالات"]
        },
        {
            label: 'ارتباط با ما',
            items: ["تیم ما", "تماس با ما"]
        },
        {
            label: 'درباره ما',
            items: ["آدرس", "دعوت به همکاری"]
        }
    ],
    activeDropdown: null,
};

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState,
    reducers: {
        setActiveDropdown(state, action: PayloadAction<string | null>) {
            state.activeDropdown = action.payload;
        },
    },
});

export const { setActiveDropdown } = dropdownSlice.actions
export default dropdownSlice.reducer