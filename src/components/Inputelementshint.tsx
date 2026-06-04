import "@/styles/Inputelementshint.css";
interface inputelementshintProps {
    text?: string;
    state?: string;
    size?: string;
    id?: string;
    className?: string;
    text_2_1822?: string;
    text_2_1824?: string;
    text_2_1834?: string;
    text_2_1832?: string;
    text_2_1828?: string;
    text_2_1836?: string;
    text_2_1826?: string;
    text_2_1830?: string;
}
const Inputelementshint = (props: inputelementshintProps) => {
    const {
        text = "Hint",
        state,
        size,
        id,
        className = "",
        text_2_1822,
        text_2_1824,
        text_2_1834,
        text_2_1832,
        text_2_1828,
        text_2_1836,
        text_2_1826,
        text_2_1830
    } = props;

    return (
        <div className={`component-2_1820 ${className}`} id={id}>
            <div id="2_1820" className="symbol-2_1820">
                {state === "default" && size === "l" && (
                    <div id="2_1821" className="symbol-2_1821">
                        <p
                            id="2_1822"
                            className="paragraph-2_1822 fill-lightfgmuted-2_2296-paragraph text-mobilecaption-l-2_2289"
                        >
                            {text ?? text_2_1822 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "default" && size === "m" && (
                    <div id="2_1823" className="symbol-2_1823">
                        <p
                            id="2_1824"
                            className="paragraph-2_1824 fill-lightfgmuted-2_2296-paragraph text-caption-m-2_2285"
                        >
                            {text ?? text_2_1824 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "error" && size === "l" && (
                    <div id="2_1825" className="symbol-2_1825">
                        <p
                            id="2_1826"
                            className="paragraph-2_1826 fill-lightinteractive-errordefault-2_2298-paragraph text-mobilecaption-l-2_2289"
                        >
                            {text ?? text_2_1826 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "error" && size === "m" && (
                    <div id="2_1827" className="symbol-2_1827">
                        <p
                            id="2_1828"
                            className="paragraph-2_1828 fill-lightinteractive-errordefault-2_2298-paragraph text-caption-m-2_2285"
                        >
                            {text ?? text_2_1828 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "success" && size === "l" && (
                    <div id="2_1829" className="symbol-2_1829">
                        <p
                            id="2_1830"
                            className="paragraph-2_1830 fill-lightsuccessdefault-2_2297-paragraph text-mobilecaption-l-2_2289"
                        >
                            {text ?? text_2_1830 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "success" && size === "m" && (
                    <div id="2_1831" className="symbol-2_1831">
                        <p
                            id="2_1832"
                            className="paragraph-2_1832 fill-lightsuccessdefault-2_2297-paragraph text-caption-m-2_2285"
                        >
                            {text ?? text_2_1832 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "disabled" && size === "m" && (
                    <div id="2_1833" className="symbol-2_1833">
                        <p
                            id="2_1834"
                            className="paragraph-2_1834 fill-lightfgdisabled-2_2294-paragraph text-caption-m-2_2285"
                        >
                            {text ?? text_2_1834 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "disabled" && size === "l" && (
                    <div id="2_1835" className="symbol-2_1835">
                        <p
                            id="2_1836"
                            className="paragraph-2_1836 fill-lightfgdisabled-2_2294-paragraph text-mobilecaption-l-2_2289"
                        >
                            {text ?? text_2_1836 ?? "Hint"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Inputelementshint;
