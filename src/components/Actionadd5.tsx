import "@/styles/Actionadd5.css";
interface actionadd5Props {
    id?: string;
    className?: string;
}
const Actionadd5 = (props: actionadd5Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_21110 ${className}`} id={id}>
            <div id="2_21110" className="symbol-2_21110">
                <div id="2_21111" className="vector-2_21111"></div>
            </div>
        </div>
    );
};
export default Actionadd5;
