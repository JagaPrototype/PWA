import "@/styles/Lukitduck.css";
interface lukitduckProps {
    id?: string;
    className?: string;
}
const Lukitduck = (props: lukitduckProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20317 ${className}`} id={id}>
            <div id="2_20317" className="symbol-2_20317">
                <div id="2_20318" className="vector-2_20318"></div>
            </div>
        </div>
    );
};
export default Lukitduck;
