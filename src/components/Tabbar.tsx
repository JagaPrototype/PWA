import _TabBar_item from "@/components/tabbaritem";
import HomeIndicator from "@/components/homeindicator";
import ButtonIcon from "@/components/buttonicon";
import "@/styles/Tabbar.css";
interface tabbarProps {
    tabcount?: string;
    homeindicator?: string;
    actionbutton?: string;
    id?: string;
    className?: string;
}
const Tabbar = (props: tabbarProps) => {
    const { tabcount, homeindicator, actionbutton, id, className = "" } = props;

    return (
        <div className={`component-2_18879 ${className}`} id={id}>
            <div id="2_18879" className="symbol-2_18879">
                {tabcount === "5 tabs" &&
                    homeindicator === "true" &&
                    actionbutton === "false" && (
                        <div id="2_18880" className="symbol-2_18880">
                            <div
                                id="2_18881"
                                className="stroke-wrapper-2_18881"
                            >
                                <div className="frame-2_18881 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18881">
                                        <_TabBar_item
                                            id="2_18882"
                                            className="instance-2_18882"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18883"
                                            className="instance-2_18883"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18884"
                                            className="instance-2_18884"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18885"
                                            className="instance-2_18885"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18886"
                                            className="instance-2_18886"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18881 stroke-lightbordermuted-2_18974"></div>
                            </div>
                            <HomeIndicator
                                id="2_18887"
                                className="instance-2_18887"
                                bg={"true"}
                            ></HomeIndicator>
                        </div>
                    )}
                {tabcount === "5 tabs" &&
                    homeindicator === "false" &&
                    actionbutton === "false" && (
                        <div id="2_18888" className="symbol-2_18888">
                            <div
                                id="2_18889"
                                className="stroke-wrapper-2_18889"
                            >
                                <div className="frame-2_18889 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18889">
                                        <_TabBar_item
                                            id="2_18890"
                                            className="instance-2_18890"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18891"
                                            className="instance-2_18891"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18892"
                                            className="instance-2_18892"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18893"
                                            className="instance-2_18893"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18894"
                                            className="instance-2_18894"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18889 stroke-lightbordermuted-2_18974"></div>
                            </div>
                        </div>
                    )}
                {tabcount === "4 tabs" &&
                    homeindicator === "false" &&
                    actionbutton === "false" && (
                        <div id="2_18895" className="symbol-2_18895">
                            <div
                                id="2_18896"
                                className="stroke-wrapper-2_18896"
                            >
                                <div className="frame-2_18896 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18896">
                                        <_TabBar_item
                                            id="2_18897"
                                            className="instance-2_18897"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18898"
                                            className="instance-2_18898"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18899"
                                            className="instance-2_18899"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18900"
                                            className="instance-2_18900"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18896 stroke-lightbordermuted-2_18974"></div>
                            </div>
                        </div>
                    )}
                {tabcount === "4 tabs" &&
                    homeindicator === "false" &&
                    actionbutton === "true" && (
                        <div id="2_18901" className="symbol-2_18901">
                            <div
                                id="2_18902"
                                className="stroke-wrapper-2_18902"
                            >
                                <div className="frame-2_18902 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18902">
                                        <_TabBar_item
                                            id="2_18903"
                                            className="instance-2_18903"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18904"
                                            className="instance-2_18904"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <div
                                            id="2_18905"
                                            className="frame-2_18905"
                                        >
                                            <ButtonIcon
                                                id="2_18906"
                                                className="instance-2_18906"
                                                size={"l"}
                                                state={"default"}
                                                variant={"primary"}
                                                _style={"round"}
                                                colorScheme={"accent"}
                                            ></ButtonIcon>
                                        </div>
                                        <_TabBar_item
                                            id="2_18907"
                                            className="instance-2_18907"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18908"
                                            className="instance-2_18908"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18902 stroke-lightbordermuted-2_18974"></div>
                            </div>
                        </div>
                    )}
                {tabcount === "2 tabs" &&
                    homeindicator === "false" &&
                    actionbutton === "true" && (
                        <div id="2_18909" className="symbol-2_18909">
                            <div
                                id="2_18910"
                                className="stroke-wrapper-2_18910"
                            >
                                <div className="frame-2_18910 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18910">
                                        <_TabBar_item
                                            id="2_18911"
                                            className="instance-2_18911"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <div
                                            id="2_18912"
                                            className="frame-2_18912"
                                        >
                                            <ButtonIcon
                                                id="2_18913"
                                                className="instance-2_18913"
                                                size={"l"}
                                                state={"default"}
                                                variant={"primary"}
                                                _style={"round"}
                                                colorScheme={"accent"}
                                            ></ButtonIcon>
                                        </div>
                                        <_TabBar_item
                                            id="2_18914"
                                            className="instance-2_18914"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18910 stroke-lightbordermuted-2_18974"></div>
                            </div>
                        </div>
                    )}
                {tabcount === "3 tabs" &&
                    homeindicator === "false" &&
                    actionbutton === "false" && (
                        <div id="2_18915" className="symbol-2_18915">
                            <div
                                id="2_18916"
                                className="stroke-wrapper-2_18916"
                            >
                                <div className="frame-2_18916 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18916">
                                        <_TabBar_item
                                            id="2_18917"
                                            className="instance-2_18917"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18918"
                                            className="instance-2_18918"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18919"
                                            className="instance-2_18919"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18916 stroke-lightbordermuted-2_18974"></div>
                            </div>
                        </div>
                    )}
                {tabcount === "2 tabs" &&
                    homeindicator === "false" &&
                    actionbutton === "false" && (
                        <div id="2_18920" className="symbol-2_18920">
                            <div
                                id="2_18921"
                                className="stroke-wrapper-2_18921"
                            >
                                <div className="frame-2_18921 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18921">
                                        <_TabBar_item
                                            id="2_18922"
                                            className="instance-2_18922"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18923"
                                            className="instance-2_18923"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18921 stroke-lightbordermuted-2_18974"></div>
                            </div>
                        </div>
                    )}
                {tabcount === "4 tabs" &&
                    homeindicator === "true" &&
                    actionbutton === "false" && (
                        <div id="2_18924" className="symbol-2_18924">
                            <div
                                id="2_18925"
                                className="stroke-wrapper-2_18925"
                            >
                                <div className="frame-2_18925 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18925">
                                        <_TabBar_item
                                            id="2_18926"
                                            className="instance-2_18926"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18927"
                                            className="instance-2_18927"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18928"
                                            className="instance-2_18928"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18929"
                                            className="instance-2_18929"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18925 stroke-lightbordermuted-2_18974"></div>
                            </div>
                            <HomeIndicator
                                id="2_18930"
                                className="instance-2_18930"
                                bg={"true"}
                            ></HomeIndicator>
                        </div>
                    )}
                {tabcount === "4 tabs" &&
                    homeindicator === "true" &&
                    actionbutton === "true" && (
                        <div id="2_18931" className="symbol-2_18931">
                            <div
                                id="2_18932"
                                className="stroke-wrapper-2_18932"
                            >
                                <div className="frame-2_18932 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18932">
                                        <_TabBar_item
                                            id="2_18933"
                                            className="instance-2_18933"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18934"
                                            className="instance-2_18934"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <div
                                            id="2_18935"
                                            className="frame-2_18935"
                                        >
                                            <ButtonIcon
                                                id="2_18936"
                                                className="instance-2_18936"
                                                size={"l"}
                                                state={"default"}
                                                variant={"primary"}
                                                _style={"round"}
                                                colorScheme={"accent"}
                                            ></ButtonIcon>
                                        </div>
                                        <_TabBar_item
                                            id="2_18937"
                                            className="instance-2_18937"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18938"
                                            className="instance-2_18938"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18932 stroke-lightbordermuted-2_18974"></div>
                            </div>
                            <HomeIndicator
                                id="2_18939"
                                className="instance-2_18939"
                                bg={"true"}
                            ></HomeIndicator>
                        </div>
                    )}
                {tabcount === "2 tabs" &&
                    homeindicator === "true" &&
                    actionbutton === "true" && (
                        <div id="2_18940" className="symbol-2_18940">
                            <div
                                id="2_18941"
                                className="stroke-wrapper-2_18941"
                            >
                                <div className="frame-2_18941 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18941">
                                        <_TabBar_item
                                            id="2_18942"
                                            className="instance-2_18942"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <div
                                            id="2_18943"
                                            className="frame-2_18943"
                                        >
                                            <ButtonIcon
                                                id="2_18944"
                                                className="instance-2_18944"
                                                size={"l"}
                                                state={"default"}
                                                variant={"primary"}
                                                _style={"round"}
                                                colorScheme={"accent"}
                                            ></ButtonIcon>
                                        </div>
                                        <_TabBar_item
                                            id="2_18945"
                                            className="instance-2_18945"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18941 stroke-lightbordermuted-2_18974"></div>
                            </div>
                            <HomeIndicator
                                id="2_18946"
                                className="instance-2_18946"
                                bg={"true"}
                            ></HomeIndicator>
                        </div>
                    )}
                {tabcount === "3 tabs" &&
                    homeindicator === "true" &&
                    actionbutton === "false" && (
                        <div id="2_18947" className="symbol-2_18947">
                            <div
                                id="2_18948"
                                className="stroke-wrapper-2_18948"
                            >
                                <div className="frame-2_18948 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18948">
                                        <div
                                            id="2_18949"
                                            className="instance-2_18949"
                                            instance_2_18875={
                                                "statedefaultbadgenone"
                                            }
                                        >
                                            <_TabBar_item
                                                id="2_18949"
                                                state={"default"}
                                                badge={"none"}
                                            ></_TabBar_item>
                                            <_TabBar_item
                                                id="2_18949"
                                                state={"active"}
                                                badge={"none"}
                                            ></_TabBar_item>
                                        </div>
                                        <_TabBar_item
                                            id="2_18950"
                                            className="instance-2_18950"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <div
                                            id="2_18951"
                                            className="instance-2_18951"
                                            instance_2_18850={
                                                "stateactivebadgenone"
                                            }
                                        >
                                            <_TabBar_item
                                                id="2_18951"
                                                state={"active"}
                                                badge={"none"}
                                            ></_TabBar_item>
                                            <_TabBar_item
                                                id="2_18951"
                                                state={"default"}
                                                badge={"none"}
                                            ></_TabBar_item>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_18948 stroke-lightbordermuted-2_18974"></div>
                            </div>
                            <HomeIndicator
                                id="2_18952"
                                className="instance-2_18952"
                                bg={"true"}
                            ></HomeIndicator>
                        </div>
                    )}
                {tabcount === "2 tabs" &&
                    homeindicator === "true" &&
                    actionbutton === "false" && (
                        <div id="2_18953" className="symbol-2_18953">
                            <div
                                id="2_18954"
                                className="stroke-wrapper-2_18954"
                            >
                                <div className="frame-2_18954 fill-lightbgsurface1-2_2231">
                                    <div className="frame-content-2_18954">
                                        <_TabBar_item
                                            id="2_18955"
                                            className="instance-2_18955"
                                            state={"active"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                        <_TabBar_item
                                            id="2_18956"
                                            className="instance-2_18956"
                                            state={"default"}
                                            badge={"none"}
                                        ></_TabBar_item>
                                    </div>
                                </div>
                                <div className="stroke-2_18954 stroke-lightbordermuted-2_18974"></div>
                            </div>
                            <HomeIndicator
                                id="2_18957"
                                className="instance-2_18957"
                                bg={"true"}
                            ></HomeIndicator>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Tabbar;
