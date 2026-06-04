import "@/styles/Actionsearch.css";
interface actionsearchProps {
    id?: string;
    className?: string;
}
const Actionsearch = (props: actionsearchProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20301 ${className}`} id={id}>
            <div id="2_20301" className="symbol-2_20301">
                <div id="2_20302" className="vector-2_20302"></div>
            </div>
        </div>
    );
};
export default Actionsearch;
