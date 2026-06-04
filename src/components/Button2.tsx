import ActionAdd4 from "@/components/actionadd4";
import Counter1 from "@/components/counter1";
import NavigationChevronright5 from "@/components/navigationchevronright5";
import ActionAdd5 from "@/components/actionadd5";
import NavigationChevronright4 from "@/components/navigationchevronright4";
import ActionAdd6 from "@/components/actionadd6";
import NavigationChevronright2 from "@/components/navigationchevronright2";
import ActionAdd3 from "@/components/actionadd3";
import NavigationChevronright3 from "@/components/navigationchevronright3";
import "@/styles/Button2.css";
interface button2Props {
    text?: string;
    counter?: boolean;
    leftIcon?: boolean;
    lefticonvariant28?: string;
    leftIconvariant24?: string;
    leftIconvariant20?: string;
    leftIconvariant16?: string;
    righticon?: boolean;
    righticonvariant28?: string;
    rightIconvariant24?: string;
    rightIconvariant20?: string;
    rightIconvariant16?: string;
    size?: string;
    variant?: string;
    state?: string;
    colorScheme?: string;
    id?: string;
    className?: string;
}
const Button2 = (props: button2Props) => {
    const {
        text = "Label",
        counter = false,
        leftIcon = true,
        lefticonvariant28 = "Component_3491_98402",
        leftIconvariant24 = "Component_3491_95527",
        leftIconvariant20 = "Component_3491_95023",
        leftIconvariant16 = "Component_3491_94714",
        righticon = false,
        righticonvariant28 = "Component_3491_97779",
        rightIconvariant24 = "Component_3491_96010",
        rightIconvariant20 = "Component_3491_98835",
        rightIconvariant16 = "Component_3491_99933",
        size,
        variant,
        state,
        colorScheme,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_57354 ${className}`} id={id}>
            <div id="2_57354" className="symbol-2_57354">
                {size === "l" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57355"
                            className="symbol-2_57355 fill-lightinteractiveaccent-2_2283"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57356"
                                    className="instance-2_57356"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57357"
                                className="paragraph-2_57357 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57358"
                                    className="instance-2_57358"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57359"
                                    className="instance-2_57359"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57360"
                            className="symbol-2_57360 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57361"
                                    className="instance-2_57361"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57362"
                                className="paragraph-2_57362 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57363"
                                    className="instance-2_57363"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57364"
                                    className="instance-2_57364"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57365"
                            className="symbol-2_57365 fill-lightinteractive-errordefault-2_2298"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57366"
                                    className="instance-2_57366"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57367"
                                className="paragraph-2_57367 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57368"
                                    className="instance-2_57368"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57369"
                                    className="instance-2_57369"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57370"
                            className="symbol-2_57370 fill-lightinteractive-errorhover-2_23158"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57371"
                                    className="instance-2_57371"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57372"
                                className="paragraph-2_57372 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57373"
                                    className="instance-2_57373"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57374"
                                    className="instance-2_57374"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57375"
                            className="symbol-2_57375 fill-lightneutraldefault-2_23155"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57376"
                                    className="instance-2_57376"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57377"
                                className="paragraph-2_57377 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57378"
                                    className="instance-2_57378"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57379"
                                    className="instance-2_57379"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57380"
                            className="symbol-2_57380 fill-lightneutralhover-2_23168"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57381"
                                    className="instance-2_57381"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57382"
                                className="paragraph-2_57382 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57383"
                                    className="instance-2_57383"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57384"
                                    className="instance-2_57384"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57385"
                            className="symbol-2_57385 fill-lightneutralmuted-2_22061"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57386"
                                    className="instance-2_57386"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57387"
                                className="paragraph-2_57387 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57388"
                                    className="instance-2_57388"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57389"
                                    className="instance-2_57389"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57390"
                            className="symbol-2_57390 fill-lighterrormuted-2_23156"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57391"
                                    className="instance-2_57391"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57392"
                                className="paragraph-2_57392 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57393"
                                    className="instance-2_57393"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57394"
                                    className="instance-2_57394"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57395"
                            className="symbol-2_57395 fill-lightaccentmuted-2_22057"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57396"
                                    className="instance-2_57396"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57397"
                                className="paragraph-2_57397 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57398"
                                    className="instance-2_57398"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57399"
                                    className="instance-2_57399"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57400"
                            className="symbol-2_57400 fill-lightaccentcontainer-default-2_55464"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57401"
                                    className="instance-2_57401"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57402"
                                className="paragraph-2_57402 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57403"
                                    className="instance-2_57403"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57404"
                                    className="instance-2_57404"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57405"
                            className="symbol-2_57405 fill-lightaccentcontainer-hover-2_23160"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57406"
                                    className="instance-2_57406"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57407"
                                className="paragraph-2_57407 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57408"
                                    className="instance-2_57408"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57409"
                                    className="instance-2_57409"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57410"
                            className="symbol-2_57410 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57411"
                                    className="instance-2_57411"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57412"
                                className="paragraph-2_57412 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57413"
                                    className="instance-2_57413"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57414"
                                    className="instance-2_57414"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57415"
                            className="symbol-2_57415 fill-lighterrorcontainer-hover-2_23151"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57416"
                                    className="instance-2_57416"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57417"
                                className="paragraph-2_57417 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57418"
                                    className="instance-2_57418"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57419"
                                    className="instance-2_57419"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57420"
                            className="symbol-2_57420 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57421"
                                    className="instance-2_57421"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57422"
                                className="paragraph-2_57422 fill-lightfgdefault-2_55465-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57423"
                                    className="instance-2_57423"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57424"
                                    className="instance-2_57424"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57425"
                            className="symbol-2_57425 fill-lightbgsurface4-2_23165"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57426"
                                    className="instance-2_57426"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57427"
                                className="paragraph-2_57427 fill-lightfgdefault-2_55465-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57428"
                                    className="instance-2_57428"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57429"
                                    className="instance-2_57429"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57430"
                            className="symbol-2_57430 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57431"
                                    className="instance-2_57431"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57432"
                                className="paragraph-2_57432 fill-lightfgdefault-2_55465-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57433"
                                    className="instance-2_57433"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57434"
                                    className="instance-2_57434"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57435"
                            className="symbol-2_57435 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57436"
                                    className="instance-2_57436"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57437"
                                className="paragraph-2_57437 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57438"
                                    className="instance-2_57438"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57439"
                                    className="instance-2_57439"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57440"
                            className="symbol-2_57440 fill-lightaccentcontainer-default-2_55464"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57441"
                                    className="instance-2_57441"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57442"
                                className="paragraph-2_57442 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57443"
                                    className="instance-2_57443"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57444"
                                    className="instance-2_57444"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_57445" className="symbol-2_57445">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57446"
                                    className="instance-2_57446"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57447"
                                className="paragraph-2_57447 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57448"
                                    className="instance-2_57448"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57449"
                                    className="instance-2_57449"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_57450" className="symbol-2_57450">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57451"
                                    className="instance-2_57451"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57452"
                                className="paragraph-2_57452 fill-lightaccenthover-2_23149-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57453"
                                    className="instance-2_57453"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57454"
                                    className="instance-2_57454"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_57455" className="symbol-2_57455">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57456"
                                    className="instance-2_57456"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57457"
                                className="paragraph-2_57457 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57458"
                                    className="instance-2_57458"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57459"
                                    className="instance-2_57459"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_57460" className="symbol-2_57460">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57461"
                                    className="instance-2_57461"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57462"
                                className="paragraph-2_57462 fill-lighterrorhover-2_23161-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57463"
                                    className="instance-2_57463"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57464"
                                    className="instance-2_57464"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_57465" className="symbol-2_57465">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57466"
                                    className="instance-2_57466"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57467"
                                className="paragraph-2_57467 fill-lightfgdefault-2_55465-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57468"
                                    className="instance-2_57468"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57469"
                                    className="instance-2_57469"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_57470" className="symbol-2_57470">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57471"
                                    className="instance-2_57471"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57472"
                                className="paragraph-2_57472 fill-lightfgsoft-2_22056-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57473"
                                    className="instance-2_57473"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57474"
                                    className="instance-2_57474"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_57475" className="symbol-2_57475">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57476"
                                    className="instance-2_57476"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57477"
                                className="paragraph-2_57477 fill-lightfgdefault-2_55465-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57478"
                                    className="instance-2_57478"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57479"
                                    className="instance-2_57479"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_57480" className="symbol-2_57480">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57481"
                                    className="instance-2_57481"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57482"
                                className="paragraph-2_57482 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57483"
                                    className="instance-2_57483"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57484"
                                    className="instance-2_57484"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_57485" className="symbol-2_57485">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_57486"
                                    className="instance-2_57486"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_57487"
                                className="paragraph-2_57487 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57488"
                                    className="instance-2_57488"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_57489"
                                    className="instance-2_57489"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_57490" className="stroke-wrapper-2_57490">
                            <div className="symbol-2_57490">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_57491"
                                        className="instance-2_57491"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_57492"
                                    className="paragraph-2_57492 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57493"
                                        className="instance-2_57493"
                                        size={"m (24)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_57494"
                                        className="instance-2_57494"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_57490 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_57495" className="stroke-wrapper-2_57495">
                            <div className="symbol-2_57495">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_57496"
                                        className="instance-2_57496"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_57497"
                                    className="paragraph-2_57497 fill-lightaccenthover-2_23149-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57498"
                                        className="instance-2_57498"
                                        size={"m (24)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_57499"
                                        className="instance-2_57499"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_57495 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_57500" className="stroke-wrapper-2_57500">
                            <div className="symbol-2_57500">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_57501"
                                        className="instance-2_57501"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_57502"
                                    className="paragraph-2_57502 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57503"
                                        className="instance-2_57503"
                                        size={"m (24)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_57504"
                                        className="instance-2_57504"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_57500 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_57505" className="stroke-wrapper-2_57505">
                            <div className="symbol-2_57505">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_57506"
                                        className="instance-2_57506"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_57507"
                                    className="paragraph-2_57507 fill-lighterrorhover-2_23161-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57508"
                                        className="instance-2_57508"
                                        size={"m (24)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_57509"
                                        className="instance-2_57509"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_57505 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_57510" className="stroke-wrapper-2_57510">
                            <div className="symbol-2_57510">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_57511"
                                        className="instance-2_57511"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_57512"
                                    className="paragraph-2_57512 fill-lightfgdefault-2_55465-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57513"
                                        className="instance-2_57513"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_57514"
                                        className="instance-2_57514"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_57510 stroke-lightbordersoft-2_24603"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_57515" className="stroke-wrapper-2_57515">
                            <div className="symbol-2_57515">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_57516"
                                        className="instance-2_57516"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_57517"
                                    className="paragraph-2_57517 fill-lightfgsoft-2_22056-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57518"
                                        className="instance-2_57518"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_57519"
                                        className="instance-2_57519"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_57515 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_57520" className="stroke-wrapper-2_57520">
                            <div className="symbol-2_57520">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_57521"
                                        className="instance-2_57521"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_57522"
                                    className="paragraph-2_57522 fill-lightfgdefault-2_55465-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57523"
                                        className="instance-2_57523"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_57524"
                                        className="instance-2_57524"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_57520 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_57525" className="stroke-wrapper-2_57525">
                            <div className="symbol-2_57525">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_57526"
                                        className="instance-2_57526"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_57527"
                                    className="paragraph-2_57527 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57528"
                                        className="instance-2_57528"
                                        size={"m (24)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_57529"
                                        className="instance-2_57529"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_57525 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_57530" className="stroke-wrapper-2_57530">
                            <div className="symbol-2_57530">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_57531"
                                        className="instance-2_57531"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_57532"
                                    className="paragraph-2_57532 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57533"
                                        className="instance-2_57533"
                                        size={"m (24)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_57534"
                                        className="instance-2_57534"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_57530 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57535"
                            className="symbol-2_57535 fill-lightinteractiveaccent-2_2283"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57536"
                                    className="instance-2_57536"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57537"
                                className="paragraph-2_57537 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57538"
                                    className="instance-2_57538"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57539"
                                    className="instance-2_57539"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57540"
                            className="symbol-2_57540 fill-lightinteractiveaccent-2_2283"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57541"
                                    className="instance-2_57541"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57542"
                                className="paragraph-2_57542 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57543"
                                    className="instance-2_57543"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57544"
                                    className="instance-2_57544"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57545"
                            className="symbol-2_57545 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57546"
                                    className="instance-2_57546"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57547"
                                className="paragraph-2_57547 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57548"
                                    className="instance-2_57548"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57549"
                                    className="instance-2_57549"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57550"
                            className="symbol-2_57550 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57551"
                                    className="instance-2_57551"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57552"
                                className="paragraph-2_57552 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57553"
                                    className="instance-2_57553"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57554"
                                    className="instance-2_57554"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57555"
                            className="symbol-2_57555 fill-lightinteractive-errordefault-2_2298"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57556"
                                    className="instance-2_57556"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57557"
                                className="paragraph-2_57557 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57558"
                                    className="instance-2_57558"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57559"
                                    className="instance-2_57559"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57560"
                            className="symbol-2_57560 fill-lightinteractive-errordefault-2_2298"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57561"
                                    className="instance-2_57561"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57562"
                                className="paragraph-2_57562 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57563"
                                    className="instance-2_57563"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57564"
                                    className="instance-2_57564"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57565"
                            className="symbol-2_57565 fill-lightinteractive-errorhover-2_23158"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57566"
                                    className="instance-2_57566"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57567"
                                className="paragraph-2_57567 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57568"
                                    className="instance-2_57568"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57569"
                                    className="instance-2_57569"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57570"
                            className="symbol-2_57570 fill-lightinteractive-errorhover-2_23158"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57571"
                                    className="instance-2_57571"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57572"
                                className="paragraph-2_57572 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57573"
                                    className="instance-2_57573"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57574"
                                    className="instance-2_57574"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57575"
                            className="symbol-2_57575 fill-lightneutraldefault-2_23155"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57576"
                                    className="instance-2_57576"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57577"
                                className="paragraph-2_57577 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57578"
                                    className="instance-2_57578"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57579"
                                    className="instance-2_57579"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57580"
                            className="symbol-2_57580 fill-lightneutraldefault-2_23155"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57581"
                                    className="instance-2_57581"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57582"
                                className="paragraph-2_57582 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57583"
                                    className="instance-2_57583"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57584"
                                    className="instance-2_57584"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57585"
                            className="symbol-2_57585 fill-lightneutralhover-2_23168"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57586"
                                    className="instance-2_57586"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57587"
                                className="paragraph-2_57587 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57588"
                                    className="instance-2_57588"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57589"
                                    className="instance-2_57589"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57590"
                            className="symbol-2_57590 fill-lightneutralhover-2_23168"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57591"
                                    className="instance-2_57591"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57592"
                                className="paragraph-2_57592 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57593"
                                    className="instance-2_57593"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57594"
                                    className="instance-2_57594"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57595"
                            className="symbol-2_57595 fill-lightneutralmuted-2_22061"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57596"
                                    className="instance-2_57596"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57597"
                                className="paragraph-2_57597 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57598"
                                    className="instance-2_57598"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57599"
                                    className="instance-2_57599"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57600"
                            className="symbol-2_57600 fill-lightneutralmuted-2_22061"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57601"
                                    className="instance-2_57601"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57602"
                                className="paragraph-2_57602 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57603"
                                    className="instance-2_57603"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57604"
                                    className="instance-2_57604"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57605"
                            className="symbol-2_57605 fill-lighterrormuted-2_23156"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57606"
                                    className="instance-2_57606"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57607"
                                className="paragraph-2_57607 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57608"
                                    className="instance-2_57608"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57609"
                                    className="instance-2_57609"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57610"
                            className="symbol-2_57610 fill-lighterrormuted-2_23156"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57611"
                                    className="instance-2_57611"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57612"
                                className="paragraph-2_57612 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57613"
                                    className="instance-2_57613"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57614"
                                    className="instance-2_57614"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57615"
                            className="symbol-2_57615 fill-lightaccentmuted-2_22057"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57616"
                                    className="instance-2_57616"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57617"
                                className="paragraph-2_57617 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57618"
                                    className="instance-2_57618"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57619"
                                    className="instance-2_57619"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57620"
                            className="symbol-2_57620 fill-lightaccentmuted-2_22057"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57621"
                                    className="instance-2_57621"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57622"
                                className="paragraph-2_57622 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57623"
                                    className="instance-2_57623"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57624"
                                    className="instance-2_57624"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57625"
                            className="symbol-2_57625 fill-lightaccentcontainer-default-2_55464"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57626"
                                    className="instance-2_57626"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57627"
                                className="paragraph-2_57627 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57628"
                                    className="instance-2_57628"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57629"
                                    className="instance-2_57629"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57630"
                            className="symbol-2_57630 fill-lightaccentcontainer-default-2_55464"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57631"
                                    className="instance-2_57631"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57632"
                                className="paragraph-2_57632 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57633"
                                    className="instance-2_57633"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57634"
                                    className="instance-2_57634"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57635"
                            className="symbol-2_57635 fill-lightaccentcontainer-hover-2_23160"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57636"
                                    className="instance-2_57636"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57637"
                                className="paragraph-2_57637 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57638"
                                    className="instance-2_57638"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57639"
                                    className="instance-2_57639"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57640"
                            className="symbol-2_57640 fill-lightaccentcontainer-hover-2_23160"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57641"
                                    className="instance-2_57641"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57642"
                                className="paragraph-2_57642 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57643"
                                    className="instance-2_57643"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57644"
                                    className="instance-2_57644"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57645"
                            className="symbol-2_57645 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57646"
                                    className="instance-2_57646"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57647"
                                className="paragraph-2_57647 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57648"
                                    className="instance-2_57648"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57649"
                                    className="instance-2_57649"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57650"
                            className="symbol-2_57650 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57651"
                                    className="instance-2_57651"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57652"
                                className="paragraph-2_57652 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57653"
                                    className="instance-2_57653"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57654"
                                    className="instance-2_57654"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57655"
                            className="symbol-2_57655 fill-lighterrorcontainer-hover-2_23151"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57656"
                                    className="instance-2_57656"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57657"
                                className="paragraph-2_57657 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57658"
                                    className="instance-2_57658"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57659"
                                    className="instance-2_57659"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57660"
                            className="symbol-2_57660 fill-lighterrorcontainer-hover-2_23151"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57661"
                                    className="instance-2_57661"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57662"
                                className="paragraph-2_57662 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57663"
                                    className="instance-2_57663"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57664"
                                    className="instance-2_57664"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57665"
                            className="symbol-2_57665 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57666"
                                    className="instance-2_57666"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57667"
                                className="paragraph-2_57667 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57668"
                                    className="instance-2_57668"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57669"
                                    className="instance-2_57669"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57670"
                            className="symbol-2_57670 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57671"
                                    className="instance-2_57671"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57672"
                                className="paragraph-2_57672 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57673"
                                    className="instance-2_57673"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57674"
                                    className="instance-2_57674"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57675"
                            className="symbol-2_57675 fill-lightbgsurface4-2_23165"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57676"
                                    className="instance-2_57676"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57677"
                                className="paragraph-2_57677 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57678"
                                    className="instance-2_57678"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57679"
                                    className="instance-2_57679"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57680"
                            className="symbol-2_57680 fill-lightbgsurface4-2_23165"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57681"
                                    className="instance-2_57681"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57682"
                                className="paragraph-2_57682 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57683"
                                    className="instance-2_57683"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57684"
                                    className="instance-2_57684"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57685"
                            className="symbol-2_57685 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57686"
                                    className="instance-2_57686"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57687"
                                className="paragraph-2_57687 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57688"
                                    className="instance-2_57688"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57689"
                                    className="instance-2_57689"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57690"
                            className="symbol-2_57690 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57691"
                                    className="instance-2_57691"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57692"
                                className="paragraph-2_57692 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57693"
                                    className="instance-2_57693"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57694"
                                    className="instance-2_57694"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57695"
                            className="symbol-2_57695 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57696"
                                    className="instance-2_57696"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57697"
                                className="paragraph-2_57697 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57698"
                                    className="instance-2_57698"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57699"
                                    className="instance-2_57699"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57700"
                            className="symbol-2_57700 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57701"
                                    className="instance-2_57701"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57702"
                                className="paragraph-2_57702 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57703"
                                    className="instance-2_57703"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57704"
                                    className="instance-2_57704"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57705"
                            className="symbol-2_57705 fill-lightaccentcontainer-default-2_55464"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57706"
                                    className="instance-2_57706"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57707"
                                className="paragraph-2_57707 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57708"
                                    className="instance-2_57708"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57709"
                                    className="instance-2_57709"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57710"
                            className="symbol-2_57710 fill-lightaccentcontainer-default-2_55464"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57711"
                                    className="instance-2_57711"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57712"
                                className="paragraph-2_57712 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57713"
                                    className="instance-2_57713"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57714"
                                    className="instance-2_57714"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_57715" className="symbol-2_57715">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57716"
                                    className="instance-2_57716"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57717"
                                className="paragraph-2_57717 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57718"
                                    className="instance-2_57718"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57719"
                                    className="instance-2_57719"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_57720" className="symbol-2_57720">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57721"
                                    className="instance-2_57721"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57722"
                                className="paragraph-2_57722 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57723"
                                    className="instance-2_57723"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57724"
                                    className="instance-2_57724"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_57725" className="symbol-2_57725">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57726"
                                    className="instance-2_57726"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57727"
                                className="paragraph-2_57727 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57728"
                                    className="instance-2_57728"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57729"
                                    className="instance-2_57729"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_57730" className="symbol-2_57730">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57731"
                                    className="instance-2_57731"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57732"
                                className="paragraph-2_57732 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57733"
                                    className="instance-2_57733"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57734"
                                    className="instance-2_57734"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_57735" className="symbol-2_57735">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57736"
                                    className="instance-2_57736"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57737"
                                className="paragraph-2_57737 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57738"
                                    className="instance-2_57738"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57739"
                                    className="instance-2_57739"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_57740" className="symbol-2_57740">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57741"
                                    className="instance-2_57741"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57742"
                                className="paragraph-2_57742 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57743"
                                    className="instance-2_57743"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57744"
                                    className="instance-2_57744"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_57745" className="symbol-2_57745">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57746"
                                    className="instance-2_57746"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57747"
                                className="paragraph-2_57747 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57748"
                                    className="instance-2_57748"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57749"
                                    className="instance-2_57749"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_57750" className="symbol-2_57750">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57751"
                                    className="instance-2_57751"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57752"
                                className="paragraph-2_57752 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57753"
                                    className="instance-2_57753"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57754"
                                    className="instance-2_57754"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_57755" className="symbol-2_57755">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57756"
                                    className="instance-2_57756"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57757"
                                className="paragraph-2_57757 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57758"
                                    className="instance-2_57758"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57759"
                                    className="instance-2_57759"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_57760" className="symbol-2_57760">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57761"
                                    className="instance-2_57761"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57762"
                                className="paragraph-2_57762 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57763"
                                    className="instance-2_57763"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57764"
                                    className="instance-2_57764"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_57765" className="symbol-2_57765">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57766"
                                    className="instance-2_57766"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57767"
                                className="paragraph-2_57767 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57768"
                                    className="instance-2_57768"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57769"
                                    className="instance-2_57769"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_57770" className="symbol-2_57770">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57771"
                                    className="instance-2_57771"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57772"
                                className="paragraph-2_57772 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57773"
                                    className="instance-2_57773"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57774"
                                    className="instance-2_57774"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_57775" className="symbol-2_57775">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57776"
                                    className="instance-2_57776"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57777"
                                className="paragraph-2_57777 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57778"
                                    className="instance-2_57778"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57779"
                                    className="instance-2_57779"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_57780" className="symbol-2_57780">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57781"
                                    className="instance-2_57781"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57782"
                                className="paragraph-2_57782 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57783"
                                    className="instance-2_57783"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57784"
                                    className="instance-2_57784"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_57785" className="symbol-2_57785">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57786"
                                    className="instance-2_57786"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57787"
                                className="paragraph-2_57787 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57788"
                                    className="instance-2_57788"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57789"
                                    className="instance-2_57789"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_57790" className="symbol-2_57790">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57791"
                                    className="instance-2_57791"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57792"
                                className="paragraph-2_57792 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57793"
                                    className="instance-2_57793"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57794"
                                    className="instance-2_57794"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_57795" className="symbol-2_57795">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57796"
                                    className="instance-2_57796"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57797"
                                className="paragraph-2_57797 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57798"
                                    className="instance-2_57798"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57799"
                                    className="instance-2_57799"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_57800" className="symbol-2_57800">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_57801"
                                    className="instance-2_57801"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_57802"
                                className="paragraph-2_57802 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57803"
                                    className="instance-2_57803"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_57804"
                                    className="instance-2_57804"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_57805" className="stroke-wrapper-2_57805">
                            <div className="symbol-2_57805">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57806"
                                        className="instance-2_57806"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57807"
                                    className="paragraph-2_57807 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57808"
                                        className="instance-2_57808"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57809"
                                        className="instance-2_57809"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57805 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_57810" className="stroke-wrapper-2_57810">
                            <div className="symbol-2_57810">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57811"
                                        className="instance-2_57811"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57812"
                                    className="paragraph-2_57812 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57813"
                                        className="instance-2_57813"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57814"
                                        className="instance-2_57814"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57810 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_57815" className="stroke-wrapper-2_57815">
                            <div className="symbol-2_57815">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57816"
                                        className="instance-2_57816"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57817"
                                    className="paragraph-2_57817 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57818"
                                        className="instance-2_57818"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57819"
                                        className="instance-2_57819"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57815 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_57820" className="stroke-wrapper-2_57820">
                            <div className="symbol-2_57820">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57821"
                                        className="instance-2_57821"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57822"
                                    className="paragraph-2_57822 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57823"
                                        className="instance-2_57823"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57824"
                                        className="instance-2_57824"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57820 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_57825" className="stroke-wrapper-2_57825">
                            <div className="symbol-2_57825">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57826"
                                        className="instance-2_57826"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57827"
                                    className="paragraph-2_57827 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57828"
                                        className="instance-2_57828"
                                        size={"xs (16)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57829"
                                        className="instance-2_57829"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57825 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_57830" className="stroke-wrapper-2_57830">
                            <div className="symbol-2_57830">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57831"
                                        className="instance-2_57831"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57832"
                                    className="paragraph-2_57832 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57833"
                                        className="instance-2_57833"
                                        size={"xs (16)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57834"
                                        className="instance-2_57834"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57830 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_57835" className="stroke-wrapper-2_57835">
                            <div className="symbol-2_57835">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57836"
                                        className="instance-2_57836"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57837"
                                    className="paragraph-2_57837 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57838"
                                        className="instance-2_57838"
                                        size={"xs (16)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57839"
                                        className="instance-2_57839"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57835 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_57840" className="stroke-wrapper-2_57840">
                            <div className="symbol-2_57840">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57841"
                                        className="instance-2_57841"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57842"
                                    className="paragraph-2_57842 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57843"
                                        className="instance-2_57843"
                                        size={"xs (16)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57844"
                                        className="instance-2_57844"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57840 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_57845" className="stroke-wrapper-2_57845">
                            <div className="symbol-2_57845">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57846"
                                        className="instance-2_57846"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57847"
                                    className="paragraph-2_57847 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57848"
                                        className="instance-2_57848"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57849"
                                        className="instance-2_57849"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57845 stroke-lightbordersoft-2_24603"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_57850" className="stroke-wrapper-2_57850">
                            <div className="symbol-2_57850">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57851"
                                        className="instance-2_57851"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57852"
                                    className="paragraph-2_57852 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57853"
                                        className="instance-2_57853"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57854"
                                        className="instance-2_57854"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57850 stroke-lightbordersoft-2_24603"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_57855" className="stroke-wrapper-2_57855">
                            <div className="symbol-2_57855">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57856"
                                        className="instance-2_57856"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57857"
                                    className="paragraph-2_57857 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57858"
                                        className="instance-2_57858"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57859"
                                        className="instance-2_57859"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57855 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_57860" className="stroke-wrapper-2_57860">
                            <div className="symbol-2_57860">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57861"
                                        className="instance-2_57861"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57862"
                                    className="paragraph-2_57862 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57863"
                                        className="instance-2_57863"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57864"
                                        className="instance-2_57864"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57860 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_57865" className="stroke-wrapper-2_57865">
                            <div className="symbol-2_57865">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57866"
                                        className="instance-2_57866"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57867"
                                    className="paragraph-2_57867 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57868"
                                        className="instance-2_57868"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57869"
                                        className="instance-2_57869"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57865 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_57870" className="stroke-wrapper-2_57870">
                            <div className="symbol-2_57870">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57871"
                                        className="instance-2_57871"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57872"
                                    className="paragraph-2_57872 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57873"
                                        className="instance-2_57873"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57874"
                                        className="instance-2_57874"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57870 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_57875" className="stroke-wrapper-2_57875">
                            <div className="symbol-2_57875">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57876"
                                        className="instance-2_57876"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57877"
                                    className="paragraph-2_57877 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57878"
                                        className="instance-2_57878"
                                        size={"xs (16)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57879"
                                        className="instance-2_57879"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57875 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_57880" className="stroke-wrapper-2_57880">
                            <div className="symbol-2_57880">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57881"
                                        className="instance-2_57881"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57882"
                                    className="paragraph-2_57882 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57883"
                                        className="instance-2_57883"
                                        size={"xs (16)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57884"
                                        className="instance-2_57884"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57880 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_57885" className="stroke-wrapper-2_57885">
                            <div className="symbol-2_57885">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57886"
                                        className="instance-2_57886"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57887"
                                    className="paragraph-2_57887 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57888"
                                        className="instance-2_57888"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57889"
                                        className="instance-2_57889"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57885 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_57890" className="stroke-wrapper-2_57890">
                            <div className="symbol-2_57890">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_57891"
                                        className="instance-2_57891"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_57892"
                                    className="paragraph-2_57892 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_57893"
                                        className="instance-2_57893"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_57894"
                                        className="instance-2_57894"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_57890 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57895"
                            className="symbol-2_57895 fill-lightinteractiveaccent-2_2283"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57896"
                                    className="instance-2_57896"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57897"
                                className="paragraph-2_57897 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57898"
                                    className="instance-2_57898"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57899"
                                    className="instance-2_57899"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57900"
                            className="symbol-2_57900 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57901"
                                    className="instance-2_57901"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57902"
                                className="paragraph-2_57902 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57903"
                                    className="instance-2_57903"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57904"
                                    className="instance-2_57904"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57905"
                            className="symbol-2_57905 fill-lightinteractive-errordefault-2_2298"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57906"
                                    className="instance-2_57906"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57907"
                                className="paragraph-2_57907 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57908"
                                    className="instance-2_57908"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57909"
                                    className="instance-2_57909"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57910"
                            className="symbol-2_57910 fill-lightinteractive-errorhover-2_23158"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57911"
                                    className="instance-2_57911"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57912"
                                className="paragraph-2_57912 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57913"
                                    className="instance-2_57913"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57914"
                                    className="instance-2_57914"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57915"
                            className="symbol-2_57915 fill-lightneutraldefault-2_23155"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57916"
                                    className="instance-2_57916"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57917"
                                className="paragraph-2_57917 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57918"
                                    className="instance-2_57918"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57919"
                                    className="instance-2_57919"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57920"
                            className="symbol-2_57920 fill-lightneutralhover-2_23168"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57921"
                                    className="instance-2_57921"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57922"
                                className="paragraph-2_57922 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57923"
                                    className="instance-2_57923"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57924"
                                    className="instance-2_57924"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57925"
                            className="symbol-2_57925 fill-lightneutralmuted-2_22061"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57926"
                                    className="instance-2_57926"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57927"
                                className="paragraph-2_57927 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57928"
                                    className="instance-2_57928"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57929"
                                    className="instance-2_57929"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57930"
                            className="symbol-2_57930 fill-lighterrormuted-2_23156"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57931"
                                    className="instance-2_57931"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57932"
                                className="paragraph-2_57932 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57933"
                                    className="instance-2_57933"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57934"
                                    className="instance-2_57934"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57935"
                            className="symbol-2_57935 fill-lightaccentmuted-2_22057"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57936"
                                    className="instance-2_57936"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57937"
                                className="paragraph-2_57937 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57938"
                                    className="instance-2_57938"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57939"
                                    className="instance-2_57939"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57940"
                            className="symbol-2_57940 fill-lightaccentcontainer-default-2_55464"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57941"
                                    className="instance-2_57941"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57942"
                                className="paragraph-2_57942 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57943"
                                    className="instance-2_57943"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57944"
                                    className="instance-2_57944"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57945"
                            className="symbol-2_57945 fill-lightaccentcontainer-hover-2_23160"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57946"
                                    className="instance-2_57946"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57947"
                                className="paragraph-2_57947 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57948"
                                    className="instance-2_57948"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57949"
                                    className="instance-2_57949"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57950"
                            className="symbol-2_57950 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57951"
                                    className="instance-2_57951"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57952"
                                className="paragraph-2_57952 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57953"
                                    className="instance-2_57953"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57954"
                                    className="instance-2_57954"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57955"
                            className="symbol-2_57955 fill-lighterrorcontainer-hover-2_23151"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57956"
                                    className="instance-2_57956"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57957"
                                className="paragraph-2_57957 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57958"
                                    className="instance-2_57958"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57959"
                                    className="instance-2_57959"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57960"
                            className="symbol-2_57960 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57961"
                                    className="instance-2_57961"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57962"
                                className="paragraph-2_57962 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57963"
                                    className="instance-2_57963"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57964"
                                    className="instance-2_57964"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57965"
                            className="symbol-2_57965 fill-lightbgsurface4-2_23165"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57966"
                                    className="instance-2_57966"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57967"
                                className="paragraph-2_57967 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57968"
                                    className="instance-2_57968"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57969"
                                    className="instance-2_57969"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_57970"
                            className="symbol-2_57970 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57971"
                                    className="instance-2_57971"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57972"
                                className="paragraph-2_57972 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57973"
                                    className="instance-2_57973"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57974"
                                    className="instance-2_57974"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_57975"
                            className="symbol-2_57975 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57976"
                                    className="instance-2_57976"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57977"
                                className="paragraph-2_57977 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57978"
                                    className="instance-2_57978"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57979"
                                    className="instance-2_57979"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_57980"
                            className="symbol-2_57980 fill-lightaccentcontainer-default-2_55464"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57981"
                                    className="instance-2_57981"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57982"
                                className="paragraph-2_57982 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57983"
                                    className="instance-2_57983"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57984"
                                    className="instance-2_57984"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_57985" className="symbol-2_57985">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57986"
                                    className="instance-2_57986"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57987"
                                className="paragraph-2_57987 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57988"
                                    className="instance-2_57988"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57989"
                                    className="instance-2_57989"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_57990" className="symbol-2_57990">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57991"
                                    className="instance-2_57991"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57992"
                                className="paragraph-2_57992 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57993"
                                    className="instance-2_57993"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57994"
                                    className="instance-2_57994"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_57995" className="symbol-2_57995">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_57996"
                                    className="instance-2_57996"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_57997"
                                className="paragraph-2_57997 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_57998"
                                    className="instance-2_57998"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_57999"
                                    className="instance-2_57999"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_58000" className="symbol-2_58000">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_58001"
                                    className="instance-2_58001"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_58002"
                                className="paragraph-2_58002 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58003"
                                    className="instance-2_58003"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_58004"
                                    className="instance-2_58004"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_58005" className="symbol-2_58005">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_58006"
                                    className="instance-2_58006"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_58007"
                                className="paragraph-2_58007 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58008"
                                    className="instance-2_58008"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_58009"
                                    className="instance-2_58009"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_58010" className="symbol-2_58010">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_58011"
                                    className="instance-2_58011"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_58012"
                                className="paragraph-2_58012 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58013"
                                    className="instance-2_58013"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_58014"
                                    className="instance-2_58014"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_58015" className="symbol-2_58015">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_58016"
                                    className="instance-2_58016"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_58017"
                                className="paragraph-2_58017 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58018"
                                    className="instance-2_58018"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_58019"
                                    className="instance-2_58019"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_58020" className="symbol-2_58020">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_58021"
                                    className="instance-2_58021"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_58022"
                                className="paragraph-2_58022 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58023"
                                    className="instance-2_58023"
                                    size={"xs (16)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_58024"
                                    className="instance-2_58024"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_58025" className="symbol-2_58025">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_58026"
                                    className="instance-2_58026"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_58027"
                                className="paragraph-2_58027 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58028"
                                    className="instance-2_58028"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_58029"
                                    className="instance-2_58029"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_58030" className="stroke-wrapper-2_58030">
                            <div className="symbol-2_58030">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_58031"
                                        className="instance-2_58031"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_58032"
                                    className="paragraph-2_58032 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58033"
                                        className="instance-2_58033"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_58034"
                                        className="instance-2_58034"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_58030 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_58035" className="stroke-wrapper-2_58035">
                            <div className="symbol-2_58035">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_58036"
                                        className="instance-2_58036"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_58037"
                                    className="paragraph-2_58037 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58038"
                                        className="instance-2_58038"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_58039"
                                        className="instance-2_58039"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_58035 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_58040" className="stroke-wrapper-2_58040">
                            <div className="symbol-2_58040">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_58041"
                                        className="instance-2_58041"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_58042"
                                    className="paragraph-2_58042 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58043"
                                        className="instance-2_58043"
                                        size={"xs (16)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_58044"
                                        className="instance-2_58044"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_58040 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_58045" className="stroke-wrapper-2_58045">
                            <div className="symbol-2_58045">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_58046"
                                        className="instance-2_58046"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_58047"
                                    className="paragraph-2_58047 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58048"
                                        className="instance-2_58048"
                                        size={"xs (16)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_58049"
                                        className="instance-2_58049"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_58045 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_58050" className="stroke-wrapper-2_58050">
                            <div className="symbol-2_58050">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_58051"
                                        className="instance-2_58051"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_58052"
                                    className="paragraph-2_58052 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58053"
                                        className="instance-2_58053"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_58054"
                                        className="instance-2_58054"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_58050 stroke-lightbordersoft-2_24603"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_58055" className="stroke-wrapper-2_58055">
                            <div className="symbol-2_58055">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_58056"
                                        className="instance-2_58056"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_58057"
                                    className="paragraph-2_58057 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58058"
                                        className="instance-2_58058"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_58059"
                                        className="instance-2_58059"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_58055 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_58060" className="stroke-wrapper-2_58060">
                            <div className="symbol-2_58060">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_58061"
                                        className="instance-2_58061"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_58062"
                                    className="paragraph-2_58062 fill-lightfgdefault-2_55465-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58063"
                                        className="instance-2_58063"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_58064"
                                        className="instance-2_58064"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_58060 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_58065" className="stroke-wrapper-2_58065">
                            <div className="symbol-2_58065">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_58066"
                                        className="instance-2_58066"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_58067"
                                    className="paragraph-2_58067 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58068"
                                        className="instance-2_58068"
                                        size={"xs (16)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_58069"
                                        className="instance-2_58069"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_58065 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_58070" className="stroke-wrapper-2_58070">
                            <div className="symbol-2_58070">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_58071"
                                        className="instance-2_58071"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_58072"
                                    className="paragraph-2_58072 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58073"
                                        className="instance-2_58073"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_58074"
                                        className="instance-2_58074"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_58070 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_58075"
                            className="symbol-2_58075 fill-lightinteractiveaccent-2_2283"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58076"
                                    className="instance-2_58076"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58077"
                                className="paragraph-2_58077 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58078"
                                    className="instance-2_58078"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58079"
                                    className="instance-2_58079"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_58080"
                            className="symbol-2_58080 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58081"
                                    className="instance-2_58081"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58082"
                                className="paragraph-2_58082 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58083"
                                    className="instance-2_58083"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58084"
                                    className="instance-2_58084"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_58085"
                            className="symbol-2_58085 fill-lightinteractive-errordefault-2_2298"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58086"
                                    className="instance-2_58086"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58087"
                                className="paragraph-2_58087 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58088"
                                    className="instance-2_58088"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58089"
                                    className="instance-2_58089"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_58090"
                            className="symbol-2_58090 fill-lightinteractive-errorhover-2_23158"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58091"
                                    className="instance-2_58091"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58092"
                                className="paragraph-2_58092 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58093"
                                    className="instance-2_58093"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58094"
                                    className="instance-2_58094"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_58095"
                            className="symbol-2_58095 fill-lightneutraldefault-2_23155"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58096"
                                    className="instance-2_58096"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58097"
                                className="paragraph-2_58097 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58098"
                                    className="instance-2_58098"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58099"
                                    className="instance-2_58099"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_58100"
                            className="symbol-2_58100 fill-lightneutralhover-2_23168"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58101"
                                    className="instance-2_58101"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58102"
                                className="paragraph-2_58102 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58103"
                                    className="instance-2_58103"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58104"
                                    className="instance-2_58104"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_58105"
                            className="symbol-2_58105 fill-lightneutralmuted-2_22061"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58106"
                                    className="instance-2_58106"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58107"
                                className="paragraph-2_58107 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58108"
                                    className="instance-2_58108"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58109"
                                    className="instance-2_58109"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_58110"
                            className="symbol-2_58110 fill-lighterrormuted-2_23156"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58111"
                                    className="instance-2_58111"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58112"
                                className="paragraph-2_58112 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58113"
                                    className="instance-2_58113"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58114"
                                    className="instance-2_58114"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_58115"
                            className="symbol-2_58115 fill-lightaccentmuted-2_22057"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58116"
                                    className="instance-2_58116"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58117"
                                className="paragraph-2_58117 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58118"
                                    className="instance-2_58118"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58119"
                                    className="instance-2_58119"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_58120"
                            className="symbol-2_58120 fill-lightaccentcontainer-default-2_55464"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58121"
                                    className="instance-2_58121"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58122"
                                className="paragraph-2_58122 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58123"
                                    className="instance-2_58123"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58124"
                                    className="instance-2_58124"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_58125"
                            className="symbol-2_58125 fill-lightaccentcontainer-hover-2_23160"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58126"
                                    className="instance-2_58126"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58127"
                                className="paragraph-2_58127 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58128"
                                    className="instance-2_58128"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58129"
                                    className="instance-2_58129"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_58130"
                            className="symbol-2_58130 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58131"
                                    className="instance-2_58131"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58132"
                                className="paragraph-2_58132 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58133"
                                    className="instance-2_58133"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58134"
                                    className="instance-2_58134"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_58135"
                            className="symbol-2_58135 fill-lighterrorcontainer-hover-2_23151"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58136"
                                    className="instance-2_58136"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58137"
                                className="paragraph-2_58137 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58138"
                                    className="instance-2_58138"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58139"
                                    className="instance-2_58139"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_58140"
                            className="symbol-2_58140 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58141"
                                    className="instance-2_58141"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58142"
                                className="paragraph-2_58142 fill-lightfgdefault-2_55465-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58143"
                                    className="instance-2_58143"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58144"
                                    className="instance-2_58144"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_58145"
                            className="symbol-2_58145 fill-lightbgsurface4-2_23165"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58146"
                                    className="instance-2_58146"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58147"
                                className="paragraph-2_58147 fill-lightfgdefault-2_55465-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58148"
                                    className="instance-2_58148"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58149"
                                    className="instance-2_58149"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_58150"
                            className="symbol-2_58150 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58151"
                                    className="instance-2_58151"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58152"
                                className="paragraph-2_58152 fill-lightfgdefault-2_55465-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58153"
                                    className="instance-2_58153"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58154"
                                    className="instance-2_58154"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_58155"
                            className="symbol-2_58155 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58156"
                                    className="instance-2_58156"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58157"
                                className="paragraph-2_58157 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58158"
                                    className="instance-2_58158"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58159"
                                    className="instance-2_58159"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_58160"
                            className="symbol-2_58160 fill-lightaccentcontainer-default-2_55464"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58161"
                                    className="instance-2_58161"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58162"
                                className="paragraph-2_58162 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58163"
                                    className="instance-2_58163"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58164"
                                    className="instance-2_58164"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_58165" className="symbol-2_58165">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58166"
                                    className="instance-2_58166"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58167"
                                className="paragraph-2_58167 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58168"
                                    className="instance-2_58168"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58169"
                                    className="instance-2_58169"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_58170" className="symbol-2_58170">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58171"
                                    className="instance-2_58171"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58172"
                                className="paragraph-2_58172 fill-lightaccenthover-2_23149-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58173"
                                    className="instance-2_58173"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58174"
                                    className="instance-2_58174"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_58175" className="symbol-2_58175">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58176"
                                    className="instance-2_58176"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58177"
                                className="paragraph-2_58177 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58178"
                                    className="instance-2_58178"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58179"
                                    className="instance-2_58179"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_58180" className="symbol-2_58180">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58181"
                                    className="instance-2_58181"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58182"
                                className="paragraph-2_58182 fill-lighterrorhover-2_23161-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58183"
                                    className="instance-2_58183"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58184"
                                    className="instance-2_58184"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_58185" className="symbol-2_58185">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58186"
                                    className="instance-2_58186"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58187"
                                className="paragraph-2_58187 fill-lightfgdefault-2_55465-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58188"
                                    className="instance-2_58188"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58189"
                                    className="instance-2_58189"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_58190" className="symbol-2_58190">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58191"
                                    className="instance-2_58191"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58192"
                                className="paragraph-2_58192 fill-lightfgsoft-2_22056-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58193"
                                    className="instance-2_58193"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58194"
                                    className="instance-2_58194"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_58195" className="symbol-2_58195">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58196"
                                    className="instance-2_58196"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58197"
                                className="paragraph-2_58197 fill-lightfgdefault-2_55465-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58198"
                                    className="instance-2_58198"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58199"
                                    className="instance-2_58199"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_58200" className="symbol-2_58200">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58201"
                                    className="instance-2_58201"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58202"
                                className="paragraph-2_58202 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58203"
                                    className="instance-2_58203"
                                    size={"m (24)"}
                                    variant={"error"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58204"
                                    className="instance-2_58204"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_58205" className="symbol-2_58205">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_58206"
                                    className="instance-2_58206"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_58207"
                                className="paragraph-2_58207 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter1
                                    id="2_58208"
                                    className="instance-2_58208"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    state={"default"}
                                ></Counter1>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_58209"
                                    className="instance-2_58209"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_58210" className="stroke-wrapper-2_58210">
                            <div className="symbol-2_58210">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_58211"
                                        className="instance-2_58211"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_58212"
                                    className="paragraph-2_58212 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58213"
                                        className="instance-2_58213"
                                        size={"m (24)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_58214"
                                        className="instance-2_58214"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_58210 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_58215" className="stroke-wrapper-2_58215">
                            <div className="symbol-2_58215">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_58216"
                                        className="instance-2_58216"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_58217"
                                    className="paragraph-2_58217 fill-lightaccenthover-2_23149-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58218"
                                        className="instance-2_58218"
                                        size={"m (24)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_58219"
                                        className="instance-2_58219"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_58215 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_58220" className="stroke-wrapper-2_58220">
                            <div className="symbol-2_58220">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_58221"
                                        className="instance-2_58221"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_58222"
                                    className="paragraph-2_58222 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58223"
                                        className="instance-2_58223"
                                        size={"m (24)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_58224"
                                        className="instance-2_58224"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_58220 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_58225" className="stroke-wrapper-2_58225">
                            <div className="symbol-2_58225">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_58226"
                                        className="instance-2_58226"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_58227"
                                    className="paragraph-2_58227 fill-lighterrorhover-2_23161-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58228"
                                        className="instance-2_58228"
                                        size={"m (24)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_58229"
                                        className="instance-2_58229"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_58225 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_58230" className="stroke-wrapper-2_58230">
                            <div className="symbol-2_58230">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_58231"
                                        className="instance-2_58231"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_58232"
                                    className="paragraph-2_58232 fill-lightfgdefault-2_55465-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58233"
                                        className="instance-2_58233"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_58234"
                                        className="instance-2_58234"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_58230 stroke-lightbordersoft-2_24603"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_58235" className="stroke-wrapper-2_58235">
                            <div className="symbol-2_58235">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_58236"
                                        className="instance-2_58236"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_58237"
                                    className="paragraph-2_58237 fill-lightfgsoft-2_22056-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58238"
                                        className="instance-2_58238"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_58239"
                                        className="instance-2_58239"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_58235 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_58240" className="stroke-wrapper-2_58240">
                            <div className="symbol-2_58240">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_58241"
                                        className="instance-2_58241"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_58242"
                                    className="paragraph-2_58242 fill-lightfgdefault-2_55465-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58243"
                                        className="instance-2_58243"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_58244"
                                        className="instance-2_58244"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_58240 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_58245" className="stroke-wrapper-2_58245">
                            <div className="symbol-2_58245">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_58246"
                                        className="instance-2_58246"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_58247"
                                    className="paragraph-2_58247 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58248"
                                        className="instance-2_58248"
                                        size={"m (24)"}
                                        variant={"error"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_58249"
                                        className="instance-2_58249"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_58245 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_58250" className="stroke-wrapper-2_58250">
                            <div className="symbol-2_58250">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_58251"
                                        className="instance-2_58251"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_58252"
                                    className="paragraph-2_58252 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter1
                                        id="2_58253"
                                        className="instance-2_58253"
                                        size={"m (24)"}
                                        variant={"primary"}
                                        state={"default"}
                                    ></Counter1>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_58254"
                                        className="instance-2_58254"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_58250 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Button2;
