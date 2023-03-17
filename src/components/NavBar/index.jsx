
import './Navbar.css'
import '../CardWidget'
import CardWidget from '../CardWidget';
function NavBar(){
    return(
        <div className='div-navBar'>
            <ul className='ul-navBar'>
                <li> <a className='nav-items' href="/Home"> Home</a></li>
                <li> <a className='nav-items' href="/Productos"> Productos</a></li>
                <li> <a className='nav-items' href="/Galeria"> Galeria</a></li>
                <li> <a className='nav-items' href="/Readers"> Readers</a></li>
                <li> <a className='nav-items' href="/Contacto"> Contacto</a></li>
            </ul>
          
            <CardWidget />
        </div>
    );}
export default NavBar;