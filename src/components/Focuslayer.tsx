import "@/styles/Focuslayer.css";
interface focuslayerProps {
    type?: string;
    id?: string;
    className?: string;
}
const Focuslayer = (props: focuslayerProps) => {
    const { type, id, className = "" } = props;

    return (
        <div className={`component-2_27387 ${className}`} id={id}>
            <div id="2_27387" className="symbol-2_27387">
                {type === "soft" && (
                    <div id="2_27388" className="stroke-wrapper-2_27388">
                        <div className="symbol-2_27388"></div>
                        <div className="stroke-2_27388 stroke-lightaccentcontainer-active-2_27386"></div>
                    </div>
                )}
                {type === "contrast" && (
                    <div id="2_27389" className="stroke-wrapper-2_27389">
                        <div className="symbol-2_27389">
                            <div
                                id="2_27390"
                                className="stroke-wrapper-2_27390"
                            >
                                <div className="rectangle-2_27390"></div>
                                <div className="stroke-2_27390 stroke-lightbgsurface1-2_2231"></div>
                            </div>
                        </div>
                        <div className="stroke-2_27389 stroke-lightaccentcontainer-active-2_27386"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Focuslayer;
