import Swapcontainer from "@/components/swapcontainer";
import "@/styles/Dialogswapcontainer.css";
interface dialogswapcontainerProps {
    swapContainer?: string;
    id?: string;
    className?: string;
    instance_355_5741?: string;
    text_355_5742_2_80806?: string;
}
const Dialogswapcontainer = (props: dialogswapcontainerProps) => {
    const {
        swapContainer = "Component_2_80805",
        id,
        className = "",
        instance_355_5741,
        text_355_5742_2_80806
    } = props;

    return (
        <div className={`component-355_5741 ${className}`} id={id}>
            <div id="355_5741" className="symbol-355_5741">
                <Swapcontainer
                    id="355_5742"
                    className="instance-355_5742"
                    text_355_5742_2_80806={text_355_5742_2_80806}
                ></Swapcontainer>
            </div>
        </div>
    );
};
export default Dialogswapcontainer;
