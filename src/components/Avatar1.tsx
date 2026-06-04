import RatingStarFill from "@/components/ratingstarfill";
import Counter3 from "@/components/counter3";
import Default from "@/components/default";
import UsersUserFill1 from "@/components/usersuserfill1";
import UsersUserFill0 from "@/components/usersuserfill0";
import UsersUserFill from "@/components/usersuserfill";
import "@/styles/Avatar1.css";
interface avatar1Props {
    notification?: boolean;
    actions?: boolean;
    iconbadge?: boolean;
    status?: boolean;
    variant?: string;
    size?: string;
    id?: string;
    className?: string;
    text_2_22976?: string;
    instance_2_22977?: string;
    text_2_22983?: string;
    text_2_22992?: string;
    text_2_23001?: string;
    text_2_23040?: string;
    text_2_23050?: string;
}
const Avatar1 = (props: avatar1Props) => {
    const {
        notification = false,
        actions = false,
        iconbadge = false,
        status = false,
        variant,
        size,
        id,
        className = "",
        text_2_22976,
        instance_2_22977,
        text_2_22983,
        text_2_22992,
        text_2_23001,
        text_2_23040,
        text_2_23050
    } = props;

    return (
        <div className={`component-2_22973 ${className}`} id={id}>
            <div id="2_22973" className="symbol-2_22973">
                {variant === "image" && size === "3xs (16)" && (
                    <div id="2_22974" className="stroke-wrapper-2_22974">
                        <div className="symbol-2_22974"></div>
                        <div className="stroke-2_22974 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "text" && size === "3xs (16)" && (
                    <div id="2_22975" className="stroke-wrapper-2_22975">
                        <div className="symbol-2_22975 fill-lightstatus-03default-2_23167 fill-lightfgmuted-2_2271">
                            <p
                                id="2_22976"
                                className="paragraph-2_22976 fill-lightstatus-03on-status-03-2_23166-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {text_2_22976 ?? "Ш"}
                            </p>
                        </div>
                        <div className="stroke-2_22975 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "image" && size === "xs (24)" && (
                    <div id="2_22977" className="stroke-wrapper-2_22977">
                        <div className="symbol-2_22977">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_22978"
                                    className="instance-2_22978"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter3
                                    id="2_22979"
                                    className="instance-2_22979"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                            {notification && (
                                <Counter3
                                    id="2_22980"
                                    className="instance-2_22980"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_22977 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "text" && size === "xs (24)" && (
                    <div id="2_22981" className="stroke-wrapper-2_22981">
                        <div className="symbol-2_22981 fill-lightstatus-03default-2_23167 fill-lightfgmuted-2_2271">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_22982"
                                    className="instance-2_22982"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_22983"
                                className="paragraph-2_22983 fill-lightstatus-03on-status-03-2_23166-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {text_2_22983 ?? "ШМ"}
                            </p>
                            {status && (
                                <Counter3
                                    id="2_22984"
                                    className="instance-2_22984"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                            {notification && (
                                <Counter3
                                    id="2_22985"
                                    className="instance-2_22985"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_22981 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "image" && size === "s (32)" && (
                    <div id="2_22986" className="stroke-wrapper-2_22986">
                        <div className="symbol-2_22986">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_22987"
                                    className="instance-2_22987"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter3
                                    id="2_22988"
                                    className="instance-2_22988"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                            {notification && (
                                <Counter3
                                    id="2_22989"
                                    className="instance-2_22989"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_22986 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "text" && size === "s (32)" && (
                    <div id="2_22990" className="stroke-wrapper-2_22990">
                        <div className="symbol-2_22990 fill-lightstatus-03default-2_23167 fill-lightfgmuted-2_2271">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_22991"
                                    className="instance-2_22991"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_22992"
                                className="paragraph-2_22992 fill-lightstatus-03on-status-03-2_23166-paragraph text-mobilecaption-l-strong-2_22040"
                            >
                                {text_2_22992 ?? "ШМ"}
                            </p>
                            {status && (
                                <Counter3
                                    id="2_22993"
                                    className="instance-2_22993"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                            {notification && (
                                <Counter3
                                    id="2_22994"
                                    className="instance-2_22994"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_22990 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "image" && size === "l (40)" && (
                    <div id="2_22995" className="stroke-wrapper-2_22995">
                        <div className="symbol-2_22995">
                            {notification && (
                                <Counter3
                                    id="2_22996"
                                    className="instance-2_22996"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_22997"
                                    className="instance-2_22997"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter3
                                    id="2_22998"
                                    className="instance-2_22998"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_22995 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "text" && size === "l (40)" && (
                    <div id="2_22999" className="stroke-wrapper-2_22999">
                        <div className="symbol-2_22999 fill-lightstatus-03default-2_23167 fill-lightfgmuted-2_2271">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_23000"
                                    className="instance-2_23000"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_23001"
                                className="paragraph-2_23001 fill-lightstatus-03on-status-03-2_23166-paragraph text-mobiledescription-m-strong-2_20377"
                            >
                                {text_2_23001 ?? "ШМ"}
                            </p>
                            {status && (
                                <Counter3
                                    id="2_23002"
                                    className="instance-2_23002"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                            {notification && (
                                <Counter3
                                    id="2_23003"
                                    className="instance-2_23003"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_22999 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "image" && size === "4xl (96)" && (
                    <div id="2_23004" className="stroke-wrapper-2_23004">
                        <div className="symbol-2_23004">
                            {actions && (
                                <Default
                                    id="2_23005"
                                    className="instance-2_23005"
                                ></Default>
                            )}
                            {notification && (
                                <Counter3
                                    id="2_23006"
                                    className="instance-2_23006"
                                    size={"l (32)"}
                                    variant={"error"}
                                    label={`1`}
                                ></Counter3>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_23007"
                                    className="instance-2_23007"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter3
                                    id="2_23008"
                                    className="instance-2_23008"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_23004 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "text" && size === "4xl (96)" && (
                    <div id="2_23009" className="stroke-wrapper-2_23009">
                        <div className="symbol-2_23009 fill-lightstatus-03default-2_23167">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_23010"
                                    className="instance-2_23010"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_23011"
                                className="paragraph-2_23011 fill-lightstatus-03on-status-03-2_23166-paragraph text-h2-2_20360"
                            >
                                {"ШМ"}
                            </p>
                            {actions && (
                                <Default
                                    id="2_23012"
                                    className="instance-2_23012"
                                ></Default>
                            )}
                            {status && (
                                <Counter3
                                    id="2_23013"
                                    className="instance-2_23013"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                            {notification && (
                                <Counter3
                                    id="2_23014"
                                    className="instance-2_23014"
                                    size={"l (32)"}
                                    variant={"error"}
                                    label={`1`}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_23009 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "icon" && size === "3xs (16)" && (
                    <div id="2_23015" className="stroke-wrapper-2_23015">
                        <div className="symbol-2_23015 fill-lightbgsurface3-2_22053">
                            <UsersUserFill1
                                id="2_23016"
                                className="instance-2_23016"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-2_23015 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "icon" && size === "xs (24)" && (
                    <div id="2_23017" className="stroke-wrapper-2_23017">
                        <div className="symbol-2_23017 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter3
                                    id="2_23018"
                                    className="instance-2_23018"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                            <UsersUserFill1
                                id="2_23019"
                                className="instance-2_23019"
                            ></UsersUserFill1>
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_23020"
                                    className="instance-2_23020"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter3
                                    id="2_23021"
                                    className="instance-2_23021"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_23017 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "icon" && size === "s (32)" && (
                    <div id="2_23022" className="stroke-wrapper-2_23022">
                        <div className="symbol-2_23022 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter3
                                    id="2_23023"
                                    className="instance-2_23023"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                            <UsersUserFill0
                                id="2_23024"
                                className="instance-2_23024"
                            ></UsersUserFill0>
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_23025"
                                    className="instance-2_23025"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter3
                                    id="2_23026"
                                    className="instance-2_23026"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_23022 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "icon" && size === "l (40)" && (
                    <div id="2_23027" className="stroke-wrapper-2_23027">
                        <div className="symbol-2_23027 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter3
                                    id="2_23028"
                                    className="instance-2_23028"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_23029"
                                    className="instance-2_23029"
                                ></RatingStarFill>
                            )}
                            <UsersUserFill0
                                id="2_23030"
                                className="instance-2_23030"
                            ></UsersUserFill0>
                            {status && (
                                <Counter3
                                    id="2_23031"
                                    className="instance-2_23031"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_23027 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "icon" && size === "4xl (96)" && (
                    <div id="2_23032" className="stroke-wrapper-2_23032">
                        <div className="symbol-2_23032 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter3
                                    id="2_23033"
                                    className="instance-2_23033"
                                    size={"l (32)"}
                                    variant={"error"}
                                    label={`1`}
                                ></Counter3>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_23034"
                                    className="instance-2_23034"
                                ></RatingStarFill>
                            )}
                            {actions && (
                                <Default
                                    id="2_23035"
                                    className="instance-2_23035"
                                ></Default>
                            )}
                            <UsersUserFill
                                id="2_23036"
                                className="instance-2_23036"
                            ></UsersUserFill>
                            {status && (
                                <Counter3
                                    id="2_23037"
                                    className="instance-2_23037"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_23032 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "image" && size === "2xs (20)" && (
                    <div id="2_23038" className="stroke-wrapper-2_23038">
                        <div className="symbol-2_23038"></div>
                        <div className="stroke-2_23038 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "text" && size === "2xs (20)" && (
                    <div id="2_23039" className="stroke-wrapper-2_23039">
                        <div className="symbol-2_23039 fill-lightstatus-03default-2_23167 fill-lightfgmuted-2_2271">
                            <p
                                id="2_23040"
                                className="paragraph-2_23040 fill-lightstatus-03on-status-03-2_23166-paragraph text-mobilecaption-s-strong-2_22041"
                            >
                                {text_2_23040 ?? "Ш"}
                            </p>
                        </div>
                        <div className="stroke-2_23039 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "icon" && size === "2xs (20)" && (
                    <div id="2_23041" className="stroke-wrapper-2_23041">
                        <div className="symbol-2_23041 fill-lightbgsurface3-2_22053">
                            <UsersUserFill1
                                id="2_23042"
                                className="instance-2_23042"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-2_23041 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "icon" && size === "m (36)" && (
                    <div id="2_23043" className="stroke-wrapper-2_23043">
                        <div className="symbol-2_23043 fill-lightbgsurface3-2_22053">
                            {notification && (
                                <Counter3
                                    id="2_23044"
                                    className="instance-2_23044"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                            <UsersUserFill0
                                id="2_23045"
                                className="instance-2_23045"
                            ></UsersUserFill0>
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_23046"
                                    className="instance-2_23046"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter3
                                    id="2_23047"
                                    className="instance-2_23047"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_23043 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "text" && size === "m (36)" && (
                    <div id="2_23048" className="stroke-wrapper-2_23048">
                        <div className="symbol-2_23048 fill-lightstatus-03default-2_23167 fill-lightfgmuted-2_2271">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_23049"
                                    className="instance-2_23049"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_23050"
                                className="paragraph-2_23050 fill-lightstatus-03on-status-03-2_23166-paragraph text-mobilecaption-l-strong-2_22040"
                            >
                                {text_2_23050 ?? "ШМ"}
                            </p>
                            {status && (
                                <Counter3
                                    id="2_23051"
                                    className="instance-2_23051"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                            {notification && (
                                <Counter3
                                    id="2_23052"
                                    className="instance-2_23052"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_23048 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
                {variant === "image" && size === "m (36)" && (
                    <div id="2_23053" className="stroke-wrapper-2_23053">
                        <div className="symbol-2_23053">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_23054"
                                    className="instance-2_23054"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter3
                                    id="2_23055"
                                    className="instance-2_23055"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter3>
                            )}
                            {notification && (
                                <Counter3
                                    id="2_23056"
                                    className="instance-2_23056"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter3>
                            )}
                        </div>
                        <div className="stroke-2_23053 stroke-lightneutralcontainer-soft-2_2301"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Avatar1;
