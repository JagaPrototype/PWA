import "@/styles/Bodysearch.css";
interface bodysearchProps {
    placeholder?: string;
    filling?: string;
    filled?: string;
    cursor?: string;
    id?: string;
    className?: string;
    text_2_24241?: string;
    text_2_24244?: string;
    text_2_24249?: string;
    text_2_24246?: string;
}
const Bodysearch = (props: bodysearchProps) => {
    const {
        placeholder = "Поиск",
        filling = "Я ищу",
        filled,
        cursor,
        id,
        className = "",
        text_2_24241,
        text_2_24244,
        text_2_24249,
        text_2_24246
    } = props;

    return (
        <div className={`component-2_24239 ${className}`} id={id}>
            <div id="2_24239" className="symbol-2_24239">
                {filled === "false" && cursor === "false" && (
                    <div id="2_24240" className="symbol-2_24240">
                        <p
                            id="2_24241"
                            className="paragraph-2_24241 fill-lightfgmuted-2_18966-paragraph text-mobilebody-m-2_2287"
                        >
                            {placeholder ?? text_2_24241 ?? "Поиск"}
                        </p>
                    </div>
                )}
                {filled === "false" && cursor === "true" && (
                    <div id="2_24242" className="symbol-2_24242">
                        <div
                            id="2_24243"
                            className="rectangle-2_24243 fill-lightinteractiveaccent-2_20378"
                        ></div>
                        <p
                            id="2_24244"
                            className="paragraph-2_24244 fill-lightfgmuted-2_18966-paragraph text-mobilebody-m-2_2287"
                        >
                            {placeholder ?? text_2_24244 ?? "Поиск"}
                        </p>
                    </div>
                )}
                {filled === "true" && cursor === "true" && (
                    <div id="2_24245" className="symbol-2_24245">
                        <p
                            id="2_24246"
                            className="paragraph-2_24246 fill-lightfgdefault-2_18970-paragraph text-mobilebody-m-2_2287"
                        >
                            {filling ?? text_2_24246 ?? "Я ищу"}
                        </p>
                        <div
                            id="2_24247"
                            className="rectangle-2_24247 fill-lightinteractiveaccent-2_20378"
                        ></div>
                    </div>
                )}
                {filled === "true" && cursor === "false" && (
                    <div id="2_24248" className="symbol-2_24248">
                        <p
                            id="2_24249"
                            className="paragraph-2_24249 fill-lightfgdefault-2_18970-paragraph text-mobilebody-m-2_2287"
                        >
                            {filling ?? text_2_24249 ?? "Я ищу"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Bodysearch;
