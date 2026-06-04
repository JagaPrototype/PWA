import ActionSearch0 from "@/components/actionsearch0";
import ActionFilters from "@/components/actionfilters";
import MediaMicrophone from "@/components/mediamicrophone";
import ActionSearch from "@/components/actionsearch";
import ActionFilters0 from "@/components/actionfilters0";
import MediaMicrophone0 from "@/components/mediamicrophone0";
import NavigationChevronLeft from "@/components/navigationchevronleft";
import Cursor from "@/components/cursor";
import NavigationCloselarge from "@/components/navigationcloselarge";
import NavigationCloselarge0 from "@/components/navigationcloselarge0";
import "@/styles/Inputsearch.css";
interface inputsearchProps {
    actionOne?: boolean;
    actionTwo?: boolean;
    size?: string;
    state?: string;
    filled?: string;
    id?: string;
    className?: string;
    text_2_26997?: string;
}
const Inputsearch = (props: inputsearchProps) => {
    const {
        actionOne = false,
        actionTwo = false,
        size,
        state,
        filled,
        id,
        className = "",
        text_2_26997
    } = props;

    return (
        <div className={`component-2_26980 ${className}`} id={id}>
            <div id="2_26980" className="symbol-2_26980">
                {size === "m" && state === "default" && filled === "false" && (
                    <div id="2_26981" className="stroke-wrapper-2_26981">
                        <div className="symbol-2_26981 fill-lightneutralcontainer-soft-2_22070">
                            <ActionSearch0
                                id="2_26982"
                                className="instance-2_26982"
                            ></ActionSearch0>
                            <div id="2_26983" className="frame-2_26983">
                                <div className="frame-content-2_26983">
                                    <p
                                        id="2_26984"
                                        className="paragraph-2_26984 fill-lightfgmuted-2_2271-paragraph text-mobiledescription-l-2_2288"
                                    >
                                        {"Поиск"}
                                    </p>
                                </div>
                            </div>
                            {actionOne && (
                                <ActionFilters
                                    id="2_26985"
                                    className="instance-2_26985"
                                ></ActionFilters>
                            )}
                            {actionTwo && (
                                <MediaMicrophone
                                    id="2_26986"
                                    className="instance-2_26986"
                                ></MediaMicrophone>
                            )}
                        </div>
                        <div className="stroke-2_26981 stroke-lightneutralcontainer-default-2_2292"></div>
                    </div>
                )}
                {size === "m" && state === "focus" && filled === "false" && (
                    <div id="2_26987" className="stroke-wrapper-2_26987">
                        <div className="symbol-2_26987 fill-lightneutralcontainer-soft-2_22070">
                            <ActionSearch0
                                id="2_26988"
                                className="instance-2_26988"
                            ></ActionSearch0>
                            <div id="2_26989" className="frame-2_26989">
                                <div className="frame-content-2_26989">
                                    <p
                                        id="2_26990"
                                        className="paragraph-2_26990 fill-lightfgmuted-2_2271-paragraph text-mobiledescription-l-2_2288"
                                    >
                                        {"Поиск"}
                                    </p>
                                    <div
                                        id="2_26991"
                                        className="rectangle-2_26991 fill-lightaccentdefault-2_4578"
                                    ></div>
                                </div>
                            </div>
                            {actionOne && (
                                <ActionFilters
                                    id="2_26992"
                                    className="instance-2_26992"
                                ></ActionFilters>
                            )}
                            {actionTwo && (
                                <MediaMicrophone
                                    id="2_26993"
                                    className="instance-2_26993"
                                ></MediaMicrophone>
                            )}
                        </div>
                        <div className="stroke-2_26987 stroke-lightneutralcontainer-default-2_2292"></div>
                    </div>
                )}
                {size === "l" && state === "default" && filled === "false" && (
                    <div id="2_26994" className="stroke-wrapper-2_26994">
                        <div className="symbol-2_26994 fill-lightneutralcontainer-soft-2_22070">
                            <ActionSearch
                                id="2_26995"
                                className="instance-2_26995"
                            ></ActionSearch>
                            <div id="2_26996" className="frame-2_26996">
                                <div className="frame-content-2_26996">
                                    <p
                                        id="2_26997"
                                        className="paragraph-2_26997 fill-lightfgmuted-2_2271-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {text_2_26997 ?? "Поиск"}
                                    </p>
                                </div>
                            </div>
                            {actionOne && (
                                <ActionFilters0
                                    id="2_26998"
                                    className="instance-2_26998"
                                ></ActionFilters0>
                            )}
                            {actionTwo && (
                                <MediaMicrophone0
                                    id="2_26999"
                                    className="instance-2_26999"
                                ></MediaMicrophone0>
                            )}
                        </div>
                        <div className="stroke-2_26994 stroke-lightneutralcontainer-default-2_2292"></div>
                    </div>
                )}
                {size === "l" && state === "focus" && filled === "false" && (
                    <div id="2_27000" className="stroke-wrapper-2_27000">
                        <div className="symbol-2_27000 fill-lightneutralcontainer-soft-2_22070">
                            <NavigationChevronLeft
                                id="2_27001"
                                className="instance-2_27001"
                            ></NavigationChevronLeft>
                            <div id="2_27002" className="frame-2_27002">
                                <div className="frame-content-2_27002">
                                    <p
                                        id="2_27003"
                                        className="paragraph-2_27003 fill-lightfgmuted-2_2271-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {"Поиск"}
                                    </p>
                                    <Cursor
                                        id="2_27004"
                                        className="instance-2_27004"
                                    ></Cursor>
                                </div>
                            </div>
                            {actionOne && (
                                <ActionFilters0
                                    id="2_27005"
                                    className="instance-2_27005"
                                ></ActionFilters0>
                            )}
                            {actionTwo && (
                                <MediaMicrophone0
                                    id="2_27006"
                                    className="instance-2_27006"
                                ></MediaMicrophone0>
                            )}
                        </div>
                        <div className="stroke-2_27000 stroke-lightneutralcontainer-default-2_2292"></div>
                    </div>
                )}
                {size === "l" && state === "focus" && filled === "true" && (
                    <div id="2_27007" className="stroke-wrapper-2_27007">
                        <div className="symbol-2_27007 fill-lightneutralcontainer-soft-2_22070">
                            <NavigationChevronLeft
                                id="2_27008"
                                className="instance-2_27008"
                            ></NavigationChevronLeft>
                            <div id="2_27009" className="frame-2_27009">
                                <div className="frame-content-2_27009">
                                    <p
                                        id="2_27010"
                                        className="paragraph-2_27010 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {"Поиск"}
                                    </p>
                                    <Cursor
                                        id="2_27011"
                                        className="instance-2_27011"
                                    ></Cursor>
                                </div>
                            </div>
                            <NavigationCloselarge
                                id="2_27012"
                                className="instance-2_27012"
                            ></NavigationCloselarge>
                        </div>
                        <div className="stroke-2_27007 stroke-lightneutralcontainer-default-2_2292"></div>
                    </div>
                )}
                {size === "l" && state === "default" && filled === "true" && (
                    <div id="2_27013" className="stroke-wrapper-2_27013">
                        <div className="symbol-2_27013 fill-lightneutralcontainer-soft-2_22070">
                            <NavigationChevronLeft
                                id="2_27014"
                                className="instance-2_27014"
                            ></NavigationChevronLeft>
                            <div id="2_27015" className="frame-2_27015">
                                <div className="frame-content-2_27015">
                                    <p
                                        id="2_27016"
                                        className="paragraph-2_27016 fill-lightfgdefault-2_2273-paragraph text-mobilebody-m-2_2287"
                                    >
                                        {"Поиск"}
                                    </p>
                                </div>
                            </div>
                            <NavigationCloselarge
                                id="2_27017"
                                className="instance-2_27017"
                            ></NavigationCloselarge>
                        </div>
                        <div className="stroke-2_27013 stroke-lightneutralcontainer-default-2_2292"></div>
                    </div>
                )}
                {size === "m" && state === "focus" && filled === "true" && (
                    <div id="2_27018" className="stroke-wrapper-2_27018">
                        <div className="symbol-2_27018 fill-lightneutralcontainer-soft-2_22070">
                            <ActionSearch0
                                id="2_27019"
                                className="instance-2_27019"
                            ></ActionSearch0>
                            <div id="2_27020" className="frame-2_27020">
                                <div className="frame-content-2_27020">
                                    <p
                                        id="2_27021"
                                        className="paragraph-2_27021 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                    >
                                        {"Поиск"}
                                    </p>
                                    <Cursor
                                        id="2_27022"
                                        className="instance-2_27022"
                                    ></Cursor>
                                </div>
                            </div>
                            <NavigationCloselarge0
                                id="2_27023"
                                className="instance-2_27023"
                            ></NavigationCloselarge0>
                        </div>
                        <div className="stroke-2_27018 stroke-lightneutralcontainer-default-2_2292"></div>
                    </div>
                )}
                {size === "m" && state === "default" && filled === "true" && (
                    <div id="2_27024" className="stroke-wrapper-2_27024">
                        <div className="symbol-2_27024 fill-lightneutralcontainer-soft-2_22070">
                            <ActionSearch0
                                id="2_27025"
                                className="instance-2_27025"
                            ></ActionSearch0>
                            <div id="2_27026" className="frame-2_27026">
                                <div className="frame-content-2_27026">
                                    <p
                                        id="2_27027"
                                        className="paragraph-2_27027 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                    >
                                        {"Поиск"}
                                    </p>
                                </div>
                            </div>
                            <NavigationCloselarge0
                                id="2_27028"
                                className="instance-2_27028"
                            ></NavigationCloselarge0>
                        </div>
                        <div className="stroke-2_27024 stroke-lightneutralcontainer-default-2_2292"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Inputsearch;
