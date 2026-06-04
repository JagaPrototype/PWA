import "@/styles/Counter2.css";
interface counter2Props {
    label?: string;
    size?: string;
    variant?: string;
    id?: string;
    className?: string;
    text_2_23059?: string;
    text_2_23061?: string;
    text_2_23063?: string;
    text_2_23065?: string;
    text_2_23067?: string;
    text_2_23069?: string;
    text_2_23071?: string;
    text_2_23073?: string;
    text_2_23075?: string;
    text_2_23077?: string;
}
const Counter2 = (props: counter2Props) => {
    const {
        label = "7",
        size,
        variant,
        id,
        className = "",
        text_2_23059,
        text_2_23061,
        text_2_23063,
        text_2_23065,
        text_2_23067,
        text_2_23069,
        text_2_23071,
        text_2_23073,
        text_2_23075,
        text_2_23077
    } = props;

    return (
        <div className={`component-2_23057 ${className}`} id={id}>
            <div id="2_23057" className="symbol-2_23057">
                {size === "xs (16)" && variant === "primary" && (
                    <div
                        id="2_23058"
                        className="symbol-2_23058 fill-lightaccentdefault-2_4578 fill-lightaccenthover-2_23149"
                    >
                        <p
                            id="2_23059"
                            className="paragraph-2_23059 fill-lightaccenton-accent-2_4580-paragraph text-caption-m-strong-2_2229 fill-lightbgsurface1-2_55461-paragraph"
                        >
                            {label ?? text_2_23059 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "secondary" && (
                    <div
                        id="2_23060"
                        className="symbol-2_23060 fill-lightaccentcontainer-default-2_22052"
                    >
                        <p
                            id="2_23061"
                            className="paragraph-2_23061 fill-lightfgsoft-2_20355-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? text_2_23061 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "error" && (
                    <div
                        id="2_23062"
                        className="symbol-2_23062 fill-lightinteractive-errordefault-2_2298"
                    >
                        <p
                            id="2_23063"
                            className="paragraph-2_23063 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? text_2_23063 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "contrast" && (
                    <div
                        id="2_23064"
                        className="symbol-2_23064 fill-lightbgsurface1-2_22049 fill-lightbgsurface1-2_55461"
                    >
                        <p
                            id="2_23065"
                            className="paragraph-2_23065 fill-lightaccentdefault-2_4578-paragraph text-caption-m-strong-2_2229 fill-lightinteractive-errorhover-2_23158-paragraph fill-lightneutraldefault-2_23155-paragraph"
                        >
                            {label ?? text_2_23065 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "tertiary" && (
                    <div
                        id="2_23066"
                        className="symbol-2_23066 fill-lightbgsurface1-2_22049"
                    >
                        <p
                            id="2_23067"
                            className="paragraph-2_23067 fill-lightfgdefault-2_22054-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? text_2_23067 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "primary" && (
                    <div
                        id="2_23068"
                        className="symbol-2_23068 fill-lightaccentdefault-2_4578 fill-lightaccenthover-2_23149"
                    >
                        <p
                            id="2_23069"
                            className="paragraph-2_23069 fill-lightaccenton-accent-2_4580-paragraph text-caption-l-strong-2_20366 fill-lightbgsurface1-2_55461-paragraph"
                        >
                            {label ?? text_2_23069 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "secondary" && (
                    <div
                        id="2_23070"
                        className="symbol-2_23070 fill-lightaccentcontainer-default-2_22052"
                    >
                        <p
                            id="2_23071"
                            className="paragraph-2_23071 fill-lightfgsoft-2_23145-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? text_2_23071 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "error" && (
                    <div
                        id="2_23072"
                        className="symbol-2_23072 fill-lightinteractive-errordefault-2_2298"
                    >
                        <p
                            id="2_23073"
                            className="paragraph-2_23073 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? text_2_23073 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "contrast" && (
                    <div
                        id="2_23074"
                        className="symbol-2_23074 fill-lightbgsurface1-2_22049"
                    >
                        <p
                            id="2_23075"
                            className="paragraph-2_23075 fill-lightaccentdefault-2_4578-paragraph text-caption-l-strong-2_20366 fill-lightinteractive-errorhover-2_23158-paragraph fill-lightneutraldefault-2_23155-paragraph"
                        >
                            {label ?? text_2_23075 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "tertiary" && (
                    <div
                        id="2_23076"
                        className="symbol-2_23076 fill-lightbgsurface1-2_22049"
                    >
                        <p
                            id="2_23077"
                            className="paragraph-2_23077 fill-lightfgdefault-2_22054-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? text_2_23077 ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "primary" && (
                    <div
                        id="2_23078"
                        className="symbol-2_23078 fill-lightaccentdefault-2_4578"
                    >
                        <p
                            id="2_23079"
                            className="paragraph-2_23079 fill-lightaccenton-accent-2_4580-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "secondary" && (
                    <div
                        id="2_23080"
                        className="symbol-2_23080 fill-lightaccentcontainer-default-2_22052"
                    >
                        <p
                            id="2_23081"
                            className="paragraph-2_23081 fill-lightfgsoft-2_23145-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "error" && (
                    <div
                        id="2_23082"
                        className="symbol-2_23082 fill-lightinteractive-errordefault-2_2298"
                    >
                        <p
                            id="2_23083"
                            className="paragraph-2_23083 fill-lightinteractive-erroron-error-2_23157-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "contrast" && (
                    <div
                        id="2_23084"
                        className="symbol-2_23084 fill-lightbgsurface1-2_22049"
                    >
                        <p
                            id="2_23085"
                            className="paragraph-2_23085 fill-lightaccentdefault-2_4578-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "tertiary" && (
                    <div
                        id="2_23086"
                        className="symbol-2_23086 fill-lightbgsurface1-2_22049"
                    >
                        <p
                            id="2_23087"
                            className="paragraph-2_23087 fill-lightfgdefault-2_22054-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xss (6)" && variant === "primary" && (
                    <div
                        id="2_23088"
                        className="symbol-2_23088 fill-lightaccentdefault-2_4578"
                    ></div>
                )}
                {size === "xss (6)" && variant === "error" && (
                    <div
                        id="2_23089"
                        className="symbol-2_23089 fill-lighterrordefault-2_23162"
                    ></div>
                )}
                {size === "xss (6)" && variant === "warning" && (
                    <div
                        id="2_23090"
                        className="symbol-2_23090 fill-lightwarningdefault-2_23153"
                    ></div>
                )}
                {size === "xss (6)" && variant === "contrast" && (
                    <div
                        id="2_23091"
                        className="symbol-2_23091 fill-lightaccenton-accent-2_4580"
                    ></div>
                )}
                {size === "xss (6)" && variant === "tertiary" && (
                    <div
                        id="2_23092"
                        className="symbol-2_23092 fill-lightaccenton-accent-2_4580"
                    ></div>
                )}
                {size === "xss (6)" && variant === "success" && (
                    <div
                        id="2_23093"
                        className="symbol-2_23093 fill-lightsuccessdefault-2_2297"
                    ></div>
                )}
                {size === "l (32)" && variant === "warning" && (
                    <div
                        id="2_23094"
                        className="symbol-2_23094 fill-lightwarningdefault-2_23153"
                    >
                        <p
                            id="2_23095"
                            className="paragraph-2_23095 fill-lightinteractive-erroron-error-2_23157-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "warning" && (
                    <div
                        id="2_23096"
                        className="symbol-2_23096 fill-lightwarningdefault-2_23153"
                    >
                        <p
                            id="2_23097"
                            className="paragraph-2_23097 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "warning" && (
                    <div
                        id="2_23098"
                        className="symbol-2_23098 fill-lightwarningdefault-2_23153"
                    >
                        <p
                            id="2_23099"
                            className="paragraph-2_23099 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xs (16)" && variant === "success" && (
                    <div
                        id="2_23100"
                        className="symbol-2_23100 fill-lightsuccessdefault-2_2297"
                    >
                        <p
                            id="2_23101"
                            className="paragraph-2_23101 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "m (24)" && variant === "success" && (
                    <div
                        id="2_23102"
                        className="symbol-2_23102 fill-lightsuccessdefault-2_2297"
                    >
                        <p
                            id="2_23103"
                            className="paragraph-2_23103 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-l-strong-2_20366"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "l (32)" && variant === "success" && (
                    <div
                        id="2_23104"
                        className="symbol-2_23104 fill-lightsuccessdefault-2_2297"
                    >
                        <p
                            id="2_23105"
                            className="paragraph-2_23105 fill-lightinteractive-erroron-error-2_23157-paragraph text-description-l-strong-2_20369"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "xss (6)" && variant === "secondary" && (
                    <div
                        id="2_23106"
                        className="symbol-2_23106 fill-lightaccentcontainer-default-2_22052"
                    ></div>
                )}
                {size === "s (20)" && variant === "primary" && (
                    <div
                        id="2_23107"
                        className="symbol-2_23107 fill-lightaccentdefault-2_4578"
                    >
                        <p
                            id="2_23108"
                            className="paragraph-2_23108 fill-lightaccenton-accent-2_4580-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "secondary" && (
                    <div
                        id="2_23109"
                        className="symbol-2_23109 fill-lightaccentcontainer-default-2_22052"
                    >
                        <p
                            id="2_23110"
                            className="paragraph-2_23110 fill-lightfgsoft-2_20355-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "error" && (
                    <div
                        id="2_23111"
                        className="symbol-2_23111 fill-lightinteractive-errordefault-2_2298"
                    >
                        <p
                            id="2_23112"
                            className="paragraph-2_23112 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "contrast" && (
                    <div
                        id="2_23113"
                        className="symbol-2_23113 fill-lightbgsurface1-2_22049"
                    >
                        <p
                            id="2_23114"
                            className="paragraph-2_23114 fill-lightaccentdefault-2_4578-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "tertiary" && (
                    <div
                        id="2_23115"
                        className="symbol-2_23115 fill-lightbgsurface1-2_22049"
                    >
                        <p
                            id="2_23116"
                            className="paragraph-2_23116 fill-lightfgdefault-2_22054-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "warning" && (
                    <div
                        id="2_23117"
                        className="symbol-2_23117 fill-lightwarningdefault-2_23153"
                    >
                        <p
                            id="2_23118"
                            className="paragraph-2_23118 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
                {size === "s (20)" && variant === "success" && (
                    <div
                        id="2_23119"
                        className="symbol-2_23119 fill-lightsuccessdefault-2_2297"
                    >
                        <p
                            id="2_23120"
                            className="paragraph-2_23120 fill-lightinteractive-erroron-error-2_23157-paragraph text-caption-m-strong-2_2229"
                        >
                            {label ?? "7"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Counter2;
