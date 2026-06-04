import "@/styles/Editorminus.css";
interface editorminusProps {
    id?: string;
    className?: string;
}
const Editorminus = (props: editorminusProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20339 ${className}`} id={id}>
            <div id="2_20339" className="symbol-2_20339">
                <div id="2_20340" className="vector-2_20340"></div>
            </div>
        </div>
    );
};
export default Editorminus;
