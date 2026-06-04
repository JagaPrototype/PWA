import "@/styles/Educationbook.css";
interface educationbookProps {
    id?: string;
    className?: string;
}
const Educationbook = (props: educationbookProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_56509 ${className}`} id={id}>
            <div id="2_56509" className="symbol-2_56509">
                <div id="2_56510" className="vector-2_56510"></div>
            </div>
        </div>
    );
};
export default Educationbook;
