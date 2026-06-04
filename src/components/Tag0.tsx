import PriorityPriorityVeryHighFill from "@/components/prioritypriorityveryhighfill";
import OrganizeCalendar0 from "@/components/organizecalendar0";
import Avatargroup from "@/components/avatargroup";
import Avatar1 from "@/components/avatar1";
import NavigationCloselarge0 from "@/components/navigationcloselarge0";
import OrganizeCalendar1 from "@/components/organizecalendar1";
import NavigationCloseLarge from "@/components/navigationcloselarge";
import "@/styles/Tag0.css";
interface tag0Props {
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
const Tag0 = (props: tag0Props) => {
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
        <div className={`component-4_29293 ${className}`} id={id}>
            <div id="4_29293" className="symbol-4_29293">
                {size === "m" &&
                    state === "default" &&
                    selected === "false" && (
                        <div
                            id="4_29294"
                            className="symbol-4_29294 fill-lightneutralcontainer-default-2_2292"
                        >
                            {iconLeft && (
                                <div
                                    id="4_29295"
                                    className="instance-4_29295"
                                    instance_2_25174={
                                        "PriorityPriorityVeryHighFill"
                                    }
                                >
                                    {iconLeft20 === "Component_4_31841" && (
                                        <PriorityPriorityVeryHighFill id="4_29295"></PriorityPriorityVeryHighFill>
                                    )}
                                    {iconLeft20 === "Component_2_25174" && (
                                        <OrganizeCalendar0 id="4_29295"></OrganizeCalendar0>
                                    )}
                                </div>
                            )}
                            {avatar && (
                                <div
                                    id="4_29296"
                                    className="instance-4_29296"
                                    instance_2_22977={"sizexs24"}
                                >
                                    <Avatargroup
                                        id="4_29296"
                                        size={"xs (24)"}
                                    ></Avatargroup>
                                    <Avatar1
                                        id="4_29296"
                                        variant={"image"}
                                        size={"xs (24)"}
                                    ></Avatar1>
                                </div>
                            )}
                            <div id="4_29297" className="frame-4_29297">
                                <p
                                    id="4_29298"
                                    className="paragraph-4_29298 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="4_29299"
                                    className="instance-4_29299"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    selected === "false" && (
                        <div
                            id="4_29300"
                            className="symbol-4_29300 fill-lightneutralcontainer-hover-2_22071"
                        >
                            {iconLeft && (
                                <div
                                    id="4_29301"
                                    className="instance-4_29301"
                                    instance_2_25174={
                                        "PriorityPriorityVeryHighFill"
                                    }
                                >
                                    {iconLeft20 === "Component_4_31841" && (
                                        <PriorityPriorityVeryHighFill id="4_29301"></PriorityPriorityVeryHighFill>
                                    )}
                                    {iconLeft20 === "Component_2_25174" && (
                                        <OrganizeCalendar0 id="4_29301"></OrganizeCalendar0>
                                    )}
                                </div>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29302"
                                    className="instance-4_29302"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar1>
                            )}
                            <div id="4_29303" className="frame-4_29303">
                                <p
                                    id="4_29304"
                                    className="paragraph-4_29304 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="4_29305"
                                    className="instance-4_29305"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    selected === "false" && (
                        <div
                            id="4_29306"
                            className="symbol-4_29306 fill-lightneutralcontainer-default-2_2292"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="4_29307"
                                    className="instance-4_29307"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29308"
                                    className="instance-4_29308"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar1>
                            )}
                            <div id="4_29309" className="frame-4_29309">
                                <p
                                    id="4_29310"
                                    className="paragraph-4_29310 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="4_29311"
                                    className="instance-4_29311"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    selected === "false" && (
                        <div
                            id="4_29312"
                            className="symbol-4_29312 fill-lightneutralcontainer-hover-2_22071"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="4_29313"
                                    className="instance-4_29313"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29314"
                                    className="instance-4_29314"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar1>
                            )}
                            <div id="4_29315" className="frame-4_29315">
                                <p
                                    id="4_29316"
                                    className="paragraph-4_29316 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="4_29317"
                                    className="instance-4_29317"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    selected === "false" && (
                        <div
                            id="4_29318"
                            className="symbol-4_29318 fill-lightneutralcontainer-default-2_2292"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="4_29319"
                                    className="instance-4_29319"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29320"
                                    className="instance-4_29320"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar1>
                            )}
                            <div id="4_29321" className="frame-4_29321">
                                <p
                                    id="4_29322"
                                    className="paragraph-4_29322 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="4_29323"
                                    className="instance-4_29323"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    selected === "false" && (
                        <div
                            id="4_29324"
                            className="symbol-4_29324 fill-lightneutralcontainer-hover-2_22071"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="4_29325"
                                    className="instance-4_29325"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29326"
                                    className="instance-4_29326"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar1>
                            )}
                            <div id="4_29327" className="frame-4_29327">
                                <p
                                    id="4_29328"
                                    className="paragraph-4_29328 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="4_29329"
                                    className="instance-4_29329"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
                {size === "m" && state === "default" && selected === "true" && (
                    <div
                        id="4_29330"
                        className="symbol-4_29330 fill-lightaccentdefault-2_4578"
                    >
                        {iconLeft && (
                            <OrganizeCalendar0
                                id="4_29331"
                                className="instance-4_29331"
                            ></OrganizeCalendar0>
                        )}
                        {avatar && (
                            <Avatar1
                                id="4_29332"
                                className="instance-4_29332"
                                variant={"image"}
                                size={"xs (24)"}
                            ></Avatar1>
                        )}
                        <div id="4_29333" className="frame-4_29333">
                            <p
                                id="4_29334"
                                className="paragraph-4_29334 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                            >
                                {text ?? "label"}
                            </p>
                        </div>
                        {iconRight && (
                            <NavigationCloselarge0
                                id="4_29335"
                                className="instance-4_29335"
                            ></NavigationCloselarge0>
                        )}
                    </div>
                )}
                {size === "m" && state === "pressed" && selected === "true" && (
                    <div
                        id="4_29336"
                        className="symbol-4_29336 fill-lightaccenthover-2_23149"
                    >
                        {iconLeft && (
                            <OrganizeCalendar0
                                id="4_29337"
                                className="instance-4_29337"
                            ></OrganizeCalendar0>
                        )}
                        {avatar && (
                            <Avatar1
                                id="4_29338"
                                className="instance-4_29338"
                                variant={"image"}
                                size={"xs (24)"}
                            ></Avatar1>
                        )}
                        <div id="4_29339" className="frame-4_29339">
                            <p
                                id="4_29340"
                                className="paragraph-4_29340 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                            >
                                {text ?? "label"}
                            </p>
                        </div>
                        {iconRight && (
                            <NavigationCloselarge0
                                id="4_29341"
                                className="instance-4_29341"
                            ></NavigationCloselarge0>
                        )}
                    </div>
                )}
                {size === "s" && state === "default" && selected === "true" && (
                    <div
                        id="4_29342"
                        className="symbol-4_29342 fill-lightaccentdefault-2_4578"
                    >
                        {iconLeft && (
                            <OrganizeCalendar0
                                id="4_29343"
                                className="instance-4_29343"
                            ></OrganizeCalendar0>
                        )}
                        {avatar && (
                            <Avatar1
                                id="4_29344"
                                className="instance-4_29344"
                                variant={"image"}
                                size={"xs (24)"}
                            ></Avatar1>
                        )}
                        <div id="4_29345" className="frame-4_29345">
                            <p
                                id="4_29346"
                                className="paragraph-4_29346 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                            >
                                {text ?? "label"}
                            </p>
                        </div>
                        {iconRight && (
                            <NavigationCloselarge0
                                id="4_29347"
                                className="instance-4_29347"
                            ></NavigationCloselarge0>
                        )}
                    </div>
                )}
                {size === "s" && state === "pressed" && selected === "true" && (
                    <div
                        id="4_29348"
                        className="symbol-4_29348 fill-lightaccenthover-2_23149"
                    >
                        {iconLeft && (
                            <OrganizeCalendar0
                                id="4_29349"
                                className="instance-4_29349"
                            ></OrganizeCalendar0>
                        )}
                        {avatar && (
                            <Avatar1
                                id="4_29350"
                                className="instance-4_29350"
                                variant={"image"}
                                size={"xs (24)"}
                            ></Avatar1>
                        )}
                        <div id="4_29351" className="frame-4_29351">
                            <p
                                id="4_29352"
                                className="paragraph-4_29352 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                            >
                                {text ?? "label"}
                            </p>
                        </div>
                        {iconRight && (
                            <NavigationCloselarge0
                                id="4_29353"
                                className="instance-4_29353"
                            ></NavigationCloselarge0>
                        )}
                    </div>
                )}
                {size === "xs" &&
                    state === "default" &&
                    selected === "true" && (
                        <div
                            id="4_29354"
                            className="symbol-4_29354 fill-lightaccentdefault-2_4578"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="4_29355"
                                    className="instance-4_29355"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29356"
                                    className="instance-4_29356"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar1>
                            )}
                            <div id="4_29357" className="frame-4_29357">
                                <p
                                    id="4_29358"
                                    className="paragraph-4_29358 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="4_29359"
                                    className="instance-4_29359"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    selected === "true" && (
                        <div
                            id="4_29360"
                            className="symbol-4_29360 fill-lightaccenthover-2_23149"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="4_29361"
                                    className="instance-4_29361"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29362"
                                    className="instance-4_29362"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar1>
                            )}
                            <div id="4_29363" className="frame-4_29363">
                                <p
                                    id="4_29364"
                                    className="paragraph-4_29364 fill-lightaccenton-accent-2_4580-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="4_29365"
                                    className="instance-4_29365"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div
                            id="4_29366"
                            className="symbol-4_29366 fill-lightneutralcontainer-soft-2_2301"
                        >
                            {iconLeft && (
                                <div
                                    id="4_29367"
                                    className="instance-4_29367"
                                    instance_2_25174={
                                        "PriorityPriorityVeryHighFill"
                                    }
                                >
                                    {iconLeft20 === "Component_4_31841" && (
                                        <PriorityPriorityVeryHighFill id="4_29367"></PriorityPriorityVeryHighFill>
                                    )}
                                    {iconLeft20 === "Component_2_25174" && (
                                        <OrganizeCalendar0 id="4_29367"></OrganizeCalendar0>
                                    )}
                                </div>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29368"
                                    className="instance-4_29368"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar1>
                            )}
                            <div id="4_29369" className="frame-4_29369">
                                <p
                                    id="4_29370"
                                    className="paragraph-4_29370 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="4_29371"
                                    className="instance-4_29371"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div
                            id="4_29372"
                            className="symbol-4_29372 fill-lightneutralcontainer-soft-2_2301"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="4_29373"
                                    className="instance-4_29373"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29374"
                                    className="instance-4_29374"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar1>
                            )}
                            <div id="4_29375" className="frame-4_29375">
                                <p
                                    id="4_29376"
                                    className="paragraph-4_29376 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="4_29377"
                                    className="instance-4_29377"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    selected === "false" && (
                        <div
                            id="4_29378"
                            className="symbol-4_29378 fill-lightneutralcontainer-soft-2_2301"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="4_29379"
                                    className="instance-4_29379"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29380"
                                    className="instance-4_29380"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar1>
                            )}
                            <div id="4_29381" className="frame-4_29381">
                                <p
                                    id="4_29382"
                                    className="paragraph-4_29382 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="4_29383"
                                    className="instance-4_29383"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    selected === "true" && (
                        <div
                            id="4_29384"
                            className="symbol-4_29384 fill-lightneutralcontainer-soft-2_2301"
                        >
                            {iconLeft && (
                                <div
                                    id="4_29385"
                                    className="instance-4_29385"
                                    instance_2_25174={
                                        "PriorityPriorityVeryHighFill"
                                    }
                                >
                                    {iconLeft20 === "Component_4_31841" && (
                                        <PriorityPriorityVeryHighFill id="4_29385"></PriorityPriorityVeryHighFill>
                                    )}
                                    {iconLeft20 === "Component_2_25174" && (
                                        <OrganizeCalendar0 id="4_29385"></OrganizeCalendar0>
                                    )}
                                </div>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29386"
                                    className="instance-4_29386"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar1>
                            )}
                            <div id="4_29387" className="frame-4_29387">
                                <p
                                    id="4_29388"
                                    className="paragraph-4_29388 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="4_29389"
                                    className="instance-4_29389"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    selected === "true" && (
                        <div
                            id="4_29390"
                            className="symbol-4_29390 fill-lightneutralcontainer-soft-2_2301"
                        >
                            {iconLeft && (
                                <OrganizeCalendar0
                                    id="4_29391"
                                    className="instance-4_29391"
                                ></OrganizeCalendar0>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29392"
                                    className="instance-4_29392"
                                    variant={"image"}
                                    size={"xs (24)"}
                                ></Avatar1>
                            )}
                            <div id="4_29393" className="frame-4_29393">
                                <p
                                    id="4_29394"
                                    className="paragraph-4_29394 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloselarge0
                                    id="4_29395"
                                    className="instance-4_29395"
                                ></NavigationCloselarge0>
                            )}
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    selected === "true" && (
                        <div
                            id="4_29396"
                            className="symbol-4_29396 fill-lightneutralcontainer-soft-2_2301"
                        >
                            {iconLeft && (
                                <OrganizeCalendar1
                                    id="4_29397"
                                    className="instance-4_29397"
                                ></OrganizeCalendar1>
                            )}
                            {avatar && (
                                <Avatar1
                                    id="4_29398"
                                    className="instance-4_29398"
                                    variant={"image"}
                                    size={"3xs (16)"}
                                ></Avatar1>
                            )}
                            <div id="4_29399" className="frame-4_29399">
                                <p
                                    id="4_29400"
                                    className="paragraph-4_29400 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {text ?? "label"}
                                </p>
                            </div>
                            {iconRight && (
                                <NavigationCloseLarge
                                    id="4_29401"
                                    className="instance-4_29401"
                                ></NavigationCloseLarge>
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Tag0;
