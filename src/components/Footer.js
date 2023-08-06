import FacebookIcon from "../images/Facebook Icon.png";
import GithubIcon from "../images/GitHub Icon.png";
import TwitterIcon from "../images/Twitter Icon.png";
import InstagramIcon from "../images/Instagram Icon.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="social-links">
                <a href="" target="_blank">
                    <img src={TwitterIcon} />
                </a>
                <a href="" target="_blank">
                    <img src={FacebookIcon} />
                </a>
                <a href="" target="_blank">
                    <img src={InstagramIcon} />
                </a>
                <a href="" target="_blank">
                    <img src={GithubIcon} />
                </a>
            </div>
        </div>
    );
}
