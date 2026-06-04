import ActionSearch0 from "@/components/actionsearch0";
import _Body_search from "@/components/bodysearch";
import Button0 from "@/components/button0";
import ActionFilters0 from "@/components/actionfilters0";
import MediaMicrophone0 from "@/components/mediamicrophone0";
import NavigationCloselarge1 from "@/components/navigationcloselarge1";
import ButtonIcon from "@/components/buttonicon";
import Button from "@/components/button";
import "@/styles/Search.css";
interface searchProps {
    custombutton?: boolean;
    micbutton?: boolean;
    clearbutton?: boolean;
    customiconvariant20?: string;
    state?: string;
    filled?: string;
    left?: string;
    right?: string;
    id?: string;
    className?: string;
}
const Search = (props: searchProps) => {
    const {
        custombutton = true,
        micbutton = true,
        clearbutton = true,
        customiconvariant20 = "Component_2_25254",
        state,
        filled,
        left,
        right,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_28829 ${className}`} id={id}>
            <div id="2_28829" className="symbol-2_28829">
                {state === "default" &&
                    filled === "false" &&
                    left === "none" &&
                    right === "none" && (
                        <div id="2_28830" className="symbol-2_28830">
                            <div
                                id="2_28831"
                                className="stroke-wrapper-2_28831"
                            >
                                <div className="frame-2_28831 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28831">
                                        <div
                                            id="2_28832"
                                            className="frame-2_28832"
                                        >
                                            <div className="frame-content-2_28832">
                                                <ActionSearch0
                                                    id="2_28833"
                                                    className="instance-2_28833"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28834"
                                            className="instance-2_28834"
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28835"
                                                className="frame-2_28835"
                                            >
                                                <div className="frame-content-2_28835">
                                                    <div
                                                        id="2_28836"
                                                        className="instance-2_28836"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28836"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28836"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28837"
                                                className="frame-2_28837"
                                            >
                                                <div className="frame-content-2_28837">
                                                    <MediaMicrophone0
                                                        id="2_28838"
                                                        className="instance-2_28838"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28839"
                                                className="frame-2_28839"
                                            >
                                                <div className="frame-content-2_28839">
                                                    <NavigationCloselarge1
                                                        id="2_28840"
                                                        className="instance-2_28840"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28831 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "false" &&
                    left === "none" &&
                    right === "none" && (
                        <div id="2_28841" className="symbol-2_28841">
                            <div
                                id="2_28842"
                                className="stroke-wrapper-2_28842"
                            >
                                <div className="frame-2_28842 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28842">
                                        <div
                                            id="2_28843"
                                            className="frame-2_28843"
                                        >
                                            <div className="frame-content-2_28843">
                                                <ActionSearch0
                                                    id="2_28844"
                                                    className="instance-2_28844"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28845"
                                            className="instance-2_28845"
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28846"
                                                className="frame-2_28846"
                                            >
                                                <div className="frame-content-2_28846">
                                                    <div
                                                        id="2_28847"
                                                        className="instance-2_28847"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28847"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28847"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28848"
                                                className="frame-2_28848"
                                            >
                                                <div className="frame-content-2_28848">
                                                    <MediaMicrophone0
                                                        id="2_28849"
                                                        className="instance-2_28849"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28850"
                                                className="frame-2_28850"
                                            >
                                                <div className="frame-content-2_28850">
                                                    <NavigationCloselarge1
                                                        id="2_28851"
                                                        className="instance-2_28851"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28842 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    filled === "true" &&
                    left === "none" &&
                    right === "none" && (
                        <div id="2_28852" className="symbol-2_28852">
                            <div
                                id="2_28853"
                                className="stroke-wrapper-2_28853"
                            >
                                <div className="frame-2_28853 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28853">
                                        <div
                                            id="2_28854"
                                            className="frame-2_28854"
                                        >
                                            <div className="frame-content-2_28854">
                                                <ActionSearch0
                                                    id="2_28855"
                                                    className="instance-2_28855"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28856"
                                            className="instance-2_28856"
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28857"
                                                className="frame-2_28857"
                                            >
                                                <div className="frame-content-2_28857">
                                                    <div
                                                        id="2_28858"
                                                        className="instance-2_28858"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28858"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28858"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28859"
                                                className="frame-2_28859"
                                            >
                                                <div className="frame-content-2_28859">
                                                    <MediaMicrophone0
                                                        id="2_28860"
                                                        className="instance-2_28860"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28861"
                                                className="frame-2_28861"
                                            >
                                                <div className="frame-content-2_28861">
                                                    <NavigationCloselarge1
                                                        id="2_28862"
                                                        className="instance-2_28862"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28853 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "true" &&
                    left === "none" &&
                    right === "none" && (
                        <div id="2_28863" className="symbol-2_28863">
                            <div
                                id="2_28864"
                                className="stroke-wrapper-2_28864"
                            >
                                <div className="frame-2_28864 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28864">
                                        <div
                                            id="2_28865"
                                            className="frame-2_28865"
                                        >
                                            <div className="frame-content-2_28865">
                                                <ActionSearch0
                                                    id="2_28866"
                                                    className="instance-2_28866"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28867"
                                            className="instance-2_28867"
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28868"
                                                className="frame-2_28868"
                                            >
                                                <div className="frame-content-2_28868">
                                                    <div
                                                        id="2_28869"
                                                        className="instance-2_28869"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28869"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28869"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28870"
                                                className="frame-2_28870"
                                            >
                                                <div className="frame-content-2_28870">
                                                    <MediaMicrophone0
                                                        id="2_28871"
                                                        className="instance-2_28871"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28872"
                                                className="frame-2_28872"
                                            >
                                                <div className="frame-content-2_28872">
                                                    <NavigationCloselarge1
                                                        id="2_28873"
                                                        className="instance-2_28873"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28864 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    filled === "false" &&
                    left === "back" &&
                    right === "none" && (
                        <div id="2_28874" className="symbol-2_28874">
                            <ButtonIcon
                                id="2_28875"
                                className="instance-2_28875"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_29170"}
                            ></ButtonIcon>
                            <div
                                id="2_28876"
                                className="stroke-wrapper-2_28876"
                            >
                                <div className="frame-2_28876 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28876">
                                        <div
                                            id="2_28877"
                                            className="frame-2_28877"
                                        >
                                            <div className="frame-content-2_28877">
                                                <ActionSearch0
                                                    id="2_28878"
                                                    className="instance-2_28878"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28879"
                                            className="instance-2_28879"
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28880"
                                                className="frame-2_28880"
                                            >
                                                <div className="frame-content-2_28880">
                                                    <div
                                                        id="2_28881"
                                                        className="instance-2_28881"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28881"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28881"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28882"
                                                className="frame-2_28882"
                                            >
                                                <div className="frame-content-2_28882">
                                                    <MediaMicrophone0
                                                        id="2_28883"
                                                        className="instance-2_28883"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28884"
                                                className="frame-2_28884"
                                            >
                                                <div className="frame-content-2_28884">
                                                    <NavigationCloselarge1
                                                        id="2_28885"
                                                        className="instance-2_28885"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28876 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "false" &&
                    left === "back" &&
                    right === "none" && (
                        <div id="2_28886" className="symbol-2_28886">
                            <ButtonIcon
                                id="2_28887"
                                className="instance-2_28887"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_29170"}
                            ></ButtonIcon>
                            <div
                                id="2_28888"
                                className="stroke-wrapper-2_28888"
                            >
                                <div className="frame-2_28888 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28888">
                                        <div
                                            id="2_28889"
                                            className="frame-2_28889"
                                        >
                                            <div className="frame-content-2_28889">
                                                <ActionSearch0
                                                    id="2_28890"
                                                    className="instance-2_28890"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28891"
                                            className="instance-2_28891"
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28892"
                                                className="frame-2_28892"
                                            >
                                                <div className="frame-content-2_28892">
                                                    <div
                                                        id="2_28893"
                                                        className="instance-2_28893"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28893"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28893"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28894"
                                                className="frame-2_28894"
                                            >
                                                <div className="frame-content-2_28894">
                                                    <MediaMicrophone0
                                                        id="2_28895"
                                                        className="instance-2_28895"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28896"
                                                className="frame-2_28896"
                                            >
                                                <div className="frame-content-2_28896">
                                                    <NavigationCloselarge1
                                                        id="2_28897"
                                                        className="instance-2_28897"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28888 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    filled === "true" &&
                    left === "back" &&
                    right === "none" && (
                        <div id="2_28898" className="symbol-2_28898">
                            <ButtonIcon
                                id="2_28899"
                                className="instance-2_28899"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_29170"}
                            ></ButtonIcon>
                            <div
                                id="2_28900"
                                className="stroke-wrapper-2_28900"
                            >
                                <div className="frame-2_28900 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28900">
                                        <div
                                            id="2_28901"
                                            className="frame-2_28901"
                                        >
                                            <div className="frame-content-2_28901">
                                                <ActionSearch0
                                                    id="2_28902"
                                                    className="instance-2_28902"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28903"
                                            className="instance-2_28903"
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28904"
                                                className="frame-2_28904"
                                            >
                                                <div className="frame-content-2_28904">
                                                    <div
                                                        id="2_28905"
                                                        className="instance-2_28905"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28905"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28905"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28906"
                                                className="frame-2_28906"
                                            >
                                                <div className="frame-content-2_28906">
                                                    <MediaMicrophone0
                                                        id="2_28907"
                                                        className="instance-2_28907"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28908"
                                                className="frame-2_28908"
                                            >
                                                <div className="frame-content-2_28908">
                                                    <NavigationCloselarge1
                                                        id="2_28909"
                                                        className="instance-2_28909"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28900 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "true" &&
                    left === "back" &&
                    right === "none" && (
                        <div id="2_28910" className="symbol-2_28910">
                            <ButtonIcon
                                id="2_28911"
                                className="instance-2_28911"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_29170"}
                            ></ButtonIcon>
                            <div
                                id="2_28912"
                                className="stroke-wrapper-2_28912"
                            >
                                <div className="frame-2_28912 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28912">
                                        <div
                                            id="2_28913"
                                            className="frame-2_28913"
                                        >
                                            <div className="frame-content-2_28913">
                                                <ActionSearch0
                                                    id="2_28914"
                                                    className="instance-2_28914"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28915"
                                            className="instance-2_28915"
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28916"
                                                className="frame-2_28916"
                                            >
                                                <div className="frame-content-2_28916">
                                                    <div
                                                        id="2_28917"
                                                        className="instance-2_28917"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28917"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28917"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28918"
                                                className="frame-2_28918"
                                            >
                                                <div className="frame-content-2_28918">
                                                    <MediaMicrophone0
                                                        id="2_28919"
                                                        className="instance-2_28919"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28920"
                                                className="frame-2_28920"
                                            >
                                                <div className="frame-content-2_28920">
                                                    <NavigationCloselarge1
                                                        id="2_28921"
                                                        className="instance-2_28921"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28912 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    filled === "false" &&
                    left === "back" &&
                    right === "icon button" && (
                        <div id="2_28922" className="symbol-2_28922">
                            <ButtonIcon
                                id="2_28923"
                                className="instance-2_28923"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_29170"}
                            ></ButtonIcon>
                            <div
                                id="2_28924"
                                className="stroke-wrapper-2_28924"
                            >
                                <div className="frame-2_28924 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28924">
                                        <div
                                            id="2_28925"
                                            className="frame-2_28925"
                                        >
                                            <div className="frame-content-2_28925">
                                                <ActionSearch0
                                                    id="2_28926"
                                                    className="instance-2_28926"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28927"
                                            className="instance-2_28927"
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28928"
                                                className="frame-2_28928"
                                            >
                                                <div className="frame-content-2_28928">
                                                    <div
                                                        id="2_28929"
                                                        className="instance-2_28929"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28929"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28929"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28930"
                                                className="frame-2_28930"
                                            >
                                                <div className="frame-content-2_28930">
                                                    <MediaMicrophone0
                                                        id="2_28931"
                                                        className="instance-2_28931"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28932"
                                                className="frame-2_28932"
                                            >
                                                <div className="frame-content-2_28932">
                                                    <NavigationCloselarge1
                                                        id="2_28933"
                                                        className="instance-2_28933"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28924 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_28934"
                                className="instance-2_28934"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "false" &&
                    left === "back" &&
                    right === "icon button" && (
                        <div id="2_28935" className="symbol-2_28935">
                            <ButtonIcon
                                id="2_28936"
                                className="instance-2_28936"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_29170"}
                            ></ButtonIcon>
                            <div
                                id="2_28937"
                                className="stroke-wrapper-2_28937"
                            >
                                <div className="frame-2_28937 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28937">
                                        <div
                                            id="2_28938"
                                            className="frame-2_28938"
                                        >
                                            <div className="frame-content-2_28938">
                                                <ActionSearch0
                                                    id="2_28939"
                                                    className="instance-2_28939"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28940"
                                            className="instance-2_28940"
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28941"
                                                className="frame-2_28941"
                                            >
                                                <div className="frame-content-2_28941">
                                                    <div
                                                        id="2_28942"
                                                        className="instance-2_28942"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28942"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28942"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28943"
                                                className="frame-2_28943"
                                            >
                                                <div className="frame-content-2_28943">
                                                    <MediaMicrophone0
                                                        id="2_28944"
                                                        className="instance-2_28944"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28945"
                                                className="frame-2_28945"
                                            >
                                                <div className="frame-content-2_28945">
                                                    <NavigationCloselarge1
                                                        id="2_28946"
                                                        className="instance-2_28946"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28937 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_28947"
                                className="instance-2_28947"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "default" &&
                    filled === "true" &&
                    left === "back" &&
                    right === "icon button" && (
                        <div id="2_28948" className="symbol-2_28948">
                            <ButtonIcon
                                id="2_28949"
                                className="instance-2_28949"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_29170"}
                            ></ButtonIcon>
                            <div
                                id="2_28950"
                                className="stroke-wrapper-2_28950"
                            >
                                <div className="frame-2_28950 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28950">
                                        <div
                                            id="2_28951"
                                            className="frame-2_28951"
                                        >
                                            <div className="frame-content-2_28951">
                                                <ActionSearch0
                                                    id="2_28952"
                                                    className="instance-2_28952"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28953"
                                            className="instance-2_28953"
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28954"
                                                className="frame-2_28954"
                                            >
                                                <div className="frame-content-2_28954">
                                                    <div
                                                        id="2_28955"
                                                        className="instance-2_28955"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28955"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28955"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28956"
                                                className="frame-2_28956"
                                            >
                                                <div className="frame-content-2_28956">
                                                    <MediaMicrophone0
                                                        id="2_28957"
                                                        className="instance-2_28957"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28958"
                                                className="frame-2_28958"
                                            >
                                                <div className="frame-content-2_28958">
                                                    <NavigationCloselarge1
                                                        id="2_28959"
                                                        className="instance-2_28959"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28950 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_28960"
                                className="instance-2_28960"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "true" &&
                    left === "back" &&
                    right === "icon button" && (
                        <div id="2_28961" className="symbol-2_28961">
                            <ButtonIcon
                                id="2_28962"
                                className="instance-2_28962"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_29170"}
                            ></ButtonIcon>
                            <div
                                id="2_28963"
                                className="stroke-wrapper-2_28963"
                            >
                                <div className="frame-2_28963 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28963">
                                        <div
                                            id="2_28964"
                                            className="frame-2_28964"
                                        >
                                            <div className="frame-content-2_28964">
                                                <ActionSearch0
                                                    id="2_28965"
                                                    className="instance-2_28965"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28966"
                                            className="instance-2_28966"
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28967"
                                                className="frame-2_28967"
                                            >
                                                <div className="frame-content-2_28967">
                                                    <div
                                                        id="2_28968"
                                                        className="instance-2_28968"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28968"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28968"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28969"
                                                className="frame-2_28969"
                                            >
                                                <div className="frame-content-2_28969">
                                                    <MediaMicrophone0
                                                        id="2_28970"
                                                        className="instance-2_28970"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28971"
                                                className="frame-2_28971"
                                            >
                                                <div className="frame-content-2_28971">
                                                    <NavigationCloselarge1
                                                        id="2_28972"
                                                        className="instance-2_28972"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28963 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_28973"
                                className="instance-2_28973"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "default" &&
                    filled === "false" &&
                    left === "icon button" &&
                    right === "none" && (
                        <div id="2_28974" className="symbol-2_28974">
                            <ButtonIcon
                                id="2_28975"
                                className="instance-2_28975"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_28827"}
                            ></ButtonIcon>
                            <div
                                id="2_28976"
                                className="stroke-wrapper-2_28976"
                            >
                                <div className="frame-2_28976 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28976">
                                        <div
                                            id="2_28977"
                                            className="frame-2_28977"
                                        >
                                            <div className="frame-content-2_28977">
                                                <ActionSearch0
                                                    id="2_28978"
                                                    className="instance-2_28978"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28979"
                                            className="instance-2_28979"
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28980"
                                                className="frame-2_28980"
                                            >
                                                <div className="frame-content-2_28980">
                                                    <div
                                                        id="2_28981"
                                                        className="instance-2_28981"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28981"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28981"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28982"
                                                className="frame-2_28982"
                                            >
                                                <div className="frame-content-2_28982">
                                                    <MediaMicrophone0
                                                        id="2_28983"
                                                        className="instance-2_28983"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28984"
                                                className="frame-2_28984"
                                            >
                                                <div className="frame-content-2_28984">
                                                    <NavigationCloselarge1
                                                        id="2_28985"
                                                        className="instance-2_28985"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28976 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "false" &&
                    left === "icon button" &&
                    right === "none" && (
                        <div id="2_28986" className="symbol-2_28986">
                            <ButtonIcon
                                id="2_28987"
                                className="instance-2_28987"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_28827"}
                            ></ButtonIcon>
                            <div
                                id="2_28988"
                                className="stroke-wrapper-2_28988"
                            >
                                <div className="frame-2_28988 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_28988">
                                        <div
                                            id="2_28989"
                                            className="frame-2_28989"
                                        >
                                            <div className="frame-content-2_28989">
                                                <ActionSearch0
                                                    id="2_28990"
                                                    className="instance-2_28990"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_28991"
                                            className="instance-2_28991"
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_28992"
                                                className="frame-2_28992"
                                            >
                                                <div className="frame-content-2_28992">
                                                    <div
                                                        id="2_28993"
                                                        className="instance-2_28993"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_28993"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_28993"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_28994"
                                                className="frame-2_28994"
                                            >
                                                <div className="frame-content-2_28994">
                                                    <MediaMicrophone0
                                                        id="2_28995"
                                                        className="instance-2_28995"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_28996"
                                                className="frame-2_28996"
                                            >
                                                <div className="frame-content-2_28996">
                                                    <NavigationCloselarge1
                                                        id="2_28997"
                                                        className="instance-2_28997"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_28988 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    filled === "true" &&
                    left === "icon button" &&
                    right === "none" && (
                        <div id="2_28998" className="symbol-2_28998">
                            <ButtonIcon
                                id="2_28999"
                                className="instance-2_28999"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_28827"}
                            ></ButtonIcon>
                            <div
                                id="2_29000"
                                className="stroke-wrapper-2_29000"
                            >
                                <div className="frame-2_29000 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29000">
                                        <div
                                            id="2_29001"
                                            className="frame-2_29001"
                                        >
                                            <div className="frame-content-2_29001">
                                                <ActionSearch0
                                                    id="2_29002"
                                                    className="instance-2_29002"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29003"
                                            className="instance-2_29003"
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29004"
                                                className="frame-2_29004"
                                            >
                                                <div className="frame-content-2_29004">
                                                    <div
                                                        id="2_29005"
                                                        className="instance-2_29005"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29005"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29005"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29006"
                                                className="frame-2_29006"
                                            >
                                                <div className="frame-content-2_29006">
                                                    <MediaMicrophone0
                                                        id="2_29007"
                                                        className="instance-2_29007"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29008"
                                                className="frame-2_29008"
                                            >
                                                <div className="frame-content-2_29008">
                                                    <NavigationCloselarge1
                                                        id="2_29009"
                                                        className="instance-2_29009"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29000 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "true" &&
                    left === "icon button" &&
                    right === "none" && (
                        <div id="2_29010" className="symbol-2_29010">
                            <ButtonIcon
                                id="2_29011"
                                className="instance-2_29011"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_28827"}
                            ></ButtonIcon>
                            <div
                                id="2_29012"
                                className="stroke-wrapper-2_29012"
                            >
                                <div className="frame-2_29012 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29012">
                                        <div
                                            id="2_29013"
                                            className="frame-2_29013"
                                        >
                                            <div className="frame-content-2_29013">
                                                <ActionSearch0
                                                    id="2_29014"
                                                    className="instance-2_29014"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29015"
                                            className="instance-2_29015"
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29016"
                                                className="frame-2_29016"
                                            >
                                                <div className="frame-content-2_29016">
                                                    <div
                                                        id="2_29017"
                                                        className="instance-2_29017"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29017"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29017"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29018"
                                                className="frame-2_29018"
                                            >
                                                <div className="frame-content-2_29018">
                                                    <MediaMicrophone0
                                                        id="2_29019"
                                                        className="instance-2_29019"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29020"
                                                className="frame-2_29020"
                                            >
                                                <div className="frame-content-2_29020">
                                                    <NavigationCloselarge1
                                                        id="2_29021"
                                                        className="instance-2_29021"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29012 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    filled === "false" &&
                    left === "icon button" &&
                    right === "icon button" && (
                        <div id="2_29022" className="symbol-2_29022">
                            <ButtonIcon
                                id="2_29023"
                                className="instance-2_29023"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_28827"}
                            ></ButtonIcon>
                            <div
                                id="2_29024"
                                className="stroke-wrapper-2_29024"
                            >
                                <div className="frame-2_29024 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29024">
                                        <div
                                            id="2_29025"
                                            className="frame-2_29025"
                                        >
                                            <div className="frame-content-2_29025">
                                                <ActionSearch0
                                                    id="2_29026"
                                                    className="instance-2_29026"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29027"
                                            className="instance-2_29027"
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29028"
                                                className="frame-2_29028"
                                            >
                                                <div className="frame-content-2_29028">
                                                    <div
                                                        id="2_29029"
                                                        className="instance-2_29029"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29029"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29029"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29030"
                                                className="frame-2_29030"
                                            >
                                                <div className="frame-content-2_29030">
                                                    <MediaMicrophone0
                                                        id="2_29031"
                                                        className="instance-2_29031"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29032"
                                                className="frame-2_29032"
                                            >
                                                <div className="frame-content-2_29032">
                                                    <NavigationCloselarge1
                                                        id="2_29033"
                                                        className="instance-2_29033"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29024 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_29034"
                                className="instance-2_29034"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "false" &&
                    left === "icon button" &&
                    right === "icon button" && (
                        <div id="2_29035" className="symbol-2_29035">
                            <ButtonIcon
                                id="2_29036"
                                className="instance-2_29036"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_28827"}
                            ></ButtonIcon>
                            <div
                                id="2_29037"
                                className="stroke-wrapper-2_29037"
                            >
                                <div className="frame-2_29037 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29037">
                                        <div
                                            id="2_29038"
                                            className="frame-2_29038"
                                        >
                                            <div className="frame-content-2_29038">
                                                <ActionSearch0
                                                    id="2_29039"
                                                    className="instance-2_29039"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29040"
                                            className="instance-2_29040"
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29041"
                                                className="frame-2_29041"
                                            >
                                                <div className="frame-content-2_29041">
                                                    <div
                                                        id="2_29042"
                                                        className="instance-2_29042"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29042"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29042"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29043"
                                                className="frame-2_29043"
                                            >
                                                <div className="frame-content-2_29043">
                                                    <MediaMicrophone0
                                                        id="2_29044"
                                                        className="instance-2_29044"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29045"
                                                className="frame-2_29045"
                                            >
                                                <div className="frame-content-2_29045">
                                                    <NavigationCloselarge1
                                                        id="2_29046"
                                                        className="instance-2_29046"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29037 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_29047"
                                className="instance-2_29047"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "default" &&
                    filled === "true" &&
                    left === "icon button" &&
                    right === "icon button" && (
                        <div id="2_29048" className="symbol-2_29048">
                            <ButtonIcon
                                id="2_29049"
                                className="instance-2_29049"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_28827"}
                            ></ButtonIcon>
                            <div
                                id="2_29050"
                                className="stroke-wrapper-2_29050"
                            >
                                <div className="frame-2_29050 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29050">
                                        <div
                                            id="2_29051"
                                            className="frame-2_29051"
                                        >
                                            <div className="frame-content-2_29051">
                                                <ActionSearch0
                                                    id="2_29052"
                                                    className="instance-2_29052"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29053"
                                            className="instance-2_29053"
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29054"
                                                className="frame-2_29054"
                                            >
                                                <div className="frame-content-2_29054">
                                                    <div
                                                        id="2_29055"
                                                        className="instance-2_29055"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29055"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29055"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29056"
                                                className="frame-2_29056"
                                            >
                                                <div className="frame-content-2_29056">
                                                    <MediaMicrophone0
                                                        id="2_29057"
                                                        className="instance-2_29057"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29058"
                                                className="frame-2_29058"
                                            >
                                                <div className="frame-content-2_29058">
                                                    <NavigationCloselarge1
                                                        id="2_29059"
                                                        className="instance-2_29059"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29050 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_29060"
                                className="instance-2_29060"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "true" &&
                    left === "icon button" &&
                    right === "icon button" && (
                        <div id="2_29061" className="symbol-2_29061">
                            <ButtonIcon
                                id="2_29062"
                                className="instance-2_29062"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_2_28827"}
                            ></ButtonIcon>
                            <div
                                id="2_29063"
                                className="stroke-wrapper-2_29063"
                            >
                                <div className="frame-2_29063 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29063">
                                        <div
                                            id="2_29064"
                                            className="frame-2_29064"
                                        >
                                            <div className="frame-content-2_29064">
                                                <ActionSearch0
                                                    id="2_29065"
                                                    className="instance-2_29065"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29066"
                                            className="instance-2_29066"
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29067"
                                                className="frame-2_29067"
                                            >
                                                <div className="frame-content-2_29067">
                                                    <div
                                                        id="2_29068"
                                                        className="instance-2_29068"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29068"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29068"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29069"
                                                className="frame-2_29069"
                                            >
                                                <div className="frame-content-2_29069">
                                                    <MediaMicrophone0
                                                        id="2_29070"
                                                        className="instance-2_29070"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29071"
                                                className="frame-2_29071"
                                            >
                                                <div className="frame-content-2_29071">
                                                    <NavigationCloselarge1
                                                        id="2_29072"
                                                        className="instance-2_29072"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29063 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_29073"
                                className="instance-2_29073"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "default" &&
                    filled === "false" &&
                    left === "none" &&
                    right === "icon button" && (
                        <div id="2_29074" className="symbol-2_29074">
                            <div
                                id="2_29075"
                                className="stroke-wrapper-2_29075"
                            >
                                <div className="frame-2_29075 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29075">
                                        <div
                                            id="2_29076"
                                            className="frame-2_29076"
                                        >
                                            <div className="frame-content-2_29076">
                                                <ActionSearch0
                                                    id="2_29077"
                                                    className="instance-2_29077"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29078"
                                            className="instance-2_29078"
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29079"
                                                className="frame-2_29079"
                                            >
                                                <div className="frame-content-2_29079">
                                                    <div
                                                        id="2_29080"
                                                        className="instance-2_29080"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29080"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29080"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29081"
                                                className="frame-2_29081"
                                            >
                                                <div className="frame-content-2_29081">
                                                    <MediaMicrophone0
                                                        id="2_29082"
                                                        className="instance-2_29082"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29083"
                                                className="frame-2_29083"
                                            >
                                                <div className="frame-content-2_29083">
                                                    <NavigationCloselarge1
                                                        id="2_29084"
                                                        className="instance-2_29084"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29075 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_29085"
                                className="instance-2_29085"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "false" &&
                    left === "none" &&
                    right === "icon button" && (
                        <div id="2_29086" className="symbol-2_29086">
                            <div
                                id="2_29087"
                                className="stroke-wrapper-2_29087"
                            >
                                <div className="frame-2_29087 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29087">
                                        <div
                                            id="2_29088"
                                            className="frame-2_29088"
                                        >
                                            <div className="frame-content-2_29088">
                                                <ActionSearch0
                                                    id="2_29089"
                                                    className="instance-2_29089"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29090"
                                            className="instance-2_29090"
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29091"
                                                className="frame-2_29091"
                                            >
                                                <div className="frame-content-2_29091">
                                                    <div
                                                        id="2_29092"
                                                        className="instance-2_29092"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29092"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29092"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29093"
                                                className="frame-2_29093"
                                            >
                                                <div className="frame-content-2_29093">
                                                    <MediaMicrophone0
                                                        id="2_29094"
                                                        className="instance-2_29094"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29095"
                                                className="frame-2_29095"
                                            >
                                                <div className="frame-content-2_29095">
                                                    <NavigationCloselarge1
                                                        id="2_29096"
                                                        className="instance-2_29096"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29087 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_29097"
                                className="instance-2_29097"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "default" &&
                    filled === "true" &&
                    left === "none" &&
                    right === "icon button" && (
                        <div id="2_29098" className="symbol-2_29098">
                            <div
                                id="2_29099"
                                className="stroke-wrapper-2_29099"
                            >
                                <div className="frame-2_29099 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29099">
                                        <div
                                            id="2_29100"
                                            className="frame-2_29100"
                                        >
                                            <div className="frame-content-2_29100">
                                                <ActionSearch0
                                                    id="2_29101"
                                                    className="instance-2_29101"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29102"
                                            className="instance-2_29102"
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29103"
                                                className="frame-2_29103"
                                            >
                                                <div className="frame-content-2_29103">
                                                    <div
                                                        id="2_29104"
                                                        className="instance-2_29104"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29104"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29104"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29105"
                                                className="frame-2_29105"
                                            >
                                                <div className="frame-content-2_29105">
                                                    <MediaMicrophone0
                                                        id="2_29106"
                                                        className="instance-2_29106"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29107"
                                                className="frame-2_29107"
                                            >
                                                <div className="frame-content-2_29107">
                                                    <NavigationCloselarge1
                                                        id="2_29108"
                                                        className="instance-2_29108"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29099 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_29109"
                                className="instance-2_29109"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "true" &&
                    left === "none" &&
                    right === "icon button" && (
                        <div id="2_29110" className="symbol-2_29110">
                            <div
                                id="2_29111"
                                className="stroke-wrapper-2_29111"
                            >
                                <div className="frame-2_29111 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29111">
                                        <div
                                            id="2_29112"
                                            className="frame-2_29112"
                                        >
                                            <div className="frame-content-2_29112">
                                                <ActionSearch0
                                                    id="2_29113"
                                                    className="instance-2_29113"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29114"
                                            className="instance-2_29114"
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29115"
                                                className="frame-2_29115"
                                            >
                                                <div className="frame-content-2_29115">
                                                    <div
                                                        id="2_29116"
                                                        className="instance-2_29116"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29116"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29116"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29117"
                                                className="frame-2_29117"
                                            >
                                                <div className="frame-content-2_29117">
                                                    <MediaMicrophone0
                                                        id="2_29118"
                                                        className="instance-2_29118"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29119"
                                                className="frame-2_29119"
                                            >
                                                <div className="frame-content-2_29119">
                                                    <NavigationCloselarge1
                                                        id="2_29120"
                                                        className="instance-2_29120"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29111 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <ButtonIcon
                                id="2_29121"
                                className="instance-2_29121"
                                size={"l"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {state === "default" &&
                    filled === "false" &&
                    left === "none" &&
                    right === "label button" && (
                        <div id="2_29122" className="symbol-2_29122">
                            <div
                                id="2_29123"
                                className="stroke-wrapper-2_29123"
                            >
                                <div className="frame-2_29123 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29123">
                                        <div
                                            id="2_29124"
                                            className="frame-2_29124"
                                        >
                                            <div className="frame-content-2_29124">
                                                <ActionSearch0
                                                    id="2_29125"
                                                    className="instance-2_29125"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29126"
                                            className="instance-2_29126"
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29127"
                                                className="frame-2_29127"
                                            >
                                                <div className="frame-content-2_29127">
                                                    <div
                                                        id="2_29128"
                                                        className="instance-2_29128"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29128"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29128"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29129"
                                                className="frame-2_29129"
                                            >
                                                <div className="frame-content-2_29129">
                                                    <MediaMicrophone0
                                                        id="2_29130"
                                                        className="instance-2_29130"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29131"
                                                className="frame-2_29131"
                                            >
                                                <div className="frame-content-2_29131">
                                                    <NavigationCloselarge1
                                                        id="2_29132"
                                                        className="instance-2_29132"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29123 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <Button
                                id="2_29133"
                                className="instance-2_29133"
                                size={"l"}
                                variant={"tertiary"}
                                colorScheme={"accent"}
                                state={"default"}
                                lefticon={false}
                            ></Button>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "false" &&
                    left === "none" &&
                    right === "label button" && (
                        <div id="2_29134" className="symbol-2_29134">
                            <div
                                id="2_29135"
                                className="stroke-wrapper-2_29135"
                            >
                                <div className="frame-2_29135 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29135">
                                        <div
                                            id="2_29136"
                                            className="frame-2_29136"
                                        >
                                            <div className="frame-content-2_29136">
                                                <ActionSearch0
                                                    id="2_29137"
                                                    className="instance-2_29137"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29138"
                                            className="instance-2_29138"
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29139"
                                                className="frame-2_29139"
                                            >
                                                <div className="frame-content-2_29139">
                                                    <div
                                                        id="2_29140"
                                                        className="instance-2_29140"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29140"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29140"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29141"
                                                className="frame-2_29141"
                                            >
                                                <div className="frame-content-2_29141">
                                                    <MediaMicrophone0
                                                        id="2_29142"
                                                        className="instance-2_29142"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29143"
                                                className="frame-2_29143"
                                            >
                                                <div className="frame-content-2_29143">
                                                    <NavigationCloselarge1
                                                        id="2_29144"
                                                        className="instance-2_29144"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29135 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <Button
                                id="2_29145"
                                className="instance-2_29145"
                                size={"l"}
                                variant={"tertiary"}
                                colorScheme={"accent"}
                                state={"default"}
                                lefticon={false}
                            ></Button>
                        </div>
                    )}
                {state === "default" &&
                    filled === "true" &&
                    left === "none" &&
                    right === "label button" && (
                        <div id="2_29146" className="symbol-2_29146">
                            <div
                                id="2_29147"
                                className="stroke-wrapper-2_29147"
                            >
                                <div className="frame-2_29147 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29147">
                                        <div
                                            id="2_29148"
                                            className="frame-2_29148"
                                        >
                                            <div className="frame-content-2_29148">
                                                <ActionSearch0
                                                    id="2_29149"
                                                    className="instance-2_29149"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29150"
                                            className="instance-2_29150"
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29151"
                                                className="frame-2_29151"
                                            >
                                                <div className="frame-content-2_29151">
                                                    <div
                                                        id="2_29152"
                                                        className="instance-2_29152"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29152"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29152"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29153"
                                                className="frame-2_29153"
                                            >
                                                <div className="frame-content-2_29153">
                                                    <MediaMicrophone0
                                                        id="2_29154"
                                                        className="instance-2_29154"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29155"
                                                className="frame-2_29155"
                                            >
                                                <div className="frame-content-2_29155">
                                                    <NavigationCloselarge1
                                                        id="2_29156"
                                                        className="instance-2_29156"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29147 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <Button
                                id="2_29157"
                                className="instance-2_29157"
                                size={"l"}
                                variant={"tertiary"}
                                colorScheme={"accent"}
                                state={"default"}
                                lefticon={false}
                            ></Button>
                        </div>
                    )}
                {state === "focused" &&
                    filled === "true" &&
                    left === "none" &&
                    right === "label button" && (
                        <div id="2_29158" className="symbol-2_29158">
                            <div
                                id="2_29159"
                                className="stroke-wrapper-2_29159"
                            >
                                <div className="frame-2_29159 fill-lightbgsurface2-2_18971">
                                    <div className="frame-content-2_29159">
                                        <div
                                            id="2_29160"
                                            className="frame-2_29160"
                                        >
                                            <div className="frame-content-2_29160">
                                                <ActionSearch0
                                                    id="2_29161"
                                                    className="instance-2_29161"
                                                ></ActionSearch0>
                                            </div>
                                        </div>
                                        <_Body_search
                                            id="2_29162"
                                            className="instance-2_29162"
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_search>
                                        {custombutton && (
                                            <div
                                                id="2_29163"
                                                className="frame-2_29163"
                                            >
                                                <div className="frame-content-2_29163">
                                                    <div
                                                        id="2_29164"
                                                        className="instance-2_29164"
                                                        instance_2_24235={
                                                            "sizelvariantsecondarystatedisabledcolorSchemeneutral"
                                                        }
                                                    >
                                                        {customiconvariant20 ===
                                                            "Component_2_25254" && (
                                                            <Button0 id="2_29164"></Button0>
                                                        )}
                                                        {customiconvariant20 ===
                                                            "Component_2_24235" && (
                                                            <ActionFilters0 id="2_29164"></ActionFilters0>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {micbutton && (
                                            <div
                                                id="2_29165"
                                                className="frame-2_29165"
                                            >
                                                <div className="frame-content-2_29165">
                                                    <MediaMicrophone0
                                                        id="2_29166"
                                                        className="instance-2_29166"
                                                    ></MediaMicrophone0>
                                                </div>
                                            </div>
                                        )}
                                        {clearbutton && (
                                            <div
                                                id="2_29167"
                                                className="frame-2_29167"
                                            >
                                                <div className="frame-content-2_29167">
                                                    <NavigationCloselarge1
                                                        id="2_29168"
                                                        className="instance-2_29168"
                                                    ></NavigationCloselarge1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_29159 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            <Button
                                id="2_29169"
                                className="instance-2_29169"
                                size={"l"}
                                variant={"tertiary"}
                                colorScheme={"accent"}
                                state={"default"}
                                lefticon={false}
                            ></Button>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Search;
