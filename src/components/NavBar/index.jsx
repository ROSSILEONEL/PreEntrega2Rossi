
import './Navbar.css'
function NavBar(){
    return(
        <div className='div-navBar'>
            <span className='nav-logo'>Lazy-SB</span>
        <ul className='ul-navBar'>
            <li> <a className='nav-items' href="/Home"> Home</a></li>
            <li> <a className='nav-items' href="/Productos"> Productos</a></li>
            <li> <a className='nav-items' href="/Galeria"> Galeria</a></li>
            <li> <a className='nav-items' href="/Readers"> Readers</a></li>
            <li> <a className='nav-items' href="/Contacto"> Contacto</a></li>
        </ul>
        </div>
    );
}
export default NavBar;