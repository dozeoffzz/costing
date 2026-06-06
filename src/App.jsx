import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import DetailPage from "./pages/DetailPage";
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detailpage" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}
