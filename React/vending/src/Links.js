import { NavLink } from 'react-router-dom';
import './Links.css'

const Links = () => {
    return (
        <div className='Home'>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/chips'>Chips</NavLink>
            <NavLink exact to='/drink'>Drinks</NavLink>
            <NavLink exact to='/candy'>Candy</NavLink>
        </div>
    )
}

export default Links;
