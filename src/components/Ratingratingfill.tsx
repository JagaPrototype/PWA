import "@/styles/Ratingratingfill.css";
interface ratingratingfillProps {
    id?: string;
    className?: string;
}
const Ratingratingfill = (props: ratingratingfillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24293 ${className}`} id={id}>
            <div id="2_24293" className="symbol-2_24293">
                <div id="2_24294" className="vector-2_24294"></div>
            </div>
        </div>
    );
};
export default Ratingratingfill;
