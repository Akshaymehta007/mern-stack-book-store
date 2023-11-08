import React, { useEffect, useState } from 'react';
import './Book.css';
import axios from 'axios';
import Book from './Book';
const URL = "http://localhost:5000/books";


//Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser

const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data)
}

const Books = () => {
    const[books, setBooks] = useState();
// useEffect is a React Hook that lets you synchronize a component with an external system.
// It is a  function which runs after the component is rendered into the browser and it only runs once and if we provide any dependancy array,
// so whenever the dependancy array value will change it will rerun the useEffect only.
  useEffect (() =>{
    fetchHandler().then(data=> setBooks(data.books))
  }, []);
  console.log(books);
  return (
  <div>
    <ul>
        {books && books.map((book, i)=>(
            <li key = {i}>
        <Book book = {book} />
            </li>
        ))}
   
    </ul>
  </div>
  );
}

export default Books
