import { Route, Routes } from "react-router-dom";
import { Navbar, BottomNavbar, HomePage, GoToTop, ErrorPage } from "./components";

const App = () => (
    <div className="youtube-app">
        <Navbar />
        <BottomNavbar />
        <GoToTop />

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    </div>
);

export default App;