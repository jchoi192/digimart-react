import styles from './Header.module.css'
import { login, logout } from '../../services/firebase';

const Header = (props) => (
    <div className={styles.Header}>
        <nav>
            <h2 className='logo'>DigiMart</h2>
            <a href="/home">Home</a>
            <a href="/search">Search</a>
            <a href="/mycollection">My Collection</a>
            <ul>
                {
                    props.user ? 
                    <>
                    <li>Welcome, {props.user.displayName}</li>
                    <li style={{ textDecoration: 'none'}}>
                        <img 
                        style={{height: '2.8rem', borderRadius: '50%', textDecoration: 'none'}}
                        src={props.user.photoURL} 
                        alt={props.user.displayName}/>
                    </li>
                    <li
                        className={styles.auth}
                        onClick={logout}>
                    Logout</li>
                </>
                :
                <li
                    className={styles.auth}
                    onClick={login}
                    >Login</li>
                }
                </ul>
        </nav>    
    </div>
)

export default Header