export default function Button ({
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    onClick,
    type = "button",
}) {
    const baseClass = "btn"

    const variantClass = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        danger: "btn-danger"
    }

    const sizeClass = {
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg"
    }

    return (
        <button 
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${baseClass} ${variantClass[variant]} ${sizeClass[size]}`}
        >
            {children}
        </button>
    )
}