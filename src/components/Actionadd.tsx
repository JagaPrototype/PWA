import "@/styles/Actionadd.css";
interface actionaddProps {
    id?: string;
    className?: string;
}
const Actionadd = (props: actionaddProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_27187 ${className}`} id={id}>
            <div id="2_27187" className="symbol-2_27187">
                <div id="2_27188" className="vector-2_27188"></div>
            </div>
        </div>
    );
};
export default Actionadd;
