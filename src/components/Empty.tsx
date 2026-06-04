import Illustrationsearch from "@/components/illustrationsearch";
import Button0 from "@/components/button0";
import EmptyIcon from "@/components/emptyicon";
import "@/styles/Empty.css";
interface emptyProps {
    secondarybutton?: boolean;
    primarybutton?: boolean;
    subtext?: string;
    title?: string;
    type?: string;
    id?: string;
    className?: string;
}
const Empty = (props: emptyProps) => {
    const {
        secondarybutton = true,
        primarybutton = true,
        subtext = "Причина, по которой пусто",
        title = "Пусто",
        type,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_27365 ${className}`} id={id}>
            <div id="2_27365" className="symbol-2_27365">
                {type === "with illustrations" && (
                    <div id="2_27366" className="symbol-2_27366">
                        <div id="2_27367" className="frame-2_27367">
                            <div className="frame-content-2_27367">
                                <Illustrationsearch
                                    id="2_27368"
                                    className="instance-2_27368"
                                ></Illustrationsearch>
                                <div id="2_27369" className="frame-2_27369">
                                    <div className="frame-content-2_27369">
                                        <p
                                            id="2_27370"
                                            className="paragraph-2_27370 fill-lightfgdefault-2_18970-paragraph text-webheadingh4-2_28735"
                                        >
                                            {title ?? "Пусто"}
                                        </p>
                                        {subtext && (
                                            <p
                                                id="2_27371"
                                                className="paragraph-2_27371 fill-lightfgmuted-2_18966-paragraph text-webbodys-2_28730"
                                            >
                                                {subtext ??
                                                    "Причина, по которой пусто"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="2_27372" className="frame-2_27372">
                            {secondarybutton && (
                                <Button0
                                    id="2_27373"
                                    className="instance-2_27373"
                                    size={"m"}
                                    variant={"secondary"}
                                    colorScheme={"neutral"}
                                    state={"default"}
                                    iconLeft={false}
                                ></Button0>
                            )}
                            {primarybutton && (
                                <Button0
                                    id="2_27374"
                                    className="instance-2_27374"
                                    size={"m"}
                                    variant={"primary"}
                                    colorScheme={"accent"}
                                    state={"default"}
                                    iconLeft={false}
                                ></Button0>
                            )}
                        </div>
                    </div>
                )}
                {type === "with icons" && (
                    <div
                        id="2_27375"
                        className="symbol-2_27375 fill-lightbgsurface1-2_2231"
                    >
                        <div id="2_27376" className="frame-2_27376">
                            <div className="frame-content-2_27376">
                                <EmptyIcon
                                    id="2_27377"
                                    className="instance-2_27377"
                                ></EmptyIcon>
                                <div id="2_27378" className="frame-2_27378">
                                    <div className="frame-content-2_27378">
                                        <p
                                            id="2_27379"
                                            className="paragraph-2_27379 fill-lightfgdefault-2_18970-paragraph text-webheadingh4-2_28735"
                                        >
                                            {title ?? "Пусто"}
                                        </p>
                                        {subtext && (
                                            <p
                                                id="2_27380"
                                                className="paragraph-2_27380 fill-lightfgmuted-2_18966-paragraph text-webbodys-2_28730"
                                            >
                                                {subtext ??
                                                    "Причина, по которой пусто"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="2_27381" className="frame-2_27381">
                            {secondarybutton && (
                                <Button0
                                    id="2_27382"
                                    className="instance-2_27382"
                                    size={"m"}
                                    variant={"secondary"}
                                    colorScheme={"neutral"}
                                    state={"default"}
                                    iconLeft={false}
                                ></Button0>
                            )}
                            {primarybutton && (
                                <Button0
                                    id="2_27383"
                                    className="instance-2_27383"
                                    size={"m"}
                                    variant={"primary"}
                                    colorScheme={"accent"}
                                    state={"default"}
                                    iconLeft={false}
                                ></Button0>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Empty;
