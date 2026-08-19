export default function Badge({children, variant = "default"}) {
    const variantClass = {
        default: "badge-default",
        success: "badge-success",
        warning: "badge-warning",
        danger: "badge-danger"
    }

    return (
        <span className={`badge ${variantClass[variant]}`}>
            {children}
        </span>
    )
}