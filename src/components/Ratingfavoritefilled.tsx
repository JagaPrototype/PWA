import "@/styles/Ratingfavoritefilled.css";
interface ratingfavoritefilledProps {
    id?: string;
    className?: string;
}
const Ratingfavoritefilled = (props: ratingfavoritefilledProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20313 ${className}`} id={id}>
            <div id="2_20313" className="symbol-2_20313">
                <div id="2_20314" className="vector-2_20314"></div>
            </div>
        </div>
    );
};
export default Ratingfavoritefilled;
