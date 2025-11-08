import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
import AuthorLayout from "./layouts/AuthorLayout.jsx";
import DashboardPage from "./pages/Author/DashboardPage.jsx";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<PublicLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>
                    <Route element={<AuthorLayout/>}>
                      <Route path="/dashboard" element={<DashboardPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
