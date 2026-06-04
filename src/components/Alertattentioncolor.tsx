import "@/styles/Alertattentioncolor.css";
interface alertattentioncolorProps {
    id?: string;
    className?: string;
}
const Alertattentioncolor = (props: alertattentioncolorProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_27362 ${className}`} id={id}>
            <div id="2_27362" className="symbol-2_27362">
                <div id="2_27363" className="vector-2_27363"></div>
            </div>
        </div>
    );
};
export default Alertattentioncolor;
