import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./pages/pageBase";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import UploadPage from "./pages/Upload";
import Player from "./pages/Player";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PageBase/> }>
                    <Route index element={ <Home/> }></Route>
                    <Route path="/favorites" element={ <Favorites/> }></Route>
                    <Route path="/upload" element={ <UploadPage/> }></Route>
                    <Route path="/:id" element={ <Player/> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;