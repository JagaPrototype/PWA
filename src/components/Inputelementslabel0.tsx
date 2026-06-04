import SecurityPrivate1 from "@/components/securityprivate1";
import SecurityPrivate0 from "@/components/securityprivate0";
import SecurityPrivate from "@/components/securityprivate";
import "@/styles/Inputelementslabel0.css";
interface inputelementslabel0Props {
    counter?: boolean;
    required?: boolean;
    labelText?: string;
    icon?: boolean;
    iconRight16?: string;
    size?: string;
    disabled?: string;
    id?: string;
    className?: string;
    text_1500_45605?: string;
    text_1500_45609?: string;
    text_1500_45613?: string;
    text_1500_45617?: string;
    text_1500_45637?: string;
    text_1500_45641?: string;
    text_1500_45629?: string;
    text_1500_45633?: string;
    text_1500_45597?: string;
    text_1500_45601?: string;
    text_1500_45621?: string;
    text_1500_45625?: string;
}
const Inputelementslabel0 = (props: inputelementslabel0Props) => {
    const {
        counter = true,
        required = true,
        labelText = "Label",
        icon = true,
        iconRight16 = "Component_3491_94230",
        size,
        disabled,
        id,
        className = "",
        text_1500_45605,
        text_1500_45609,
        text_1500_45613,
        text_1500_45617,
        text_1500_45637,
        text_1500_45641,
        text_1500_45629,
        text_1500_45633,
        text_1500_45597,
        text_1500_45601,
        text_1500_45621,
        text_1500_45625
    } = props;

    return (
        <div className={`component-1500_45593 ${className}`} id={id}>
            <div id="1500_45593" className="symbol-1500_45593">
                {size === "xl" && disabled === "false" && (
                    <div id="1500_45594" className="symbol-1500_45594">
                        <div id="1500_45595" className="frame-1500_45595">
                            <div className="frame-content-1500_45595">
                                <div
                                    id="1500_45596"
                                    className="frame-1500_45596"
                                >
                                    <div className="frame-content-1500_45596">
                                        <p
                                            id="1500_45597"
                                            className="paragraph-1500_45597 fill-lightfgmuted-1500_45660-paragraph text-mobilebody-l-1500_45644"
                                        >
                                            {labeltext ??
                                                text_1500_45597 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="1500_45598"
                                                className="frame-1500_45598"
                                            >
                                                <div className="frame-content-1500_45598">
                                                    <div
                                                        id="1500_45599"
                                                        className="vector-1500_45599"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <SecurityPrivate1
                                        id="1500_45600"
                                        className="instance-1500_45600"
                                    ></SecurityPrivate1>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="1500_45601"
                                className="paragraph-1500_45601 fill-lightfgmuted-1500_45660-paragraph text-mobilecaption-l-1500_45647"
                            >
                                {text_1500_45601 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
                {size === "l" && disabled === "false" && (
                    <div id="1500_45602" className="symbol-1500_45602">
                        <div id="1500_45603" className="frame-1500_45603">
                            <div className="frame-content-1500_45603">
                                <div
                                    id="1500_45604"
                                    className="frame-1500_45604"
                                >
                                    <div className="frame-content-1500_45604">
                                        <p
                                            id="1500_45605"
                                            className="paragraph-1500_45605 fill-lightfgmuted-1500_45660-paragraph text-mobilecaption-l-1500_45647"
                                        >
                                            {labeltext ??
                                                text_1500_45605 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="1500_45606"
                                                className="frame-1500_45606"
                                            >
                                                <div className="frame-content-1500_45606">
                                                    <div
                                                        id="1500_45607"
                                                        className="vector-1500_45607"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <div
                                        id="1500_45608"
                                        className="instance-1500_45608"
                                        instance_58_11534={"SecurityPrivate"}
                                    >
                                        {rightIconvariant16 ===
                                            "Component_782_34497" && (
                                            <SecurityPrivate0 id="1500_45608"></SecurityPrivate0>
                                        )}
                                        {rightIconvariant16 ===
                                            "Component_58_11534" && (
                                            <SecurityPrivate id="1500_45608"></SecurityPrivate>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="1500_45609"
                                className="paragraph-1500_45609 fill-lightfgmuted-1500_45660-paragraph text-mobilecaption-l-1500_45647"
                            >
                                {text_1500_45609 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
                {size === "m" && disabled === "false" && (
                    <div id="1500_45610" className="symbol-1500_45610">
                        <div id="1500_45611" className="frame-1500_45611">
                            <div className="frame-content-1500_45611">
                                <div
                                    id="1500_45612"
                                    className="frame-1500_45612"
                                >
                                    <div className="frame-content-1500_45612">
                                        <p
                                            id="1500_45613"
                                            className="paragraph-1500_45613 fill-lightfgmuted-1500_45660-paragraph text-mobilecaption-m-1500_45648"
                                        >
                                            {labeltext ??
                                                text_1500_45613 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="1500_45614"
                                                className="frame-1500_45614"
                                            >
                                                <div className="frame-content-1500_45614">
                                                    <div
                                                        id="1500_45615"
                                                        className="vector-1500_45615"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <div
                                        id="1500_45616"
                                        className="instance-1500_45616"
                                        instance_58_11534={"SecurityPrivate"}
                                    >
                                        {rightIconvariant16 ===
                                            "Component_782_34497" && (
                                            <SecurityPrivate0 id="1500_45616"></SecurityPrivate0>
                                        )}
                                        {rightIconvariant16 ===
                                            "Component_58_11534" && (
                                            <SecurityPrivate id="1500_45616"></SecurityPrivate>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="1500_45617"
                                className="paragraph-1500_45617 fill-lightfgmuted-1500_45660-paragraph text-mobilecaption-m-1500_45648"
                            >
                                {text_1500_45617 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
                {size === "xl" && disabled === "true" && (
                    <div id="1500_45618" className="symbol-1500_45618">
                        <div id="1500_45619" className="frame-1500_45619">
                            <div className="frame-content-1500_45619">
                                <div
                                    id="1500_45620"
                                    className="frame-1500_45620"
                                >
                                    <div className="frame-content-1500_45620">
                                        <p
                                            id="1500_45621"
                                            className="paragraph-1500_45621 fill-lightfgdisabled-1500_45659-paragraph text-mobilebody-l-1500_45644"
                                        >
                                            {labeltext ??
                                                text_1500_45621 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="1500_45622"
                                                className="frame-1500_45622"
                                            >
                                                <div className="frame-content-1500_45622">
                                                    <div
                                                        id="1500_45623"
                                                        className="vector-1500_45623"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <SecurityPrivate1
                                        id="1500_45624"
                                        className="instance-1500_45624"
                                    ></SecurityPrivate1>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="1500_45625"
                                className="paragraph-1500_45625 fill-lightfgdisabled-1500_45659-paragraph text-mobilecaption-l-1500_45647"
                            >
                                {text_1500_45625 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
                {size === "l" && disabled === "true" && (
                    <div id="1500_45626" className="symbol-1500_45626">
                        <div id="1500_45627" className="frame-1500_45627">
                            <div className="frame-content-1500_45627">
                                <div
                                    id="1500_45628"
                                    className="frame-1500_45628"
                                >
                                    <div className="frame-content-1500_45628">
                                        <p
                                            id="1500_45629"
                                            className="paragraph-1500_45629 fill-lightfgdisabled-1500_45659-paragraph text-mobilecaption-l-1500_45647"
                                        >
                                            {labeltext ??
                                                text_1500_45629 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="1500_45630"
                                                className="frame-1500_45630"
                                            >
                                                <div className="frame-content-1500_45630">
                                                    <div
                                                        id="1500_45631"
                                                        className="vector-1500_45631"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <div
                                        id="1500_45632"
                                        className="instance-1500_45632"
                                        instance_58_11534={"SecurityPrivate"}
                                    >
                                        {rightIconvariant16 ===
                                            "Component_782_34497" && (
                                            <SecurityPrivate0 id="1500_45632"></SecurityPrivate0>
                                        )}
                                        {rightIconvariant16 ===
                                            "Component_58_11534" && (
                                            <SecurityPrivate id="1500_45632"></SecurityPrivate>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="1500_45633"
                                className="paragraph-1500_45633 fill-lightfgdisabled-1500_45659-paragraph text-mobilecaption-l-1500_45647"
                            >
                                {text_1500_45633 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
                {size === "m" && disabled === "true" && (
                    <div id="1500_45634" className="symbol-1500_45634">
                        <div id="1500_45635" className="frame-1500_45635">
                            <div className="frame-content-1500_45635">
                                <div
                                    id="1500_45636"
                                    className="frame-1500_45636"
                                >
                                    <div className="frame-content-1500_45636">
                                        <p
                                            id="1500_45637"
                                            className="paragraph-1500_45637 fill-lightfgdisabled-1500_45659-paragraph text-mobilecaption-m-1500_45648"
                                        >
                                            {labeltext ??
                                                text_1500_45637 ??
                                                "Label"}
                                        </p>
                                        {required && (
                                            <div
                                                id="1500_45638"
                                                className="frame-1500_45638"
                                            >
                                                <div className="frame-content-1500_45638">
                                                    <div
                                                        id="1500_45639"
                                                        className="vector-1500_45639"
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {icon && (
                                    <div
                                        id="1500_45640"
                                        className="instance-1500_45640"
                                        instance_58_11534={"SecurityPrivate"}
                                    >
                                        {rightIconvariant16 ===
                                            "Component_782_34497" && (
                                            <SecurityPrivate0 id="1500_45640"></SecurityPrivate0>
                                        )}
                                        {rightIconvariant16 ===
                                            "Component_58_11534" && (
                                            <SecurityPrivate id="1500_45640"></SecurityPrivate>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        {counter && (
                            <p
                                id="1500_45641"
                                className="paragraph-1500_45641 fill-lightfgdisabled-1500_45659-paragraph text-mobilecaption-m-1500_45648"
                            >
                                {text_1500_45641 ?? "0 / 25"}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Inputelementslabel0;
