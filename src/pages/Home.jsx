
import Project from '../components/Project';

function Home() {
    return (
        <div className="flex-parent-home">
            <Project
                url="https://team-m-s-project-3.onrender.com/"
                title="Mad Lib Generator"
                description={`Create a madlib with a friend online!`}
            />
            <Project
                url="https://rclobster.github.io/team-MEC-project-1/"
                title="Book Search Engine"
                description={`Using a free book API, you can search for "any" book you want and get data back in return.`}
            />
            <Project
                url="https://safe-springs-25038-3254cd47c218.herokuapp.com/"
                title="Music Playlist Maker"
                description={`Sign up for a free account and create a playlist using our database of songs. Don't like any songs? Add your own!`}
            />
            <Project
                url="https://rclobster.github.io/password-generator/"
                title="Password Generator"
                description={`Use this app to generate a secure, random password for use anywhere.`}
            />
        </div>
    )
};

export default Home;