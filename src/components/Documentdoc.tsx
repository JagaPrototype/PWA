import "@/styles/Documentdoc.css";
interface documentdocProps {
    id?: string;
    className?: string;
    instance_1458_19256?: string;
}
const Documentdoc = (props: documentdocProps) => {
    const { id, className = "", instance_1458_19256 } = props;

    return (
        <div className={`component-1458_19256 ${className}`} id={id}>
            <div id="1458_19256" className="symbol-1458_19256">
                <div id="1458_19257" className="vector-1458_19257"></div>
            </div>
        </div>
    );
};
export default Documentdoc;
