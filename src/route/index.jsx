import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ListaProdutos } from "../componentes/listaprodutos";
import { Login } from "../pages/Login";
import { Carrinho } from "../pages/Carrinho";

export function RouteApp() {
    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produto" element={<ListaProdutos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    );
}