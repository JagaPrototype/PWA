import Checkbox0 from "@/components/checkbox0";
import Switch0 from "@/components/switch0";
import ActionKebabMenu from "@/components/actionkebabmenu";
import NavigationChevronright1 from "@/components/navigationchevronright1";
import Radiobutton0 from "@/components/radiobutton0";
import "@/styles/Listrightpart0.css";
interface listrightpart0Props {
    righticonvariant24?: string;
    type?: string;
    align?: string;
    id?: string;
    className?: string;
    instance_355_6485?: string;
    instance_355_6483?: string;
    instance_355_6497?: string;
    instance_355_6495?: string;
    instance_355_6489?: string;
    instance_355_6487?: string;
}
const Listrightpart0 = (props: listrightpart0Props) => {
    const {
        righticonvariant24 = "Component_3491_96010",
        type,
        align,
        id,
        className = "",
        instance_355_6485,
        instance_355_6483,
        instance_355_6497,
        instance_355_6495,
        instance_355_6489,
        instance_355_6487
    } = props;

    return (
        <div className={`component-355_6481 ${className}`} id={id}>
            <div id="355_6481" className="symbol-355_6481">
                {type === "checkbox" && align === "center" && (
                    <div id="355_6482" className="symbol-355_6482">
                        <div
                            id="355_6483"
                            className="instance-355_6483"
                            instance_355_5772={
                                "checkedtruedisabledtrueindeterminatefalse"
                            }
                        >
                            {instance_355_6483 === "Component_355_5776" && (
                                <Checkbox0
                                    id="355_6483"
                                    checked={"true"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6483 === "Component_355_5774" && (
                                <Checkbox0
                                    id="355_6483"
                                    checked={"false"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6483 === "Component_355_5779" && (
                                <Checkbox0
                                    id="355_6483"
                                    checked={"true"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6483 === "Component_355_5772" && (
                                <Checkbox0
                                    id="355_6483"
                                    checked={"false"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                        </div>
                    </div>
                )}
                {type === "checkbox" && align === "top" && (
                    <div id="355_6484" className="symbol-355_6484">
                        <div
                            id="355_6485"
                            className="instance-355_6485"
                            instance_355_5772={
                                "checkedtruedisabledfalseindeterminatefalse"
                            }
                        >
                            {instance_355_6485 === "Component_355_5779" && (
                                <Checkbox0
                                    id="355_6485"
                                    checked={"true"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6485 === "Component_355_5774" && (
                                <Checkbox0
                                    id="355_6485"
                                    checked={"false"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6485 === "Component_355_5776" && (
                                <Checkbox0
                                    id="355_6485"
                                    checked={"true"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6485 === "Component_355_5772" && (
                                <Checkbox0
                                    id="355_6485"
                                    checked={"false"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                        </div>
                    </div>
                )}
                {type === "switch" && align === "center" && (
                    <div id="355_6486" className="symbol-355_6486">
                        <div
                            id="355_6487"
                            className="instance-355_6487"
                            instance_355_5810={
                                "stateondisabledfalseintermediateoff"
                            }
                        >
                            {instance_355_6487 === "Component_355_5806" && (
                                <Switch0
                                    id="355_6487"
                                    state={"on"}
                                    disabled={"true"}
                                ></Switch0>
                            )}
                            {instance_355_6487 === "Component_355_5808" && (
                                <Switch0
                                    id="355_6487"
                                    state={"off"}
                                    disabled={"true"}
                                ></Switch0>
                            )}
                            {instance_355_6487 === "Component_355_5800" && (
                                <Switch0
                                    id="355_6487"
                                    state={"on"}
                                    disabled={"false"}
                                ></Switch0>
                            )}
                            {instance_355_6487 === "Component_355_5810" && (
                                <Switch0
                                    id="355_6487"
                                    state={"off"}
                                    disabled={"false"}
                                ></Switch0>
                            )}
                        </div>
                    </div>
                )}
                {type === "switch" && align === "top" && (
                    <div id="355_6488" className="symbol-355_6488">
                        <div
                            id="355_6489"
                            className="instance-355_6489"
                            instance_355_5810={
                                "stateondisabledfalseintermediateoff"
                            }
                        >
                            {instance_355_6489 === "Component_355_5806" && (
                                <Switch0
                                    id="355_6489"
                                    state={"on"}
                                    disabled={"true"}
                                ></Switch0>
                            )}
                            {instance_355_6489 === "Component_355_5808" && (
                                <Switch0
                                    id="355_6489"
                                    state={"off"}
                                    disabled={"true"}
                                ></Switch0>
                            )}
                            {instance_355_6489 === "Component_355_5800" && (
                                <Switch0
                                    id="355_6489"
                                    state={"on"}
                                    disabled={"false"}
                                ></Switch0>
                            )}
                            {instance_355_6489 === "Component_355_5810" && (
                                <Switch0
                                    id="355_6489"
                                    state={"off"}
                                    disabled={"false"}
                                ></Switch0>
                            )}
                        </div>
                    </div>
                )}
                {type === "icon" && align === "center" && (
                    <div id="355_6490" className="symbol-355_6490">
                        <div
                            id="355_6491"
                            className="instance-355_6491"
                            instance_2_23125={"ActionKebabMenu"}
                        >
                            {righticonvariant24 === "Component_355_5752" && (
                                <ActionKebabMenu id="355_6491"></ActionKebabMenu>
                            )}
                            {righticonvariant24 === "Component_2_23125" && (
                                <NavigationChevronright1 id="355_6491"></NavigationChevronright1>
                            )}
                        </div>
                    </div>
                )}
                {type === "icon" && align === "top" && (
                    <div id="355_6492" className="symbol-355_6492">
                        <div
                            id="355_6493"
                            className="instance-355_6493"
                            instance_2_23125={"ActionKebabMenu"}
                        >
                            {righticonvariant24 === "Component_355_5752" && (
                                <ActionKebabMenu id="355_6493"></ActionKebabMenu>
                            )}
                            {righticonvariant24 === "Component_2_23125" && (
                                <NavigationChevronright1 id="355_6493"></NavigationChevronright1>
                            )}
                        </div>
                    </div>
                )}
                {type === "radiobutton" && align === "center" && (
                    <div id="355_6494" className="symbol-355_6494">
                        <div
                            id="355_6495"
                            className="instance-355_6495"
                            instance_355_5789={"checkedtruedisabledtrue"}
                        >
                            {instance_355_6495 === "Component_355_5791" && (
                                <Radiobutton0
                                    id="355_6495"
                                    checked={"false"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6495 === "Component_355_5793" && (
                                <Radiobutton0
                                    id="355_6495"
                                    checked={"true"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6495 === "Component_355_5796" && (
                                <Radiobutton0
                                    id="355_6495"
                                    checked={"true"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6495 === "Component_355_5789" && (
                                <Radiobutton0
                                    id="355_6495"
                                    checked={"false"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                        </div>
                    </div>
                )}
                {type === "radiobutton" && align === "top" && (
                    <div id="355_6496" className="symbol-355_6496">
                        <div
                            id="355_6497"
                            className="instance-355_6497"
                            instance_355_5789={"checkedtruedisabledfalse"}
                        >
                            {instance_355_6497 === "Component_355_5796" && (
                                <Radiobutton0
                                    id="355_6497"
                                    checked={"true"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6497 === "Component_355_5791" && (
                                <Radiobutton0
                                    id="355_6497"
                                    checked={"false"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6497 === "Component_355_5793" && (
                                <Radiobutton0
                                    id="355_6497"
                                    checked={"true"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6497 === "Component_355_5789" && (
                                <Radiobutton0
                                    id="355_6497"
                                    checked={"false"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Listrightpart0;
