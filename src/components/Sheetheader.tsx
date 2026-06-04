import "@/styles/Sheetheader.css";
interface sheetheaderProps {
    id?: string;
    className?: string;
}
const Sheetheader = (props: sheetheaderProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_80564 ${className}`} id={id}>
            <div id="2_80564" className="symbol-2_80564">
                <div id="2_80565" className="rectangle-2_80565"></div>
            </div>
        </div>
    );
};
export default Sheetheader;
