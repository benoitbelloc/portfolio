import { Route, Routes } from "react-router-dom";
import Certifications from "../component/certifications";
import Home from "../component/home";
import Skills from "../component/skills";
import Experiences from "../component/experiences";
import Contact from "../component/contact";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}