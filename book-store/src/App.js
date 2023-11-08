import React from "react";
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
function App() {
  return (
    // React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
    <React.Fragment>
    <header>
    <Header/>
    </header>
    {/* The <main> tag specifies the main content of a document. The content inside the <main> element should be unique to the document.  */}
    <main>
<Routes>
  <Route path = "/" element = {<Home />} exact />
  <Route path = "/add" element = {<AddBook />} exact />
  <Route path = "/books" element = {<Books />} exact />
  <Route path = "/about" element = {<About />} exact />
  <Route path = "/books/:id" element={<BookDetail/>} exact/>
</Routes>
    </main>
    </React.Fragment>
  );
}

export default App;
