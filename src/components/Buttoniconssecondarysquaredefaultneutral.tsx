import NavigationClose from "@/components/navigationclose";
import ActionAdd0 from "@/components/actionadd0";
import "@/styles/Buttoniconssecondarysquaredefaultneutral.css";
interface buttoniconssecondarysquaredefaultneutralProps {
    iconvariant24?: string;
    iconvariant20?: string;
    iconvariant16?: string;
    iconvariant28?: string;
    id?: string;
    className?: string;
}
const Buttoniconssecondarysquaredefaultneutral = (
    props: buttoniconssecondarysquaredefaultneutralProps
) => {
    const {
        iconvariant24 = "Component_2_27400",
        iconvariant20 = "Component_0_0",
        iconvariant16 = "Component_0_0",
        iconvariant28 = "Component_0_0",
        id,
        className = ""
    } = props;

    return (
        <div className={`component-355_5743 ${className}`} id={id}>
            <div
                id="355_5743"
                className="symbol-355_5743 fill-lightbgsurface3-2_22053"
            >
                <div
                    id="355_5744"
                    className="instance-355_5744"
                    instance_2_23129={"NavigationClose"}
                >
                    {iconvariant20 === "Component_355_5745" && (
                        <NavigationClose id="355_5744"></NavigationClose>
                    )}
                    {iconvariant20 === "Component_2_23129" && (
                        <ActionAdd0 id="355_5744"></ActionAdd0>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Buttoniconssecondarysquaredefaultneutral;
