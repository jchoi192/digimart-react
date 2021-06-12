import styles from './Header.module.css'
import { login, logout } from '../../services/firebase';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <div className={styles.Header}>

            <h2 className='logo'>DigiMart</h2>
            <ul>
            <Link to='/'>Home</Link>
            <Link to='/collection'>My Collection</Link>
            <Link to='/'>Search</Link>
                {
                    props.userState.user ? 
                    <>
                    <li>Welcome, {props.userState.user.displayName}</li>
                    <li style={{ textDecoration: 'none'}}>
                        <img 
                        style={{height: '2.8rem', borderRadius: '50%', textDecoration: 'none'}}
                        src={props.userState.user.photoURL} 
                        alt={props.userState.user.displayName}/>
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
  
    </div>
)

export default Header