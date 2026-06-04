import "@/styles/Switch.css";
interface switchProps {
    checked?: string;
    disabled?: string;
    id?: string;
    className?: string;
}
const Switch = (props: switchProps) => {
    const { checked, disabled, id, className = "" } = props;

    return (
        <div className={`component-2_23190 ${className}`} id={id}>
            <div id="2_23190" className="symbol-2_23190">
                {checked === "on" && disabled === "false" && (
                    <div id="2_23191" className="symbol-2_23191">
                        <div
                            id="2_23192"
                            className="frame-2_23192 fill-lightaccentdefault-2_4578"
                        >
                            <div className="frame-content-2_23192">
                                <div
                                    id="2_23193"
                                    className="vector-2_23193"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
                {checked === "on" && disabled === "true" && (
                    <div id="2_23194" className="symbol-2_23194">
                        <div
                            id="2_23195"
                            className="frame-2_23195 fill-lightaccentmuted-2_23147"
                        >
                            <div className="frame-content-2_23195">
                                <div
                                    id="2_23196"
                                    className="vector-2_23196"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
                {checked === "off" && disabled === "true" && (
                    <div id="2_23197" className="symbol-2_23197">
                        <div
                            id="2_23198"
                            className="frame-2_23198 fill-lightbgsurface3-2_22053"
                        >
                            <div className="frame-content-2_23198">
                                <div
                                    id="2_23199"
                                    className="vector-2_23199"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
                {checked === "off" && disabled === "false" && (
                    <div id="2_23200" className="symbol-2_23200">
                        <div
                            id="2_23201"
                            className="frame-2_23201 fill-lightneutralmuted-2_23154"
                        >
                            <div className="frame-content-2_23201">
                                <div
                                    id="2_23202"
                                    className="vector-2_23202"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Switch;
