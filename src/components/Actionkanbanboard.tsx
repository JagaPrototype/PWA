import "@/styles/Actionkanbanboard.css";
interface actionkanbanboardProps {
    id?: string;
    className?: string;
}
const Actionkanbanboard = (props: actionkanbanboardProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24279 ${className}`} id={id}>
            <div id="2_24279" className="symbol-2_24279">
                <div id="2_24280" className="vector-2_24280"></div>
            </div>
        </div>
    );
};
export default Actionkanbanboard;
