export default function SectionWrapper({ children, variant = 1 }) {
    const className = variant === 2 ? "product-section-wrapper-2" : "product-section-wrapper";
    return (
        <div className={className}>
            {children}
        </div>
    );
}
