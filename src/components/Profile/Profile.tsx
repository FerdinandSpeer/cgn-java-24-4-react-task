import HeadProfil from "./ProfileComponents/HeadProfil.tsx";
import "./Profile.css"
import {AboutMe} from "./ProfileComponents/AboutMe.tsx";



export default function Profile() {
    return (
        <>
            <div className="profile">
            <h2> Who Am I</h2>
                <HeadProfil />
                <AboutMe />
            </div>
        </>
    )
}