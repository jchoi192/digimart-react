import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './FormPage.module.css'

const FormPage = (props) => {
    return (
        <div className={styles.AppBody}>
            <Header userState={props.userState} />
            <h1>{props.state.editMode ? 'Edit Item' : 'List A New Item'}</h1>
            <form className={styles.CreateForm} onSubmit={props.handleSubmit}>
                <label>
                    <div class="mb-3" className={styles.mb3}>
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input class="form-control" type='text' name='title' value={props.state.newListing.title} onChange={props.handleChange}/>
                    </div>
                </label>
                    <div class="mb-3" className={styles.formcontrol}>
                        <label for="formFile" class="form-label">Upload File</label>
                        <input name='url'  class="form-control" type="file" value={props.state.newListing.url} onChange={props.handleChange} />
                    </div> 
                <label>
                    <div class="mb-3" className={styles.mb3}>
                        <label for="exampleFormControlInput1" class="form-label">Description</label>
                        <input class="form-control"  type='text' name='description' value={props.state.newListing.description} onChange={props.handleChange}/>
                    </div>
                </label>
                <label className={styles.mb3}>
                    <label for="exampleFormControlInput1" class="form-label">Category</label> 
                    <select class="form-select form-select-sm" 
                            aria-label=".form-select-sm example"
                            name='category' 
                            value={props.state.newListing.category} 
                            onChange={props.handleChange}
                            style={{width:'23rem', height:'38px'}}
                            >
                        <option selected>Open this select menu</option>
                        <option value="Art">Art</option>
                        <option value="Collectibles">Collectibles</option>
                        <option value="Music">Music</option>
                        <option value="Sports">Sports</option>
                        <option value="Trading Cards">Trading Cards</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                </label>
                <label>
                    <div class="mb-3" className={styles.mb3}>
                        <label for="exampleFormControlInput1" class="form-label">Price</label>
                        <input type='number' class="form-control" name='price' value={props.state.newListing.price} onChange={props.handleChange}/>
                    </div>
                </label>
                <button class="btn btn-secondary" style={{margin:'20px'}}>{props.state.editMode ? 'Edit' : 'Submit'}</button>
            </form>
                {props.state.listings.length ? props.state.listings.map((listing, idx) => (
                    <div key={idx}>
                        <article className={styles.ListingCard}>
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
                            <button 
                            className={styles.EditBtn}
                            onClick={() => props.handleEdit(listing._id)}
                            >Edit</button>
                            <button 
                            className={styles.DeleteBtn}
                            onClick={() => props.handleDelete(listing._id)}
                            >Delete</button>
                        </article>
                    </div>
                )):null}
            <Footer />
        </div>
    )
}

export default FormPage;