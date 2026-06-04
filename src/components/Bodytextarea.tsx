import "@/styles/Bodytextarea.css";
interface bodytextareaProps {
    placeholder?: string;
    textfilled?: string;
    size?: string;
    filled?: string;
    cursor?: string;
    id?: string;
    className?: string;
    text_50_44339?: string;
    text_50_44341?: string;
    text_50_44343?: string;
    text_50_44367?: string;
    text_50_44352?: string;
    text_50_44360?: string;
    text_50_44363?: string;
    text_50_44365?: string;
    text_50_44346?: string;
    text_50_44349?: string;
    text_50_44354?: string;
    text_50_44357?: string;
}
const Bodytextarea = (props: bodytextareaProps) => {
    const {
        placeholder = "Placeholder text",
        textfilled = "Text filling",
        size,
        filled,
        cursor,
        id,
        className = "",
        text_50_44339,
        text_50_44341,
        text_50_44343,
        text_50_44367,
        text_50_44352,
        text_50_44360,
        text_50_44363,
        text_50_44365,
        text_50_44346,
        text_50_44349,
        text_50_44354,
        text_50_44357
    } = props;

    return (
        <div className={`component-50_44337 ${className}`} id={id}>
            <div id="50_44337" className="symbol-50_44337">
                {size === "l" && filled === "false" && cursor === "false" && (
                    <div id="50_44338" className="symbol-50_44338">
                        <p
                            id="50_44339"
                            className="paragraph-50_44339 fill-lightfgmuted-2_2228-paragraph text-mobilebody-m-2_2287"
                        >
                            {placeholder ?? text_50_44339 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "xl" && filled === "false" && cursor === "false" && (
                    <div id="50_44340" className="symbol-50_44340">
                        <p
                            id="50_44341"
                            className="paragraph-50_44341 fill-lightfgmuted-2_2228-paragraph text-mobilebody-l-2_2286"
                        >
                            {placeholder ?? text_50_44341 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "m" && filled === "false" && cursor === "false" && (
                    <div id="50_44342" className="symbol-50_44342">
                        <p
                            id="50_44343"
                            className="paragraph-50_44343 fill-lightfgmuted-2_2228-paragraph text-mobiledescription-l-2_2288"
                        >
                            {placeholder ?? text_50_44343 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "l" && filled === "false" && cursor === "true" && (
                    <div id="50_44344" className="symbol-50_44344">
                        <div
                            id="50_44345"
                            className="rectangle-50_44345 fill-lightinteractiveaccent-2_20378"
                        ></div>
                        <p
                            id="50_44346"
                            className="paragraph-50_44346 fill-lightfgmuted-2_2228-paragraph text-mobilebody-m-2_2287"
                        >
                            {placeholder ?? text_50_44346 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "xl" && filled === "false" && cursor === "true" && (
                    <div id="50_44347" className="symbol-50_44347">
                        <div
                            id="50_44348"
                            className="rectangle-50_44348 fill-lightinteractiveaccent-2_20378"
                        ></div>
                        <p
                            id="50_44349"
                            className="paragraph-50_44349 fill-lightfgmuted-2_2228-paragraph text-mobilebody-l-2_2286"
                        >
                            {placeholder ?? text_50_44349 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "m" && filled === "false" && cursor === "true" && (
                    <div id="50_44350" className="symbol-50_44350">
                        <div
                            id="50_44351"
                            className="rectangle-50_44351 fill-lightinteractiveaccent-2_20378"
                        ></div>
                        <p
                            id="50_44352"
                            className="paragraph-50_44352 fill-lightfgmuted-2_2228-paragraph text-mobiledescription-l-2_2288"
                        >
                            {placeholder ?? text_50_44352 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "l" && filled === "true" && cursor === "true" && (
                    <div id="50_44353" className="symbol-50_44353">
                        <p
                            id="50_44354"
                            className="paragraph-50_44354 fill-lightfgdefault-2_2230-paragraph text-mobilebody-m-2_2287"
                        >
                            {textfilled ?? text_50_44354 ?? "Text filling"}
                        </p>
                        <div
                            id="50_44355"
                            className="rectangle-50_44355 fill-lightinteractiveaccent-2_20378"
                        ></div>
                    </div>
                )}
                {size === "xl" && filled === "true" && cursor === "true" && (
                    <div id="50_44356" className="symbol-50_44356">
                        <p
                            id="50_44357"
                            className="paragraph-50_44357 fill-lightfgdefault-2_2230-paragraph text-mobilebody-l-2_2286"
                        >
                            {textfilled ?? text_50_44357 ?? "Text filling"}
                        </p>
                        <div
                            id="50_44358"
                            className="rectangle-50_44358 fill-lightinteractiveaccent-2_20378"
                        ></div>
                    </div>
                )}
                {size === "m" && filled === "true" && cursor === "true" && (
                    <div id="50_44359" className="symbol-50_44359">
                        <p
                            id="50_44360"
                            className="paragraph-50_44360 fill-lightfgdefault-2_2230-paragraph text-mobiledescription-l-2_2288"
                        >
                            {textfilled ?? text_50_44360 ?? "Text filling"}
                        </p>
                        <div
                            id="50_44361"
                            className="rectangle-50_44361 fill-lightinteractiveaccent-2_20378"
                        ></div>
                    </div>
                )}
                {size === "l" && filled === "true" && cursor === "false" && (
                    <div id="50_44362" className="symbol-50_44362">
                        <p
                            id="50_44363"
                            className="paragraph-50_44363 fill-lightfgdefault-2_2230-paragraph text-mobilebody-m-2_2287"
                        >
                            {textfilled ?? text_50_44363 ?? "Text filling"}
                        </p>
                    </div>
                )}
                {size === "xl" && filled === "true" && cursor === "false" && (
                    <div id="50_44364" className="symbol-50_44364">
                        <p
                            id="50_44365"
                            className="paragraph-50_44365 fill-lightfgdefault-2_2230-paragraph text-mobilebody-l-2_2286"
                        >
                            {textfilled ?? text_50_44365 ?? "Text filling"}
                        </p>
                    </div>
                )}
                {size === "m" && filled === "true" && cursor === "false" && (
                    <div id="50_44366" className="symbol-50_44366">
                        <p
                            id="50_44367"
                            className="paragraph-50_44367 fill-lightfgdefault-2_2230-paragraph text-mobiledescription-l-2_2288"
                        >
                            {textfilled ?? text_50_44367 ?? "Text filling"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Bodytextarea;
