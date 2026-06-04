import ActionAdd3 from "@/components/actionadd3";
import ActionAdd0 from "@/components/actionadd0";
import ActionKanbanboard from "@/components/actionkanbanboard";
import ActionSettingsadjust from "@/components/actionsettingsadjust";
import NavigationCloselarge from "@/components/navigationcloselarge";
import ActionSearch from "@/components/actionsearch";
import OrganizeCalendar from "@/components/organizecalendar";
import NavigationChevronLeft from "@/components/navigationchevronleft";
import ActionAdd2 from "@/components/actionadd2";
import ActionAdd1 from "@/components/actionadd1";
import ActionFilterFill from "@/components/actionfilterfill";
import NavigationCaretSort from "@/components/navigationcaretsort";
import "@/styles/Buttonicon.css";
interface buttoniconProps {
    iconvariant24?: string;
    iconvariant20?: string;
    iconvariant16?: string;
    iconvariant28?: string;
    size?: string;
    state?: string;
    variant?: string;
    _style?: string;
    colorScheme?: string;
    id?: string;
    className?: string;
}
const Buttonicon = (props: buttoniconProps) => {
    const {
        iconvariant24 = "Component_3491_95527",
        iconvariant20 = "Component_3491_95023",
        iconvariant16 = "Component_3491_94714",
        iconvariant28 = "Component_3491_98402",
        size,
        state,
        variant,
        _style,
        colorScheme,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_22072 ${className}`} id={id}>
            <div id="2_22072" className="symbol-2_22072">
                {size === "xl" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22073"
                            className="symbol-2_22073 fill-lightinteractiveaccent-2_2283"
                        >
                            <ActionAdd3
                                id="2_22074"
                                className="instance-2_22074"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22075"
                            className="symbol-2_22075 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            <ActionAdd3
                                id="2_22076"
                                className="instance-2_22076"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22077"
                            className="symbol-2_22077 fill-lightinteractiveaccent-2_2283"
                        >
                            <ActionAdd3
                                id="2_22078"
                                className="instance-2_22078"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22079"
                            className="symbol-2_22079 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            <ActionAdd3
                                id="2_22080"
                                className="instance-2_22080"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22081"
                            className="symbol-2_22081 fill-lightinteractive-errordefault-2_2298"
                        >
                            <ActionAdd3
                                id="2_22082"
                                className="instance-2_22082"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22083"
                            className="symbol-2_22083 fill-lightinteractive-errorhover-2_23158"
                        >
                            <ActionAdd3
                                id="2_22084"
                                className="instance-2_22084"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22085"
                            className="symbol-2_22085 fill-lightinteractive-errordefault-2_2298"
                        >
                            <ActionAdd3
                                id="2_22086"
                                className="instance-2_22086"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22087"
                            className="symbol-2_22087 fill-lightinteractive-errorhover-2_23158"
                        >
                            <ActionAdd3
                                id="2_22088"
                                className="instance-2_22088"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22089"
                            className="symbol-2_22089 fill-lighterrormuted-2_23156"
                        >
                            <ActionAdd3
                                id="2_22090"
                                className="instance-2_22090"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22091"
                            className="symbol-2_22091 fill-lighterrormuted-2_23156"
                        >
                            <ActionAdd3
                                id="2_22092"
                                className="instance-2_22092"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22093"
                            className="symbol-2_22093 fill-lightaccentmuted-2_23147"
                        >
                            <ActionAdd3
                                id="2_22094"
                                className="instance-2_22094"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22095"
                            className="symbol-2_22095 fill-lightaccentmuted-2_23147"
                        >
                            <ActionAdd3
                                id="2_22096"
                                className="instance-2_22096"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22097"
                            className="symbol-2_22097 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd0
                                id="2_22098"
                                className="instance-2_22098"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22099"
                            className="symbol-2_22099 fill-lightaccentcontainer-hover-2_23160"
                        >
                            <ActionAdd0
                                id="2_22100"
                                className="instance-2_22100"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22101"
                            className="symbol-2_22101 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd0
                                id="2_22102"
                                className="instance-2_22102"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22103"
                            className="symbol-2_22103 fill-lightaccentcontainer-hover-2_23160"
                        >
                            <ActionAdd0
                                id="2_22104"
                                className="instance-2_22104"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22105"
                            className="symbol-2_22105 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd0
                                id="2_22106"
                                className="instance-2_22106"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22107"
                            className="symbol-2_22107 fill-lighterrorcontainer-hover-2_23151"
                        >
                            <ActionAdd0
                                id="2_22108"
                                className="instance-2_22108"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22109"
                            className="symbol-2_22109 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd0
                                id="2_22110"
                                className="instance-2_22110"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22111"
                            className="symbol-2_22111 fill-lighterrorcontainer-hover-2_23151"
                        >
                            <ActionAdd0
                                id="2_22112"
                                className="instance-2_22112"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22113"
                            className="symbol-2_22113 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd0
                                id="2_22114"
                                className="instance-2_22114"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22115"
                            className="symbol-2_22115 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd0
                                id="2_22116"
                                className="instance-2_22116"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22117"
                            className="symbol-2_22117 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd0
                                id="2_22118"
                                className="instance-2_22118"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22119"
                            className="symbol-2_22119 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd0
                                id="2_22120"
                                className="instance-2_22120"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22121" className="symbol-2_22121">
                            <ActionAdd0
                                id="2_22122"
                                className="instance-2_22122"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22123" className="symbol-2_22123">
                            <ActionAdd0
                                id="2_22124"
                                className="instance-2_22124"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22125" className="symbol-2_22125">
                            <ActionAdd0
                                id="2_22126"
                                className="instance-2_22126"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22127" className="symbol-2_22127">
                            <ActionAdd0
                                id="2_22128"
                                className="instance-2_22128"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22129" className="symbol-2_22129">
                            <ActionAdd0
                                id="2_22130"
                                className="instance-2_22130"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22131" className="symbol-2_22131">
                            <ActionAdd0
                                id="2_22132"
                                className="instance-2_22132"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22133" className="symbol-2_22133">
                            <ActionAdd0
                                id="2_22134"
                                className="instance-2_22134"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22135" className="symbol-2_22135">
                            <ActionAdd0
                                id="2_22136"
                                className="instance-2_22136"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22137" className="symbol-2_22137">
                            <ActionAdd0
                                id="2_22138"
                                className="instance-2_22138"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22139" className="symbol-2_22139">
                            <ActionAdd0
                                id="2_22140"
                                className="instance-2_22140"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22141" className="symbol-2_22141">
                            <ActionAdd0
                                id="2_22142"
                                className="instance-2_22142"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22143" className="symbol-2_22143">
                            <ActionAdd0
                                id="2_22144"
                                className="instance-2_22144"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22145" className="stroke-wrapper-2_22145">
                            <div className="symbol-2_22145">
                                <ActionAdd0
                                    id="2_22146"
                                    className="instance-2_22146"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22145 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22147" className="stroke-wrapper-2_22147">
                            <div className="symbol-2_22147">
                                <ActionAdd0
                                    id="2_22148"
                                    className="instance-2_22148"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22147 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22149" className="stroke-wrapper-2_22149">
                            <div className="symbol-2_22149">
                                <ActionAdd0
                                    id="2_22150"
                                    className="instance-2_22150"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22149 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22151" className="stroke-wrapper-2_22151">
                            <div className="symbol-2_22151">
                                <ActionAdd0
                                    id="2_22152"
                                    className="instance-2_22152"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22151 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22153" className="stroke-wrapper-2_22153">
                            <div className="symbol-2_22153">
                                <ActionAdd0
                                    id="2_22154"
                                    className="instance-2_22154"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22153 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22155" className="stroke-wrapper-2_22155">
                            <div className="symbol-2_22155">
                                <ActionAdd0
                                    id="2_22156"
                                    className="instance-2_22156"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22155 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22157" className="stroke-wrapper-2_22157">
                            <div className="symbol-2_22157">
                                <ActionAdd0
                                    id="2_22158"
                                    className="instance-2_22158"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22157 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22159" className="stroke-wrapper-2_22159">
                            <div className="symbol-2_22159">
                                <ActionAdd0
                                    id="2_22160"
                                    className="instance-2_22160"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22159 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22161" className="stroke-wrapper-2_22161">
                            <div className="symbol-2_22161">
                                <ActionAdd0
                                    id="2_22162"
                                    className="instance-2_22162"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22161 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22163" className="stroke-wrapper-2_22163">
                            <div className="symbol-2_22163">
                                <ActionAdd0
                                    id="2_22164"
                                    className="instance-2_22164"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22163 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22165" className="stroke-wrapper-2_22165">
                            <div className="symbol-2_22165">
                                <ActionAdd0
                                    id="2_22166"
                                    className="instance-2_22166"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22165 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22167" className="stroke-wrapper-2_22167">
                            <div className="symbol-2_22167">
                                <ActionAdd0
                                    id="2_22168"
                                    className="instance-2_22168"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22167 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22169"
                            className="symbol-2_22169 fill-lightinteractiveaccent-2_2283"
                        >
                            <ActionAdd0
                                id="2_22170"
                                className="instance-2_22170"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22171"
                            className="symbol-2_22171 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            <ActionAdd0
                                id="2_22172"
                                className="instance-2_22172"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22173"
                            className="symbol-2_22173 fill-lightinteractiveaccent-2_2283"
                        >
                            <ActionAdd0
                                id="2_22174"
                                className="instance-2_22174"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22175"
                            className="symbol-2_22175 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            <ActionAdd0
                                id="2_22176"
                                className="instance-2_22176"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22177"
                            className="symbol-2_22177 fill-lightinteractive-errordefault-2_2298"
                        >
                            <ActionAdd0
                                id="2_22178"
                                className="instance-2_22178"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22179"
                            className="symbol-2_22179 fill-lightinteractive-errorhover-2_23158"
                        >
                            <ActionAdd0
                                id="2_22180"
                                className="instance-2_22180"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22181"
                            className="symbol-2_22181 fill-lightinteractive-errordefault-2_2298"
                        >
                            <ActionAdd0
                                id="2_22182"
                                className="instance-2_22182"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22183"
                            className="symbol-2_22183 fill-lightinteractive-errorhover-2_23158"
                        >
                            <ActionAdd0
                                id="2_22184"
                                className="instance-2_22184"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22185"
                            className="symbol-2_22185 fill-lighterrormuted-2_23156"
                        >
                            <ActionAdd0
                                id="2_22186"
                                className="instance-2_22186"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22187"
                            className="symbol-2_22187 fill-lighterrormuted-2_23156"
                        >
                            <ActionAdd0
                                id="2_22188"
                                className="instance-2_22188"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22189"
                            className="symbol-2_22189 fill-lightaccentmuted-2_23147"
                        >
                            <ActionAdd0
                                id="2_22190"
                                className="instance-2_22190"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22191"
                            className="symbol-2_22191 fill-lightaccentmuted-2_23147"
                        >
                            <ActionAdd0
                                id="2_22192"
                                className="instance-2_22192"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22193"
                            className="symbol-2_22193 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd0
                                id="2_22194"
                                className="instance-2_22194"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22195"
                            className="symbol-2_22195 fill-lightaccentcontainer-hover-2_23160"
                        >
                            <ActionAdd0
                                id="2_22196"
                                className="instance-2_22196"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22197"
                            className="symbol-2_22197 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd0
                                id="2_22198"
                                className="instance-2_22198"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22199"
                            className="symbol-2_22199 fill-lightaccentcontainer-hover-2_23160"
                        >
                            <ActionAdd0
                                id="2_22200"
                                className="instance-2_22200"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22201"
                            className="symbol-2_22201 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd0
                                id="2_22202"
                                className="instance-2_22202"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22203"
                            className="symbol-2_22203 fill-lighterrorcontainer-hover-2_23151"
                        >
                            <ActionAdd0
                                id="2_22204"
                                className="instance-2_22204"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22205"
                            className="symbol-2_22205 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd0
                                id="2_22206"
                                className="instance-2_22206"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22207"
                            className="symbol-2_22207 fill-lighterrorcontainer-hover-2_23151"
                        >
                            <ActionAdd0
                                id="2_22208"
                                className="instance-2_22208"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22209"
                            className="symbol-2_22209 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd0
                                id="2_22210"
                                className="instance-2_22210"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22211"
                            className="symbol-2_22211 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd0
                                id="2_22212"
                                className="instance-2_22212"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22213"
                            className="symbol-2_22213 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd0
                                id="2_22214"
                                className="instance-2_22214"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22215"
                            className="symbol-2_22215 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd0
                                id="2_22216"
                                className="instance-2_22216"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22217" className="symbol-2_22217">
                            <ActionAdd0
                                id="2_22218"
                                className="instance-2_22218"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22219" className="symbol-2_22219">
                            <ActionAdd0
                                id="2_22220"
                                className="instance-2_22220"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22221" className="symbol-2_22221">
                            <ActionAdd0
                                id="2_22222"
                                className="instance-2_22222"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22223" className="symbol-2_22223">
                            <ActionAdd0
                                id="2_22224"
                                className="instance-2_22224"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22225" className="symbol-2_22225">
                            <ActionAdd0
                                id="2_22226"
                                className="instance-2_22226"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22227" className="symbol-2_22227">
                            <ActionAdd0
                                id="2_22228"
                                className="instance-2_22228"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22229" className="symbol-2_22229">
                            <ActionAdd0
                                id="2_22230"
                                className="instance-2_22230"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22231" className="symbol-2_22231">
                            <ActionAdd0
                                id="2_22232"
                                className="instance-2_22232"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22233" className="symbol-2_22233">
                            <ActionAdd0
                                id="2_22234"
                                className="instance-2_22234"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22235" className="symbol-2_22235">
                            <ActionAdd0
                                id="2_22236"
                                className="instance-2_22236"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22237" className="symbol-2_22237">
                            <ActionAdd0
                                id="2_22238"
                                className="instance-2_22238"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22239" className="symbol-2_22239">
                            <ActionAdd0
                                id="2_22240"
                                className="instance-2_22240"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22241" className="stroke-wrapper-2_22241">
                            <div className="symbol-2_22241">
                                <ActionAdd0
                                    id="2_22242"
                                    className="instance-2_22242"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22241 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22243" className="stroke-wrapper-2_22243">
                            <div className="symbol-2_22243">
                                <ActionAdd0
                                    id="2_22244"
                                    className="instance-2_22244"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22243 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22245" className="stroke-wrapper-2_22245">
                            <div className="symbol-2_22245">
                                <ActionAdd0
                                    id="2_22246"
                                    className="instance-2_22246"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22245 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22247" className="stroke-wrapper-2_22247">
                            <div className="symbol-2_22247">
                                <ActionAdd0
                                    id="2_22248"
                                    className="instance-2_22248"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22247 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22249" className="stroke-wrapper-2_22249">
                            <div className="symbol-2_22249">
                                <ActionAdd0
                                    id="2_22250"
                                    className="instance-2_22250"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22249 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22251" className="stroke-wrapper-2_22251">
                            <div className="symbol-2_22251">
                                <ActionAdd0
                                    id="2_22252"
                                    className="instance-2_22252"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22251 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22253" className="stroke-wrapper-2_22253">
                            <div className="symbol-2_22253">
                                <ActionAdd0
                                    id="2_22254"
                                    className="instance-2_22254"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22253 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22255" className="stroke-wrapper-2_22255">
                            <div className="symbol-2_22255">
                                <ActionAdd0
                                    id="2_22256"
                                    className="instance-2_22256"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22255 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22257" className="stroke-wrapper-2_22257">
                            <div className="symbol-2_22257">
                                <ActionAdd0
                                    id="2_22258"
                                    className="instance-2_22258"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22257 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22259" className="stroke-wrapper-2_22259">
                            <div className="symbol-2_22259">
                                <ActionAdd0
                                    id="2_22260"
                                    className="instance-2_22260"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22259 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22261" className="stroke-wrapper-2_22261">
                            <div className="symbol-2_22261">
                                <ActionAdd0
                                    id="2_22262"
                                    className="instance-2_22262"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22261 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22263" className="stroke-wrapper-2_22263">
                            <div className="symbol-2_22263">
                                <ActionAdd0
                                    id="2_22264"
                                    className="instance-2_22264"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22263 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22265"
                            className="symbol-2_22265 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd0
                                id="2_22266"
                                className="instance-2_22266"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22267"
                            className="symbol-2_22267 fill-lightbgsurface4-2_23165"
                        >
                            <ActionAdd0
                                id="2_22268"
                                className="instance-2_22268"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22269"
                            className="symbol-2_22269 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd0
                                id="2_22270"
                                className="instance-2_22270"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22271"
                            className="symbol-2_22271 fill-lightbgsurface4-2_23165"
                        >
                            <ActionAdd0
                                id="2_22272"
                                className="instance-2_22272"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22273"
                            className="symbol-2_22273 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd0
                                id="2_22274"
                                className="instance-2_22274"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22275"
                            className="symbol-2_22275 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd0
                                id="2_22276"
                                className="instance-2_22276"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22277"
                            className="symbol-2_22277 fill-lightneutraldefault-2_23155"
                        >
                            <ActionAdd3
                                id="2_22278"
                                className="instance-2_22278"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22279"
                            className="symbol-2_22279 fill-lightneutralhover-2_23168"
                        >
                            <ActionAdd3
                                id="2_22280"
                                className="instance-2_22280"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22281"
                            className="symbol-2_22281 fill-lightneutraldefault-2_23155"
                        >
                            <ActionAdd3
                                id="2_22282"
                                className="instance-2_22282"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22283"
                            className="symbol-2_22283 fill-lightneutralhover-2_23168"
                        >
                            <ActionAdd3
                                id="2_22284"
                                className="instance-2_22284"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22285"
                            className="symbol-2_22285 fill-lightneutralmuted-2_23154"
                        >
                            <ActionAdd3
                                id="2_22286"
                                className="instance-2_22286"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22287"
                            className="symbol-2_22287 fill-lightneutralmuted-2_23154"
                        >
                            <ActionAdd3
                                id="2_22288"
                                className="instance-2_22288"
                            ></ActionAdd3>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22289"
                            className="symbol-2_22289 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd0
                                id="2_22290"
                                className="instance-2_22290"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22291"
                            className="symbol-2_22291 fill-lightbgsurface4-2_23165"
                        >
                            <ActionAdd0
                                id="2_22292"
                                className="instance-2_22292"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22293"
                            className="symbol-2_22293 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd0
                                id="2_22294"
                                className="instance-2_22294"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22295"
                            className="symbol-2_22295 fill-lightbgsurface4-2_23165"
                        >
                            <ActionAdd0
                                id="2_22296"
                                className="instance-2_22296"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22297"
                            className="symbol-2_22297 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd0
                                id="2_22298"
                                className="instance-2_22298"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22299"
                            className="symbol-2_22299 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd0
                                id="2_22300"
                                className="instance-2_22300"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22301"
                            className="symbol-2_22301 fill-lightneutraldefault-2_23155"
                        >
                            <ActionAdd0
                                id="2_22302"
                                className="instance-2_22302"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22303"
                            className="symbol-2_22303 fill-lightneutralhover-2_23168"
                        >
                            <ActionAdd0
                                id="2_22304"
                                className="instance-2_22304"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22305"
                            className="symbol-2_22305 fill-lightneutraldefault-2_23155"
                        >
                            <ActionAdd0
                                id="2_22306"
                                className="instance-2_22306"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22307"
                            className="symbol-2_22307 fill-lightneutralhover-2_23168"
                        >
                            <ActionAdd0
                                id="2_22308"
                                className="instance-2_22308"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22309"
                            className="symbol-2_22309 fill-lightneutralmuted-2_23154"
                        >
                            <ActionAdd0
                                id="2_22310"
                                className="instance-2_22310"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22311"
                            className="symbol-2_22311 fill-lightneutralmuted-2_23154"
                        >
                            <ActionAdd0
                                id="2_22312"
                                className="instance-2_22312"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22313" className="symbol-2_22313">
                            <ActionAdd0
                                id="2_22314"
                                className="instance-2_22314"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22315" className="symbol-2_22315">
                            <ActionAdd0
                                id="2_22316"
                                className="instance-2_22316"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22317" className="symbol-2_22317">
                            <ActionAdd0
                                id="2_22318"
                                className="instance-2_22318"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22319" className="symbol-2_22319">
                            <ActionAdd0
                                id="2_22320"
                                className="instance-2_22320"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22321" className="symbol-2_22321">
                            <ActionAdd0
                                id="2_22322"
                                className="instance-2_22322"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22323" className="symbol-2_22323">
                            <ActionAdd0
                                id="2_22324"
                                className="instance-2_22324"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22325" className="stroke-wrapper-2_22325">
                            <div className="symbol-2_22325">
                                <ActionAdd0
                                    id="2_22326"
                                    className="instance-2_22326"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22325 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22327" className="stroke-wrapper-2_22327">
                            <div className="symbol-2_22327">
                                <ActionAdd0
                                    id="2_22328"
                                    className="instance-2_22328"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22327 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22329" className="stroke-wrapper-2_22329">
                            <div className="symbol-2_22329">
                                <ActionAdd0
                                    id="2_22330"
                                    className="instance-2_22330"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22329 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22331" className="stroke-wrapper-2_22331">
                            <div className="symbol-2_22331">
                                <ActionAdd0
                                    id="2_22332"
                                    className="instance-2_22332"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22331 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22333" className="stroke-wrapper-2_22333">
                            <div className="symbol-2_22333">
                                <ActionAdd0
                                    id="2_22334"
                                    className="instance-2_22334"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22333 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22335" className="stroke-wrapper-2_22335">
                            <div className="symbol-2_22335">
                                <ActionAdd0
                                    id="2_22336"
                                    className="instance-2_22336"
                                ></ActionAdd0>
                            </div>
                            <div className="stroke-2_22335 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22337" className="symbol-2_22337">
                            <div
                                id="2_22338"
                                className="instance-2_22338"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22338"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22338"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22338"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22338"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22338"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22338"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22338"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22339" className="symbol-2_22339">
                            <div
                                id="2_22340"
                                className="instance-2_22340"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22340"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22340"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22340"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22340"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22340"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22340"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22340"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22341" className="symbol-2_22341">
                            <div
                                id="2_22342"
                                className="instance-2_22342"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22342"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22342"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22342"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22342"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22342"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22342"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22342"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22343" className="symbol-2_22343">
                            <div
                                id="2_22344"
                                className="instance-2_22344"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22344"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22344"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22344"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22344"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22344"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22344"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22344"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22345" className="symbol-2_22345">
                            <div
                                id="2_22346"
                                className="instance-2_22346"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22346"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22346"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22346"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22346"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22346"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22346"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22346"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22347" className="symbol-2_22347">
                            <div
                                id="2_22348"
                                className="instance-2_22348"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22348"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22348"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22348"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22348"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22348"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22348"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22348"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22349" className="stroke-wrapper-2_22349">
                            <div className="symbol-2_22349">
                                <div
                                    id="2_22350"
                                    className="instance-2_22350"
                                    instance_2_23131={"NavigationChevronLeft"}
                                >
                                    {iconvariant24 === "Component_2_24279" && (
                                        <ActionKanbanboard id="2_22350"></ActionKanbanboard>
                                    )}
                                    {iconvariant24 === "Component_2_80585" && (
                                        <ActionSettingsadjust id="2_22350"></ActionSettingsadjust>
                                    )}
                                    {iconvariant24 === "Component_2_18845" && (
                                        <NavigationCloselarge id="2_22350"></NavigationCloselarge>
                                    )}
                                    {iconvariant24 === "Component_2_20301" && (
                                        <ActionSearch id="2_22350"></ActionSearch>
                                    )}
                                    {iconvariant24 === "Component_2_25176" && (
                                        <OrganizeCalendar id="2_22350"></OrganizeCalendar>
                                    )}
                                    {iconvariant24 === "Component_2_27180" && (
                                        <NavigationChevronLeft id="2_22350"></NavigationChevronLeft>
                                    )}
                                    {iconvariant24 === "Component_2_23131" && (
                                        <ActionAdd0 id="2_22350"></ActionAdd0>
                                    )}
                                </div>
                            </div>
                            <div className="stroke-2_22349 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22351" className="stroke-wrapper-2_22351">
                            <div className="symbol-2_22351">
                                <div
                                    id="2_22352"
                                    className="instance-2_22352"
                                    instance_2_23131={"NavigationChevronLeft"}
                                >
                                    {iconvariant24 === "Component_2_24279" && (
                                        <ActionKanbanboard id="2_22352"></ActionKanbanboard>
                                    )}
                                    {iconvariant24 === "Component_2_80585" && (
                                        <ActionSettingsadjust id="2_22352"></ActionSettingsadjust>
                                    )}
                                    {iconvariant24 === "Component_2_18845" && (
                                        <NavigationCloselarge id="2_22352"></NavigationCloselarge>
                                    )}
                                    {iconvariant24 === "Component_2_20301" && (
                                        <ActionSearch id="2_22352"></ActionSearch>
                                    )}
                                    {iconvariant24 === "Component_2_25176" && (
                                        <OrganizeCalendar id="2_22352"></OrganizeCalendar>
                                    )}
                                    {iconvariant24 === "Component_2_27180" && (
                                        <NavigationChevronLeft id="2_22352"></NavigationChevronLeft>
                                    )}
                                    {iconvariant24 === "Component_2_23131" && (
                                        <ActionAdd0 id="2_22352"></ActionAdd0>
                                    )}
                                </div>
                            </div>
                            <div className="stroke-2_22351 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22353" className="stroke-wrapper-2_22353">
                            <div className="symbol-2_22353">
                                <div
                                    id="2_22354"
                                    className="instance-2_22354"
                                    instance_2_23131={"NavigationChevronLeft"}
                                >
                                    {iconvariant24 === "Component_2_24279" && (
                                        <ActionKanbanboard id="2_22354"></ActionKanbanboard>
                                    )}
                                    {iconvariant24 === "Component_2_80585" && (
                                        <ActionSettingsadjust id="2_22354"></ActionSettingsadjust>
                                    )}
                                    {iconvariant24 === "Component_2_18845" && (
                                        <NavigationCloselarge id="2_22354"></NavigationCloselarge>
                                    )}
                                    {iconvariant24 === "Component_2_20301" && (
                                        <ActionSearch id="2_22354"></ActionSearch>
                                    )}
                                    {iconvariant24 === "Component_2_25176" && (
                                        <OrganizeCalendar id="2_22354"></OrganizeCalendar>
                                    )}
                                    {iconvariant24 === "Component_2_27180" && (
                                        <NavigationChevronLeft id="2_22354"></NavigationChevronLeft>
                                    )}
                                    {iconvariant24 === "Component_2_23131" && (
                                        <ActionAdd0 id="2_22354"></ActionAdd0>
                                    )}
                                </div>
                            </div>
                            <div className="stroke-2_22353 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22355" className="stroke-wrapper-2_22355">
                            <div className="symbol-2_22355">
                                <div
                                    id="2_22356"
                                    className="instance-2_22356"
                                    instance_2_23131={"NavigationChevronLeft"}
                                >
                                    {iconvariant24 === "Component_2_24279" && (
                                        <ActionKanbanboard id="2_22356"></ActionKanbanboard>
                                    )}
                                    {iconvariant24 === "Component_2_80585" && (
                                        <ActionSettingsadjust id="2_22356"></ActionSettingsadjust>
                                    )}
                                    {iconvariant24 === "Component_2_18845" && (
                                        <NavigationCloselarge id="2_22356"></NavigationCloselarge>
                                    )}
                                    {iconvariant24 === "Component_2_20301" && (
                                        <ActionSearch id="2_22356"></ActionSearch>
                                    )}
                                    {iconvariant24 === "Component_2_25176" && (
                                        <OrganizeCalendar id="2_22356"></OrganizeCalendar>
                                    )}
                                    {iconvariant24 === "Component_2_27180" && (
                                        <NavigationChevronLeft id="2_22356"></NavigationChevronLeft>
                                    )}
                                    {iconvariant24 === "Component_2_23131" && (
                                        <ActionAdd0 id="2_22356"></ActionAdd0>
                                    )}
                                </div>
                            </div>
                            <div className="stroke-2_22355 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22357" className="stroke-wrapper-2_22357">
                            <div className="symbol-2_22357">
                                <div
                                    id="2_22358"
                                    className="instance-2_22358"
                                    instance_2_23131={"NavigationChevronLeft"}
                                >
                                    {iconvariant24 === "Component_2_24279" && (
                                        <ActionKanbanboard id="2_22358"></ActionKanbanboard>
                                    )}
                                    {iconvariant24 === "Component_2_80585" && (
                                        <ActionSettingsadjust id="2_22358"></ActionSettingsadjust>
                                    )}
                                    {iconvariant24 === "Component_2_18845" && (
                                        <NavigationCloselarge id="2_22358"></NavigationCloselarge>
                                    )}
                                    {iconvariant24 === "Component_2_20301" && (
                                        <ActionSearch id="2_22358"></ActionSearch>
                                    )}
                                    {iconvariant24 === "Component_2_25176" && (
                                        <OrganizeCalendar id="2_22358"></OrganizeCalendar>
                                    )}
                                    {iconvariant24 === "Component_2_27180" && (
                                        <NavigationChevronLeft id="2_22358"></NavigationChevronLeft>
                                    )}
                                    {iconvariant24 === "Component_2_23131" && (
                                        <ActionAdd0 id="2_22358"></ActionAdd0>
                                    )}
                                </div>
                            </div>
                            <div className="stroke-2_22357 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22359" className="stroke-wrapper-2_22359">
                            <div className="symbol-2_22359">
                                <div
                                    id="2_22360"
                                    className="instance-2_22360"
                                    instance_2_23131={"NavigationChevronLeft"}
                                >
                                    {iconvariant24 === "Component_2_24279" && (
                                        <ActionKanbanboard id="2_22360"></ActionKanbanboard>
                                    )}
                                    {iconvariant24 === "Component_2_80585" && (
                                        <ActionSettingsadjust id="2_22360"></ActionSettingsadjust>
                                    )}
                                    {iconvariant24 === "Component_2_18845" && (
                                        <NavigationCloselarge id="2_22360"></NavigationCloselarge>
                                    )}
                                    {iconvariant24 === "Component_2_20301" && (
                                        <ActionSearch id="2_22360"></ActionSearch>
                                    )}
                                    {iconvariant24 === "Component_2_25176" && (
                                        <OrganizeCalendar id="2_22360"></OrganizeCalendar>
                                    )}
                                    {iconvariant24 === "Component_2_27180" && (
                                        <NavigationChevronLeft id="2_22360"></NavigationChevronLeft>
                                    )}
                                    {iconvariant24 === "Component_2_23131" && (
                                        <ActionAdd0 id="2_22360"></ActionAdd0>
                                    )}
                                </div>
                            </div>
                            <div className="stroke-2_22359 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22361"
                            className="symbol-2_22361 fill-lightinteractiveaccent-2_2283"
                        >
                            <ActionAdd2
                                id="2_22362"
                                className="instance-2_22362"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22363"
                            className="symbol-2_22363 fill-lightinteractiveaccent-2_2283"
                        >
                            <ActionAdd2
                                id="2_22364"
                                className="instance-2_22364"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22365"
                            className="symbol-2_22365 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            <ActionAdd2
                                id="2_22366"
                                className="instance-2_22366"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22367"
                            className="symbol-2_22367 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            <ActionAdd2
                                id="2_22368"
                                className="instance-2_22368"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22369"
                            className="symbol-2_22369 fill-lightinteractiveaccent-2_2283"
                        >
                            <ActionAdd2
                                id="2_22370"
                                className="instance-2_22370"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22371"
                            className="symbol-2_22371 fill-lightinteractiveaccent-2_2283"
                        >
                            <ActionAdd2
                                id="2_22372"
                                className="instance-2_22372"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22373"
                            className="symbol-2_22373 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            <ActionAdd2
                                id="2_22374"
                                className="instance-2_22374"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22375"
                            className="symbol-2_22375 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            <ActionAdd2
                                id="2_22376"
                                className="instance-2_22376"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22377"
                            className="symbol-2_22377 fill-lightinteractive-errordefault-2_2298"
                        >
                            <ActionAdd2
                                id="2_22378"
                                className="instance-2_22378"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22379"
                            className="symbol-2_22379 fill-lightinteractive-errordefault-2_2298"
                        >
                            <ActionAdd2
                                id="2_22380"
                                className="instance-2_22380"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22381"
                            className="symbol-2_22381 fill-lightinteractive-errorhover-2_23158"
                        >
                            <ActionAdd2
                                id="2_22382"
                                className="instance-2_22382"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22383"
                            className="symbol-2_22383 fill-lightinteractive-errorhover-2_23158"
                        >
                            <ActionAdd2
                                id="2_22384"
                                className="instance-2_22384"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22385"
                            className="symbol-2_22385 fill-lightinteractive-errordefault-2_2298"
                        >
                            <ActionAdd2
                                id="2_22386"
                                className="instance-2_22386"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22387"
                            className="symbol-2_22387 fill-lightinteractive-errordefault-2_2298"
                        >
                            <ActionAdd2
                                id="2_22388"
                                className="instance-2_22388"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22389"
                            className="symbol-2_22389 fill-lightinteractive-errorhover-2_23158"
                        >
                            <ActionAdd2
                                id="2_22390"
                                className="instance-2_22390"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22391"
                            className="symbol-2_22391 fill-lightinteractive-errorhover-2_23158"
                        >
                            <ActionAdd2
                                id="2_22392"
                                className="instance-2_22392"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22393"
                            className="symbol-2_22393 fill-lighterrormuted-2_23156"
                        >
                            <ActionAdd2
                                id="2_22394"
                                className="instance-2_22394"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22395"
                            className="symbol-2_22395 fill-lighterrormuted-2_23156"
                        >
                            <ActionAdd2
                                id="2_22396"
                                className="instance-2_22396"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22397"
                            className="symbol-2_22397 fill-lighterrormuted-2_23156"
                        >
                            <ActionAdd2
                                id="2_22398"
                                className="instance-2_22398"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22399"
                            className="symbol-2_22399 fill-lighterrormuted-2_23156"
                        >
                            <ActionAdd2
                                id="2_22400"
                                className="instance-2_22400"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22401"
                            className="symbol-2_22401 fill-lightaccentmuted-2_23147"
                        >
                            <ActionAdd2
                                id="2_22402"
                                className="instance-2_22402"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22403"
                            className="symbol-2_22403 fill-lightaccentmuted-2_23147"
                        >
                            <ActionAdd2
                                id="2_22404"
                                className="instance-2_22404"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22405"
                            className="symbol-2_22405 fill-lightaccentmuted-2_23147"
                        >
                            <ActionAdd2
                                id="2_22406"
                                className="instance-2_22406"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22407"
                            className="symbol-2_22407 fill-lightaccentmuted-2_23147"
                        >
                            <ActionAdd2
                                id="2_22408"
                                className="instance-2_22408"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22409"
                            className="symbol-2_22409 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd2
                                id="2_22410"
                                className="instance-2_22410"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22411"
                            className="symbol-2_22411 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd2
                                id="2_22412"
                                className="instance-2_22412"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22413"
                            className="symbol-2_22413 fill-lightaccentcontainer-hover-2_23160"
                        >
                            <ActionAdd2
                                id="2_22414"
                                className="instance-2_22414"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22415"
                            className="symbol-2_22415 fill-lightaccentcontainer-hover-2_23160"
                        >
                            <ActionAdd2
                                id="2_22416"
                                className="instance-2_22416"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22417"
                            className="symbol-2_22417 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd2
                                id="2_22418"
                                className="instance-2_22418"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22419"
                            className="symbol-2_22419 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd2
                                id="2_22420"
                                className="instance-2_22420"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22421"
                            className="symbol-2_22421 fill-lightaccentcontainer-hover-2_23160"
                        >
                            <ActionAdd2
                                id="2_22422"
                                className="instance-2_22422"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22423"
                            className="symbol-2_22423 fill-lightaccentcontainer-hover-2_23160"
                        >
                            <ActionAdd2
                                id="2_22424"
                                className="instance-2_22424"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22425"
                            className="symbol-2_22425 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd2
                                id="2_22426"
                                className="instance-2_22426"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22427"
                            className="symbol-2_22427 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd2
                                id="2_22428"
                                className="instance-2_22428"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22429"
                            className="symbol-2_22429 fill-lighterrorcontainer-hover-2_23151"
                        >
                            <ActionAdd2
                                id="2_22430"
                                className="instance-2_22430"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22431"
                            className="symbol-2_22431 fill-lighterrorcontainer-hover-2_23151"
                        >
                            <ActionAdd2
                                id="2_22432"
                                className="instance-2_22432"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22433"
                            className="symbol-2_22433 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd2
                                id="2_22434"
                                className="instance-2_22434"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22435"
                            className="symbol-2_22435 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd2
                                id="2_22436"
                                className="instance-2_22436"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22437"
                            className="symbol-2_22437 fill-lighterrorcontainer-hover-2_23151"
                        >
                            <ActionAdd2
                                id="2_22438"
                                className="instance-2_22438"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22439"
                            className="symbol-2_22439 fill-lighterrorcontainer-hover-2_23151"
                        >
                            <ActionAdd2
                                id="2_22440"
                                className="instance-2_22440"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22441"
                            className="symbol-2_22441 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd2
                                id="2_22442"
                                className="instance-2_22442"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22443"
                            className="symbol-2_22443 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd2
                                id="2_22444"
                                className="instance-2_22444"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22445"
                            className="symbol-2_22445 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd2
                                id="2_22446"
                                className="instance-2_22446"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22447"
                            className="symbol-2_22447 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd2
                                id="2_22448"
                                className="instance-2_22448"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22449"
                            className="symbol-2_22449 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd2
                                id="2_22450"
                                className="instance-2_22450"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22451"
                            className="symbol-2_22451 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd2
                                id="2_22452"
                                className="instance-2_22452"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22453"
                            className="symbol-2_22453 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd2
                                id="2_22454"
                                className="instance-2_22454"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22455"
                            className="symbol-2_22455 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd2
                                id="2_22456"
                                className="instance-2_22456"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22457" className="symbol-2_22457">
                            <ActionAdd2
                                id="2_22458"
                                className="instance-2_22458"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22459" className="symbol-2_22459">
                            <ActionAdd2
                                id="2_22460"
                                className="instance-2_22460"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22461" className="symbol-2_22461">
                            <ActionAdd2
                                id="2_22462"
                                className="instance-2_22462"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22463" className="symbol-2_22463">
                            <ActionAdd2
                                id="2_22464"
                                className="instance-2_22464"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22465" className="symbol-2_22465">
                            <ActionAdd2
                                id="2_22466"
                                className="instance-2_22466"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22467" className="symbol-2_22467">
                            <ActionAdd2
                                id="2_22468"
                                className="instance-2_22468"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22469" className="symbol-2_22469">
                            <ActionAdd2
                                id="2_22470"
                                className="instance-2_22470"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22471" className="symbol-2_22471">
                            <ActionAdd2
                                id="2_22472"
                                className="instance-2_22472"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22473" className="symbol-2_22473">
                            <ActionAdd2
                                id="2_22474"
                                className="instance-2_22474"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22475" className="symbol-2_22475">
                            <ActionAdd2
                                id="2_22476"
                                className="instance-2_22476"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22477" className="symbol-2_22477">
                            <ActionAdd2
                                id="2_22478"
                                className="instance-2_22478"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22479" className="symbol-2_22479">
                            <ActionAdd2
                                id="2_22480"
                                className="instance-2_22480"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22481" className="symbol-2_22481">
                            <ActionAdd2
                                id="2_22482"
                                className="instance-2_22482"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22483" className="symbol-2_22483">
                            <ActionAdd2
                                id="2_22484"
                                className="instance-2_22484"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22485" className="symbol-2_22485">
                            <ActionAdd2
                                id="2_22486"
                                className="instance-2_22486"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22487" className="symbol-2_22487">
                            <ActionAdd2
                                id="2_22488"
                                className="instance-2_22488"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22489" className="symbol-2_22489">
                            <ActionAdd2
                                id="2_22490"
                                className="instance-2_22490"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22491" className="symbol-2_22491">
                            <ActionAdd2
                                id="2_22492"
                                className="instance-2_22492"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22493" className="symbol-2_22493">
                            <ActionAdd2
                                id="2_22494"
                                className="instance-2_22494"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22495" className="symbol-2_22495">
                            <ActionAdd2
                                id="2_22496"
                                className="instance-2_22496"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22497" className="symbol-2_22497">
                            <ActionAdd2
                                id="2_22498"
                                className="instance-2_22498"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22499" className="symbol-2_22499">
                            <ActionAdd2
                                id="2_22500"
                                className="instance-2_22500"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22501" className="symbol-2_22501">
                            <ActionAdd2
                                id="2_22502"
                                className="instance-2_22502"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22503" className="symbol-2_22503">
                            <ActionAdd2
                                id="2_22504"
                                className="instance-2_22504"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22505" className="stroke-wrapper-2_22505">
                            <div className="symbol-2_22505">
                                <ActionAdd2
                                    id="2_22506"
                                    className="instance-2_22506"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22505 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22507" className="stroke-wrapper-2_22507">
                            <div className="symbol-2_22507">
                                <ActionAdd2
                                    id="2_22508"
                                    className="instance-2_22508"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22507 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22509" className="stroke-wrapper-2_22509">
                            <div className="symbol-2_22509">
                                <ActionAdd2
                                    id="2_22510"
                                    className="instance-2_22510"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22509 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22511" className="stroke-wrapper-2_22511">
                            <div className="symbol-2_22511">
                                <ActionAdd2
                                    id="2_22512"
                                    className="instance-2_22512"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22511 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22513" className="stroke-wrapper-2_22513">
                            <div className="symbol-2_22513">
                                <ActionAdd2
                                    id="2_22514"
                                    className="instance-2_22514"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22513 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22515" className="stroke-wrapper-2_22515">
                            <div className="symbol-2_22515">
                                <ActionAdd2
                                    id="2_22516"
                                    className="instance-2_22516"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22515 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22517" className="stroke-wrapper-2_22517">
                            <div className="symbol-2_22517">
                                <ActionAdd2
                                    id="2_22518"
                                    className="instance-2_22518"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22517 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22519" className="stroke-wrapper-2_22519">
                            <div className="symbol-2_22519">
                                <ActionAdd2
                                    id="2_22520"
                                    className="instance-2_22520"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22519 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22521" className="stroke-wrapper-2_22521">
                            <div className="symbol-2_22521">
                                <ActionAdd2
                                    id="2_22522"
                                    className="instance-2_22522"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22521 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22523" className="stroke-wrapper-2_22523">
                            <div className="symbol-2_22523">
                                <ActionAdd2
                                    id="2_22524"
                                    className="instance-2_22524"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22523 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22525" className="stroke-wrapper-2_22525">
                            <div className="symbol-2_22525">
                                <ActionAdd2
                                    id="2_22526"
                                    className="instance-2_22526"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22525 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22527" className="stroke-wrapper-2_22527">
                            <div className="symbol-2_22527">
                                <ActionAdd2
                                    id="2_22528"
                                    className="instance-2_22528"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22527 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22529" className="stroke-wrapper-2_22529">
                            <div className="symbol-2_22529">
                                <ActionAdd2
                                    id="2_22530"
                                    className="instance-2_22530"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22529 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22531" className="stroke-wrapper-2_22531">
                            <div className="symbol-2_22531">
                                <ActionAdd2
                                    id="2_22532"
                                    className="instance-2_22532"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22531 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22533" className="stroke-wrapper-2_22533">
                            <div className="symbol-2_22533">
                                <ActionAdd2
                                    id="2_22534"
                                    className="instance-2_22534"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22533 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22535" className="stroke-wrapper-2_22535">
                            <div className="symbol-2_22535">
                                <ActionAdd2
                                    id="2_22536"
                                    className="instance-2_22536"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22535 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22537" className="stroke-wrapper-2_22537">
                            <div className="symbol-2_22537">
                                <ActionAdd2
                                    id="2_22538"
                                    className="instance-2_22538"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22537 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22539" className="stroke-wrapper-2_22539">
                            <div className="symbol-2_22539">
                                <ActionAdd2
                                    id="2_22540"
                                    className="instance-2_22540"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22539 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22541" className="stroke-wrapper-2_22541">
                            <div className="symbol-2_22541">
                                <ActionAdd2
                                    id="2_22542"
                                    className="instance-2_22542"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22541 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22543" className="stroke-wrapper-2_22543">
                            <div className="symbol-2_22543">
                                <ActionAdd2
                                    id="2_22544"
                                    className="instance-2_22544"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22543 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22545" className="stroke-wrapper-2_22545">
                            <div className="symbol-2_22545">
                                <ActionAdd2
                                    id="2_22546"
                                    className="instance-2_22546"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22545 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22547" className="stroke-wrapper-2_22547">
                            <div className="symbol-2_22547">
                                <ActionAdd2
                                    id="2_22548"
                                    className="instance-2_22548"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22547 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22549" className="stroke-wrapper-2_22549">
                            <div className="symbol-2_22549">
                                <ActionAdd2
                                    id="2_22550"
                                    className="instance-2_22550"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22549 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22551" className="stroke-wrapper-2_22551">
                            <div className="symbol-2_22551">
                                <ActionAdd2
                                    id="2_22552"
                                    className="instance-2_22552"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22551 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22553"
                            className="symbol-2_22553 fill-lightinteractiveaccent-2_2283"
                        >
                            <ActionAdd1
                                id="2_22554"
                                className="instance-2_22554"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22555"
                            className="symbol-2_22555 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            <ActionAdd1
                                id="2_22556"
                                className="instance-2_22556"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22557"
                            className="symbol-2_22557 fill-lightinteractiveaccent-2_2283"
                        >
                            <ActionAdd1
                                id="2_22558"
                                className="instance-2_22558"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22559"
                            className="symbol-2_22559 fill-lightinteractiveaccent-hover-2_23148"
                        >
                            <ActionAdd1
                                id="2_22560"
                                className="instance-2_22560"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22561"
                            className="symbol-2_22561 fill-lightinteractive-errordefault-2_2298"
                        >
                            <ActionAdd1
                                id="2_22562"
                                className="instance-2_22562"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22563"
                            className="symbol-2_22563 fill-lightinteractive-errorhover-2_23158"
                        >
                            <ActionAdd1
                                id="2_22564"
                                className="instance-2_22564"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22565"
                            className="symbol-2_22565 fill-lightinteractive-errordefault-2_2298"
                        >
                            <ActionAdd1
                                id="2_22566"
                                className="instance-2_22566"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22567"
                            className="symbol-2_22567 fill-lightinteractive-errorhover-2_23158"
                        >
                            <ActionAdd1
                                id="2_22568"
                                className="instance-2_22568"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22569"
                            className="symbol-2_22569 fill-lighterrormuted-2_23156"
                        >
                            <ActionAdd1
                                id="2_22570"
                                className="instance-2_22570"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22571"
                            className="symbol-2_22571 fill-lighterrormuted-2_23156"
                        >
                            <ActionAdd1
                                id="2_22572"
                                className="instance-2_22572"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22573"
                            className="symbol-2_22573 fill-lightaccentmuted-2_23147"
                        >
                            <ActionAdd1
                                id="2_22574"
                                className="instance-2_22574"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22575"
                            className="symbol-2_22575 fill-lightaccentmuted-2_23147"
                        >
                            <ActionAdd1
                                id="2_22576"
                                className="instance-2_22576"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22577"
                            className="symbol-2_22577 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd1
                                id="2_22578"
                                className="instance-2_22578"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22579"
                            className="symbol-2_22579 fill-lightaccentcontainer-hover-2_23160"
                        >
                            <ActionAdd1
                                id="2_22580"
                                className="instance-2_22580"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22581"
                            className="symbol-2_22581 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd1
                                id="2_22582"
                                className="instance-2_22582"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22583"
                            className="symbol-2_22583 fill-lightaccentcontainer-hover-2_23160"
                        >
                            <ActionAdd1
                                id="2_22584"
                                className="instance-2_22584"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22585"
                            className="symbol-2_22585 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd1
                                id="2_22586"
                                className="instance-2_22586"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22587"
                            className="symbol-2_22587 fill-lighterrorcontainer-hover-2_23151"
                        >
                            <ActionAdd1
                                id="2_22588"
                                className="instance-2_22588"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22589"
                            className="symbol-2_22589 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd1
                                id="2_22590"
                                className="instance-2_22590"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22591"
                            className="symbol-2_22591 fill-lighterrorcontainer-hover-2_23151"
                        >
                            <ActionAdd1
                                id="2_22592"
                                className="instance-2_22592"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22593"
                            className="symbol-2_22593 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd1
                                id="2_22594"
                                className="instance-2_22594"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22595"
                            className="symbol-2_22595 fill-lighterrorcontainer-default-2_23164"
                        >
                            <ActionAdd1
                                id="2_22596"
                                className="instance-2_22596"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22597"
                            className="symbol-2_22597 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd1
                                id="2_22598"
                                className="instance-2_22598"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22599"
                            className="symbol-2_22599 fill-lightaccentcontainer-default-2_22052"
                        >
                            <ActionAdd1
                                id="2_22600"
                                className="instance-2_22600"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22601" className="symbol-2_22601">
                            <ActionAdd1
                                id="2_22602"
                                className="instance-2_22602"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22603" className="symbol-2_22603">
                            <ActionAdd1
                                id="2_22604"
                                className="instance-2_22604"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22605" className="symbol-2_22605">
                            <ActionAdd1
                                id="2_22606"
                                className="instance-2_22606"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22607" className="symbol-2_22607">
                            <ActionAdd1
                                id="2_22608"
                                className="instance-2_22608"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22609" className="symbol-2_22609">
                            <ActionAdd1
                                id="2_22610"
                                className="instance-2_22610"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22611" className="symbol-2_22611">
                            <ActionAdd1
                                id="2_22612"
                                className="instance-2_22612"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22613" className="symbol-2_22613">
                            <ActionAdd1
                                id="2_22614"
                                className="instance-2_22614"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22615" className="symbol-2_22615">
                            <ActionAdd1
                                id="2_22616"
                                className="instance-2_22616"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22617" className="symbol-2_22617">
                            <ActionAdd1
                                id="2_22618"
                                className="instance-2_22618"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22619" className="symbol-2_22619">
                            <ActionAdd1
                                id="2_22620"
                                className="instance-2_22620"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22621" className="symbol-2_22621">
                            <ActionAdd1
                                id="2_22622"
                                className="instance-2_22622"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22623" className="symbol-2_22623">
                            <ActionAdd1
                                id="2_22624"
                                className="instance-2_22624"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22625" className="stroke-wrapper-2_22625">
                            <div className="symbol-2_22625">
                                <ActionAdd1
                                    id="2_22626"
                                    className="instance-2_22626"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22625 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22627" className="stroke-wrapper-2_22627">
                            <div className="symbol-2_22627">
                                <ActionAdd1
                                    id="2_22628"
                                    className="instance-2_22628"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22627 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22629" className="stroke-wrapper-2_22629">
                            <div className="symbol-2_22629">
                                <ActionAdd1
                                    id="2_22630"
                                    className="instance-2_22630"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22629 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22631" className="stroke-wrapper-2_22631">
                            <div className="symbol-2_22631">
                                <ActionAdd1
                                    id="2_22632"
                                    className="instance-2_22632"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22631 stroke-lightaccenthover-2_23149"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22633" className="stroke-wrapper-2_22633">
                            <div className="symbol-2_22633">
                                <ActionAdd1
                                    id="2_22634"
                                    className="instance-2_22634"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22633 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22635" className="stroke-wrapper-2_22635">
                            <div className="symbol-2_22635">
                                <ActionAdd1
                                    id="2_22636"
                                    className="instance-2_22636"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22635 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22637" className="stroke-wrapper-2_22637">
                            <div className="symbol-2_22637">
                                <ActionAdd1
                                    id="2_22638"
                                    className="instance-2_22638"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22637 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22639" className="stroke-wrapper-2_22639">
                            <div className="symbol-2_22639">
                                <ActionAdd1
                                    id="2_22640"
                                    className="instance-2_22640"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22639 stroke-lighterrorhover-2_23161"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div id="2_22641" className="stroke-wrapper-2_22641">
                            <div className="symbol-2_22641">
                                <ActionAdd1
                                    id="2_22642"
                                    className="instance-2_22642"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22641 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div id="2_22643" className="stroke-wrapper-2_22643">
                            <div className="symbol-2_22643">
                                <ActionAdd1
                                    id="2_22644"
                                    className="instance-2_22644"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22643 stroke-lighterrordefault-2_23162"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div id="2_22645" className="stroke-wrapper-2_22645">
                            <div className="symbol-2_22645">
                                <ActionAdd1
                                    id="2_22646"
                                    className="instance-2_22646"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22645 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div id="2_22647" className="stroke-wrapper-2_22647">
                            <div className="symbol-2_22647">
                                <ActionAdd1
                                    id="2_22648"
                                    className="instance-2_22648"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22647 stroke-lightaccentdefault-2_4578"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22649"
                            className="symbol-2_22649 fill-lightbgsurface3-2_22053"
                        >
                            <div
                                id="2_22650"
                                className="instance-2_22650"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22650"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22650"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22650"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22651"
                            className="symbol-2_22651 fill-lightbgsurface3-2_22053"
                        >
                            <div
                                id="2_22652"
                                className="instance-2_22652"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22652"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22652"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22652"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22653"
                            className="symbol-2_22653 fill-lightbgsurface4-2_23165"
                        >
                            <div
                                id="2_22654"
                                className="instance-2_22654"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22654"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22654"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22654"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22655"
                            className="symbol-2_22655 fill-lightbgsurface4-2_23165"
                        >
                            <div
                                id="2_22656"
                                className="instance-2_22656"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22656"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22656"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22656"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22657"
                            className="symbol-2_22657 fill-lightbgsurface3-2_22053"
                        >
                            <div
                                id="2_22658"
                                className="instance-2_22658"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22658"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22658"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22658"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22659"
                            className="symbol-2_22659 fill-lightbgsurface3-2_22053"
                        >
                            <div
                                id="2_22660"
                                className="instance-2_22660"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22660"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22660"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22660"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22661"
                            className="symbol-2_22661 fill-lightbgsurface4-2_23165"
                        >
                            <div
                                id="2_22662"
                                className="instance-2_22662"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22662"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22662"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22662"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22663"
                            className="symbol-2_22663 fill-lightbgsurface4-2_23165"
                        >
                            <div
                                id="2_22664"
                                className="instance-2_22664"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22664"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22664"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22664"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22665"
                            className="symbol-2_22665 fill-lightbgsurface3-2_22053"
                        >
                            <div
                                id="2_22666"
                                className="instance-2_22666"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22666"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22666"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22666"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22667"
                            className="symbol-2_22667 fill-lightbgsurface3-2_22053"
                        >
                            <div
                                id="2_22668"
                                className="instance-2_22668"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22668"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22668"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22668"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22669"
                            className="symbol-2_22669 fill-lightbgsurface3-2_22053"
                        >
                            <div
                                id="2_22670"
                                className="instance-2_22670"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22670"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22670"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22670"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22671"
                            className="symbol-2_22671 fill-lightbgsurface3-2_22053"
                        >
                            <div
                                id="2_22672"
                                className="instance-2_22672"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22672"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22672"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22672"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22673"
                            className="symbol-2_22673 fill-lightneutraldefault-2_23155"
                        >
                            <div
                                id="2_22674"
                                className="instance-2_22674"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22674"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22674"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22674"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22675"
                            className="symbol-2_22675 fill-lightneutraldefault-2_23155"
                        >
                            <div
                                id="2_22676"
                                className="instance-2_22676"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22676"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22676"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22676"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22677"
                            className="symbol-2_22677 fill-lightneutralhover-2_23168"
                        >
                            <div
                                id="2_22678"
                                className="instance-2_22678"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22678"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22678"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22678"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22679"
                            className="symbol-2_22679 fill-lightneutralhover-2_23168"
                        >
                            <div
                                id="2_22680"
                                className="instance-2_22680"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22680"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22680"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22680"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22681"
                            className="symbol-2_22681 fill-lightneutraldefault-2_23155"
                        >
                            <div
                                id="2_22682"
                                className="instance-2_22682"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22682"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22682"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22682"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22683"
                            className="symbol-2_22683 fill-lightneutraldefault-2_23155"
                        >
                            <div
                                id="2_22684"
                                className="instance-2_22684"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22684"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22684"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22684"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22685"
                            className="symbol-2_22685 fill-lightneutralhover-2_23168"
                        >
                            <div
                                id="2_22686"
                                className="instance-2_22686"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22686"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22686"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22686"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22687"
                            className="symbol-2_22687 fill-lightneutralhover-2_23168"
                        >
                            <div
                                id="2_22688"
                                className="instance-2_22688"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22688"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22688"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22688"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22689"
                            className="symbol-2_22689 fill-lightneutralmuted-2_23154"
                        >
                            <div
                                id="2_22690"
                                className="instance-2_22690"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22690"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22690"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22690"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22691"
                            className="symbol-2_22691 fill-lightneutralmuted-2_23154"
                        >
                            <div
                                id="2_22692"
                                className="instance-2_22692"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22692"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22692"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22692"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22693"
                            className="symbol-2_22693 fill-lightneutralmuted-2_23154"
                        >
                            <div
                                id="2_22694"
                                className="instance-2_22694"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22694"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22694"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22694"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22695"
                            className="symbol-2_22695 fill-lightneutralmuted-2_23154"
                        >
                            <div
                                id="2_22696"
                                className="instance-2_22696"
                                instance_2_23129={"NavigationCaretSort"}
                            >
                                {iconvariant20 === "Component_2_24287" && (
                                    <ActionFilterFill id="2_22696"></ActionFilterFill>
                                )}
                                {iconvariant20 === "Component_2_18843" && (
                                    <NavigationCaretSort id="2_22696"></NavigationCaretSort>
                                )}
                                {iconvariant20 === "Component_2_23129" && (
                                    <ActionAdd2 id="2_22696"></ActionAdd2>
                                )}
                            </div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22697"
                            className="symbol-2_22697 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd1
                                id="2_22698"
                                className="instance-2_22698"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22699"
                            className="symbol-2_22699 fill-lightbgsurface4-2_23165"
                        >
                            <ActionAdd1
                                id="2_22700"
                                className="instance-2_22700"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22701"
                            className="symbol-2_22701 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd1
                                id="2_22702"
                                className="instance-2_22702"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22703"
                            className="symbol-2_22703 fill-lightbgsurface4-2_23165"
                        >
                            <ActionAdd1
                                id="2_22704"
                                className="instance-2_22704"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22705"
                            className="symbol-2_22705 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd1
                                id="2_22706"
                                className="instance-2_22706"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "secondary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22707"
                            className="symbol-2_22707 fill-lightbgsurface3-2_22053"
                        >
                            <ActionAdd1
                                id="2_22708"
                                className="instance-2_22708"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22709"
                            className="symbol-2_22709 fill-lightneutraldefault-2_23155"
                        >
                            <ActionAdd1
                                id="2_22710"
                                className="instance-2_22710"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22711"
                            className="symbol-2_22711 fill-lightneutralhover-2_23168"
                        >
                            <ActionAdd1
                                id="2_22712"
                                className="instance-2_22712"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22713"
                            className="symbol-2_22713 fill-lightneutraldefault-2_23155"
                        >
                            <ActionAdd1
                                id="2_22714"
                                className="instance-2_22714"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22715"
                            className="symbol-2_22715 fill-lightneutralhover-2_23168"
                        >
                            <ActionAdd1
                                id="2_22716"
                                className="instance-2_22716"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22717"
                            className="symbol-2_22717 fill-lightneutralmuted-2_23154"
                        >
                            <ActionAdd1
                                id="2_22718"
                                className="instance-2_22718"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "primary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22719"
                            className="symbol-2_22719 fill-lightneutralmuted-2_23154"
                        >
                            <ActionAdd1
                                id="2_22720"
                                className="instance-2_22720"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22721" className="symbol-2_22721">
                            <ActionAdd2
                                id="2_22722"
                                className="instance-2_22722"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22723" className="symbol-2_22723">
                            <ActionAdd2
                                id="2_22724"
                                className="instance-2_22724"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22725" className="symbol-2_22725">
                            <ActionAdd2
                                id="2_22726"
                                className="instance-2_22726"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22727" className="symbol-2_22727">
                            <ActionAdd2
                                id="2_22728"
                                className="instance-2_22728"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22729" className="symbol-2_22729">
                            <ActionAdd2
                                id="2_22730"
                                className="instance-2_22730"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22731" className="symbol-2_22731">
                            <ActionAdd2
                                id="2_22732"
                                className="instance-2_22732"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22733" className="symbol-2_22733">
                            <ActionAdd2
                                id="2_22734"
                                className="instance-2_22734"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22735" className="symbol-2_22735">
                            <ActionAdd2
                                id="2_22736"
                                className="instance-2_22736"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22737" className="symbol-2_22737">
                            <ActionAdd2
                                id="2_22738"
                                className="instance-2_22738"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22739" className="symbol-2_22739">
                            <ActionAdd2
                                id="2_22740"
                                className="instance-2_22740"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22741" className="symbol-2_22741">
                            <ActionAdd2
                                id="2_22742"
                                className="instance-2_22742"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22743" className="symbol-2_22743">
                            <ActionAdd2
                                id="2_22744"
                                className="instance-2_22744"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22745" className="stroke-wrapper-2_22745">
                            <div className="symbol-2_22745">
                                <ActionAdd2
                                    id="2_22746"
                                    className="instance-2_22746"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22745 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22747" className="stroke-wrapper-2_22747">
                            <div className="symbol-2_22747">
                                <ActionAdd2
                                    id="2_22748"
                                    className="instance-2_22748"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22747 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22749" className="stroke-wrapper-2_22749">
                            <div className="symbol-2_22749">
                                <ActionAdd2
                                    id="2_22750"
                                    className="instance-2_22750"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22749 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22751" className="stroke-wrapper-2_22751">
                            <div className="symbol-2_22751">
                                <ActionAdd2
                                    id="2_22752"
                                    className="instance-2_22752"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22751 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22753" className="stroke-wrapper-2_22753">
                            <div className="symbol-2_22753">
                                <ActionAdd2
                                    id="2_22754"
                                    className="instance-2_22754"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22753 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22755" className="stroke-wrapper-2_22755">
                            <div className="symbol-2_22755">
                                <ActionAdd2
                                    id="2_22756"
                                    className="instance-2_22756"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22755 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22757" className="stroke-wrapper-2_22757">
                            <div className="symbol-2_22757">
                                <ActionAdd2
                                    id="2_22758"
                                    className="instance-2_22758"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22757 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22759" className="stroke-wrapper-2_22759">
                            <div className="symbol-2_22759">
                                <ActionAdd2
                                    id="2_22760"
                                    className="instance-2_22760"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22759 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22761" className="stroke-wrapper-2_22761">
                            <div className="symbol-2_22761">
                                <ActionAdd2
                                    id="2_22762"
                                    className="instance-2_22762"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22761 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22763" className="stroke-wrapper-2_22763">
                            <div className="symbol-2_22763">
                                <ActionAdd2
                                    id="2_22764"
                                    className="instance-2_22764"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22763 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22765" className="stroke-wrapper-2_22765">
                            <div className="symbol-2_22765">
                                <ActionAdd2
                                    id="2_22766"
                                    className="instance-2_22766"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22765 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22767" className="stroke-wrapper-2_22767">
                            <div className="symbol-2_22767">
                                <ActionAdd2
                                    id="2_22768"
                                    className="instance-2_22768"
                                ></ActionAdd2>
                            </div>
                            <div className="stroke-2_22767 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22769" className="symbol-2_22769">
                            <ActionAdd1
                                id="2_22770"
                                className="instance-2_22770"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22771" className="symbol-2_22771">
                            <ActionAdd1
                                id="2_22772"
                                className="instance-2_22772"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22773" className="symbol-2_22773">
                            <ActionAdd1
                                id="2_22774"
                                className="instance-2_22774"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22775" className="symbol-2_22775">
                            <ActionAdd1
                                id="2_22776"
                                className="instance-2_22776"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22777" className="symbol-2_22777">
                            <ActionAdd1
                                id="2_22778"
                                className="instance-2_22778"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "tertiary" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22779" className="symbol-2_22779">
                            <ActionAdd1
                                id="2_22780"
                                className="instance-2_22780"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22781" className="stroke-wrapper-2_22781">
                            <div className="symbol-2_22781">
                                <ActionAdd1
                                    id="2_22782"
                                    className="instance-2_22782"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22781 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22783" className="stroke-wrapper-2_22783">
                            <div className="symbol-2_22783">
                                <ActionAdd1
                                    id="2_22784"
                                    className="instance-2_22784"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22783 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22785" className="stroke-wrapper-2_22785">
                            <div className="symbol-2_22785">
                                <ActionAdd1
                                    id="2_22786"
                                    className="instance-2_22786"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22785 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22787" className="stroke-wrapper-2_22787">
                            <div className="symbol-2_22787">
                                <ActionAdd1
                                    id="2_22788"
                                    className="instance-2_22788"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22787 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div id="2_22789" className="stroke-wrapper-2_22789">
                            <div className="symbol-2_22789">
                                <ActionAdd1
                                    id="2_22790"
                                    className="instance-2_22790"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22789 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "outline" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22791" className="stroke-wrapper-2_22791">
                            <div className="symbol-2_22791">
                                <ActionAdd1
                                    id="2_22792"
                                    className="instance-2_22792"
                                ></ActionAdd1>
                            </div>
                            <div className="stroke-2_22791 stroke-lightborderdefault-2_23150"></div>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22793"
                            className="symbol-2_22793 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22794"
                                className="instance-2_22794"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22795"
                            className="symbol-2_22795 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22796"
                                className="instance-2_22796"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22797"
                            className="symbol-2_22797 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22798"
                                className="instance-2_22798"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22799"
                            className="symbol-2_22799 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22800"
                                className="instance-2_22800"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22801"
                            className="symbol-2_22801 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22802"
                                className="instance-2_22802"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22803"
                            className="symbol-2_22803 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22804"
                                className="instance-2_22804"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22805"
                            className="symbol-2_22805 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22806"
                                className="instance-2_22806"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22807"
                            className="symbol-2_22807 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22808"
                                className="instance-2_22808"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22809"
                            className="symbol-2_22809 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22810"
                                className="instance-2_22810"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22811"
                            className="symbol-2_22811 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22812"
                                className="instance-2_22812"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22813"
                            className="symbol-2_22813 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22814"
                                className="instance-2_22814"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22815"
                            className="symbol-2_22815 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22816"
                                className="instance-2_22816"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22817"
                            className="symbol-2_22817 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22818"
                                className="instance-2_22818"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22819"
                            className="symbol-2_22819 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22820"
                                className="instance-2_22820"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22821"
                            className="symbol-2_22821 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22822"
                                className="instance-2_22822"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22823"
                            className="symbol-2_22823 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22824"
                                className="instance-2_22824"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22825"
                            className="symbol-2_22825 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22826"
                                className="instance-2_22826"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22827"
                            className="symbol-2_22827 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22828"
                                className="instance-2_22828"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22829"
                            className="symbol-2_22829 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22830"
                                className="instance-2_22830"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22831"
                            className="symbol-2_22831 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22832"
                                className="instance-2_22832"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22833"
                            className="symbol-2_22833 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22834"
                                className="instance-2_22834"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22835"
                            className="symbol-2_22835 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22836"
                                className="instance-2_22836"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22837"
                            className="symbol-2_22837 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22838"
                                className="instance-2_22838"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22839"
                            className="symbol-2_22839 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22840"
                                className="instance-2_22840"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22841"
                            className="symbol-2_22841 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22842"
                                className="instance-2_22842"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22843"
                            className="symbol-2_22843 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22844"
                                className="instance-2_22844"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22845" className="symbol-2_22845">
                            <ActionAdd0
                                id="2_22846"
                                className="instance-2_22846"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22847" className="symbol-2_22847">
                            <ActionAdd0
                                id="2_22848"
                                className="instance-2_22848"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22849"
                            className="symbol-2_22849 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd0
                                id="2_22850"
                                className="instance-2_22850"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22851" className="symbol-2_22851">
                            <ActionAdd0
                                id="2_22852"
                                className="instance-2_22852"
                            ></ActionAdd0>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22853"
                            className="symbol-2_22853 fill-lightbgsurface1-2_22049"
                        >
                            <div
                                id="2_22854"
                                className="instance-2_22854"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22854"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22854"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22854"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22854"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22854"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22854"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22854"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22855"
                            className="symbol-2_22855 fill-lightbgsurface1-2_22049"
                        >
                            <div
                                id="2_22856"
                                className="instance-2_22856"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22856"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22856"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22856"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22856"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22856"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22856"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22856"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22857" className="symbol-2_22857">
                            <div
                                id="2_22858"
                                className="instance-2_22858"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22858"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22858"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22858"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22858"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22858"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22858"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22858"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22859" className="symbol-2_22859">
                            <div
                                id="2_22860"
                                className="instance-2_22860"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22860"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22860"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22860"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22860"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22860"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22860"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22860"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22861"
                            className="symbol-2_22861 fill-lightbgsurface1-2_22049"
                        >
                            <div
                                id="2_22862"
                                className="instance-2_22862"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22862"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22862"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22862"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22862"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22862"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22862"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22862"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22863" className="symbol-2_22863">
                            <div
                                id="2_22864"
                                className="instance-2_22864"
                                instance_2_23131={"NavigationChevronLeft"}
                            >
                                {iconvariant24 === "Component_2_24279" && (
                                    <ActionKanbanboard id="2_22864"></ActionKanbanboard>
                                )}
                                {iconvariant24 === "Component_2_80585" && (
                                    <ActionSettingsadjust id="2_22864"></ActionSettingsadjust>
                                )}
                                {iconvariant24 === "Component_2_18845" && (
                                    <NavigationCloselarge id="2_22864"></NavigationCloselarge>
                                )}
                                {iconvariant24 === "Component_2_20301" && (
                                    <ActionSearch id="2_22864"></ActionSearch>
                                )}
                                {iconvariant24 === "Component_2_25176" && (
                                    <OrganizeCalendar id="2_22864"></OrganizeCalendar>
                                )}
                                {iconvariant24 === "Component_2_27180" && (
                                    <NavigationChevronLeft id="2_22864"></NavigationChevronLeft>
                                )}
                                {iconvariant24 === "Component_2_23131" && (
                                    <ActionAdd0 id="2_22864"></ActionAdd0>
                                )}
                            </div>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22865"
                            className="symbol-2_22865 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22866"
                                className="instance-2_22866"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22867"
                            className="symbol-2_22867 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22868"
                                className="instance-2_22868"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22869"
                            className="symbol-2_22869 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22870"
                                className="instance-2_22870"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22871"
                            className="symbol-2_22871 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22872"
                                className="instance-2_22872"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22873"
                            className="symbol-2_22873 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22874"
                                className="instance-2_22874"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22875"
                            className="symbol-2_22875 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22876"
                                className="instance-2_22876"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22877"
                            className="symbol-2_22877 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22878"
                                className="instance-2_22878"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22879"
                            className="symbol-2_22879 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22880"
                                className="instance-2_22880"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22881"
                            className="symbol-2_22881 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22882"
                                className="instance-2_22882"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22883"
                            className="symbol-2_22883 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22884"
                                className="instance-2_22884"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22885"
                            className="symbol-2_22885 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22886"
                                className="instance-2_22886"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22887"
                            className="symbol-2_22887 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22888"
                                className="instance-2_22888"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22889"
                            className="symbol-2_22889 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22890"
                                className="instance-2_22890"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22891"
                            className="symbol-2_22891 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22892"
                                className="instance-2_22892"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22893"
                            className="symbol-2_22893 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22894"
                                className="instance-2_22894"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22895"
                            className="symbol-2_22895 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22896"
                                className="instance-2_22896"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22897"
                            className="symbol-2_22897 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22898"
                                className="instance-2_22898"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22899"
                            className="symbol-2_22899 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22900"
                                className="instance-2_22900"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22901"
                            className="symbol-2_22901 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22902"
                                className="instance-2_22902"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22903"
                            className="symbol-2_22903 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22904"
                                className="instance-2_22904"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22905"
                            className="symbol-2_22905 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22906"
                                className="instance-2_22906"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22907"
                            className="symbol-2_22907 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22908"
                                className="instance-2_22908"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22909"
                            className="symbol-2_22909 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22910"
                                className="instance-2_22910"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22911"
                            className="symbol-2_22911 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22912"
                                className="instance-2_22912"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22913"
                            className="symbol-2_22913 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22914"
                                className="instance-2_22914"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22915"
                            className="symbol-2_22915 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22916"
                                className="instance-2_22916"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22917"
                            className="symbol-2_22917 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22918"
                                className="instance-2_22918"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22919"
                            className="symbol-2_22919 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22920"
                                className="instance-2_22920"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22921"
                            className="symbol-2_22921 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22922"
                                className="instance-2_22922"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22923"
                            className="symbol-2_22923 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22924"
                                className="instance-2_22924"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22925"
                            className="symbol-2_22925 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22926"
                                className="instance-2_22926"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22927"
                            className="symbol-2_22927 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22928"
                                className="instance-2_22928"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22929"
                            className="symbol-2_22929 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22930"
                                className="instance-2_22930"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "error" && (
                        <div
                            id="2_22931"
                            className="symbol-2_22931 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22932"
                                className="instance-2_22932"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22933"
                            className="symbol-2_22933 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22934"
                                className="instance-2_22934"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "accent" && (
                        <div
                            id="2_22935"
                            className="symbol-2_22935 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22936"
                                className="instance-2_22936"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22937"
                            className="symbol-2_22937 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22938"
                                className="instance-2_22938"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22939"
                            className="symbol-2_22939 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22940"
                                className="instance-2_22940"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22941"
                            className="symbol-2_22941 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22942"
                                className="instance-2_22942"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22943"
                            className="symbol-2_22943 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22944"
                                className="instance-2_22944"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22945" className="symbol-2_22945">
                            <ActionAdd2
                                id="2_22946"
                                className="instance-2_22946"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22947" className="symbol-2_22947">
                            <ActionAdd2
                                id="2_22948"
                                className="instance-2_22948"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22949" className="symbol-2_22949">
                            <ActionAdd2
                                id="2_22950"
                                className="instance-2_22950"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22951" className="symbol-2_22951">
                            <ActionAdd2
                                id="2_22952"
                                className="instance-2_22952"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22953"
                            className="symbol-2_22953 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22954"
                                className="instance-2_22954"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22955"
                            className="symbol-2_22955 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd2
                                id="2_22956"
                                className="instance-2_22956"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "s" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22957" className="symbol-2_22957">
                            <ActionAdd2
                                id="2_22958"
                                className="instance-2_22958"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22959" className="symbol-2_22959">
                            <ActionAdd2
                                id="2_22960"
                                className="instance-2_22960"
                            ></ActionAdd2>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22961"
                            className="symbol-2_22961 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22962"
                                className="instance-2_22962"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22963"
                            className="symbol-2_22963 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22964"
                                className="instance-2_22964"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "default" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22965" className="symbol-2_22965">
                            <ActionAdd1
                                id="2_22966"
                                className="instance-2_22966"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "pressed" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22967" className="symbol-2_22967">
                            <ActionAdd1
                                id="2_22968"
                                className="instance-2_22968"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "round" &&
                    colorScheme === "neutral" && (
                        <div
                            id="2_22969"
                            className="symbol-2_22969 fill-lightbgsurface1-2_22049"
                        >
                            <ActionAdd1
                                id="2_22970"
                                className="instance-2_22970"
                            ></ActionAdd1>
                        </div>
                    )}
                {size === "xs" &&
                    state === "disabled" &&
                    variant === "white bg" &&
                    _style === "square" &&
                    colorScheme === "neutral" && (
                        <div id="2_22971" className="symbol-2_22971">
                            <ActionAdd1
                                id="2_22972"
                                className="instance-2_22972"
                            ></ActionAdd1>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Buttonicon;
