import "@/styles/Actionhomefill.css";
interface actionhomefillProps {
    id?: string;
    className?: string;
}
const Actionhomefill = (props: actionhomefillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20309 ${className}`} id={id}>
            <div id="2_20309" className="symbol-2_20309">
                <div id="2_20310" className="vector-2_20310"></div>
            </div>
        </div>
    );
};
export default Actionhomefill;
