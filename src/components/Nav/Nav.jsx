import SearchBar from "./SearchBar";
import style from './Nav.module.css';
import logo from '../img/Rm_logo1.svg';
import { Link } from "react-router-dom";

const Nav = ({onSearch})=>{

    return(
        <div className={style.nav}>
            <img src={logo} alt="logo" className={style.logo}/>
            <h1 className={style.titulo}>Rick And Morty Fan Page</h1>
            <Link to={'/home'}>Home</Link>
            <Link to={'/caracter'}>Caracter</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/login'}>Login</Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    );
}

export default Nav;