import "@/styles/Actionkanbanboardfill.css";
interface actionkanbanboardfillProps {
    id?: string;
    className?: string;
}
const Actionkanbanboardfill = (props: actionkanbanboardfillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20311 ${className}`} id={id}>
            <div id="2_20311" className="symbol-2_20311">
                <div id="2_20312" className="vector-2_20312"></div>
            </div>
        </div>
    );
};
export default Actionkanbanboardfill;
