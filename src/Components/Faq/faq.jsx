// /* eslint-disable import/no-anonymous-default-export */
// import "./faq.css";

// export default () => {
//     return (
//         <div className="faq-section">
//             <div className="faq-left-container">
//                 <h1>FAQ</h1>
//                 <p>Amet minim mollit non deserunt ullamco est sit<br></br>aliqua dolor do amet sint. </p>
//             </div>
//             <div className="faq-container">
//             <div className="faq-right-container">
//                 <h3>Do I need a personal injury report?</h3>
//                 <p>Amet minim mollit non deserunt ullamco est sit<br></br>aliqua dolor do amet sint. Velit officia consequatduis <br></br>enim velit mollit Exer. Amet minim mollit non deserunt <br></br>ullamco est sit aliqua dolor do amet sint. Velit officia <br></br> consequatduis enim velit mollit Exer.</p>
//             </div>
//             <hr style={{width: '550px', margin: '40px 0px 40px 0px'}}></hr>
//             <div className="accordion-container">
//             <button class="accordion">How much is my case worth?</button>
//                 <div class="panel">
//                     <p>Please get connect with my chat supporter!</p>
//                 </div>
//                 <button class="accordion">What should I do right after car accident</button>
//                 <div class="panel">
//                     <p>You need to inform it police...</p>
//                 </div>
//                 <button class="accordion">How much is my case worth?</button>
//                 <div class="panel">
//                     <p>Please get connect with my chat supporter!</p>
//                 </div>
//                 </div>
//                 </div>
//         </div>
//     )
// }

import React, { useState } from "react";
import "./faq.css"; 

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-left-container">
        <h1>FAQ</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit<br></br>aliqua dolor do
          amet sint.{" "}
        </p>
      </div>
      <div className="faq-container">
        <div className="faq-right-container">
          <h3>Do I need a personal injury report?</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit<br></br>aliqua dolor
            do amet sint. Velit officia consequatduis <br></br>enim velit mollit
            Exer. Amet minim mollit non deserunt <br></br>ullamco est sit aliqua
            dolor do amet sint. Velit officia <br></br> consequatduis enim velit
            mollit Exer.
          </p>
        </div>
        <hr style={{}}></hr>
        <div className="accordion-container">
          <button
            className={`accordion ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleAccordionClick(0)}
          >
            How much is my case worth?
          </button>
          <hr></hr>
          <div
            className="panel"
            style={{ display: activeIndex === 0 ? "block" : "none" }}
          >
            <p>Please get connect with my chat supporter!</p>
          </div>

          <button
            className={`accordion ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleAccordionClick(1)}
          >
            What should I do right after a car accident?
          </button>
          <hr></hr>
          <div
            className="panel"
            style={{ display: activeIndex === 1 ? "block" : "none" }}
          >
            <p>You need to inform the police...</p>
          </div>

          <button
            className={`accordion ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleAccordionClick(2)}
          >
            How much is my case worth?
          </button>
          <hr></hr>
          <div
            className="panel"
            style={{ display: activeIndex === 2 ? "block" : "none" }}
          >
            <p>Please get connect with my chat supporter!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
