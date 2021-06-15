import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './CollectionsPage.module.css'
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';


const CollectionsPage = (props) => (
<div>
        <Header userState={props.userState} />
    <div className={styles.CollectionPage}>
        <header>
            <h1>My Collection</h1>
        </header>
        <div className={styles.body}>
            {props.state.listings.length ? props.state.listings.map((listing, idx) => (
            <div className={styles.Cards} key={idx}>
                <article className={styles.Card}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div>
                                <Image className={styles.CardImage} cloudName='seir-alita' publicId={props.image} />
                            </div>
                            <div className={styles.CardWords}>
                                <h3 className={styles.title}>
                                    {listing.title}
                                </h3>
                                <div className={styles.priceCategory}>
                                    <div className={styles.price}>
                                        <div>{listing.price} eth</div>
                                        <div className={styles.subtitle}>List Price </div>
                                    </div>
                                    <div className={styles.category}>
                                        <div>{listing.category}</div>
                                        <div className={styles.subtitle}>Category</div>
                                    </div>
                                </div>
                                <div className={styles.description}>
                                    <div style={{display:'flex', flexWrap:'wrap'}}>{listing.description}</div>
                                    <div className={styles.subtitle}>Description</div>
                                </div>
                                -----------------------------------
                                <div>
                                    {props.userState.user ?
                                    <>
                                    <div className={styles.ownerSection}>
                                        <div className={styles.subtitle}>Owner</div>
                                        <div style={{ textDecoration: 'none'}}>
                                            <img style={{height: '2.8rem', borderRadius: '50%', textDecoration: 'none', marginRight:'10px'}}
                                                src={props.userState.user.photoURL}
                                                alt={props.userState.user.displayName} />
                                                {props.userState.user.displayName}
                                        </div>
                                    </div>
                                    </>
                                    :
                                    <div>Owner: Classified</div>
                                    }
                                </div>                              
                            </div>
                        </div>
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.ControlsBtn}>
                            <button class="btn btn-secondary" onClick={()=> props.handleEdit(listing._id)}>
                                <Link to='/formpage' />Edit
                            </button>
                        </div>
                        <div className={styles.ControlsBtn}>
                            <button class="btn btn-secondary" onClick={()=>props.handleDelete(listing._id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </article>
            </div>
            )):null}
        </div>
    </div>
        <Footer />
</div>
)

export default CollectionsPage