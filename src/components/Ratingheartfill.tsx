import "@/styles/Ratingheartfill.css";
interface ratingheartfillProps {
    id?: string;
    className?: string;
}
const Ratingheartfill = (props: ratingheartfillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2281_52376 ${className}`} id={id}>
            <div id="2281_52376" className="symbol-2281_52376">
                <div id="2281_52377" className="vector-2281_52377"></div>
            </div>
        </div>
    );
};
export default Ratingheartfill;
