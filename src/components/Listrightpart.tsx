import Checkbox from "@/components/checkbox";
import Switch from "@/components/switch";
import ActionKebabMenu from "@/components/actionkebabmenu";
import NavigationChevronright1 from "@/components/navigationchevronright1";
import Radiobutton from "@/components/radiobutton";
import "@/styles/Listrightpart.css";
interface listrightpartProps {
    righticonvariant24?: string;
    type?: string;
    align?: string;
    id?: string;
    className?: string;
}
const Listrightpart = (props: listrightpartProps) => {
    const {
        righticonvariant24 = "Component_3491_96010",
        type,
        align,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_29186 ${className}`} id={id}>
            <div id="2_29186" className="symbol-2_29186">
                {type === "checkbox" && align === "center" && (
                    <div id="2_29187" className="symbol-2_29187">
                        <Checkbox
                            id="2_29188"
                            className="instance-2_29188"
                            checked={"false"}
                            disabled={"false"}
                            indeterminate={"false"}
                        ></Checkbox>
                    </div>
                )}
                {type === "checkbox" && align === "top" && (
                    <div id="2_29189" className="symbol-2_29189">
                        <Checkbox
                            id="2_29190"
                            className="instance-2_29190"
                            checked={"false"}
                            disabled={"false"}
                            indeterminate={"false"}
                        ></Checkbox>
                    </div>
                )}
                {type === "switch" && align === "center" && (
                    <div id="2_29191" className="symbol-2_29191">
                        <Switch
                            id="2_29192"
                            className="instance-2_29192"
                            checked={"off"}
                            disabled={"false"}
                        ></Switch>
                    </div>
                )}
                {type === "switch" && align === "top" && (
                    <div id="2_29193" className="symbol-2_29193">
                        <Switch
                            id="2_29194"
                            className="instance-2_29194"
                            checked={"off"}
                            disabled={"false"}
                        ></Switch>
                    </div>
                )}
                {type === "icon" && align === "center" && (
                    <div id="2_29195" className="symbol-2_29195">
                        <div
                            id="2_29196"
                            className="instance-2_29196"
                            instance_2_23125={"ActionKebabMenu"}
                        >
                            {righticonvariant24 === "Component_355_5752" && (
                                <ActionKebabMenu id="2_29196"></ActionKebabMenu>
                            )}
                            {righticonvariant24 === "Component_2_23125" && (
                                <NavigationChevronright1 id="2_29196"></NavigationChevronright1>
                            )}
                        </div>
                    </div>
                )}
                {type === "icon" && align === "top" && (
                    <div id="2_29197" className="symbol-2_29197">
                        <div
                            id="2_29198"
                            className="instance-2_29198"
                            instance_2_23125={"ActionKebabMenu"}
                        >
                            {righticonvariant24 === "Component_355_5752" && (
                                <ActionKebabMenu id="2_29198"></ActionKebabMenu>
                            )}
                            {righticonvariant24 === "Component_2_23125" && (
                                <NavigationChevronright1 id="2_29198"></NavigationChevronright1>
                            )}
                        </div>
                    </div>
                )}
                {type === "radiobutton" && align === "center" && (
                    <div id="2_29199" className="symbol-2_29199">
                        <Radiobutton
                            id="2_29200"
                            className="instance-2_29200"
                            checked={"false"}
                            disabled={"false"}
                        ></Radiobutton>
                    </div>
                )}
                {type === "radiobutton" && align === "top" && (
                    <div id="2_29201" className="symbol-2_29201">
                        <Radiobutton
                            id="2_29202"
                            className="instance-2_29202"
                            checked={"false"}
                            disabled={"false"}
                        ></Radiobutton>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Listrightpart;
