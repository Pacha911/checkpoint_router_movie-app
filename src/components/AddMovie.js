import React, { useState } from 'react';
import Modal from 'react-modal';



Modal.setAppElement('#root');

const AddMovie = ({ AddNewMovie }) => {
const [modalIsOpen, setIsOpen] = useState(false);
const [title, setTitle] = useState('');
const [rating, setRating] = useState('');
const [image, setImage] = useState('');
const [description, setDescription] = useState('');
const [year, setYear] = useState('');
const [trailer,setTrailer] = useState('');

const openModal = () => {
    setIsOpen(true);
};

const closeModal = () => {
    setIsOpen(false);
};

const handleChange = (e) => {
    let newMovie = {
    id:Math.random(),
    title,
    rating,
    image,
    description,
    year,
    trailer:<iframe width="650" height="350" src={`${trailer}`}
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    };
    AddNewMovie(e, newMovie);
    setIsOpen(false);
    setTitle('');
    setRating('');
    setImage('');
    setDescription('');
    setYear('');
    setTrailer('');
};

    return (
    <div className='add-movie'>
        <button className='Add-btn' onClick={openModal}>
        Add Movie
        </button>
        <Modal
        className='add-modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        >
        <h1>Add A Movie</h1>
        <form>
            <label>Movie Name</label>
            <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Movie Rate</label>
            <input type='number' name='rating' value={rating} onChange={(e) => setRating(e.target.value)} />
            <label>Release Date</label>
            <input type='number' name='year' value={year} onChange={(e) => setYear(e.target.value)} />
            <label>Movie Description</label>
            <textarea type="text" name="description" value={description} required rows="4" cols="50"
            onChange={(e) => setDescription(e.target.value)}
            />
            <label>Movie Image</label>
            <input type='text' name='image' onChange={(e) => setImage(e.target.value)} />
            <label>Movie Trailer (add a URL from Iframe's src)</label>
            <input type='text' name='trailer' onChange={(e) => setTrailer(e.target.value)} />
        </form>
        <button
            className='Modal-btn'
            onClick={handleChange}
        >
            Submit
        </button>
        <button className='Modal-btn' onClick={closeModal}>
            close
        </button>
        </Modal>
    </div>
    );
}

export default AddMovie;