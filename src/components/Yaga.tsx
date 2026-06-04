import "@/styles/Yaga.css";
interface yagaProps {
    color?: string;
    id?: string;
    className?: string;
}
const Yaga = (props: yagaProps) => {
    const { color, id, className = "" } = props;

    return (
        <div className={`component-2_1777 ${className}`} id={id}>
            <div id="2_1777" className="symbol-2_1777">
                {color === "accent" && (
                    <div id="2_1778" className="symbol-2_1778">
                        <div id="2_1779" className="vector-2_1779"></div>
                        <div id="2_1780" className="vector-2_1780"></div>
                    </div>
                )}
                {color === "black" && (
                    <div id="2_1781" className="symbol-2_1781">
                        <div id="2_1782" className="vector-2_1782"></div>
                        <div id="2_1783" className="vector-2_1783"></div>
                    </div>
                )}
                {color === "white" && (
                    <div id="2_1784" className="symbol-2_1784">
                        <div id="2_1785" className="vector-2_1785"></div>
                        <div id="2_1786" className="vector-2_1786"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Yaga;
