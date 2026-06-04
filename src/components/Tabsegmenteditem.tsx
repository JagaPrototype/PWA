import DocumentImage0 from "@/components/documentimage0";
import DocumentImage from "@/components/documentimage";
import "@/styles/Tabsegmenteditem.css";
interface tabsegmenteditemProps {
    tabtext?: string;
    iconvariant24?: string;
    iconvariant20?: string;
    size?: string;
    type?: string;
    state?: string;
    text?: string;
    icon?: string;
    id?: string;
    className?: string;
    text_2_56379?: string;
    text_2_56381?: string;
    text_2_56383?: string;
    instance_2_56384?: string;
    text_2_56385?: string;
    text_2_56387?: string;
    text_2_56389?: string;
    text_2_56391?: string;
    instance_2_56392?: string;
    text_2_56393?: string;
}
const Tabsegmenteditem = (props: tabsegmenteditemProps) => {
    const {
        tabtext = "Tab",
        iconvariant24 = "Component_219_19131",
        iconvariant20 = "Component_219_19133",
        size,
        type,
        state,
        text,
        icon,
        id,
        className = "",
        text_2_56379,
        text_2_56381,
        text_2_56383,
        instance_2_56384,
        text_2_56385,
        text_2_56387,
        text_2_56389,
        text_2_56391,
        instance_2_56392,
        text_2_56393
    } = props;

    return (
        <div className={`component-2_56377 ${className}`} id={id}>
            <div id="2_56377" className="symbol-2_56377">
                {size === "l" &&
                    type === "primary" &&
                    state === "active" &&
                    text === "true" &&
                    icon === "false" && (
                        <div
                            id="2_56378"
                            className="symbol-2_56378 fill-lightaccentdefault-2_18799"
                        >
                            <p
                                id="2_56379"
                                className="paragraph-2_56379 fill-lightaccenton-accent-2_18842-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {tabtext ?? text_2_56379 ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "m" &&
                    type === "primary" &&
                    state === "active" &&
                    text === "true" &&
                    icon === "false" && (
                        <div
                            id="2_56380"
                            className="symbol-2_56380 fill-lightaccentdefault-2_18799"
                        >
                            <p
                                id="2_56381"
                                className="paragraph-2_56381 fill-lightaccenton-accent-2_18842-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {tabtext ?? text_2_56381 ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "m" &&
                    type === "secondary" &&
                    state === "active" &&
                    text === "true" &&
                    icon === "false" && (
                        <div
                            id="2_56382"
                            className="symbol-2_56382 fill-lightneutralactive-2_56374"
                        >
                            <p
                                id="2_56383"
                                className="paragraph-2_56383 fill-lightneutralon-neutral-2_20324-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {tabtext ?? text_2_56383 ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "l" &&
                    type === "secondary" &&
                    state === "active" &&
                    text === "true" &&
                    icon === "false" && (
                        <div
                            id="2_56384"
                            className="symbol-2_56384 fill-lightneutralactive-2_56374"
                        >
                            <p
                                id="2_56385"
                                className="paragraph-2_56385 fill-lightneutralon-neutral-2_20324-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {tabtext ?? text_2_56385 ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "l" &&
                    type === "primary" &&
                    state === "default" &&
                    text === "true" &&
                    icon === "false" && (
                        <div id="2_56386" className="symbol-2_56386">
                            <p
                                id="2_56387"
                                className="paragraph-2_56387 fill-lightfgsoft-2_20320-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {tabtext ?? text_2_56387 ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "m" &&
                    type === "primary" &&
                    state === "default" &&
                    text === "true" &&
                    icon === "false" && (
                        <div id="2_56388" className="symbol-2_56388">
                            <p
                                id="2_56389"
                                className="paragraph-2_56389 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {tabtext ?? text_2_56389 ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "m" &&
                    type === "secondary" &&
                    state === "default" &&
                    text === "true" &&
                    icon === "false" && (
                        <div id="2_56390" className="symbol-2_56390">
                            <p
                                id="2_56391"
                                className="paragraph-2_56391 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {tabtext ?? text_2_56391 ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "l" &&
                    type === "secondary" &&
                    state === "default" &&
                    text === "true" &&
                    icon === "false" && (
                        <div id="2_56392" className="symbol-2_56392">
                            <p
                                id="2_56393"
                                className="paragraph-2_56393 fill-lightfgsoft-2_20320-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {tabtext ?? text_2_56393 ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "l" &&
                    type === "primary" &&
                    state === "active" &&
                    text === "false" &&
                    icon === "true" && (
                        <div
                            id="2_56394"
                            className="symbol-2_56394 fill-lightaccentdefault-2_18799"
                        >
                            <DocumentImage0
                                id="2_56395"
                                className="instance-2_56395"
                            ></DocumentImage0>
                        </div>
                    )}
                {size === "m" &&
                    type === "primary" &&
                    state === "active" &&
                    text === "false" &&
                    icon === "true" && (
                        <div
                            id="2_56396"
                            className="symbol-2_56396 fill-lightaccentdefault-2_18799"
                        >
                            <DocumentImage
                                id="2_56397"
                                className="instance-2_56397"
                            ></DocumentImage>
                        </div>
                    )}
                {size === "m" &&
                    type === "secondary" &&
                    state === "active" &&
                    text === "false" &&
                    icon === "true" && (
                        <div
                            id="2_56398"
                            className="symbol-2_56398 fill-lightneutralactive-2_56374"
                        >
                            <DocumentImage
                                id="2_56399"
                                className="instance-2_56399"
                            ></DocumentImage>
                        </div>
                    )}
                {size === "l" &&
                    type === "secondary" &&
                    state === "active" &&
                    text === "false" &&
                    icon === "true" && (
                        <div
                            id="2_56400"
                            className="symbol-2_56400 fill-lightneutralactive-2_56374"
                        >
                            <DocumentImage0
                                id="2_56401"
                                className="instance-2_56401"
                            ></DocumentImage0>
                        </div>
                    )}
                {size === "l" &&
                    type === "primary" &&
                    state === "default" &&
                    text === "false" &&
                    icon === "true" && (
                        <div id="2_56402" className="symbol-2_56402">
                            <DocumentImage0
                                id="2_56403"
                                className="instance-2_56403"
                            ></DocumentImage0>
                        </div>
                    )}
                {size === "m" &&
                    type === "primary" &&
                    state === "default" &&
                    text === "false" &&
                    icon === "true" && (
                        <div id="2_56404" className="symbol-2_56404">
                            <DocumentImage
                                id="2_56405"
                                className="instance-2_56405"
                            ></DocumentImage>
                        </div>
                    )}
                {size === "m" &&
                    type === "secondary" &&
                    state === "default" &&
                    text === "false" &&
                    icon === "true" && (
                        <div id="2_56406" className="symbol-2_56406">
                            <DocumentImage
                                id="2_56407"
                                className="instance-2_56407"
                            ></DocumentImage>
                        </div>
                    )}
                {size === "l" &&
                    type === "secondary" &&
                    state === "default" &&
                    text === "false" &&
                    icon === "true" && (
                        <div id="2_56408" className="symbol-2_56408">
                            <DocumentImage0
                                id="2_56409"
                                className="instance-2_56409"
                            ></DocumentImage0>
                        </div>
                    )}
                {size === "l" &&
                    type === "primary" &&
                    state === "active" &&
                    text === "true" &&
                    icon === "true" && (
                        <div
                            id="2_56410"
                            className="symbol-2_56410 fill-lightaccentdefault-2_18799"
                        >
                            <DocumentImage0
                                id="2_56411"
                                className="instance-2_56411"
                            ></DocumentImage0>
                            <p
                                id="2_56412"
                                className="paragraph-2_56412 fill-lightaccenton-accent-2_18842-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {tabtext ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "m" &&
                    type === "primary" &&
                    state === "active" &&
                    text === "true" &&
                    icon === "true" && (
                        <div
                            id="2_56413"
                            className="symbol-2_56413 fill-lightaccentdefault-2_18799"
                        >
                            <DocumentImage
                                id="2_56414"
                                className="instance-2_56414"
                            ></DocumentImage>
                            <p
                                id="2_56415"
                                className="paragraph-2_56415 fill-lightaccenton-accent-2_18842-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {tabtext ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "m" &&
                    type === "secondary" &&
                    state === "active" &&
                    text === "true" &&
                    icon === "true" && (
                        <div
                            id="2_56416"
                            className="symbol-2_56416 fill-lightneutralactive-2_56374"
                        >
                            <DocumentImage
                                id="2_56417"
                                className="instance-2_56417"
                            ></DocumentImage>
                            <p
                                id="2_56418"
                                className="paragraph-2_56418 fill-lightneutralon-neutral-2_20324-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {tabtext ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "l" &&
                    type === "secondary" &&
                    state === "active" &&
                    text === "true" &&
                    icon === "true" && (
                        <div
                            id="2_56419"
                            className="symbol-2_56419 fill-lightneutralactive-2_56374"
                        >
                            <DocumentImage0
                                id="2_56420"
                                className="instance-2_56420"
                            ></DocumentImage0>
                            <p
                                id="2_56421"
                                className="paragraph-2_56421 fill-lightneutralon-neutral-2_20324-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {tabtext ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "l" &&
                    type === "primary" &&
                    state === "default" &&
                    text === "true" &&
                    icon === "true" && (
                        <div id="2_56422" className="symbol-2_56422">
                            <DocumentImage0
                                id="2_56423"
                                className="instance-2_56423"
                            ></DocumentImage0>
                            <p
                                id="2_56424"
                                className="paragraph-2_56424 fill-lightfgsoft-2_20320-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {tabtext ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "m" &&
                    type === "primary" &&
                    state === "default" &&
                    text === "true" &&
                    icon === "true" && (
                        <div id="2_56425" className="symbol-2_56425">
                            <DocumentImage
                                id="2_56426"
                                className="instance-2_56426"
                            ></DocumentImage>
                            <p
                                id="2_56427"
                                className="paragraph-2_56427 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {tabtext ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "m" &&
                    type === "secondary" &&
                    state === "default" &&
                    text === "true" &&
                    icon === "true" && (
                        <div id="2_56428" className="symbol-2_56428">
                            <DocumentImage
                                id="2_56429"
                                className="instance-2_56429"
                            ></DocumentImage>
                            <p
                                id="2_56430"
                                className="paragraph-2_56430 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {tabtext ?? "Tab"}
                            </p>
                        </div>
                    )}
                {size === "l" &&
                    type === "secondary" &&
                    state === "default" &&
                    text === "true" &&
                    icon === "true" && (
                        <div id="2_56431" className="symbol-2_56431">
                            <DocumentImage0
                                id="2_56432"
                                className="instance-2_56432"
                            ></DocumentImage0>
                            <p
                                id="2_56433"
                                className="paragraph-2_56433 fill-lightfgsoft-2_20320-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {tabtext ?? "Tab"}
                            </p>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Tabsegmenteditem;
