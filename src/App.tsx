import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import MehrTahlil from "./sections/Yahlil/MehrTahlil";
import MehrAmuz from "./sections/Amuz/MehrAmuz";
import Form from "./Forms/Form";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div >
      {loading ? (
        <p>در حال بارگذاری...</p>
      ) : (
        <>
          <Header />

          <div>
            <MehrTahlil />
            <MehrAmuz />
          </div>

        </>
      )}
    </div>
  );
}

export default App;
