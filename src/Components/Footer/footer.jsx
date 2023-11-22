/* eslint-disable import/no-anonymous-default-export */
import "./footer.css";

export default () => {
    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="/logo.png" alt="logo" className="img-logo"/>
                </div>
                <div className="footer-list">
                <nav className="list-section">
                    <ul>
                        <li style={{marginRight: '60px'}}>Home</li>
                        <li style={{marginRight: '60px'}}>Attorneys</li>
                        <li style={{marginRight: '60px'}}>Practice Areas</li>
                        <li >About Us</li>
                    </ul>
                </nav>
                </div>
                <div className="footer-images">
                <img src="/insta.png" alt="" style={{ marginRight: '10px' }}/>
                <img src="/fb.png" alt="" style={{ marginRight: '10px' }}/>
                <img src="twitter.png" alt="" style={{ marginRight: '10px' }}/> 
                <img src="/pinterest.png" alt=""/>
                </div>
            </div>
            <div className="foo-sec">
                <div className="foo-content">
                    <p className="foo-copy">© 2020 Acme. All right reserved.</p>
                    <p className="foo-pp">Privacy Policy</p>
                    <p className="foo-ts">Terms of Service</p>
                </div>
            </div>
        </div>
    )
}