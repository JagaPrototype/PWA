import "@/styles/Alertinformationstroke.css";
interface alertinformationstrokeProps {
    id?: string;
    className?: string;
}
const Alertinformationstroke = (props: alertinformationstrokeProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-4_31730 ${className}`} id={id}>
            <div id="4_31730" className="symbol-4_31730">
                <div id="4_31731" className="vector-4_31731"></div>
            </div>
        </div>
    );
};
export default Alertinformationstroke;
