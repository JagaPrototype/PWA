import "@/styles/Ratingstarslash.css";
interface ratingstarslashProps {
    id?: string;
    className?: string;
}
const Ratingstarslash = (props: ratingstarslashProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-355_5756 ${className}`} id={id}>
            <div id="355_5756" className="symbol-355_5756">
                <div id="355_5757" className="vector-355_5757"></div>
            </div>
        </div>
    );
};
export default Ratingstarslash;
