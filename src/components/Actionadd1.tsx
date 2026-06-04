import "@/styles/Actionadd1.css";
interface actionadd1Props {
    id?: string;
    className?: string;
}
const Actionadd1 = (props: actionadd1Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_23127 ${className}`} id={id}>
            <div id="2_23127" className="symbol-2_23127">
                <div id="2_23128" className="vector-2_23128"></div>
            </div>
        </div>
    );
};
export default Actionadd1;
