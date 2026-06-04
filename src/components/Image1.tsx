import RatingStarFill from "@/components/ratingstarfill";
import Counter0 from "@/components/counter0";
import Default from "@/components/default";
import UsersUserFill1 from "@/components/usersuserfill1";
import UsersUserFill0 from "@/components/usersuserfill0";
import UsersUserFill from "@/components/usersuserfill";
import "@/styles/Image1.css";
interface image1Props {
    notification?: boolean;
    actions?: boolean;
    iconbadge?: boolean;
    status?: boolean;
    variant?: string;
    size?: string;
    id?: string;
    className?: string;
}
const Image1 = (props: image1Props) => {
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
        <div className={`component-1268_58085 ${className}`} id={id}>
            <div id="1268_58085" className="symbol-1268_58085">
                {variant === "image" && size === "xss (16)" && (
                    <div id="1268_58086" className="stroke-wrapper-1268_58086">
                        <div className="symbol-1268_58086"></div>
                        <div className="stroke-1268_58086 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "xss (16)" && (
                    <div id="1268_58087" className="stroke-wrapper-1268_58087">
                        <div className="symbol-1268_58087 fill-lightstatus-03default-2_29140">
                            <p
                                id="1268_58088"
                                className="paragraph-1268_58088 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobilecaption-s-strong-2_25917"
                            >
                                {"Ш"}
                            </p>
                        </div>
                        <div className="stroke-1268_58087 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "s (24)" && (
                    <div id="1268_58089" className="stroke-wrapper-1268_58089">
                        <div className="symbol-1268_58089">
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58090"
                                    className="instance-1268_58090"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter0
                                    id="1268_58091"
                                    className="instance-1268_58091"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {notification && (
                                <Counter0
                                    id="1268_58092"
                                    className="instance-1268_58092"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58089 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "s (24)" && (
                    <div id="1268_58093" className="stroke-wrapper-1268_58093">
                        <div className="symbol-1268_58093 fill-lightstatus-03default-2_29140">
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58094"
                                    className="instance-1268_58094"
                                ></RatingStarFill>
                            )}
                            <p
                                id="1268_58095"
                                className="paragraph-1268_58095 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobilecaption-s-strong-2_25917"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter0
                                    id="1268_58096"
                                    className="instance-1268_58096"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {notification && (
                                <Counter0
                                    id="1268_58097"
                                    className="instance-1268_58097"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58093 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "m (32)" && (
                    <div id="1268_58098" className="stroke-wrapper-1268_58098">
                        <div className="symbol-1268_58098">
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58099"
                                    className="instance-1268_58099"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter0
                                    id="1268_58100"
                                    className="instance-1268_58100"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {notification && (
                                <Counter0
                                    id="1268_58101"
                                    className="instance-1268_58101"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58098 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "m (32)" && (
                    <div id="1268_58102" className="stroke-wrapper-1268_58102">
                        <div className="symbol-1268_58102 fill-lightstatus-03default-2_29140">
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58103"
                                    className="instance-1268_58103"
                                ></RatingStarFill>
                            )}
                            <p
                                id="1268_58104"
                                className="paragraph-1268_58104 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobilecaption-l-strong-2_25916"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter0
                                    id="1268_58105"
                                    className="instance-1268_58105"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {notification && (
                                <Counter0
                                    id="1268_58106"
                                    className="instance-1268_58106"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58102 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "l (40)" && (
                    <div id="1268_58107" className="stroke-wrapper-1268_58107">
                        <div className="symbol-1268_58107">
                            {notification && (
                                <Counter0
                                    id="1268_58108"
                                    className="instance-1268_58108"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58109"
                                    className="instance-1268_58109"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter0
                                    id="1268_58110"
                                    className="instance-1268_58110"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58107 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "l (40)" && (
                    <div id="1268_58111" className="stroke-wrapper-1268_58111">
                        <div className="symbol-1268_58111 fill-lightstatus-03default-2_29140">
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58112"
                                    className="instance-1268_58112"
                                ></RatingStarFill>
                            )}
                            <p
                                id="1268_58113"
                                className="paragraph-1268_58113 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobiledescription-m-strong-2_23418"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter0
                                    id="1268_58114"
                                    className="instance-1268_58114"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {notification && (
                                <Counter0
                                    id="1268_58115"
                                    className="instance-1268_58115"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58111 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "4xl (96)" && (
                    <div id="1268_58116" className="stroke-wrapper-1268_58116">
                        <div className="symbol-1268_58116">
                            {actions && (
                                <Default
                                    id="1268_58117"
                                    className="instance-1268_58117"
                                ></Default>
                            )}
                            {notification && (
                                <Counter0
                                    id="1268_58118"
                                    className="instance-1268_58118"
                                    size={"l (32)"}
                                    variant={"error"}
                                    disabled={"false"}
                                    label={`1`}
                                ></Counter0>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58119"
                                    className="instance-1268_58119"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter0
                                    id="1268_58120"
                                    className="instance-1268_58120"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58116 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "4xl (96)" && (
                    <div id="1268_58121" className="stroke-wrapper-1268_58121">
                        <div className="symbol-1268_58121 fill-lightstatus-03default-2_29140">
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58122"
                                    className="instance-1268_58122"
                                ></RatingStarFill>
                            )}
                            <p
                                id="1268_58123"
                                className="paragraph-1268_58123 fill-lightstatus-03on-status-03-2_29138-paragraph text-h2-2_14883"
                            >
                                {"ШМ"}
                            </p>
                            {actions && (
                                <Default
                                    id="1268_58124"
                                    className="instance-1268_58124"
                                ></Default>
                            )}
                            {status && (
                                <Counter0
                                    id="1268_58125"
                                    className="instance-1268_58125"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {notification && (
                                <Counter0
                                    id="1268_58126"
                                    className="instance-1268_58126"
                                    size={"l (32)"}
                                    variant={"error"}
                                    disabled={"false"}
                                    label={`1`}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58121 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "xss (16)" && (
                    <div id="1268_58127" className="stroke-wrapper-1268_58127">
                        <div className="symbol-1268_58127 fill-lightbgsurface3-2_29112">
                            <UsersUserFill1
                                id="1268_58128"
                                className="instance-1268_58128"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-1268_58127 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "s (24)" && (
                    <div id="1268_58129" className="stroke-wrapper-1268_58129">
                        <div className="symbol-1268_58129 fill-lightbgsurface3-2_29112">
                            {notification && (
                                <Counter0
                                    id="1268_58130"
                                    className="instance-1268_58130"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            <UsersUserFill1
                                id="1268_58131"
                                className="instance-1268_58131"
                            ></UsersUserFill1>
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58132"
                                    className="instance-1268_58132"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter0
                                    id="1268_58133"
                                    className="instance-1268_58133"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58129 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "m (32)" && (
                    <div id="1268_58134" className="stroke-wrapper-1268_58134">
                        <div className="symbol-1268_58134 fill-lightbgsurface3-2_29112">
                            {notification && (
                                <Counter0
                                    id="1268_58135"
                                    className="instance-1268_58135"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            <UsersUserFill0
                                id="1268_58136"
                                className="instance-1268_58136"
                            ></UsersUserFill0>
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58137"
                                    className="instance-1268_58137"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter0
                                    id="1268_58138"
                                    className="instance-1268_58138"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58134 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "l (40)" && (
                    <div id="1268_58139" className="stroke-wrapper-1268_58139">
                        <div className="symbol-1268_58139 fill-lightbgsurface3-2_29112">
                            {notification && (
                                <Counter0
                                    id="1268_58140"
                                    className="instance-1268_58140"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58141"
                                    className="instance-1268_58141"
                                ></RatingStarFill>
                            )}
                            <UsersUserFill0
                                id="1268_58142"
                                className="instance-1268_58142"
                            ></UsersUserFill0>
                            {status && (
                                <Counter0
                                    id="1268_58143"
                                    className="instance-1268_58143"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58139 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "4xl (96)" && (
                    <div id="1268_58144" className="stroke-wrapper-1268_58144">
                        <div className="symbol-1268_58144 fill-lightbgsurface3-2_29112">
                            {notification && (
                                <Counter0
                                    id="1268_58145"
                                    className="instance-1268_58145"
                                    size={"l (32)"}
                                    variant={"error"}
                                    disabled={"false"}
                                    label={`1`}
                                ></Counter0>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58146"
                                    className="instance-1268_58146"
                                ></RatingStarFill>
                            )}
                            {actions && (
                                <Default
                                    id="1268_58147"
                                    className="instance-1268_58147"
                                ></Default>
                            )}
                            <UsersUserFill
                                id="1268_58148"
                                className="instance-1268_58148"
                            ></UsersUserFill>
                            {status && (
                                <Counter0
                                    id="1268_58149"
                                    className="instance-1268_58149"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58144 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "xs (20)" && (
                    <div id="1268_58150" className="stroke-wrapper-1268_58150">
                        <div className="symbol-1268_58150"></div>
                        <div className="stroke-1268_58150 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "xs (20)" && (
                    <div id="1268_58151" className="stroke-wrapper-1268_58151">
                        <div className="symbol-1268_58151 fill-lightstatus-03default-2_29140">
                            <p
                                id="1268_58152"
                                className="paragraph-1268_58152 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobilecaption-s-strong-2_25917"
                            >
                                {"Ш"}
                            </p>
                        </div>
                        <div className="stroke-1268_58151 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "xs (20)" && (
                    <div id="1268_58153" className="stroke-wrapper-1268_58153">
                        <div className="symbol-1268_58153 fill-lightbgsurface3-2_29112">
                            <UsersUserFill1
                                id="1268_58154"
                                className="instance-1268_58154"
                            ></UsersUserFill1>
                        </div>
                        <div className="stroke-1268_58153 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "icon" && size === "xl (56)" && (
                    <div id="1268_58155" className="stroke-wrapper-1268_58155">
                        <div className="symbol-1268_58155 fill-lightbgsurface3-2_29112">
                            {notification && (
                                <Counter0
                                    id="1268_58156"
                                    className="instance-1268_58156"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58157"
                                    className="instance-1268_58157"
                                ></RatingStarFill>
                            )}
                            <UsersUserFill0
                                id="1268_58158"
                                className="instance-1268_58158"
                            ></UsersUserFill0>
                            {status && (
                                <Counter0
                                    id="1268_58159"
                                    className="instance-1268_58159"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58155 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "text" && size === "xl (56)" && (
                    <div id="1268_58160" className="stroke-wrapper-1268_58160">
                        <div className="symbol-1268_58160 fill-lightstatus-03default-2_29140">
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58161"
                                    className="instance-1268_58161"
                                ></RatingStarFill>
                            )}
                            <p
                                id="1268_58162"
                                className="paragraph-1268_58162 fill-lightstatus-03on-status-03-2_29138-paragraph text-mobilebody-l-strong-2_12679"
                            >
                                {"ШМ"}
                            </p>
                            {status && (
                                <Counter0
                                    id="1268_58163"
                                    className="instance-1268_58163"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {notification && (
                                <Counter0
                                    id="1268_58164"
                                    className="instance-1268_58164"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58160 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
                {variant === "image" && size === "xl (56)" && (
                    <div id="1268_58165" className="stroke-wrapper-1268_58165">
                        <div className="symbol-1268_58165">
                            {notification && (
                                <Counter0
                                    id="1268_58166"
                                    className="instance-1268_58166"
                                    size={"xss (6)"}
                                    variant={"error"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                            {iconbadge && (
                                <RatingStarFill
                                    id="1268_58167"
                                    className="instance-1268_58167"
                                ></RatingStarFill>
                            )}
                            {status && (
                                <Counter0
                                    id="1268_58168"
                                    className="instance-1268_58168"
                                    size={"xss (6)"}
                                    variant={"success"}
                                    disabled={"false"}
                                ></Counter0>
                            )}
                        </div>
                        <div className="stroke-1268_58165 stroke-lightneutralcontainer-soft-2_29145"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Image1;
