import "@/styles/Badge.css";
interface badgeProps {
    variant?: string;
    id?: string;
    className?: string;
}
const Badge = (props: badgeProps) => {
    const { variant, id, className = "" } = props;

    return (
        <div className={`component-2_18959 ${className}`} id={id}>
            <div id="2_18959" className="symbol-2_18959">
                {variant === "primary" && (
                    <div
                        id="2_18960"
                        className="symbol-2_18960 fill-lightaccentdefault-2_18968 fill-lightaccentdefault-2_18799"
                    ></div>
                )}
                {variant === "error" && (
                    <div
                        id="2_18961"
                        className="symbol-2_18961 fill-lighterrordefault-2_18969"
                    ></div>
                )}
                {variant === "warning" && (
                    <div
                        id="2_18962"
                        className="symbol-2_18962 fill-lightwarningdefault-2_18958"
                    ></div>
                )}
                {variant === "on-accent" && (
                    <div
                        id="2_18963"
                        className="symbol-2_18963 fill-lightaccenton-accent-2_18842"
                    ></div>
                )}
            </div>
        </div>
    );
};
export default Badge;
