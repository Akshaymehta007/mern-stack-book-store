import React, { useState } from 'react';
import { Box, Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
const BASE_URL = process.env.BASE_URL;

const AddBook = () => {
  const history = useNavigate();
 const [inputs, setinputs] = useState({
  name:'',
  description:'',
  price:'',
  author:'',
  image:''
 }); 

 const [checked, setchecked] = useState(false);

 const handleChange = (e)=>{
  setinputs((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value
  }));
 };

 const sendRequest = async() => {
axios.post(`${BASE_URL}/books`,{
  name: String(inputs.name),
  author: String(inputs.author),
  description: String(inputs.description),
  price: Number(inputs.price),
  image: String(inputs.image),
  available: Boolean(checked),
})
.then((res) => res.data);
 };

// /The preventDefault() method is used to prevent the browser from executing the default action of the selected element. 
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs, checked);
  sendRequest().then(() => history("/books"));
 };

  return (
    <form onSubmit = {handleSubmit}>
    <Box
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    maxWidth={700}
    marginLeft={'auto'}
    marginRight={'auto'}
    marginTop={10}
    >
    <FormLabel>Name</FormLabel>
      <TextField value={inputs.name} onChange ={handleChange} margin = "normal" fullWidth variant="outlined" name= "name"/>
      <FormLabel>Author</FormLabel>
      <TextField value={inputs.author} onChange ={handleChange} margin = "normal" fullWidth variant="outlined" name= "author"/>
      <FormLabel>Description</FormLabel>
      <TextField value={inputs.description} onChange ={handleChange}  margin = "normal" fullWidth variant="outlined" name= "description"/>
      <FormLabel>Price</FormLabel>
      <TextField value={inputs.price} onChange ={handleChange} type='number' margin = "normal" fullWidth variant="outlined" name= "price"/>
      <FormLabel>Image</FormLabel>
      <TextField value={inputs.image} onChange ={handleChange} margin = "normal" fullWidth variant="outlined" name= "image"/>
      <FormControlLabel control={<Checkbox checked= {checked} onChange={()=>setchecked(!checked)} />} label="Available" />
      <Button variant = 'contained' type= 'submit'>Add Book</Button>
      </Box>
    </form>
  )
}

export default AddBook

//value attribute of an input field is used to set and control the value displayed in the field