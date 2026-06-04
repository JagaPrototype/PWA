import OrganizeCalendar from "@/components/organizecalendar";
import Counter from "@/components/counter";
import OrganizeCalendar0 from "@/components/organizecalendar0";
import "@/styles/Chips.css";
interface chipsProps {
    Text?: string;
    iconLeft?: boolean;
    iconLeft20?: string;
    iconLeft24?: string;
    counter?: boolean;
    size?: string;
    selected?: string;
    type?: string;
    state?: string;
    _style?: string;
    id?: string;
    className?: string;
    leftIconvariant24?: string;
    leftIconvariant16?: string;
    rightIconvariant16?: string;
    leftIconvariant20?: string;
    rightIconvariant20?: string;
    rightIconvariant24?: string;
    lefticon?: boolean;
    righticon?: boolean;
}
const Chips = (props: chipsProps) => {
    const {
        Text = "Label",
        iconLeft = false,
        iconLeft20 = "Component_3491_94048",
        iconLeft24 = "Component_15_6693",
        counter = false,
        size,
        selected,
        type,
        state,
        _style,
        id,
        className = "",
        leftIconvariant24 = "Component_344_102581",
        leftIconvariant16 = "Component_344_103471",
        rightIconvariant16 = "Component_344_103020",
        leftIconvariant20 = "Component_344_102398",
        rightIconvariant20 = "Component_344_103324",
        rightIconvariant24 = "Component_344_103213",
        lefticon = true,
        righticon = false
    } = props;

    return (
        <div className={`component-2_24669 ${className}`} id={id}>
            <div id="2_24669" className="symbol-2_24669">
                {size === "l" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24670"
                            className="symbol-2_24670 fill-lightinteractiveaccent-2_2283"
                        >
                            {iconLeft && (
                                <div id="2_24671" className="frame-2_24671">
                                    <OrganizeCalendar
                                        id="2_24672"
                                        className="instance-2_24672"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24673" className="frame-2_24673">
                                <p
                                    id="2_24674"
                                    className="paragraph-2_24674 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-2_2287"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24675" className="frame-2_24675">
                                    <Counter
                                        id="2_24676"
                                        className="instance-2_24676"
                                        size={"m (24)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24677"
                            className="symbol-2_24677 fill-lightinteractiveaccent-2_2283"
                        >
                            {iconLeft && (
                                <div id="2_24678" className="frame-2_24678">
                                    <OrganizeCalendar0
                                        id="2_24679"
                                        className="instance-2_24679"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24680" className="frame-2_24680">
                                <p
                                    id="2_24681"
                                    className="paragraph-2_24681 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24682" className="frame-2_24682">
                                    <Counter
                                        id="2_24683"
                                        className="instance-2_24683"
                                        size={"s (20)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24684"
                            className="symbol-2_24684 fill-lightinteractiveaccent-2_2283"
                        >
                            {iconLeft && (
                                <div id="2_24685" className="frame-2_24685">
                                    <OrganizeCalendar0
                                        id="2_24686"
                                        className="instance-2_24686"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24687" className="frame-2_24687">
                                <p
                                    id="2_24688"
                                    className="paragraph-2_24688 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24689" className="frame-2_24689">
                                    <Counter
                                        id="2_24690"
                                        className="instance-2_24690"
                                        size={"s (20)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_24691"
                            className="symbol-2_24691 fill-lightinteractiveaccent-2_2283"
                        >
                            {iconLeft && (
                                <div id="2_24692" className="frame-2_24692">
                                    <OrganizeCalendar
                                        id="2_24693"
                                        className="instance-2_24693"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24694" className="frame-2_24694">
                                <p
                                    id="2_24695"
                                    className="paragraph-2_24695 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-2_2287"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24696" className="frame-2_24696">
                                    <Counter
                                        id="2_24697"
                                        className="instance-2_24697"
                                        size={"m (24)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_24698"
                            className="symbol-2_24698 fill-lightinteractiveaccent-2_2283"
                        >
                            {iconLeft && (
                                <div id="2_24699" className="frame-2_24699">
                                    <OrganizeCalendar0
                                        id="2_24700"
                                        className="instance-2_24700"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24701" className="frame-2_24701">
                                <p
                                    id="2_24702"
                                    className="paragraph-2_24702 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24703" className="frame-2_24703">
                                    <Counter
                                        id="2_24704"
                                        className="instance-2_24704"
                                        size={"s (20)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24705"
                            className="symbol-2_24705 fill-lightneutraldefault-2_23155"
                        >
                            {iconLeft && (
                                <div id="2_24706" className="frame-2_24706">
                                    <OrganizeCalendar
                                        id="2_24707"
                                        className="instance-2_24707"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24708" className="frame-2_24708">
                                <p
                                    id="2_24709"
                                    className="paragraph-2_24709 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-2_2287"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24710" className="frame-2_24710">
                                    <Counter
                                        id="2_24711"
                                        className="instance-2_24711"
                                        size={"m (24)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24712"
                            className="symbol-2_24712 fill-lightneutraldefault-2_23155"
                        >
                            {iconLeft && (
                                <div id="2_24713" className="frame-2_24713">
                                    <OrganizeCalendar0
                                        id="2_24714"
                                        className="instance-2_24714"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24715" className="frame-2_24715">
                                <p
                                    id="2_24716"
                                    className="paragraph-2_24716 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24717" className="frame-2_24717">
                                    <Counter
                                        id="2_24718"
                                        className="instance-2_24718"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24719"
                            className="symbol-2_24719 fill-lightneutraldefault-2_23155"
                        >
                            {iconLeft && (
                                <div id="2_24720" className="frame-2_24720">
                                    <OrganizeCalendar0
                                        id="2_24721"
                                        className="instance-2_24721"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24722" className="frame-2_24722">
                                <p
                                    id="2_24723"
                                    className="paragraph-2_24723 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24724" className="frame-2_24724">
                                    <Counter
                                        id="2_24725"
                                        className="instance-2_24725"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_24726"
                            className="symbol-2_24726 fill-lightneutraldefault-2_23155"
                        >
                            {iconLeft && (
                                <div id="2_24727" className="frame-2_24727">
                                    <OrganizeCalendar
                                        id="2_24728"
                                        className="instance-2_24728"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24729" className="frame-2_24729">
                                <p
                                    id="2_24730"
                                    className="paragraph-2_24730 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-m-2_2287"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24731" className="frame-2_24731">
                                    <Counter
                                        id="2_24732"
                                        className="instance-2_24732"
                                        size={"m (24)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_24733"
                            className="symbol-2_24733 fill-lightneutraldefault-2_23155"
                        >
                            {iconLeft && (
                                <div id="2_24734" className="frame-2_24734">
                                    <OrganizeCalendar0
                                        id="2_24735"
                                        className="instance-2_24735"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24736" className="frame-2_24736">
                                <p
                                    id="2_24737"
                                    className="paragraph-2_24737 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24738" className="frame-2_24738">
                                    <Counter
                                        id="2_24739"
                                        className="instance-2_24739"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24740"
                            className="symbol-2_24740 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_24741" className="frame-2_24741">
                                    <OrganizeCalendar
                                        id="2_24742"
                                        className="instance-2_24742"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24743" className="frame-2_24743">
                                <p
                                    id="2_24744"
                                    className="paragraph-2_24744 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24745" className="frame-2_24745">
                                    {counter && (
                                        <Counter
                                            id="2_24746"
                                            className="instance-2_24746"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24747"
                            className="symbol-2_24747 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_24748" className="frame-2_24748">
                                    <OrganizeCalendar
                                        id="2_24749"
                                        className="instance-2_24749"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24750" className="frame-2_24750">
                                <p
                                    id="2_24751"
                                    className="paragraph-2_24751 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24752" className="frame-2_24752">
                                    {counter && (
                                        <Counter
                                            id="2_24753"
                                            className="instance-2_24753"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24754"
                            className="symbol-2_24754 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_24755" className="frame-2_24755">
                                    <OrganizeCalendar0
                                        id="2_24756"
                                        className="instance-2_24756"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24757" className="frame-2_24757">
                                <p
                                    id="2_24758"
                                    className="paragraph-2_24758 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24759" className="frame-2_24759">
                                    <Counter
                                        id="2_24760"
                                        className="instance-2_24760"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24761"
                            className="symbol-2_24761 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_24762" className="frame-2_24762">
                                    <OrganizeCalendar0
                                        id="2_24763"
                                        className="instance-2_24763"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24764" className="frame-2_24764">
                                <p
                                    id="2_24765"
                                    className="paragraph-2_24765 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24766" className="frame-2_24766">
                                    <Counter
                                        id="2_24767"
                                        className="instance-2_24767"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24768"
                            className="symbol-2_24768 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_24769" className="frame-2_24769">
                                    <OrganizeCalendar0
                                        id="2_24770"
                                        className="instance-2_24770"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24771" className="frame-2_24771">
                                <p
                                    id="2_24772"
                                    className="paragraph-2_24772 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24773" className="frame-2_24773">
                                    <Counter
                                        id="2_24774"
                                        className="instance-2_24774"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24775"
                            className="symbol-2_24775 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_24776" className="frame-2_24776">
                                    <OrganizeCalendar0
                                        id="2_24777"
                                        className="instance-2_24777"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24778" className="frame-2_24778">
                                <p
                                    id="2_24779"
                                    className="paragraph-2_24779 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24780" className="frame-2_24780">
                                    <Counter
                                        id="2_24781"
                                        className="instance-2_24781"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_24782"
                            className="symbol-2_24782 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_24783" className="frame-2_24783">
                                    <OrganizeCalendar
                                        id="2_24784"
                                        className="instance-2_24784"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24785" className="frame-2_24785">
                                <p
                                    id="2_24786"
                                    className="paragraph-2_24786 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24787" className="frame-2_24787">
                                    {counter && (
                                        <Counter
                                            id="2_24788"
                                            className="instance-2_24788"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_24789"
                            className="symbol-2_24789 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_24790" className="frame-2_24790">
                                    <OrganizeCalendar
                                        id="2_24791"
                                        className="instance-2_24791"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24792" className="frame-2_24792">
                                <p
                                    id="2_24793"
                                    className="paragraph-2_24793 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24794" className="frame-2_24794">
                                    {counter && (
                                        <Counter
                                            id="2_24795"
                                            className="instance-2_24795"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_24796"
                            className="symbol-2_24796 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_24797" className="frame-2_24797">
                                    <OrganizeCalendar0
                                        id="2_24798"
                                        className="instance-2_24798"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24799" className="frame-2_24799">
                                <p
                                    id="2_24800"
                                    className="paragraph-2_24800 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24801" className="frame-2_24801">
                                    <Counter
                                        id="2_24802"
                                        className="instance-2_24802"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_24803"
                            className="symbol-2_24803 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_24804" className="frame-2_24804">
                                    <OrganizeCalendar0
                                        id="2_24805"
                                        className="instance-2_24805"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24806" className="frame-2_24806">
                                <p
                                    id="2_24807"
                                    className="paragraph-2_24807 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24808" className="frame-2_24808">
                                    <Counter
                                        id="2_24809"
                                        className="instance-2_24809"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24810"
                            className="symbol-2_24810 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24811" className="frame-2_24811">
                                    <OrganizeCalendar
                                        id="2_24812"
                                        className="instance-2_24812"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24813" className="frame-2_24813">
                                <p
                                    id="2_24814"
                                    className="paragraph-2_24814 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24815" className="frame-2_24815">
                                    {counter && (
                                        <Counter
                                            id="2_24816"
                                            className="instance-2_24816"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24817"
                            className="symbol-2_24817 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24818" className="frame-2_24818">
                                    <OrganizeCalendar
                                        id="2_24819"
                                        className="instance-2_24819"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24820" className="frame-2_24820">
                                <p
                                    id="2_24821"
                                    className="paragraph-2_24821 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24822" className="frame-2_24822">
                                    {counter && (
                                        <Counter
                                            id="2_24823"
                                            className="instance-2_24823"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24824"
                            className="symbol-2_24824 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24825" className="frame-2_24825">
                                    <OrganizeCalendar0
                                        id="2_24826"
                                        className="instance-2_24826"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24827" className="frame-2_24827">
                                <p
                                    id="2_24828"
                                    className="paragraph-2_24828 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24829" className="frame-2_24829">
                                    {counter && (
                                        <Counter
                                            id="2_24830"
                                            className="instance-2_24830"
                                            size={"s (20)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24831"
                            className="symbol-2_24831 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24832" className="frame-2_24832">
                                    <OrganizeCalendar0
                                        id="2_24833"
                                        className="instance-2_24833"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24834" className="frame-2_24834">
                                <p
                                    id="2_24835"
                                    className="paragraph-2_24835 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24836" className="frame-2_24836">
                                    <Counter
                                        id="2_24837"
                                        className="instance-2_24837"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24838"
                            className="symbol-2_24838 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24839" className="frame-2_24839">
                                    <OrganizeCalendar0
                                        id="2_24840"
                                        className="instance-2_24840"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24841" className="frame-2_24841">
                                <p
                                    id="2_24842"
                                    className="paragraph-2_24842 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24843" className="frame-2_24843">
                                    <Counter
                                        id="2_24844"
                                        className="instance-2_24844"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "square" && (
                        <div
                            id="2_24845"
                            className="symbol-2_24845 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24846" className="frame-2_24846">
                                    <OrganizeCalendar0
                                        id="2_24847"
                                        className="instance-2_24847"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24848" className="frame-2_24848">
                                <p
                                    id="2_24849"
                                    className="paragraph-2_24849 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24850" className="frame-2_24850">
                                    <Counter
                                        id="2_24851"
                                        className="instance-2_24851"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_24852"
                            className="symbol-2_24852 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24853" className="frame-2_24853">
                                    <OrganizeCalendar0
                                        id="2_24854"
                                        className="instance-2_24854"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24855" className="frame-2_24855">
                                <p
                                    id="2_24856"
                                    className="paragraph-2_24856 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24857" className="frame-2_24857">
                                    <Counter
                                        id="2_24858"
                                        className="instance-2_24858"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_24859"
                            className="symbol-2_24859 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24860" className="frame-2_24860">
                                    <OrganizeCalendar0
                                        id="2_24861"
                                        className="instance-2_24861"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24862" className="frame-2_24862">
                                <p
                                    id="2_24863"
                                    className="paragraph-2_24863 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24864" className="frame-2_24864">
                                    <Counter
                                        id="2_24865"
                                        className="instance-2_24865"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_24866"
                            className="symbol-2_24866 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24867" className="frame-2_24867">
                                    <OrganizeCalendar0
                                        id="2_24868"
                                        className="instance-2_24868"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24869" className="frame-2_24869">
                                <p
                                    id="2_24870"
                                    className="paragraph-2_24870 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24871" className="frame-2_24871">
                                    <Counter
                                        id="2_24872"
                                        className="instance-2_24872"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_24873"
                            className="symbol-2_24873 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24874" className="frame-2_24874">
                                    <OrganizeCalendar0
                                        id="2_24875"
                                        className="instance-2_24875"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24876" className="frame-2_24876">
                                <p
                                    id="2_24877"
                                    className="paragraph-2_24877 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24878" className="frame-2_24878">
                                    <Counter
                                        id="2_24879"
                                        className="instance-2_24879"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_24880"
                            className="symbol-2_24880 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24881" className="frame-2_24881">
                                    <OrganizeCalendar
                                        id="2_24882"
                                        className="instance-2_24882"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24883" className="frame-2_24883">
                                <p
                                    id="2_24884"
                                    className="paragraph-2_24884 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24885" className="frame-2_24885">
                                    {counter && (
                                        <Counter
                                            id="2_24886"
                                            className="instance-2_24886"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_24887"
                            className="symbol-2_24887 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24888" className="frame-2_24888">
                                    <OrganizeCalendar
                                        id="2_24889"
                                        className="instance-2_24889"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24890" className="frame-2_24890">
                                <p
                                    id="2_24891"
                                    className="paragraph-2_24891 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24892" className="frame-2_24892">
                                    {counter && (
                                        <Counter
                                            id="2_24893"
                                            className="instance-2_24893"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_24894"
                            className="symbol-2_24894 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24895" className="frame-2_24895">
                                    <OrganizeCalendar
                                        id="2_24896"
                                        className="instance-2_24896"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24897" className="frame-2_24897">
                                <p
                                    id="2_24898"
                                    className="paragraph-2_24898 fill-lightfgsoft-2_24602-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24899" className="frame-2_24899">
                                    {counter && (
                                        <Counter
                                            id="2_24900"
                                            className="instance-2_24900"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_24901"
                            className="symbol-2_24901 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24902" className="frame-2_24902">
                                    <OrganizeCalendar
                                        id="2_24903"
                                        className="instance-2_24903"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24904" className="frame-2_24904">
                                <p
                                    id="2_24905"
                                    className="paragraph-2_24905 fill-lightfgsoft-2_24602-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24906" className="frame-2_24906">
                                    {counter && (
                                        <Counter
                                            id="2_24907"
                                            className="instance-2_24907"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_24908"
                            className="symbol-2_24908 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24909" className="frame-2_24909">
                                    <OrganizeCalendar0
                                        id="2_24910"
                                        className="instance-2_24910"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24911" className="frame-2_24911">
                                <p
                                    id="2_24912"
                                    className="paragraph-2_24912 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24913" className="frame-2_24913">
                                    <Counter
                                        id="2_24914"
                                        className="instance-2_24914"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_24915"
                            className="symbol-2_24915 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24916" className="frame-2_24916">
                                    <OrganizeCalendar0
                                        id="2_24917"
                                        className="instance-2_24917"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24918" className="frame-2_24918">
                                <p
                                    id="2_24919"
                                    className="paragraph-2_24919 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24920" className="frame-2_24920">
                                    <Counter
                                        id="2_24921"
                                        className="instance-2_24921"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_24922"
                            className="symbol-2_24922 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24923" className="frame-2_24923">
                                    <OrganizeCalendar0
                                        id="2_24924"
                                        className="instance-2_24924"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24925" className="frame-2_24925">
                                <p
                                    id="2_24926"
                                    className="paragraph-2_24926 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24927" className="frame-2_24927">
                                    <Counter
                                        id="2_24928"
                                        className="instance-2_24928"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_24929"
                            className="symbol-2_24929 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_24930" className="frame-2_24930">
                                    <OrganizeCalendar0
                                        id="2_24931"
                                        className="instance-2_24931"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24932" className="frame-2_24932">
                                <p
                                    id="2_24933"
                                    className="paragraph-2_24933 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24934" className="frame-2_24934">
                                    <Counter
                                        id="2_24935"
                                        className="instance-2_24935"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24936"
                            className="symbol-2_24936 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {iconLeft && (
                                <div id="2_24937" className="frame-2_24937">
                                    <OrganizeCalendar
                                        id="2_24938"
                                        className="instance-2_24938"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24939" className="frame-2_24939">
                                <p
                                    id="2_24940"
                                    className="paragraph-2_24940 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24941" className="frame-2_24941">
                                    <Counter
                                        id="2_24942"
                                        className="instance-2_24942"
                                        size={"m (24)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24943"
                            className="symbol-2_24943 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {iconLeft && (
                                <div id="2_24944" className="frame-2_24944">
                                    <OrganizeCalendar0
                                        id="2_24945"
                                        className="instance-2_24945"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24946" className="frame-2_24946">
                                <p
                                    id="2_24947"
                                    className="paragraph-2_24947 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24948" className="frame-2_24948">
                                    <Counter
                                        id="2_24949"
                                        className="instance-2_24949"
                                        size={"s (20)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24950"
                            className="symbol-2_24950 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {iconLeft && (
                                <div id="2_24951" className="frame-2_24951">
                                    <OrganizeCalendar0
                                        id="2_24952"
                                        className="instance-2_24952"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24953" className="frame-2_24953">
                                <p
                                    id="2_24954"
                                    className="paragraph-2_24954 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24955" className="frame-2_24955">
                                    <Counter
                                        id="2_24956"
                                        className="instance-2_24956"
                                        size={"s (20)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_24957"
                            className="symbol-2_24957 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {iconLeft && (
                                <div id="2_24958" className="frame-2_24958">
                                    <OrganizeCalendar
                                        id="2_24959"
                                        className="instance-2_24959"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24960" className="frame-2_24960">
                                <p
                                    id="2_24961"
                                    className="paragraph-2_24961 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24962" className="frame-2_24962">
                                    <Counter
                                        id="2_24963"
                                        className="instance-2_24963"
                                        size={"m (24)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_24964"
                            className="symbol-2_24964 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {iconLeft && (
                                <div id="2_24965" className="frame-2_24965">
                                    <OrganizeCalendar0
                                        id="2_24966"
                                        className="instance-2_24966"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24967" className="frame-2_24967">
                                <p
                                    id="2_24968"
                                    className="paragraph-2_24968 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24969" className="frame-2_24969">
                                    <Counter
                                        id="2_24970"
                                        className="instance-2_24970"
                                        size={"s (20)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24971"
                            className="symbol-2_24971 fill-lightneutralhover-2_23168"
                        >
                            {iconLeft && (
                                <div id="2_24972" className="frame-2_24972">
                                    <OrganizeCalendar
                                        id="2_24973"
                                        className="instance-2_24973"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24974" className="frame-2_24974">
                                <p
                                    id="2_24975"
                                    className="paragraph-2_24975 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24976" className="frame-2_24976">
                                    {counter && (
                                        <Counter
                                            id="2_24977"
                                            className="instance-2_24977"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24978"
                            className="symbol-2_24978 fill-lightneutralhover-2_23168"
                        >
                            {iconLeft && (
                                <div id="2_24979" className="frame-2_24979">
                                    <OrganizeCalendar0
                                        id="2_24980"
                                        className="instance-2_24980"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24981" className="frame-2_24981">
                                <p
                                    id="2_24982"
                                    className="paragraph-2_24982 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24983" className="frame-2_24983">
                                    <Counter
                                        id="2_24984"
                                        className="instance-2_24984"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "square" && (
                        <div
                            id="2_24985"
                            className="symbol-2_24985 fill-lightneutralhover-2_23168"
                        >
                            {iconLeft && (
                                <div id="2_24986" className="frame-2_24986">
                                    <OrganizeCalendar0
                                        id="2_24987"
                                        className="instance-2_24987"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_24988" className="frame-2_24988">
                                <p
                                    id="2_24989"
                                    className="paragraph-2_24989 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24990" className="frame-2_24990">
                                    <Counter
                                        id="2_24991"
                                        className="instance-2_24991"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_24992"
                            className="symbol-2_24992 fill-lightneutralhover-2_23168"
                        >
                            {iconLeft && (
                                <div id="2_24993" className="frame-2_24993">
                                    <OrganizeCalendar
                                        id="2_24994"
                                        className="instance-2_24994"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_24995" className="frame-2_24995">
                                <p
                                    id="2_24996"
                                    className="paragraph-2_24996 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_24997" className="frame-2_24997">
                                    {counter && (
                                        <Counter
                                            id="2_24998"
                                            className="instance-2_24998"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_24999"
                            className="symbol-2_24999 fill-lightneutralhover-2_23168"
                        >
                            {iconLeft && (
                                <div id="2_25000" className="frame-2_25000">
                                    <OrganizeCalendar0
                                        id="2_25001"
                                        className="instance-2_25001"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25002" className="frame-2_25002">
                                <p
                                    id="2_25003"
                                    className="paragraph-2_25003 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25004" className="frame-2_25004">
                                    <Counter
                                        id="2_25005"
                                        className="instance-2_25005"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_25006"
                            className="symbol-2_25006 fill-lightinteractiveaccent-2_2283"
                        >
                            {iconLeft && (
                                <div id="2_25007" className="frame-2_25007">
                                    <OrganizeCalendar0
                                        id="2_25008"
                                        className="instance-2_25008"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25009" className="frame-2_25009">
                                <p
                                    id="2_25010"
                                    className="paragraph-2_25010 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25011" className="frame-2_25011">
                                    <Counter
                                        id="2_25012"
                                        className="instance-2_25012"
                                        size={"s (20)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_25013"
                            className="symbol-2_25013 fill-lightneutraldefault-2_23155"
                        >
                            {iconLeft && (
                                <div id="2_25014" className="frame-2_25014">
                                    <OrganizeCalendar0
                                        id="2_25015"
                                        className="instance-2_25015"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25016" className="frame-2_25016">
                                <p
                                    id="2_25017"
                                    className="paragraph-2_25017 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25018" className="frame-2_25018">
                                    <Counter
                                        id="2_25019"
                                        className="instance-2_25019"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_25020"
                            className="symbol-2_25020 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_25021" className="frame-2_25021">
                                    <OrganizeCalendar0
                                        id="2_25022"
                                        className="instance-2_25022"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25023" className="frame-2_25023">
                                <p
                                    id="2_25024"
                                    className="paragraph-2_25024 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25025" className="frame-2_25025">
                                    <Counter
                                        id="2_25026"
                                        className="instance-2_25026"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_25027"
                            className="symbol-2_25027 fill-lightbgsurface4-2_23165"
                        >
                            {iconLeft && (
                                <div id="2_25028" className="frame-2_25028">
                                    <OrganizeCalendar0
                                        id="2_25029"
                                        className="instance-2_25029"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25030" className="frame-2_25030">
                                <p
                                    id="2_25031"
                                    className="paragraph-2_25031 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25032" className="frame-2_25032">
                                    <Counter
                                        id="2_25033"
                                        className="instance-2_25033"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_25034"
                            className="symbol-2_25034 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25035" className="frame-2_25035">
                                    <OrganizeCalendar0
                                        id="2_25036"
                                        className="instance-2_25036"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25037" className="frame-2_25037">
                                <p
                                    id="2_25038"
                                    className="paragraph-2_25038 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25039" className="frame-2_25039">
                                    <Counter
                                        id="2_25040"
                                        className="instance-2_25040"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "default" &&
                    _style === "round" && (
                        <div
                            id="2_25041"
                            className="symbol-2_25041 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25042" className="frame-2_25042">
                                    <OrganizeCalendar0
                                        id="2_25043"
                                        className="instance-2_25043"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25044" className="frame-2_25044">
                                <p
                                    id="2_25045"
                                    className="paragraph-2_25045 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25046" className="frame-2_25046">
                                    <Counter
                                        id="2_25047"
                                        className="instance-2_25047"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_25048"
                            className="symbol-2_25048 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25049" className="frame-2_25049">
                                    <OrganizeCalendar0
                                        id="2_25050"
                                        className="instance-2_25050"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25051" className="frame-2_25051">
                                <p
                                    id="2_25052"
                                    className="paragraph-2_25052 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25053" className="frame-2_25053">
                                    <Counter
                                        id="2_25054"
                                        className="instance-2_25054"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_25055"
                            className="symbol-2_25055 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25056" className="frame-2_25056">
                                    <OrganizeCalendar0
                                        id="2_25057"
                                        className="instance-2_25057"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25058" className="frame-2_25058">
                                <p
                                    id="2_25059"
                                    className="paragraph-2_25059 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25060" className="frame-2_25060">
                                    <Counter
                                        id="2_25061"
                                        className="instance-2_25061"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_25062"
                            className="symbol-2_25062 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {iconLeft && (
                                <div id="2_25063" className="frame-2_25063">
                                    <OrganizeCalendar0
                                        id="2_25064"
                                        className="instance-2_25064"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25065" className="frame-2_25065">
                                <p
                                    id="2_25066"
                                    className="paragraph-2_25066 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25067" className="frame-2_25067">
                                    <Counter
                                        id="2_25068"
                                        className="instance-2_25068"
                                        size={"s (20)"}
                                        variant={"contrast"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "pressed" &&
                    _style === "round" && (
                        <div
                            id="2_25069"
                            className="symbol-2_25069 fill-lightneutralhover-2_23168"
                        >
                            {iconLeft && (
                                <div id="2_25070" className="frame-2_25070">
                                    <OrganizeCalendar0
                                        id="2_25071"
                                        className="instance-2_25071"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25072" className="frame-2_25072">
                                <p
                                    id="2_25073"
                                    className="paragraph-2_25073 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25074" className="frame-2_25074">
                                    <Counter
                                        id="2_25075"
                                        className="instance-2_25075"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_25076"
                            className="symbol-2_25076 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25077" className="frame-2_25077">
                                    <OrganizeCalendar
                                        id="2_25078"
                                        className="instance-2_25078"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_25079" className="frame-2_25079">
                                <p
                                    id="2_25080"
                                    className="paragraph-2_25080 fill-lightfgsoft-2_24602-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25081" className="frame-2_25081">
                                    {counter && (
                                        <Counter
                                            id="2_25082"
                                            className="instance-2_25082"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "yes" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_25083"
                            className="symbol-2_25083 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25084" className="frame-2_25084">
                                    <OrganizeCalendar
                                        id="2_25085"
                                        className="instance-2_25085"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_25086" className="frame-2_25086">
                                <p
                                    id="2_25087"
                                    className="paragraph-2_25087 fill-lightfgsoft-2_24602-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25088" className="frame-2_25088">
                                    {counter && (
                                        <Counter
                                            id="2_25089"
                                            className="instance-2_25089"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_25090"
                            className="symbol-2_25090 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25091" className="frame-2_25091">
                                    <OrganizeCalendar0
                                        id="2_25092"
                                        className="instance-2_25092"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25093" className="frame-2_25093">
                                <p
                                    id="2_25094"
                                    className="paragraph-2_25094 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25095" className="frame-2_25095">
                                    <Counter
                                        id="2_25096"
                                        className="instance-2_25096"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_25097"
                            className="symbol-2_25097 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25098" className="frame-2_25098">
                                    <OrganizeCalendar
                                        id="2_25099"
                                        className="instance-2_25099"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_25100" className="frame-2_25100">
                                <p
                                    id="2_25101"
                                    className="paragraph-2_25101 fill-lightfgsoft-2_24602-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25102" className="frame-2_25102">
                                    {counter && (
                                        <Counter
                                            id="2_25103"
                                            className="instance-2_25103"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_25104"
                            className="symbol-2_25104 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25105" className="frame-2_25105">
                                    <OrganizeCalendar
                                        id="2_25106"
                                        className="instance-2_25106"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_25107" className="frame-2_25107">
                                <p
                                    id="2_25108"
                                    className="paragraph-2_25108 fill-lightfgsoft-2_24602-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25109" className="frame-2_25109">
                                    {counter && (
                                        <Counter
                                            id="2_25110"
                                            className="instance-2_25110"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_25111"
                            className="symbol-2_25111 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25112" className="frame-2_25112">
                                    <OrganizeCalendar
                                        id="2_25113"
                                        className="instance-2_25113"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_25114" className="frame-2_25114">
                                <p
                                    id="2_25115"
                                    className="paragraph-2_25115 fill-lightfgsoft-2_24602-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25116" className="frame-2_25116">
                                    {counter && (
                                        <Counter
                                            id="2_25117"
                                            className="instance-2_25117"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_25118"
                            className="symbol-2_25118 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25119" className="frame-2_25119">
                                    <OrganizeCalendar0
                                        id="2_25120"
                                        className="instance-2_25120"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25121" className="frame-2_25121">
                                <p
                                    id="2_25122"
                                    className="paragraph-2_25122 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25123" className="frame-2_25123">
                                    <Counter
                                        id="2_25124"
                                        className="instance-2_25124"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_25125"
                            className="symbol-2_25125 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25126" className="frame-2_25126">
                                    <OrganizeCalendar0
                                        id="2_25127"
                                        className="instance-2_25127"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25128" className="frame-2_25128">
                                <p
                                    id="2_25129"
                                    className="paragraph-2_25129 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25130" className="frame-2_25130">
                                    <Counter
                                        id="2_25131"
                                        className="instance-2_25131"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_25132"
                            className="symbol-2_25132 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25133" className="frame-2_25133">
                                    <OrganizeCalendar0
                                        id="2_25134"
                                        className="instance-2_25134"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25135" className="frame-2_25135">
                                <p
                                    id="2_25136"
                                    className="paragraph-2_25136 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25137" className="frame-2_25137">
                                    <Counter
                                        id="2_25138"
                                        className="instance-2_25138"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "neutral" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_25139"
                            className="symbol-2_25139 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25140" className="frame-2_25140">
                                    <OrganizeCalendar0
                                        id="2_25141"
                                        className="instance-2_25141"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25142" className="frame-2_25142">
                                <p
                                    id="2_25143"
                                    className="paragraph-2_25143 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25144" className="frame-2_25144">
                                    <Counter
                                        id="2_25145"
                                        className="instance-2_25145"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_25146"
                            className="symbol-2_25146 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25147" className="frame-2_25147">
                                    <OrganizeCalendar0
                                        id="2_25148"
                                        className="instance-2_25148"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25149" className="frame-2_25149">
                                <p
                                    id="2_25150"
                                    className="paragraph-2_25150 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25151" className="frame-2_25151">
                                    <Counter
                                        id="2_25152"
                                        className="instance-2_25152"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_25153"
                            className="symbol-2_25153 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25154" className="frame-2_25154">
                                    <OrganizeCalendar0
                                        id="2_25155"
                                        className="instance-2_25155"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25156" className="frame-2_25156">
                                <p
                                    id="2_25157"
                                    className="paragraph-2_25157 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25158" className="frame-2_25158">
                                    <Counter
                                        id="2_25159"
                                        className="instance-2_25159"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "square" && (
                        <div
                            id="2_25160"
                            className="symbol-2_25160 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25161" className="frame-2_25161">
                                    <OrganizeCalendar0
                                        id="2_25162"
                                        className="instance-2_25162"
                                    ></OrganizeCalendar0>
                                </div>
                            )}
                            <div id="2_25163" className="frame-2_25163">
                                <p
                                    id="2_25164"
                                    className="paragraph-2_25164 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25165" className="frame-2_25165">
                                    <Counter
                                        id="2_25166"
                                        className="instance-2_25166"
                                        size={"s (20)"}
                                        variant={"tertiary"}
                                    ></Counter>
                                </div>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    selected === "no" &&
                    type === "accent" &&
                    state === "disabled" &&
                    _style === "round" && (
                        <div
                            id="2_25167"
                            className="symbol-2_25167 fill-lightbgsurface3-2_22053"
                        >
                            {iconLeft && (
                                <div id="2_25168" className="frame-2_25168">
                                    <OrganizeCalendar
                                        id="2_25169"
                                        className="instance-2_25169"
                                    ></OrganizeCalendar>
                                </div>
                            )}
                            <div id="2_25170" className="frame-2_25170">
                                <p
                                    id="2_25171"
                                    className="paragraph-2_25171 fill-lightfgsoft-2_24602-paragraph text-mobilebody-m-2_2287"
                                >
                                    {Text ?? "Label"}
                                </p>
                            </div>
                            {counter && (
                                <div id="2_25172" className="frame-2_25172">
                                    {counter && (
                                        <Counter
                                            id="2_25173"
                                            className="instance-2_25173"
                                            size={"m (24)"}
                                            variant={"tertiary"}
                                        ></Counter>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Chips;
