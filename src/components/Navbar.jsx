import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="navbar">
                    <div className="navbar-inner-wrapper">
                        <div className="navbar-links">
                            <Link to="/" className="navbar-brand">
                                <img src="src/assets/img/wedtech_logo.DaHkmgqQ.webp"/>
                            </Link>
                            <Link to="/suppliers" className="navbar-link">Nhà Cung cấp</Link>
                            <Link className="navbar-link">Đơn vị sự kiện</Link>
                            <Link className="navbar-link">Dự án</Link>
                            <Link className="navbar-link">Sản phẩm</Link>
                            <Link className="navbar-link-1">WedTech Show</Link>
                        </div>
                        <div className="navbar-auth">
                            <div className="navbar-auth-links">
                                <Link className="btn btn-secondary">Đăng Nhập</Link>
                            </div>
                        </div>
                    </div>
        </nav>
    )
} 