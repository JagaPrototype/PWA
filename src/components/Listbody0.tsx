import Tag from "@/components/tag";
import "@/styles/Listbody0.css";
interface listbody0Props {
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
}
const Listbody0 = (props: listbody0Props) => {
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
        visible_6220_328 = true
    } = props;

    return (
        <div className={`component-1899_49643 ${className}`} id={id}>
            <div id="1899_49643" className="symbol-1899_49643">
                {content === "text 1-2 line" &&
                    state === "default" &&
                    selected === "false" && (
                        <div id="1899_49644" className="symbol-1899_49644">
                            <p
                                id="1899_49645"
                                className="paragraph-1899_49645 fill-lightfgdefault-2_29113-paragraph text-mobilebody-l-2_11776"
                            >
                                {tittleText ?? "Tittle"}
                            </p>
                            {subtitle && (
                                <p
                                    id="1899_49646"
                                    className="paragraph-1899_49646 fill-lightfgmuted-2_29133-paragraph text-mobiledescription-m-2_11779"
                                >
                                    {subtitleText ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 3+ line" &&
                    state === "default" &&
                    selected === "false" && (
                        <div id="1899_49647" className="symbol-1899_49647">
                            <p
                                id="1899_49648"
                                className="paragraph-1899_49648 fill-lightfgdefault-2_29113-paragraph text-mobilebody-l-2_11776"
                            >
                                {tittleText ?? "Tittle"}
                            </p>
                            {subtitle && (
                                <p
                                    id="1899_49649"
                                    className="paragraph-1899_49649 fill-lightfgmuted-2_29133-paragraph text-mobiledescription-m-2_11779"
                                >
                                    {subtitleText ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 1-2 line" &&
                    state === "default" &&
                    selected === "true" && (
                        <div id="1899_49650" className="symbol-1899_49650">
                            <p
                                id="1899_49651"
                                className="paragraph-1899_49651 fill-lightaccentdefault-2_29136-paragraph text-mobilebody-l-strong-2_12679"
                            >
                                {tittleText ?? "Tittle"}
                            </p>
                            {subtitle && (
                                <p
                                    id="1899_49652"
                                    className="paragraph-1899_49652 fill-lightfgmuted-2_29133-paragraph text-mobiledescription-m-2_11779"
                                >
                                    {subtitleText ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 3+ line" &&
                    state === "default" &&
                    selected === "true" && (
                        <div id="1899_49653" className="symbol-1899_49653">
                            <p
                                id="1899_49654"
                                className="paragraph-1899_49654 fill-lightaccentdefault-2_29136-paragraph text-mobilebody-l-strong-2_12679"
                            >
                                {tittleText ?? "Tittle"}
                            </p>
                            {subtitle && (
                                <p
                                    id="1899_49655"
                                    className="paragraph-1899_49655 fill-lightfgmuted-2_29133-paragraph text-mobiledescription-m-2_11779"
                                >
                                    {subtitleText ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 1-2 line" &&
                    state === "disabled" &&
                    selected === "true" && (
                        <div id="1899_49656" className="symbol-1899_49656">
                            <p
                                id="1899_49657"
                                className="paragraph-1899_49657 fill-lightaccentmuted-2_29125-paragraph text-mobilebody-l-strong-2_12679"
                            >
                                {tittleText ?? "Tittle"}
                            </p>
                            {subtitle && (
                                <p
                                    id="1899_49658"
                                    className="paragraph-1899_49658 fill-lightneutralmuted-2_29134-paragraph text-mobiledescription-m-2_11779"
                                >
                                    {subtitleText ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 3+ line" &&
                    state === "disabled" &&
                    selected === "true" && (
                        <div id="1899_49659" className="symbol-1899_49659">
                            <p
                                id="1899_49660"
                                className="paragraph-1899_49660 fill-lightaccentmuted-2_29125-paragraph text-mobilebody-l-strong-2_12679"
                            >
                                {tittleText ?? "Tittle"}
                            </p>
                            {subtitle && (
                                <p
                                    id="1899_49661"
                                    className="paragraph-1899_49661 fill-lightneutralmuted-2_29134-paragraph text-description-m-2_12695"
                                >
                                    {subtitleText ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 1-2 line" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div id="1899_49662" className="symbol-1899_49662">
                            <p
                                id="1899_49663"
                                className="paragraph-1899_49663 fill-lightfgdisabled-2_29109-paragraph text-mobilebody-l-2_11776"
                            >
                                {tittleText ?? "Tittle"}
                            </p>
                            {subtitle && (
                                <p
                                    id="1899_49664"
                                    className="paragraph-1899_49664 fill-lightneutralmuted-2_29134-paragraph text-mobiledescription-m-2_11779"
                                >
                                    {subtitleText ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "text 3+ line" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div id="1899_49665" className="symbol-1899_49665">
                            <p
                                id="1899_49666"
                                className="paragraph-1899_49666 fill-lightfgdisabled-2_29109-paragraph text-mobilebody-l-2_11776"
                            >
                                {tittleText ?? "Tittle"}
                            </p>
                            {subtitle && (
                                <p
                                    id="1899_49667"
                                    className="paragraph-1899_49667 fill-lightneutralmuted-2_29134-paragraph text-mobiledescription-m-2_11779"
                                >
                                    {subtitleText ??
                                        "Text description for the sheet value, supplementing the title name"}
                                </p>
                            )}
                        </div>
                    )}
                {content === "tag" &&
                    state === "default" &&
                    selected === "false" && (
                        <div id="1899_49668" className="symbol-1899_49668">
                            <Tag
                                id="1899_49669"
                                className="instance-1899_49669"
                                size={"m"}
                                state={"default"}
                                selected={"false"}
                                iconRight={false}
                                iconLeft={false}
                            ></Tag>
                        </div>
                    )}
                {content === "tag" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div id="1899_49670" className="symbol-1899_49670">
                            <Tag
                                id="1899_49671"
                                className="instance-1899_49671"
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
export default Listbody0;
