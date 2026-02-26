import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { NewTicket } from "./pages/NewTicket/NewTicket";
import { Navbar } from "./components/Navbar/Navbar";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { TicketDetail } from "./features/tickets/components/TicketDetail";
import { EquipoList } from "./features/equipos/components/EquipoList";
import { PageNewEquipo } from "./pages/NewEquipo/PageNewEquipo";
import { ViewTickets } from "./pages/ViewTickets/ViewTickets";

const NotFound = () => <h2>Error 404: Aquí no hay nada</h2>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rutas que son publicas*/}
        <Route path="/login" element={<Login />} />

        {/*Rutas Protegidas */}
        <Route element={
          <ProtectedRoute>
            <MainLayout/>
          </ProtectedRoute>
        }>

          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="ticket" element={<ViewTickets />}/>
          <Route path="ticket/nuevo" element={<NewTicket/>}/>
          <Route path="ticket/detalle/:id" element={<TicketDetail/>} />
          <Route path="equipos" element={<EquipoList/>}/>
          <Route path="equipos/nuevo" element={<PageNewEquipo/>}/>
        </Route>
        

        {/* Ruta por defecto (Redirige al login si entras a la raíz) */}
        <Route path="/" element={<Login />} />

        {/* Ruta para manejar URLs que no existen */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
