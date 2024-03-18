export default function Resume() {
    return (
        <div className="flex-parent-resume resume-card">
            <h2>Ethan's Resume</h2>
            <img className="resume-img" src="../public/images/StoneE_Resume_WebDev.png" alt="Ethan Stone's resume" />
            <div className="resume-download">
                <a download="Ethan Stone's Resume" href="../public/pdf/StoneE_Resume_WebDev.pdf">
                    <img src="../public/images/download_icon.png" title="Icon by Baharat Icons" />
                </a>
            </div>
        </div>
    );
}