import styles from "../cards/Card.module.css";

export default function SectionWrapper({ children, variant = 1, bgColor, className = "" }) {
    const baseClass = variant === 2 ? styles["product-section-wrapper-2"] : styles["product-section-wrapper"];
    return (
        <div 
            className={`${baseClass} ${className}`}
            style={bgColor ? { backgroundColor: bgColor } : {}}
        >
            {children}
        </div>
    );
}
