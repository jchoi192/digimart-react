import styles from './Header.module.css'
import { login, logout } from '../../services/firebase';

const Header = () => (
    <div className={styles.Header}>
        <nav>
            <h2 className='logo'>DigiMart</h2>
            <a href="">Search</a>
            <a href="">My Collection</a>
            <li
                className={styles.auth}
                onClick={login}
                >Login</li>
            <li
                className={styles.auth}
                onClick={logout}
                >Logout</li>
        </nav>    
    </div>
)

export default Header