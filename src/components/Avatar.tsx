import RatingStarFill from "@/components/ratingstarfill";
import Counter from "@/components/counter";
import Default from "@/components/default";
import UsersUserFill1 from "@/components/usersuserfill1";
import UsersUserFill0 from "@/components/usersuserfill0";
import UsersUserFill from "@/components/usersuserfill";
import "@/styles/Avatar.css";
interface avatarProps {
    notification?: boolean;
    actions?: boolean;
    iconbadge?: boolean;
    status?: boolean;
    variant?: string;
    size?: string;
    id?: string;
    className?: string;
}
const Avatar = (props: avatarProps) => {
    const {
        notification = false,
        actions = false,
        iconbadge = false,
        status = false,
        variant,
        size,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_27096 ${className}`} id={id}>
            <div id="2_27096" className="symbol-2_27096">
                {variant === "image" && size === "3xs (16)" && (
                    <div id="2_27097" className="stroke-wrapper-2_27097">
                        <div className="symbol-2_27097"></div>
                        <div className="stroke-2_27097 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "text" && size === "3xs (16)" && (
                    <div id="2_27098" className="stroke-wrapper-2_27098">
                        <div className="symbol-2_27098 fill-lightstatus-03default-2_22067">
                            <p
                                id="2_27099"
                                className="paragraph-2_27099 fill-lightstatus-03on-status-03-2_22066-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {"Ш"}
                            </p>
                        </div>
                        <div className="stroke-2_27098 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "image" && size === "xs (24)" && (
                    <div id="2_27100" className="stroke-wrapper-2_27100">
                        <div className="symbol-2_27100">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27101"
                                    className="instance-2_27101"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_27102"
                                    className="instance-2_27102"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_27103"
                                    className="instance-2_27103"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27100 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "text" && size === "xs (24)" && (
                    <div id="2_27104" className="stroke-wrapper-2_27104">
                        <div className="symbol-2_27104 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27105"
                                    className="instance-2_27105"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_27106"
                                className="paragraph-2_27106 fill-lightstatus-03on-status-03-2_22066-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="2_27107"
                                    className="instance-2_27107"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_27108"
                                    className="instance-2_27108"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27104 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "image" && size === "s (32)" && (
                    <div id="2_27109" className="stroke-wrapper-2_27109">
                        <div className="symbol-2_27109">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27110"
                                    className="instance-2_27110"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_27111"
                                    className="instance-2_27111"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_27112"
                                    className="instance-2_27112"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27109 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "text" && size === "s (32)" && (
                    <div id="2_27113" className="stroke-wrapper-2_27113">
                        <div className="symbol-2_27113 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27114"
                                    className="instance-2_27114"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_27115"
                                className="paragraph-2_27115 fill-lightstatus-03on-status-03-2_22066-paragraph text-mobilecaption-l-strong-2_22040"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="2_27116"
                                    className="instance-2_27116"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_27117"
                                    className="instance-2_27117"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27113 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "image" && size === "l (40)" && (
                    <div id="2_27118" className="stroke-wrapper-2_27118">
                        <div className="symbol-2_27118">
                            {notification && (
                                <Counter
                                    id="2_27119"
                                    className="instance-2_27119"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27120"
                                    className="instance-2_27120"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_27121"
                                    className="instance-2_27121"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27118 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "text" && size === "l (40)" && (
                    <div id="2_27122" className="stroke-wrapper-2_27122">
                        <div className="symbol-2_27122 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27123"
                                    className="instance-2_27123"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_27124"
                                className="paragraph-2_27124 fill-lightstatus-03on-status-03-2_22066-paragraph text-mobiledescription-m-strong-2_20377"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="2_27125"
                                    className="instance-2_27125"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_27126"
                                    className="instance-2_27126"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27122 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "image" && size === "4xl (96)" && (
                    <div id="2_27127" className="stroke-wrapper-2_27127">
                        <div className="symbol-2_27127">
                            {actions && (
                                <Default
                                    id="2_27128"
                                    className="instance-2_27128"
                                ></Default>
                            )}
                            {notification && (
                                <Counter
                                    id="2_27129"
                                    className="instance-2_27129"
                                    size={"l (32)"}
                                    variant={"error"}
                                    label={`1`}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27130"
                                    className="instance-2_27130"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_27131"
                                    className="instance-2_27131"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27127 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "text" && size === "4xl (96)" && (
                    <div id="2_27132" className="stroke-wrapper-2_27132">
                        <div className="symbol-2_27132 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27133"
                                    className="instance-2_27133"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_27134"
                                className="paragraph-2_27134 fill-lightstatus-03on-status-03-2_22066-paragraph text-h2-2_20360"
                            >
                                {"ШМ"}
                            </p>
                            {actions && (
                                <Default
                                    id="2_27135"
                                    className="instance-2_27135"
                                ></Default>
                            )}
                            {status && (
                                <Counter
                                    id="2_27136"
                                    className="instance-2_27136"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_27137"
                                    className="instance-2_27137"
                                    size={"l (32)"}
                                    variant={"error"}
                                    label={`1`}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27132 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "icon" && size === "3xs (16)" && (
                    <div id="2_27138" className="stroke-wrapper-2_27138">
                        <div className="symbol-2_27138 fill-lightbgsurface3-2_22053">
                            <UsersUserFill1
                                id="2_27139"
                                className="instance-2_27139"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-2_27138 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "icon" && size === "xs (24)" && (
                    <div id="2_27140" className="stroke-wrapper-2_27140">
                        <div className="symbol-2_27140 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="2_27141"
                                    className="instance-2_27141"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            <UsersUserFill1
                                id="2_27142"
                                className="instance-2_27142"
                            ></UsersUserFill1>
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27143"
                                    className="instance-2_27143"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_27144"
                                    className="instance-2_27144"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27140 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "icon" && size === "s (32)" && (
                    <div id="2_27145" className="stroke-wrapper-2_27145">
                        <div className="symbol-2_27145 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="2_27146"
                                    className="instance-2_27146"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            <UsersUserFill0
                                id="2_27147"
                                className="instance-2_27147"
                            ></UsersUserFill0>
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27148"
                                    className="instance-2_27148"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_27149"
                                    className="instance-2_27149"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27145 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "icon" && size === "l (40)" && (
                    <div id="2_27150" className="stroke-wrapper-2_27150">
                        <div className="symbol-2_27150 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="2_27151"
                                    className="instance-2_27151"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27152"
                                    className="instance-2_27152"
                                ></RatingStarFill>
                            )}
                            <UsersUserFill0
                                id="2_27153"
                                className="instance-2_27153"
                            ></UsersUserFill0>
                            {status && (
                                <Counter
                                    id="2_27154"
                                    className="instance-2_27154"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27150 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "icon" && size === "4xl (96)" && (
                    <div id="2_27155" className="stroke-wrapper-2_27155">
                        <div className="symbol-2_27155 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="2_27156"
                                    className="instance-2_27156"
                                    size={"l (32)"}
                                    variant={"error"}
                                    label={`1`}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27157"
                                    className="instance-2_27157"
                                ></RatingStarFill>
                            )}
                            {actions && (
                                <Default
                                    id="2_27158"
                                    className="instance-2_27158"
                                ></Default>
                            )}
                            <UsersUserFill
                                id="2_27159"
                                className="instance-2_27159"
                            ></UsersUserFill>
                            {status && (
                                <Counter
                                    id="2_27160"
                                    className="instance-2_27160"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27155 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "image" && size === "2xs (20)" && (
                    <div id="2_27161" className="stroke-wrapper-2_27161">
                        <div className="symbol-2_27161"></div>
                        <div className="stroke-2_27161 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "text" && size === "2xs (20)" && (
                    <div id="2_27162" className="stroke-wrapper-2_27162">
                        <div className="symbol-2_27162 fill-lightstatus-03default-2_22067">
                            <p
                                id="2_27163"
                                className="paragraph-2_27163 fill-lightstatus-03on-status-03-2_22066-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {"Ш"}
                            </p>
                        </div>
                        <div className="stroke-2_27162 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "icon" && size === "2xs (20)" && (
                    <div id="2_27164" className="stroke-wrapper-2_27164">
                        <div className="symbol-2_27164 fill-lightbgsurface3-2_22053">
                            <UsersUserFill1
                                id="2_27165"
                                className="instance-2_27165"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-2_27164 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "icon" && size === "m (36)" && (
                    <div id="2_27166" className="stroke-wrapper-2_27166">
                        <div className="symbol-2_27166 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="2_27167"
                                    className="instance-2_27167"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            <UsersUserFill0
                                id="2_27168"
                                className="instance-2_27168"
                            ></UsersUserFill0>
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27169"
                                    className="instance-2_27169"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_27170"
                                    className="instance-2_27170"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27166 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "text" && size === "m (36)" && (
                    <div id="2_27171" className="stroke-wrapper-2_27171">
                        <div className="symbol-2_27171 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27172"
                                    className="instance-2_27172"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_27173"
                                className="paragraph-2_27173 fill-lightstatus-03on-status-03-2_22066-paragraph text-mobilecaption-l-strong-2_22040"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="2_27174"
                                    className="instance-2_27174"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_27175"
                                    className="instance-2_27175"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27171 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
                {variant === "image" && size === "m (36)" && (
                    <div id="2_27176" className="stroke-wrapper-2_27176">
                        <div className="symbol-2_27176">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_27177"
                                    className="instance-2_27177"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_27178"
                                    className="instance-2_27178"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_27179"
                                    className="instance-2_27179"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_27176 stroke-lightneutralcontainer-soft-2_22070"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Avatar;
