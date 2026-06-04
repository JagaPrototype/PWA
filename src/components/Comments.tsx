import AlertInformationColor from "@/components/alertinformationcolor";
import AlertAttentionColor from "@/components/alertattentioncolor";
import "@/styles/Comments.css";
interface commentsProps {
    Type?: string;
    id?: string;
    className?: string;
}
const Comments = (props: commentsProps) => {
    const { Type, id, className = "" } = props;

    return (
        <div className={`component-2_58392 ${className}`} id={id}>
            <div id="2_58392" className="symbol-2_58392">
                {Type === "Info" && (
                    <div
                        id="2_58393"
                        className="symbol-2_58393 fill-lightneutraldefault-2_27348"
                    >
                        <div id="2_58394" className="frame-2_58394">
                            <div className="frame-content-2_58394">
                                <AlertInformationColor
                                    id="2_58395"
                                    className="instance-2_58395"
                                ></AlertInformationColor>
                            </div>
                        </div>
                        <p
                            id="2_58396"
                            className="paragraph-2_58396 fill-lightneutralon-neutral-2_27347-paragraph"
                        >
                            {
                                "Эти макеты в работу не берем! Разрабы не могут реализовать эту фичу в текущем спринте"
                            }
                        </p>
                    </div>
                )}
                {Type === "Warning" && (
                    <div id="2_58397" className="symbol-2_58397">
                        <div id="2_58398" className="frame-2_58398">
                            <div className="frame-content-2_58398">
                                <AlertAttentionColor
                                    id="2_58399"
                                    className="instance-2_58399"
                                ></AlertAttentionColor>
                            </div>
                        </div>
                        <p
                            id="2_58400"
                            className="paragraph-2_58400 fill-lightwarningon-warning-2_27364-paragraph"
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
export default Comments;
