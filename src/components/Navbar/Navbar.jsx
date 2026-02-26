import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = ({ isOpen, setIsOpen }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate((to = "/login"));
  };

  return (
    <aside
      className={`flex flex-col fixed inset-y-0 left-0 z-50 w-64 bg-[#111422] border-r border-[#232948] transform transition-transform duration-300 ease-in-out
      md:relative md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center justify-start gap-3 border-b border-slate-200 dark:border-[#232948] px-6">
        <div className="flex items-center justify-center rounded-lg bg-primary p-1.5">
          <span className="material-symbols-outlined text-white text-[20px]">
            dns
          </span>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          AdminPanel
        </h1>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
            isActive
              ? "bg-[#2b4bee] text-white shadow-lg shadow-blue-900/20" // Clases cuando ESTÁ activo
              : "text-[#929bc9] hover:bg-[#232948] hover:text-white"   // Clases cuando NO está activo
          }`
        }
        >
          <span className="material-symbols-outlined text-primary dark:text-primary-light">
            dashboard
          </span>
          <span className="text-sm font-medium">Dashboard</span>
        </NavLink>
        <NavLink
          to="/equipos"
          className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
            isActive
              ? "bg-[#2b4bee] text-white shadow-lg shadow-blue-900/20" // Clases cuando ESTÁ activo
              : "text-[#929bc9] hover:bg-[#232948] hover:text-white"   // Clases cuando NO está activo
          }`
        }
        >
          <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-white">
            computer
          </span>
          <span className="text-sm font-medium">Equipos</span>
        </NavLink>
        <NavLink
          to="/ticket"
          className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
            isActive
              ? "bg-[#2b4bee] text-white shadow-lg shadow-blue-900/20" // Clases cuando ESTÁ activo
              : "text-[#929bc9] hover:bg-[#232948] hover:text-white"   // Clases cuando NO está activo
          }`
        }
        >
          <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-white">
            question_exchange
          </span>
          <span className="text-sm font-medium">Tickets</span>
          
        </NavLink>
        
      </nav>
      <div className="mt-auto border-t border-slate-200 dark:border-[#232948] p-4">
        <NavLink
          className="flex items-center gap-3 rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-[#232948] hover:text-white cursor-pointer transition-colors"
          onClick={() => loguot()}
        >
          <span className="text-sm font-medium">Cerrar Sesion</span>
          <span
            className="material-symbols-outlined ml-auto text-slate-400 dark:text-[#929bc9]"
            onClick={logout}
          >
            logout
          </span>
        </NavLink>
      </div>
      <button
        className="md:hidden absolute top-4 right-4 text-white"
        onClick={() => setIsOpen(false)}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </aside>
  );
};
