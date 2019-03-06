import React, {Component} from 'react';


class Footer extends Component {
render() {
    return (
        < nav className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom" >

         <div>

           <ul className = "navbar-nav " >

             <li className = "nav-item nav" >
              <a className = "nav-link" href = "https://www.facebook.com/" > < i className = "fab fa-facebook fa-2x" > </i></a >
             </li> 
           </ul> 
            
          </div>


          <div >
            
           <ul className = "navbar-nav " >
             <li className = "nav-item nav" >
              <a className = "nav-link"href = "https://www.instagram.com/?hl=es-la" > < i className = "fab fa-instagram fa-2x" > </i></a >
             </li> 
           </ul> 
          </div>


          <div >
           <ul className = "navbar-nav " >
              <li className = "nav-item nav" >
                <a className = "nav-link"href = "https://www.youtube.com/" > < i className = "fab fa-youtube fa-2x" > </i></a >
              </li> 
           </ul> 
          </div>

</nav>

)
}
}
export default Footer;