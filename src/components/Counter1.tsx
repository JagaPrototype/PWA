import "@/styles/Counter1.css";
interface counter1Props {
    label?: string;
    size?: string;
    variant?: string;
    id?: string;
    className?: string;
    text_2_22021?: string;
}
const Counter1 = (props: counter1Props) => {
    const {
        label = "7",
        size,
        variant,
        id,
        className = "",
        text_2_22021
    } = props;

    return (
        <div className={`component-2_22019 ${className}`} id={id}>
            <div id="2_22019" className="symbol-2_22019">
                {size === "s" && variant === "primary" && (
                    <div
                        id="2_22020"
                        className="symbol-2_22020 fill-lightaccentdefault-2_20383 fill-lightaccentdefault-2_18799"
                    >
                        <p
                            id="2_22021"
                            className="paragraph-2_22021 fill-lightaccenton-accent-2_20364-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? text_2_22021 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s" && variant === "secondary" && (
                    <div
                        id="2_22022"
                        className="symbol-2_22022 fill-lightaccentcontainer-default-2_20379"
                    >
                        <p
                            id="2_22023"
                            className="paragraph-2_22023 fill-lightfgsoft-2_20355-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s" && variant === "error" && (
                    <div
                        id="2_22024"
                        className="symbol-2_22024 fill-lightinteractive-errordefault-2_20322"
                    >
                        <p
                            id="2_22025"
                            className="paragraph-2_22025 fill-lightinteractive-erroron-error-2_20350-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s" && variant === "contrast" && (
                    <div
                        id="2_22026"
                        className="symbol-2_22026 fill-lightbgsurface1-2_2231"
                    >
                        <p
                            id="2_22027"
                            className="paragraph-2_22027 fill-lightaccentdefault-2_20383-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s" && variant === "tertiary" && (
                    <div id="2_22028" className="symbol-2_22028">
                        <p
                            id="2_22029"
                            className="paragraph-2_22029 fill-lightfgsoft-2_20320-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m" && variant === "primary" && (
                    <div
                        id="2_22030"
                        className="symbol-2_22030 fill-lightaccentdefault-2_20383"
                    >
                        <p
                            id="2_22031"
                            className="paragraph-2_22031 fill-lightaccenton-accent-2_20364-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m" && variant === "secondary" && (
                    <div
                        id="2_22032"
                        className="symbol-2_22032 fill-lightaccentcontainer-default-2_20379"
                    >
                        <p
                            id="2_22033"
                            className="paragraph-2_22033 fill-lightfgsoft-2_20320-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m" && variant === "error" && (
                    <div
                        id="2_22034"
                        className="symbol-2_22034 fill-lightinteractive-errordefault-2_20322"
                    >
                        <p
                            id="2_22035"
                            className="paragraph-2_22035 fill-lightinteractive-erroron-error-2_20350-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m" && variant === "contrast" && (
                    <div
                        id="2_22036"
                        className="symbol-2_22036 fill-lightbgsurface1-2_2231"
                    >
                        <p
                            id="2_22037"
                            className="paragraph-2_22037 fill-lightaccentdefault-2_20383-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m" && variant === "tertiary" && (
                    <div id="2_22038" className="symbol-2_22038">
                        <p
                            id="2_22039"
                            className="paragraph-2_22039 fill-lightfgsoft-2_20320-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Counter1;
