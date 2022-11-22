import { Route, Routes } from "react-router-dom";
import { Navbar, BottomNavbar, HomePage } from "./components";

const App = () => (
    <div className="youtube-app">
        <Navbar />
        <BottomNavbar />

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    </div>
);

export default App;