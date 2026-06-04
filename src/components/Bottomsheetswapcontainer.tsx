import Swapcontainer from "@/components/swapcontainer";
import "@/styles/Bottomsheetswapcontainer.css";
interface bottomsheetswapcontainerProps {
    swapContainer?: string;
    id?: string;
    className?: string;
    instance_2_80797?: string;
    text_2_80798_2_80806?: string;
}
const Bottomsheetswapcontainer = (props: bottomsheetswapcontainerProps) => {
    const {
        swapContainer = "Component_2_80805",
        id,
        className = "",
        instance_2_80797,
        text_2_80798_2_80806
    } = props;

    return (
        <div className={`component-2_80797 ${className}`} id={id}>
            <div id="2_80797" className="symbol-2_80797">
                <Swapcontainer
                    id="2_80798"
                    className="instance-2_80798"
                    text_2_80798_2_80806={text_2_80798_2_80806}
                ></Swapcontainer>
            </div>
        </div>
    );
};
export default Bottomsheetswapcontainer;
