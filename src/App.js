import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Nav from "./Nav";
function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      {/* <Nav /> */}
      {/* <Switch> */}
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
      {/* </Switch> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
