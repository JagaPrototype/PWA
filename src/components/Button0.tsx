import ActionAdd6 from "@/components/actionadd6";
import Counter0 from "@/components/counter0";
import NavigationChevronright4 from "@/components/navigationchevronright4";
import ActionAdd4 from "@/components/actionadd4";
import NavigationChevronright5 from "@/components/navigationchevronright5";
import ActionAdd3 from "@/components/actionadd3";
import NavigationChevronright2 from "@/components/navigationchevronright2";
import ActionAdd5 from "@/components/actionadd5";
import NavigationChevronright3 from "@/components/navigationchevronright3";
import "@/styles/Button0.css";
interface button0Props {
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
    text_2_25271?: string;
    text_2_25272_2_24617?: string;
}
const Button0 = (props: button0Props) => {
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
        className = "",
        text_2_25271,
        text_2_25272_2_24617
    } = props;

    return (
        <div className={`component-2_25178 ${className}`} id={id}>
            <div id="2_25178" className="symbol-2_25178">
                {size === "l" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25179"
                            className="symbol-2_25179 fill-lightinteractiveaccent-2_2283"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25180"
                                    className="instance-2_25180"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25181"
                                className="paragraph-2_25181 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25182"
                                    className="instance-2_25182"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25183"
                                    className="instance-2_25183"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25184"
                            className="symbol-2_25184 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25185"
                                    className="instance-2_25185"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25186"
                                className="paragraph-2_25186 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25187"
                                    className="instance-2_25187"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25188"
                                    className="instance-2_25188"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25189"
                            className="symbol-2_25189 fill-lightinteractive-errordefault-2_2298"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25190"
                                    className="instance-2_25190"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25191"
                                className="paragraph-2_25191 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25192"
                                    className="instance-2_25192"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25193"
                                    className="instance-2_25193"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25194"
                            className="symbol-2_25194 fill-lightinteractive-errorhover-2_23158"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25195"
                                    className="instance-2_25195"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25196"
                                className="paragraph-2_25196 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25197"
                                    className="instance-2_25197"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25198"
                                    className="instance-2_25198"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25199"
                            className="symbol-2_25199 fill-lightneutraldefault-2_23155"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25200"
                                    className="instance-2_25200"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25201"
                                className="paragraph-2_25201 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25202"
                                    className="instance-2_25202"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25203"
                                    className="instance-2_25203"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25204"
                            className="symbol-2_25204 fill-lightneutralhover-2_23168"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25205"
                                    className="instance-2_25205"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25206"
                                className="paragraph-2_25206 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25207"
                                    className="instance-2_25207"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25208"
                                    className="instance-2_25208"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25209"
                            className="symbol-2_25209 fill-lightneutralmuted-2_22061"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25210"
                                    className="instance-2_25210"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25211"
                                className="paragraph-2_25211 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25212"
                                    className="instance-2_25212"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25213"
                                    className="instance-2_25213"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25214"
                            className="symbol-2_25214 fill-lighterrormuted-2_23156"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25215"
                                    className="instance-2_25215"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25216"
                                className="paragraph-2_25216 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25217"
                                    className="instance-2_25217"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25218"
                                    className="instance-2_25218"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25219"
                            className="symbol-2_25219 fill-lightaccentmuted-2_22057"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25220"
                                    className="instance-2_25220"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25221"
                                className="paragraph-2_25221 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25222"
                                    className="instance-2_25222"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25223"
                                    className="instance-2_25223"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25224"
                            className="symbol-2_25224 fill-lightaccentcontainer-default-2_24601"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25225"
                                    className="instance-2_25225"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25226"
                                className="paragraph-2_25226 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25227"
                                    className="instance-2_25227"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25228"
                                    className="instance-2_25228"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25229"
                            className="symbol-2_25229 fill-lightaccentcontainer-hover-2_23160"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25230"
                                    className="instance-2_25230"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25231"
                                className="paragraph-2_25231 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25232"
                                    className="instance-2_25232"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25233"
                                    className="instance-2_25233"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25234"
                            className="symbol-2_25234 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25235"
                                    className="instance-2_25235"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25236"
                                className="paragraph-2_25236 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25237"
                                    className="instance-2_25237"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25238"
                                    className="instance-2_25238"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25239"
                            className="symbol-2_25239 fill-lighterrorcontainer-hover-2_23151"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25240"
                                    className="instance-2_25240"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25241"
                                className="paragraph-2_25241 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25242"
                                    className="instance-2_25242"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25243"
                                    className="instance-2_25243"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25244"
                            className="symbol-2_25244 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25245"
                                    className="instance-2_25245"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25246"
                                className="paragraph-2_25246 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25247"
                                    className="instance-2_25247"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25248"
                                    className="instance-2_25248"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25249"
                            className="symbol-2_25249 fill-lightbgsurface4-2_23165"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25250"
                                    className="instance-2_25250"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25251"
                                className="paragraph-2_25251 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25252"
                                    className="instance-2_25252"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25253"
                                    className="instance-2_25253"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25254"
                            className="symbol-2_25254 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25255"
                                    className="instance-2_25255"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25256"
                                className="paragraph-2_25256 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25257"
                                    className="instance-2_25257"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25258"
                                    className="instance-2_25258"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25259"
                            className="symbol-2_25259 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25260"
                                    className="instance-2_25260"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25261"
                                className="paragraph-2_25261 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25262"
                                    className="instance-2_25262"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25263"
                                    className="instance-2_25263"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25264"
                            className="symbol-2_25264 fill-lightaccentcontainer-default-2_24601"
                        >
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25265"
                                    className="instance-2_25265"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25266"
                                className="paragraph-2_25266 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25267"
                                    className="instance-2_25267"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25268"
                                    className="instance-2_25268"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_25269" className="symbol-2_25269">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25270"
                                    className="instance-2_25270"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25271"
                                className="paragraph-2_25271 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? text_2_25271 ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25272"
                                    className="instance-2_25272"
                                    size={"m (24)"}
                                    variant={"primary"}
                                    text_2_25272_2_24617={text_2_25272_2_24617}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25273"
                                    className="instance-2_25273"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_25274" className="symbol-2_25274">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25275"
                                    className="instance-2_25275"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25276"
                                className="paragraph-2_25276 fill-lightaccenthover-2_23149-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25277"
                                    className="instance-2_25277"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25278"
                                    className="instance-2_25278"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_25279" className="symbol-2_25279">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25280"
                                    className="instance-2_25280"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25281"
                                className="paragraph-2_25281 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25282"
                                    className="instance-2_25282"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25283"
                                    className="instance-2_25283"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_25284" className="symbol-2_25284">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25285"
                                    className="instance-2_25285"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25286"
                                className="paragraph-2_25286 fill-lighterrorhover-2_23161-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25287"
                                    className="instance-2_25287"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25288"
                                    className="instance-2_25288"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_25289" className="symbol-2_25289">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25290"
                                    className="instance-2_25290"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25291"
                                className="paragraph-2_25291 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25292"
                                    className="instance-2_25292"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25293"
                                    className="instance-2_25293"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_25294" className="symbol-2_25294">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25295"
                                    className="instance-2_25295"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25296"
                                className="paragraph-2_25296 fill-lightfgsoft-2_24602-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25297"
                                    className="instance-2_25297"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25298"
                                    className="instance-2_25298"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_25299" className="symbol-2_25299">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25300"
                                    className="instance-2_25300"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25301"
                                className="paragraph-2_25301 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25302"
                                    className="instance-2_25302"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25303"
                                    className="instance-2_25303"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_25304" className="symbol-2_25304">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25305"
                                    className="instance-2_25305"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25306"
                                className="paragraph-2_25306 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25307"
                                    className="instance-2_25307"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25308"
                                    className="instance-2_25308"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_25309" className="symbol-2_25309">
                            {lefticon && (
                                <ActionAdd6
                                    id="2_25310"
                                    className="instance-2_25310"
                                ></ActionAdd6>
                            )}
                            <p
                                id="2_25311"
                                className="paragraph-2_25311 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25312"
                                    className="instance-2_25312"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright4
                                    id="2_25313"
                                    className="instance-2_25313"
                                ></NavigationChevronright4>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_25314" className="stroke-wrapper-2_25314">
                            <div className="symbol-2_25314">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_25315"
                                        className="instance-2_25315"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_25316"
                                    className="paragraph-2_25316 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25317"
                                        className="instance-2_25317"
                                        size={"m (24)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_25318"
                                        className="instance-2_25318"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_25314 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_25319" className="stroke-wrapper-2_25319">
                            <div className="symbol-2_25319">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_25320"
                                        className="instance-2_25320"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_25321"
                                    className="paragraph-2_25321 fill-lightaccenthover-2_23149-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25322"
                                        className="instance-2_25322"
                                        size={"m (24)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_25323"
                                        className="instance-2_25323"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_25319 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_25324" className="stroke-wrapper-2_25324">
                            <div className="symbol-2_25324">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_25325"
                                        className="instance-2_25325"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_25326"
                                    className="paragraph-2_25326 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25327"
                                        className="instance-2_25327"
                                        size={"m (24)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_25328"
                                        className="instance-2_25328"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_25324 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_25329" className="stroke-wrapper-2_25329">
                            <div className="symbol-2_25329">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_25330"
                                        className="instance-2_25330"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_25331"
                                    className="paragraph-2_25331 fill-lighterrorhover-2_23161-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25332"
                                        className="instance-2_25332"
                                        size={"m (24)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_25333"
                                        className="instance-2_25333"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_25329 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_25334" className="stroke-wrapper-2_25334">
                            <div className="symbol-2_25334">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_25335"
                                        className="instance-2_25335"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_25336"
                                    className="paragraph-2_25336 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25337"
                                        className="instance-2_25337"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_25338"
                                        className="instance-2_25338"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_25334 stroke-lightbordersoft-2_24603"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_25339" className="stroke-wrapper-2_25339">
                            <div className="symbol-2_25339">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_25340"
                                        className="instance-2_25340"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_25341"
                                    className="paragraph-2_25341 fill-lightfgsoft-2_24602-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25342"
                                        className="instance-2_25342"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_25343"
                                        className="instance-2_25343"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_25339 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_25344" className="stroke-wrapper-2_25344">
                            <div className="symbol-2_25344">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_25345"
                                        className="instance-2_25345"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_25346"
                                    className="paragraph-2_25346 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25347"
                                        className="instance-2_25347"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_25348"
                                        className="instance-2_25348"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_25344 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_25349" className="stroke-wrapper-2_25349">
                            <div className="symbol-2_25349">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_25350"
                                        className="instance-2_25350"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_25351"
                                    className="paragraph-2_25351 fill-lighterrordefault-2_23162-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25352"
                                        className="instance-2_25352"
                                        size={"m (24)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_25353"
                                        className="instance-2_25353"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_25349 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "l" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_25354" className="stroke-wrapper-2_25354">
                            <div className="symbol-2_25354">
                                {lefticon && (
                                    <ActionAdd6
                                        id="2_25355"
                                        className="instance-2_25355"
                                    ></ActionAdd6>
                                )}
                                <p
                                    id="2_25356"
                                    className="paragraph-2_25356 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-m-strong-2_20374"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25357"
                                        className="instance-2_25357"
                                        size={"m (24)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright4
                                        id="2_25358"
                                        className="instance-2_25358"
                                    ></NavigationChevronright4>
                                )}
                            </div>
                            <div className="stroke-2_25354 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25359"
                            className="symbol-2_25359 fill-lightinteractiveaccent-2_2283"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25360"
                                    className="instance-2_25360"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25361"
                                className="paragraph-2_25361 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25362"
                                    className="instance-2_25362"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25363"
                                    className="instance-2_25363"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25364"
                            className="symbol-2_25364 fill-lightinteractiveaccent-2_2283"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25365"
                                    className="instance-2_25365"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25366"
                                className="paragraph-2_25366 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25367"
                                    className="instance-2_25367"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25368"
                                    className="instance-2_25368"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25369"
                            className="symbol-2_25369 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25370"
                                    className="instance-2_25370"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25371"
                                className="paragraph-2_25371 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25372"
                                    className="instance-2_25372"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25373"
                                    className="instance-2_25373"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25374"
                            className="symbol-2_25374 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25375"
                                    className="instance-2_25375"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25376"
                                className="paragraph-2_25376 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25377"
                                    className="instance-2_25377"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25378"
                                    className="instance-2_25378"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25379"
                            className="symbol-2_25379 fill-lightinteractive-errordefault-2_2298"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25380"
                                    className="instance-2_25380"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25381"
                                className="paragraph-2_25381 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25382"
                                    className="instance-2_25382"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25383"
                                    className="instance-2_25383"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25384"
                            className="symbol-2_25384 fill-lightinteractive-errordefault-2_2298"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25385"
                                    className="instance-2_25385"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25386"
                                className="paragraph-2_25386 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25387"
                                    className="instance-2_25387"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25388"
                                    className="instance-2_25388"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25389"
                            className="symbol-2_25389 fill-lightinteractive-errorhover-2_23158"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25390"
                                    className="instance-2_25390"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25391"
                                className="paragraph-2_25391 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25392"
                                    className="instance-2_25392"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25393"
                                    className="instance-2_25393"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25394"
                            className="symbol-2_25394 fill-lightinteractive-errorhover-2_23158"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25395"
                                    className="instance-2_25395"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25396"
                                className="paragraph-2_25396 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25397"
                                    className="instance-2_25397"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25398"
                                    className="instance-2_25398"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25399"
                            className="symbol-2_25399 fill-lightneutraldefault-2_23155"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25400"
                                    className="instance-2_25400"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25401"
                                className="paragraph-2_25401 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25402"
                                    className="instance-2_25402"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25403"
                                    className="instance-2_25403"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25404"
                            className="symbol-2_25404 fill-lightneutraldefault-2_23155"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25405"
                                    className="instance-2_25405"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25406"
                                className="paragraph-2_25406 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25407"
                                    className="instance-2_25407"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25408"
                                    className="instance-2_25408"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25409"
                            className="symbol-2_25409 fill-lightneutralhover-2_23168"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25410"
                                    className="instance-2_25410"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25411"
                                className="paragraph-2_25411 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25412"
                                    className="instance-2_25412"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25413"
                                    className="instance-2_25413"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25414"
                            className="symbol-2_25414 fill-lightneutralhover-2_23168"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25415"
                                    className="instance-2_25415"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25416"
                                className="paragraph-2_25416 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25417"
                                    className="instance-2_25417"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25418"
                                    className="instance-2_25418"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25419"
                            className="symbol-2_25419 fill-lightneutralmuted-2_22061"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25420"
                                    className="instance-2_25420"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25421"
                                className="paragraph-2_25421 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25422"
                                    className="instance-2_25422"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25423"
                                    className="instance-2_25423"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25424"
                            className="symbol-2_25424 fill-lightneutralmuted-2_22061"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25425"
                                    className="instance-2_25425"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25426"
                                className="paragraph-2_25426 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25427"
                                    className="instance-2_25427"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25428"
                                    className="instance-2_25428"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25429"
                            className="symbol-2_25429 fill-lighterrormuted-2_23156"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25430"
                                    className="instance-2_25430"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25431"
                                className="paragraph-2_25431 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25432"
                                    className="instance-2_25432"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25433"
                                    className="instance-2_25433"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25434"
                            className="symbol-2_25434 fill-lighterrormuted-2_23156"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25435"
                                    className="instance-2_25435"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25436"
                                className="paragraph-2_25436 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25437"
                                    className="instance-2_25437"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25438"
                                    className="instance-2_25438"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25439"
                            className="symbol-2_25439 fill-lightaccentmuted-2_22057"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25440"
                                    className="instance-2_25440"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25441"
                                className="paragraph-2_25441 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25442"
                                    className="instance-2_25442"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25443"
                                    className="instance-2_25443"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25444"
                            className="symbol-2_25444 fill-lightaccentmuted-2_22057"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25445"
                                    className="instance-2_25445"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25446"
                                className="paragraph-2_25446 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25447"
                                    className="instance-2_25447"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25448"
                                    className="instance-2_25448"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25449"
                            className="symbol-2_25449 fill-lightaccentcontainer-default-2_24601"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25450"
                                    className="instance-2_25450"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25451"
                                className="paragraph-2_25451 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25452"
                                    className="instance-2_25452"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25453"
                                    className="instance-2_25453"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25454"
                            className="symbol-2_25454 fill-lightaccentcontainer-default-2_24601"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25455"
                                    className="instance-2_25455"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25456"
                                className="paragraph-2_25456 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25457"
                                    className="instance-2_25457"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25458"
                                    className="instance-2_25458"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25459"
                            className="symbol-2_25459 fill-lightaccentcontainer-hover-2_23160"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25460"
                                    className="instance-2_25460"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25461"
                                className="paragraph-2_25461 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25462"
                                    className="instance-2_25462"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25463"
                                    className="instance-2_25463"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25464"
                            className="symbol-2_25464 fill-lightaccentcontainer-hover-2_23160"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25465"
                                    className="instance-2_25465"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25466"
                                className="paragraph-2_25466 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25467"
                                    className="instance-2_25467"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25468"
                                    className="instance-2_25468"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25469"
                            className="symbol-2_25469 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25470"
                                    className="instance-2_25470"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25471"
                                className="paragraph-2_25471 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25472"
                                    className="instance-2_25472"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25473"
                                    className="instance-2_25473"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25474"
                            className="symbol-2_25474 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25475"
                                    className="instance-2_25475"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25476"
                                className="paragraph-2_25476 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25477"
                                    className="instance-2_25477"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25478"
                                    className="instance-2_25478"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25479"
                            className="symbol-2_25479 fill-lighterrorcontainer-hover-2_23151"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25480"
                                    className="instance-2_25480"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25481"
                                className="paragraph-2_25481 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25482"
                                    className="instance-2_25482"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25483"
                                    className="instance-2_25483"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25484"
                            className="symbol-2_25484 fill-lighterrorcontainer-hover-2_23151"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25485"
                                    className="instance-2_25485"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25486"
                                className="paragraph-2_25486 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25487"
                                    className="instance-2_25487"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25488"
                                    className="instance-2_25488"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25489"
                            className="symbol-2_25489 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25490"
                                    className="instance-2_25490"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25491"
                                className="paragraph-2_25491 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25492"
                                    className="instance-2_25492"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25493"
                                    className="instance-2_25493"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25494"
                            className="symbol-2_25494 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25495"
                                    className="instance-2_25495"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25496"
                                className="paragraph-2_25496 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25497"
                                    className="instance-2_25497"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25498"
                                    className="instance-2_25498"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25499"
                            className="symbol-2_25499 fill-lightbgsurface4-2_23165"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25500"
                                    className="instance-2_25500"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25501"
                                className="paragraph-2_25501 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25502"
                                    className="instance-2_25502"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25503"
                                    className="instance-2_25503"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25504"
                            className="symbol-2_25504 fill-lightbgsurface4-2_23165"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25505"
                                    className="instance-2_25505"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25506"
                                className="paragraph-2_25506 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25507"
                                    className="instance-2_25507"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25508"
                                    className="instance-2_25508"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25509"
                            className="symbol-2_25509 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25510"
                                    className="instance-2_25510"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25511"
                                className="paragraph-2_25511 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25512"
                                    className="instance-2_25512"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25513"
                                    className="instance-2_25513"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25514"
                            className="symbol-2_25514 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25515"
                                    className="instance-2_25515"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25516"
                                className="paragraph-2_25516 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25517"
                                    className="instance-2_25517"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25518"
                                    className="instance-2_25518"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25519"
                            className="symbol-2_25519 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25520"
                                    className="instance-2_25520"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25521"
                                className="paragraph-2_25521 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25522"
                                    className="instance-2_25522"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25523"
                                    className="instance-2_25523"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25524"
                            className="symbol-2_25524 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25525"
                                    className="instance-2_25525"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25526"
                                className="paragraph-2_25526 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25527"
                                    className="instance-2_25527"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25528"
                                    className="instance-2_25528"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25529"
                            className="symbol-2_25529 fill-lightaccentcontainer-default-2_24601"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25530"
                                    className="instance-2_25530"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25531"
                                className="paragraph-2_25531 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25532"
                                    className="instance-2_25532"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25533"
                                    className="instance-2_25533"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25534"
                            className="symbol-2_25534 fill-lightaccentcontainer-default-2_24601"
                        >
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25535"
                                    className="instance-2_25535"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25536"
                                className="paragraph-2_25536 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25537"
                                    className="instance-2_25537"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25538"
                                    className="instance-2_25538"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_25539" className="symbol-2_25539">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25540"
                                    className="instance-2_25540"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25541"
                                className="paragraph-2_25541 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25542"
                                    className="instance-2_25542"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25543"
                                    className="instance-2_25543"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_25544" className="symbol-2_25544">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25545"
                                    className="instance-2_25545"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25546"
                                className="paragraph-2_25546 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25547"
                                    className="instance-2_25547"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25548"
                                    className="instance-2_25548"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_25549" className="symbol-2_25549">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25550"
                                    className="instance-2_25550"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25551"
                                className="paragraph-2_25551 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25552"
                                    className="instance-2_25552"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25553"
                                    className="instance-2_25553"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_25554" className="symbol-2_25554">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25555"
                                    className="instance-2_25555"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25556"
                                className="paragraph-2_25556 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25557"
                                    className="instance-2_25557"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25558"
                                    className="instance-2_25558"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_25559" className="symbol-2_25559">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25560"
                                    className="instance-2_25560"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25561"
                                className="paragraph-2_25561 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25562"
                                    className="instance-2_25562"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25563"
                                    className="instance-2_25563"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_25564" className="symbol-2_25564">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25565"
                                    className="instance-2_25565"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25566"
                                className="paragraph-2_25566 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25567"
                                    className="instance-2_25567"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25568"
                                    className="instance-2_25568"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_25569" className="symbol-2_25569">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25570"
                                    className="instance-2_25570"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25571"
                                className="paragraph-2_25571 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25572"
                                    className="instance-2_25572"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25573"
                                    className="instance-2_25573"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_25574" className="symbol-2_25574">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25575"
                                    className="instance-2_25575"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25576"
                                className="paragraph-2_25576 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25577"
                                    className="instance-2_25577"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25578"
                                    className="instance-2_25578"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_25579" className="symbol-2_25579">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25580"
                                    className="instance-2_25580"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25581"
                                className="paragraph-2_25581 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25582"
                                    className="instance-2_25582"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25583"
                                    className="instance-2_25583"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_25584" className="symbol-2_25584">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25585"
                                    className="instance-2_25585"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25586"
                                className="paragraph-2_25586 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25587"
                                    className="instance-2_25587"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25588"
                                    className="instance-2_25588"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_25589" className="symbol-2_25589">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25590"
                                    className="instance-2_25590"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25591"
                                className="paragraph-2_25591 fill-lightfgsoft-2_24602-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25592"
                                    className="instance-2_25592"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25593"
                                    className="instance-2_25593"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_25594" className="symbol-2_25594">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25595"
                                    className="instance-2_25595"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25596"
                                className="paragraph-2_25596 fill-lightfgsoft-2_24602-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25597"
                                    className="instance-2_25597"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25598"
                                    className="instance-2_25598"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_25599" className="symbol-2_25599">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25600"
                                    className="instance-2_25600"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25601"
                                className="paragraph-2_25601 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25602"
                                    className="instance-2_25602"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25603"
                                    className="instance-2_25603"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_25604" className="symbol-2_25604">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25605"
                                    className="instance-2_25605"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25606"
                                className="paragraph-2_25606 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25607"
                                    className="instance-2_25607"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25608"
                                    className="instance-2_25608"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_25609" className="symbol-2_25609">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25610"
                                    className="instance-2_25610"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25611"
                                className="paragraph-2_25611 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25612"
                                    className="instance-2_25612"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25613"
                                    className="instance-2_25613"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_25614" className="symbol-2_25614">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25615"
                                    className="instance-2_25615"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25616"
                                className="paragraph-2_25616 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25617"
                                    className="instance-2_25617"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25618"
                                    className="instance-2_25618"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_25619" className="symbol-2_25619">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25620"
                                    className="instance-2_25620"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25621"
                                className="paragraph-2_25621 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25622"
                                    className="instance-2_25622"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25623"
                                    className="instance-2_25623"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_25624" className="symbol-2_25624">
                            {lefticon && (
                                <ActionAdd4
                                    id="2_25625"
                                    className="instance-2_25625"
                                ></ActionAdd4>
                            )}
                            <p
                                id="2_25626"
                                className="paragraph-2_25626 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25627"
                                    className="instance-2_25627"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright5
                                    id="2_25628"
                                    className="instance-2_25628"
                                ></NavigationChevronright5>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_25629" className="stroke-wrapper-2_25629">
                            <div className="symbol-2_25629">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25630"
                                        className="instance-2_25630"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25631"
                                    className="paragraph-2_25631 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25632"
                                        className="instance-2_25632"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25633"
                                        className="instance-2_25633"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25629 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_25634" className="stroke-wrapper-2_25634">
                            <div className="symbol-2_25634">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25635"
                                        className="instance-2_25635"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25636"
                                    className="paragraph-2_25636 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25637"
                                        className="instance-2_25637"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25638"
                                        className="instance-2_25638"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25634 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_25639" className="stroke-wrapper-2_25639">
                            <div className="symbol-2_25639">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25640"
                                        className="instance-2_25640"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25641"
                                    className="paragraph-2_25641 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25642"
                                        className="instance-2_25642"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25643"
                                        className="instance-2_25643"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25639 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_25644" className="stroke-wrapper-2_25644">
                            <div className="symbol-2_25644">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25645"
                                        className="instance-2_25645"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25646"
                                    className="paragraph-2_25646 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25647"
                                        className="instance-2_25647"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25648"
                                        className="instance-2_25648"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25644 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_25649" className="stroke-wrapper-2_25649">
                            <div className="symbol-2_25649">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25650"
                                        className="instance-2_25650"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25651"
                                    className="paragraph-2_25651 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25652"
                                        className="instance-2_25652"
                                        size={"xs (16)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25653"
                                        className="instance-2_25653"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25649 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_25654" className="stroke-wrapper-2_25654">
                            <div className="symbol-2_25654">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25655"
                                        className="instance-2_25655"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25656"
                                    className="paragraph-2_25656 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25657"
                                        className="instance-2_25657"
                                        size={"xs (16)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25658"
                                        className="instance-2_25658"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25654 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_25659" className="stroke-wrapper-2_25659">
                            <div className="symbol-2_25659">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25660"
                                        className="instance-2_25660"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25661"
                                    className="paragraph-2_25661 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25662"
                                        className="instance-2_25662"
                                        size={"xs (16)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25663"
                                        className="instance-2_25663"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25659 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_25664" className="stroke-wrapper-2_25664">
                            <div className="symbol-2_25664">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25665"
                                        className="instance-2_25665"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25666"
                                    className="paragraph-2_25666 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25667"
                                        className="instance-2_25667"
                                        size={"xs (16)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25668"
                                        className="instance-2_25668"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25664 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_25669" className="stroke-wrapper-2_25669">
                            <div className="symbol-2_25669">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25670"
                                        className="instance-2_25670"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25671"
                                    className="paragraph-2_25671 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25672"
                                        className="instance-2_25672"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25673"
                                        className="instance-2_25673"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25669 stroke-lightbordersoft-2_24603"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_25674" className="stroke-wrapper-2_25674">
                            <div className="symbol-2_25674">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25675"
                                        className="instance-2_25675"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25676"
                                    className="paragraph-2_25676 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25677"
                                        className="instance-2_25677"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25678"
                                        className="instance-2_25678"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25674 stroke-lightbordersoft-2_24603"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_25679" className="stroke-wrapper-2_25679">
                            <div className="symbol-2_25679">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25680"
                                        className="instance-2_25680"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25681"
                                    className="paragraph-2_25681 fill-lightfgsoft-2_24602-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25682"
                                        className="instance-2_25682"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25683"
                                        className="instance-2_25683"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25679 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_25684" className="stroke-wrapper-2_25684">
                            <div className="symbol-2_25684">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25685"
                                        className="instance-2_25685"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25686"
                                    className="paragraph-2_25686 fill-lightfgsoft-2_24602-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25687"
                                        className="instance-2_25687"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25688"
                                        className="instance-2_25688"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25684 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_25689" className="stroke-wrapper-2_25689">
                            <div className="symbol-2_25689">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25690"
                                        className="instance-2_25690"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25691"
                                    className="paragraph-2_25691 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25692"
                                        className="instance-2_25692"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25693"
                                        className="instance-2_25693"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25689 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_25694" className="stroke-wrapper-2_25694">
                            <div className="symbol-2_25694">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25695"
                                        className="instance-2_25695"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25696"
                                    className="paragraph-2_25696 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25697"
                                        className="instance-2_25697"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25698"
                                        className="instance-2_25698"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25694 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_25699" className="stroke-wrapper-2_25699">
                            <div className="symbol-2_25699">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25700"
                                        className="instance-2_25700"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25701"
                                    className="paragraph-2_25701 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25702"
                                        className="instance-2_25702"
                                        size={"xs (16)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25703"
                                        className="instance-2_25703"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25699 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_25704" className="stroke-wrapper-2_25704">
                            <div className="symbol-2_25704">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25705"
                                        className="instance-2_25705"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25706"
                                    className="paragraph-2_25706 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25707"
                                        className="instance-2_25707"
                                        size={"xs (16)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25708"
                                        className="instance-2_25708"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25704 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "s" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_25709" className="stroke-wrapper-2_25709">
                            <div className="symbol-2_25709">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25710"
                                        className="instance-2_25710"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25711"
                                    className="paragraph-2_25711 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25712"
                                        className="instance-2_25712"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25713"
                                        className="instance-2_25713"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25709 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "m" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_25714" className="stroke-wrapper-2_25714">
                            <div className="symbol-2_25714">
                                {lefticon && (
                                    <ActionAdd4
                                        id="2_25715"
                                        className="instance-2_25715"
                                    ></ActionAdd4>
                                )}
                                <p
                                    id="2_25716"
                                    className="paragraph-2_25716 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25717"
                                        className="instance-2_25717"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright5
                                        id="2_25718"
                                        className="instance-2_25718"
                                    ></NavigationChevronright5>
                                )}
                            </div>
                            <div className="stroke-2_25714 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25719"
                            className="symbol-2_25719 fill-lightinteractiveaccent-2_2283"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25720"
                                    className="instance-2_25720"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25721"
                                className="paragraph-2_25721 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25722"
                                    className="instance-2_25722"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25723"
                                    className="instance-2_25723"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25724"
                            className="symbol-2_25724 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25725"
                                    className="instance-2_25725"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25726"
                                className="paragraph-2_25726 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25727"
                                    className="instance-2_25727"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25728"
                                    className="instance-2_25728"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25729"
                            className="symbol-2_25729 fill-lightinteractive-errordefault-2_2298"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25730"
                                    className="instance-2_25730"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25731"
                                className="paragraph-2_25731 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25732"
                                    className="instance-2_25732"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25733"
                                    className="instance-2_25733"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25734"
                            className="symbol-2_25734 fill-lightinteractive-errorhover-2_23158"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25735"
                                    className="instance-2_25735"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25736"
                                className="paragraph-2_25736 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25737"
                                    className="instance-2_25737"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25738"
                                    className="instance-2_25738"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25739"
                            className="symbol-2_25739 fill-lightneutraldefault-2_23155"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25740"
                                    className="instance-2_25740"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25741"
                                className="paragraph-2_25741 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25742"
                                    className="instance-2_25742"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25743"
                                    className="instance-2_25743"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25744"
                            className="symbol-2_25744 fill-lightneutralhover-2_23168"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25745"
                                    className="instance-2_25745"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25746"
                                className="paragraph-2_25746 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25747"
                                    className="instance-2_25747"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25748"
                                    className="instance-2_25748"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25749"
                            className="symbol-2_25749 fill-lightneutralmuted-2_22061"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25750"
                                    className="instance-2_25750"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25751"
                                className="paragraph-2_25751 fill-lightneutralon-neutral-2_22064-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25752"
                                    className="instance-2_25752"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25753"
                                    className="instance-2_25753"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25754"
                            className="symbol-2_25754 fill-lighterrormuted-2_23156"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25755"
                                    className="instance-2_25755"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25756"
                                className="paragraph-2_25756 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25757"
                                    className="instance-2_25757"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25758"
                                    className="instance-2_25758"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25759"
                            className="symbol-2_25759 fill-lightaccentmuted-2_22057"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25760"
                                    className="instance-2_25760"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25761"
                                className="paragraph-2_25761 fill-lightinteractiveon-accent-2_23146-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25762"
                                    className="instance-2_25762"
                                    size={"xs (16)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25763"
                                    className="instance-2_25763"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25764"
                            className="symbol-2_25764 fill-lightaccentcontainer-default-2_24601"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25765"
                                    className="instance-2_25765"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25766"
                                className="paragraph-2_25766 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25767"
                                    className="instance-2_25767"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25768"
                                    className="instance-2_25768"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25769"
                            className="symbol-2_25769 fill-lightaccentcontainer-hover-2_23160"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25770"
                                    className="instance-2_25770"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25771"
                                className="paragraph-2_25771 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25772"
                                    className="instance-2_25772"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25773"
                                    className="instance-2_25773"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25774"
                            className="symbol-2_25774 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25775"
                                    className="instance-2_25775"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25776"
                                className="paragraph-2_25776 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25777"
                                    className="instance-2_25777"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25778"
                                    className="instance-2_25778"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25779"
                            className="symbol-2_25779 fill-lighterrorcontainer-hover-2_23151"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25780"
                                    className="instance-2_25780"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25781"
                                className="paragraph-2_25781 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25782"
                                    className="instance-2_25782"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25783"
                                    className="instance-2_25783"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25784"
                            className="symbol-2_25784 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25785"
                                    className="instance-2_25785"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25786"
                                className="paragraph-2_25786 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25787"
                                    className="instance-2_25787"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25788"
                                    className="instance-2_25788"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25789"
                            className="symbol-2_25789 fill-lightbgsurface4-2_23165"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25790"
                                    className="instance-2_25790"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25791"
                                className="paragraph-2_25791 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25792"
                                    className="instance-2_25792"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25793"
                                    className="instance-2_25793"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25794"
                            className="symbol-2_25794 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25795"
                                    className="instance-2_25795"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25796"
                                className="paragraph-2_25796 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25797"
                                    className="instance-2_25797"
                                    size={"xs (16)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25798"
                                    className="instance-2_25798"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25799"
                            className="symbol-2_25799 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25800"
                                    className="instance-2_25800"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25801"
                                className="paragraph-2_25801 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25802"
                                    className="instance-2_25802"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25803"
                                    className="instance-2_25803"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25804"
                            className="symbol-2_25804 fill-lightaccentcontainer-default-2_24601"
                        >
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25805"
                                    className="instance-2_25805"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25806"
                                className="paragraph-2_25806 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25807"
                                    className="instance-2_25807"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25808"
                                    className="instance-2_25808"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_25809" className="symbol-2_25809">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25810"
                                    className="instance-2_25810"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25811"
                                className="paragraph-2_25811 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25812"
                                    className="instance-2_25812"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25813"
                                    className="instance-2_25813"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_25814" className="symbol-2_25814">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25815"
                                    className="instance-2_25815"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25816"
                                className="paragraph-2_25816 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25817"
                                    className="instance-2_25817"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25818"
                                    className="instance-2_25818"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_25819" className="symbol-2_25819">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25820"
                                    className="instance-2_25820"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25821"
                                className="paragraph-2_25821 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25822"
                                    className="instance-2_25822"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25823"
                                    className="instance-2_25823"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_25824" className="symbol-2_25824">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25825"
                                    className="instance-2_25825"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25826"
                                className="paragraph-2_25826 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25827"
                                    className="instance-2_25827"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25828"
                                    className="instance-2_25828"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_25829" className="symbol-2_25829">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25830"
                                    className="instance-2_25830"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25831"
                                className="paragraph-2_25831 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25832"
                                    className="instance-2_25832"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25833"
                                    className="instance-2_25833"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_25834" className="symbol-2_25834">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25835"
                                    className="instance-2_25835"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25836"
                                className="paragraph-2_25836 fill-lightfgsoft-2_24602-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25837"
                                    className="instance-2_25837"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25838"
                                    className="instance-2_25838"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_25839" className="symbol-2_25839">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25840"
                                    className="instance-2_25840"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25841"
                                className="paragraph-2_25841 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25842"
                                    className="instance-2_25842"
                                    size={"xs (16)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25843"
                                    className="instance-2_25843"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_25844" className="symbol-2_25844">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25845"
                                    className="instance-2_25845"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25846"
                                className="paragraph-2_25846 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25847"
                                    className="instance-2_25847"
                                    size={"xs (16)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25848"
                                    className="instance-2_25848"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_25849" className="symbol-2_25849">
                            {lefticon && (
                                <ActionAdd3
                                    id="2_25850"
                                    className="instance-2_25850"
                                ></ActionAdd3>
                            )}
                            <p
                                id="2_25851"
                                className="paragraph-2_25851 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25852"
                                    className="instance-2_25852"
                                    size={"xs (16)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright2
                                    id="2_25853"
                                    className="instance-2_25853"
                                ></NavigationChevronright2>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_25854" className="stroke-wrapper-2_25854">
                            <div className="symbol-2_25854">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_25855"
                                        className="instance-2_25855"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_25856"
                                    className="paragraph-2_25856 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25857"
                                        className="instance-2_25857"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_25858"
                                        className="instance-2_25858"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_25854 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_25859" className="stroke-wrapper-2_25859">
                            <div className="symbol-2_25859">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_25860"
                                        className="instance-2_25860"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_25861"
                                    className="paragraph-2_25861 fill-lightaccenthover-2_23149-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25862"
                                        className="instance-2_25862"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_25863"
                                        className="instance-2_25863"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_25859 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_25864" className="stroke-wrapper-2_25864">
                            <div className="symbol-2_25864">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_25865"
                                        className="instance-2_25865"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_25866"
                                    className="paragraph-2_25866 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25867"
                                        className="instance-2_25867"
                                        size={"xs (16)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_25868"
                                        className="instance-2_25868"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_25864 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_25869" className="stroke-wrapper-2_25869">
                            <div className="symbol-2_25869">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_25870"
                                        className="instance-2_25870"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_25871"
                                    className="paragraph-2_25871 fill-lighterrorhover-2_23161-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25872"
                                        className="instance-2_25872"
                                        size={"xs (16)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_25873"
                                        className="instance-2_25873"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_25869 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_25874" className="stroke-wrapper-2_25874">
                            <div className="symbol-2_25874">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_25875"
                                        className="instance-2_25875"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_25876"
                                    className="paragraph-2_25876 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25877"
                                        className="instance-2_25877"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_25878"
                                        className="instance-2_25878"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_25874 stroke-lightbordersoft-2_24603"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_25879" className="stroke-wrapper-2_25879">
                            <div className="symbol-2_25879">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_25880"
                                        className="instance-2_25880"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_25881"
                                    className="paragraph-2_25881 fill-lightfgsoft-2_24602-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25882"
                                        className="instance-2_25882"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_25883"
                                        className="instance-2_25883"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_25879 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_25884" className="stroke-wrapper-2_25884">
                            <div className="symbol-2_25884">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_25885"
                                        className="instance-2_25885"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_25886"
                                    className="paragraph-2_25886 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25887"
                                        className="instance-2_25887"
                                        size={"xs (16)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_25888"
                                        className="instance-2_25888"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_25884 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_25889" className="stroke-wrapper-2_25889">
                            <div className="symbol-2_25889">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_25890"
                                        className="instance-2_25890"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_25891"
                                    className="paragraph-2_25891 fill-lighterrordefault-2_23162-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25892"
                                        className="instance-2_25892"
                                        size={"xs (16)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_25893"
                                        className="instance-2_25893"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_25889 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xs" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_25894" className="stroke-wrapper-2_25894">
                            <div className="symbol-2_25894">
                                {lefticon && (
                                    <ActionAdd3
                                        id="2_25895"
                                        className="instance-2_25895"
                                    ></ActionAdd3>
                                )}
                                <p
                                    id="2_25896"
                                    className="paragraph-2_25896 fill-lightaccentdefault-2_4578-paragraph text-mobiledescription-l-strong-2_20373"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_25897"
                                        className="instance-2_25897"
                                        size={"xs (16)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright2
                                        id="2_25898"
                                        className="instance-2_25898"
                                    ></NavigationChevronright2>
                                )}
                            </div>
                            <div className="stroke-2_25894 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25899"
                            className="symbol-2_25899 fill-lightinteractiveaccent-2_2283"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25900"
                                    className="instance-2_25900"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25901"
                                className="paragraph-2_25901 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25902"
                                    className="instance-2_25902"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25903"
                                    className="instance-2_25903"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25904"
                            className="symbol-2_25904 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25905"
                                    className="instance-2_25905"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25906"
                                className="paragraph-2_25906 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25907"
                                    className="instance-2_25907"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25908"
                                    className="instance-2_25908"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25909"
                            className="symbol-2_25909 fill-lightinteractive-errordefault-2_2298"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25910"
                                    className="instance-2_25910"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25911"
                                className="paragraph-2_25911 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25912"
                                    className="instance-2_25912"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25913"
                                    className="instance-2_25913"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25914"
                            className="symbol-2_25914 fill-lightinteractive-errorhover-2_23158"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25915"
                                    className="instance-2_25915"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25916"
                                className="paragraph-2_25916 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25917"
                                    className="instance-2_25917"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25918"
                                    className="instance-2_25918"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25919"
                            className="symbol-2_25919 fill-lightneutraldefault-2_23155"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25920"
                                    className="instance-2_25920"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25921"
                                className="paragraph-2_25921 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25922"
                                    className="instance-2_25922"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25923"
                                    className="instance-2_25923"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25924"
                            className="symbol-2_25924 fill-lightneutralhover-2_23168"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25925"
                                    className="instance-2_25925"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25926"
                                className="paragraph-2_25926 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25927"
                                    className="instance-2_25927"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25928"
                                    className="instance-2_25928"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25929"
                            className="symbol-2_25929 fill-lightneutralmuted-2_22061"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25930"
                                    className="instance-2_25930"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25931"
                                className="paragraph-2_25931 fill-lightneutralon-neutral-2_22064-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25932"
                                    className="instance-2_25932"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25933"
                                    className="instance-2_25933"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25934"
                            className="symbol-2_25934 fill-lighterrormuted-2_23156"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25935"
                                    className="instance-2_25935"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25936"
                                className="paragraph-2_25936 fill-lightinteractive-erroron-error-2_23157-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25937"
                                    className="instance-2_25937"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25938"
                                    className="instance-2_25938"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "primary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25939"
                            className="symbol-2_25939 fill-lightaccentmuted-2_22057"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25940"
                                    className="instance-2_25940"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25941"
                                className="paragraph-2_25941 fill-lightinteractiveon-accent-2_23146-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25942"
                                    className="instance-2_25942"
                                    size={"m (24)"}
                                    variant={"contrast"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25943"
                                    className="instance-2_25943"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25944"
                            className="symbol-2_25944 fill-lightaccentcontainer-default-2_24601"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25945"
                                    className="instance-2_25945"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25946"
                                className="paragraph-2_25946 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25947"
                                    className="instance-2_25947"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25948"
                                    className="instance-2_25948"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25949"
                            className="symbol-2_25949 fill-lightaccentcontainer-hover-2_23160"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25950"
                                    className="instance-2_25950"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25951"
                                className="paragraph-2_25951 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25952"
                                    className="instance-2_25952"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25953"
                                    className="instance-2_25953"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25954"
                            className="symbol-2_25954 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25955"
                                    className="instance-2_25955"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25956"
                                className="paragraph-2_25956 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25957"
                                    className="instance-2_25957"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25958"
                                    className="instance-2_25958"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25959"
                            className="symbol-2_25959 fill-lighterrorcontainer-hover-2_23151"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25960"
                                    className="instance-2_25960"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25961"
                                className="paragraph-2_25961 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25962"
                                    className="instance-2_25962"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25963"
                                    className="instance-2_25963"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25964"
                            className="symbol-2_25964 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25965"
                                    className="instance-2_25965"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25966"
                                className="paragraph-2_25966 fill-lightfgdefault-2_2273-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25967"
                                    className="instance-2_25967"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25968"
                                    className="instance-2_25968"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25969"
                            className="symbol-2_25969 fill-lightbgsurface4-2_23165"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25970"
                                    className="instance-2_25970"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25971"
                                className="paragraph-2_25971 fill-lightfgdefault-2_2273-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25972"
                                    className="instance-2_25972"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25973"
                                    className="instance-2_25973"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_25974"
                            className="symbol-2_25974 fill-lightbgsurface3-2_22053"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25975"
                                    className="instance-2_25975"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25976"
                                className="paragraph-2_25976 fill-lightfgdefault-2_2273-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25977"
                                    className="instance-2_25977"
                                    size={"m (24)"}
                                    variant={"tertiary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25978"
                                    className="instance-2_25978"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div
                            id="2_25979"
                            className="symbol-2_25979 fill-lighterrorcontainer-default-2_23164"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25980"
                                    className="instance-2_25980"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25981"
                                className="paragraph-2_25981 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25982"
                                    className="instance-2_25982"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25983"
                                    className="instance-2_25983"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "secondary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_25984"
                            className="symbol-2_25984 fill-lightaccentcontainer-default-2_24601"
                        >
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25985"
                                    className="instance-2_25985"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25986"
                                className="paragraph-2_25986 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25987"
                                    className="instance-2_25987"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25988"
                                    className="instance-2_25988"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_25989" className="symbol-2_25989">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25990"
                                    className="instance-2_25990"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25991"
                                className="paragraph-2_25991 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25992"
                                    className="instance-2_25992"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25993"
                                    className="instance-2_25993"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_25994" className="symbol-2_25994">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_25995"
                                    className="instance-2_25995"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_25996"
                                className="paragraph-2_25996 fill-lightaccenthover-2_23149-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_25997"
                                    className="instance-2_25997"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_25998"
                                    className="instance-2_25998"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_25999" className="symbol-2_25999">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_26000"
                                    className="instance-2_26000"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_26001"
                                className="paragraph-2_26001 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_26002"
                                    className="instance-2_26002"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_26003"
                                    className="instance-2_26003"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_26004" className="symbol-2_26004">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_26005"
                                    className="instance-2_26005"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_26006"
                                className="paragraph-2_26006 fill-lighterrorhover-2_23161-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_26007"
                                    className="instance-2_26007"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_26008"
                                    className="instance-2_26008"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_26009" className="symbol-2_26009">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_26010"
                                    className="instance-2_26010"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_26011"
                                className="paragraph-2_26011 fill-lightfgdefault-2_2273-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_26012"
                                    className="instance-2_26012"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_26013"
                                    className="instance-2_26013"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_26014" className="symbol-2_26014">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_26015"
                                    className="instance-2_26015"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_26016"
                                className="paragraph-2_26016 fill-lightfgsoft-2_24602-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_26017"
                                    className="instance-2_26017"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_26018"
                                    className="instance-2_26018"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_26019" className="symbol-2_26019">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_26020"
                                    className="instance-2_26020"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_26021"
                                className="paragraph-2_26021 fill-lightfgdefault-2_2273-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_26022"
                                    className="instance-2_26022"
                                    size={"m (24)"}
                                    variant={"secondary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_26023"
                                    className="instance-2_26023"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_26024" className="symbol-2_26024">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_26025"
                                    className="instance-2_26025"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_26026"
                                className="paragraph-2_26026 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_26027"
                                    className="instance-2_26027"
                                    size={"m (24)"}
                                    variant={"error"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_26028"
                                    className="instance-2_26028"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "tertiary" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_26029" className="symbol-2_26029">
                            {lefticon && (
                                <ActionAdd5
                                    id="2_26030"
                                    className="instance-2_26030"
                                ></ActionAdd5>
                            )}
                            <p
                                id="2_26031"
                                className="paragraph-2_26031 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {Text ?? "Label"}
                            </p>
                            {counter && (
                                <Counter0
                                    id="2_26032"
                                    className="instance-2_26032"
                                    size={"m (24)"}
                                    variant={"primary"}
                                ></Counter0>
                            )}
                            {righticon && (
                                <NavigationChevronright3
                                    id="2_26033"
                                    className="instance-2_26033"
                                ></NavigationChevronright3>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="2_26034" className="stroke-wrapper-2_26034">
                            <div className="symbol-2_26034">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_26035"
                                        className="instance-2_26035"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_26036"
                                    className="paragraph-2_26036 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_26037"
                                        className="instance-2_26037"
                                        size={"m (24)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_26038"
                                        className="instance-2_26038"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_26034 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="2_26039" className="stroke-wrapper-2_26039">
                            <div className="symbol-2_26039">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_26040"
                                        className="instance-2_26040"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_26041"
                                    className="paragraph-2_26041 fill-lightaccenthover-2_23149-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_26042"
                                        className="instance-2_26042"
                                        size={"m (24)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_26043"
                                        className="instance-2_26043"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_26039 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "error" && (
                        <div id="2_26044" className="stroke-wrapper-2_26044">
                            <div className="symbol-2_26044">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_26045"
                                        className="instance-2_26045"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_26046"
                                    className="paragraph-2_26046 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_26047"
                                        className="instance-2_26047"
                                        size={"m (24)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_26048"
                                        className="instance-2_26048"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_26044 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "error" && (
                        <div id="2_26049" className="stroke-wrapper-2_26049">
                            <div className="symbol-2_26049">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_26050"
                                        className="instance-2_26050"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_26051"
                                    className="paragraph-2_26051 fill-lighterrorhover-2_23161-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_26052"
                                        className="instance-2_26052"
                                        size={"m (24)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_26053"
                                        className="instance-2_26053"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_26049 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="2_26054" className="stroke-wrapper-2_26054">
                            <div className="symbol-2_26054">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_26055"
                                        className="instance-2_26055"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_26056"
                                    className="paragraph-2_26056 fill-lightfgdefault-2_2273-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_26057"
                                        className="instance-2_26057"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_26058"
                                        className="instance-2_26058"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_26054 stroke-lightbordersoft-2_24603"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="2_26059" className="stroke-wrapper-2_26059">
                            <div className="symbol-2_26059">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_26060"
                                        className="instance-2_26060"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_26061"
                                    className="paragraph-2_26061 fill-lightfgsoft-2_24602-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_26062"
                                        className="instance-2_26062"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_26063"
                                        className="instance-2_26063"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_26059 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "neutral" && (
                        <div id="2_26064" className="stroke-wrapper-2_26064">
                            <div className="symbol-2_26064">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_26065"
                                        className="instance-2_26065"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_26066"
                                    className="paragraph-2_26066 fill-lightfgdefault-2_2273-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_26067"
                                        className="instance-2_26067"
                                        size={"m (24)"}
                                        variant={"secondary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_26068"
                                        className="instance-2_26068"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_26064 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "error" && (
                        <div id="2_26069" className="stroke-wrapper-2_26069">
                            <div className="symbol-2_26069">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_26070"
                                        className="instance-2_26070"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_26071"
                                    className="paragraph-2_26071 fill-lighterrordefault-2_23162-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_26072"
                                        className="instance-2_26072"
                                        size={"m (24)"}
                                        variant={"error"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_26073"
                                        className="instance-2_26073"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_26069 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xl" &&
                    variant === "outline" &&
                    state === "disabled" &&
                    colorScheme === "accent" && (
                        <div id="2_26074" className="stroke-wrapper-2_26074">
                            <div className="symbol-2_26074">
                                {lefticon && (
                                    <ActionAdd5
                                        id="2_26075"
                                        className="instance-2_26075"
                                    ></ActionAdd5>
                                )}
                                <p
                                    id="2_26076"
                                    className="paragraph-2_26076 fill-lightaccentdefault-2_4578-paragraph text-mobilebody-l-strong-2_20376"
                                >
                                    {Text ?? "Label"}
                                </p>
                                {counter && (
                                    <Counter0
                                        id="2_26077"
                                        className="instance-2_26077"
                                        size={"m (24)"}
                                        variant={"primary"}
                                    ></Counter0>
                                )}
                                {righticon && (
                                    <NavigationChevronright3
                                        id="2_26078"
                                        className="instance-2_26078"
                                    ></NavigationChevronright3>
                                )}
                            </div>
                            <div className="stroke-2_26074 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Button0;
