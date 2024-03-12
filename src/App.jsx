import { Routes, Route } from "react-router-dom";
import generalStyles from "./assets/styles/generalStyles.module.css";
import {
    CartPage,
    Home,
    LoginPage,
    ProductPage,
    PurchasesPage,
    RegisterPage,
    UserPage,
} from "./pages";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <NavBar />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/user" element={<UserPage />} />
                        <Route path="/purchases" element={<PurchasesPage />} />
                        <Route element={<CartPage />} />
                    </Route>
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
