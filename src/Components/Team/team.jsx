/* eslint-disable import/no-anonymous-default-export */
import "./team.css";

export default () => {
    return (
        <div className="team-section">
            <div className="team-heading">
                <h1>Our Team</h1>
            </div>
            <div className="team-container">
                <div className="team-box">
                    <div className="team-box1">
                        <img src="/teamimg1.png" alt="" />
                        <div className="team-content">
                            <h3>Danial Def</h3>
                            <p>301 Cases</p>
                        </div>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-box2">
                        <img src="/teamimg2.png" alt="" />
                        <div className="team-content">
                        <h3 style={{color: 'black'}}>Sanfole</h3>
                        <p>850 Cases</p>
                        </div>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-box3">
                        <img src="/teamimg3.png" alt="" />
                        <div className="team-content">
                        <h3>Cesforila</h3>
                        <p>470 Cases</p>
                        </div>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-box4">
                        <img src="/teamimg4.png" alt="" />
                        <div className="team-content">
                        <h3>Colleen</h3>
                        <p>180 Cases</p>
                        </div>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-box5">
                        <img src="/teamimg5.png" alt="" />
                        <div className="team-content">
                        <h3>Haldone</h3>
                        <p>212 Cases</p>
                        </div>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-box6">
                        <img src="/teamimg6.png" alt="" />
                        <div className="team-content">
                        <h3>Nik Jeo</h3>
                        <p>350 Cases</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}