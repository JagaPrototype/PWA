import "@/styles/Actionsharefill.css";
interface actionsharefillProps {
    id?: string;
    className?: string;
}
const Actionsharefill = (props: actionsharefillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_80583 ${className}`} id={id}>
            <div id="2_80583" className="symbol-2_80583">
                <div id="2_80584" className="vector-2_80584"></div>
            </div>
        </div>
    );
};
export default Actionsharefill;
