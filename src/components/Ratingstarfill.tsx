import "@/styles/Ratingstarfill.css";
interface ratingstarfillProps {
    id?: string;
    className?: string;
}
const Ratingstarfill = (props: ratingstarfillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_23137 ${className}`} id={id}>
            <div id="2_23137" className="symbol-2_23137">
                <div id="2_23138" className="vector-2_23138"></div>
            </div>
        </div>
    );
};
export default Ratingstarfill;
