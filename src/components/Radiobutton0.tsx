import "@/styles/Radiobutton0.css";
interface radiobutton0Props {
    checked?: string;
    disabled?: string;
    id?: string;
    className?: string;
    instance_355_5789?: string;
}
const Radiobutton0 = (props: radiobutton0Props) => {
    const { checked, disabled, id, className = "", instance_355_5789 } = props;

    return (
        <div className={`component-355_5788 ${className}`} id={id}>
            <div id="355_5788" className="symbol-355_5788">
                {checked === "false" && disabled === "false" && (
                    <div id="355_5789" className="symbol-355_5789">
                        <div id="355_5790" className="stroke-wrapper-355_5790">
                            <div className="frame-355_5790"></div>
                            <div className="stroke-355_5790 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    </div>
                )}
                {checked === "false" && disabled === "true" && (
                    <div id="355_5791" className="symbol-355_5791">
                        <div
                            id="355_5792"
                            className="frame-355_5792 fill-lightbgdisabled-2_22065"
                        ></div>
                    </div>
                )}
                {checked === "true" && disabled === "false" && (
                    <div id="355_5793" className="symbol-355_5793">
                        <div
                            id="355_5794"
                            className="frame-355_5794 fill-lightinteractiveaccent-2_2283"
                        >
                            <div className="frame-content-355_5794">
                                <div
                                    id="355_5795"
                                    className="frame-355_5795 fill-lightinteractiveon-accent-2_23146"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
                {checked === "true" && disabled === "true" && (
                    <div id="355_5796" className="symbol-355_5796">
                        <div
                            id="355_5797"
                            className="frame-355_5797 fill-lightbgdisabled-2_22065"
                        >
                            <div className="frame-content-355_5797">
                                <div
                                    id="355_5798"
                                    className="frame-355_5798 fill-lightfgdisabled-2_2294"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Radiobutton0;
