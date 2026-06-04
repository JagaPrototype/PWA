import "@/styles/Educationtag.css";
interface educationtagProps {
    id?: string;
    className?: string;
}
const Educationtag = (props: educationtagProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_56507 ${className}`} id={id}>
            <div id="2_56507" className="symbol-2_56507">
                <div id="2_56508" className="vector-2_56508"></div>
            </div>
        </div>
    );
};
export default Educationtag;
