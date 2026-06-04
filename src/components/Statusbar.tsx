import "@/styles/Statusbar.css";
interface statusbarProps {
    id?: string;
    className?: string;
}
const Statusbar = (props: statusbarProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_2254 ${className}`} id={id}>
            <div
                id="2_2254"
                className="symbol-2_2254 fill-lightbgsurface1-2_2231"
            >
                <div id="2_2255" className="rectangle-2_2255"></div>
                <div id="2_2256" className="vector-2_2256"></div>
                <div id="2_2260" className="vector-2_2260"></div>
                <p
                    id="2_2265"
                    className="paragraph-2_2265 fill-light-themecommondark-2_2246-paragraph"
                >
                    {"19:39"}
                </p>
                <div id="2_2266" className="group-2_2266">
                    <div id="2_2267" className="vector-2_2267"></div>
                    <div id="2_2268" className="vector-2_2268"></div>
                    <div id="2_2269" className="vector-2_2269"></div>
                </div>
                <div
                    id="2_2270"
                    className="frame-2_2270 fill-lightfgdefault-2_2232"
                ></div>
            </div>
        </div>
    );
};
export default Statusbar;
