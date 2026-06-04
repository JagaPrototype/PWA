import "@/styles/Actionsettingsadjust.css";
interface actionsettingsadjustProps {
    id?: string;
    className?: string;
}
const Actionsettingsadjust = (props: actionsettingsadjustProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_80585 ${className}`} id={id}>
            <div id="2_80585" className="symbol-2_80585">
                <div id="2_80586" className="vector-2_80586"></div>
            </div>
        </div>
    );
};
export default Actionsettingsadjust;
