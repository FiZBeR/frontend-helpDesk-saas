import { Outlet, Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <Navbar/>
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Panel de Control
          </h2>
          <Link to="/ticket/nuevo" className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-600/20 whitespace-nowrap">
            Creat Ticket
          </Link>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
