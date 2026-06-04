import "@/styles/Organizetimefill.css";
interface organizetimefillProps {
    id?: string;
    className?: string;
    instance_2_20335?: string;
}
const Organizetimefill = (props: organizetimefillProps) => {
    const { id, className = "", instance_2_20335 } = props;

    return (
        <div className={`component-2_20335 ${className}`} id={id}>
            <div id="2_20335" className="symbol-2_20335">
                <div id="2_20336" className="vector-2_20336"></div>
            </div>
        </div>
    );
};
export default Organizetimefill;
