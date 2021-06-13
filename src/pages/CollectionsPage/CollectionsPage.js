import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './CollectionsPage.module.css'
import { Link } from 'react-router-dom';

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
                                <img className={styles.CardImage}
                                    src="http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_625,w_1111,x_532,y_77/c_fill,f_auto,h_495,q_auto,w_880/v1/m/1/9/19ae89122ea433d4a83d011eb7b0be115479be41/lebron-exits-lakers-game-5-blowout-loss-five.jpg"
                                    alt="" />
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
                        <div className={styles.ControlsBtn}>
                            <button class="btn btn-secondary" onClick={()=> props.handleEdit(listing._id)}>
                                Edit
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