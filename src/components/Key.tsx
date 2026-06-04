import "@/styles/Key.css";
interface keyProps {
    DarkMode?: string;
    Type?: string;
    id?: string;
    className?: string;
}
const Key = (props: keyProps) => {
    const { DarkMode, Type, id, className = "" } = props;

    return (
        <div className={`component-4_54197 ${className}`} id={id}>
            <div id="4_54197" className="symbol-4_54197">
                {DarkMode === "False" && Type === "Letter" && (
                    <div id="4_54198" className="symbol-4_54198">
                        <p
                            id="4_54200"
                            className="paragraph-4_54200 fill-label-colorlightprimary-4_54271-paragraph text-defaultregulartitle2-4_54275"
                        >
                            {"A"}
                        </p>
                    </div>
                )}
                {DarkMode === "False" && Type === "Numeric" && (
                    <div id="4_54201" className="symbol-4_54201">
                        <p
                            id="4_54203"
                            className="paragraph-4_54203 fill-label-colorlightprimary-4_54271-paragraph"
                        >
                            {"ABC"}
                        </p>
                        <p
                            id="4_54204"
                            className="paragraph-4_54204 fill-label-colorlightprimary-4_54271-paragraph"
                        >
                            {"A"}
                        </p>
                    </div>
                )}
                {DarkMode === "False" && Type === "Shift Active" && (
                    <div id="4_54205" className="symbol-4_54205">
                        <div id="4_54207" className="vector-4_54207"></div>
                    </div>
                )}
                {DarkMode === "False" && Type === "Shift Inactive" && (
                    <div id="4_54208" className="symbol-4_54208">
                        <div id="4_54210" className="vector-4_54210"></div>
                    </div>
                )}
                {DarkMode === "False" && Type === "Symbols" && (
                    <div id="4_54211" className="symbol-4_54211">
                        <p
                            id="4_54213"
                            className="paragraph-4_54213 fill-label-colorlightprimary-4_54271-paragraph"
                        >
                            {"#+="}
                        </p>
                    </div>
                )}
                {DarkMode === "False" && Type === "Delete" && (
                    <div id="4_54214" className="symbol-4_54214">
                        <div id="4_54216" className="vector-4_54216"></div>
                    </div>
                )}
                {DarkMode === "True" && Type === "Letter" && (
                    <div id="4_54217" className="symbol-4_54217">
                        <p
                            id="4_54219"
                            className="paragraph-4_54219 fill-label-colordarkprimary-4_54272-paragraph text-defaultregulartitle2-4_54275"
                        >
                            {"A"}
                        </p>
                    </div>
                )}
                {DarkMode === "True" && Type === "Numeric" && (
                    <div id="4_54220" className="symbol-4_54220">
                        <p id="4_54222" className="paragraph-4_54222">
                            {"ABC"}
                        </p>
                        <p id="4_54223" className="paragraph-4_54223">
                            {"A"}
                        </p>
                    </div>
                )}
                {DarkMode === "True" && Type === "Shift Active" && (
                    <div id="4_54224" className="symbol-4_54224">
                        <div id="4_54226" className="vector-4_54226"></div>
                    </div>
                )}
                {DarkMode === "True" && Type === "Shift Inactive" && (
                    <div id="4_54227" className="symbol-4_54227">
                        <div id="4_54229" className="vector-4_54229"></div>
                    </div>
                )}
                {DarkMode === "True" && Type === "Symbols" && (
                    <div id="4_54230" className="symbol-4_54230">
                        <p
                            id="4_54232"
                            className="paragraph-4_54232 fill-label-colordarkprimary-4_54272-paragraph"
                        >
                            {"#+="}
                        </p>
                    </div>
                )}
                {DarkMode === "True" && Type === "Delete" && (
                    <div id="4_54233" className="symbol-4_54233">
                        <div id="4_54235" className="vector-4_54235"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Key;
