import "@/styles/Entertainmentpalettefill.css";
interface entertainmentpalettefillProps {
    id?: string;
    className?: string;
}
const Entertainmentpalettefill = (props: entertainmentpalettefillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20337 ${className}`} id={id}>
            <div id="2_20337" className="symbol-2_20337">
                <div id="2_20338" className="vector-2_20338"></div>
            </div>
        </div>
    );
};
export default Entertainmentpalettefill;
