import { Outlet } from 'react-router-dom'
import Nav from '../../views/nav/Nav'
import './jefeCarrera.css'

export default function JefeCarreraLayout() {
    return (
        <div className='jefe-carrera'>
            <Nav/>
            <Outlet/>
        </div>
    )
}