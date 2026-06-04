import AlertInformationColor from "@/components/alertinformationcolor";
import AlertAttentionColor from "@/components/alertattentioncolor";
import "@/styles/Comments0.css";
interface comments0Props {
    Type?: string;
    id?: string;
    className?: string;
}
const Comments0 = (props: comments0Props) => {
    const { Type, id, className = "" } = props;

    return (
        <div className={`component-2_27351 ${className}`} id={id}>
            <div id="2_27351" className="symbol-2_27351">
                {Type === "Info" && (
                    <div
                        id="2_27352"
                        className="symbol-2_27352 fill-lightneutraldefault-2_27348"
                    >
                        <div id="2_27353" className="frame-2_27353">
                            <div className="frame-content-2_27353">
                                <AlertInformationColor
                                    id="2_27354"
                                    className="instance-2_27354"
                                ></AlertInformationColor>
                            </div>
                        </div>
                        <p
                            id="2_27355"
                            className="paragraph-2_27355 fill-lightneutralon-neutral-2_27347-paragraph"
                        >
                            {
                                "Эти макеты в работу не берем! Разрабы не могут реализовать эту фичу в текущем спринте"
                            }
                        </p>
                    </div>
                )}
                {Type === "Warning" && (
                    <div id="2_27356" className="symbol-2_27356">
                        <div id="2_27357" className="frame-2_27357">
                            <div className="frame-content-2_27357">
                                <AlertAttentionColor
                                    id="2_27358"
                                    className="instance-2_27358"
                                ></AlertAttentionColor>
                            </div>
                        </div>
                        <p
                            id="2_27359"
                            className="paragraph-2_27359 fill-lightwarningon-warning-2_27364-paragraph"
                        >
                            {
                                "Эти макеты в работу не берем! Разрабы не могут реализовать эту фичу в текущем спринте"
                            }
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Comments0;
