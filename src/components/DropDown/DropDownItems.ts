export interface DropdownItem {
    label: string;
    items: string[];
}

export const DropdownItems: DropdownItem[] = [
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
];