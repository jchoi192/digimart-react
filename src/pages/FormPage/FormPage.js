import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './FormPage.module.css'
import Axios from 'axios';
import { useState } from 'react';

const FormPage = (props) => {

const [imageSelected, setImageSelected] = useState('');

const uploadImage = () => {
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'j3q1qwb8')

    Axios.post(
        'https://api.cloudinary.com/v1_1/seir-alita/image/upload', formData)
    .then((res) => {
        props.setImage(res.data.url);
    })
};


return (
<div className={styles.AppBody}>
    <Header userState={props.userState} />
    <h1>{props.state.editMode ? 'Edit Item' : 'List A New Item'}</h1>
    <div className={styles.Body}>
        <div className={styles.InnerBody}>
            <form className={styles.CreateForm} onSubmit={props.handleSubmit}>
                <label>
                    <div class="mb-3" className={styles.mb3}>
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input class="form-control" type='text' name='title' value={props.state.newListing.title}
                            onChange={props.handleChange} />
                    </div>
                </label>
                <div class="mb-3" className={styles.formcontrol}>
                    <label for="formFile" class="form-label">Upload File</label>
                    <input name='url' class="form-control" type='file' 
                    // value={props.state.newListing.url} 
                        onChange={(e) => {
                            setImageSelected(e.target.files[0]);
                        }}
                        />
                </div>
                <label>
                    <div class="mb-3" className={styles.mb3}>
                        <label for="exampleFormControlInput1" class="form-label">Description</label>
                        <input class="form-control" type='text' name='description'
                            value={props.state.newListing.description} onChange={props.handleChange} />
                    </div>
                </label>
                <label className={styles.mb3}>
                    <label for="exampleFormControlInput1" class="form-label">Category</label>
                    <select 
                        class="form-select" 
                        name='category'
                        value={props.state.newListing.category} 
                        onChange={props.handleChange}
                        style={{width:'23rem', height:'38px'}}> Open this select menu
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
                        <input type='number' class="form-control" name='price' value={props.state.newListing.price}
                            onChange={props.handleChange} />
                    </div>
                </label>
                <button onClick={uploadImage} class="btn btn-secondary" style={{margin:'20px'}}>{props.state.editMode ? 'Edit' :
                    'Submit'}</button>
            </form>
        </div>
    </div>
    <Footer />
</div>
)
}

export default FormPage;