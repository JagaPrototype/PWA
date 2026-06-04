import "@/styles/Organizehistory.css";
interface organizehistoryProps {
    id?: string;
    className?: string;
}
const Organizehistory = (props: organizehistoryProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-4_31837 ${className}`} id={id}>
            <div id="4_31837" className="symbol-4_31837">
                <div id="4_31838" className="vector-4_31838"></div>
            </div>
        </div>
    );
};
export default Organizehistory;
