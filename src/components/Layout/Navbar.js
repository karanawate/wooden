import react from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
   return(
    <div>
            <p>Navbar</p>
        <Link to="about">home</Link>
    </div>
   );
}
export default Navbar;