import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './MainPage.css'
import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'

const MainPage = (props) => (
<div>
    <Header userState={props.userState} />
    <div className='body'>
        <div className='TopSection'>
            <div className='LeftPanel'>
                <div className='LeftWords'>
                    <h1>Collect DigiMart</h1>
                    <h1>Digital Artworks</h1>
                </div>
                <div className='LeftButtons'>
                    <button className='Link'>
                        <Link to='/form'>Create</Link>
                    </button>
                    <button className='Link'>
                        <Link to='/market'>Explore</Link>
                    </button>
                </div>
            </div>
            <img className='MainImage'
                src="https://ipfs.pixura.io/ipfs/QmXrWGjnBM9ztcLujpsNvEYCarinB2GFdtx1iaMuXLEeS9"
                alt="" />
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img className='Main-CardImage'
                        src='https://cdn.shopify.com/s/files/1/0073/1322/7849/products/IMG_0055.jpg?v=1556448892'
                        alt="" />
                    <div className={styles.CardWords}>
                        <h3 className={styles.title}>
                            Punk Mona Lisa
                        </h3>
                        <div className={styles.priceCategory}>
                            <div className={styles.price}>
                                <div>1.1 eth</div>
                                <div className={styles.subtitle}>List Price </div>
                            </div>
                            <div className={styles.category}>
                                <div>Art</div>
                                <div className={styles.subtitle}>Category</div>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <div style={{display:'flex', flexWrap:'wrap'}}>The cooler Mona</div>
                            <div className={styles.subtitle}>Description</div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <img className={styles.Image2}
                        src="https://defirepublic.com/wp-content/uploads/2020/03/erc-1155-token-its-good-to-be-the-king-doge-nft-1200x900.png"
                        alt="" />
                    <div className={styles.CardWords}>
                        <h3 className={styles.title}>
                            Doge King
                        </h3>
                        <div className={styles.priceCategory}>
                            <div className={styles.price}>
                                <div>0.2 eth</div>
                                <div className={styles.subtitle}>List Price </div>
                            </div>
                            <div className={styles.category}>
                                <div>Miscellaneous</div>
                                <div className={styles.subtitle}>Category</div>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <div style={{display:'flex', flexWrap:'wrap'}}>Shiba: King of Coins</div>
                            <div className={styles.subtitle}>Description</div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <img className={styles.Image3}
                        src="https://static.highsnobiety.com/thumbor/hvhFGevmc0JFfrNOctuvTLpHfhs=/1200x720/static.highsnobiety.com/wp-content/uploads/2021/03/24115833/nba-nft-feature.jpg"
                        alt="" />
                    <div className={styles.CardWords}>
                        <h3 className={styles.title}>
                            Stephan Curry: 3-pointer
                        </h3>
                        <div className={styles.priceCategory}>
                            <div className={styles.price}>
                                <div>2 eth</div>
                                <div className={styles.subtitle}>List Price </div>
                            </div>
                            <div className={styles.category}>
                                <div>Sports</div>
                                <div className={styles.subtitle}>Category</div>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <div style={{display:'flex', flexWrap:'wrap'}}>NBA Top Shot: 2021 All-Star Game</div>
                            <div className={styles.subtitle}>Description</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
)

export default MainPage