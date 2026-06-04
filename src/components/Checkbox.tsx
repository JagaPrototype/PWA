import "@/styles/Checkbox.css";
interface checkboxProps {
    checked?: string;
    disabled?: string;
    indeterminate?: string;
    id?: string;
    className?: string;
}
const Checkbox = (props: checkboxProps) => {
    const { checked, disabled, indeterminate, id, className = "" } = props;

    return (
        <div className={`component-2_19061 ${className}`} id={id}>
            <div id="2_19061" className="symbol-2_19061">
                {checked === "false" &&
                    disabled === "false" &&
                    indeterminate === "false" && (
                        <div id="2_19062" className="symbol-2_19062">
                            <div
                                id="2_19063"
                                className="stroke-wrapper-2_19063"
                            >
                                <div className="frame-2_19063"></div>
                                <div className="stroke-2_19063 stroke-lightneutralmuted-2_22061"></div>
                            </div>
                        </div>
                    )}
                {checked === "false" &&
                    disabled === "true" &&
                    indeterminate === "false" && (
                        <div id="2_19064" className="symbol-2_19064">
                            <div
                                id="2_19065"
                                className="stroke-wrapper-2_19065"
                            >
                                <div className="frame-2_19065 fill-lightneutralcontainer-muted-2_2295"></div>
                                <div className="stroke-2_19065 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {checked === "true" &&
                    disabled === "false" &&
                    indeterminate === "false" && (
                        <div id="2_19066" className="symbol-2_19066">
                            <div
                                id="2_19067"
                                className="frame-2_19067 fill-lightaccentdefault-2_4578"
                            >
                                <div
                                    id="2_19068"
                                    className="vector-2_19068"
                                ></div>
                            </div>
                        </div>
                    )}
                {checked === "true" &&
                    disabled === "true" &&
                    indeterminate === "false" && (
                        <div id="2_19069" className="symbol-2_19069">
                            <div
                                id="2_19070"
                                className="frame-2_19070 fill-lightaccentmuted-2_22057"
                            >
                                <div
                                    id="2_19071"
                                    className="vector-2_19071"
                                ></div>
                            </div>
                        </div>
                    )}
                {checked === "true" &&
                    disabled === "false" &&
                    indeterminate === "true" && (
                        <div id="2_19072" className="symbol-2_19072">
                            <div
                                id="2_19073"
                                className="frame-2_19073 fill-lightaccentdefault-2_4578"
                            >
                                <div
                                    id="2_19074"
                                    className="vector-2_19074"
                                ></div>
                            </div>
                        </div>
                    )}
                {checked === "true" &&
                    disabled === "true" &&
                    indeterminate === "true" && (
                        <div id="2_19075" className="symbol-2_19075">
                            <div
                                id="2_19076"
                                className="frame-2_19076 fill-lightaccentmuted-2_22057"
                            >
                                <div
                                    id="2_19077"
                                    className="vector-2_19077"
                                ></div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Checkbox;
