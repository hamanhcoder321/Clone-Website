import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/img/wedtech_logo.DaHkmgqQ.webp';

export default function Footer() {
    return (
        <footer className={styles['footer-container']}>
            <div className={styles['footer-content']}>
                <div className={styles['footer-grid']}>
                    {/* Column 1: Brand */}
                    <div className={styles['footer-logo-col']}>
                        <Link to="/">
                            <img src={logo} alt="Wedtech Logo" className={styles['footer-logo']} />
                        </Link>
                        <p className={styles['footer-desc']}>
                            Nền tảng công nghệ hàng đầu kết nối nhà cung cấp dịch vụ cưới hỏi và khách hàng chuyên nghiệp.
                        </p>
                    </div>

                    {/* Column 2: Khám phá */}
                    <div>
                        <h4 className={styles['footer-col-title']}>Khám phá</h4>
                        <ul className={styles['footer-list']}>
                            <li><Link to="/" className={styles['footer-link']}>Nhà cung cấp</Link></li>
                            <li><Link to="/" className={styles['footer-link']}>Đơn vị sự kiện</Link></li>
                            <li><Link to="/" className={styles['footer-link']}>Dự án</Link></li>
                            <li><Link to="/" className={styles['footer-link']}>Sản phẩm</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Dành cho đối tác */}
                    <div>
                        <h4 className={styles['footer-col-title']}>Dành cho đối tác</h4>
                        <ul className={styles['footer-list']}>
                            <li><Link to="/" className={styles['footer-link']}>Cổng nhà cung cấp</Link></li>
                            <li><Link to="/" className={styles['footer-link']}>Giải pháp doanh nghiệp</Link></li>
                            <li><Link to="/" className={styles['footer-link']}>Wedtech Agency</Link></li>
                            <li><Link to="/" className={styles['footer-link']}>Chính sách hợp tác</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Hỗ trợ */}
                    <div>
                        <h4 className={styles['footer-col-title']}>Hỗ trợ</h4>
                        <ul className={styles['footer-list']}>
                            <li><Link to="/" className={styles['footer-link']}>Về chúng tôi</Link></li>
                            <li><Link to="/" className={styles['footer-link']}>Chính sách bảo mật</Link></li>
                            <li><Link to="/" className={styles['footer-link']}>Điều khoản dịch vụ</Link></li>
                            <li><Link to="/" className={styles['footer-link']}>Liên hệ hỗ trợ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
