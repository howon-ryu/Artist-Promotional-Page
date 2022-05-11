import AdminNavbar from "./AdminComponents/AdminNavbar";
import AdminHome from "./AdminComponents/AdminHome";
import AdminAbout from "./AdminComponents/AdminAbout";
import AdminLogin from "./AdminComponents/AdminLogin";
import AdminGallery from "./AdminComponents/AdminGallery";
import AdminContact from "./AdminComponents/AdminContact";
import AdminPainting from "./AdminComponents/AdminPainting";
import AdminSculpture from "./AdminComponents/AdminSculpture";
import Picupload from "./AdminComponents/Picupload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*관리자 페이지*/}
        <Route exact path="/" element={<AdminLogin />} />
        <Route exact path="/Adminabout" element={<AdminAbout />} />
        <Route exact path="/AdminGallery" element={<AdminPainting />} />
        <Route exact path="/Admincontact" element={<AdminContact />} />
        <Route exact path="/AdminPainting" element={<AdminPainting />} />
        <Route exact path="/AdminSculpture" element={<AdminSculpture />} />
        <Route exact path="/Picupload" element={<Picupload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
