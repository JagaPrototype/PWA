import HeaderLeftactions from "@/components/headerleftactions";
import Yaga from "@/components/yaga";
import HeaderRightactions from "@/components/headerrightactions";
import Inputsearch from "@/components/inputsearch";
import "@/styles/Header.css";
interface headerProps {
    logo?: boolean;
    titleText?: string;
    subtitle?: boolean;
    subtitleText?: string;
    type?: string;
    action?: string;
    id?: string;
    className?: string;
}
const Header = (props: headerProps) => {
    const {
        logo = false,
        titleText = "Title",
        subtitle = false,
        subtitleText = "Address",
        type,
        action,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_27029 ${className}`} id={id}>
            <div id="2_27029" className="symbol-2_27029">
                {type === "titleLeft" && action === "left&right" && (
                    <div
                        id="2_27030"
                        className="symbol-2_27030 fill-lightbgsurface1-2_2272"
                    >
                        <HeaderLeftactions
                            id="2_27031"
                            className="instance-2_27031"
                            variant={"buttonIcon"}
                        ></HeaderLeftactions>
                        <div id="2_27032" className="frame-2_27032">
                            <div className="frame-content-2_27032">
                                {logo && (
                                    <Yaga
                                        id="2_27033"
                                        className="instance-2_27033"
                                        lighttheme={"true"}
                                        monochrome={"false"}
                                        onlyicon={"true"}
                                    ></Yaga>
                                )}
                                <div id="2_27034" className="frame-2_27034">
                                    <div className="frame-content-2_27034">
                                        <p
                                            id="2_27035"
                                            className="paragraph-2_27035 fill-lightfgdefault-2_2273-paragraph text-mobileh4-2_18972"
                                        >
                                            {titleText ?? "Title"}
                                        </p>
                                        {subtitle && (
                                            <p
                                                id="2_27036"
                                                className="paragraph-2_27036 fill-lightfgmuted-2_2271-paragraph text-mobiledescription-l-2_2288"
                                            >
                                                {subtitleText ?? "Address"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <HeaderRightactions
                            id="2_27037"
                            className="instance-2_27037"
                            variant={"buttonIcon"}
                        ></HeaderRightactions>
                    </div>
                )}
                {type === "titleLeft" && action === "left" && (
                    <div
                        id="2_27038"
                        className="symbol-2_27038 fill-lightbgsurface1-2_2272"
                    >
                        <HeaderLeftactions
                            id="2_27039"
                            className="instance-2_27039"
                            variant={"buttonIcon"}
                        ></HeaderLeftactions>
                        <div id="2_27040" className="frame-2_27040">
                            <div className="frame-content-2_27040">
                                {logo && (
                                    <Yaga
                                        id="2_27041"
                                        className="instance-2_27041"
                                        lighttheme={"true"}
                                        monochrome={"false"}
                                        onlyicon={"true"}
                                    ></Yaga>
                                )}
                                <div id="2_27042" className="frame-2_27042">
                                    <div className="frame-content-2_27042">
                                        <p
                                            id="2_27043"
                                            className="paragraph-2_27043 fill-lightfgdefault-2_2273-paragraph text-mobileh4-2_18972"
                                        >
                                            {titleText ?? "Title"}
                                        </p>
                                        {subtitle && (
                                            <p
                                                id="2_27044"
                                                className="paragraph-2_27044 fill-lightfgmuted-2_2271-paragraph text-mobiledescription-l-2_2288"
                                            >
                                                {subtitleText ?? "Address"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {type === "titleLeft" && action === "right" && (
                    <div
                        id="2_27045"
                        className="symbol-2_27045 fill-lightbgsurface1-2_2272"
                    >
                        <div id="2_27046" className="frame-2_27046">
                            <div className="frame-content-2_27046">
                                {logo && (
                                    <Yaga
                                        id="2_27047"
                                        className="instance-2_27047"
                                        lighttheme={"true"}
                                        monochrome={"false"}
                                        onlyicon={"true"}
                                    ></Yaga>
                                )}
                                <div id="2_27048" className="frame-2_27048">
                                    <div className="frame-content-2_27048">
                                        <p
                                            id="2_27049"
                                            className="paragraph-2_27049 fill-lightfgdefault-2_2273-paragraph text-mobileh4-2_18972"
                                        >
                                            {titleText ?? "Title"}
                                        </p>
                                        {subtitle && (
                                            <p
                                                id="2_27050"
                                                className="paragraph-2_27050 fill-lightfgmuted-2_2271-paragraph text-mobiledescription-l-2_2288"
                                            >
                                                {subtitleText ?? "Address"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <HeaderRightactions
                            id="2_27051"
                            className="instance-2_27051"
                            variant={"buttonIcon"}
                        ></HeaderRightactions>
                    </div>
                )}
                {type === "titleLeft" && action === "none" && (
                    <div
                        id="2_27052"
                        className="symbol-2_27052 fill-lightbgsurface1-2_2272"
                    >
                        <div id="2_27053" className="frame-2_27053">
                            <div className="frame-content-2_27053">
                                {logo && (
                                    <Yaga
                                        id="2_27054"
                                        className="instance-2_27054"
                                        lighttheme={"true"}
                                        monochrome={"false"}
                                        onlyicon={"true"}
                                    ></Yaga>
                                )}
                                <div id="2_27055" className="frame-2_27055">
                                    <div className="frame-content-2_27055">
                                        <p
                                            id="2_27056"
                                            className="paragraph-2_27056 fill-lightfgdefault-2_2273-paragraph text-mobileh4-2_18972"
                                        >
                                            {titleText ?? "Title"}
                                        </p>
                                        {subtitle && (
                                            <p
                                                id="2_27057"
                                                className="paragraph-2_27057 fill-lightfgmuted-2_2271-paragraph text-mobiledescription-l-2_2288"
                                            >
                                                {subtitleText ?? "Address"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {type === "titleCenter" && action === "left&right" && (
                    <div
                        id="2_27058"
                        className="symbol-2_27058 fill-lightbgsurface1-2_2272"
                    >
                        <HeaderLeftactions
                            id="2_27059"
                            className="instance-2_27059"
                            variant={"buttonIcon"}
                        ></HeaderLeftactions>
                        <HeaderRightactions
                            id="2_27060"
                            className="instance-2_27060"
                            variant={"buttonIcon"}
                        ></HeaderRightactions>
                        <p
                            id="2_27061"
                            className="paragraph-2_27061 fill-lightfgdefault-2_2273-paragraph text-mobileh4-2_18972"
                        >
                            {titleText ?? "Title"}
                        </p>
                    </div>
                )}
                {type === "titleCenter" && action === "right" && (
                    <div
                        id="2_27062"
                        className="symbol-2_27062 fill-lightbgsurface1-2_2272"
                    >
                        <HeaderRightactions
                            id="2_27063"
                            className="instance-2_27063"
                            variant={"buttonIcon"}
                        ></HeaderRightactions>
                        <p
                            id="2_27064"
                            className="paragraph-2_27064 fill-lightfgdefault-2_2273-paragraph text-mobileh4-2_18972"
                        >
                            {titleText ?? "Title"}
                        </p>
                    </div>
                )}
                {type === "search" && action === "right" && (
                    <div
                        id="2_27065"
                        className="symbol-2_27065 fill-lightbgsurface1-2_2272"
                    >
                        <Inputsearch
                            id="2_27066"
                            className="instance-2_27066"
                            size={"l"}
                            state={"default"}
                            filled={"false"}
                        ></Inputsearch>
                        <HeaderRightactions
                            id="2_27067"
                            className="instance-2_27067"
                            variant={"buttonIcon"}
                        ></HeaderRightactions>
                    </div>
                )}
                {type === "search" && action === "none" && (
                    <div
                        id="2_27068"
                        className="symbol-2_27068 fill-lightbgsurface1-2_2272"
                    >
                        <Inputsearch
                            id="2_27069"
                            className="instance-2_27069"
                            size={"l"}
                            state={"default"}
                            filled={"false"}
                        ></Inputsearch>
                    </div>
                )}
                {type === "search" && action === "left" && (
                    <div
                        id="2_27070"
                        className="symbol-2_27070 fill-lightbgsurface1-2_2272"
                    >
                        <HeaderLeftactions
                            id="2_27071"
                            className="instance-2_27071"
                            variant={"buttonIcon"}
                        ></HeaderLeftactions>
                        <Inputsearch
                            id="2_27072"
                            className="instance-2_27072"
                            size={"l"}
                            state={"default"}
                            filled={"false"}
                        ></Inputsearch>
                    </div>
                )}
                {type === "titleCenter" && action === "left" && (
                    <div
                        id="2_27073"
                        className="symbol-2_27073 fill-lightbgsurface1-2_2272"
                    >
                        <HeaderLeftactions
                            id="2_27074"
                            className="instance-2_27074"
                            variant={"buttonIcon"}
                        ></HeaderLeftactions>
                        <p
                            id="2_27075"
                            className="paragraph-2_27075 fill-lightfgdefault-2_2273-paragraph text-mobileh4-2_18972"
                        >
                            {titleText ?? "Title"}
                        </p>
                    </div>
                )}
                {type === "titleCenter" && action === "none" && (
                    <div
                        id="2_27076"
                        className="symbol-2_27076 fill-lightbgsurface1-2_2272"
                    >
                        <p
                            id="2_27077"
                            className="paragraph-2_27077 fill-lightfgdefault-2_2273-paragraph text-mobileh4-2_18972"
                        >
                            {titleText ?? "Title"}
                        </p>
                    </div>
                )}
                {type === "search" && action === "left&right" && (
                    <div
                        id="2_27078"
                        className="symbol-2_27078 fill-lightbgsurface1-2_2272"
                    >
                        <HeaderLeftactions
                            id="2_27079"
                            className="instance-2_27079"
                            variant={"buttonIcon"}
                        ></HeaderLeftactions>
                        <Inputsearch
                            id="2_27080"
                            className="instance-2_27080"
                            size={"l"}
                            state={"default"}
                            filled={"false"}
                        ></Inputsearch>
                        <HeaderRightactions
                            id="2_27081"
                            className="instance-2_27081"
                            variant={"buttonIcon"}
                        ></HeaderRightactions>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Header;
