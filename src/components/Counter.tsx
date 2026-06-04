import "@/styles/Counter.css";
interface counterProps {
    label?: string;
    size?: string;
    variant?: string;
    id?: string;
    className?: string;
    text_2_24607?: string;
    text_2_24609?: string;
    text_2_24611?: string;
    text_2_24613?: string;
    text_2_24615?: string;
    text_2_25272_2_24617?: string;
    text_2_24617?: string;
    text_2_24619?: string;
    text_2_24621?: string;
    text_2_24623?: string;
    text_2_24625?: string;
    text_2_24631?: string;
    text_2_24662?: string;
    text_2_24664?: string;
}
const Counter = (props: counterProps) => {
    const {
        label = "7",
        size,
        variant,
        id,
        className = "",
        text_2_24607,
        text_2_24609,
        text_2_24611,
        text_2_24613,
        text_2_24615,
        text_2_25272_2_24617,
        text_2_24617,
        text_2_24619,
        text_2_24621,
        text_2_24623,
        text_2_24625,
        text_2_24631,
        text_2_24662,
        text_2_24664
    } = props;

    return (
        <div className={`component-2_24605 ${className}`} id={id}>
            <div id="2_24605" className="symbol-2_24605">
                {size === "xs (16)" && variant === "primary" && (
                    <div
                        id="2_24606"
                        className="symbol-2_24606 fill-lightaccentdefault-2_4578 fill-lightaccenthover-2_23149"
                    >
                        <p
                            id="2_24607"
                            className="paragraph-2_24607 fill-lightaccenton-accent-2_4580-paragraph text-caption-m-strong-2_2229 fill-lightbgsurface1-2_2272-paragraph"
                        >
                            {label ?? text_2_24607 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "secondary" && (
                    <div
                        id="2_24608"
                        className="symbol-2_24608 fill-lightaccentcontainer-default-2_24601"
                    >
                        <p
                            id="2_24609"
                            className="paragraph-2_24609 fill-lightfgsoft-2_20355-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? text_2_24609 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "error" && (
                    <div
                        id="2_24610"
                        className="symbol-2_24610 fill-lightinteractive-errordefault-2_2298"
                    >
                        <p
                            id="2_24611"
                            className="paragraph-2_24611 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? text_2_24611 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "contrast" && (
                    <div
                        id="2_24612"
                        className="symbol-2_24612 fill-lightbgsurface1-2_2272"
                    >
                        <p
                            id="2_24613"
                            className="paragraph-2_24613 fill-lightaccentdefault-2_4578-paragraph text-caption-m-strong-2_2229 fill-lightinteractive-errorhover-2_23158-paragraph fill-lightneutraldefault-2_23155-paragraph"
                        >
                            {label ?? text_2_24613 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "tertiary" && (
                    <div
                        id="2_24614"
                        className="symbol-2_24614 fill-lightbgsurface1-2_2272"
                    >
                        <p
                            id="2_24615"
                            className="paragraph-2_24615 fill-lightfgdefault-2_2273-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? text_2_24615 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "primary" && (
                    <div
                        id="2_24616"
                        className="symbol-2_24616 fill-lightaccentdefault-2_4578 fill-lightaccenthover-2_23149"
                    >
                        <p
                            id="2_24617"
                            className="paragraph-2_24617 fill-lightaccenton-accent-2_4580-paragraph text-caption-l-strong-2_20366 fill-lightbgsurface1-2_2272-paragraph"
                        >
                            {label ??
                                text_2_25272_2_24617 ??
                                text_2_24617 ??
                                "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "secondary" && (
                    <div
                        id="2_24618"
                        className="symbol-2_24618 fill-lightaccentcontainer-default-2_24601"
                    >
                        <p
                            id="2_24619"
                            className="paragraph-2_24619 fill-lightfgsoft-2_24602-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? text_2_24619 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "error" && (
                    <div
                        id="2_24620"
                        className="symbol-2_24620 fill-lightinteractive-errordefault-2_2298"
                    >
                        <p
                            id="2_24621"
                            className="paragraph-2_24621 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? text_2_24621 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "contrast" && (
                    <div
                        id="2_24622"
                        className="symbol-2_24622 fill-lightbgsurface1-2_2272"
                    >
                        <p
                            id="2_24623"
                            className="paragraph-2_24623 fill-lightaccentdefault-2_4578-paragraph text-caption-l-strong-2_20366 fill-lightinteractive-errorhover-2_23158-paragraph fill-lightneutraldefault-2_23155-paragraph"
                        >
                            {label ?? text_2_24623 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "tertiary" && (
                    <div
                        id="2_24624"
                        className="symbol-2_24624 fill-lightbgsurface1-2_2272"
                    >
                        <p
                            id="2_24625"
                            className="paragraph-2_24625 fill-lightfgdefault-2_2273-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? text_2_24625 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "primary" && (
                    <div
                        id="2_24626"
                        className="symbol-2_24626 fill-lightaccentdefault-2_4578"
                    >
                        <p
                            id="2_24627"
                            className="paragraph-2_24627 fill-lightaccenton-accent-2_4580-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "secondary" && (
                    <div
                        id="2_24628"
                        className="symbol-2_24628 fill-lightaccentcontainer-default-2_24601"
                    >
                        <p
                            id="2_24629"
                            className="paragraph-2_24629 fill-lightfgsoft-2_24602-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "error" && (
                    <div
                        id="2_24630"
                        className="symbol-2_24630 fill-lightinteractive-errordefault-2_2298"
                    >
                        <p
                            id="2_24631"
                            className="paragraph-2_24631 fill-lightinteractive-erroron-error-2_23157-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? text_2_24631 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "contrast" && (
                    <div
                        id="2_24632"
                        className="symbol-2_24632 fill-lightbgsurface1-2_2272"
                    >
                        <p
                            id="2_24633"
                            className="paragraph-2_24633 fill-lightaccentdefault-2_4578-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "tertiary" && (
                    <div
                        id="2_24634"
                        className="symbol-2_24634 fill-lightbgsurface1-2_2272"
                    >
                        <p
                            id="2_24635"
                            className="paragraph-2_24635 fill-lightfgdefault-2_2273-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xss (6)" && variant === "primary" && (
                    <div
                        id="2_24636"
                        className="symbol-2_24636 fill-lightaccentdefault-2_4578"
                    ></div>
                )}
                {size === "xss (6)" && variant === "error" && (
                    <div
                        id="2_24637"
                        className="symbol-2_24637 fill-lighterrordefault-2_23162"
                    ></div>
                )}
                {size === "xss (6)" && variant === "warning" && (
                    <div
                        id="2_24638"
                        className="symbol-2_24638 fill-lightwarningdefault-2_22060"
                    ></div>
                )}
                {size === "xss (6)" && variant === "contrast" && (
                    <div
                        id="2_24639"
                        className="symbol-2_24639 fill-lightaccenton-accent-2_4580"
                    ></div>
                )}
                {size === "xss (6)" && variant === "tertiary" && (
                    <div
                        id="2_24640"
                        className="symbol-2_24640 fill-lightaccenton-accent-2_4580"
                    ></div>
                )}
                {size === "xss (6)" && variant === "success" && (
                    <div
                        id="2_24641"
                        className="symbol-2_24641 fill-lightsuccessdefault-2_2297"
                    ></div>
                )}
                {size === "l (32)" && variant === "warning" && (
                    <div
                        id="2_24642"
                        className="symbol-2_24642 fill-lightwarningdefault-2_22060"
                    >
                        <p
                            id="2_24643"
                            className="paragraph-2_24643 fill-lightinteractive-erroron-error-2_23157-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "warning" && (
                    <div
                        id="2_24644"
                        className="symbol-2_24644 fill-lightwarningdefault-2_22060"
                    >
                        <p
                            id="2_24645"
                            className="paragraph-2_24645 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "warning" && (
                    <div
                        id="2_24646"
                        className="symbol-2_24646 fill-lightwarningdefault-2_22060"
                    >
                        <p
                            id="2_24647"
                            className="paragraph-2_24647 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "success" && (
                    <div
                        id="2_24648"
                        className="symbol-2_24648 fill-lightsuccessdefault-2_2297"
                    >
                        <p
                            id="2_24649"
                            className="paragraph-2_24649 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "success" && (
                    <div
                        id="2_24650"
                        className="symbol-2_24650 fill-lightsuccessdefault-2_2297"
                    >
                        <p
                            id="2_24651"
                            className="paragraph-2_24651 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "success" && (
                    <div
                        id="2_24652"
                        className="symbol-2_24652 fill-lightsuccessdefault-2_2297"
                    >
                        <p
                            id="2_24653"
                            className="paragraph-2_24653 fill-lightinteractive-erroron-error-2_23157-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xss (6)" && variant === "secondary" && (
                    <div
                        id="2_24654"
                        className="symbol-2_24654 fill-lightaccentcontainer-default-2_24601"
                    ></div>
                )}
                {size === "s (20)" && variant === "primary" && (
                    <div
                        id="2_24655"
                        className="symbol-2_24655 fill-lightaccentdefault-2_4578"
                    >
                        <p
                            id="2_24656"
                            className="paragraph-2_24656 fill-lightaccenton-accent-2_4580-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "secondary" && (
                    <div
                        id="2_24657"
                        className="symbol-2_24657 fill-lightaccentcontainer-default-2_24601"
                    >
                        <p
                            id="2_24658"
                            className="paragraph-2_24658 fill-lightfgsoft-2_20355-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "error" && (
                    <div
                        id="2_24659"
                        className="symbol-2_24659 fill-lightinteractive-errordefault-2_2298"
                    >
                        <p
                            id="2_24660"
                            className="paragraph-2_24660 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "contrast" && (
                    <div
                        id="2_24661"
                        className="symbol-2_24661 fill-lightbgsurface1-2_2272"
                    >
                        <p
                            id="2_24662"
                            className="paragraph-2_24662 fill-lightaccentdefault-2_4578-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? text_2_24662 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "tertiary" && (
                    <div
                        id="2_24663"
                        className="symbol-2_24663 fill-lightbgsurface1-2_2272"
                    >
                        <p
                            id="2_24664"
                            className="paragraph-2_24664 fill-lightfgdefault-2_2273-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? text_2_24664 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "warning" && (
                    <div
                        id="2_24665"
                        className="symbol-2_24665 fill-lightwarningdefault-2_22060"
                    >
                        <p
                            id="2_24666"
                            className="paragraph-2_24666 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "success" && (
                    <div
                        id="2_24667"
                        className="symbol-2_24667 fill-lightsuccessdefault-2_2297"
                    >
                        <p
                            id="2_24668"
                            className="paragraph-2_24668 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Counter;
