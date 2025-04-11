import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ContentCard from "./components/ContentCard/ContentCard";
import MehrAmuz from "./sections/Amuz/MehrAmuz";

interface ContentItem {
  id: number;
  title: string;
  summary: string;
  // هر چیز دیگه‌ای که لازمه می‌تونی اضافه کنی مثل imageUrl, date, category و ...
}

const mockData: ContentItem[] = [
  {
    id: 1,
    title: "توسعه پایدار چیست؟",
    summary:
      "توسعه پایدار نوعی توسعه است که نیازهای حال حاضر را بدون به خطر انداختن توانایی نسل‌های آینده برای تأمین نیازهای خود، برآورده می‌کند.",
  },
  {
    id: 2,
    title: "آلودگی هوا",
    summary:
      "یکی از مهم‌ترین مشکلات زیست‌محیطی، آلودگی هوا است که سلامت انسان و محیط زیست را تهدید می‌کند.",
  },
  {
    id: 3,
    title: "حفاظت از منابع طبیعی",
    summary: "مدیریت صحیح منابع طبیعی برای آینده‌ای پایدار ضروری است.",
  },
];

function App() {
  const [data, setData] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // به‌جای axios، از داده‌های فرضی استفاده کن
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 500); // یه تأخیر کوچیک برای شبیه‌سازی لود شدن
  }, []);

  return (
    <div >
      {loading ? (
        <p>در حال بارگذاری...</p>
      ) : (
        <>
          <Header />
          <MehrAmuz />
          {/* {data.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
          ))} */}
        </>
      )}
    </div>
  );
}

export default App;
