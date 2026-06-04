import "@/styles/Editorlist.css";
interface editorlistProps {
    id?: string;
    className?: string;
}
const Editorlist = (props: editorlistProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-343_47878 ${className}`} id={id}>
            <div id="343_47878" className="symbol-343_47878">
                <div id="343_47879" className="vector-343_47879"></div>
            </div>
        </div>
    );
};
export default Editorlist;
