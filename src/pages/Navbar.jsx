import { Link } from "react-router-dom"
import { useState } from "react"
import wedtechLogo from "../assets/img/wedtech_logo.DaHkmgqQ.webp"
import "./Navbar.css"

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner-wrapper">
                {/* Mobile Menu Button (Hamburger/Close) */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>

                {/* Logo */}
                <Link to="/" className="navbar-brand">
                    <img src={wedtechLogo} alt="WedTech Logo"/>
                </Link>

                {/* Desktop and Mobile Links */}
                <div className={`navbar-links-container ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/suppliers" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Nhà cung cấp</Link>
                    <Link className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Đơn vị sự kiện</Link>
                    <Link className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Dự án</Link>
                    <Link className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Sản phẩm</Link>
                    <Link to="https://wedtechshow.com/" className="navbar-link-1" onClick={() => setIsMobileMenuOpen(false)}>WedTech Show</Link>
                    
                    {/* Các link này chỉ xuất hiện trên mobile menu (theo yêu cầu ảnh 2) */}
                    <div className="mobile-only-links">
                        <Link className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Chính sách bảo mật</Link>
                        <Link className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Điều khoản dịch vụ</Link>
                    </div>
                </div>

                {/* Auth */}
                <div className="navbar-auth">
                    <div className="navbar-auth-links">
                        <Link className="btn btn-login">Đăng nhập</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}