import _Tab_segmented_item from "@/components/tabsegmenteditem";
import "@/styles/Segmentedcontrol.css";
interface segmentedcontrolProps {
    size?: string;
    type?: string;
    tabcount?: string;
    id?: string;
    className?: string;
}
const Segmentedcontrol = (props: segmentedcontrolProps) => {
    const { size, type, tabcount, id, className = "" } = props;

    return (
        <div className={`component-2_56434 ${className}`} id={id}>
            <div id="2_56434" className="symbol-2_56434">
                {size === "l" &&
                    type === "primary" &&
                    tabcount === "2 tabs" && (
                        <div
                            id="2_56435"
                            className="symbol-2_56435 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56436"
                                className="instance-2_56436"
                                size={"l"}
                                type={"primary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56437"
                                className="instance-2_56437"
                                size={"l"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "l" &&
                    type === "secondary" &&
                    tabcount === "2 tabs" && (
                        <div
                            id="2_56438"
                            className="symbol-2_56438 fill-lightbgsurface3-2_20356"
                        >
                            <div
                                id="2_56439"
                                className="instance-2_56439"
                                instance_2_56384={
                                    "sizeltypesecondarystateactivetexttrueicontrue"
                                }
                            >
                                <_Tab_segmented_item
                                    id="2_56439"
                                    size={"l"}
                                    type={"secondary"}
                                    state={"active"}
                                    text={"true"}
                                    icon={"true"}
                                ></_Tab_segmented_item>
                                <_Tab_segmented_item
                                    id="2_56439"
                                    size={"l"}
                                    type={"secondary"}
                                    state={"active"}
                                    text={"true"}
                                    icon={"false"}
                                ></_Tab_segmented_item>
                            </div>
                            <div
                                id="2_56440"
                                className="instance-2_56440"
                                instance_2_56392={
                                    "sizeltypeprimarystatedefaulttexttrueicontrue"
                                }
                            >
                                <_Tab_segmented_item
                                    id="2_56440"
                                    size={"l"}
                                    type={"primary"}
                                    state={"default"}
                                    text={"true"}
                                    icon={"true"}
                                ></_Tab_segmented_item>
                                <_Tab_segmented_item
                                    id="2_56440"
                                    size={"l"}
                                    type={"secondary"}
                                    state={"default"}
                                    text={"true"}
                                    icon={"false"}
                                ></_Tab_segmented_item>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    type === "primary" &&
                    tabcount === "3 tabs" && (
                        <div
                            id="2_56441"
                            className="symbol-2_56441 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56442"
                                className="instance-2_56442"
                                size={"l"}
                                type={"primary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56443"
                                className="instance-2_56443"
                                size={"l"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56444"
                                className="instance-2_56444"
                                size={"l"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "l" &&
                    type === "primary" &&
                    tabcount === "4 tabs" && (
                        <div
                            id="2_56445"
                            className="symbol-2_56445 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56446"
                                className="instance-2_56446"
                                size={"l"}
                                type={"primary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56447"
                                className="instance-2_56447"
                                size={"l"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56448"
                                className="instance-2_56448"
                                size={"l"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56449"
                                className="instance-2_56449"
                                size={"l"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "l" &&
                    type === "primary" &&
                    tabcount === "5 tabs" && (
                        <div
                            id="2_56450"
                            className="symbol-2_56450 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56451"
                                className="instance-2_56451"
                                size={"l"}
                                type={"primary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56452"
                                className="instance-2_56452"
                                size={"l"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56453"
                                className="instance-2_56453"
                                size={"l"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56454"
                                className="instance-2_56454"
                                size={"l"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56455"
                                className="instance-2_56455"
                                size={"l"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "l" &&
                    type === "secondary" &&
                    tabcount === "3 tabs" && (
                        <div
                            id="2_56456"
                            className="symbol-2_56456 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56457"
                                className="instance-2_56457"
                                size={"l"}
                                type={"secondary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56458"
                                className="instance-2_56458"
                                size={"l"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56459"
                                className="instance-2_56459"
                                size={"l"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "l" &&
                    type === "secondary" &&
                    tabcount === "4 tabs" && (
                        <div
                            id="2_56460"
                            className="symbol-2_56460 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56461"
                                className="instance-2_56461"
                                size={"l"}
                                type={"secondary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56462"
                                className="instance-2_56462"
                                size={"l"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56463"
                                className="instance-2_56463"
                                size={"l"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56464"
                                className="instance-2_56464"
                                size={"l"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "l" &&
                    type === "secondary" &&
                    tabcount === "5 tabs" && (
                        <div
                            id="2_56465"
                            className="symbol-2_56465 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56466"
                                className="instance-2_56466"
                                size={"l"}
                                type={"secondary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56467"
                                className="instance-2_56467"
                                size={"l"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56468"
                                className="instance-2_56468"
                                size={"l"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56469"
                                className="instance-2_56469"
                                size={"l"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56470"
                                className="instance-2_56470"
                                size={"l"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "m" &&
                    type === "primary" &&
                    tabcount === "2 tabs" && (
                        <div
                            id="2_56471"
                            className="symbol-2_56471 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56472"
                                className="instance-2_56472"
                                size={"m"}
                                type={"primary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56473"
                                className="instance-2_56473"
                                size={"m"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "m" &&
                    type === "secondary" &&
                    tabcount === "2 tabs" && (
                        <div
                            id="2_56474"
                            className="symbol-2_56474 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56475"
                                className="instance-2_56475"
                                size={"m"}
                                type={"secondary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56476"
                                className="instance-2_56476"
                                size={"m"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "m" &&
                    type === "primary" &&
                    tabcount === "3 tabs" && (
                        <div
                            id="2_56477"
                            className="symbol-2_56477 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56478"
                                className="instance-2_56478"
                                size={"m"}
                                type={"primary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56479"
                                className="instance-2_56479"
                                size={"m"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56480"
                                className="instance-2_56480"
                                size={"m"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "m" &&
                    type === "primary" &&
                    tabcount === "4 tabs" && (
                        <div
                            id="2_56481"
                            className="symbol-2_56481 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56482"
                                className="instance-2_56482"
                                size={"m"}
                                type={"primary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56483"
                                className="instance-2_56483"
                                size={"m"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56484"
                                className="instance-2_56484"
                                size={"m"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56485"
                                className="instance-2_56485"
                                size={"m"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "m" &&
                    type === "primary" &&
                    tabcount === "5 tabs" && (
                        <div
                            id="2_56486"
                            className="symbol-2_56486 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56487"
                                className="instance-2_56487"
                                size={"m"}
                                type={"primary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56488"
                                className="instance-2_56488"
                                size={"m"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56489"
                                className="instance-2_56489"
                                size={"m"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56490"
                                className="instance-2_56490"
                                size={"m"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56491"
                                className="instance-2_56491"
                                size={"m"}
                                type={"primary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "m" &&
                    type === "secondary" &&
                    tabcount === "3 tabs" && (
                        <div
                            id="2_56492"
                            className="symbol-2_56492 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56493"
                                className="instance-2_56493"
                                size={"m"}
                                type={"secondary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56494"
                                className="instance-2_56494"
                                size={"m"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56495"
                                className="instance-2_56495"
                                size={"m"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "m" &&
                    type === "secondary" &&
                    tabcount === "4 tabs" && (
                        <div
                            id="2_56496"
                            className="symbol-2_56496 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56497"
                                className="instance-2_56497"
                                size={"m"}
                                type={"secondary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56498"
                                className="instance-2_56498"
                                size={"m"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56499"
                                className="instance-2_56499"
                                size={"m"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56500"
                                className="instance-2_56500"
                                size={"m"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
                {size === "m" &&
                    type === "secondary" &&
                    tabcount === "5 tabs" && (
                        <div
                            id="2_56501"
                            className="symbol-2_56501 fill-lightbgsurface3-2_20356"
                        >
                            <_Tab_segmented_item
                                id="2_56502"
                                className="instance-2_56502"
                                size={"m"}
                                type={"secondary"}
                                state={"active"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56503"
                                className="instance-2_56503"
                                size={"m"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56504"
                                className="instance-2_56504"
                                size={"m"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56505"
                                className="instance-2_56505"
                                size={"m"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                            <_Tab_segmented_item
                                id="2_56506"
                                className="instance-2_56506"
                                size={"m"}
                                type={"secondary"}
                                state={"default"}
                                text={"true"}
                                icon={"false"}
                            ></_Tab_segmented_item>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Segmentedcontrol;
