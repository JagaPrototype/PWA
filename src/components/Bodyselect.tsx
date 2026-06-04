import "@/styles/Bodyselect.css";
interface bodyselectProps {
    placeholder?: string;
    textfilled?: string;
    size?: string;
    filled?: string;
    cursor?: string;
    id?: string;
    className?: string;
    text_2_24017?: string;
    text_2_19246_2_24017?: string;
    text_2_23989?: string;
    text_2_23991?: string;
    text_2_23993?: string;
    text_2_24002?: string;
    text_2_24010?: string;
    text_2_24013?: string;
    text_2_24015?: string;
    text_2_23996?: string;
    text_2_24004?: string;
    text_2_23999?: string;
    text_2_24007?: string;
}
const Bodyselect = (props: bodyselectProps) => {
    const {
        placeholder = "Placeholder text",
        textfilled = "Text filling",
        size,
        filled,
        cursor,
        id,
        className = "",
        text_2_24017,
        text_2_19246_2_24017,
        text_2_23989,
        text_2_23991,
        text_2_23993,
        text_2_24002,
        text_2_24010,
        text_2_24013,
        text_2_24015,
        text_2_23996,
        text_2_24004,
        text_2_23999,
        text_2_24007
    } = props;

    return (
        <div className={`component-2_23987 ${className}`} id={id}>
            <div id="2_23987" className="symbol-2_23987">
                {size === "l" && filled === "false" && cursor === "false" && (
                    <div id="2_23988" className="symbol-2_23988">
                        <p
                            id="2_23989"
                            className="paragraph-2_23989 fill-lightfgmuted-2_22048-paragraph text-mobilebody-m-2_2287"
                        >
                            {placeholder ?? text_2_23989 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "xl" && filled === "false" && cursor === "false" && (
                    <div id="2_23990" className="symbol-2_23990">
                        <p
                            id="2_23991"
                            className="paragraph-2_23991 fill-lightfgmuted-2_22048-paragraph text-mobilebody-l-2_20372"
                        >
                            {placeholder ?? text_2_23991 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "m" && filled === "false" && cursor === "false" && (
                    <div id="2_23992" className="symbol-2_23992">
                        <p
                            id="2_23993"
                            className="paragraph-2_23993 fill-lightfgmuted-2_22048-paragraph text-mobiledescription-l-2_2288"
                        >
                            {placeholder ?? text_2_23993 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "l" && filled === "false" && cursor === "true" && (
                    <div id="2_23994" className="symbol-2_23994">
                        <div
                            id="2_23995"
                            className="rectangle-2_23995 fill-lightinteractiveaccent-2_2283"
                        ></div>
                        <p
                            id="2_23996"
                            className="paragraph-2_23996 fill-lightfgmuted-2_22048-paragraph text-mobilebody-m-2_2287"
                        >
                            {placeholder ?? text_2_23996 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "xl" && filled === "false" && cursor === "true" && (
                    <div id="2_23997" className="symbol-2_23997">
                        <div
                            id="2_23998"
                            className="rectangle-2_23998 fill-lightinteractiveaccent-2_2283"
                        ></div>
                        <p
                            id="2_23999"
                            className="paragraph-2_23999 fill-lightfgmuted-2_22048-paragraph text-mobilebody-l-2_20372"
                        >
                            {placeholder ?? text_2_23999 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "m" && filled === "false" && cursor === "true" && (
                    <div id="2_24000" className="symbol-2_24000">
                        <div
                            id="2_24001"
                            className="rectangle-2_24001 fill-lightinteractiveaccent-2_2283"
                        ></div>
                        <p
                            id="2_24002"
                            className="paragraph-2_24002 fill-lightfgmuted-2_22048-paragraph text-mobiledescription-l-2_2288"
                        >
                            {placeholder ?? text_2_24002 ?? "Placeholder text"}
                        </p>
                    </div>
                )}
                {size === "l" && filled === "true" && cursor === "true" && (
                    <div id="2_24003" className="symbol-2_24003">
                        <p
                            id="2_24004"
                            className="paragraph-2_24004 fill-lightfgdefault-2_22054-paragraph text-mobilebody-m-2_2287"
                        >
                            {textfilled ?? text_2_24004 ?? "Text filling"}
                        </p>
                        <div
                            id="2_24005"
                            className="rectangle-2_24005 fill-lightinteractiveaccent-2_2283"
                        ></div>
                    </div>
                )}
                {size === "xl" && filled === "true" && cursor === "true" && (
                    <div id="2_24006" className="symbol-2_24006">
                        <p
                            id="2_24007"
                            className="paragraph-2_24007 fill-lightfgdefault-2_22054-paragraph text-mobilebody-l-2_20372"
                        >
                            {textfilled ?? text_2_24007 ?? "Text filling"}
                        </p>
                        <div
                            id="2_24008"
                            className="rectangle-2_24008 fill-lightinteractiveaccent-2_2283"
                        ></div>
                    </div>
                )}
                {size === "m" && filled === "true" && cursor === "true" && (
                    <div id="2_24009" className="symbol-2_24009">
                        <p
                            id="2_24010"
                            className="paragraph-2_24010 fill-lightfgdefault-2_22054-paragraph text-mobiledescription-l-2_2288"
                        >
                            {textfilled ?? text_2_24010 ?? "Text filling"}
                        </p>
                        <div
                            id="2_24011"
                            className="rectangle-2_24011 fill-lightinteractiveaccent-2_2283"
                        ></div>
                    </div>
                )}
                {size === "l" && filled === "true" && cursor === "false" && (
                    <div id="2_24012" className="symbol-2_24012">
                        <p
                            id="2_24013"
                            className="paragraph-2_24013 fill-lightfgdefault-2_22054-paragraph text-mobilebody-m-2_2287"
                        >
                            {textfilled ?? text_2_24013 ?? "Text filling"}
                        </p>
                    </div>
                )}
                {size === "xl" && filled === "true" && cursor === "false" && (
                    <div id="2_24014" className="symbol-2_24014">
                        <p
                            id="2_24015"
                            className="paragraph-2_24015 fill-lightfgdefault-2_22054-paragraph text-mobilebody-l-2_20372"
                        >
                            {textfilled ?? text_2_24015 ?? "Text filling"}
                        </p>
                    </div>
                )}
                {size === "m" && filled === "true" && cursor === "false" && (
                    <div id="2_24016" className="symbol-2_24016">
                        <p
                            id="2_24017"
                            className="paragraph-2_24017 fill-lightfgdefault-2_22054-paragraph text-mobiledescription-l-2_2288"
                        >
                            {textfilled ??
                                text_2_24017 ??
                                text_2_19246_2_24017 ??
                                "Text filling"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Bodyselect;
