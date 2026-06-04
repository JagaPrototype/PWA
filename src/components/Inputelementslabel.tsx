import SecurityPrivate from "@/components/securityprivate";
import "@/styles/Inputelementslabel.css";
interface inputelementslabelProps {
    counter?: boolean;
    required?: boolean;
    labelText?: string;
    icon?: boolean;
    iconRight16?: string;
    size?: string;
    disabled?: string;
    id?: string;
    className?: string;
    text_2_1791?: string;
    text_2_1795?: string;
    text_2_1799?: string;
    text_2_1803?: string;
    text_2_1807?: string;
    text_2_1811?: string;
    text_2_1815?: string;
    text_2_1819?: string;
}
const Inputelementslabel = (props: inputelementslabelProps) => {
    const {
        counter = true,
        required = true,
        labelText = "Label",
        icon = true,
        iconRight16 = "Component_3491_94230",
        size,
        disabled,
        id,
        className = "",
        text_2_1791,
        text_2_1795,
        text_2_1799,
        text_2_1803,
        text_2_1807,
        text_2_1811,
        text_2_1815,
        text_2_1819
    } = props;

    return (
        <div className={`component-2_1787 ${className}`} id={id}>
            <div id="2_1787" className="symbol-2_1787">
                {size === "l" && disabled === "false" && (
                    <div id="2_1788" className="symbol-2_1788">
                        <div id="2_1789" className="frame-2_1789">
                            <div className="frame-content-2_1789">
                                <div id="2_1790" className="frame-2_1790">
                                    <div className="frame-content-2_1790">
                                        <p
                                            id="2_1791"
                                            className="paragraph-2_1791 fill-lightfgmuted-2_2296-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {labelText ??
                                                text_2_1791 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="2_1792"
                                                className="frame-2_1792"
                                            >
                                                <div className="frame-content-2_1792">
                                                    <div
                                                        id="2_1793"
                                                        className="vector-2_1793"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <SecurityPrivate
                                        id="2_1794"
                                        className="instance-2_1794"
                                    ></SecurityPrivate>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="2_1795"
                                className="paragraph-2_1795 fill-lightfgmuted-2_2296-paragraph text-mobilecaption-l-2_2289"
                            >
                                {text_2_1795 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
                {size === "m" && disabled === "false" && (
                    <div id="2_1796" className="symbol-2_1796">
                        <div id="2_1797" className="frame-2_1797">
                            <div className="frame-content-2_1797">
                                <div id="2_1798" className="frame-2_1798">
                                    <div className="frame-content-2_1798">
                                        <p
                                            id="2_1799"
                                            className="paragraph-2_1799 fill-lightfgmuted-2_2296-paragraph text-mobilecaption-m-2_2290"
                                        >
                                            {labelText ??
                                                text_2_1799 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="2_1800"
                                                className="frame-2_1800"
                                            >
                                                <div className="frame-content-2_1800">
                                                    <div
                                                        id="2_1801"
                                                        className="vector-2_1801"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <SecurityPrivate
                                        id="2_1802"
                                        className="instance-2_1802"
                                    ></SecurityPrivate>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="2_1803"
                                className="paragraph-2_1803 fill-lightfgmuted-2_2296-paragraph text-mobilecaption-m-2_2290"
                            >
                                {text_2_1803 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
                {size === "l" && disabled === "true" && (
                    <div id="2_1804" className="symbol-2_1804">
                        <div id="2_1805" className="frame-2_1805">
                            <div className="frame-content-2_1805">
                                <div id="2_1806" className="frame-2_1806">
                                    <div className="frame-content-2_1806">
                                        <p
                                            id="2_1807"
                                            className="paragraph-2_1807 fill-lightfgdisabled-2_2294-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {labelText ??
                                                text_2_1807 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="2_1808"
                                                className="frame-2_1808"
                                            >
                                                <div className="frame-content-2_1808">
                                                    <div
                                                        id="2_1809"
                                                        className="vector-2_1809"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <SecurityPrivate
                                        id="2_1810"
                                        className="instance-2_1810"
                                    ></SecurityPrivate>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="2_1811"
                                className="paragraph-2_1811 fill-lightfgdisabled-2_2294-paragraph text-mobilecaption-l-2_2289"
                            >
                                {text_2_1811 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
                {size === "m" && disabled === "true" && (
                    <div id="2_1812" className="symbol-2_1812">
                        <div id="2_1813" className="frame-2_1813">
                            <div className="frame-content-2_1813">
                                <div id="2_1814" className="frame-2_1814">
                                    <div className="frame-content-2_1814">
                                        <p
                                            id="2_1815"
                                            className="paragraph-2_1815 fill-lightfgdisabled-2_2294-paragraph text-mobilecaption-m-2_2290"
                                        >
                                            {labelText ??
                                                text_2_1815 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="2_1816"
                                                className="frame-2_1816"
                                            >
                                                <div className="frame-content-2_1816">
                                                    <div
                                                        id="2_1817"
                                                        className="vector-2_1817"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <SecurityPrivate
                                        id="2_1818"
                                        className="instance-2_1818"
                                    ></SecurityPrivate>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="2_1819"
                                className="paragraph-2_1819 fill-lightfgdisabled-2_2294-paragraph text-mobilecaption-m-2_2290"
                            >
                                {text_2_1819 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Inputelementslabel;
