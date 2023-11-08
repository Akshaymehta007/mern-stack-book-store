import React from 'react';
import {Button} from '@mui/material';
import './Book.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
  const history = useNavigate ()
    const {_id, name, author, description, price, image} = props.book;
  
    const deleteHandler = async()=>{
   await axios.delete(`http://localhost:5000/books/${_id}`).then(res=>res.data)
   .then(()=>history("/"))
   .then(()=>history("/books"));
    };
  return (
    <div className='card'>
      <img src={image} alt="" />
      <article> By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>

      {/* _id is a variable or property that represents the identifier or unique key associated with a specific book or item. _id format you often encounter in the context of web applications is commonly associated with MongoDB, a NoSQL database. In MongoDB, each document (a record in a collection) is required to have a unique identifier field called _id. */}
     
      <Button LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
      <Button onClick={deleteHandler} sx={{mt:"auto"}}>Delete</Button>
    </div>
  )
}

export default Book

