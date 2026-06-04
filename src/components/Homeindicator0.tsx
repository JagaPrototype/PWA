import "@/styles/Homeindicator0.css";
interface homeindicator0Props {
    bg?: string;
    id?: string;
    className?: string;
}
const Homeindicator0 = (props: homeindicator0Props) => {
    const { bg, id, className = "" } = props;

    return (
        <div className={`component-2_2247 ${className}`} id={id}>
            <div id="2_2247" className="symbol-2_2247">
                {bg === "true" && (
                    <div
                        id="2_2248"
                        className="symbol-2_2248 fill-lightbgsurface1-2_2231"
                    >
                        <div
                            id="2_2249"
                            className="rectangle-2_2249 fill-lightfgdefault-2_2230"
                        ></div>
                    </div>
                )}
                {bg === "false" && (
                    <div id="2_2250" className="symbol-2_2250">
                        <div
                            id="2_2251"
                            className="rectangle-2_2251 fill-lightfgdefault-2_2230"
                        ></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Homeindicator0;
