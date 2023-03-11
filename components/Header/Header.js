import Logo from "./Logo/Logo";
import NavItems from "./NavItems/NavItems";
import Styles from './Header.module.css'
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className={Styles.headerContainer}>
                <div className={Styles.navbar}>
                    <Logo/>
                    <NavItems/>
                </div>
            </div>
    )
}

export default Header;