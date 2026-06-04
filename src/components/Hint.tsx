import "@/styles/Hint.css";
interface hintProps {
    caption?: string;
    error?: string;
    successfully?: string;
    size?: string;
    state?: string;
    id?: string;
    className?: string;
    text_2_20265?: string;
    text_2_19249_2_20267?: string;
    text_2_20267?: string;
    text_2_20269?: string;
    text_2_20271?: string;
    text_2_20273?: string;
    text_2_20275?: string;
}
const Hint = (props: hintProps) => {
    const {
        caption = "Caption",
        error = "Error",
        successfully = "Successfully",
        size,
        state,
        id,
        className = "",
        text_2_20265,
        text_2_19249_2_20267,
        text_2_20267,
        text_2_20269,
        text_2_20271,
        text_2_20273,
        text_2_20275
    } = props;

    return (
        <div className={`component-2_20263 ${className}`} id={id}>
            <div id="2_20263" className="symbol-2_20263">
                {size === "l" && state === "default" && (
                    <div id="2_20264" className="symbol-2_20264">
                        <p
                            id="2_20265"
                            className="paragraph-2_20265 fill-lightfgmuted-2_2271-paragraph text-mobilecaption-l-2_2289"
                        >
                            {caption ?? text_2_20265 ?? "Caption"}
                        </p>
                    </div>
                )}
                {size === "m" && state === "default" && (
                    <div id="2_20266" className="symbol-2_20266">
                        <p
                            id="2_20267"
                            className="paragraph-2_20267 fill-lightfgmuted-2_2271-paragraph text-caption-m-2_2285"
                        >
                            {caption ??
                                text_2_19249_2_20267 ??
                                text_2_20267 ??
                                "Caption"}
                        </p>
                    </div>
                )}
                {size === "l" && state === "error" && (
                    <div id="2_20268" className="symbol-2_20268">
                        <p
                            id="2_20269"
                            className="paragraph-2_20269 fill-lightinteractive-errordefault-2_2298-paragraph text-mobilecaption-l-2_2289"
                        >
                            {error ?? text_2_20269 ?? "Error"}
                        </p>
                    </div>
                )}
                {size === "m" && state === "error" && (
                    <div id="2_20270" className="symbol-2_20270">
                        <p
                            id="2_20271"
                            className="paragraph-2_20271 fill-lightinteractive-errordefault-2_2298-paragraph text-mobilecaption-m-2_2290"
                        >
                            {error ?? text_2_20271 ?? "Error"}
                        </p>
                    </div>
                )}
                {size === "l" && state === "success" && (
                    <div id="2_20272" className="symbol-2_20272">
                        <p
                            id="2_20273"
                            className="paragraph-2_20273 fill-lightsuccessdefault-2_2297-paragraph text-mobilecaption-l-2_2289"
                        >
                            {successfully ?? text_2_20273 ?? "Successfully"}
                        </p>
                    </div>
                )}
                {size === "m" && state === "success" && (
                    <div id="2_20274" className="symbol-2_20274">
                        <p
                            id="2_20275"
                            className="paragraph-2_20275 fill-lightsuccessdefault-2_2297-paragraph text-mobilecaption-m-2_2290"
                        >
                            {successfully ?? text_2_20275 ?? "Successfully"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Hint;
