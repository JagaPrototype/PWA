import "@/styles/Checkbox0.css";
interface checkbox0Props {
    checked?: string;
    disabled?: string;
    indeterminate?: string;
    id?: string;
    className?: string;
    instance_355_5772?: string;
}
const Checkbox0 = (props: checkbox0Props) => {
    const {
        checked,
        disabled,
        indeterminate,
        id,
        className = "",
        instance_355_5772
    } = props;

    return (
        <div className={`component-355_5771 ${className}`} id={id}>
            <div id="355_5771" className="symbol-355_5771">
                {checked === "false" &&
                    disabled === "false" &&
                    indeterminate === "false" && (
                        <div id="355_5772" className="symbol-355_5772">
                            <div
                                id="355_5773"
                                className="stroke-wrapper-355_5773"
                            >
                                <div className="frame-355_5773"></div>
                                <div className="stroke-355_5773 stroke-lightborderdefault-2_23150"></div>
                            </div>
                        </div>
                    )}
                {checked === "false" &&
                    disabled === "true" &&
                    indeterminate === "false" && (
                        <div id="355_5774" className="symbol-355_5774">
                            <div
                                id="355_5775"
                                className="frame-355_5775 fill-lightbgdisabled-2_22065"
                            ></div>
                        </div>
                    )}
                {checked === "true" &&
                    disabled === "false" &&
                    indeterminate === "false" && (
                        <div id="355_5776" className="symbol-355_5776">
                            <div
                                id="355_5777"
                                className="frame-355_5777 fill-lightinteractiveaccent-2_2283"
                            >
                                <div
                                    id="355_5778"
                                    className="vector-355_5778"
                                ></div>
                            </div>
                        </div>
                    )}
                {checked === "true" &&
                    disabled === "true" &&
                    indeterminate === "false" && (
                        <div id="355_5779" className="symbol-355_5779">
                            <div
                                id="355_5780"
                                className="frame-355_5780 fill-lightbgdisabled-2_22065"
                            >
                                <div
                                    id="355_5781"
                                    className="vector-355_5781"
                                ></div>
                            </div>
                        </div>
                    )}
                {checked === "true" &&
                    disabled === "false" &&
                    indeterminate === "true" && (
                        <div id="355_5782" className="symbol-355_5782">
                            <div
                                id="355_5783"
                                className="frame-355_5783 fill-lightinteractiveaccent-2_2283"
                            >
                                <div
                                    id="355_5784"
                                    className="vector-355_5784"
                                ></div>
                            </div>
                        </div>
                    )}
                {checked === "true" &&
                    disabled === "true" &&
                    indeterminate === "true" && (
                        <div id="355_5785" className="symbol-355_5785">
                            <div
                                id="355_5786"
                                className="frame-355_5786 fill-lightbgdisabled-2_22065"
                            >
                                <div
                                    id="355_5787"
                                    className="vector-355_5787"
                                ></div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Checkbox0;
