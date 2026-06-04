import Avatar0 from "@/components/avatar0";
import "@/styles/Itemdropdownmenu.css";
interface itemdropdownmenuProps {
    hint?: boolean;
    tittle?: string;
    hinttext?: string;
    leftIconvariant24?: string;
    lefticonvariant20?: string;
    size?: string;
    left?: string;
    checked?: string;
    disabled?: string;
    id?: string;
    className?: string;
    text_2_24028?: string;
    text_2_24029?: string;
    text_2_24032?: string;
    text_2_24033?: string;
    text_2_19093_2_24032?: string;
    text_2_19094_2_24032?: string;
    text_2_19095_2_24032?: string;
    text_2_19096_2_24032?: string;
    text_2_19097_2_24032?: string;
    text_2_19098_2_24032?: string;
    text_2_19099_2_24032?: string;
    text_2_19100_2_24032?: string;
    text_2_19093_2_24033?: string;
    text_2_19094_2_24033?: string;
    text_2_19095_2_24033?: string;
    text_2_19096_2_24033?: string;
    text_2_19097_2_24033?: string;
    text_2_19098_2_24033?: string;
    text_2_19099_2_24033?: string;
    text_2_19100_2_24033?: string;
    text_2_19081_2_24028?: string;
    text_2_19082_2_24028?: string;
    text_2_19083_2_24028?: string;
    text_2_19084_2_24028?: string;
    text_2_19085_2_24028?: string;
    text_2_19086_2_24028?: string;
    text_2_19087_2_24028?: string;
    text_2_19088_2_24028?: string;
    text_2_19081_2_24029?: string;
    text_2_19082_2_24029?: string;
    text_2_19083_2_24029?: string;
    text_2_19084_2_24029?: string;
    text_2_19085_2_24029?: string;
    text_2_19086_2_24029?: string;
    text_2_19087_2_24029?: string;
    text_2_19088_2_24029?: string;
}
const Itemdropdownmenu = (props: itemdropdownmenuProps) => {
    const {
        hint = true,
        tittle = "Item text",
        hinttext = "Caption",
        leftIconvariant24 = "Component_3491_96450",
        lefticonvariant20 = "Component_3491_96895",
        size,
        left,
        checked,
        disabled,
        id,
        className = "",
        text_2_24028,
        text_2_24029,
        text_2_24032,
        text_2_24033,
        text_2_19093_2_24032,
        text_2_19094_2_24032,
        text_2_19095_2_24032,
        text_2_19096_2_24032,
        text_2_19097_2_24032,
        text_2_19098_2_24032,
        text_2_19099_2_24032,
        text_2_19100_2_24032,
        text_2_19093_2_24033,
        text_2_19094_2_24033,
        text_2_19095_2_24033,
        text_2_19096_2_24033,
        text_2_19097_2_24033,
        text_2_19098_2_24033,
        text_2_19099_2_24033,
        text_2_19100_2_24033,
        text_2_19081_2_24028,
        text_2_19082_2_24028,
        text_2_19083_2_24028,
        text_2_19084_2_24028,
        text_2_19085_2_24028,
        text_2_19086_2_24028,
        text_2_19087_2_24028,
        text_2_19088_2_24028,
        text_2_19081_2_24029,
        text_2_19082_2_24029,
        text_2_19083_2_24029,
        text_2_19084_2_24029,
        text_2_19085_2_24029,
        text_2_19086_2_24029,
        text_2_19087_2_24029,
        text_2_19088_2_24029
    } = props;

    return (
        <div className={`component-2_24025 ${className}`} id={id}>
            <div id="2_24025" className="symbol-2_24025">
                {size === "l" &&
                    left === "none" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="2_24026" className="symbol-2_24026">
                            <div id="2_24027" className="frame-2_24027">
                                <div className="frame-content-2_24027">
                                    <p
                                        id="2_24028"
                                        className="paragraph-2_24028 fill-lightfgdefault-2_22054-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ??
                                            text_2_24028 ??
                                            text_2_19081_2_24028 ??
                                            text_2_19082_2_24028 ??
                                            text_2_19083_2_24028 ??
                                            text_2_19084_2_24028 ??
                                            text_2_19085_2_24028 ??
                                            text_2_19086_2_24028 ??
                                            text_2_19087_2_24028 ??
                                            text_2_19088_2_24028 ??
                                            "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24029"
                                            className="paragraph-2_24029 fill-lightfgmuted-2_22048-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ??
                                                text_2_24029 ??
                                                text_2_19081_2_24029 ??
                                                text_2_19082_2_24029 ??
                                                text_2_19083_2_24029 ??
                                                text_2_19084_2_24029 ??
                                                text_2_19085_2_24029 ??
                                                text_2_19086_2_24029 ??
                                                text_2_19087_2_24029 ??
                                                text_2_19088_2_24029 ??
                                                "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "none" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="2_24030" className="symbol-2_24030">
                            <div id="2_24031" className="frame-2_24031">
                                <div className="frame-content-2_24031">
                                    <p
                                        id="2_24032"
                                        className="paragraph-2_24032 fill-lightfgdefault-2_22054-paragraph text-mobiledescription-l-2_2288"
                                    >
                                        {tittle ??
                                            text_2_24032 ??
                                            text_2_19093_2_24032 ??
                                            text_2_19094_2_24032 ??
                                            text_2_19095_2_24032 ??
                                            text_2_19096_2_24032 ??
                                            text_2_19097_2_24032 ??
                                            text_2_19098_2_24032 ??
                                            text_2_19099_2_24032 ??
                                            text_2_19100_2_24032 ??
                                            "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24033"
                                            className="paragraph-2_24033 fill-lightfgmuted-2_22048-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ??
                                                text_2_24033 ??
                                                text_2_19093_2_24033 ??
                                                text_2_19094_2_24033 ??
                                                text_2_19095_2_24033 ??
                                                text_2_19096_2_24033 ??
                                                text_2_19097_2_24033 ??
                                                text_2_19098_2_24033 ??
                                                text_2_19099_2_24033 ??
                                                text_2_19100_2_24033 ??
                                                "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "none" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="2_24034" className="symbol-2_24034">
                            <div id="2_24035" className="frame-2_24035">
                                <div className="frame-content-2_24035">
                                    <p
                                        id="2_24036"
                                        className="paragraph-2_24036 fill-lightfgdisabled-2_22050-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24037"
                                            className="paragraph-2_24037 fill-lightneutralmuted-2_23154-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "none" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="2_24038" className="symbol-2_24038">
                            <div id="2_24039" className="frame-2_24039">
                                <div className="frame-content-2_24039">
                                    <p
                                        id="2_24040"
                                        className="paragraph-2_24040 fill-lightfgdisabled-2_22050-paragraph text-mobiledescription-l-2_2288"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24041"
                                            className="paragraph-2_24041 fill-lightneutralmuted-2_23154-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "none" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="2_24042" className="symbol-2_24042">
                            <div id="2_24043" className="frame-2_24043">
                                <div className="frame-content-2_24043">
                                    <p
                                        id="2_24044"
                                        className="paragraph-2_24044 fill-lightaccentmuted-2_23147-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24045"
                                            className="paragraph-2_24045 fill-lightneutralmuted-2_23154-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "none" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="2_24048" className="symbol-2_24048">
                            <div id="2_24049" className="frame-2_24049">
                                <div className="frame-content-2_24049">
                                    <p
                                        id="2_24050"
                                        className="paragraph-2_24050 fill-lightaccentmuted-2_23147-paragraph text-mobiledescription-l-strong-2_20373"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24051"
                                            className="paragraph-2_24051 fill-lightneutralmuted-2_23154-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "none" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="2_24054" className="symbol-2_24054">
                            <div id="2_24055" className="frame-2_24055">
                                <div className="frame-content-2_24055">
                                    <p
                                        id="2_24056"
                                        className="paragraph-2_24056 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24057"
                                            className="paragraph-2_24057 fill-lightfgmuted-2_22048-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "none" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="2_24060" className="symbol-2_24060">
                            <div id="2_24061" className="frame-2_24061">
                                <div className="frame-content-2_24061">
                                    <p
                                        id="2_24062"
                                        className="paragraph-2_24062 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24063"
                                            className="paragraph-2_24063 fill-lightfgmuted-2_22048-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="2_24066" className="symbol-2_24066">
                            <div id="2_24069" className="frame-2_24069">
                                <div className="frame-content-2_24069">
                                    <p
                                        id="2_24070"
                                        className="paragraph-2_24070 fill-lightfgdefault-2_22054-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24071"
                                            className="paragraph-2_24071 fill-lightfgmuted-2_22048-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="2_24072" className="symbol-2_24072">
                            <div id="2_24075" className="frame-2_24075">
                                <div className="frame-content-2_24075">
                                    <p
                                        id="2_24076"
                                        className="paragraph-2_24076 fill-lightfgdefault-2_22054-paragraph text-mobiledescription-l-2_2288"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24077"
                                            className="paragraph-2_24077 fill-lightfgmuted-2_22048-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="2_24078" className="symbol-2_24078">
                            <div id="2_24081" className="frame-2_24081">
                                <div className="frame-content-2_24081">
                                    <p
                                        id="2_24082"
                                        className="paragraph-2_24082 fill-lightfgdisabled-2_22050-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24083"
                                            className="paragraph-2_24083 fill-lightneutralmuted-2_23154-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="2_24084" className="symbol-2_24084">
                            <div id="2_24087" className="frame-2_24087">
                                <div className="frame-content-2_24087">
                                    <p
                                        id="2_24088"
                                        className="paragraph-2_24088 fill-lightfgdisabled-2_22050-paragraph text-mobiledescription-l-2_2288"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24089"
                                            className="paragraph-2_24089 fill-lightneutralmuted-2_23154-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "icon" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="2_24090" className="symbol-2_24090">
                            <div id="2_24093" className="frame-2_24093">
                                <div className="frame-content-2_24093">
                                    <p
                                        id="2_24094"
                                        className="paragraph-2_24094 fill-lightaccentmuted-2_23147-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24095"
                                            className="paragraph-2_24095 fill-lightneutralmuted-2_23154-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "icon" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="2_24098" className="symbol-2_24098">
                            <div id="2_24101" className="frame-2_24101">
                                <div className="frame-content-2_24101">
                                    <p
                                        id="2_24102"
                                        className="paragraph-2_24102 fill-lightaccentmuted-2_23147-paragraph text-mobiledescription-l-strong-2_20373"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24103"
                                            className="paragraph-2_24103 fill-lightneutralmuted-2_23154-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "icon" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="2_24106" className="symbol-2_24106">
                            <div id="2_24109" className="frame-2_24109">
                                <div className="frame-content-2_24109">
                                    <p
                                        id="2_24110"
                                        className="paragraph-2_24110 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24111"
                                            className="paragraph-2_24111 fill-lightfgmuted-2_22048-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "icon" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="2_24114" className="symbol-2_24114">
                            <div id="2_24117" className="frame-2_24117">
                                <div className="frame-content-2_24117">
                                    <p
                                        id="2_24118"
                                        className="paragraph-2_24118 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24119"
                                            className="paragraph-2_24119 fill-lightfgmuted-2_22048-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "avatar" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="2_24122" className="symbol-2_24122">
                            <div id="2_24123" className="frame-2_24123">
                                <div className="frame-content-2_24123">
                                    <Avatar0
                                        id="2_24124"
                                        className="instance-2_24124"
                                        variant={"image"}
                                        size={"l (40)"}
                                    ></Avatar0>
                                </div>
                            </div>
                            <div id="2_24125" className="frame-2_24125">
                                <div className="frame-content-2_24125">
                                    <p
                                        id="2_24126"
                                        className="paragraph-2_24126 fill-lightfgdefault-2_22054-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24127"
                                            className="paragraph-2_24127 fill-lightfgmuted-2_22048-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "avatar" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="2_24128" className="symbol-2_24128">
                            <div id="2_24129" className="frame-2_24129">
                                <div className="frame-content-2_24129">
                                    <Avatar0
                                        id="2_24130"
                                        className="instance-2_24130"
                                        variant={"image"}
                                        size={"s (32)"}
                                    ></Avatar0>
                                </div>
                            </div>
                            <div id="2_24131" className="frame-2_24131">
                                <div className="frame-content-2_24131">
                                    <p
                                        id="2_24132"
                                        className="paragraph-2_24132 fill-lightfgdefault-2_22054-paragraph text-mobiledescription-l-2_2288"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24133"
                                            className="paragraph-2_24133 fill-lightfgmuted-2_22048-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "avatar" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="2_24134" className="symbol-2_24134">
                            <div id="2_24135" className="frame-2_24135">
                                <div className="frame-content-2_24135">
                                    <Avatar0
                                        id="2_24136"
                                        className="instance-2_24136"
                                        variant={"image"}
                                        size={"l (40)"}
                                    ></Avatar0>
                                </div>
                            </div>
                            <div id="2_24137" className="frame-2_24137">
                                <div className="frame-content-2_24137">
                                    <p
                                        id="2_24138"
                                        className="paragraph-2_24138 fill-lightfgdisabled-2_22050-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24139"
                                            className="paragraph-2_24139 fill-lightneutralmuted-2_23154-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "avatar" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="2_24140" className="symbol-2_24140">
                            <div id="2_24141" className="frame-2_24141">
                                <div className="frame-content-2_24141">
                                    <Avatar0
                                        id="2_24142"
                                        className="instance-2_24142"
                                        variant={"image"}
                                        size={"s (32)"}
                                    ></Avatar0>
                                </div>
                            </div>
                            <div id="2_24143" className="frame-2_24143">
                                <div className="frame-content-2_24143">
                                    <p
                                        id="2_24144"
                                        className="paragraph-2_24144 fill-lightfgdisabled-2_22050-paragraph text-mobiledescription-l-2_2288"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24145"
                                            className="paragraph-2_24145 fill-lightneutralmuted-2_23154-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "avatar" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="2_24146" className="symbol-2_24146">
                            <div id="2_24147" className="frame-2_24147">
                                <div className="frame-content-2_24147">
                                    <Avatar0
                                        id="2_24148"
                                        className="instance-2_24148"
                                        variant={"image"}
                                        size={"l (40)"}
                                    ></Avatar0>
                                </div>
                            </div>
                            <div id="2_24149" className="frame-2_24149">
                                <div className="frame-content-2_24149">
                                    <p
                                        id="2_24150"
                                        className="paragraph-2_24150 fill-lightaccentmuted-2_23147-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24151"
                                            className="paragraph-2_24151 fill-lightneutralmuted-2_23154-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "avatar" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="2_24154" className="symbol-2_24154">
                            <div id="2_24155" className="frame-2_24155">
                                <div className="frame-content-2_24155">
                                    <Avatar0
                                        id="2_24156"
                                        className="instance-2_24156"
                                        variant={"image"}
                                        size={"s (32)"}
                                    ></Avatar0>
                                </div>
                            </div>
                            <div id="2_24157" className="frame-2_24157">
                                <div className="frame-content-2_24157">
                                    <p
                                        id="2_24158"
                                        className="paragraph-2_24158 fill-lightaccentmuted-2_23147-paragraph text-mobiledescription-l-strong-2_20373"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24159"
                                            className="paragraph-2_24159 fill-lightneutralmuted-2_23154-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    left === "avatar" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="2_24162" className="symbol-2_24162">
                            <div id="2_24163" className="frame-2_24163">
                                <div className="frame-content-2_24163">
                                    <Avatar0
                                        id="2_24164"
                                        className="instance-2_24164"
                                        variant={"image"}
                                        size={"l (40)"}
                                    ></Avatar0>
                                </div>
                            </div>
                            <div id="2_24165" className="frame-2_24165">
                                <div className="frame-content-2_24165">
                                    <p
                                        id="2_24166"
                                        className="paragraph-2_24166 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24167"
                                            className="paragraph-2_24167 fill-lightfgmuted-2_22048-paragraph text-mobiledescription-m-2_20371"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    left === "avatar" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="2_24170" className="symbol-2_24170">
                            <div id="2_24171" className="frame-2_24171">
                                <div className="frame-content-2_24171">
                                    <Avatar0
                                        id="2_24172"
                                        className="instance-2_24172"
                                        variant={"image"}
                                        size={"s (32)"}
                                    ></Avatar0>
                                </div>
                            </div>
                            <div id="2_24173" className="frame-2_24173">
                                <div className="frame-content-2_24173">
                                    <p
                                        id="2_24174"
                                        className="paragraph-2_24174 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                    >
                                        {tittle ?? "Item text"}
                                    </p>
                                    {hint && (
                                        <p
                                            id="2_24175"
                                            className="paragraph-2_24175 fill-lightfgmuted-2_22048-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {hinttext ?? "Caption"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Itemdropdownmenu;
