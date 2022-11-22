import { Route, Routes } from "react-router-dom";
import { Navbar, BottomNavbar, HomePage, GoToTop } from "./components";

const App = () => (
    <div className="youtube-app">
        <Navbar />
        <BottomNavbar />
        <GoToTop />

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    </div>
);

export default App;