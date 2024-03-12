import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/detail";
import { Search } from "./pages/search/search";
import { Error404 } from "./pages/Error404";

const Router = () => {
  return (
  <HashRouter>
    <Routes>
        <Route path="/*" element = {<Home />}/>
        <Route path="/*" element = {<Detail />}/>
        <Route path="/*" element = {<Search />}/>
        <Route path="/*" element = {<Error404 />}/>
    </Routes>
  </HashRouter>
  );
};

export default Router;