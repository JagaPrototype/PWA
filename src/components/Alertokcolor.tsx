import "@/styles/Alertokcolor.css";
interface alertokcolorProps {
    id?: string;
    className?: string;
}
const Alertokcolor = (props: alertokcolorProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-1458_19252 ${className}`} id={id}>
            <div id="1458_19252" className="symbol-1458_19252">
                <div id="1458_19253" className="vector-1458_19253"></div>
            </div>
        </div>
    );
};
export default Alertokcolor;
