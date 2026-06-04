import Sheetheader from "@/components/sheetheader";
import BottomsheetTitle from "@/components/bottomsheettitle";
import List from "@/components/list";
import BottomsheetSwapcontainer from "@/components/bottomsheetswapcontainer";
import BottomsheetButtons from "@/components/bottomsheetbuttons";
import "@/styles/Bottomsheets.css";
interface bottomsheetsProps {
    id?: string;
    className?: string;
}
const Bottomsheets = (props: bottomsheetsProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_80799 ${className}`} id={id}>
            <div id="2_80799" className="symbol-2_80799">
                <Sheetheader
                    id="2_80800"
                    className="instance-2_80800"
                ></Sheetheader>
                <div id="2_80801" className="frame-2_80801">
                    <div className="frame-content-2_80801">
                        <BottomsheetTitle
                            id="2_80802"
                            className="instance-2_80802"
                            variant={"singleLineTitle"}
                        ></BottomsheetTitle>
                        <div
                            id="2_80803"
                            className="instance-2_80803"
                            instance_2_80797={"List"}
                        >
                            <List id="2_80803"></List>
                            <BottomsheetSwapcontainer id="2_80803"></BottomsheetSwapcontainer>
                        </div>
                        <div
                            id="2_80804"
                            className="instance-2_80804"
                            instance_2_80784={"variantnone"}
                        >
                            <BottomsheetButtons
                                id="2_80804"
                                variant={"none"}
                            ></BottomsheetButtons>
                            <BottomsheetButtons
                                id="2_80804"
                                variant={"horizontal"}
                            ></BottomsheetButtons>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Bottomsheets;
