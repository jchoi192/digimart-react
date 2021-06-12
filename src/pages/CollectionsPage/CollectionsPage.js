import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './CollectionsPage.module.css'
import { Link } from 'react-router-dom';

const CollectionsPage = (props) => (
    <div>
        <Header userState={props.userState} />
        <div className={styles.body}>
        {props.state.listings.length ? props.state.listings.map((listing, idx) => (
                    <div className={styles.Cards} key={idx}>
                        <article className={styles.Card}>
                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <div className={styles.CardImage}>
                                            IMAGE GOES HERE
                                        </div>
                                        <div className={styles.CardWords}>
                                            <div>Title: {listing.title}</div> 
                                            <div>Price: {listing.price}</div>
                                            <div>Category: {listing.category}</div>
                                            <div>Description: {listing.description}</div>
                                        </div>
                                    </div>
                                </div>
                            <div className={styles.controls}>
                                <button 
                                className={styles.EditBtn}
                                onClick={() => props.handleEdit(listing._id)}
                                >Edit</button>
                                <button 
                                className={styles.DeleteBtn}
                                onClick={() => props.handleDelete(listing._id)}
                                >Delete</button>
                            </div>
                        </article>
                    </div>
                )):null}
        </div> 
        <Footer />
    </div>
)

export default CollectionsPage