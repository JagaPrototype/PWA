import DocumentImage from "@/components/documentimage";
import NavigationChevrondown from "@/components/navigationchevrondown";
import Badge from "@/components/badge";
import Counter from "@/components/counter";
import "@/styles/Tabitem.css";
interface tabitemProps {
    icon?: boolean;
    text?: boolean;
    dropdown?: boolean;
    iconvariant20?: string;
    tabtext?: string;
    number?: string;
    state?: string;
    type?: string;
    indicator?: string;
    id?: string;
    className?: string;
    text_4_29034?: string;
    text_4_29073?: string;
    text_4_29142?: string;
    text_4_29173?: string;
}
const Tabitem = (props: tabitemProps) => {
    const {
        icon = true,
        text = true,
        dropdown = true,
        iconvariant20 = "Component_778_31225",
        tabtext = "Tab",
        number = "23",
        state,
        type,
        indicator,
        id,
        className = "",
        text_4_29034,
        text_4_29073,
        text_4_29142,
        text_4_29173
    } = props;

    return (
        <div className={`component-4_29027 ${className}`} id={id}>
            <div id="4_29027" className="symbol-4_29027">
                {state === "active" &&
                    type === "default" &&
                    indicator === "none" && (
                        <div id="4_29028" className="symbol-4_29028">
                            <div id="4_29029" className="frame-4_29029">
                                <div className="frame-content-4_29029">
                                    <div id="4_29030" className="frame-4_29030">
                                        <div className="frame-content-4_29030">
                                            <div
                                                id="4_29031"
                                                className="frame-4_29031"
                                            >
                                                <DocumentImage
                                                    id="4_29032"
                                                    className="instance-4_29032"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29033"
                                                        className="frame-4_29033"
                                                    >
                                                        <p
                                                            id="4_29034"
                                                            className="paragraph-4_29034 fill-lightfgdefault-4_29025-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ??
                                                                text_4_29034 ??
                                                                "Tab"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <NavigationChevrondown
                                                id="4_29035"
                                                className="instance-4_29035"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                    <div
                                        id="4_29036"
                                        className="vector-4_29036"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "active" &&
                    type === "default" &&
                    indicator === "badge" && (
                        <div id="4_29037" className="symbol-4_29037">
                            <div id="4_29038" className="frame-4_29038">
                                <div className="frame-content-4_29038">
                                    <div id="4_29039" className="frame-4_29039">
                                        <div className="frame-content-4_29039">
                                            <div
                                                id="4_29040"
                                                className="frame-4_29040"
                                            >
                                                <DocumentImage
                                                    id="4_29041"
                                                    className="instance-4_29041"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29042"
                                                        className="frame-4_29042"
                                                    >
                                                        <p
                                                            id="4_29043"
                                                            className="paragraph-4_29043 fill-lightfgdefault-4_29025-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ?? "Tab"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <Badge
                                                id="4_29044"
                                                className="instance-4_29044"
                                                variant={"primary"}
                                            ></Badge>
                                            <NavigationChevrondown
                                                id="4_29045"
                                                className="instance-4_29045"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                    <div
                                        id="4_29046"
                                        className="vector-4_29046"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "active" &&
                    type === "default" &&
                    indicator === "counter" && (
                        <div id="4_29047" className="symbol-4_29047">
                            <div id="4_29048" className="frame-4_29048">
                                <div className="frame-content-4_29048">
                                    <div id="4_29049" className="frame-4_29049">
                                        <div className="frame-content-4_29049">
                                            <div
                                                id="4_29050"
                                                className="frame-4_29050"
                                            >
                                                <DocumentImage
                                                    id="4_29051"
                                                    className="instance-4_29051"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29052"
                                                        className="frame-4_29052"
                                                    >
                                                        <p
                                                            id="4_29053"
                                                            className="paragraph-4_29053 fill-lightfgdefault-4_29025-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ?? "Tab"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <Counter
                                                id="4_29054"
                                                className="instance-4_29054"
                                                size={"m"}
                                                variant={"secondary"}
                                            ></Counter>
                                            <NavigationChevrondown
                                                id="4_29055"
                                                className="instance-4_29055"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                    <div
                                        id="4_29056"
                                        className="vector-4_29056"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "active" &&
                    type === "default" &&
                    indicator === "number" && (
                        <div id="4_29057" className="symbol-4_29057">
                            <div id="4_29058" className="frame-4_29058">
                                <div className="frame-content-4_29058">
                                    <div id="4_29059" className="frame-4_29059">
                                        <div className="frame-content-4_29059">
                                            <div
                                                id="4_29060"
                                                className="frame-4_29060"
                                            >
                                                <DocumentImage
                                                    id="4_29061"
                                                    className="instance-4_29061"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29062"
                                                        className="frame-4_29062"
                                                    >
                                                        <p
                                                            id="4_29063"
                                                            className="paragraph-4_29063 fill-lightfgdefault-4_29025-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ?? "Tab"}
                                                        </p>
                                                        <p
                                                            id="4_29064"
                                                            className="paragraph-4_29064 fill-lightfgmuted-2_2228-paragraph text-mobiledescription-l-2_2288"
                                                        >
                                                            {number ?? "23"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <NavigationChevrondown
                                                id="4_29065"
                                                className="instance-4_29065"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                    <div
                                        id="4_29066"
                                        className="vector-4_29066"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    type === "default" &&
                    indicator === "none" && (
                        <div id="4_29067" className="symbol-4_29067">
                            <div id="4_29068" className="frame-4_29068">
                                <div className="frame-content-4_29068">
                                    <div id="4_29069" className="frame-4_29069">
                                        <div className="frame-content-4_29069">
                                            <div
                                                id="4_29070"
                                                className="frame-4_29070"
                                            >
                                                <DocumentImage
                                                    id="4_29071"
                                                    className="instance-4_29071"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29072"
                                                        className="frame-4_29072"
                                                    >
                                                        <p
                                                            id="4_29073"
                                                            className="paragraph-4_29073 fill-lightfgsoft-2_20320-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ??
                                                                text_4_29073 ??
                                                                "Tab"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <NavigationChevrondown
                                                id="4_29074"
                                                className="instance-4_29074"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    type === "default" &&
                    indicator === "badge" && (
                        <div id="4_29075" className="symbol-4_29075">
                            <div id="4_29076" className="frame-4_29076">
                                <div className="frame-content-4_29076">
                                    <div id="4_29077" className="frame-4_29077">
                                        <div className="frame-content-4_29077">
                                            <div
                                                id="4_29078"
                                                className="frame-4_29078"
                                            >
                                                <DocumentImage
                                                    id="4_29079"
                                                    className="instance-4_29079"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29080"
                                                        className="frame-4_29080"
                                                    >
                                                        <p
                                                            id="4_29081"
                                                            className="paragraph-4_29081 fill-lightfgsoft-2_20320-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ?? "Tab"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <Badge
                                                id="4_29082"
                                                className="instance-4_29082"
                                                variant={"primary"}
                                            ></Badge>
                                            <NavigationChevrondown
                                                id="4_29083"
                                                className="instance-4_29083"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    type === "default" &&
                    indicator === "counter" && (
                        <div id="4_29084" className="symbol-4_29084">
                            <div id="4_29085" className="frame-4_29085">
                                <div className="frame-content-4_29085">
                                    <div id="4_29086" className="frame-4_29086">
                                        <div className="frame-content-4_29086">
                                            <div
                                                id="4_29087"
                                                className="frame-4_29087"
                                            >
                                                <DocumentImage
                                                    id="4_29088"
                                                    className="instance-4_29088"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29089"
                                                        className="frame-4_29089"
                                                    >
                                                        <p
                                                            id="4_29090"
                                                            className="paragraph-4_29090 fill-lightfgsoft-2_20320-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ?? "Tab"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <Counter
                                                id="4_29091"
                                                className="instance-4_29091"
                                                size={"m"}
                                                variant={"secondary"}
                                            ></Counter>
                                            <NavigationChevrondown
                                                id="4_29092"
                                                className="instance-4_29092"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    type === "default" &&
                    indicator === "number" && (
                        <div id="4_29093" className="symbol-4_29093">
                            <div id="4_29094" className="frame-4_29094">
                                <div className="frame-content-4_29094">
                                    <div id="4_29095" className="frame-4_29095">
                                        <div className="frame-content-4_29095">
                                            <div
                                                id="4_29096"
                                                className="frame-4_29096"
                                            >
                                                <DocumentImage
                                                    id="4_29097"
                                                    className="instance-4_29097"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29098"
                                                        className="frame-4_29098"
                                                    >
                                                        <p
                                                            id="4_29099"
                                                            className="paragraph-4_29099 fill-lightfgsoft-2_20320-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ?? "Tab"}
                                                        </p>
                                                        <p
                                                            id="4_29100"
                                                            className="paragraph-4_29100 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-2_2288"
                                                        >
                                                            {number ?? "23"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <NavigationChevrondown
                                                id="4_29101"
                                                className="instance-4_29101"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    type === "default" &&
                    indicator === "none" && (
                        <div id="4_29102" className="symbol-4_29102">
                            <div id="4_29103" className="frame-4_29103">
                                <div className="frame-content-4_29103">
                                    <div id="4_29104" className="frame-4_29104">
                                        <div className="frame-content-4_29104">
                                            <div
                                                id="4_29105"
                                                className="frame-4_29105"
                                            >
                                                <DocumentImage
                                                    id="4_29106"
                                                    className="instance-4_29106"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29107"
                                                        className="frame-4_29107"
                                                    >
                                                        <p
                                                            id="4_29108"
                                                            className="paragraph-4_29108 fill-lightfgsoft-2_20320-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ?? "Tab"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <NavigationChevrondown
                                                id="4_29109"
                                                className="instance-4_29109"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    type === "default" &&
                    indicator === "badge" && (
                        <div id="4_29110" className="symbol-4_29110">
                            <div id="4_29111" className="frame-4_29111">
                                <div className="frame-content-4_29111">
                                    <div id="4_29112" className="frame-4_29112">
                                        <div className="frame-content-4_29112">
                                            <div
                                                id="4_29113"
                                                className="frame-4_29113"
                                            >
                                                <DocumentImage
                                                    id="4_29114"
                                                    className="instance-4_29114"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29115"
                                                        className="frame-4_29115"
                                                    >
                                                        <p
                                                            id="4_29116"
                                                            className="paragraph-4_29116 fill-lightfgsoft-2_20320-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ?? "Tab"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <Badge
                                                id="4_29117"
                                                className="instance-4_29117"
                                                variant={"primary"}
                                            ></Badge>
                                            <NavigationChevrondown
                                                id="4_29118"
                                                className="instance-4_29118"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    type === "default" &&
                    indicator === "counter" && (
                        <div id="4_29119" className="symbol-4_29119">
                            <div id="4_29120" className="frame-4_29120">
                                <div className="frame-content-4_29120">
                                    <div id="4_29121" className="frame-4_29121">
                                        <div className="frame-content-4_29121">
                                            <div
                                                id="4_29122"
                                                className="frame-4_29122"
                                            >
                                                <DocumentImage
                                                    id="4_29123"
                                                    className="instance-4_29123"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29124"
                                                        className="frame-4_29124"
                                                    >
                                                        <p
                                                            id="4_29125"
                                                            className="paragraph-4_29125 fill-lightfgsoft-2_20320-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ?? "Tab"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <Counter
                                                id="4_29126"
                                                className="instance-4_29126"
                                                size={"m"}
                                                variant={"secondary"}
                                            ></Counter>
                                            <NavigationChevrondown
                                                id="4_29127"
                                                className="instance-4_29127"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    type === "default" &&
                    indicator === "number" && (
                        <div id="4_29128" className="symbol-4_29128">
                            <div id="4_29129" className="frame-4_29129">
                                <div className="frame-content-4_29129">
                                    <div id="4_29130" className="frame-4_29130">
                                        <div className="frame-content-4_29130">
                                            <div
                                                id="4_29131"
                                                className="frame-4_29131"
                                            >
                                                <DocumentImage
                                                    id="4_29132"
                                                    className="instance-4_29132"
                                                ></DocumentImage>
                                                {text && (
                                                    <div
                                                        id="4_29133"
                                                        className="frame-4_29133"
                                                    >
                                                        <p
                                                            id="4_29134"
                                                            className="paragraph-4_29134 fill-lightfgsoft-2_20320-paragraph text-mobilebody-l-strong-2_20376"
                                                        >
                                                            {tabtext ?? "Tab"}
                                                        </p>
                                                        <p
                                                            id="4_29135"
                                                            className="paragraph-4_29135 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-2_2288"
                                                        >
                                                            {number ?? "23"}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <NavigationChevrondown
                                                id="4_29136"
                                                className="instance-4_29136"
                                            ></NavigationChevrondown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "active" &&
                    type === "accent" &&
                    indicator === "none" && (
                        <div
                            id="4_29137"
                            className="symbol-4_29137 fill-lightaccentdefault-2_18799"
                        >
                            <div id="4_29138" className="frame-4_29138">
                                <div className="frame-content-4_29138">
                                    <div id="4_29139" className="frame-4_29139">
                                        <DocumentImage
                                            id="4_29140"
                                            className="instance-4_29140"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29141"
                                                className="frame-4_29141"
                                            >
                                                <p
                                                    id="4_29142"
                                                    className="paragraph-4_29142 fill-lightaccenton-accent-2_18842-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ??
                                                        text_4_29142 ??
                                                        "Tab"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <NavigationChevrondown
                                        id="4_29143"
                                        className="instance-4_29143"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "active" &&
                    type === "accent" &&
                    indicator === "number" && (
                        <div
                            id="4_29144"
                            className="symbol-4_29144 fill-lightaccentdefault-2_18799"
                        >
                            <div id="4_29145" className="frame-4_29145">
                                <div className="frame-content-4_29145">
                                    <div id="4_29146" className="frame-4_29146">
                                        <DocumentImage
                                            id="4_29147"
                                            className="instance-4_29147"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29148"
                                                className="frame-4_29148"
                                            >
                                                <p
                                                    id="4_29149"
                                                    className="paragraph-4_29149 fill-lightaccenton-accent-2_18842-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ?? "Tab"}
                                                </p>
                                                <p
                                                    id="4_29150"
                                                    className="paragraph-4_29150 fill-lightaccenton-accent-2_18842-paragraph text-mobiledescription-m-2_20371"
                                                >
                                                    {number ?? "23"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <NavigationChevrondown
                                        id="4_29151"
                                        className="instance-4_29151"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "active" &&
                    type === "accent" &&
                    indicator === "badge" && (
                        <div
                            id="4_29152"
                            className="symbol-4_29152 fill-lightaccentdefault-2_18799"
                        >
                            <div id="4_29153" className="frame-4_29153">
                                <div className="frame-content-4_29153">
                                    <div id="4_29154" className="frame-4_29154">
                                        <DocumentImage
                                            id="4_29155"
                                            className="instance-4_29155"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29156"
                                                className="frame-4_29156"
                                            >
                                                <p
                                                    id="4_29157"
                                                    className="paragraph-4_29157 fill-lightaccenton-accent-2_18842-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ?? "Tab"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <Badge
                                        id="4_29158"
                                        className="instance-4_29158"
                                        variant={"on-accent"}
                                    ></Badge>
                                    <NavigationChevrondown
                                        id="4_29159"
                                        className="instance-4_29159"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "active" &&
                    type === "accent" &&
                    indicator === "counter" && (
                        <div
                            id="4_29160"
                            className="symbol-4_29160 fill-lightaccentdefault-2_18799"
                        >
                            <div id="4_29161" className="frame-4_29161">
                                <div className="frame-content-4_29161">
                                    <div id="4_29162" className="frame-4_29162">
                                        <DocumentImage
                                            id="4_29163"
                                            className="instance-4_29163"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29164"
                                                className="frame-4_29164"
                                            >
                                                <p
                                                    id="4_29165"
                                                    className="paragraph-4_29165 fill-lightaccenton-accent-2_18842-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ?? "Tab"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <Counter
                                        id="4_29166"
                                        className="instance-4_29166"
                                        size={"s"}
                                        variant={"contrast"}
                                    ></Counter>
                                    <NavigationChevrondown
                                        id="4_29167"
                                        className="instance-4_29167"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    type === "accent" &&
                    indicator === "none" && (
                        <div id="4_29168" className="symbol-4_29168">
                            <div id="4_29169" className="frame-4_29169">
                                <div className="frame-content-4_29169">
                                    <div id="4_29170" className="frame-4_29170">
                                        <DocumentImage
                                            id="4_29171"
                                            className="instance-4_29171"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29172"
                                                className="frame-4_29172"
                                            >
                                                <p
                                                    id="4_29173"
                                                    className="paragraph-4_29173 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ??
                                                        text_4_29173 ??
                                                        "Tab"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <NavigationChevrondown
                                        id="4_29174"
                                        className="instance-4_29174"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    type === "accent" &&
                    indicator === "number" && (
                        <div id="4_29175" className="symbol-4_29175">
                            <div id="4_29176" className="frame-4_29176">
                                <div className="frame-content-4_29176">
                                    <div id="4_29177" className="frame-4_29177">
                                        <DocumentImage
                                            id="4_29178"
                                            className="instance-4_29178"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29179"
                                                className="frame-4_29179"
                                            >
                                                <p
                                                    id="4_29180"
                                                    className="paragraph-4_29180 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ?? "Tab"}
                                                </p>
                                                <p
                                                    id="4_29181"
                                                    className="paragraph-4_29181 fill-lightfgmuted-2_2228-paragraph text-mobiledescription-m-2_20371"
                                                >
                                                    {number ?? "23"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <NavigationChevrondown
                                        id="4_29182"
                                        className="instance-4_29182"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    type === "accent" &&
                    indicator === "badge" && (
                        <div id="4_29183" className="symbol-4_29183">
                            <div id="4_29184" className="frame-4_29184">
                                <div className="frame-content-4_29184">
                                    <div id="4_29185" className="frame-4_29185">
                                        <DocumentImage
                                            id="4_29186"
                                            className="instance-4_29186"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29187"
                                                className="frame-4_29187"
                                            >
                                                <p
                                                    id="4_29188"
                                                    className="paragraph-4_29188 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ?? "Tab"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <Badge
                                        id="4_29189"
                                        className="instance-4_29189"
                                        variant={"primary"}
                                    ></Badge>
                                    <NavigationChevrondown
                                        id="4_29190"
                                        className="instance-4_29190"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    type === "accent" &&
                    indicator === "counter" && (
                        <div id="4_29191" className="symbol-4_29191">
                            <div id="4_29192" className="frame-4_29192">
                                <div className="frame-content-4_29192">
                                    <div id="4_29193" className="frame-4_29193">
                                        <DocumentImage
                                            id="4_29194"
                                            className="instance-4_29194"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29195"
                                                className="frame-4_29195"
                                            >
                                                <p
                                                    id="4_29196"
                                                    className="paragraph-4_29196 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ?? "Tab"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <Counter
                                        id="4_29197"
                                        className="instance-4_29197"
                                        size={"s"}
                                        variant={"secondary"}
                                    ></Counter>
                                    <NavigationChevrondown
                                        id="4_29198"
                                        className="instance-4_29198"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    type === "accent" &&
                    indicator === "none" && (
                        <div id="4_29199" className="symbol-4_29199">
                            <div id="4_29200" className="frame-4_29200">
                                <div className="frame-content-4_29200">
                                    <div id="4_29201" className="frame-4_29201">
                                        <DocumentImage
                                            id="4_29202"
                                            className="instance-4_29202"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29203"
                                                className="frame-4_29203"
                                            >
                                                <p
                                                    id="4_29204"
                                                    className="paragraph-4_29204 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ?? "Tab"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <NavigationChevrondown
                                        id="4_29205"
                                        className="instance-4_29205"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    type === "accent" &&
                    indicator === "number" && (
                        <div id="4_29206" className="symbol-4_29206">
                            <div id="4_29207" className="frame-4_29207">
                                <div className="frame-content-4_29207">
                                    <div id="4_29208" className="frame-4_29208">
                                        <DocumentImage
                                            id="4_29209"
                                            className="instance-4_29209"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29210"
                                                className="frame-4_29210"
                                            >
                                                <p
                                                    id="4_29211"
                                                    className="paragraph-4_29211 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ?? "Tab"}
                                                </p>
                                                <p
                                                    id="4_29212"
                                                    className="paragraph-4_29212 fill-lightfgmuted-2_2228-paragraph text-mobiledescription-m-2_20371"
                                                >
                                                    {number ?? "23"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <NavigationChevrondown
                                        id="4_29213"
                                        className="instance-4_29213"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    type === "accent" &&
                    indicator === "badge" && (
                        <div id="4_29214" className="symbol-4_29214">
                            <div id="4_29215" className="frame-4_29215">
                                <div className="frame-content-4_29215">
                                    <div id="4_29216" className="frame-4_29216">
                                        <DocumentImage
                                            id="4_29217"
                                            className="instance-4_29217"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29218"
                                                className="frame-4_29218"
                                            >
                                                <p
                                                    id="4_29219"
                                                    className="paragraph-4_29219 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ?? "Tab"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <Badge
                                        id="4_29220"
                                        className="instance-4_29220"
                                        variant={"primary"}
                                    ></Badge>
                                    <NavigationChevrondown
                                        id="4_29221"
                                        className="instance-4_29221"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    type === "accent" &&
                    indicator === "counter" && (
                        <div id="4_29222" className="symbol-4_29222">
                            <div id="4_29223" className="frame-4_29223">
                                <div className="frame-content-4_29223">
                                    <div id="4_29224" className="frame-4_29224">
                                        <DocumentImage
                                            id="4_29225"
                                            className="instance-4_29225"
                                        ></DocumentImage>
                                        {text && (
                                            <div
                                                id="4_29226"
                                                className="frame-4_29226"
                                            >
                                                <p
                                                    id="4_29227"
                                                    className="paragraph-4_29227 fill-lightfgsoft-2_20320-paragraph text-mobiledescription-l-strong-2_20373"
                                                >
                                                    {tabtext ?? "Tab"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <Counter
                                        id="4_29228"
                                        className="instance-4_29228"
                                        size={"s"}
                                        variant={"secondary"}
                                    ></Counter>
                                    <NavigationChevrondown
                                        id="4_29229"
                                        className="instance-4_29229"
                                    ></NavigationChevrondown>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Tabitem;
