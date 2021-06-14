import { useState, useEffect } from 'react';
import FormPage from './pages/FormPage/FormPage'
import MainPage from './pages/MainPage/MainPage'
import CollectionsPage from './pages/CollectionsPage/CollectionsPage'
import { auth } from './services/firebase'
import { 
  createListing, 
  deleteListing, 
  fetchListing, 
  updateListing 
} from './services/listing-service'
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {

  const [state, setState] = useState({
    listings: [{ 
      title: '',
      url: '',
      description: '',
      category: 'Art',
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

  const [image, setImage] = useState('')

  useEffect(function() {
    async function getAppData() {
      const listings = await fetchListing();
      
      setState(prevState => ({
        ...prevState,
        listings
      }));
    }

    getAppData();

    // firebase
    const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));
    return function() {
      // clean up subscriptions
      unsubscribe();
    }
  }, []);

  
async function handleSubmit(e) {
    e.preventDefault();
    alert('Please go to My Collection to see your listing')
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
      } catch(error) {
       console.log(error)
      }
    } else {
      try {
        const listing = await createListing(state.newListing);
        console.log(listing, 'listing')

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
       console.log(error)
      }
    }
  }

  function handleChange(e){
    setState(prevState => ({
      ...prevState,
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
    } catch(error) {
     console.log(error)
    }
  }

  return (
    <div className="App">
      <Switch>
        <Route 
          expact path ='/form'
          render={() => (
            <FormPage 
              userState={userState} 
              state={state}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              image={image}
              setImage={setImage}
              />
              )}
              />
        <Route
          path='/collections'
          render={() => (
            <CollectionsPage 
            userState={userState} 
            state={state}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            image={image}
            setImage={setImage}
            />
          )}
        />
        <Route
          path='/'
          render={() => (
            <MainPage 
              userState={userState} 
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
