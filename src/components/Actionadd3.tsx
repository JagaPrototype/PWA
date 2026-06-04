import "@/styles/Actionadd3.css";
interface actionadd3Props {
    id?: string;
    className?: string;
}
const Actionadd3 = (props: actionadd3Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_23133 ${className}`} id={id}>
            <div id="2_23133" className="symbol-2_23133">
                <div id="2_23134" className="vector-2_23134"></div>
            </div>
        </div>
    );
};
export default Actionadd3;
