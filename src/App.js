import { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { auth } from './services/firebase'
import { 
  createListing, 
  deleteListing, 
  fetchListing, 
  updateListing 
} from './services/listing-service'
import {Route} from 'react-router-dom'
import './App.css';

function App() {

  const [state, setState] = useState({
    listings: [{ 
      title: '',
      url: '',
      description: '',
      category: '',
      price: ''
    }],
    newListing: {
      title: '',
      url: '',
      description: '',
      category: 'Art',
      price: ''
    },
    editMode: false
  });
  
  const [userState, setUserState] = useState({
    user: null,
  });

  useEffect(function() {
    async function getAppData() {
      const listings = await fetchListing();
      
      setState(prevState => ({
        ...prevState,
        listings
      }));
    }

    getAppData();

    const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));
    return function() {
      // clean up subscriptions
      unsubscribe();
    }
  }, []);

  
async function handleSubmit(e) {
    e.preventDefault();

    if (state.editMode){
      try {
        const listings = await updateListing(state.newListing);

        setState({
          listings,
          editMode: false,
          newListing: {
            title: '',
            url: '',
            description: '',
            category: 'Art',
            price: ''
          }
        });
      } catch {
        alert('See updateListing')
      }
    } else {
      try {
        const listing = await createListing(state.newListing);

          setState({
            listings: [...state.listings, listing],
            newListing: {
              title: '',
              url: '',
              description: '',
              category: 'Art',
              price: ''
            }
          });
      } catch(error) {
        alert('See handleSumbit')
      }
    }
  }

  function handleChange(e){
    setState(prevState => ({
        listings: prevState.listings,
        newListing: {
          ...prevState.newListing,
          [e.target.name]: e.target.value
        }
    }));
  }

  function handleEdit(id) {
    const listingToEdit = state.listings.find(listing => listing._id === id);
    setState(prevState => ({
      ...prevState,
      newListing: listingToEdit,
      editMode: true,
    }));
  }

  async function handleDelete(id) {
    try {
      const listings = await deleteListing(id);
      setState(prevState => ({
        ...prevState,
        listings
      }));
    } catch {
      alert('See handleDelete')
    }
  }

  return (
    <div className="App">
      <Header 
        user={userState.user} 
      />
      <div className='App-Body'>
      <h1>{state.editMode ? 'Edit Item' : 'Create New Item'}</h1>
      <form className='CreateForm' onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input name='title' value={state.newListing.title} onChange={handleChange} />
        </label>
        <label>
          <span>URL</span>
          <input name='url' value={state.newListing.url} onChange={handleChange} />
        </label>
        <label>
          <span>Description</span>
          <input name='description' value={state.newListing.description} onChange={handleChange} />
        </label>
        <label>
          <span>Category</span>
          <select name='category' value={state.newListing.category} onChange={handleChange} >
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
          <input type='number' name='price' value={state.newListing.price} onChange={handleChange} />
        </label>
        <button className='SubmitButton'>{state.editMode ? 'Edit' : 'Create'}</button>
      </form>
        {state.listings.map((listing, idx) => (
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
              onClick={() => handleEdit(listing._id)}
              >Edit</button>
            <button 
              className='DeleteBtn'
              onClick={() => handleDelete(listing._id)}
              >Delete</button>
        </article>
        </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
