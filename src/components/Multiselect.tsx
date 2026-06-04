import InputelementsLabel from "@/components/inputelementslabel";
import UsersUser from "@/components/usersuser";
import NavigationChevronright2 from "@/components/navigationchevronright2";
import InputelementsHint0 from "@/components/inputelementshint0";
import UsersUser0 from "@/components/usersuser0";
import NavigationChevronright1 from "@/components/navigationchevronright1";
import MultiselectLabelgroup from "@/components/multiselectlabelgroup";
import EditorHashtag from "@/components/editorhashtag";
import NavigationChevronrightmini from "@/components/navigationchevronrightmini";
import "@/styles/Multiselect.css";
interface multiselectProps {
    hint?: boolean;
    label?: boolean;
    iconLeft?: boolean;
    iconLeft20?: string;
    iconLeft24?: string;
    сhevron24?: string;
    chevron20?: string;
    type?: string;
    size?: string;
    state?: string;
    filled?: string;
    id?: string;
    className?: string;
}
const Multiselect = (props: multiselectProps) => {
    const {
        hint = true,
        label = true,
        iconLeft = false,
        iconLeft20 = "Component_58_11469",
        iconLeft24 = "Component_58_11536",
        сhevron24 = "Component_2_30669",
        chevron20 = "Component_58_10380",
        type,
        size,
        state,
        filled,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-4_30917 ${className}`} id={id}>
            <div id="4_30917" className="symbol-4_30917">
                {type === "label+placeholder" &&
                    size === "l" &&
                    state === "default" &&
                    filled === "false" && (
                        <div id="4_30918" className="symbol-4_30918">
                            {label && (
                                <InputelementsLabel
                                    id="4_30919"
                                    className="instance-4_30919"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_30920"
                                className="stroke-wrapper-4_30920"
                            >
                                <div className="frame-4_30920 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_30920">
                                        {iconLeft && (
                                            <UsersUser
                                                id="4_30921"
                                                className="instance-4_30921"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="4_30922"
                                            className="frame-4_30922"
                                        >
                                            <div className="frame-content-4_30922">
                                                <p
                                                    id="4_30923"
                                                    className="paragraph-4_30923 fill-lightfgmuted-2_2271-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_30924"
                                            className="instance-4_30924"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_30920 stroke-lightneutralcontainer-default-4_31857"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_30925"
                                    className="instance-4_30925"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "xl" &&
                    state === "default" &&
                    filled === "false" && (
                        <div id="4_30926" className="symbol-4_30926">
                            <div
                                id="4_30927"
                                className="stroke-wrapper-4_30927"
                            >
                                <div className="frame-4_30927 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_30927">
                                        {iconLeft && (
                                            <UsersUser
                                                id="4_30928"
                                                className="instance-4_30928"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="4_30929"
                                            className="frame-4_30929"
                                        >
                                            <div className="frame-content-4_30929">
                                                <InputelementsLabel
                                                    id="4_30930"
                                                    className="instance-4_30930"
                                                    size={"l"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                                <div
                                                    id="4_30931"
                                                    className="frame-4_30931"
                                                >
                                                    <div className="frame-content-4_30931">
                                                        <p
                                                            id="4_30932"
                                                            className="paragraph-4_30932 fill-lightfgmuted-2_2271-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Placeholder text"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_30933"
                                            className="instance-4_30933"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_30927 stroke-lightneutralcontainer-default-4_31857"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_30934"
                                    className="instance-4_30934"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "m" &&
                    state === "default" &&
                    filled === "false" && (
                        <div id="4_30935" className="symbol-4_30935">
                            {label && (
                                <InputelementsLabel
                                    id="4_30936"
                                    className="instance-4_30936"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_30937"
                                className="stroke-wrapper-4_30937"
                            >
                                <div className="frame-4_30937 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_30937">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="4_30938"
                                                className="instance-4_30938"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="4_30939"
                                            className="frame-4_30939"
                                        >
                                            <div className="frame-content-4_30939">
                                                <p
                                                    id="4_30940"
                                                    className="paragraph-4_30940 fill-lightfgmuted-2_2271-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        <NavigationChevronright1
                                            id="4_30941"
                                            className="instance-4_30941"
                                        ></NavigationChevronright1>
                                    </div>
                                </div>
                                <div className="stroke-4_30937 stroke-lightneutralcontainer-default-4_31857"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_30942"
                                    className="instance-4_30942"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "m" &&
                    state === "default" &&
                    filled === "true" && (
                        <div id="4_30943" className="symbol-4_30943">
                            {label && (
                                <InputelementsLabel
                                    id="4_30944"
                                    className="instance-4_30944"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_30945"
                                className="stroke-wrapper-4_30945"
                            >
                                <div className="frame-4_30945 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_30945">
                                        {iconLeft && (
                                            <div
                                                id="4_30946"
                                                className="frame-4_30946"
                                            >
                                                <UsersUser0
                                                    id="4_30947"
                                                    className="instance-4_30947"
                                                ></UsersUser0>
                                            </div>
                                        )}
                                        <MultiselectLabelgroup
                                            id="4_30948"
                                            className="instance-4_30948"
                                            disabled={"false"}
                                        ></MultiselectLabelgroup>
                                        <div
                                            id="4_30949"
                                            className="frame-4_30949"
                                        >
                                            <NavigationChevronright1
                                                id="4_30950"
                                                className="instance-4_30950"
                                            ></NavigationChevronright1>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-4_30945 stroke-lightneutralcontainer-default-4_31857"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_30951"
                                    className="instance-4_30951"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "m" &&
                    state === "disabled" &&
                    filled === "false" && (
                        <div id="4_30952" className="symbol-4_30952">
                            {label && (
                                <InputelementsLabel
                                    id="4_30953"
                                    className="instance-4_30953"
                                    size={"m"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_30954"
                                className="stroke-wrapper-4_30954"
                            >
                                <div className="frame-4_30954 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-4_30954">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="4_30955"
                                                className="instance-4_30955"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="4_30956"
                                            className="frame-4_30956"
                                        >
                                            <div className="frame-content-4_30956">
                                                <p
                                                    id="4_30957"
                                                    className="paragraph-4_30957 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        <NavigationChevronright1
                                            id="4_30958"
                                            className="instance-4_30958"
                                        ></NavigationChevronright1>
                                    </div>
                                </div>
                                <div className="stroke-4_30954 stroke-lightneutralcontainer-soft-4_31858"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_30959"
                                    className="instance-4_30959"
                                    state={"disabled"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "m" &&
                    state === "disabled" &&
                    filled === "true" && (
                        <div id="4_30960" className="symbol-4_30960">
                            {label && (
                                <InputelementsLabel
                                    id="4_30961"
                                    className="instance-4_30961"
                                    size={"m"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_30962"
                                className="stroke-wrapper-4_30962"
                            >
                                <div className="frame-4_30962 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-4_30962">
                                        {iconLeft && (
                                            <div
                                                id="4_30963"
                                                className="frame-4_30963"
                                            >
                                                <UsersUser0
                                                    id="4_30964"
                                                    className="instance-4_30964"
                                                ></UsersUser0>
                                            </div>
                                        )}
                                        <MultiselectLabelgroup
                                            id="4_30965"
                                            className="instance-4_30965"
                                            disabled={"true"}
                                        ></MultiselectLabelgroup>
                                        <div
                                            id="4_30966"
                                            className="frame-4_30966"
                                        >
                                            <NavigationChevronright1
                                                id="4_30967"
                                                className="instance-4_30967"
                                            ></NavigationChevronright1>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-4_30962 stroke-lightneutralcontainer-soft-4_31858"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_30968"
                                    className="instance-4_30968"
                                    state={"disabled"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "m" &&
                    state === "valid" &&
                    filled === "false" && (
                        <div id="4_30969" className="symbol-4_30969">
                            {label && (
                                <InputelementsLabel
                                    id="4_30970"
                                    className="instance-4_30970"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_30971"
                                className="stroke-wrapper-4_30971"
                            >
                                <div className="frame-4_30971 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_30971">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="4_30972"
                                                className="instance-4_30972"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="4_30973"
                                            className="frame-4_30973"
                                        >
                                            <div className="frame-content-4_30973">
                                                <p
                                                    id="4_30974"
                                                    className="paragraph-4_30974 fill-lightfgmuted-2_2271-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        <NavigationChevronright1
                                            id="4_30975"
                                            className="instance-4_30975"
                                        ></NavigationChevronright1>
                                    </div>
                                </div>
                                <div className="stroke-4_30971 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_30976"
                                    className="instance-4_30976"
                                    state={"success"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "m" &&
                    state === "valid" &&
                    filled === "true" && (
                        <div id="4_30977" className="symbol-4_30977">
                            {label && (
                                <InputelementsLabel
                                    id="4_30978"
                                    className="instance-4_30978"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_30979"
                                className="stroke-wrapper-4_30979"
                            >
                                <div className="frame-4_30979 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_30979">
                                        {iconLeft && (
                                            <div
                                                id="4_30980"
                                                className="frame-4_30980"
                                            >
                                                <UsersUser0
                                                    id="4_30981"
                                                    className="instance-4_30981"
                                                ></UsersUser0>
                                            </div>
                                        )}
                                        <MultiselectLabelgroup
                                            id="4_30982"
                                            className="instance-4_30982"
                                            disabled={"false"}
                                        ></MultiselectLabelgroup>
                                        <div
                                            id="4_30983"
                                            className="frame-4_30983"
                                        >
                                            <NavigationChevronright1
                                                id="4_30984"
                                                className="instance-4_30984"
                                            ></NavigationChevronright1>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-4_30979 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_30985"
                                    className="instance-4_30985"
                                    state={"success"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "m" &&
                    state === "error" &&
                    filled === "false" && (
                        <div id="4_30986" className="symbol-4_30986">
                            {label && (
                                <InputelementsLabel
                                    id="4_30987"
                                    className="instance-4_30987"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_30988"
                                className="stroke-wrapper-4_30988"
                            >
                                <div className="frame-4_30988 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-4_30988">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="4_30989"
                                                className="instance-4_30989"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="4_30990"
                                            className="frame-4_30990"
                                        >
                                            <div className="frame-content-4_30990">
                                                <p
                                                    id="4_30991"
                                                    className="paragraph-4_30991 fill-lightfgmuted-2_2271-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        <NavigationChevronright1
                                            id="4_30992"
                                            className="instance-4_30992"
                                        ></NavigationChevronright1>
                                    </div>
                                </div>
                                <div className="stroke-4_30988 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_30993"
                                    className="instance-4_30993"
                                    state={"error"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "m" &&
                    state === "error" &&
                    filled === "true" && (
                        <div id="4_30994" className="symbol-4_30994">
                            {label && (
                                <InputelementsLabel
                                    id="4_30995"
                                    className="instance-4_30995"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_30996"
                                className="stroke-wrapper-4_30996"
                            >
                                <div className="frame-4_30996 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-4_30996">
                                        {iconLeft && (
                                            <div
                                                id="4_30997"
                                                className="frame-4_30997"
                                            >
                                                <UsersUser0
                                                    id="4_30998"
                                                    className="instance-4_30998"
                                                ></UsersUser0>
                                            </div>
                                        )}
                                        <MultiselectLabelgroup
                                            id="4_30999"
                                            className="instance-4_30999"
                                            disabled={"false"}
                                        ></MultiselectLabelgroup>
                                        <div
                                            id="4_31000"
                                            className="frame-4_31000"
                                        >
                                            <NavigationChevronright1
                                                id="4_31001"
                                                className="instance-4_31001"
                                            ></NavigationChevronright1>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-4_30996 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31002"
                                    className="instance-4_31002"
                                    state={"error"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "m" &&
                    state === "focus" &&
                    filled === "false" && (
                        <div id="4_31003" className="symbol-4_31003">
                            {label && (
                                <InputelementsLabel
                                    id="4_31004"
                                    className="instance-4_31004"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31005"
                                className="stroke-wrapper-4_31005"
                            >
                                <div className="frame-4_31005 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31005">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="4_31006"
                                                className="instance-4_31006"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="4_31007"
                                            className="frame-4_31007"
                                        >
                                            <div className="frame-content-4_31007">
                                                <p
                                                    id="4_31008"
                                                    className="paragraph-4_31008 fill-lightfgmuted-2_2271-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        <NavigationChevronright1
                                            id="4_31009"
                                            className="instance-4_31009"
                                        ></NavigationChevronright1>
                                    </div>
                                </div>
                                <div className="stroke-4_31005 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31010"
                                    className="instance-4_31010"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "m" &&
                    state === "focus" &&
                    filled === "true" && (
                        <div id="4_31011" className="symbol-4_31011">
                            {label && (
                                <InputelementsLabel
                                    id="4_31012"
                                    className="instance-4_31012"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31013"
                                className="stroke-wrapper-4_31013"
                            >
                                <div className="frame-4_31013 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31013">
                                        {iconLeft && (
                                            <div
                                                id="4_31014"
                                                className="frame-4_31014"
                                            >
                                                <UsersUser0
                                                    id="4_31015"
                                                    className="instance-4_31015"
                                                ></UsersUser0>
                                            </div>
                                        )}
                                        <MultiselectLabelgroup
                                            id="4_31016"
                                            className="instance-4_31016"
                                            disabled={"false"}
                                        ></MultiselectLabelgroup>
                                        <div
                                            id="4_31017"
                                            className="frame-4_31017"
                                        >
                                            <NavigationChevronright1
                                                id="4_31018"
                                                className="instance-4_31018"
                                            ></NavigationChevronright1>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-4_31013 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31019"
                                    className="instance-4_31019"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "l" &&
                    state === "default" &&
                    filled === "true" && (
                        <div id="4_31020" className="symbol-4_31020">
                            {label && (
                                <InputelementsLabel
                                    id="4_31021"
                                    className="instance-4_31021"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31022"
                                className="stroke-wrapper-4_31022"
                            >
                                <div className="frame-4_31022 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31022">
                                        {iconLeft && (
                                            <div
                                                id="4_31023"
                                                className="frame-4_31023"
                                            >
                                                <div
                                                    id="4_31024"
                                                    className="instance-4_31024"
                                                    instance_2_2239={
                                                        "EditorHashtag"
                                                    }
                                                >
                                                    {iconLeft24 ===
                                                        "Component_4_31827" && (
                                                        <EditorHashtag id="4_31024"></EditorHashtag>
                                                    )}
                                                    {iconLeft24 ===
                                                        "Component_2_2239" && (
                                                        <UsersUser id="4_31024"></UsersUser>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        <MultiselectLabelgroup
                                            id="4_31025"
                                            className="instance-4_31025"
                                            disabled={"false"}
                                        ></MultiselectLabelgroup>
                                        <div
                                            id="4_31026"
                                            className="frame-4_31026"
                                        >
                                            <div
                                                id="4_31027"
                                                className="instance-4_31027"
                                                instance_2_23125={
                                                    "NavigationChevronrightmini"
                                                }
                                            >
                                                {сhevron24 ===
                                                    "Component_2_18847" && (
                                                    <NavigationChevronrightmini id="4_31027"></NavigationChevronrightmini>
                                                )}
                                                {сhevron24 ===
                                                    "Component_2_23125" && (
                                                    <NavigationChevronright2 id="4_31027"></NavigationChevronright2>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-4_31022 stroke-lightneutralcontainer-default-4_31857"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31028"
                                    className="instance-4_31028"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "xl" &&
                    state === "default" &&
                    filled === "true" && (
                        <div id="4_31029" className="symbol-4_31029">
                            <div
                                id="4_31030"
                                className="stroke-wrapper-4_31030"
                            >
                                <div className="frame-4_31030 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31030">
                                        {iconLeft && (
                                            <UsersUser
                                                id="4_31031"
                                                className="instance-4_31031"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="4_31032"
                                            className="frame-4_31032"
                                        >
                                            <div className="frame-content-4_31032">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="4_31033"
                                                        className="instance-4_31033"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <MultiselectLabelgroup
                                                    id="4_31034"
                                                    className="instance-4_31034"
                                                    disabled={"false"}
                                                ></MultiselectLabelgroup>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31035"
                                            className="instance-4_31035"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31030 stroke-lightneutralcontainer-default-4_31857"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31036"
                                    className="instance-4_31036"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "l" &&
                    state === "disabled" &&
                    filled === "false" && (
                        <div id="4_31037" className="symbol-4_31037">
                            {label && (
                                <InputelementsLabel
                                    id="4_31038"
                                    className="instance-4_31038"
                                    size={"l"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31039"
                                className="stroke-wrapper-4_31039"
                            >
                                <div className="frame-4_31039 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-4_31039">
                                        <UsersUser
                                            id="4_31040"
                                            className="instance-4_31040"
                                        ></UsersUser>
                                        <div
                                            id="4_31041"
                                            className="frame-4_31041"
                                        >
                                            <div className="frame-content-4_31041">
                                                <p
                                                    id="4_31042"
                                                    className="paragraph-4_31042 fill-lightfgdisabled-2_2294-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31043"
                                            className="instance-4_31043"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31039 stroke-lightneutralcontainer-soft-4_31858"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31044"
                                    className="instance-4_31044"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "xl" &&
                    state === "disabled" &&
                    filled === "false" && (
                        <div id="4_31045" className="symbol-4_31045">
                            <div
                                id="4_31046"
                                className="stroke-wrapper-4_31046"
                            >
                                <div className="frame-4_31046 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-4_31046">
                                        <UsersUser
                                            id="4_31047"
                                            className="instance-4_31047"
                                        ></UsersUser>
                                        <div
                                            id="4_31048"
                                            className="frame-4_31048"
                                        >
                                            <div className="frame-content-4_31048">
                                                <InputelementsLabel
                                                    id="4_31049"
                                                    className="instance-4_31049"
                                                    size={"l"}
                                                    disabled={"true"}
                                                    counter={false}
                                                    icon={true}
                                                    required={false}
                                                ></InputelementsLabel>
                                                <div
                                                    id="4_31050"
                                                    className="frame-4_31050"
                                                >
                                                    <div className="frame-content-4_31050">
                                                        <p
                                                            id="4_31051"
                                                            className="paragraph-4_31051 fill-lightfgdisabled-2_2294-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Placeholder text"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31052"
                                            className="instance-4_31052"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31046 stroke-lightneutralcontainer-soft-4_31858"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31053"
                                    className="instance-4_31053"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "l" &&
                    state === "disabled" &&
                    filled === "true" && (
                        <div id="4_31054" className="symbol-4_31054">
                            {label && (
                                <InputelementsLabel
                                    id="4_31055"
                                    className="instance-4_31055"
                                    size={"l"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31056"
                                className="stroke-wrapper-4_31056"
                            >
                                <div className="frame-4_31056 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-4_31056">
                                        <div
                                            id="4_31057"
                                            className="frame-4_31057"
                                        >
                                            <UsersUser
                                                id="4_31058"
                                                className="instance-4_31058"
                                            ></UsersUser>
                                        </div>
                                        <MultiselectLabelgroup
                                            id="4_31059"
                                            className="instance-4_31059"
                                            disabled={"true"}
                                        ></MultiselectLabelgroup>
                                        <div
                                            id="4_31060"
                                            className="frame-4_31060"
                                        >
                                            <NavigationChevronright2
                                                id="4_31061"
                                                className="instance-4_31061"
                                            ></NavigationChevronright2>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-4_31056 stroke-lightneutralcontainer-soft-4_31858"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31062"
                                    className="instance-4_31062"
                                    state={"disabled"}
                                    size={"l"}
                                    text={`Hint `}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "xl" &&
                    state === "disabled" &&
                    filled === "true" && (
                        <div id="4_31063" className="symbol-4_31063">
                            <div
                                id="4_31064"
                                className="stroke-wrapper-4_31064"
                            >
                                <div className="frame-4_31064 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-4_31064">
                                        <UsersUser
                                            id="4_31065"
                                            className="instance-4_31065"
                                        ></UsersUser>
                                        <div
                                            id="4_31066"
                                            className="frame-4_31066"
                                        >
                                            <div className="frame-content-4_31066">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="4_31067"
                                                        className="instance-4_31067"
                                                        size={"l"}
                                                        disabled={"true"}
                                                        counter={false}
                                                        icon={true}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <MultiselectLabelgroup
                                                    id="4_31068"
                                                    className="instance-4_31068"
                                                    disabled={"true"}
                                                ></MultiselectLabelgroup>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31069"
                                            className="instance-4_31069"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31064 stroke-lightneutralcontainer-soft-4_31858"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31070"
                                    className="instance-4_31070"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "l" &&
                    state === "focus" &&
                    filled === "false" && (
                        <div id="4_31071" className="symbol-4_31071">
                            {label && (
                                <InputelementsLabel
                                    id="4_31072"
                                    className="instance-4_31072"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31073"
                                className="stroke-wrapper-4_31073"
                            >
                                <div className="frame-4_31073 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31073">
                                        <UsersUser
                                            id="4_31074"
                                            className="instance-4_31074"
                                        ></UsersUser>
                                        <div
                                            id="4_31075"
                                            className="frame-4_31075"
                                        >
                                            <div className="frame-content-4_31075">
                                                <p
                                                    id="4_31076"
                                                    className="paragraph-4_31076 fill-lightfgmuted-2_2271-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31077"
                                            className="instance-4_31077"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31073 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31078"
                                    className="instance-4_31078"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "xl" &&
                    state === "focus" &&
                    filled === "false" && (
                        <div id="4_31079" className="symbol-4_31079">
                            <div
                                id="4_31080"
                                className="stroke-wrapper-4_31080"
                            >
                                <div className="frame-4_31080 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31080">
                                        <UsersUser
                                            id="4_31081"
                                            className="instance-4_31081"
                                        ></UsersUser>
                                        <div
                                            id="4_31082"
                                            className="frame-4_31082"
                                        >
                                            <div className="frame-content-4_31082">
                                                <InputelementsLabel
                                                    id="4_31083"
                                                    className="instance-4_31083"
                                                    size={"l"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                                <div
                                                    id="4_31084"
                                                    className="frame-4_31084"
                                                >
                                                    <div className="frame-content-4_31084">
                                                        <p
                                                            id="4_31085"
                                                            className="paragraph-4_31085 fill-lightfgmuted-2_2271-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Placeholder text"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31086"
                                            className="instance-4_31086"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31080 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31087"
                                    className="instance-4_31087"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "l" &&
                    state === "focus" &&
                    filled === "true" && (
                        <div id="4_31088" className="symbol-4_31088">
                            {label && (
                                <InputelementsLabel
                                    id="4_31089"
                                    className="instance-4_31089"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31090"
                                className="stroke-wrapper-4_31090"
                            >
                                <div className="frame-4_31090 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31090">
                                        <div
                                            id="4_31091"
                                            className="frame-4_31091"
                                        >
                                            <UsersUser
                                                id="4_31092"
                                                className="instance-4_31092"
                                            ></UsersUser>
                                        </div>
                                        <MultiselectLabelgroup
                                            id="4_31093"
                                            className="instance-4_31093"
                                            disabled={"false"}
                                        ></MultiselectLabelgroup>
                                        <div
                                            id="4_31094"
                                            className="frame-4_31094"
                                        >
                                            <NavigationChevronright2
                                                id="4_31095"
                                                className="instance-4_31095"
                                            ></NavigationChevronright2>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-4_31090 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31096"
                                    className="instance-4_31096"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "xl" &&
                    state === "focus" &&
                    filled === "true" && (
                        <div id="4_31097" className="symbol-4_31097">
                            <div
                                id="4_31098"
                                className="stroke-wrapper-4_31098"
                            >
                                <div className="frame-4_31098 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31098">
                                        <UsersUser
                                            id="4_31099"
                                            className="instance-4_31099"
                                        ></UsersUser>
                                        <div
                                            id="4_31100"
                                            className="frame-4_31100"
                                        >
                                            <div className="frame-content-4_31100">
                                                <InputelementsLabel
                                                    id="4_31101"
                                                    className="instance-4_31101"
                                                    size={"l"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                                <MultiselectLabelgroup
                                                    id="4_31102"
                                                    className="instance-4_31102"
                                                    disabled={"false"}
                                                ></MultiselectLabelgroup>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31103"
                                            className="instance-4_31103"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31098 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31104"
                                    className="instance-4_31104"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "l" &&
                    state === "error" &&
                    filled === "false" && (
                        <div id="4_31105" className="symbol-4_31105">
                            {label && (
                                <InputelementsLabel
                                    id="4_31106"
                                    className="instance-4_31106"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31107"
                                className="stroke-wrapper-4_31107"
                            >
                                <div className="frame-4_31107 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-4_31107">
                                        <UsersUser
                                            id="4_31108"
                                            className="instance-4_31108"
                                        ></UsersUser>
                                        <div
                                            id="4_31109"
                                            className="frame-4_31109"
                                        >
                                            <div className="frame-content-4_31109">
                                                <p
                                                    id="4_31110"
                                                    className="paragraph-4_31110 fill-lightfgmuted-2_2271-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31111"
                                            className="instance-4_31111"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31107 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31112"
                                    className="instance-4_31112"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "xl" &&
                    state === "error" &&
                    filled === "false" && (
                        <div id="4_31113" className="symbol-4_31113">
                            <div
                                id="4_31114"
                                className="stroke-wrapper-4_31114"
                            >
                                <div className="frame-4_31114 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-4_31114">
                                        <UsersUser
                                            id="4_31115"
                                            className="instance-4_31115"
                                        ></UsersUser>
                                        <div
                                            id="4_31116"
                                            className="frame-4_31116"
                                        >
                                            <div className="frame-content-4_31116">
                                                <InputelementsLabel
                                                    id="4_31117"
                                                    className="instance-4_31117"
                                                    size={"l"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                                <div
                                                    id="4_31118"
                                                    className="frame-4_31118"
                                                >
                                                    <div className="frame-content-4_31118">
                                                        <p
                                                            id="4_31119"
                                                            className="paragraph-4_31119 fill-lightfgmuted-2_2271-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Placeholder text"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31120"
                                            className="instance-4_31120"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31114 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31121"
                                    className="instance-4_31121"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "l" &&
                    state === "error" &&
                    filled === "true" && (
                        <div id="4_31122" className="symbol-4_31122">
                            {label && (
                                <InputelementsLabel
                                    id="4_31123"
                                    className="instance-4_31123"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31124"
                                className="stroke-wrapper-4_31124"
                            >
                                <div className="frame-4_31124 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-4_31124">
                                        <div
                                            id="4_31125"
                                            className="frame-4_31125"
                                        >
                                            <UsersUser
                                                id="4_31126"
                                                className="instance-4_31126"
                                            ></UsersUser>
                                        </div>
                                        <MultiselectLabelgroup
                                            id="4_31127"
                                            className="instance-4_31127"
                                            disabled={"false"}
                                        ></MultiselectLabelgroup>
                                        <div
                                            id="4_31128"
                                            className="frame-4_31128"
                                        >
                                            <NavigationChevronright2
                                                id="4_31129"
                                                className="instance-4_31129"
                                            ></NavigationChevronright2>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-4_31124 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31130"
                                    className="instance-4_31130"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "xl" &&
                    state === "error" &&
                    filled === "true" && (
                        <div id="4_31131" className="symbol-4_31131">
                            <div
                                id="4_31132"
                                className="stroke-wrapper-4_31132"
                            >
                                <div className="frame-4_31132 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-4_31132">
                                        <UsersUser
                                            id="4_31133"
                                            className="instance-4_31133"
                                        ></UsersUser>
                                        <div
                                            id="4_31134"
                                            className="frame-4_31134"
                                        >
                                            <div className="frame-content-4_31134">
                                                <InputelementsLabel
                                                    id="4_31135"
                                                    className="instance-4_31135"
                                                    size={"l"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                                <MultiselectLabelgroup
                                                    id="4_31136"
                                                    className="instance-4_31136"
                                                    disabled={"false"}
                                                ></MultiselectLabelgroup>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31137"
                                            className="instance-4_31137"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31132 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31138"
                                    className="instance-4_31138"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "l" &&
                    state === "valid" &&
                    filled === "false" && (
                        <div id="4_31139" className="symbol-4_31139">
                            {label && (
                                <InputelementsLabel
                                    id="4_31140"
                                    className="instance-4_31140"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31141"
                                className="stroke-wrapper-4_31141"
                            >
                                <div className="frame-4_31141 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31141">
                                        {iconLeft && (
                                            <UsersUser
                                                id="4_31142"
                                                className="instance-4_31142"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="4_31143"
                                            className="frame-4_31143"
                                        >
                                            <div className="frame-content-4_31143">
                                                <p
                                                    id="4_31144"
                                                    className="paragraph-4_31144 fill-lightfgmuted-2_2271-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31145"
                                            className="instance-4_31145"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31141 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31146"
                                    className="instance-4_31146"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "label+placeholder" &&
                    size === "xl" &&
                    state === "valid" &&
                    filled === "false" && (
                        <div id="4_31147" className="symbol-4_31147">
                            <div
                                id="4_31148"
                                className="stroke-wrapper-4_31148"
                            >
                                <div className="frame-4_31148 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31148">
                                        {iconLeft && (
                                            <UsersUser
                                                id="4_31149"
                                                className="instance-4_31149"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="4_31150"
                                            className="frame-4_31150"
                                        >
                                            <div className="frame-content-4_31150">
                                                <InputelementsLabel
                                                    id="4_31151"
                                                    className="instance-4_31151"
                                                    size={"l"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                                <div
                                                    id="4_31152"
                                                    className="frame-4_31152"
                                                >
                                                    <div className="frame-content-4_31152">
                                                        <p
                                                            id="4_31153"
                                                            className="paragraph-4_31153 fill-lightfgmuted-2_2271-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Placeholder text"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31154"
                                            className="instance-4_31154"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31148 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31155"
                                    className="instance-4_31155"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "l" &&
                    state === "valid" &&
                    filled === "true" && (
                        <div id="4_31156" className="symbol-4_31156">
                            {label && (
                                <InputelementsLabel
                                    id="4_31157"
                                    className="instance-4_31157"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31158"
                                className="stroke-wrapper-4_31158"
                            >
                                <div className="frame-4_31158 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31158">
                                        {iconLeft && (
                                            <div
                                                id="4_31159"
                                                className="frame-4_31159"
                                            >
                                                <UsersUser
                                                    id="4_31160"
                                                    className="instance-4_31160"
                                                ></UsersUser>
                                            </div>
                                        )}
                                        <MultiselectLabelgroup
                                            id="4_31161"
                                            className="instance-4_31161"
                                            disabled={"false"}
                                        ></MultiselectLabelgroup>
                                        <div
                                            id="4_31162"
                                            className="frame-4_31162"
                                        >
                                            <NavigationChevronright2
                                                id="4_31163"
                                                className="instance-4_31163"
                                            ></NavigationChevronright2>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-4_31158 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31164"
                                    className="instance-4_31164"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "filled" &&
                    size === "xl" &&
                    state === "valid" &&
                    filled === "true" && (
                        <div id="4_31165" className="symbol-4_31165">
                            <div
                                id="4_31166"
                                className="stroke-wrapper-4_31166"
                            >
                                <div className="frame-4_31166 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31166">
                                        {iconLeft && (
                                            <UsersUser
                                                id="4_31167"
                                                className="instance-4_31167"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="4_31168"
                                            className="frame-4_31168"
                                        >
                                            <div className="frame-content-4_31168">
                                                <InputelementsLabel
                                                    id="4_31169"
                                                    className="instance-4_31169"
                                                    size={"l"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                                <MultiselectLabelgroup
                                                    id="4_31170"
                                                    className="instance-4_31170"
                                                    disabled={"false"}
                                                ></MultiselectLabelgroup>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31171"
                                            className="instance-4_31171"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31166 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31172"
                                    className="instance-4_31172"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "xl" &&
                    state === "valid" &&
                    filled === "false" && (
                        <div id="4_31173" className="symbol-4_31173">
                            <div
                                id="4_31174"
                                className="stroke-wrapper-4_31174"
                            >
                                <div className="frame-4_31174 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31174">
                                        {iconLeft && (
                                            <UsersUser
                                                id="4_31175"
                                                className="instance-4_31175"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="4_31176"
                                            className="frame-4_31176"
                                        >
                                            <div className="frame-content-4_31176">
                                                <InputelementsLabel
                                                    id="4_31177"
                                                    className="instance-4_31177"
                                                    size={"xl"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31178"
                                            className="instance-4_31178"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31174 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31179"
                                    className="instance-4_31179"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "xl" &&
                    state === "error" &&
                    filled === "false" && (
                        <div id="4_31180" className="symbol-4_31180">
                            <div
                                id="4_31181"
                                className="stroke-wrapper-4_31181"
                            >
                                <div className="frame-4_31181 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-4_31181">
                                        <UsersUser
                                            id="4_31182"
                                            className="instance-4_31182"
                                        ></UsersUser>
                                        <div
                                            id="4_31183"
                                            className="frame-4_31183"
                                        >
                                            <div className="frame-content-4_31183">
                                                <InputelementsLabel
                                                    id="4_31184"
                                                    className="instance-4_31184"
                                                    size={"xl"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31185"
                                            className="instance-4_31185"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31181 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31186"
                                    className="instance-4_31186"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "xl" &&
                    state === "focus" &&
                    filled === "false" && (
                        <div id="4_31187" className="symbol-4_31187">
                            <div
                                id="4_31188"
                                className="stroke-wrapper-4_31188"
                            >
                                <div className="frame-4_31188 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31188">
                                        <UsersUser
                                            id="4_31189"
                                            className="instance-4_31189"
                                        ></UsersUser>
                                        <div
                                            id="4_31190"
                                            className="frame-4_31190"
                                        >
                                            <div className="frame-content-4_31190">
                                                <InputelementsLabel
                                                    id="4_31191"
                                                    className="instance-4_31191"
                                                    size={"xl"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31192"
                                            className="instance-4_31192"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31188 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31193"
                                    className="instance-4_31193"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "xl" &&
                    state === "disabled" &&
                    filled === "false" && (
                        <div id="4_31194" className="symbol-4_31194">
                            <div
                                id="4_31195"
                                className="stroke-wrapper-4_31195"
                            >
                                <div className="frame-4_31195 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-4_31195">
                                        <UsersUser
                                            id="4_31196"
                                            className="instance-4_31196"
                                        ></UsersUser>
                                        <div
                                            id="4_31197"
                                            className="frame-4_31197"
                                        >
                                            <div className="frame-content-4_31197">
                                                <InputelementsLabel
                                                    id="4_31198"
                                                    className="instance-4_31198"
                                                    size={"xl"}
                                                    disabled={"true"}
                                                    counter={false}
                                                    icon={true}
                                                    required={false}
                                                ></InputelementsLabel>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31199"
                                            className="instance-4_31199"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31195 stroke-lightneutralcontainer-soft-4_31858"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31200"
                                    className="instance-4_31200"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "xl" &&
                    state === "default" &&
                    filled === "false" && (
                        <div id="4_31201" className="symbol-4_31201">
                            <div
                                id="4_31202"
                                className="stroke-wrapper-4_31202"
                            >
                                <div className="frame-4_31202 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31202">
                                        {iconLeft && (
                                            <UsersUser
                                                id="4_31203"
                                                className="instance-4_31203"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="4_31204"
                                            className="frame-4_31204"
                                        >
                                            <div className="frame-content-4_31204">
                                                <InputelementsLabel
                                                    id="4_31205"
                                                    className="instance-4_31205"
                                                    size={"xl"}
                                                    disabled={"false"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></InputelementsLabel>
                                            </div>
                                        </div>
                                        <NavigationChevronright2
                                            id="4_31206"
                                            className="instance-4_31206"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31202 stroke-lightneutralcontainer-default-4_31857"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31207"
                                    className="instance-4_31207"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "l" &&
                    state === "valid" &&
                    filled === "false" && (
                        <div id="4_31208" className="symbol-4_31208">
                            {label && (
                                <InputelementsLabel
                                    id="4_31209"
                                    className="instance-4_31209"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31210"
                                className="stroke-wrapper-4_31210"
                            >
                                <div className="frame-4_31210 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31210">
                                        {iconLeft && (
                                            <UsersUser
                                                id="4_31211"
                                                className="instance-4_31211"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="4_31212"
                                            className="frame-4_31212"
                                        ></div>
                                        <NavigationChevronright2
                                            id="4_31213"
                                            className="instance-4_31213"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31210 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31214"
                                    className="instance-4_31214"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "l" &&
                    state === "error" &&
                    filled === "false" && (
                        <div id="4_31215" className="symbol-4_31215">
                            {label && (
                                <InputelementsLabel
                                    id="4_31216"
                                    className="instance-4_31216"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31217"
                                className="stroke-wrapper-4_31217"
                            >
                                <div className="frame-4_31217 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-4_31217">
                                        <UsersUser
                                            id="4_31218"
                                            className="instance-4_31218"
                                        ></UsersUser>
                                        <div
                                            id="4_31219"
                                            className="frame-4_31219"
                                        ></div>
                                        <NavigationChevronright2
                                            id="4_31220"
                                            className="instance-4_31220"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31217 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31221"
                                    className="instance-4_31221"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "l" &&
                    state === "focus" &&
                    filled === "false" && (
                        <div id="4_31222" className="symbol-4_31222">
                            {label && (
                                <InputelementsLabel
                                    id="4_31223"
                                    className="instance-4_31223"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31224"
                                className="stroke-wrapper-4_31224"
                            >
                                <div className="frame-4_31224 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31224">
                                        <UsersUser
                                            id="4_31225"
                                            className="instance-4_31225"
                                        ></UsersUser>
                                        <div
                                            id="4_31226"
                                            className="frame-4_31226"
                                        ></div>
                                        <NavigationChevronright2
                                            id="4_31227"
                                            className="instance-4_31227"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31224 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31228"
                                    className="instance-4_31228"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "l" &&
                    state === "disabled" &&
                    filled === "false" && (
                        <div id="4_31229" className="symbol-4_31229">
                            {label && (
                                <InputelementsLabel
                                    id="4_31230"
                                    className="instance-4_31230"
                                    size={"l"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31231"
                                className="stroke-wrapper-4_31231"
                            >
                                <div className="frame-4_31231 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-4_31231">
                                        <UsersUser
                                            id="4_31232"
                                            className="instance-4_31232"
                                        ></UsersUser>
                                        <div
                                            id="4_31233"
                                            className="frame-4_31233"
                                        ></div>
                                        <NavigationChevronright2
                                            id="4_31234"
                                            className="instance-4_31234"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31231 stroke-lightneutralcontainer-soft-4_31858"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31235"
                                    className="instance-4_31235"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "l" &&
                    state === "default" &&
                    filled === "false" && (
                        <div id="4_31236" className="symbol-4_31236">
                            {label && (
                                <InputelementsLabel
                                    id="4_31237"
                                    className="instance-4_31237"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31238"
                                className="stroke-wrapper-4_31238"
                            >
                                <div className="frame-4_31238 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31238">
                                        {iconLeft && (
                                            <UsersUser
                                                id="4_31239"
                                                className="instance-4_31239"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="4_31240"
                                            className="frame-4_31240"
                                        ></div>
                                        <NavigationChevronright2
                                            id="4_31241"
                                            className="instance-4_31241"
                                        ></NavigationChevronright2>
                                    </div>
                                </div>
                                <div className="stroke-4_31238 stroke-lightneutralcontainer-default-4_31857"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31242"
                                    className="instance-4_31242"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "m" &&
                    state === "focus" &&
                    filled === "false" && (
                        <div id="4_31243" className="symbol-4_31243">
                            {label && (
                                <InputelementsLabel
                                    id="4_31244"
                                    className="instance-4_31244"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31245"
                                className="stroke-wrapper-4_31245"
                            >
                                <div className="frame-4_31245 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31245">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="4_31246"
                                                className="instance-4_31246"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="4_31247"
                                            className="frame-4_31247"
                                        ></div>
                                        <NavigationChevronright1
                                            id="4_31248"
                                            className="instance-4_31248"
                                        ></NavigationChevronright1>
                                    </div>
                                </div>
                                <div className="stroke-4_31245 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31249"
                                    className="instance-4_31249"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "m" &&
                    state === "error" &&
                    filled === "false" && (
                        <div id="4_31250" className="symbol-4_31250">
                            {label && (
                                <InputelementsLabel
                                    id="4_31251"
                                    className="instance-4_31251"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31252"
                                className="stroke-wrapper-4_31252"
                            >
                                <div className="frame-4_31252 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-4_31252">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="4_31253"
                                                className="instance-4_31253"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="4_31254"
                                            className="frame-4_31254"
                                        ></div>
                                        <NavigationChevronright1
                                            id="4_31255"
                                            className="instance-4_31255"
                                        ></NavigationChevronright1>
                                    </div>
                                </div>
                                <div className="stroke-4_31252 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31256"
                                    className="instance-4_31256"
                                    state={"error"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "m" &&
                    state === "valid" &&
                    filled === "false" && (
                        <div id="4_31257" className="symbol-4_31257">
                            {label && (
                                <InputelementsLabel
                                    id="4_31258"
                                    className="instance-4_31258"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31259"
                                className="stroke-wrapper-4_31259"
                            >
                                <div className="frame-4_31259 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31259">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="4_31260"
                                                className="instance-4_31260"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="4_31261"
                                            className="frame-4_31261"
                                        ></div>
                                        <NavigationChevronright1
                                            id="4_31262"
                                            className="instance-4_31262"
                                        ></NavigationChevronright1>
                                    </div>
                                </div>
                                <div className="stroke-4_31259 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31263"
                                    className="instance-4_31263"
                                    state={"success"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "m" &&
                    state === "disabled" &&
                    filled === "false" && (
                        <div id="4_31264" className="symbol-4_31264">
                            {label && (
                                <InputelementsLabel
                                    id="4_31265"
                                    className="instance-4_31265"
                                    size={"m"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31266"
                                className="stroke-wrapper-4_31266"
                            >
                                <div className="frame-4_31266 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-4_31266">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="4_31267"
                                                className="instance-4_31267"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="4_31268"
                                            className="frame-4_31268"
                                        ></div>
                                        <NavigationChevronright1
                                            id="4_31269"
                                            className="instance-4_31269"
                                        ></NavigationChevronright1>
                                    </div>
                                </div>
                                <div className="stroke-4_31266 stroke-lightneutralcontainer-soft-4_31858"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31270"
                                    className="instance-4_31270"
                                    state={"disabled"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
                {type === "onlyLabel" &&
                    size === "m" &&
                    state === "default" &&
                    filled === "false" && (
                        <div id="4_31271" className="symbol-4_31271">
                            {label && (
                                <InputelementsLabel
                                    id="4_31272"
                                    className="instance-4_31272"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div
                                id="4_31273"
                                className="stroke-wrapper-4_31273"
                            >
                                <div className="frame-4_31273 fill-lightneutralcontainer-soft-4_31858">
                                    <div className="frame-content-4_31273">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="4_31274"
                                                className="instance-4_31274"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="4_31275"
                                            className="frame-4_31275"
                                        ></div>
                                        <NavigationChevronright1
                                            id="4_31276"
                                            className="instance-4_31276"
                                        ></NavigationChevronright1>
                                    </div>
                                </div>
                                <div className="stroke-4_31273 stroke-lightneutralcontainer-default-4_31857"></div>
                            </div>
                            {hint && (
                                <InputelementsHint0
                                    id="4_31277"
                                    className="instance-4_31277"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint0>
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Multiselect;
