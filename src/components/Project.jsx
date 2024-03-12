import { Link } from 'react-router-dom';

export default function Project({ title, url, description }) {
    return (
        <div className="project-card flex-parent">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={url} target="_blank"><button className="btn">View Project</button></Link>
        </div>
    )
};