import "@/styles/Documentdocument.css";
interface documentdocumentProps {
    id?: string;
    className?: string;
}
const Documentdocument = (props: documentdocumentProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2281_52395 ${className}`} id={id}>
            <div id="2281_52395" className="symbol-2281_52395">
                <div id="2281_52396" className="vector-2281_52396"></div>
            </div>
        </div>
    );
};
export default Documentdocument;
