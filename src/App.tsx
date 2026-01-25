import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef} from "react";
import { getTeachers } from "./services/teachers";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout";
import PrivateRoute from "./auth/PrivatRoute";
import type { Teacher } from "./pages/Teachers";

const TEACHERS_LIMIT = 4;

function App() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [lastKey, setLastKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isInitialLoad = useRef(false)

  const loadTeachers = async () => {
    setIsLoading(true);

    const data: Teacher[] = await getTeachers(TEACHERS_LIMIT, lastKey ?? undefined);

    setTeachers((prev) => [...prev, ...data]);

    if (data.length > 0) {
      setLastKey(data[data.length - 1].id);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (isInitialLoad.current) return;
    isInitialLoad.current = true;
    loadTeachers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={
          <Teachers 
          teachers={teachers}
          isLoading={isLoading}
          onLoadMore={loadTeachers}
        />
        } 
        />
        <Route path="/favorites" element={
          <PrivateRoute>
          <Favorites teachers={teachers}/>
          </PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
