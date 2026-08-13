import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileBottomNav.module.css';

export default function MobileBottomNav() {
    return (
        <nav className={styles['mobile-bottom-nav']}>
            
            {/* 1. Nhà cung cấp (Cửa hàng) */}
            <Link to="/suppliers" className={styles['nav-item']}>
                <svg className={styles['nav-icon']} viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className={styles['nav-text']}>NCC</span>
            </Link>

            {/* 2. Đơn vị sự kiện (Lịch) */}
            <Link to="/" className={styles['nav-item']}>
                <svg className={styles['nav-icon']} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className={styles['nav-text']}>ĐVSK</span>
            </Link>

            {/* 3. Nút nổi trung tâm (Trang chủ) */}
            <div className={styles['nav-item-center-wrapper']}>
                <Link to="/" className={`${styles['nav-item-center-circle']} ${styles.active}`}>
                    <svg className={styles['nav-icon']} viewBox="0 0 24 24">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span className={styles['nav-text']}>Trang chủ</span>
                </Link>
            </div>

            {/* 4. Dự án (Thư mục) */}
            <Link to="/" className={styles['nav-item']}>
                <svg className={styles['nav-icon']} viewBox="0 0 24 24">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className={styles['nav-text']}>Dự án</span>
            </Link>

            {/* 5. Sản phẩm (Khối hộp) */}
            <Link to="/" className={styles['nav-item']}>
                <svg className={styles['nav-icon']} viewBox="0 0 24 24">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <span className={styles['nav-text']}>Sản phẩm</span>
            </Link>

        </nav>
    );
}
