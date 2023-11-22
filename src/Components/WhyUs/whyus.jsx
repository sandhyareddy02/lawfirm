/* eslint-disable import/no-anonymous-default-export */
import "./whyus.css";

export default () => {
    return (<div className="about-section">
        <div className="about-heading">
            <h1>Why Choose Us?</h1>
        </div>
        <div className="about-container">
            <div className="about-box">
                <div className="about-box1">
                <img src="/about.png" alt="" />
                <h3>98% Success Rate</h3>
                <p>Amet minim mollit non deserunt ullamco est <br></br> sit aliqua dolor do amet sint. Velit officia <br></br> consequatduis enim velit mollit Exer.</p>
                <button>Read More</button>
                </div>
            </div>
            <div className="about-box">
                <div className="about-box2">
                <img src="/about.png" alt="" />
                <h3>100% Success Rate</h3>
                <p>Amet minim mollit non deserunt ullamco est <br></br> sit aliqua dolor do amet sint. Velit officia <br></br> consequatduis enim velit mollit Exer.</p>
                <button>Read More</button>
                </div>
            </div>
            <div className="about-box">
                <div className="about-box3">
                <img src="/about.png" alt="" />
                <h3>100% Success Rate</h3>
                <p>Amet minim mollit non deserunt ullamco est <br></br> sit aliqua dolor do amet sint. Velit officia <br></br> consequatduis enim velit mollit Exer.</p>
                <button>Read More</button>
                </div>
            </div>
        </div>
        </div>
    )
}