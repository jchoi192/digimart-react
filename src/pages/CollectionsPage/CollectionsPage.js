import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './CollectionsPage.module.css'
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';


const CollectionsPage = (props) => (
<div>
    <div className={styles.CollectionPage}>
        <Header userState={props.userState} />
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
                                <Image style={{width: '300px'}} cloudName='seir-alita' publicId={props.image} />
                            </div>
                            <div className={styles.CardWords}>
                                <div>{listing.title}</div>
                                <div>
                                    <div>{listing.price}</div>
                                    <div>List Price </div>
                                </div>
                                
                                <div>
                                    <div>{listing.category}</div>
                                    <div>Category</div>
                                </div>
                                <div>
                                    <div>{listing.description}</div>
                                    <div>Description</div>
                                </div>
                                <div>
                                    {props.userState.user ?
                                    <>
                                        <div>Owner {props.userState.user.displayName}</div>
                                        <div style={{ textDecoration: 'none'}}>
                                            <img style={{height: '2.8rem', borderRadius: '50%', textDecoration: 'none'}}
                                                src={props.userState.user.photoURL}
                                                alt={props.userState.user.displayName} />
                                        </div>
                                    </>
                                    :
                                    <div>Owner: Classified</div>
                                    }
                                </div>
                                {/* <ul>

                                    {props.userState.user ?
                                    <>
                                        <li> Owner {props.userState.user.displayName}
                                            <li />
                                        <li>
                                            <img style={{height: '2.8rem', borderRadius: '50%', textDecoration: 'none'}}
                                                src={props.userState.user.photoURL}
                                                alt={props.userState.user.displayName} />
                                        </li>
                                    </>
                                    :

                                    <img style={{height: '2.8rem', borderRadius: '50%', textDecoration: 'none'}}
                                        src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                                        alt='img' />

                                    }
                                </ul> */}

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
        <Footer />
    </div>
</div>
)

export default CollectionsPage