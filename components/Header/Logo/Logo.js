import { Link } from 'react-router-dom'
import fevicon from '../../../assets/images/fevicon.png'
import Styles from './Logo.module.css'

function Logo(){
    return(
        <Link to="/">
        <div className={Styles.logoContainer}>      
            <img className={Styles.fevicon} src={fevicon} alt="HP"/>
            <span className={Styles.logoText}>Harsh Patel</span>
        </div>
        </Link>
    )
}

export default Logo