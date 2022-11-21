import { Route, Routes } from "react-router-dom";
import { Navbar, BottomNavbar } from "./components";

const App = () => (
    <div className="youtube-app">
        <Navbar />
        <BottomNavbar />

        <Routes>
        </Routes>
    </div>
);

export default App;