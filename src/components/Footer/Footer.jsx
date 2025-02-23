import './Footer.css'
import {ReactComponent as GithubIcon} from "../../assets/pictures/Icons/github.svg";
import {ReactComponent as LinkedInIcon} from "../../assets/pictures/Icons/linkedin.svg";
import {ReactComponent as EmailIcon} from "../../assets/pictures/Icons/email.svg";
import ContactLink from "./ContactLink";

export default function Footer() {
    const myEmail = 'Baktashiliya@gmail.com';

    return (
        <footer className={'footer'}>
            <div className={'contact'}>
                {/* <ContactLink link={"https://github.com/MohammadAliSaeidi"} icon={<GithubIcon />} label={'Github'} /> */}
                <ContactLink link={"https://www.linkedin.com/in/iliya-baktash-626066248"} icon={<LinkedInIcon /> } label={'LinkedIn'} />
                <ContactLink link={'mailto: ' + myEmail } icon={<EmailIcon /> } label={'Baktashiliya@gmail.com'} />
            </div>
        </footer>
    )
}