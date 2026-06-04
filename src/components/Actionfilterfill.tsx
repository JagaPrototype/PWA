import "@/styles/Actionfilterfill.css";
interface actionfilterfillProps {
    id?: string;
    className?: string;
}
const Actionfilterfill = (props: actionfilterfillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24287 ${className}`} id={id}>
            <div id="2_24287" className="symbol-2_24287">
                <div id="2_24288" className="vector-2_24288"></div>
            </div>
        </div>
    );
};
export default Actionfilterfill;
