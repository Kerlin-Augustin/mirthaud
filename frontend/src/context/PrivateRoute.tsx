import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'

const PrivateRoute = () => {
  const { accessToken } = useAuth()

  return accessToken ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
