import "@/styles/Editorhashtag.css";
interface editorhashtagProps {
    id?: string;
    className?: string;
}
const Editorhashtag = (props: editorhashtagProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-4_31827 ${className}`} id={id}>
            <div id="4_31827" className="symbol-4_31827">
                <div id="4_31828" className="vector-4_31828"></div>
            </div>
        </div>
    );
};
export default Editorhashtag;
