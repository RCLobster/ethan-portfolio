import { Link } from 'react-router-dom';

export default function Project({ title, url, description }) {
    return (
        <Link to={url} target="_blank" className="project-card flex-parent">
            <h2 >{title}</h2>
            <p id="fadeAway">{description}</p>
            <p id="viewProject">Click to View Project</p>
        </Link>
    )
};