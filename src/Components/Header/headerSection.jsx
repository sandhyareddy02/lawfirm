/* eslint-disable import/no-anonymous-default-export */
import "../Header/header.css";
import Logo from "../Logo/logo.jsx";
import List from "../List/list.jsx";
import Button from "../Button/button.jsx";

export default () => {
    return ( <>
        <div className="header-section"> 
            <div className="header-container">
                <Logo />
                <List />
                <Button>Contact Now</Button>
            </div>
            <div className="section-container">
                <div className="container1">
                    <h1>
                        <span className="first-part">You don’t have to</span>
                            <br />
                        <span className="second-part">Fight them Alone.</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                    <div className="email-container">
                        <div className="input-wrapper">
                            <input type="email" className="email-input" placeholder="Enter your email address" />
                            <button className="chip-button">Let's Talk</button>
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <img src="/person.png" alt="personImage"  className="person-img"/>
                </div>
            </div>
        </div>
    </>)
}