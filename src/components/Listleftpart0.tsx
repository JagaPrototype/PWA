import DocumentXLS from "@/components/documentxls";
import LukitDuck from "@/components/lukitduck";
import Checkbox from "@/components/checkbox";
import Radiobutton0 from "@/components/radiobutton0";
import Switch from "@/components/switch";
import Avatar from "@/components/avatar";
import Image0 from "@/components/image0";
import "@/styles/Listleftpart0.css";
interface listleftpart0Props {
    lefticonvariant24?: string;
    type?: string;
    align?: string;
    id?: string;
    className?: string;
    instance_1142_62634?: string;
    instance_1142_62637?: string;
    instance_1142_62639?: string;
    instance_1142_62641?: string;
    instance_1142_62643?: string;
    instance_1142_62645?: string;
    instance_1142_62647?: string;
}
const Listleftpart0 = (props: listleftpart0Props) => {
    const {
        lefticonvariant24 = "Component_3491_97172",
        type,
        align,
        id,
        className = "",
        instance_1142_62634,
        instance_1142_62637,
        instance_1142_62639,
        instance_1142_62641,
        instance_1142_62643,
        instance_1142_62645,
        instance_1142_62647
    } = props;

    return (
        <div className={`component-1142_62631 ${className}`} id={id}>
            <div id="1142_62631" className="symbol-1142_62631">
                {type === "icon" && align === "center" && (
                    <div id="1142_62632" className="symbol-1142_62632">
                        <div
                            id="1142_62633"
                            className="instance-1142_62633"
                            instance_2_13850={"DocumentXLS"}
                        >
                            {lefticonvariant24 === "Component_2281_52384" && (
                                <DocumentXLS id="1142_62633"></DocumentXLS>
                            )}
                            {lefticonvariant24 === "Component_2_13850" && (
                                <LukitDuck id="1142_62633"></LukitDuck>
                            )}
                        </div>
                    </div>
                )}
                {type === "icon" && align === "top" && (
                    <div id="1142_62634" className="symbol-1142_62634">
                        <LukitDuck
                            id="1142_62635"
                            className="instance-1142_62635"
                        ></LukitDuck>
                    </div>
                )}
                {type === "checkbox" && align === "center" && (
                    <div id="1142_62636" className="symbol-1142_62636">
                        <div
                            id="1142_62637"
                            className="instance-1142_62637"
                            instance_2_12858={
                                "checkedtruedisabledfalseindeterminatefalse"
                            }
                        >
                            {instance_1142_62637 === "Component_2_12865" && (
                                <Checkbox
                                    id="1142_62637"
                                    checked={"true"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox>
                            )}
                            {instance_1142_62637 === "Component_2_12860" && (
                                <Checkbox
                                    id="1142_62637"
                                    checked={"false"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox>
                            )}
                            {instance_1142_62637 === "Component_2_12862" && (
                                <Checkbox
                                    id="1142_62637"
                                    checked={"true"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox>
                            )}
                            {instance_1142_62637 === "Component_2_12858" && (
                                <Checkbox
                                    id="1142_62637"
                                    checked={"false"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox>
                            )}
                        </div>
                    </div>
                )}
                {type === "checkbox" && align === "top" && (
                    <div id="1142_62638" className="symbol-1142_62638">
                        <div
                            id="1142_62639"
                            className="instance-1142_62639"
                            instance_2_12858={
                                "checkedtruedisabledfalseindeterminatefalse"
                            }
                        >
                            {instance_1142_62639 === "Component_2_12865" && (
                                <Checkbox
                                    id="1142_62639"
                                    checked={"true"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox>
                            )}
                            {instance_1142_62639 === "Component_2_12860" && (
                                <Checkbox
                                    id="1142_62639"
                                    checked={"false"}
                                    disabled={"true"}
                                    indeterminate={"false"}
                                ></Checkbox>
                            )}
                            {instance_1142_62639 === "Component_2_12862" && (
                                <Checkbox
                                    id="1142_62639"
                                    checked={"true"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox>
                            )}
                            {instance_1142_62639 === "Component_2_12858" && (
                                <Checkbox
                                    id="1142_62639"
                                    checked={"false"}
                                    disabled={"false"}
                                    indeterminate={"false"}
                                ></Checkbox>
                            )}
                        </div>
                    </div>
                )}
                {type === "radiobutton" && align === "center" && (
                    <div id="1142_62640" className="symbol-1142_62640">
                        <div
                            id="1142_62641"
                            className="instance-1142_62641"
                            instance_59_23100={"checkedtruedisabledfalse"}
                        >
                            {instance_1142_62641 === "Component_59_23107" && (
                                <Radiobutton0
                                    id="1142_62641"
                                    checked={"true"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_1142_62641 === "Component_59_23102" && (
                                <Radiobutton0
                                    id="1142_62641"
                                    checked={"false"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_1142_62641 === "Component_59_23104" && (
                                <Radiobutton0
                                    id="1142_62641"
                                    checked={"true"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                            {instance_1142_62641 === "Component_59_23100" && (
                                <Radiobutton0
                                    id="1142_62641"
                                    checked={"false"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                        </div>
                    </div>
                )}
                {type === "radiobutton" && align === "top" && (
                    <div id="1142_62642" className="symbol-1142_62642">
                        <div
                            id="1142_62643"
                            className="instance-1142_62643"
                            instance_59_23100={"checkedtruedisabledfalse"}
                        >
                            {instance_1142_62643 === "Component_59_23107" && (
                                <Radiobutton0
                                    id="1142_62643"
                                    checked={"true"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_1142_62643 === "Component_59_23102" && (
                                <Radiobutton0
                                    id="1142_62643"
                                    checked={"false"}
                                    disabled={"true"}
                                ></Radiobutton0>
                            )}
                            {instance_1142_62643 === "Component_59_23104" && (
                                <Radiobutton0
                                    id="1142_62643"
                                    checked={"true"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                            {instance_1142_62643 === "Component_59_23100" && (
                                <Radiobutton0
                                    id="1142_62643"
                                    checked={"false"}
                                    disabled={"false"}
                                ></Radiobutton0>
                            )}
                        </div>
                    </div>
                )}
                {type === "switch" && align === "center" && (
                    <div id="1142_62644" className="symbol-1142_62644">
                        <div
                            id="1142_62645"
                            className="instance-1142_62645"
                            instance_59_23120={"checkedondisabledfalse"}
                        >
                            {instance_1142_62645 === "Component_59_23114" && (
                                <Switch
                                    id="1142_62645"
                                    checked={"on"}
                                    disabled={"true"}
                                ></Switch>
                            )}
                            {instance_1142_62645 === "Component_59_23117" && (
                                <Switch
                                    id="1142_62645"
                                    checked={"off"}
                                    disabled={"true"}
                                ></Switch>
                            )}
                            {instance_1142_62645 === "Component_59_23111" && (
                                <Switch
                                    id="1142_62645"
                                    checked={"on"}
                                    disabled={"false"}
                                ></Switch>
                            )}
                            {instance_1142_62645 === "Component_59_23120" && (
                                <Switch
                                    id="1142_62645"
                                    checked={"off"}
                                    disabled={"false"}
                                ></Switch>
                            )}
                        </div>
                    </div>
                )}
                {type === "switch" && align === "top" && (
                    <div id="1142_62646" className="symbol-1142_62646">
                        <div
                            id="1142_62647"
                            className="instance-1142_62647"
                            instance_59_23120={"checkedondisabledfalse"}
                        >
                            {instance_1142_62647 === "Component_59_23114" && (
                                <Switch
                                    id="1142_62647"
                                    checked={"on"}
                                    disabled={"true"}
                                ></Switch>
                            )}
                            {instance_1142_62647 === "Component_59_23117" && (
                                <Switch
                                    id="1142_62647"
                                    checked={"off"}
                                    disabled={"true"}
                                ></Switch>
                            )}
                            {instance_1142_62647 === "Component_59_23111" && (
                                <Switch
                                    id="1142_62647"
                                    checked={"on"}
                                    disabled={"false"}
                                ></Switch>
                            )}
                            {instance_1142_62647 === "Component_59_23120" && (
                                <Switch
                                    id="1142_62647"
                                    checked={"off"}
                                    disabled={"false"}
                                ></Switch>
                            )}
                        </div>
                    </div>
                )}
                {type === "avatar" && align === "center" && (
                    <div id="1142_62648" className="symbol-1142_62648">
                        <Avatar
                            id="1142_62649"
                            className="instance-1142_62649"
                            variant={"image"}
                            size={"l (40)"}
                        ></Avatar>
                    </div>
                )}
                {type === "avatar" && align === "top" && (
                    <div id="1142_62650" className="symbol-1142_62650">
                        <Avatar
                            id="1142_62651"
                            className="instance-1142_62651"
                            variant={"image"}
                            size={"l (40)"}
                        ></Avatar>
                    </div>
                )}
                {type === "image" && align === "center" && (
                    <div id="1142_62652" className="symbol-1142_62652">
                        <Image0
                            id="1142_62653"
                            className="instance-1142_62653"
                            variant={"image"}
                            size={"l (40)"}
                        ></Image0>
                    </div>
                )}
                {type === "image" && align === "top" && (
                    <div id="1142_62654" className="symbol-1142_62654">
                        <Image0
                            id="1142_62655"
                            className="instance-1142_62655"
                            variant={"image"}
                            size={"l (40)"}
                        ></Image0>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Listleftpart0;
