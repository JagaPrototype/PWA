import "@/styles/Swapcontainer.css";
interface swapcontainerProps {
    id?: string;
    className?: string;
    instance_2_24218?: string;
    text_2_24219?: string;
    text_2_24213_2_24219?: string;
}
const Swapcontainer = (props: swapcontainerProps) => {
    const {
        id,
        className = "",
        instance_2_24218,
        text_2_24219,
        text_2_24213_2_24219
    } = props;

    return (
        <div className={`component-2_24218 ${className}`} id={id}>
            <div id="2_24218" className="stroke-wrapper-2_24218">
                <div className="symbol-2_24218">
                    <p
                        id="2_24219"
                        className="paragraph-2_24219 fill-lightfgdisabled-2_22050-paragraph"
                    >
                        {text_2_24219 ?? text_2_24213_2_24219 ?? "swap"}
                    </p>
                </div>
                <div className="stroke-2_24218 stroke-lightfgdisabled-2_22050"></div>
            </div>
        </div>
    );
};
export default Swapcontainer;
