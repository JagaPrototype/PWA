import "@/styles/Alerterrorcolor.css";
interface alerterrorcolorProps {
    id?: string;
    className?: string;
}
const Alerterrorcolor = (props: alerterrorcolorProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-1458_19250 ${className}`} id={id}>
            <div id="1458_19250" className="symbol-1458_19250">
                <div id="1458_19251" className="vector-1458_19251"></div>
            </div>
        </div>
    );
};
export default Alerterrorcolor;
