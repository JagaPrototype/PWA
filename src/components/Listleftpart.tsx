import LukitDuck from "@/components/lukitduck";
import Checkbox0 from "@/components/checkbox0";
import Radiobutton0 from "@/components/radiobutton0";
import Switch0 from "@/components/switch0";
import Avatar0 from "@/components/avatar0";
import Image from "@/components/image";
import "@/styles/Listleftpart.css";
interface listleftpartProps {
    lefticonvariant24?: string;
    type?: string;
    align?: string;
    id?: string;
    className?: string;
    instance_355_6433?: string;
    instance_355_6437?: string;
    instance_355_6441?: string;
    instance_355_6435?: string;
    instance_355_6439?: string;
    instance_355_6443?: string;
}
const Listleftpart = (props: listleftpartProps) => {
    const {
        lefticonvariant24 = "Component_3491_97172",
        type,
        align,
        id,
        className = "",
        instance_355_6433,
        instance_355_6437,
        instance_355_6441,
        instance_355_6435,
        instance_355_6439,
        instance_355_6443
    } = props;

    return (
        <div className={`component-355_6427 ${className}`} id={id}>
            <div id="355_6427" className="symbol-355_6427">
                {type === "icon" && align === "center" && (
                    <div id="355_6428" className="symbol-355_6428">
                        <LukitDuck
                            id="355_6429"
                            className="instance-355_6429"
                        ></LukitDuck>
                    </div>
                )}
                {type === "icon" && align === "top" && (
                    <div id="355_6430" className="symbol-355_6430">
                        <LukitDuck
                            id="355_6431"
                            className="instance-355_6431"
                        ></LukitDuck>
                    </div>
                )}
                {type === "checkbox" && align === "center" && (
                    <div id="355_6432" className="symbol-355_6432">
                        <div
                            id="355_6433"
                            className="instance-355_6433"
                            instance_355_5772={
                                "checkedtruedisabledfalseindeterminatefalse"
                            }
                        >
                            {instance_355_6433 === "Component_355_5779" && (
                                <Checkbox0
                                    id="355_6433"
                                    checked={"true"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6433 === "Component_355_5774" && (
                                <Checkbox0
                                    id="355_6433"
                                    checked={"false"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6433 === "Component_355_5776" && (
                                <Checkbox0
                                    id="355_6433"
                                    checked={"true"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6433 === "Component_355_5772" && (
                                <Checkbox0
                                    id="355_6433"
                                    checked={"false"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                        </div>
                    </div>
                )}
                {type === "checkbox" && align === "top" && (
                    <div id="355_6434" className="symbol-355_6434">
                        <div
                            id="355_6435"
                            className="instance-355_6435"
                            instance_355_5772={
                                "checkedtruedisabledfalseindeterminatefalse"
                            }
                        >
                            {instance_355_6435 === "Component_355_5779" && (
                                <Checkbox0
                                    id="355_6435"
                                    checked={"true"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6435 === "Component_355_5774" && (
                                <Checkbox0
                                    id="355_6435"
                                    checked={"false"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6435 === "Component_355_5776" && (
                                <Checkbox0
                                    id="355_6435"
                                    checked={"true"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                            {instance_355_6435 === "Component_355_5772" && (
                                <Checkbox0
                                    id="355_6435"
                                    checked={"false"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox0>
                            )}
                        </div>
                    </div>
                )}
                {type === "radiobutton" && align === "center" && (
                    <div id="355_6436" className="symbol-355_6436">
                        <div
                            id="355_6437"
                            className="instance-355_6437"
                            instance_355_5789={"checkedtruedisabledfalse"}
                        >
                            {instance_355_6437 === "Component_355_5796" && (
                                <Radiobutton0
                                    id="355_6437"
                                    checked={"true"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6437 === "Component_355_5791" && (
                                <Radiobutton0
                                    id="355_6437"
                                    checked={"false"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6437 === "Component_355_5793" && (
                                <Radiobutton0
                                    id="355_6437"
                                    checked={"true"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6437 === "Component_355_5789" && (
                                <Radiobutton0
                                    id="355_6437"
                                    checked={"false"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                        </div>
                    </div>
                )}
                {type === "radiobutton" && align === "top" && (
                    <div id="355_6438" className="symbol-355_6438">
                        <div
                            id="355_6439"
                            className="instance-355_6439"
                            instance_355_5789={"checkedtruedisabledfalse"}
                        >
                            {instance_355_6439 === "Component_355_5796" && (
                                <Radiobutton0
                                    id="355_6439"
                                    checked={"true"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6439 === "Component_355_5791" && (
                                <Radiobutton0
                                    id="355_6439"
                                    checked={"false"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6439 === "Component_355_5793" && (
                                <Radiobutton0
                                    id="355_6439"
                                    checked={"true"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                            {instance_355_6439 === "Component_355_5789" && (
                                <Radiobutton0
                                    id="355_6439"
                                    checked={"false"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                        </div>
                    </div>
                )}
                {type === "switch" && align === "center" && (
                    <div id="355_6440" className="symbol-355_6440">
                        <div
                            id="355_6441"
                            className="instance-355_6441"
                            instance_355_5810={
                                "stateondisabledfalseintermediateoff"
                            }
                        >
                            {instance_355_6441 === "Component_355_5806" && (
                                <Switch0
                                    id="355_6441"
                                    state={"on"}
                                    disabled={"true"}
                                ></Switch0>
                            )}
                            {instance_355_6441 === "Component_355_5808" && (
                                <Switch0
                                    id="355_6441"
                                    state={"off"}
                                    disabled={"true"}
                                ></Switch0>
                            )}
                            {instance_355_6441 === "Component_355_5800" && (
                                <Switch0
                                    id="355_6441"
                                    state={"on"}
                                    disabled={"false"}
                                ></Switch0>
                            )}
                            {instance_355_6441 === "Component_355_5810" && (
                                <Switch0
                                    id="355_6441"
                                    state={"off"}
                                    disabled={"false"}
                                ></Switch0>
                            )}
                        </div>
                    </div>
                )}
                {type === "switch" && align === "top" && (
                    <div id="355_6442" className="symbol-355_6442">
                        <div
                            id="355_6443"
                            className="instance-355_6443"
                            instance_355_5810={
                                "stateondisabledfalseintermediateoff"
                            }
                        >
                            {instance_355_6443 === "Component_355_5806" && (
                                <Switch0
                                    id="355_6443"
                                    state={"on"}
                                    disabled={"true"}
                                ></Switch0>
                            )}
                            {instance_355_6443 === "Component_355_5808" && (
                                <Switch0
                                    id="355_6443"
                                    state={"off"}
                                    disabled={"true"}
                                ></Switch0>
                            )}
                            {instance_355_6443 === "Component_355_5800" && (
                                <Switch0
                                    id="355_6443"
                                    state={"on"}
                                    disabled={"false"}
                                ></Switch0>
                            )}
                            {instance_355_6443 === "Component_355_5810" && (
                                <Switch0
                                    id="355_6443"
                                    state={"off"}
                                    disabled={"false"}
                                ></Switch0>
                            )}
                        </div>
                    </div>
                )}
                {type === "avatar" && align === "center" && (
                    <div id="355_6444" className="symbol-355_6444">
                        <Avatar0
                            id="355_6445"
                            className="instance-355_6445"
                            variant={"image"}
                            size={"l (40)"}
                        ></Avatar0>
                    </div>
                )}
                {type === "avatar" && align === "top" && (
                    <div id="355_6446" className="symbol-355_6446">
                        <Avatar0
                            id="355_6447"
                            className="instance-355_6447"
                            variant={"image"}
                            size={"l (40)"}
                        ></Avatar0>
                    </div>
                )}
                {type === "image" && align === "center" && (
                    <div id="355_6448" className="symbol-355_6448">
                        <div
                            id="355_6449"
                            className="instance-355_6449"
                            instance_355_6604={"varianttextsizel40"}
                        >
                            <Image
                                id="355_6449"
                                variant={"text"}
                                size={"l (40)"}
                            ></Image>
                            <Image
                                id="355_6449"
                                variant={"image"}
                                size={"l (40)"}
                            ></Image>
                        </div>
                    </div>
                )}
                {type === "image" && align === "top" && (
                    <div id="355_6450" className="symbol-355_6450">
                        <Image
                            id="355_6451"
                            className="instance-355_6451"
                            variant={"image"}
                            size={"l (40)"}
                        ></Image>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Listleftpart;
