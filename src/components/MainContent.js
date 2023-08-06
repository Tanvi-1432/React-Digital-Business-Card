import EmailIcon from "../images/Icon.png";
import LinkedinIcon from "../images/Vector.png";
import Rectangle from "../images/Rectangle 90.png";

export default function MainContent() {
    return (
        <div className="main-content">
            <div className="profile">
                <img src={Rectangle} alt="Profile" />
            </div>
            <div className="profile-details">
                <h1>Laura Smith</h1>
                <h2>Frontend Developer</h2>
                <a href="" target="_blank" className="website">
                    laurasmith.website
                </a>
                <div className="social-buttons">
                    <div className="email">
                        <a href="" target="_blank" className="social-button">
                            <img src={EmailIcon} />
                            <button>Email</button>
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="" target="_blank" className="social-button">
                            <img src={LinkedinIcon} />
                            <button>LinkedIn</button>
                        </a>
                    </div>
                </div>
                <h3>About</h3>
                <p>
                    I am a frontend developer with a particular interest in making things
                    simple and automating daily tasks. I try to keep up with security and
                    best practices, and am always looking for new things to learn.
                </p>
                <h3>Interests</h3>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
                    Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </div>
    );
}
