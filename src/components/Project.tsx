import Image from "@/components/image";
import ListRightpart from "@/components/listrightpart";
import "@/styles/Project.css";
interface projectProps {
    id?: string;
    className?: string;
    notification?: boolean;
    iconbadge?: boolean;
    status?: boolean;
    instance_2_24200_2_24213_2_18691?: string;
    text_2_24200_2_24213_2_18691_2_19054?: string;
    text_2_24200_2_24213_2_18693?: string;
    text_2_24200_2_24213_2_18695?: string;
    instance_2_24200_2_24213_2_18696_2_23972?: string;
}
const Project = (props: projectProps) => {
    const {
        id,
        className = "",
        notification,
        iconbadge,
        status,
        instance_2_24200_2_24213_2_18691,
        text_2_24200_2_24213_2_18691_2_19054,
        text_2_24200_2_24213_2_18693,
        text_2_24200_2_24213_2_18695,
        instance_2_24200_2_24213_2_18696_2_23972
    } = props;

    return (
        <div className={`component-2_18689 ${className}`} id={id}>
            <div id="2_18689" className="symbol-2_18689">
                <div id="2_18690" className="frame-2_18690">
                    <div
                        id="2_18691"
                        className="instance-2_18691"
                        instance_2_19052={"varianticonsizexl56"}
                        text_2_19054={`C`}
                        notification={notification}
                        iconbadge={iconbadge}
                        status={status}
                        text_2_24200_2_24213_2_18691_2_19054={
                            text_2_24200_2_24213_2_18691_2_19054
                        }
                    >
                        {instance_2_24200_2_24213_2_18691 ===
                            "Component_2_19047" && (
                            <Image
                                id="2_18691"
                                variant={"icon"}
                                size={"xl (56)"}
                            ></Image>
                        )}
                        {instance_2_24200_2_24213_2_18691 ===
                            "Component_2_19052" && (
                            <Image
                                id="2_18691"
                                variant={"text"}
                                size={"xl (56)"}
                            ></Image>
                        )}
                    </div>
                    <div id="2_18692" className="frame-2_18692">
                        <p
                            id="2_18693"
                            className="paragraph-2_18693 fill-lightfgmuted-2_24221-paragraph text-mobilefontdescriptionl-2_24222"
                        >
                            {text_2_24200_2_24213_2_18693 ?? "CRMBTCPT"}
                        </p>
                        <div id="2_18694" className="frame-2_18694">
                            <p
                                id="2_18695"
                                className="paragraph-2_18695 fill-lightfgdefault-2_24220-paragraph text-body-m-2_24223"
                            >
                                {text_2_24200_2_24213_2_18695 ??
                                    "CRM B2C: проблемы"}
                            </p>
                        </div>
                    </div>
                </div>
                <ListRightpart
                    id="2_18696"
                    className="instance-2_18696"
                    type={"icon"}
                    align={"center"}
                    instance_2_24200_2_24213_2_18696_2_23972={
                        instance_2_24200_2_24213_2_18696_2_23972
                    }
                ></ListRightpart>
            </div>
        </div>
    );
};
export default Project;
