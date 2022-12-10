import { createBrowserRouter, Navigate} from 'react-router-dom'
import JefeCarreraLayout from './pages/jefeCarrera/JefeCarreraLayout'
import Calendario from './pages/jefeCarrera/TablaMaterias/calendario/Calendario'
import Tabla from './pages/jefeCarrera/TablaMaterias/tabla/Tabla'
import TablaMaterias from './pages/jefeCarrera/TablaMaterias/TablaMaterias'
import Login from './views/login/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/jefe/:id',
        element: <JefeCarreraLayout />,
        children: [
            {
                path: "/jefe/:id/materias/",
                element: <TablaMaterias />,
                children: [
                    {
                        index: true,
                        // path: '/jefe/:id/materias/tabla',
                        element: <Tabla />
                    },
                    {
                        path: '/jefe/:id/materias/calendario',
                        element: <Calendario />
                    }
                ]
            }
        ]
    }
])

export default router