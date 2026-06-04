import EditorPencil from "@/components/editorpencil";
import "@/styles/Default.css";
interface defaultProps {
    icon20px?: string;
    id?: string;
    className?: string;
}
const Default = (props: defaultProps) => {
    const { icon20px = "Component_3491_99019", id, className = "" } = props;

    return (
        <div className={`component-2_23121 ${className}`} id={id}>
            <div
                id="2_23121"
                className="symbol-2_23121 fill-lightbgelevatedxl-2_23159 effect-shadowbottoml-2_20352"
            >
                <EditorPencil
                    id="2_23122"
                    className="instance-2_23122"
                ></EditorPencil>
            </div>
        </div>
    );
};
export default Default;
