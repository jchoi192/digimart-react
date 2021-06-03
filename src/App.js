import { useState } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
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
    }
  })
  
  function addListing(e) {
    e.preventDefault();
    setState({
      listings: [...state.listings, state.newListing],
      newListing: {
        title: '',
        url: '',
        description: '',
        category: 'Art',
        price: ''
      }
    })
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

  return (
    <div className="App">
      <Header />
      <div className='App-Body'>
      <h1>Create New Item</h1>
      <form className='CreateForm' onSubmit={addListing}>
        <label>
          <span>Title</span>
          <input name='title' value={state.newListing.name} onChange={handleChange} />
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
        <button className='CreateButton'>Create</button>
      </form>
        {state.listings.map((l, i) => (
      <div key={i}>
        <article>
            <div>{l.title}</div> 
            <div>{l.url}</div>
            <div>{l.description}</div>
            <div>{l.category}</div>
            <div>{l.price}</div>
            <div 
              // onClick={() => handleEdit(l._id)}
              >Edit</div>
            <div 
              // onClick={() => handleDelete(s._id)}
              >Delete</div>
        </article>
        </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
