import {Navigate} from 'react-router'
import { useAuth } from '../hooks/useAuth'

function ProtectedRoute({children}) {

    const {user} = useAuth()

    if (!user) {
        return <Navigate to="/login" replace/>
    }

    return children
}

export default ProtectedRoute