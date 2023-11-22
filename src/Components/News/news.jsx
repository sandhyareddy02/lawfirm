/* eslint-disable import/no-anonymous-default-export */
import "./news.css";

export default () => {
    return (
      <div className="news-section">
        <div className="news-container">
          <h1>Subscribe Our Newsletter</h1>
          <form className="subscribe-form">
            <div className="input-wrapper">
              <input type="text" id="name" name="name" placeholder="Name:" />
            </div>
            <div className="input-wrapper">
              <input type="email" id="email" name="email" placeholder="Enter your Email" />
            </div>
            <div className="input-wrapper">
              <input type="submit" value="SEND" />
            </div>
          </form>
        </div>
      </div>
    );
  };
  