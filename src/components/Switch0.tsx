import "@/styles/Switch0.css";
interface switch0Props {
    state?: string;
    disabled?: string;
    id?: string;
    className?: string;
    instance_355_5810?: string;
}
const Switch0 = (props: switch0Props) => {
    const { state, disabled, id, className = "", instance_355_5810 } = props;

    return (
        <div className={`component-355_5799 ${className}`} id={id}>
            <div id="355_5799" className="symbol-355_5799">
                {state === "on" && disabled === "false" && (
                    <div
                        id="355_5800"
                        className="symbol-355_5800 fill-lightinteractiveaccent-2_2283"
                    >
                        <div id="355_5801" className="vector-355_5801"></div>
                    </div>
                )}
                {state === "intermediate" && disabled === "false" && (
                    <div
                        id="355_5802"
                        className="symbol-355_5802 fill-lightinteractiveaccent-2_2283"
                    >
                        <div id="355_5803" className="vector-355_5803"></div>
                    </div>
                )}
                {state === "intermediate" && disabled === "true" && (
                    <div
                        id="355_5804"
                        className="symbol-355_5804 fill-lightbgdisabled-2_22065"
                    >
                        <div id="355_5805" className="vector-355_5805"></div>
                    </div>
                )}
                {state === "on" && disabled === "true" && (
                    <div
                        id="355_5806"
                        className="symbol-355_5806 fill-lightbgdisabled-2_22065"
                    >
                        <div id="355_5807" className="vector-wrapper-355_5807">
                            <div
                                id="355_5807"
                                className="vector-355_5807"
                            ></div>
                        </div>
                    </div>
                )}
                {state === "off" && disabled === "true" && (
                    <div
                        id="355_5808"
                        className="symbol-355_5808 fill-lightbgdisabled-2_22065"
                    >
                        <div id="355_5809" className="vector-wrapper-355_5809">
                            <div
                                id="355_5809"
                                className="vector-355_5809"
                            ></div>
                        </div>
                    </div>
                )}
                {state === "off" && disabled === "false" && (
                    <div
                        id="355_5810"
                        className="symbol-355_5810 fill-lightneutralmuted-2_22061"
                    >
                        <div id="355_5811" className="vector-wrapper-355_5811">
                            <div
                                id="355_5811"
                                className="vector-355_5811"
                            ></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Switch0;
