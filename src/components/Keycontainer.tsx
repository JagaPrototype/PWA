import "@/styles/Keycontainer.css";
interface keycontainerProps {
    DarkMode?: string;
    Color?: string;
    id?: string;
    className?: string;
}
const Keycontainer = (props: keycontainerProps) => {
    const { DarkMode, Color, id, className = "" } = props;

    return (
        <div className={`component-4_54236 ${className}`} id={id}>
            <div id="4_54236" className="symbol-4_54236">
                {DarkMode === "False" && Color === "Primary" && (
                    <div
                        id="4_54237"
                        className="symbol-4_54237 fill-system-backgroundlightprimary-4_54277"
                    ></div>
                )}
                {DarkMode === "False" && Color === "Secondary" && (
                    <div id="4_54238" className="symbol-4_54238"></div>
                )}
                {DarkMode === "False" && Color === "Action" && (
                    <div
                        id="4_54239"
                        className="symbol-4_54239 fill-defaultsystembluelight-4_54273"
                    ></div>
                )}
                {DarkMode === "True" && Color === "Primary" && (
                    <div id="4_54240" className="symbol-4_54240"></div>
                )}
                {DarkMode === "True" && Color === "Secondary" && (
                    <div id="4_54241" className="symbol-4_54241"></div>
                )}
                {DarkMode === "True" && Color === "Action" && (
                    <div
                        id="4_54242"
                        className="symbol-4_54242 fill-defaultsystembluedark-4_54274"
                    ></div>
                )}
            </div>
        </div>
    );
};
export default Keycontainer;
