import "@/styles/Actioncopy.css";
interface actioncopyProps {
    id?: string;
    className?: string;
}
const Actioncopy = (props: actioncopyProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_80579 ${className}`} id={id}>
            <div id="2_80579" className="symbol-2_80579">
                <div id="2_80580" className="vector-2_80580"></div>
            </div>
        </div>
    );
};
export default Actioncopy;
