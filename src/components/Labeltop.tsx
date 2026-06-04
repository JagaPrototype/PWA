import SecurityPrivate from "@/components/securityprivate";
import "@/styles/Labeltop.css";
interface labeltopProps {
    counter?: boolean;
    required?: boolean;
    icon?: boolean;
    labeltext?: string;
    rightIconvariant16?: string;
    size?: string;
    id?: string;
    className?: string;
    text_2_20288?: string;
    text_2_20292?: string;
    text_2_20296?: string;
    text_2_20300?: string;
}
const Labeltop = (props: labeltopProps) => {
    const {
        counter = true,
        required = true,
        icon = true,
        labeltext = "Label",
        rightIconvariant16 = "Component_3491_94230",
        size,
        id,
        className = "",
        text_2_20288,
        text_2_20292,
        text_2_20296,
        text_2_20300
    } = props;

    return (
        <div className={`component-2_20284 ${className}`} id={id}>
            <div id="2_20284" className="symbol-2_20284">
                {size === "l" && (
                    <div id="2_20285" className="symbol-2_20285">
                        <div id="2_20286" className="frame-2_20286">
                            <div className="frame-content-2_20286">
                                <div id="2_20287" className="frame-2_20287">
                                    <div className="frame-content-2_20287">
                                        <p
                                            id="2_20288"
                                            className="paragraph-2_20288 fill-lightfgmuted-2_2271-paragraph text-mobilecaption-l-2_2289"
                                        >
                                            {labeltext ??
                                                text_2_20288 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="2_20289"
                                                className="frame-2_20289"
                                            >
                                                <div className="frame-content-2_20289">
                                                    <div
                                                        id="2_20290"
                                                        className="vector-2_20290"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <SecurityPrivate
                                        id="2_20291"
                                        className="instance-2_20291"
                                    ></SecurityPrivate>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="2_20292"
                                className="paragraph-2_20292 fill-lightneutralmuted-2_22062-paragraph text-mobilecaption-l-2_2289"
                            >
                                {text_2_20292 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
                {size === "m" && (
                    <div id="2_20293" className="symbol-2_20293">
                        <div id="2_20294" className="frame-2_20294">
                            <div className="frame-content-2_20294">
                                <div id="2_20295" className="frame-2_20295">
                                    <div className="frame-content-2_20295">
                                        <p
                                            id="2_20296"
                                            className="paragraph-2_20296 fill-lightfgmuted-2_2271-paragraph text-mobilecaption-m-2_2290"
                                        >
                                            {labeltext ??
                                                text_2_20296 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="2_20297"
                                                className="frame-2_20297"
                                            >
                                                <div className="frame-content-2_20297">
                                                    <div
                                                        id="2_20298"
                                                        className="vector-2_20298"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <SecurityPrivate
                                        id="2_20299"
                                        className="instance-2_20299"
                                    ></SecurityPrivate>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="2_20300"
                                className="paragraph-2_20300 fill-lightneutralmuted-2_22062-paragraph text-mobilecaption-m-2_2290"
                            >
                                {text_2_20300 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Labeltop;
