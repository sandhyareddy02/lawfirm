/* eslint-disable import/no-anonymous-default-export */
import "./area.css";

export default () => {
    return (
        <div className="area-section">
            <div className="area-heading">
                <h1>Area of Practices</h1>
            </div>
            <div className="area-container">
                <div className="area-img1">
                    <img src="/businesslaw1.png" alt="" />
                </div>
                <div className="area-img1-text">BUSINESS LAW</div>
                <div className="area-img2">
                    <img src="/partnership.png" alt="" />
                    <div className="area-img2-text">Partnership LAW</div>
                </div>
                <div className="area-img3">
                    <img src="/realestate.png" alt="" />
                    <div className="area-img3-text">REAL ESTATE LAW</div>
                </div>
                <div className="area-img4">
                    <img src="/businesslaw2.png" alt="" />
                    <div className="area-img4-text">BUSINESS LAW</div>
                </div>
                <div className="area-img5">
                    <img src="/landlord.png" alt="" />
                    <div className="area-img5-text">LANDLORD DISPUTES</div>
                </div>
                <div className="area-img6">
                    <img src="/elder.png" alt="" />
                    <div className="area-img6-text">ELDER ABUSE</div>
                </div>
            </div>
        </div>
    )
}