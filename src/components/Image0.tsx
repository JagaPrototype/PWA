import RatingStarFill from "@/components/ratingstarfill";
import Counter from "@/components/counter";
import Default from "@/components/default";
import UsersUserFill1 from "@/components/usersuserfill1";
import UsersUserFill0 from "@/components/usersuserfill0";
import UsersUserFill from "@/components/usersuserfill";
import "@/styles/Image0.css";
interface image0Props {
    notification?: boolean;
    actions?: boolean;
    iconbadge?: boolean;
    status?: boolean;
    variant?: string;
    size?: string;
    id?: string;
    className?: string;
}
const Image0 = (props: image0Props) => {
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
        <div className={`component-2_12762 ${className}`} id={id}>
            <div id="2_12762" className="symbol-2_12762">
                {variant === "image" && size === "xss (16)" && (
                    <div id="2_12763" className="stroke-wrapper-2_12763">
                        <div className="symbol-2_12763"></div>
                        <div className="stroke-2_12763 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "xss (16)" && (
                    <div id="2_12764" className="stroke-wrapper-2_12764">
                        <div className="symbol-2_12764 fill-lightstatus-03default-2_29140">
                            <p
                                id="2_12765"
                                className="paragraph-2_12765 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobilecaption-s-strong-2_29080"
                            >
                                {"Ш"}
                            </p>
                        </div>
                        <div className="stroke-2_12764 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "s (24)" && (
                    <div id="2_12766" className="stroke-wrapper-2_12766">
                        <div className="symbol-2_12766">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12767"
                                    className="instance-2_12767"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_12768"
                                    className="instance-2_12768"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_12769"
                                    className="instance-2_12769"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12766 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "s (24)" && (
                    <div id="2_12770" className="stroke-wrapper-2_12770">
                        <div className="symbol-2_12770 fill-lightstatus-03default-2_29140">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12771"
                                    className="instance-2_12771"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_12772"
                                className="paragraph-2_12772 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobilecaption-s-strong-2_29080"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="2_12773"
                                    className="instance-2_12773"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_12774"
                                    className="instance-2_12774"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12770 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "m (32)" && (
                    <div id="2_12775" className="stroke-wrapper-2_12775">
                        <div className="symbol-2_12775">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12776"
                                    className="instance-2_12776"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_12777"
                                    className="instance-2_12777"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_12778"
                                    className="instance-2_12778"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12775 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "m (32)" && (
                    <div id="2_12779" className="stroke-wrapper-2_12779">
                        <div className="symbol-2_12779 fill-lightstatus-03default-2_29140">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12780"
                                    className="instance-2_12780"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_12781"
                                className="paragraph-2_12781 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobilecaption-l-strong-2_29078"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="2_12782"
                                    className="instance-2_12782"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_12783"
                                    className="instance-2_12783"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12779 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "l (40)" && (
                    <div id="2_12784" className="stroke-wrapper-2_12784">
                        <div className="symbol-2_12784">
                            {notification && (
                                <Counter
                                    id="2_12785"
                                    className="instance-2_12785"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12786"
                                    className="instance-2_12786"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_12787"
                                    className="instance-2_12787"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12784 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "l (40)" && (
                    <div id="2_12788" className="stroke-wrapper-2_12788">
                        <div className="symbol-2_12788 fill-lightstatus-03default-2_29140">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12789"
                                    className="instance-2_12789"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_12790"
                                className="paragraph-2_12790 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobiledescription-m-strong-2_29083"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="2_12791"
                                    className="instance-2_12791"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_12792"
                                    className="instance-2_12792"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12788 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "4xl (96)" && (
                    <div id="2_12793" className="stroke-wrapper-2_12793">
                        <div className="symbol-2_12793">
                            {actions && (
                                <Default
                                    id="2_12794"
                                    className="instance-2_12794"
                                ></Default>
                            )}
                            {notification && (
                                <Counter
                                    id="2_12795"
                                    className="instance-2_12795"
                                    size={"l (32)"}
                                    variant={"error"}
                                    label={`1`}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12796"
                                    className="instance-2_12796"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_12797"
                                    className="instance-2_12797"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12793 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "4xl (96)" && (
                    <div id="2_12798" className="stroke-wrapper-2_12798">
                        <div className="symbol-2_12798 fill-lightstatus-03default-2_29140">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12799"
                                    className="instance-2_12799"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_12800"
                                className="paragraph-2_12800 fill-lightstatus-03on-status-03-2_29138-paragraph text-h2-2_19651"
                            >
                                {"ШМ"}
                            </p>
                            {actions && (
                                <Default
                                    id="2_12801"
                                    className="instance-2_12801"
                                ></Default>
                            )}
                            {status && (
                                <Counter
                                    id="2_12802"
                                    className="instance-2_12802"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_12803"
                                    className="instance-2_12803"
                                    size={"l (32)"}
                                    variant={"error"}
                                    label={`1`}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12798 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "xss (16)" && (
                    <div id="2_12804" className="stroke-wrapper-2_12804">
                        <div className="symbol-2_12804 fill-lightbgsurface3-2_29144">
                            <UsersUserFill1
                                id="2_12805"
                                className="instance-2_12805"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-2_12804 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "s (24)" && (
                    <div id="2_12806" className="stroke-wrapper-2_12806">
                        <div className="symbol-2_12806 fill-lightbgsurface3-2_29144">
                            {notification && (
                                <Counter
                                    id="2_12807"
                                    className="instance-2_12807"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            <UsersUserFill1
                                id="2_12808"
                                className="instance-2_12808"
                            ></UsersUserFill1>
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12809"
                                    className="instance-2_12809"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_12810"
                                    className="instance-2_12810"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12806 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "m (32)" && (
                    <div id="2_12811" className="stroke-wrapper-2_12811">
                        <div className="symbol-2_12811 fill-lightbgsurface3-2_29144">
                            {notification && (
                                <Counter
                                    id="2_12812"
                                    className="instance-2_12812"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            <UsersUserFill0
                                id="2_12813"
                                className="instance-2_12813"
                            ></UsersUserFill0>
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12814"
                                    className="instance-2_12814"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_12815"
                                    className="instance-2_12815"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12811 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "l (40)" && (
                    <div id="2_12816" className="stroke-wrapper-2_12816">
                        <div className="symbol-2_12816 fill-lightbgsurface3-2_29144">
                            {notification && (
                                <Counter
                                    id="2_12817"
                                    className="instance-2_12817"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12818"
                                    className="instance-2_12818"
                                ></RatingStarFill>
                            )}
                            <UsersUserFill0
                                id="2_12819"
                                className="instance-2_12819"
                            ></UsersUserFill0>
                            {status && (
                                <Counter
                                    id="2_12820"
                                    className="instance-2_12820"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12816 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "4xl (96)" && (
                    <div id="2_12821" className="stroke-wrapper-2_12821">
                        <div className="symbol-2_12821 fill-lightbgsurface3-2_29144">
                            {notification && (
                                <Counter
                                    id="2_12822"
                                    className="instance-2_12822"
                                    size={"l (32)"}
                                    variant={"error"}
                                    label={`1`}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12823"
                                    className="instance-2_12823"
                                ></RatingStarFill>
                            )}
                            {actions && (
                                <Default
                                    id="2_12824"
                                    className="instance-2_12824"
                                ></Default>
                            )}
                            <UsersUserFill
                                id="2_12825"
                                className="instance-2_12825"
                            ></UsersUserFill>
                            {status && (
                                <Counter
                                    id="2_12826"
                                    className="instance-2_12826"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12821 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "xs (20)" && (
                    <div id="2_12827" className="stroke-wrapper-2_12827">
                        <div className="symbol-2_12827"></div>
                        <div className="stroke-2_12827 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "xs (20)" && (
                    <div id="2_12828" className="stroke-wrapper-2_12828">
                        <div className="symbol-2_12828 fill-lightstatus-03default-2_29140">
                            <p
                                id="2_12829"
                                className="paragraph-2_12829 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobilecaption-s-strong-2_29080"
                            >
                                {"Ш"}
                            </p>
                        </div>
                        <div className="stroke-2_12828 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "xs (20)" && (
                    <div id="2_12830" className="stroke-wrapper-2_12830">
                        <div className="symbol-2_12830 fill-lightbgsurface3-2_29144">
                            <UsersUserFill1
                                id="2_12831"
                                className="instance-2_12831"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-2_12830 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "xl (56)" && (
                    <div id="2_12832" className="stroke-wrapper-2_12832">
                        <div className="symbol-2_12832 fill-lightbgsurface3-2_29144">
                            {notification && (
                                <Counter
                                    id="2_12833"
                                    className="instance-2_12833"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12834"
                                    className="instance-2_12834"
                                ></RatingStarFill>
                            )}
                            <UsersUserFill0
                                id="2_12835"
                                className="instance-2_12835"
                            ></UsersUserFill0>
                            {status && (
                                <Counter
                                    id="2_12836"
                                    className="instance-2_12836"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12832 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "xl (56)" && (
                    <div id="2_12837" className="stroke-wrapper-2_12837">
                        <div className="symbol-2_12837 fill-lightstatus-03default-2_29140">
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12838"
                                    className="instance-2_12838"
                                ></RatingStarFill>
                            )}
                            <p
                                id="2_12839"
                                className="paragraph-2_12839 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobilebody-l-strong-2_29074"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter
                                    id="2_12840"
                                    className="instance-2_12840"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                            {notification && (
                                <Counter
                                    id="2_12841"
                                    className="instance-2_12841"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12837 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "xl (56)" && (
                    <div id="2_12842" className="stroke-wrapper-2_12842">
                        <div className="symbol-2_12842">
                            {notification && (
                                <Counter
                                    id="2_12843"
                                    className="instance-2_12843"
                                    size={"xss (6)"}
                                    variant={"error"}
                                ></Counter>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="2_12844"
                                    className="instance-2_12844"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter
                                    id="2_12845"
                                    className="instance-2_12845"
                                    size={"xss (6)"}
                                    variant={"success"}
                                ></Counter>
                            )}
                        </div>
                        <div className="stroke-2_12842 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Image0;
