import { useContext } from "react"
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
        navigate(to='/login')
    }

  return (
    <aside
        className="flex w-64 flex-col border-r border-slate-200 dark:border-[#232948] bg-white dark:bg-[#111422] transition-all duration-300"
      >
        <div
          className="flex h-16 items-center justify-start gap-3 border-b border-slate-200 dark:border-[#232948] px-6"
        >
          <div
            className="flex items-center justify-center rounded-lg bg-primary p-1.5"
          >
            <span className="material-symbols-outlined text-white text-[20px]"
              >dns</span
            >
          </div>
          <h1
            className="text-lg font-bold tracking-tight text-slate-900 dark:text-white"
          >
            AdminPanel
          </h1>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <Link
            className="group flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary dark:text-white dark:bg-[#232948]"
            to="/dashboard"
          >
            <span
              className="material-symbols-outlined text-primary dark:text-primary-light"
              >dashboard</span
            >
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-[#929bc9] dark:hover:bg-[#232948] dark:hover:text-white transition-colors"
            to="/equipos"
          >
            <span
              className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-white"
              >computer</span
            >
            <span className="text-sm font-medium">Equipos</span>
          </Link>
          <Link
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-[#929bc9] dark:hover:bg-[#232948] dark:hover:text-white transition-colors"
            to="/tickets"
          >
            <span
              className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-white"
              >question_exchange</span
            >
            <span className="text-sm font-medium">Tickets</span>
            <span
              className="ml-auto rounded-full bg-danger/20 px-2 py-0.5 text-xs font-semibold text-danger"
              >3</span
            >
          </Link>
          <Link
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-[#929bc9] dark:hover:bg-[#232948] dark:hover:text-white transition-colors"
            to="/usuarios"
          >
            <span
              className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-white"
              >account_circle</span
            >
            <span className="text-sm font-medium">Usuarios</span>
          </Link>
          
        </nav>
        <div className="border-t border-slate-200 dark:border-[#232948] p-4">
          <Link
            className="flex items-center gap-3 rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-[#232948] hover:text-white cursor-pointer transition-colors" onClick={() =>(loguot())}
          >
            <span className="text-sm font-medium">Cerrar Sesion</span>
            <span
              className="material-symbols-outlined ml-auto text-slate-400 dark:text-[#929bc9]" onClick={logout}
              >logout</span
            >
          </Link>
        </div>
      </aside>
  )
}
