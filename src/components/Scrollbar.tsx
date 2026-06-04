import "@/styles/Scrollbar.css";
interface scrollbarProps {
    active?: string;
    id?: string;
    className?: string;
}
const Scrollbar = (props: scrollbarProps) => {
    const { active, id, className = "" } = props;

    return (
        <div className={`component-2_19103 ${className}`} id={id}>
            <div id="2_19103" className="symbol-2_19103">
                {active === "false" && (
                    <div id="2_19104" className="symbol-2_19104">
                        <div
                            id="2_19105"
                            className="frame-2_19105 fill-lightneutralcontainer-hover-2_22071"
                        >
                            <div className="frame-content-2_19105">
                                <div
                                    id="2_19106"
                                    className="frame-2_19106"
                                ></div>
                                <div
                                    id="2_19107"
                                    className="frame-2_19107"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
                {active === "true" && (
                    <div id="2_19108" className="symbol-2_19108">
                        <div
                            id="2_19109"
                            className="frame-2_19109 fill-lightneutralcontainer-active-2_22063"
                        >
                            <div className="frame-content-2_19109">
                                <div
                                    id="2_19110"
                                    className="frame-2_19110"
                                ></div>
                                <div
                                    id="2_19111"
                                    className="frame-2_19111"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Scrollbar;
