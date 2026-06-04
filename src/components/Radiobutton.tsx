import "@/styles/Radiobutton.css";
interface radiobuttonProps {
    checked?: string;
    disabled?: string;
    id?: string;
    className?: string;
}
const Radiobutton = (props: radiobuttonProps) => {
    const { checked, disabled, id, className = "" } = props;

    return (
        <div className={`component-2_29175 ${className}`} id={id}>
            <div id="2_29175" className="symbol-2_29175">
                {checked === "false" && disabled === "false" && (
                    <div id="2_29176" className="symbol-2_29176">
                        <div id="2_29177" className="stroke-wrapper-2_29177">
                            <div className="frame-2_29177"></div>
                            <div className="stroke-2_29177 stroke-lightneutralmuted-2_22061"></div>
                        </div>
                    </div>
                )}
                {checked === "false" && disabled === "true" && (
                    <div id="2_29178" className="symbol-2_29178">
                        <div id="2_29179" className="stroke-wrapper-2_29179">
                            <div className="frame-2_29179 fill-lightneutralcontainer-muted-2_2295"></div>
                            <div className="stroke-2_29179 stroke-lightneutralcontainer-default-2_2292"></div>
                        </div>
                    </div>
                )}
                {checked === "true" && disabled === "false" && (
                    <div id="2_29180" className="symbol-2_29180">
                        <div
                            id="2_29181"
                            className="frame-2_29181 fill-lightaccentdefault-2_4578"
                        >
                            <div className="frame-content-2_29181">
                                <div
                                    id="2_29182"
                                    className="frame-2_29182 fill-lightaccenton-accent-2_4580"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
                {checked === "true" && disabled === "true" && (
                    <div id="2_29183" className="symbol-2_29183">
                        <div
                            id="2_29184"
                            className="frame-2_29184 fill-lightaccentmuted-2_22057"
                        >
                            <div className="frame-content-2_29184">
                                <div
                                    id="2_29185"
                                    className="frame-2_29185 fill-lightaccenton-accent-2_4580"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Radiobutton;
