import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer" >
            <div className="footer-column">
                <h6>Trụ sở chính</h6>
                <p>Địa chỉ: 123 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
            </div>
            <div className="footer-column">
                <h6>Chi nhánh</h6>
                <p>Địa chỉ: 123 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
                <p>Địa chỉ: 123 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
                <p>Địa chỉ: 123 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
            </div>
            <div className="footer-column">
                <h6>Liên hệ</h6>
                <p>Địa chỉ: 123 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
                <p>Điện thoại: 0123456789</p>
                <p>Email: bluemoon@gmail.com </p>
            </div>
        </div>
    );
}

export default Footer;