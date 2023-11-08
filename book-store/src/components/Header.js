import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import {NavLink} from 'react-router-dom';
const Header = () => {
 const [value, setValue] = useState();
  return (
    <div>
    {/* sticky; is positioned based on the user's scroll position. A sticky element toggles between relative and fixed , depending on the scroll position */}
      <AppBar sx = {{backgroundColor: '#232F3D'}} position='sticky'>

      {/* The Toolbar component sets the properties of the children to make them horizontally aligned.  */}
<Toolbar>

      {/* Typography is a Material-UI component used to standardize the text and its related CSS properties without worrying about browser compatibility issues */}
    <NavLink to="/" style={{color:"white"}}>
    <Typography><BookIcon/></Typography>
    </NavLink>
{/* The sx prop lets you add any valid CSS to an element while using values from your theme to keep styles consistent. All of the style functions provided in @mui/system are packaged together as a superset of CSS that can be used with the ‘sx’ prop.  */}

   <Tabs sx ={{ml:'auto'}} textColor ="inherit" indicatorColor = "secondary" value = {value} onChange={(e, val) => setValue(val)}>

{/* We can use the <a> tag to create links in the HTML. However, the Material UI library provides the Link component to create a stylish link */}

    <Tab LinkComponent={NavLink} to= "/add" label ='Add Product'/>
    <Tab LinkComponent={NavLink} to= "/books"  label = 'Books'/>
    <Tab LinkComponent={NavLink} to= "/about" label = 'About Us'/>
   </Tabs>
    </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header
