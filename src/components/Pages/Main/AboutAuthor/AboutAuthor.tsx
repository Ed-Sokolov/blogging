import {AuthorCard} from "./AuthorCard/AuthorCard";
import {TextCard} from "./TextCard/TextCard";

type AboutAuthorProps = {
    userName: string | null;
}

export const AboutAuthor: React.FC<AboutAuthorProps> = ({userName}) => {
    let first: string = `Hi ${userName ? userName : 'guest'}! I’m Eduard Sokolov and I created this website for you and me. It's my first big project but it isn't completed. You can read information about me, read my posts or other users, write your comments. In your profile you can set your avatar and name, and you can change your avatar, nickname, name and mail.

    I hope you will like my website and we can interact each other.`;

    let firstText: string = `Hey! I'm a student and I try to become a junior web developer. I try to learn English every day because it’s extremely important for my future job.
    
    I hope that I'll achieve my aims.
    
    Perhaps, I'll add new information about me soon...`;

    let firstTitle: string = 'It\'s me!';

    return (
        <div className="about_author" id="about_author">
            <div className="container">
                <h2 className="section_title">about me</h2>
                <div className="information">
                    <TextCard paragraph={first}/>
                    <AuthorCard title={firstTitle} text={firstText}/>
                </div>
            </div>
        </div>
    )
}