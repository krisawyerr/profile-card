export default function Info() {
    return (
        <div className="InfoSection">
            <img src="https://www.ninesparis.com/40043-thickbox_default/white-linen-pocket-square-with-light-blue-edge.jpg" height={300} width={300} className="ProfilePic"/>
            <p className="Name">Jason Green</p>
            <p className="JobTitle">Frontend Developer</p>
            <p className="Website">jasongreen.com</p>
            <div className="Buttons">
                <button className="EmailButton"><a href="https://mail.google.com/" className="EmailLink">Email</a></button>
                <button className="LinkedInButton"><a href="https://www.linkedin.com/" className="LinkedInLink">LinkedIn</a></button>
            </div>
        </div>
    )
}