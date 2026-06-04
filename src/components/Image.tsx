import RatingStarFill from "@/components/ratingstarfill";
import Counter from "@/components/counter";
import Default from "@/components/default";
import UsersUserFill1 from "@/components/usersuserfill1";
import UsersUserFill0 from "@/components/usersuserfill0";
import UsersUserFill from "@/components/usersuserfill";
import "@/styles/Image.css";
interface imageProps {
    notification?: boolean;
    actions?: boolean;
    iconbadge?: boolean;
    status?: boolean;
    variant?: string;
    size?: string;
    id?: string;
    className?: string;
    instance_355_6604?: string;
}
const Image = (props: imageProps) => {
    const {
        notification = false,
        actions = false,
        iconbadge = false,
        status = false,
        variant,
        size,
        id,
        className = "",
        instance_355_6604
    } = props;

    return (
        <div className={`component-355_6582 ${className}`} id={id}>
            <div id="355_6582" className="symbol-355_6582">
                {variant === "image" && size === "xss (16)" && (
                    <div id="355_6583" className="stroke-wrapper-355_6583">
                        <div className="symbol-355_6583"></div>
                        <div className="stroke-355_6583 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "xss (16)" && (
                    <div id="355_6584" className="stroke-wrapper-355_6584">
                        <div className="symbol-355_6584 fill-lightstatus-03default-2_22067">
                            <p
                                id="355_6585"
                                className="paragraph-355_6585 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {"Ш"}
                            </p>
                        </div>
                        <div className="stroke-355_6584 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "s (24)" && (
                    <div id="355_6586" className="stroke-wrapper-355_6586">
                        <div className="symbol-355_6586">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6587"
                                    className="instance-355_6587"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6588"
                                    className="instance-355_6588"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6589"
                                    className="instance-355_6589"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6586 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "s (24)" && (
                    <div id="355_6590" className="stroke-wrapper-355_6590">
                        <div className="symbol-355_6590 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6591"
                                    className="instance-355_6591"
                                ></RatingStarFill>
                            )}
                            <p
                                id="355_6592"
                                className="paragraph-355_6592 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="355_6593"
                                    className="instance-355_6593"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6594"
                                    className="instance-355_6594"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6590 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "m (32)" && (
                    <div id="355_6595" className="stroke-wrapper-355_6595">
                        <div className="symbol-355_6595">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6596"
                                    className="instance-355_6596"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6597"
                                    className="instance-355_6597"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6598"
                                    className="instance-355_6598"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6595 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "m (32)" && (
                    <div id="355_6599" className="stroke-wrapper-355_6599">
                        <div className="symbol-355_6599 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6600"
                                    className="instance-355_6600"
                                ></RatingStarFill>
                            )}
                            <p
                                id="355_6601"
                                className="paragraph-355_6601 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobilecaption-l-strong-2_22040"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="355_6602"
                                    className="instance-355_6602"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6603"
                                    className="instance-355_6603"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6599 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "l (40)" && (
                    <div id="355_6604" className="stroke-wrapper-355_6604">
                        <div className="symbol-355_6604">
                            {notification && (
                                <Counter
                                    id="355_6605"
                                    className="instance-355_6605"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6606"
                                    className="instance-355_6606"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6607"
                                    className="instance-355_6607"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6604 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "l (40)" && (
                    <div id="355_6608" className="stroke-wrapper-355_6608">
                        <div className="symbol-355_6608 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6609"
                                    className="instance-355_6609"
                                ></RatingStarFill>
                            )}
                            <p
                                id="355_6610"
                                className="paragraph-355_6610 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobiledescription-m-strong-2_20377"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="355_6611"
                                    className="instance-355_6611"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6612"
                                    className="instance-355_6612"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6608 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "4xl (96)" && (
                    <div id="355_6613" className="stroke-wrapper-355_6613">
                        <div className="symbol-355_6613">
                            {actions && (
                                <Default
                                    id="355_6614"
                                    className="instance-355_6614"
                                ></Default>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6615"
                                    className="instance-355_6615"
                                    size={"l (32)"}
                                    variant={"error"}
                                    disabled={"false"}
                                    label={`1`}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6616"
                                    className="instance-355_6616"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6617"
                                    className="instance-355_6617"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6613 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "4xl (96)" && (
                    <div id="355_6618" className="stroke-wrapper-355_6618">
                        <div className="symbol-355_6618 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6619"
                                    className="instance-355_6619"
                                ></RatingStarFill>
                            )}
                            <p
                                id="355_6620"
                                className="paragraph-355_6620 fill-lightstatus-03on-status-03-355_5766-paragraph text-h2-2_2245"
                            >
                                {"ШМ"}
                            </p>
                            {actions && (
                                <Default
                                    id="355_6621"
                                    className="instance-355_6621"
                                ></Default>
                            )}
                            {status && (
                                <Counter
                                    id="355_6622"
                                    className="instance-355_6622"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6623"
                                    className="instance-355_6623"
                                    size={"l (32)"}
                                    variant={"error"}
                                    disabled={"false"}
                                    label={`1`}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6618 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "xss (16)" && (
                    <div id="355_6624" className="stroke-wrapper-355_6624">
                        <div className="symbol-355_6624 fill-lightbgsurface3-2_22053">
                            <UsersUserFill1
                                id="355_6625"
                                className="instance-355_6625"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-355_6624 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "s (24)" && (
                    <div id="355_6626" className="stroke-wrapper-355_6626">
                        <div className="symbol-355_6626 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="355_6627"
                                    className="instance-355_6627"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            <UsersUserFill1
                                id="355_6628"
                                className="instance-355_6628"
                            ></UsersUserFill1>
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6629"
                                    className="instance-355_6629"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6630"
                                    className="instance-355_6630"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6626 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "m (32)" && (
                    <div id="355_6631" className="stroke-wrapper-355_6631">
                        <div className="symbol-355_6631 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="355_6632"
                                    className="instance-355_6632"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            <UsersUserFill0
                                id="355_6633"
                                className="instance-355_6633"
                            ></UsersUserFill0>
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6634"
                                    className="instance-355_6634"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6635"
                                    className="instance-355_6635"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6631 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "l (40)" && (
                    <div id="355_6636" className="stroke-wrapper-355_6636">
                        <div className="symbol-355_6636 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="355_6637"
                                    className="instance-355_6637"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6638"
                                    className="instance-355_6638"
                                ></RatingStarFill>
                            )}
                            <UsersUserFill0
                                id="355_6639"
                                className="instance-355_6639"
                            ></UsersUserFill0>
                            {status && (
                                <Counter
                                    id="355_6640"
                                    className="instance-355_6640"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6636 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "4xl (96)" && (
                    <div id="355_6641" className="stroke-wrapper-355_6641">
                        <div className="symbol-355_6641 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="355_6642"
                                    className="instance-355_6642"
                                    size={"l (32)"}
                                    variant={"error"}
                                    disabled={"false"}
                                    label={`1`}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6643"
                                    className="instance-355_6643"
                                ></RatingStarFill>
                            )}
                            {actions && (
                                <Default
                                    id="355_6644"
                                    className="instance-355_6644"
                                ></Default>
                            )}
                            <UsersUserFill
                                id="355_6645"
                                className="instance-355_6645"
                            ></UsersUserFill>
                            {status && (
                                <Counter
                                    id="355_6646"
                                    className="instance-355_6646"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6641 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "xs (20)" && (
                    <div id="355_6647" className="stroke-wrapper-355_6647">
                        <div className="symbol-355_6647"></div>
                        <div className="stroke-355_6647 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "xs (20)" && (
                    <div id="355_6648" className="stroke-wrapper-355_6648">
                        <div className="symbol-355_6648 fill-lightstatus-03default-2_22067">
                            <p
                                id="355_6649"
                                className="paragraph-355_6649 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {"Ш"}
                            </p>
                        </div>
                        <div className="stroke-355_6648 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "xs (20)" && (
                    <div id="355_6650" className="stroke-wrapper-355_6650">
                        <div className="symbol-355_6650 fill-lightbgsurface3-2_22053">
                            <UsersUserFill1
                                id="355_6651"
                                className="instance-355_6651"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-355_6650 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "xl (56)" && (
                    <div id="355_6652" className="stroke-wrapper-355_6652">
                        <div className="symbol-355_6652 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="355_6653"
                                    className="instance-355_6653"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6654"
                                    className="instance-355_6654"
                                ></RatingStarFill>
                            )}
                            <UsersUserFill0
                                id="355_6655"
                                className="instance-355_6655"
                            ></UsersUserFill0>
                            {status && (
                                <Counter
                                    id="355_6656"
                                    className="instance-355_6656"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6652 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "xl (56)" && (
                    <div id="355_6657" className="stroke-wrapper-355_6657">
                        <div className="symbol-355_6657 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6658"
                                    className="instance-355_6658"
                                ></RatingStarFill>
                            )}
                            <p
                                id="355_6659"
                                className="paragraph-355_6659 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobilebody-l-strong-2_20376"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="355_6660"
                                    className="instance-355_6660"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6661"
                                    className="instance-355_6661"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6657 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "xl (56)" && (
                    <div id="355_6662" className="stroke-wrapper-355_6662">
                        <div className="symbol-355_6662">
                            {notification && (
                                <Counter
                                    id="355_6663"
                                    className="instance-355_6663"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6664"
                                    className="instance-355_6664"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6665"
                                    className="instance-355_6665"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6662 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Image;
