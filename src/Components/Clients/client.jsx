/* eslint-disable import/no-anonymous-default-export */
import "./client.css";


export default () => {
    return (
        <div className="client-section">
            <div className="client-heading">
                <h1>What says our <br></br> happy Clients</h1>
                <div className="client-carousel">
                    <img src="/leftcarousel.png" alt=""  className="leftcarousel"/>
                    <img src="/rightcarousel.png" alt="" className="rightcarousel"/>
                </div>
            </div>
            <div className="client-container">
                <div className="client-box">
                    <div className="client-box1">
                        <img src="/clientimg1.png" alt="" />
                        <h3>Jane Cooper</h3>
                        <h6>Ceo of Hunt</h6>
                        <p>Amet minim mollit non deserunt ullamco est<br></br>sit aliqua dolor do amet sint. Velit officia<br></br>consequatduis enim velit mollit Exer. sit<br></br>aliqua dolor do amet sint. Velit officia</p>
                    </div>
                </div>
                <div className="client-box">
                    <div className="client-box2">
                        <img src="clientimg2.png" alt="" />
                        <h3>Devon Lane</h3>
                        <h6>Ceo of Hunt</h6>
                        <p>Amet minim mollit non deserunt ullamco est<br></br>sit aliqua dolor do amet sint. Velit officia<br></br>consequatduis enim velit mollit Exer. sit<br></br>aliqua dolor do amet sint. Velit officia</p>
                    </div>
                </div>
                <div className="client-box">
                    <div className="client-box3">
                        <img src="clientimg3.png" alt="" /> 
                        <h3>Robert Fox</h3>
                        <h6>Ceo of Hunt</h6>
                        <p>Amet minim mollit non deserunt ullamco est<br></br>sit aliqua dolor do amet sint. Velit officia<br></br>consequatduis enim velit mollit Exer. sit<br></br>aliqua dolor do amet sint. Velit officia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}