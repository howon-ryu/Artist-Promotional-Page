import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Painting from "./Components/Painting";
import Sculpture from "./Components/Sculpture";
import All from "./Components/All";
import PaintingDetails1 from "./Components/PaintingDetails1";
import PaintingDetails2 from "./Components/PaintingDetails2";
import PaintingDetails3 from "./Components/PaintingDetails3";
import PaintingDetails4 from "./Components/PaintingDetails4";
import PaintingDetails5 from "./Components/PaintingDetails5";
import PaintingDetails6 from "./Components/PaintingDetails6";
import PaintingDetails7 from "./Components/PaintingDetails7";
import PaintingDetails8 from "./Components/PaintingDetails8";
import SculptureDetails1 from "./Components/SculptureDetails1";
import SculptureDetails2 from "./Components/SculptureDetails2";
import SculptureDetails3 from "./Components/SculptureDetails3";
import SculptureDetails4 from "./Components/SculptureDetails4";
import SculptureDetails5 from "./Components/SculptureDetails5";
import SculptureDetails6 from "./Components/SculptureDetails6";
import SculptureDetails7 from "./Components/SculptureDetails7";
import SculptureDetails8 from "./Components/SculptureDetails8";
import AllDetails1 from "./Components/AllDetails1";
import AllDetails2 from "./Components/AllDetails2";
import AllDetails3 from "./Components/AllDetails3";
import AllDetails4 from "./Components/AllDetails4";
import AllDetails5 from "./Components/AllDetails5";
import AllDetails6 from "./Components/AllDetails6";
import AllDetails7 from "./Components/AllDetails7";
import AllDetails8 from "./Components/AllDetails8";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*유저 페이지*/}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Gallery" element={<All />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/Painting" element={<Painting />} />
        <Route exact path="/Painting/1" element={<PaintingDetails1 />} />
        <Route exact path="/Painting/2" element={<PaintingDetails2 />} />
        <Route exact path="/Painting/3" element={<PaintingDetails3 />} />
        <Route exact path="/Painting/4" element={<PaintingDetails4 />} />
        <Route exact path="/Painting/5" element={<PaintingDetails5 />} />
        <Route exact path="/Painting/6" element={<PaintingDetails6 />} />
        <Route exact path="/Painting/7" element={<PaintingDetails7 />} />
        <Route exact path="/Painting/8" element={<PaintingDetails8 />} />
        <Route exact path="/Sculpture" element={<Sculpture />} />
        <Route exact path="/Sculpture/1" element={<SculptureDetails1 />} />
        <Route exact path="/Sculpture/2" element={<SculptureDetails2 />} />
        <Route exact path="/Sculpture/3" element={<SculptureDetails3 />} />
        <Route exact path="/Sculpture/4" element={<SculptureDetails4 />} />
        <Route exact path="/Sculpture/5" element={<SculptureDetails5 />} />
        <Route exact path="/Sculpture/6" element={<SculptureDetails6 />} />
        <Route exact path="/Sculpture/7" element={<SculptureDetails7 />} />
        <Route exact path="/Sculpture/8" element={<SculptureDetails8 />} />
        <Route exact path="/All" element={<All />} />
        <Route exact path="/All/1" element={<AllDetails1 />} />
        <Route exact path="/All/2" element={<AllDetails2 />} />
        <Route exact path="/All/3" element={<AllDetails3 />} />
        <Route exact path="/All/4" element={<AllDetails4 />} />
        <Route exact path="/All/5" element={<AllDetails5 />} />
        <Route exact path="/All/6" element={<AllDetails6 />} />
        <Route exact path="/All/7" element={<AllDetails7 />} />
        <Route exact path="/All/8" element={<AllDetails8 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
