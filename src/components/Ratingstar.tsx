import "@/styles/Ratingstar.css";
interface ratingstarProps {
    id?: string;
    className?: string;
}
const Ratingstar = (props: ratingstarProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-355_5754 ${className}`} id={id}>
            <div id="355_5754" className="symbol-355_5754">
                <div id="355_5755" className="vector-355_5755"></div>
            </div>
        </div>
    );
};
export default Ratingstar;
