import { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { auth } from './services/firebase'
import './App.css';

function App() {

  const [state, setState] = useState({
    listings: [{ 
      title: 'Lebron',
      url: 'www.nike.com',
      description: 'the best',
      category: 'Sports',
      price: '$10'
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
      const listings = await fetch('http://localhost:3001/api/listings')
      .then(res => res.json());
      
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
        const { title, url, description, category, price, _id } = state.newListing
        const listings = await fetch(`http://localhost:3001/api/listings/${_id}`, {
          method: 'PUT',
          headers: {'Content-type': 'Application/json'},
          body: JSON.stringify({ title, url, description, category, price })
        }).then(res => res.json());

        setState(prevState => ({
          ...prevState,
          listings,
          editMode: false,
          newListing: {
            title: '',
            url: '',
            description: '',
            category: 'Art',
            price: ''
          }
        }));
      } catch {
        alert('error')
      }
    } else {
      try {
        const listing = await fetch('http://localhost:3001/api/listings', {
          method: 'POST',
          headers: {'Content-type': 'Application/json'},
          body: JSON.stringify(state.newListing)
        })
        .then(res => res.json())
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
        console.log('handleSumbit try/catch block')
        alert('try again')
      }
    }
  }

  function handleChange(e){
    setState(prevState => ({
        listings: prevState.listings,
        newListing: {
          ...prevState.newListing,
          [e.target.name]: e.target.value
        },
        editMode: true
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

  async function handleDelete(id, error) {
    try {
      const listings = await fetch(`http://localhost:3001/api/listings/${id}`, {
        method: 'DELETE'
      }).then(res => res.json());
      setState(prevState => ({
        ...prevState,
        listings
      }))
    } catch {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <Header 
        user={userState.user} 
      />
      <div className='App-Body'>
      <h1>Create New Item</h1>
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
        {state.listings.map((l, i) => (
      <div key={i}>
        <article className='ListingCard'>
          <div className='CardImage'>
            IMAGE GOES HERE
          </div>
          <div className='CardWords'>
            <div>Title: {l.title}</div> 
            <div>Price: {l.price}</div>
            <div>Category: {l.category}</div>
            <div>Description: {l.description}</div>
            </div>
            <button 
              className='EditBtn'
              onClick={() => handleEdit(l._id)}
              >Edit</button>
            <button 
              className='DeleteBtn'
              onClick={() => handleDelete(l._id)}
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
