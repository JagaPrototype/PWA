import _Tab_item from "@/components/tabitem";
import "@/styles/Tabs.css";
interface tabsProps {
    tab01?: boolean;
    tab02?: boolean;
    tab03?: boolean;
    tab04?: boolean;
    tab05?: boolean;
    tab06?: boolean;
    tab07?: boolean;
    tab08?: boolean;
    tab09?: boolean;
    tab10?: boolean;
    tab11?: boolean;
    tab12?: boolean;
    type?: string;
    tabcount?: string;
    id?: string;
    className?: string;
}
const Tabs = (props: tabsProps) => {
    const {
        tab01 = true,
        tab02 = true,
        tab03 = true,
        tab04 = true,
        tab05 = false,
        tab06 = false,
        tab07 = false,
        tab08 = false,
        tab09 = false,
        tab10 = false,
        tab11 = false,
        tab12 = false,
        type,
        tabcount,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-4_29230 ${className}`} id={id}>
            <div id="4_29230" className="symbol-4_29230">
                {type === "default" && tabcount === "auto width" && (
                    <div id="4_29231" className="symbol-4_29231">
                        <_Tab_item
                            id="4_29232"
                            className="instance-4_29232"
                            state={"active"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29233"
                            className="instance-4_29233"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29234"
                            className="instance-4_29234"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29235"
                            className="instance-4_29235"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29236"
                            className="instance-4_29236"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29237"
                            className="instance-4_29237"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29238"
                            className="instance-4_29238"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29239"
                            className="instance-4_29239"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29240"
                            className="instance-4_29240"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29241"
                            className="instance-4_29241"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29242"
                            className="instance-4_29242"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29243"
                            className="instance-4_29243"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                    </div>
                )}
                {type === "accent" && tabcount === "auto width" && (
                    <div id="4_29244" className="symbol-4_29244">
                        <_Tab_item
                            id="4_29245"
                            className="instance-4_29245"
                            state={"active"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29246"
                            className="instance-4_29246"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29247"
                            className="instance-4_29247"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29248"
                            className="instance-4_29248"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29249"
                            className="instance-4_29249"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29250"
                            className="instance-4_29250"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29251"
                            className="instance-4_29251"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29252"
                            className="instance-4_29252"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29253"
                            className="instance-4_29253"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29254"
                            className="instance-4_29254"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29255"
                            className="instance-4_29255"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29256"
                            className="instance-4_29256"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                        ></_Tab_item>
                    </div>
                )}
                {type === "accent" && tabcount === "2 tabs" && (
                    <div id="4_29257" className="symbol-4_29257">
                        <_Tab_item
                            id="4_29258"
                            className="instance-4_29258"
                            state={"active"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29259"
                            className="instance-4_29259"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                    </div>
                )}
                {type === "default" && tabcount === "2 tabs" && (
                    <div id="4_29260" className="symbol-4_29260">
                        <_Tab_item
                            id="4_29261"
                            className="instance-4_29261"
                            state={"active"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29262"
                            className="instance-4_29262"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                    </div>
                )}
                {type === "default" && tabcount === "3 tabs" && (
                    <div id="4_29263" className="symbol-4_29263">
                        <_Tab_item
                            id="4_29264"
                            className="instance-4_29264"
                            state={"active"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29265"
                            className="instance-4_29265"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29266"
                            className="instance-4_29266"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                    </div>
                )}
                {type === "default" && tabcount === "4 tabs" && (
                    <div id="4_29267" className="symbol-4_29267">
                        <_Tab_item
                            id="4_29268"
                            className="instance-4_29268"
                            state={"active"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29269"
                            className="instance-4_29269"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29270"
                            className="instance-4_29270"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29271"
                            className="instance-4_29271"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                    </div>
                )}
                {type === "default" && tabcount === "5 tabs" && (
                    <div id="4_29272" className="symbol-4_29272">
                        <_Tab_item
                            id="4_29273"
                            className="instance-4_29273"
                            state={"active"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29274"
                            className="instance-4_29274"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29275"
                            className="instance-4_29275"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29276"
                            className="instance-4_29276"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29277"
                            className="instance-4_29277"
                            state={"default"}
                            type={"default"}
                            indicator={"none"}
                            icon={false}
                            dropdown={false}
                        ></_Tab_item>
                    </div>
                )}
                {type === "accent" && tabcount === "3 tabs" && (
                    <div id="4_29278" className="symbol-4_29278">
                        <_Tab_item
                            id="4_29279"
                            className="instance-4_29279"
                            state={"active"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29280"
                            className="instance-4_29280"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29281"
                            className="instance-4_29281"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                    </div>
                )}
                {type === "accent" && tabcount === "4 tabs" && (
                    <div id="4_29282" className="symbol-4_29282">
                        <_Tab_item
                            id="4_29283"
                            className="instance-4_29283"
                            state={"active"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29284"
                            className="instance-4_29284"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29285"
                            className="instance-4_29285"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29286"
                            className="instance-4_29286"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                    </div>
                )}
                {type === "accent" && tabcount === "5 tabs" && (
                    <div id="4_29287" className="symbol-4_29287">
                        <_Tab_item
                            id="4_29288"
                            className="instance-4_29288"
                            state={"active"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29289"
                            className="instance-4_29289"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29290"
                            className="instance-4_29290"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29291"
                            className="instance-4_29291"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                        <_Tab_item
                            id="4_29292"
                            className="instance-4_29292"
                            state={"default"}
                            type={"accent"}
                            indicator={"none"}
                            dropdown={false}
                            icon={false}
                        ></_Tab_item>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Tabs;
