import Tag from "@/components/tag";
import "@/styles/Listbody.css";
interface listbodyProps {
    tittleText?: string;
    subtitle?: boolean;
    subtitleText?: string;
    instance_862_1?: boolean;
    content?: string;
    state?: string;
    selected?: string;
    id?: string;
    className?: string;
    visible_6220_325?: boolean;
    visible_6220_326?: boolean;
    visible_6220_327?: boolean;
    visible_6220_328?: boolean;
    text_355_6454?: string;
    text_355_6455?: string;
    text_355_6457?: string;
    text_355_6458?: string;
    text_355_6472?: string;
    text_355_6473?: string;
    text_355_6476?: string;
    text_355_6475?: string;
    text_355_6478_355_6671?: string;
    instance_355_6478?: string;
    text_355_6478_355_6743?: string;
}
const Listbody = (props: listbodyProps) => {
    const {
        tittleText = "Tittle",
        subtitle = true,
        subtitleText = "Text description for the sheet value, supplementing the title name",
        instance_862_1 = true,
        content,
        state,
        selected,
        id,
        className = "",
        visible_6220_325 = true,
        visible_6220_326 = true,
        visible_6220_327 = true,
        visible_6220_328 = true,
        text_355_6454,
        text_355_6455,
        text_355_6457,
        text_355_6458,
        text_355_6472,
        text_355_6473,
        text_355_6476,
        text_355_6475,
        text_355_6478_355_6671,
        instance_355_6478,
        text_355_6478_355_6743
    } = props;

    return (
        <div className={`component-355_6452 ${className}`} id={id}>
            <div id="355_6452" className="symbol-355_6452">
                {content === "text 1-2 line" &&
                    state === "default" &&
                    selected === "false" && (
                        <div id="355_6453" className="symbol-355_6453">
                            <p
                                id="355_6454"
                                className="paragraph-355_6454 fill-lightfgdefault-355_5765-paragraph text-mobilebody-l-355_5761"
                            >
                                {visible_6220_325 ?? text_355_6454 ?? "Tittle"}
                            </p>
                            {visible_6220_327 && (
                                <p
                                    id="355_6455"
                                    className="paragraph-355_6455 fill-lightfgmuted-355_5763-paragraph text-mobiledescription-m-2_20371"
                                >
                                    {visible_6220_326 ??
                                        text_355_6455 ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 3+ line" &&
                    state === "default" &&
                    selected === "false" && (
                        <div id="355_6456" className="symbol-355_6456">
                            <p
                                id="355_6457"
                                className="paragraph-355_6457 fill-lightfgdefault-355_5765-paragraph text-mobilebody-l-355_5761"
                            >
                                {visible_6220_325 ?? text_355_6457 ?? "Tittle"}
                            </p>
                            {visible_6220_327 && (
                                <p
                                    id="355_6458"
                                    className="paragraph-355_6458 fill-lightfgmuted-355_5763-paragraph text-mobiledescription-m-2_20371"
                                >
                                    {visible_6220_326 ??
                                        text_355_6458 ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 1-2 line" &&
                    state === "default" &&
                    selected === "true" && (
                        <div id="355_6459" className="symbol-355_6459">
                            <p
                                id="355_6460"
                                className="paragraph-355_6460 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {visible_6220_325 ?? "Tittle"}
                            </p>
                            {visible_6220_327 && (
                                <p
                                    id="355_6461"
                                    className="paragraph-355_6461 fill-lightfgmuted-355_5763-paragraph text-mobiledescription-m-2_20371"
                                >
                                    {visible_6220_326 ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 3+ line" &&
                    state === "default" &&
                    selected === "true" && (
                        <div id="355_6462" className="symbol-355_6462">
                            <p
                                id="355_6463"
                                className="paragraph-355_6463 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {visible_6220_325 ?? "Tittle"}
                            </p>
                            {visible_6220_327 && (
                                <p
                                    id="355_6464"
                                    className="paragraph-355_6464 fill-lightfgmuted-355_5763-paragraph text-mobiledescription-m-2_20371"
                                >
                                    {visible_6220_326 ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 1-2 line" &&
                    state === "disabled" &&
                    selected === "true" && (
                        <div id="355_6465" className="symbol-355_6465">
                            <p
                                id="355_6466"
                                className="paragraph-355_6466 fill-lightaccentmuted-2_22057-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {visible_6220_325 ?? "Tittle"}
                            </p>
                            {visible_6220_327 && (
                                <p
                                    id="355_6467"
                                    className="paragraph-355_6467 fill-lightneutralmuted-2_22061-paragraph text-mobiledescription-m-2_20371"
                                >
                                    {visible_6220_326 ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 3+ line" &&
                    state === "disabled" &&
                    selected === "true" && (
                        <div id="355_6468" className="symbol-355_6468">
                            <p
                                id="355_6469"
                                className="paragraph-355_6469 fill-lightaccentmuted-2_22057-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {visible_6220_325 ?? "Tittle"}
                            </p>
                            {visible_6220_327 && (
                                <p
                                    id="355_6470"
                                    className="paragraph-355_6470 fill-lightneutralmuted-2_22061-paragraph text-description-m-2_20359"
                                >
                                    {visible_6220_326 ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 1-2 line" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div id="355_6471" className="symbol-355_6471">
                            <p
                                id="355_6472"
                                className="paragraph-355_6472 fill-lightfgdisabled-2_2294-paragraph text-mobilebody-l-355_5761"
                            >
                                {tittleText ?? text_355_6472 ?? "Tittle"}
                            </p>
                            {subtitle && (
                                <p
                                    id="355_6473"
                                    className="paragraph-355_6473 fill-lightneutralmuted-2_22061-paragraph text-mobiledescription-m-2_20371"
                                >
                                    {subtitleText ??
                                        text_355_6473 ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 3+ line" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div id="355_6474" className="symbol-355_6474">
                            <p
                                id="355_6475"
                                className="paragraph-355_6475 fill-lightfgdisabled-2_2294-paragraph text-mobilebody-l-355_5761"
                            >
                                {tittleText ?? text_355_6475 ?? "Tittle"}
                            </p>
                            {subtitle && (
                                <p
                                    id="355_6476"
                                    className="paragraph-355_6476 fill-lightneutralmuted-2_22061-paragraph text-mobiledescription-m-2_20371"
                                >
                                    {subtitleText ??
                                        text_355_6476 ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "tag" &&
                    state === "default" &&
                    selected === "false" && (
                        <div id="355_6477" className="symbol-355_6477">
                            <div
                                id="355_6478"
                                className="instance-355_6478"
                                instance_355_6667={
                                    "sizemstatedisabledselectedfalse"
                                }
                                iconRight={false}
                                iconLeft={false}
                                text_355_6478_355_6671={text_355_6478_355_6671}
                                text_355_6478_355_6743={text_355_6478_355_6743}
                            >
                                {instance_355_6478 === "Component_355_6739" && (
                                    <Tag
                                        id="355_6478"
                                        size={"m"}
                                        state={"disabled"}
                                        selected={"false"}
                                    ></Tag>
                                )}
                                {instance_355_6478 === "Component_355_6667" && (
                                    <Tag
                                        id="355_6478"
                                        size={"m"}
                                        state={"default"}
                                        selected={"false"}
                                    ></Tag>
                                )}
                            </div>
                        </div>
                    )}
                {content === "tag" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div id="355_6479" className="symbol-355_6479">
                            <Tag
                                id="355_6480"
                                className="instance-355_6480"
                                size={"m"}
                                state={"disabled"}
                                selected={"false"}
                                iconRight={false}
                                iconLeft={false}
                            ></Tag>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Listbody;
