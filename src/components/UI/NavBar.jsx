export default function NavBar({ links }) {
    return (
        <nav className="navbar">
            {links.map((link) => link)}
        </nav>
    );
}