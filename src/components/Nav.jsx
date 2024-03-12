import { Link } from 'react-router-dom';
import Navbar from './UI/NavBar';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link" to="/">
                    Home
                </Link>,

                <Link key={2} className="nav-link" to="/AboutMe">
                    About Me
                </Link>,

                <Link key={3} className="nav-link" to="/Contact">
                    Contact Me
                </Link>,

                <Link key={4} className="nav-link" to="/Resume">
                    Resume
                </Link>,
            ]}
        />
    )
}