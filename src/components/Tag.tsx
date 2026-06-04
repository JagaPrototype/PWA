import OrganizeCalendar0 from "@/components/organizecalendar0";
import Avatar from "@/components/avatar";
import NavigationCloselarge0 from "@/components/navigationcloselarge0";
import OrganizeCalendar1 from "@/components/organizecalendar1";
import NavigationCloseLarge from "@/components/navigationcloselarge";
import "@/styles/Tag.css";
interface tagProps {
    text?: string;
    iconRight?: boolean;
    iconRight16?: string;
    iconRight20?: string;
    iconLeft?: boolean;
    iconLeft16?: string;
    iconLeft20?: string;
    avatar?: boolean;
    size?: string;
    state?: string;
    selected?: string;
    id?: string;
    className?: string;
}
const Tag = (props: tagProps) => {
    const {
        text = "label",
        iconRight = true,
        iconRight16 = "Component_3440_92197",
        iconRight20 = "Component_3491_94351",
        iconLeft = true,
        iconLeft16 = "Component_2982_84830",
        iconLeft20 = "Component_3491_94048",
        avatar = false,
        size,
        state,
        selected,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_27228 ${className}`} id={id}>
            <div id="2_27228" className="symbol-2_27228">
                {size === "m" &&
                    state === "default" &&
                    selected === "false" && (
                        <div
                            id="2_27229"
                            className="symbol-2_27229 fill-lightneutralcontainer-default-2_2292"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="2_27230"
                                    className="instance-2_27230"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27231"
                                    className="instance-2_27231"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar>
                            )}
                            <div id="2_27232" className="frame-2_27232">
                                <p
                                    id="2_27233"
                                    className="paragraph-2_27233 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="2_27234"
                                    className="instance-2_27234"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    selected === "false" && (
                        <div
                            id="2_27235"
                            className="symbol-2_27235 fill-lightneutralcontainer-hover-2_22071"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="2_27236"
                                    className="instance-2_27236"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27237"
                                    className="instance-2_27237"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar>
                            )}
                            <div id="2_27238" className="frame-2_27238">
                                <p
                                    id="2_27239"
                                    className="paragraph-2_27239 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="2_27240"
                                    className="instance-2_27240"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    selected === "false" && (
                        <div
                            id="2_27241"
                            className="symbol-2_27241 fill-lightneutralcontainer-default-2_2292"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="2_27242"
                                    className="instance-2_27242"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27243"
                                    className="instance-2_27243"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar>
                            )}
                            <div id="2_27244" className="frame-2_27244">
                                <p
                                    id="2_27245"
                                    className="paragraph-2_27245 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="2_27246"
                                    className="instance-2_27246"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    selected === "false" && (
                        <div
                            id="2_27247"
                            className="symbol-2_27247 fill-lightneutralcontainer-hover-2_22071"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="2_27248"
                                    className="instance-2_27248"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27249"
                                    className="instance-2_27249"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar>
                            )}
                            <div id="2_27250" className="frame-2_27250">
                                <p
                                    id="2_27251"
                                    className="paragraph-2_27251 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="2_27252"
                                    className="instance-2_27252"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    selected === "false" && (
                        <div
                            id="2_27253"
                            className="symbol-2_27253 fill-lightneutralcontainer-default-2_2292"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="2_27254"
                                    className="instance-2_27254"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27255"
                                    className="instance-2_27255"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar>
                            )}
                            <div id="2_27256" className="frame-2_27256">
                                <p
                                    id="2_27257"
                                    className="paragraph-2_27257 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="2_27258"
                                    className="instance-2_27258"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    selected === "false" && (
                        <div
                            id="2_27259"
                            className="symbol-2_27259 fill-lightneutralcontainer-hover-2_22071"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="2_27260"
                                    className="instance-2_27260"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27261"
                                    className="instance-2_27261"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar>
                            )}
                            <div id="2_27262" className="frame-2_27262">
                                <p
                                    id="2_27263"
                                    className="paragraph-2_27263 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="2_27264"
                                    className="instance-2_27264"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
                {size === "m" && state === "default" && selected === "true" && (
                    <div
                        id="2_27265"
                        className="symbol-2_27265 fill-lightaccentdefault-2_4578"
                    >
                        {iconLeft && (
                            <OrganizeCalendar0
                                id="2_27266"
                                className="instance-2_27266"
                            ></OrganizeCalendar0>
                        )}
                        {avatar && (
                            <Avatar
                                id="2_27267"
                                className="instance-2_27267"
                                variant={"image"}
                                size={"xs (24)"}
                            ></Avatar>
                        )}
                        <div id="2_27268" className="frame-2_27268">
                            <p
                                id="2_27269"
                                className="paragraph-2_27269 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                            >
                                {text ?? "label"}
                            </p>
                        </div>
                        {iconRight && (
                            <NavigationCloselarge0
                                id="2_27270"
                                className="instance-2_27270"
                            ></NavigationCloselarge0>
                        )}
                    </div>
                )}
                {size === "m" && state === "pressed" && selected === "true" && (
                    <div
                        id="2_27271"
                        className="symbol-2_27271 fill-lightaccenthover-2_23149"
                    >
                        {iconLeft && (
                            <OrganizeCalendar0
                                id="2_27272"
                                className="instance-2_27272"
                            ></OrganizeCalendar0>
                        )}
                        {avatar && (
                            <Avatar
                                id="2_27273"
                                className="instance-2_27273"
                                variant={"image"}
                                size={"xs (24)"}
                            ></Avatar>
                        )}
                        <div id="2_27274" className="frame-2_27274">
                            <p
                                id="2_27275"
                                className="paragraph-2_27275 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                            >
                                {text ?? "label"}
                            </p>
                        </div>
                        {iconRight && (
                            <NavigationCloselarge0
                                id="2_27276"
                                className="instance-2_27276"
                            ></NavigationCloselarge0>
                        )}
                    </div>
                )}
                {size === "s" && state === "default" && selected === "true" && (
                    <div
                        id="2_27277"
                        className="symbol-2_27277 fill-lightaccentdefault-2_4578"
                    >
                        {iconLeft && (
                            <OrganizeCalendar0
                                id="2_27278"
                                className="instance-2_27278"
                            ></OrganizeCalendar0>
                        )}
                        {avatar && (
                            <Avatar
                                id="2_27279"
                                className="instance-2_27279"
                                variant={"image"}
                                size={"xs (24)"}
                            ></Avatar>
                        )}
                        <div id="2_27280" className="frame-2_27280">
                            <p
                                id="2_27281"
                                className="paragraph-2_27281 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                            >
                                {text ?? "label"}
                            </p>
                        </div>
                        {iconRight && (
                            <NavigationCloselarge0
                                id="2_27282"
                                className="instance-2_27282"
                            ></NavigationCloselarge0>
                        )}
                    </div>
                )}
                {size === "s" && state === "pressed" && selected === "true" && (
                    <div
                        id="2_27283"
                        className="symbol-2_27283 fill-lightaccenthover-2_23149"
                    >
                        {iconLeft && (
                            <OrganizeCalendar0
                                id="2_27284"
                                className="instance-2_27284"
                            ></OrganizeCalendar0>
                        )}
                        {avatar && (
                            <Avatar
                                id="2_27285"
                                className="instance-2_27285"
                                variant={"image"}
                                size={"xs (24)"}
                            ></Avatar>
                        )}
                        <div id="2_27286" className="frame-2_27286">
                            <p
                                id="2_27287"
                                className="paragraph-2_27287 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                            >
                                {text ?? "label"}
                            </p>
                        </div>
                        {iconRight && (
                            <NavigationCloselarge0
                                id="2_27288"
                                className="instance-2_27288"
                            ></NavigationCloselarge0>
                        )}
                    </div>
                )}
                {size === "xs" &&
                    state === "default" &&
                    selected === "true" && (
                        <div
                            id="2_27289"
                            className="symbol-2_27289 fill-lightaccentdefault-2_4578"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="2_27290"
                                    className="instance-2_27290"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27291"
                                    className="instance-2_27291"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar>
                            )}
                            <div id="2_27292" className="frame-2_27292">
                                <p
                                    id="2_27293"
                                    className="paragraph-2_27293 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="2_27294"
                                    className="instance-2_27294"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    selected === "true" && (
                        <div
                            id="2_27295"
                            className="symbol-2_27295 fill-lightaccenthover-2_23149"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="2_27296"
                                    className="instance-2_27296"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27297"
                                    className="instance-2_27297"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar>
                            )}
                            <div id="2_27298" className="frame-2_27298">
                                <p
                                    id="2_27299"
                                    className="paragraph-2_27299 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="2_27300"
                                    className="instance-2_27300"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div
                            id="2_27301"
                            className="symbol-2_27301 fill-lightneutralcontainer-soft-2_22070"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="2_27302"
                                    className="instance-2_27302"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27303"
                                    className="instance-2_27303"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar>
                            )}
                            <div id="2_27304" className="frame-2_27304">
                                <p
                                    id="2_27305"
                                    className="paragraph-2_27305 fill-lightfgdisabled-2_22050-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="2_27306"
                                    className="instance-2_27306"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div
                            id="2_27307"
                            className="symbol-2_27307 fill-lightneutralcontainer-soft-2_22070"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="2_27308"
                                    className="instance-2_27308"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27309"
                                    className="instance-2_27309"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar>
                            )}
                            <div id="2_27310" className="frame-2_27310">
                                <p
                                    id="2_27311"
                                    className="paragraph-2_27311 fill-lightfgdisabled-2_22050-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="2_27312"
                                    className="instance-2_27312"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div
                            id="2_27313"
                            className="symbol-2_27313 fill-lightneutralcontainer-soft-2_22070"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="2_27314"
                                    className="instance-2_27314"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27315"
                                    className="instance-2_27315"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar>
                            )}
                            <div id="2_27316" className="frame-2_27316">
                                <p
                                    id="2_27317"
                                    className="paragraph-2_27317 fill-lightfgdisabled-2_22050-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="2_27318"
                                    className="instance-2_27318"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    selected === "true" && (
                        <div
                            id="2_27319"
                            className="symbol-2_27319 fill-lightneutralcontainer-soft-2_22070"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="2_27320"
                                    className="instance-2_27320"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27321"
                                    className="instance-2_27321"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar>
                            )}
                            <div id="2_27322" className="frame-2_27322">
                                <p
                                    id="2_27323"
                                    className="paragraph-2_27323 fill-lightfgdisabled-2_22050-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="2_27324"
                                    className="instance-2_27324"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    selected === "true" && (
                        <div
                            id="2_27325"
                            className="symbol-2_27325 fill-lightneutralcontainer-soft-2_22070"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="2_27326"
                                    className="instance-2_27326"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27327"
                                    className="instance-2_27327"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar>
                            )}
                            <div id="2_27328" className="frame-2_27328">
                                <p
                                    id="2_27329"
                                    className="paragraph-2_27329 fill-lightfgdisabled-2_22050-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="2_27330"
                                    className="instance-2_27330"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    selected === "true" && (
                        <div
                            id="2_27331"
                            className="symbol-2_27331 fill-lightneutralcontainer-soft-2_22070"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="2_27332"
                                    className="instance-2_27332"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar
                                    id="2_27333"
                                    className="instance-2_27333"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar>
                            )}
                            <div id="2_27334" className="frame-2_27334">
                                <p
                                    id="2_27335"
                                    className="paragraph-2_27335 fill-lightfgdisabled-2_22050-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="2_27336"
                                    className="instance-2_27336"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Tag;
