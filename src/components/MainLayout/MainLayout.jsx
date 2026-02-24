import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'

export const MainLayout = () => {
  return (
    <div className="relative flex h-screen w-full overflow-hidden">
        <Navbar/>
        <main className="flex flex-1 flex-col h-full overflow-hidden">
            <Outlet/>
        </main>
    </div>
  )
}
