import "@/styles/Alertinformationcolor.css";
interface alertinformationcolorProps {
    id?: string;
    className?: string;
}
const Alertinformationcolor = (props: alertinformationcolorProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_27360 ${className}`} id={id}>
            <div id="2_27360" className="symbol-2_27360">
                <div id="2_27361" className="vector-2_27361"></div>
            </div>
        </div>
    );
};
export default Alertinformationcolor;
