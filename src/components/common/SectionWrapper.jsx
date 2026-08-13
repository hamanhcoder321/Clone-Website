import styles from "../cards/Card.module.css";

export default function SectionWrapper({ children, variant = 1 }) {
    const className = variant === 2 ? styles["product-section-wrapper-2"] : styles["product-section-wrapper"];
    return (
        <div className={className}>
            {children}
        </div>
    );
}
