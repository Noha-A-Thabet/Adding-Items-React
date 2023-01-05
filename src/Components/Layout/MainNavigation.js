import { Link } from "react-router-dom";

const MainNavigation = () => {
     return (
          <header>
               <div>React Meetups</div>
               <ul>
                    <li>
                         < Link to='/'>All Meetups</Link>
                         <br />
                         < Link to='/new'>Add New Meetup</Link>
                         <br />
                         < Link to='/favorites'>My Favorites Meetups</Link>
                    </li>
               </ul>
          </header>
     )
}


export default MainNavigation;