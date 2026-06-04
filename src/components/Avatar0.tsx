import RatingStarFill from "@/components/ratingstarfill";
import Counter from "@/components/counter";
import Default from "@/components/default";
import UsersUserFill1 from "@/components/usersuserfill1";
import UsersUserFill0 from "@/components/usersuserfill0";
import UsersUserFill from "@/components/usersuserfill";
import "@/styles/Avatar0.css";
interface avatar0Props {
    notification?: boolean;
    actions?: boolean;
    iconbadge?: boolean;
    status?: boolean;
    variant?: string;
    size?: string;
    id?: string;
    className?: string;
}
const Avatar0 = (props: avatar0Props) => {
    const {
        notification = true,
        actions = false,
        iconbadge = false,
        status = false,
        variant,
        size,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-355_6498 ${className}`} id={id}>
            <div id="355_6498" className="symbol-355_6498">
                {variant === "image" && size === "3xs (16)" && (
                    <div id="355_6499" className="stroke-wrapper-355_6499">
                        <div className="symbol-355_6499"></div>
                        <div className="stroke-355_6499 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "3xs (16)" && (
                    <div id="355_6500" className="stroke-wrapper-355_6500">
                        <div className="symbol-355_6500 fill-lightstatus-03default-2_22067">
                            <p
                                id="355_6501"
                                className="paragraph-355_6501 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {"Ш"}
                            </p>
                        </div>
                        <div className="stroke-355_6500 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "xs (24)" && (
                    <div id="355_6502" className="stroke-wrapper-355_6502">
                        <div className="symbol-355_6502">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6503"
                                    className="instance-355_6503"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6504"
                                    className="instance-355_6504"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6505"
                                    className="instance-355_6505"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6502 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "xs (24)" && (
                    <div id="355_6506" className="stroke-wrapper-355_6506">
                        <div className="symbol-355_6506 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6507"
                                    className="instance-355_6507"
                                ></RatingStarFill>
                            )}
                            <p
                                id="355_6508"
                                className="paragraph-355_6508 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="355_6509"
                                    className="instance-355_6509"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6510"
                                    className="instance-355_6510"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6506 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "s (32)" && (
                    <div id="355_6511" className="stroke-wrapper-355_6511">
                        <div className="symbol-355_6511">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6512"
                                    className="instance-355_6512"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6513"
                                    className="instance-355_6513"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6514"
                                    className="instance-355_6514"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6511 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "s (32)" && (
                    <div id="355_6515" className="stroke-wrapper-355_6515">
                        <div className="symbol-355_6515 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6516"
                                    className="instance-355_6516"
                                ></RatingStarFill>
                            )}
                            <p
                                id="355_6517"
                                className="paragraph-355_6517 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobilecaption-l-strong-2_22040"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="355_6518"
                                    className="instance-355_6518"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6519"
                                    className="instance-355_6519"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6515 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "l (40)" && (
                    <div id="355_6520" className="stroke-wrapper-355_6520">
                        <div className="symbol-355_6520">
                            {notification && (
                                <Counter
                                    id="355_6521"
                                    className="instance-355_6521"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6522"
                                    className="instance-355_6522"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6523"
                                    className="instance-355_6523"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6520 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "l (40)" && (
                    <div id="355_6524" className="stroke-wrapper-355_6524">
                        <div className="symbol-355_6524 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6525"
                                    className="instance-355_6525"
                                ></RatingStarFill>
                            )}
                            <p
                                id="355_6526"
                                className="paragraph-355_6526 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobiledescription-m-strong-2_20377"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="355_6527"
                                    className="instance-355_6527"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6528"
                                    className="instance-355_6528"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6524 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "4xl (96)" && (
                    <div id="355_6529" className="stroke-wrapper-355_6529">
                        <div className="symbol-355_6529">
                            {actions && (
                                <Default
                                    id="355_6530"
                                    className="instance-355_6530"
                                ></Default>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6531"
                                    className="instance-355_6531"
                                    size={"l (32)"}
                                    variant={"error"}
                                    disabled={"false"}
                                    label={`1`}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6532"
                                    className="instance-355_6532"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6533"
                                    className="instance-355_6533"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6529 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "4xl (96)" && (
                    <div id="355_6534" className="stroke-wrapper-355_6534">
                        <div className="symbol-355_6534 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6535"
                                    className="instance-355_6535"
                                ></RatingStarFill>
                            )}
                            <p
                                id="355_6536"
                                className="paragraph-355_6536 fill-lightstatus-03on-status-03-355_5766-paragraph text-h2-2_2245"
                            >
                                {"ШМ"}
                            </p>
                            {actions && (
                                <Default
                                    id="355_6537"
                                    className="instance-355_6537"
                                ></Default>
                            )}
                            {status && (
                                <Counter
                                    id="355_6538"
                                    className="instance-355_6538"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6539"
                                    className="instance-355_6539"
                                    size={"l (32)"}
                                    variant={"error"}
                                    disabled={"false"}
                                    label={`1`}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6534 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "3xs (16)" && (
                    <div id="355_6540" className="stroke-wrapper-355_6540">
                        <div className="symbol-355_6540 fill-lightbgsurface3-2_22053">
                            <UsersUserFill1
                                id="355_6541"
                                className="instance-355_6541"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-355_6540 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "xs (24)" && (
                    <div id="355_6542" className="stroke-wrapper-355_6542">
                        <div className="symbol-355_6542 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="355_6543"
                                    className="instance-355_6543"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            <UsersUserFill1
                                id="355_6544"
                                className="instance-355_6544"
                            ></UsersUserFill1>
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6545"
                                    className="instance-355_6545"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6546"
                                    className="instance-355_6546"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6542 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "s (32)" && (
                    <div id="355_6547" className="stroke-wrapper-355_6547">
                        <div className="symbol-355_6547 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="355_6548"
                                    className="instance-355_6548"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            <UsersUserFill0
                                id="355_6549"
                                className="instance-355_6549"
                            ></UsersUserFill0>
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6550"
                                    className="instance-355_6550"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6551"
                                    className="instance-355_6551"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6547 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "l (40)" && (
                    <div id="355_6552" className="stroke-wrapper-355_6552">
                        <div className="symbol-355_6552 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="355_6553"
                                    className="instance-355_6553"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6554"
                                    className="instance-355_6554"
                                ></RatingStarFill>
                            )}
                            <UsersUserFill0
                                id="355_6555"
                                className="instance-355_6555"
                            ></UsersUserFill0>
                            {status && (
                                <Counter
                                    id="355_6556"
                                    className="instance-355_6556"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6552 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "4xl (96)" && (
                    <div id="355_6557" className="stroke-wrapper-355_6557">
                        <div className="symbol-355_6557 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="355_6558"
                                    className="instance-355_6558"
                                    size={"l (32)"}
                                    variant={"error"}
                                    disabled={"false"}
                                    label={`1`}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6559"
                                    className="instance-355_6559"
                                ></RatingStarFill>
                            )}
                            {actions && (
                                <Default
                                    id="355_6560"
                                    className="instance-355_6560"
                                ></Default>
                            )}
                            <UsersUserFill
                                id="355_6561"
                                className="instance-355_6561"
                            ></UsersUserFill>
                            {status && (
                                <Counter
                                    id="355_6562"
                                    className="instance-355_6562"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6557 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "2xs (20)" && (
                    <div id="355_6563" className="stroke-wrapper-355_6563">
                        <div className="symbol-355_6563"></div>
                        <div className="stroke-355_6563 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "2xs (20)" && (
                    <div id="355_6564" className="stroke-wrapper-355_6564">
                        <div className="symbol-355_6564 fill-lightstatus-03default-2_22067">
                            <p
                                id="355_6565"
                                className="paragraph-355_6565 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {"Ш"}
                            </p>
                        </div>
                        <div className="stroke-355_6564 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "2xs (20)" && (
                    <div id="355_6566" className="stroke-wrapper-355_6566">
                        <div className="symbol-355_6566 fill-lightbgsurface3-2_22053">
                            <UsersUserFill1
                                id="355_6567"
                                className="instance-355_6567"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-355_6566 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "icon" && size === "m (36)" && (
                    <div id="355_6568" className="stroke-wrapper-355_6568">
                        <div className="symbol-355_6568 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter
                                    id="355_6569"
                                    className="instance-355_6569"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            <UsersUserFill0
                                id="355_6570"
                                className="instance-355_6570"
                            ></UsersUserFill0>
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6571"
                                    className="instance-355_6571"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6572"
                                    className="instance-355_6572"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6568 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "text" && size === "m (36)" && (
                    <div id="355_6573" className="stroke-wrapper-355_6573">
                        <div className="symbol-355_6573 fill-lightstatus-03default-2_22067">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6574"
                                    className="instance-355_6574"
                                ></RatingStarFill>
                            )}
                            <p
                                id="355_6575"
                                className="paragraph-355_6575 fill-lightstatus-03on-status-03-355_5766-paragraph text-mobilecaption-l-strong-2_22040"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="355_6576"
                                    className="instance-355_6576"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6577"
                                    className="instance-355_6577"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6573 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
                {variant === "image" && size === "m (36)" && (
                    <div id="355_6578" className="stroke-wrapper-355_6578">
                        <div className="symbol-355_6578">
                            {iconbadge && (
                                <RatingStarFill
                                    id="355_6579"
                                    className="instance-355_6579"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="355_6580"
                                    className="instance-355_6580"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="355_6581"
                                    className="instance-355_6581"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-355_6578 stroke-lightneutralcontainer-soft-355_5767"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Avatar0;
