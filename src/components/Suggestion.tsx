import "@/styles/Suggestion.css";
interface suggestionProps {
    DarkMode?: string;
    Type?: string;
    id?: string;
    className?: string;
}
const Suggestion = (props: suggestionProps) => {
    const { DarkMode, Type, id, className = "" } = props;

    return (
        <div className={`component-4_54248 ${className}`} id={id}>
            <div id="4_54248" className="symbol-4_54248">
                {DarkMode === "False" && Type === "Words" && (
                    <div id="4_54249" className="symbol-4_54249">
                        <p
                            id="4_54250"
                            className="paragraph-4_54250 fill-label-colorlightprimary-4_54271-paragraph text-defaultregularbody-4_54278"
                        >
                            {"“Ios”"}
                        </p>
                        <div
                            id="4_54251"
                            className="rectangle-4_54251 fill-defaultsystemgray02light-4_54279"
                        ></div>
                        <p
                            id="4_54252"
                            className="paragraph-4_54252 fill-label-colorlightprimary-4_54271-paragraph text-defaultregularbody-4_54278"
                        >
                            {"iOS"}
                        </p>
                        <div
                            id="4_54253"
                            className="rectangle-4_54253 fill-defaultsystemgray02light-4_54279"
                        ></div>
                        <p
                            id="4_54254"
                            className="paragraph-4_54254 fill-label-colorlightprimary-4_54271-paragraph text-defaultregularbody-4_54278"
                        >
                            {"Ions"}
                        </p>
                    </div>
                )}
                {DarkMode === "False" && Type === "2FA" && (
                    <div id="4_54255" className="symbol-4_54255">
                        <p
                            id="4_54256"
                            className="paragraph-4_54256 fill-label-colorlightprimary-4_54271-paragraph text-defaultregularbody-4_54278"
                        >
                            {"123 456"}
                        </p>
                        <p
                            id="4_54257"
                            className="paragraph-4_54257 fill-label-colorlightprimary-4_54271-paragraph text-defaultregularcaption2-4_54280"
                        >
                            {"From Messages"}
                        </p>
                        <div
                            id="4_54258"
                            className="rectangle-4_54258 fill-defaultsystemgray02light-4_54279"
                        ></div>
                        <div
                            id="4_54259"
                            className="rectangle-4_54259 fill-defaultsystemgray02light-4_54279"
                        ></div>
                    </div>
                )}
                {DarkMode === "True" && Type === "Words" && (
                    <div id="4_54260" className="symbol-4_54260">
                        <p
                            id="4_54261"
                            className="paragraph-4_54261 fill-label-colordarkprimary-4_54272-paragraph text-defaultregularbody-4_54278"
                        >
                            {"“Ios”"}
                        </p>
                        <div
                            id="4_54262"
                            className="rectangle-4_54262 fill-defaultsystemgray02dark-4_54281"
                        ></div>
                        <p
                            id="4_54263"
                            className="paragraph-4_54263 fill-label-colordarkprimary-4_54272-paragraph text-defaultregularbody-4_54278"
                        >
                            {"iOS"}
                        </p>
                        <div
                            id="4_54264"
                            className="rectangle-4_54264 fill-defaultsystemgray02dark-4_54281"
                        ></div>
                        <p
                            id="4_54265"
                            className="paragraph-4_54265 fill-label-colordarkprimary-4_54272-paragraph text-defaultregularbody-4_54278"
                        >
                            {"Ions"}
                        </p>
                    </div>
                )}
                {DarkMode === "True" && Type === "2FA" && (
                    <div id="4_54266" className="symbol-4_54266">
                        <p
                            id="4_54267"
                            className="paragraph-4_54267 fill-label-colordarkprimary-4_54272-paragraph text-defaultregularbody-4_54278"
                        >
                            {"123 456"}
                        </p>
                        <p
                            id="4_54268"
                            className="paragraph-4_54268 fill-label-colordarkprimary-4_54272-paragraph text-defaultregularcaption2-4_54280"
                        >
                            {"From Messages"}
                        </p>
                        <div
                            id="4_54269"
                            className="rectangle-4_54269 fill-defaultsystemgray02dark-4_54281"
                        ></div>
                        <div
                            id="4_54270"
                            className="rectangle-4_54270 fill-defaultsystemgray02dark-4_54281"
                        ></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Suggestion;
