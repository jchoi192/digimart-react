import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './FormPage.module.css'

const FormPage = (props) => {
    return (
        <div className='App-Body'>
            <Header userState={props.userState.user} />
            <h1>{props.state.editMode ? 'Edit Item' : 'Create New Item'}</h1>
            <form className='CreateForm' onSubmit={props.handleSubmit}>
                <label>
                <span>Title</span>
                <input name='title' value={props.state.newListing.title} onChange={props.handleChange} />
                </label>
                <label>
                <span>URL</span>
                <input name='url' type='text' value={props.state.newListing.url} onChange={props.handleChange} />
                </label>
                <label>
                <span>Description</span>
                <input name='description' value={props.state.newListing.description} onChange={props.handleChange} />
                </label>
                <label>
                <span>Category</span>
                <select name='category' value={props.state.newListing.category} onChange={props.handleChange} >
                    <option value="Art">Art</option>
                    <option value="Collectibles">Collectibles</option>
                    <option value="Music">Music</option>
                    <option value="Sports">Sports</option>
                    <option value="Trading Cards">Trading Cards</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
                </label>
                <label>
                <span>Price</span>
                <input type='number' name='price' value={props.state.newListing.price} onChange={props.handleChange} />
                </label>
                <button className='SubmitButton'>{props.state.editMode ? 'Edit' : 'Create'}</button>
            </form>
                {props.state.listings.length ? props.state.listings.map((listing, idx) => (
                    <div key={idx}>
                        <article className='ListingCard'>
                        <div className='CardImage'>
                            IMAGE GOES HERE
                        </div>
                        <div className='CardWords'>
                            <div>Title: {listing.title}</div> 
                            <div>Price: {listing.price}</div>
                            <div>Category: {listing.category}</div>
                            <div>Description: {listing.description}</div>
                        </div>
                            <button 
                            className='EditBtn'
                            onClick={() => props.handleEdit(listing._id)}
                            >Edit</button>
                            <button 
                            className='DeleteBtn'
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