import React, {Component}  from 'react';


class Menu extends Component {
render() {
return (
    <nav className = "navbar  navbar-dark bg-dark" >
      <ul className = "nav" >
      
      <li className = "nav-item" >
        <b> <h5> <a className = "nav-link active text-white"
        href = "*" > < i className = "fab fa-wolf-pack-battalion fa-2x"> </i> </a > </h5></b>
      </li>

      <li className = "nav-item" >
         <a className = "nav-link active text-white" href = "*" > Inicio </a>  
      </li>

      <li className = "nav-item" >
        <a className = "nav-link active text-white" href = "*" > Nosotros </a>  
      </li> 

      <li className = "nav-item" >
        <a className = "nav-link active text-white" href = "*" > Noticias </a>  
      </li> 

      </ul> 
    </nav>
)
}
}
export default Menu;