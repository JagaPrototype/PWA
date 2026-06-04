import Avatar1 from "@/components/avatar1";
import "@/styles/Avatargroup.css";
interface avatargroupProps {
    avatar1?: boolean;
    avatar2?: boolean;
    avatar3?: boolean;
    avatar4?: boolean;
    avatar5?: boolean;
    avatar6?: boolean;
    counter?: boolean;
    size?: string;
    id?: string;
    className?: string;
}
const Avatargroup = (props: avatargroupProps) => {
    const {
        avatar1 = true,
        avatar2 = true,
        avatar3 = true,
        avatar4 = false,
        avatar5 = false,
        avatar6 = false,
        counter = true,
        size,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-4_31732 ${className}`} id={id}>
            <div id="4_31732" className="symbol-4_31732">
                {size === "s (32)" && (
                    <div id="4_31733" className="symbol-4_31733">
                        {avatar1 && (
                            <div
                                id="4_31734"
                                className="stroke-wrapper-4_31734"
                            >
                                <div className="frame-4_31734">
                                    <Avatar1
                                        id="4_31735"
                                        className="instance-4_31735"
                                        variant={"image"}
                                        size={"s (32)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31734 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar2 && (
                            <div
                                id="4_31736"
                                className="stroke-wrapper-4_31736"
                            >
                                <div className="frame-4_31736">
                                    <Avatar1
                                        id="4_31737"
                                        className="instance-4_31737"
                                        variant={"image"}
                                        size={"s (32)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31736 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar3 && (
                            <div
                                id="4_31738"
                                className="stroke-wrapper-4_31738"
                            >
                                <div className="frame-4_31738">
                                    <Avatar1
                                        id="4_31739"
                                        className="instance-4_31739"
                                        variant={"image"}
                                        size={"s (32)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31738 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar4 && (
                            <div
                                id="4_31740"
                                className="stroke-wrapper-4_31740"
                            >
                                <div className="frame-4_31740">
                                    <Avatar1
                                        id="4_31741"
                                        className="instance-4_31741"
                                        variant={"image"}
                                        size={"s (32)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31740 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar5 && (
                            <div
                                id="4_31742"
                                className="stroke-wrapper-4_31742"
                            >
                                <div className="frame-4_31742">
                                    <Avatar1
                                        id="4_31743"
                                        className="instance-4_31743"
                                        variant={"image"}
                                        size={"s (32)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31742 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar6 && (
                            <div
                                id="4_31744"
                                className="stroke-wrapper-4_31744"
                            >
                                <div className="frame-4_31744">
                                    <Avatar1
                                        id="4_31745"
                                        className="instance-4_31745"
                                        variant={"image"}
                                        size={"s (32)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31744 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {counter && (
                            <div
                                id="4_31746"
                                className="stroke-wrapper-4_31746"
                            >
                                <div className="frame-4_31746">
                                    <Avatar1
                                        id="4_31747"
                                        className="instance-4_31747"
                                        text_2_22992={`+99`}
                                        variant={"text"}
                                        size={"s (32)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31746 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                    </div>
                )}
                {size === "2xs (20)" && (
                    <div id="4_31748" className="symbol-4_31748">
                        {avatar1 && (
                            <div
                                id="4_31749"
                                className="stroke-wrapper-4_31749"
                            >
                                <div className="frame-4_31749">
                                    <Avatar1
                                        id="4_31750"
                                        className="instance-4_31750"
                                        variant={"image"}
                                        size={"2xs (20)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31749 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar2 && (
                            <div
                                id="4_31751"
                                className="stroke-wrapper-4_31751"
                            >
                                <div className="frame-4_31751">
                                    <Avatar1
                                        id="4_31752"
                                        className="instance-4_31752"
                                        variant={"image"}
                                        size={"2xs (20)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31751 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar3 && (
                            <div
                                id="4_31753"
                                className="stroke-wrapper-4_31753"
                            >
                                <div className="frame-4_31753">
                                    <Avatar1
                                        id="4_31754"
                                        className="instance-4_31754"
                                        variant={"image"}
                                        size={"2xs (20)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31753 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar4 && (
                            <div
                                id="4_31755"
                                className="stroke-wrapper-4_31755"
                            >
                                <div className="frame-4_31755">
                                    <Avatar1
                                        id="4_31756"
                                        className="instance-4_31756"
                                        variant={"image"}
                                        size={"2xs (20)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31755 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar5 && (
                            <div
                                id="4_31757"
                                className="stroke-wrapper-4_31757"
                            >
                                <div className="frame-4_31757">
                                    <Avatar1
                                        id="4_31758"
                                        className="instance-4_31758"
                                        variant={"image"}
                                        size={"2xs (20)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31757 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar6 && (
                            <div
                                id="4_31759"
                                className="stroke-wrapper-4_31759"
                            >
                                <div className="frame-4_31759">
                                    <Avatar1
                                        id="4_31760"
                                        className="instance-4_31760"
                                        variant={"image"}
                                        size={"2xs (20)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31759 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {counter && (
                            <div
                                id="4_31761"
                                className="stroke-wrapper-4_31761"
                            >
                                <div className="frame-4_31761">
                                    <Avatar1
                                        id="4_31762"
                                        className="instance-4_31762"
                                        text_2_23040={`+9`}
                                        variant={"text"}
                                        size={"2xs (20)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31761 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                    </div>
                )}
                {size === "xs (24)" && (
                    <div id="4_31763" className="symbol-4_31763">
                        {avatar1 && (
                            <div
                                id="4_31764"
                                className="stroke-wrapper-4_31764"
                            >
                                <div className="frame-4_31764">
                                    <Avatar1
                                        id="4_31765"
                                        className="instance-4_31765"
                                        variant={"image"}
                                        size={"xs (24)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31764 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar2 && (
                            <div
                                id="4_31766"
                                className="stroke-wrapper-4_31766"
                            >
                                <div className="frame-4_31766">
                                    <Avatar1
                                        id="4_31767"
                                        className="instance-4_31767"
                                        variant={"image"}
                                        size={"xs (24)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31766 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar3 && (
                            <div
                                id="4_31768"
                                className="stroke-wrapper-4_31768"
                            >
                                <div className="frame-4_31768">
                                    <Avatar1
                                        id="4_31769"
                                        className="instance-4_31769"
                                        variant={"image"}
                                        size={"xs (24)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31768 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar4 && (
                            <div
                                id="4_31770"
                                className="stroke-wrapper-4_31770"
                            >
                                <div className="frame-4_31770">
                                    <Avatar1
                                        id="4_31771"
                                        className="instance-4_31771"
                                        variant={"image"}
                                        size={"xs (24)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31770 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar5 && (
                            <div
                                id="4_31772"
                                className="stroke-wrapper-4_31772"
                            >
                                <div className="frame-4_31772">
                                    <Avatar1
                                        id="4_31773"
                                        className="instance-4_31773"
                                        variant={"image"}
                                        size={"xs (24)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31772 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar6 && (
                            <div
                                id="4_31774"
                                className="stroke-wrapper-4_31774"
                            >
                                <div className="frame-4_31774">
                                    <Avatar1
                                        id="4_31775"
                                        className="instance-4_31775"
                                        variant={"image"}
                                        size={"xs (24)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31774 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {counter && (
                            <div
                                id="4_31776"
                                className="stroke-wrapper-4_31776"
                            >
                                <div className="frame-4_31776">
                                    <Avatar1
                                        id="4_31777"
                                        className="instance-4_31777"
                                        text_2_22983={`+99`}
                                        variant={"text"}
                                        size={"xs (24)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31776 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                    </div>
                )}
                {size === "l (40)" && (
                    <div id="4_31778" className="symbol-4_31778">
                        {avatar1 && (
                            <div
                                id="4_31779"
                                className="stroke-wrapper-4_31779"
                            >
                                <div className="frame-4_31779">
                                    <Avatar1
                                        id="4_31780"
                                        className="instance-4_31780"
                                        variant={"image"}
                                        size={"l (40)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31779 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar2 && (
                            <div
                                id="4_31781"
                                className="stroke-wrapper-4_31781"
                            >
                                <div className="frame-4_31781">
                                    <Avatar1
                                        id="4_31782"
                                        className="instance-4_31782"
                                        variant={"image"}
                                        size={"l (40)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31781 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar3 && (
                            <div
                                id="4_31783"
                                className="stroke-wrapper-4_31783"
                            >
                                <div className="frame-4_31783">
                                    <Avatar1
                                        id="4_31784"
                                        className="instance-4_31784"
                                        variant={"image"}
                                        size={"l (40)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31783 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar4 && (
                            <div
                                id="4_31785"
                                className="stroke-wrapper-4_31785"
                            >
                                <div className="frame-4_31785">
                                    <Avatar1
                                        id="4_31786"
                                        className="instance-4_31786"
                                        variant={"image"}
                                        size={"l (40)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31785 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar5 && (
                            <div
                                id="4_31787"
                                className="stroke-wrapper-4_31787"
                            >
                                <div className="frame-4_31787">
                                    <Avatar1
                                        id="4_31788"
                                        className="instance-4_31788"
                                        variant={"image"}
                                        size={"l (40)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31787 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar6 && (
                            <div
                                id="4_31789"
                                className="stroke-wrapper-4_31789"
                            >
                                <div className="frame-4_31789">
                                    <Avatar1
                                        id="4_31790"
                                        className="instance-4_31790"
                                        variant={"image"}
                                        size={"l (40)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31789 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {counter && (
                            <div
                                id="4_31791"
                                className="stroke-wrapper-4_31791"
                            >
                                <div className="frame-4_31791">
                                    <Avatar1
                                        id="4_31792"
                                        className="instance-4_31792"
                                        text_2_23001={`+99`}
                                        variant={"text"}
                                        size={"l (40)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31791 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                    </div>
                )}
                {size === "3xss (16)" && (
                    <div id="4_31793" className="symbol-4_31793">
                        {avatar1 && (
                            <div
                                id="4_31794"
                                className="stroke-wrapper-4_31794"
                            >
                                <div className="frame-4_31794">
                                    <Avatar1
                                        id="4_31795"
                                        className="instance-4_31795"
                                        variant={"image"}
                                        size={"3xs (16)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31794 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar2 && (
                            <div
                                id="4_31796"
                                className="stroke-wrapper-4_31796"
                            >
                                <div className="frame-4_31796">
                                    <Avatar1
                                        id="4_31797"
                                        className="instance-4_31797"
                                        variant={"image"}
                                        size={"3xs (16)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31796 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar3 && (
                            <div
                                id="4_31798"
                                className="stroke-wrapper-4_31798"
                            >
                                <div className="frame-4_31798">
                                    <Avatar1
                                        id="4_31799"
                                        className="instance-4_31799"
                                        variant={"image"}
                                        size={"3xs (16)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31798 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar4 && (
                            <div
                                id="4_31800"
                                className="stroke-wrapper-4_31800"
                            >
                                <div className="frame-4_31800">
                                    <Avatar1
                                        id="4_31801"
                                        className="instance-4_31801"
                                        variant={"image"}
                                        size={"3xs (16)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31800 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar5 && (
                            <div
                                id="4_31802"
                                className="stroke-wrapper-4_31802"
                            >
                                <div className="frame-4_31802">
                                    <Avatar1
                                        id="4_31803"
                                        className="instance-4_31803"
                                        variant={"image"}
                                        size={"3xs (16)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31802 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar6 && (
                            <div
                                id="4_31804"
                                className="stroke-wrapper-4_31804"
                            >
                                <div className="frame-4_31804">
                                    <Avatar1
                                        id="4_31805"
                                        className="instance-4_31805"
                                        variant={"image"}
                                        size={"3xs (16)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31804 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {counter && (
                            <div
                                id="4_31806"
                                className="stroke-wrapper-4_31806"
                            >
                                <div className="frame-4_31806">
                                    <Avatar1
                                        id="4_31807"
                                        className="instance-4_31807"
                                        text_2_22976={`+9`}
                                        variant={"text"}
                                        size={"3xs (16)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31806 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                    </div>
                )}
                {size === "m (36)" && (
                    <div id="4_31808" className="symbol-4_31808">
                        {avatar1 && (
                            <div
                                id="4_31809"
                                className="stroke-wrapper-4_31809"
                            >
                                <div className="frame-4_31809">
                                    <Avatar1
                                        id="4_31810"
                                        className="instance-4_31810"
                                        variant={"image"}
                                        size={"m (36)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31809 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar2 && (
                            <div
                                id="4_31811"
                                className="stroke-wrapper-4_31811"
                            >
                                <div className="frame-4_31811">
                                    <Avatar1
                                        id="4_31812"
                                        className="instance-4_31812"
                                        variant={"image"}
                                        size={"m (36)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31811 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar3 && (
                            <div
                                id="4_31813"
                                className="stroke-wrapper-4_31813"
                            >
                                <div className="frame-4_31813">
                                    <Avatar1
                                        id="4_31814"
                                        className="instance-4_31814"
                                        variant={"image"}
                                        size={"m (36)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31813 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar4 && (
                            <div
                                id="4_31815"
                                className="stroke-wrapper-4_31815"
                            >
                                <div className="frame-4_31815">
                                    <Avatar1
                                        id="4_31816"
                                        className="instance-4_31816"
                                        variant={"image"}
                                        size={"s (32)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31815 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar5 && (
                            <div
                                id="4_31817"
                                className="stroke-wrapper-4_31817"
                            >
                                <div className="frame-4_31817">
                                    <Avatar1
                                        id="4_31818"
                                        className="instance-4_31818"
                                        variant={"image"}
                                        size={"s (32)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31817 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {avatar6 && (
                            <div
                                id="4_31819"
                                className="stroke-wrapper-4_31819"
                            >
                                <div className="frame-4_31819">
                                    <Avatar1
                                        id="4_31820"
                                        className="instance-4_31820"
                                        variant={"image"}
                                        size={"s (32)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31819 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                        {counter && (
                            <div
                                id="4_31821"
                                className="stroke-wrapper-4_31821"
                            >
                                <div className="frame-4_31821">
                                    <Avatar1
                                        id="4_31822"
                                        className="instance-4_31822"
                                        text_2_23050={`+99`}
                                        variant={"text"}
                                        size={"m (36)"}
                                        notification={false}
                                    ></Avatar1>
                                </div>
                                <div className="stroke-4_31821 stroke-lightbgsurface1-2_2272"></div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Avatargroup;
