import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './MainPage.css'
import { Link } from 'react-router-dom'

const MainPage = () => (
    <div>
        <Header />
        <div className='body'>
            <div className='TopSection'>
                <div>
                    <h1>Collect</h1>
                    <div>
                        <h1>
                        DigiMart
                        </h1>
                        <h1>
                        Digital Artworks
                        </h1>
                    </div>
                    <button className='Link'>
                        <Link to='/form'>Create</Link>
                    </button>
                    <button className='Link'>
                        <Link to='/'>Explore</Link>
                    </button>
                </div>
                <img className='MainImage' src="https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className='col'>
                        <img className='Main-CardImage' src="https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                        <p>text</p>
                    </div>
                    <div className='col'>
                        <img className='Main-CardImage'  src="https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                        <p>text</p>
                    </div>
                    <div className='col'>
                        <img className='Main-CardImage'  src="https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                        <p>text</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className='col'>
                        <img className='Main-CardImage' src="https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                        <p>text</p>
                    </div>
                    <div className='col'>
                        <img className='Main-CardImage'  src="https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                        <p>text</p>
                    </div>
                    <div className='col'>
                        <img className='Main-CardImage'  src="https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                        <p>text</p>
                    </div>
                </div>
            </div>
        </div>    
        <Footer />
    </div>
)

export default MainPage