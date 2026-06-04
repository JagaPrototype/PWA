import Buttoniconssecondarysquaredefaultneutral from "@/components/buttoniconssecondarysquaredefaultneutral";
import DialogSwapcontainer from "@/components/dialogswapcontainer";
import DialogButtongroup from "@/components/dialogbuttongroup";
import Illustrationgraphics from "@/components/illustrationgraphics";
import CommunicationCalldialogFill from "@/components/communicationcalldialogfill";
import Listitems from "@/components/listitems";
import "@/styles/Dialog.css";
interface dialogProps {
    illustration?: string;
    icon?: string;
    subtitle?: boolean;
    subtitleText?: string;
    swap?: boolean;
    variant?: string;
    id?: string;
    className?: string;
}
const Dialog = (props: dialogProps) => {
    const {
        illustration = "Component_3500_98823",
        icon = "Component_3552_101312",
        subtitle = true,
        subtitleText = "Subtitle",
        swap = false,
        variant,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-355_7618 ${className}`} id={id}>
            <div id="355_7618" className="symbol-355_7618">
                {variant === "withSubtitle" && (
                    <div
                        id="355_7619"
                        className="symbol-355_7619 fill-lightbgsurface1-355_5764 effect-shadowbottoml-2_20352"
                    >
                        <div id="355_7620" className="frame-355_7620">
                            <div className="frame-content-355_7620">
                                <div id="355_7621" className="frame-355_7621">
                                    <div className="frame-content-355_7621">
                                        <p
                                            id="355_7622"
                                            className="paragraph-355_7622 fill-lightfgdefault-355_5765-paragraph text-mobileh4-2_18972"
                                        >
                                            {"Single or multiple line title"}
                                        </p>
                                        {subtitle && (
                                            <p
                                                id="355_7623"
                                                className="paragraph-355_7623 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-2_2288"
                                            >
                                                {subtitleText ?? "Subtitle"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <Buttoniconssecondarysquaredefaultneutral
                                    id="355_7624"
                                    className="instance-355_7624"
                                    iconvariant20={"Component_355_5745"}
                                    iconvariant16={"Component_3440_92197"}
                                ></Buttoniconssecondarysquaredefaultneutral>
                            </div>
                        </div>
                        {swap && (
                            <DialogSwapcontainer
                                id="355_7625"
                                className="instance-355_7625"
                            ></DialogSwapcontainer>
                        )}
                        <DialogButtongroup
                            id="355_7626"
                            className="instance-355_7626"
                            variant={"horizontal"}
                        ></DialogButtongroup>
                    </div>
                )}
                {variant === "illustration" && (
                    <div
                        id="355_7627"
                        className="symbol-355_7627 fill-lightbgsurface1-355_5764 effect-shadowbottoml-2_20352"
                    >
                        <div id="355_7628" className="frame-355_7628">
                            <div className="frame-content-355_7628">
                                <Illustrationgraphics
                                    id="355_7629"
                                    className="instance-355_7629"
                                ></Illustrationgraphics>
                                <div id="355_7630" className="frame-355_7630">
                                    <div className="frame-content-355_7630">
                                        <p
                                            id="355_7631"
                                            className="paragraph-355_7631 fill-lightfgdefault-355_5765-paragraph text-mobileh4-2_18972"
                                        >
                                            {"Single or multiple line title"}
                                        </p>
                                        <p
                                            id="355_7632"
                                            className="paragraph-355_7632 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-2_2288"
                                        >
                                            {subtitleText ?? "Subtitle"}
                                        </p>
                                    </div>
                                </div>
                                <Buttoniconssecondarysquaredefaultneutral
                                    id="355_7633"
                                    className="instance-355_7633"
                                    iconvariant20={"Component_355_5745"}
                                    iconvariant16={"Component_3440_92197"}
                                ></Buttoniconssecondarysquaredefaultneutral>
                            </div>
                        </div>
                        <DialogButtongroup
                            id="355_7634"
                            className="instance-355_7634"
                            variant={"horizontal"}
                        ></DialogButtongroup>
                    </div>
                )}
                {variant === "icon" && (
                    <div
                        id="355_7635"
                        className="symbol-355_7635 fill-lightbgsurface1-355_5764 effect-shadowbottoml-2_20352"
                    >
                        <div id="355_7636" className="frame-355_7636">
                            <div className="frame-content-355_7636">
                                <div
                                    id="355_7637"
                                    className="frame-355_7637 fill-lightbgsurface3-2_22053"
                                >
                                    <CommunicationCalldialogFill
                                        id="355_7638"
                                        className="instance-355_7638"
                                    ></CommunicationCalldialogFill>
                                </div>
                                <div id="355_7639" className="frame-355_7639">
                                    <div className="frame-content-355_7639">
                                        <p
                                            id="355_7640"
                                            className="paragraph-355_7640 fill-lightfgdefault-355_5765-paragraph text-mobileh4-2_18972"
                                        >
                                            {"Single or multiple line title"}
                                        </p>
                                        <p
                                            id="355_7641"
                                            className="paragraph-355_7641 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-2_2288"
                                        >
                                            {subtitleText ?? "Subtitle"}
                                        </p>
                                    </div>
                                </div>
                                <Buttoniconssecondarysquaredefaultneutral
                                    id="355_7642"
                                    className="instance-355_7642"
                                    iconvariant20={"Component_355_5745"}
                                    iconvariant16={"Component_3440_92197"}
                                ></Buttoniconssecondarysquaredefaultneutral>
                            </div>
                        </div>
                        <DialogButtongroup
                            id="355_7643"
                            className="instance-355_7643"
                            variant={"horizontal"}
                        ></DialogButtongroup>
                    </div>
                )}
                {variant === "multipleLineTitle" && (
                    <div
                        id="355_7644"
                        className="symbol-355_7644 fill-lightbgsurface1-355_5764 effect-shadowbottoml-2_20352"
                    >
                        <div id="355_7645" className="frame-355_7645">
                            <div className="frame-content-355_7645">
                                <p
                                    id="355_7646"
                                    className="paragraph-355_7646 fill-lightfgdefault-355_5765-paragraph text-mobileh4-2_18972"
                                >
                                    {
                                        "This is a very long title that can not fit on one line"
                                    }
                                </p>
                                <Buttoniconssecondarysquaredefaultneutral
                                    id="355_7647"
                                    className="instance-355_7647"
                                    iconvariant20={"Component_355_5745"}
                                    iconvariant16={"Component_3440_92197"}
                                ></Buttoniconssecondarysquaredefaultneutral>
                            </div>
                        </div>
                        {swap && (
                            <DialogSwapcontainer
                                id="355_7648"
                                className="instance-355_7648"
                            ></DialogSwapcontainer>
                        )}
                        <DialogButtongroup
                            id="355_7649"
                            className="instance-355_7649"
                            variant={"horizontal"}
                        ></DialogButtongroup>
                    </div>
                )}
                {variant === "singleLineTitle" && (
                    <div
                        id="355_7650"
                        className="symbol-355_7650 fill-lightbgsurface1-355_5764 effect-shadowbottoml-2_20352"
                    >
                        <div id="355_7651" className="frame-355_7651">
                            <div className="frame-content-355_7651">
                                <p
                                    id="355_7652"
                                    className="paragraph-355_7652 fill-lightfgdefault-355_5765-paragraph text-mobileh4-2_18972"
                                >
                                    {"Single line title"}
                                </p>
                                <Buttoniconssecondarysquaredefaultneutral
                                    id="355_7653"
                                    className="instance-355_7653"
                                    iconvariant20={"Component_355_5745"}
                                    iconvariant16={"Component_3440_92197"}
                                ></Buttoniconssecondarysquaredefaultneutral>
                            </div>
                        </div>
                        {swap && (
                            <div
                                id="355_7654"
                                className="instance-355_7654"
                                instance_355_5741={
                                    "subtitleLines1linelefticonrightswitchcheckedfalsedisabledfalse"
                                }
                            >
                                <Listitems id="355_7654"></Listitems>
                                <DialogSwapcontainer id="355_7654"></DialogSwapcontainer>
                            </div>
                        )}
                        <DialogButtongroup
                            id="355_7655"
                            className="instance-355_7655"
                            variant={"horizontal"}
                        ></DialogButtongroup>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Dialog;
