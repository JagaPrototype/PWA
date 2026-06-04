import "@/styles/Editorpencil.css";
interface editorpencilProps {
    id?: string;
    className?: string;
}
const Editorpencil = (props: editorpencilProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_23135 ${className}`} id={id}>
            <div id="2_23135" className="symbol-2_23135">
                <div id="2_23136" className="vector-2_23136"></div>
            </div>
        </div>
    );
};
export default Editorpencil;
