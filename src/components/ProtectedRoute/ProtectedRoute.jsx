import { useContext } from "react"
import { AuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
    
    const { user, loading } = useContext(AuthContext);

    if(loading) return <h2>Cargando sesion...</h2>

    if(!user?.isAuthenticated){
        return <Navigate to='/login' replace />
    }

  return children
}