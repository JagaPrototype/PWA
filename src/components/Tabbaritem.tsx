import ActionHomeFill from "@/components/actionhomefill";
import DocumentFolderOpenFill from "@/components/documentfolderopenfill";
import ActionHome from "@/components/actionhome";
import Badge from "@/components/badge";
import Counter1 from "@/components/counter1";
import ActionCatalogFill from "@/components/actioncatalogfill";
import "@/styles/Tabbaritem.css";
interface tabbaritemProps {
    Text?: string;
    icon?: string;
    state?: string;
    badge?: string;
    id?: string;
    className?: string;
    instance_2_18850?: string;
    text_2_18853?: string;
    instance_2_18875?: string;
    text_2_18878?: string;
}
const Tabbaritem = (props: tabbaritemProps) => {
    const {
        Text = "menu item",
        icon = "Component_670_2729",
        state,
        badge,
        id,
        className = "",
        instance_2_18850,
        text_2_18853,
        instance_2_18875,
        text_2_18878
    } = props;

    return (
        <div className={`component-2_18849 ${className}`} id={id}>
            <div id="2_18849" className="symbol-2_18849">
                {state === "default" && badge === "none" && (
                    <div id="2_18850" className="symbol-2_18850">
                        <div id="2_18851" className="frame-2_18851">
                            <div
                                id="2_18852"
                                className="instance-2_18852"
                                instance_2_18964={"DocumentFolderOpenFill"}
                            >
                                <ActionHomeFill id="2_18852"></ActionHomeFill>
                                <DocumentFolderOpenFill id="2_18852"></DocumentFolderOpenFill>
                                <ActionHome id="2_18852"></ActionHome>
                            </div>
                        </div>
                        <p
                            id="2_18853"
                            className="paragraph-2_18853 fill-lightfgmuted-2_18966-paragraph text-caption-m-strong-2_2229"
                        >
                            {Text ?? text_2_18853 ?? "menu item"}
                        </p>
                    </div>
                )}
                {state === "default" && badge === "small" && (
                    <div id="2_18854" className="symbol-2_18854">
                        <div id="2_18855" className="frame-2_18855">
                            <ActionHome
                                id="2_18856"
                                className="instance-2_18856"
                            ></ActionHome>
                            <Badge
                                id="2_18857"
                                className="instance-2_18857"
                                variant={"primary"}
                            ></Badge>
                        </div>
                        <p
                            id="2_18858"
                            className="paragraph-2_18858 fill-lightfgmuted-2_18966-paragraph text-caption-m-strong-2_2229"
                        >
                            {Text ?? "menu item"}
                        </p>
                    </div>
                )}
                {state === "default" && badge === "large" && (
                    <div id="2_18859" className="symbol-2_18859">
                        <div id="2_18860" className="frame-2_18860">
                            <ActionHome
                                id="2_18861"
                                className="instance-2_18861"
                            ></ActionHome>
                            <Counter1
                                id="2_18862"
                                className="instance-2_18862"
                                size={"s"}
                                variant={"primary"}
                            ></Counter1>
                        </div>
                        <p
                            id="2_18863"
                            className="paragraph-2_18863 fill-lightfgmuted-2_18966-paragraph text-caption-m-strong-2_2229"
                        >
                            {Text ?? "menu item"}
                        </p>
                    </div>
                )}
                {state === "active" && badge === "small" && (
                    <div id="2_18864" className="symbol-2_18864">
                        <div id="2_18865" className="frame-2_18865">
                            <ActionHome
                                id="2_18866"
                                className="instance-2_18866"
                            ></ActionHome>
                            <Badge
                                id="2_18867"
                                className="instance-2_18867"
                                variant={"primary"}
                            ></Badge>
                        </div>
                        <p
                            id="2_18868"
                            className="paragraph-2_18868 fill-lightfgdefault-2_2230-paragraph text-caption-m-strong-2_2229"
                        >
                            {Text ?? "menu item"}
                        </p>
                    </div>
                )}
                {state === "active" && badge === "large" && (
                    <div id="2_18869" className="symbol-2_18869">
                        <div id="2_18870" className="frame-2_18870">
                            <ActionHome
                                id="2_18871"
                                className="instance-2_18871"
                            ></ActionHome>
                            <div
                                id="2_18872"
                                className="frame-2_18872 fill-lightaccentdefault-2_18841"
                            ></div>
                            <Counter1
                                id="2_18873"
                                className="instance-2_18873"
                                size={"s"}
                                variant={"primary"}
                            ></Counter1>
                        </div>
                        <p
                            id="2_18874"
                            className="paragraph-2_18874 fill-lightfgdefault-2_2230-paragraph text-caption-m-strong-2_2229"
                        >
                            {Text ?? "menu item"}
                        </p>
                    </div>
                )}
                {state === "active" && badge === "none" && (
                    <div id="2_18875" className="symbol-2_18875">
                        <div id="2_18876" className="frame-2_18876">
                            <div
                                id="2_18877"
                                className="instance-2_18877"
                                instance_2_18964={"ActionCatalogFill"}
                            >
                                <ActionCatalogFill id="2_18877"></ActionCatalogFill>
                                <ActionHome id="2_18877"></ActionHome>
                            </div>
                        </div>
                        <p
                            id="2_18878"
                            className="paragraph-2_18878 fill-lightfgdefault-2_2230-paragraph text-caption-m-strong-2_2229"
                        >
                            {Text ?? text_2_18878 ?? "menu item"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Tabbaritem;
