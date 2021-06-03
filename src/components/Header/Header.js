import styles from './Header.module.css'

const Header = () => (
    <div className={styles.Header}>
        <nav>
            <h2 className='logo'>DigiMart</h2>
            <a href="">Search</a>
            <a href="">My Collection</a>
            <a href="">Account</a>
        </nav>    
    </div>
)

export default Header