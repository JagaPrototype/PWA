import "@/styles/Communicationcalldialogfill.css";
interface communicationcalldialogfillProps {
    id?: string;
    className?: string;
}
const Communicationcalldialogfill = (
    props: communicationcalldialogfillProps
) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-355_5747 ${className}`} id={id}>
            <div id="355_5747" className="symbol-355_5747">
                <div id="355_5748" className="vector-355_5748"></div>
            </div>
        </div>
    );
};
export default Communicationcalldialogfill;
