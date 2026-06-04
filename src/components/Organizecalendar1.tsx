import "@/styles/Organizecalendar1.css";
interface organizecalendar1Props {
    id?: string;
    className?: string;
}
const Organizecalendar1 = (props: organizecalendar1Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_27339 ${className}`} id={id}>
            <div id="2_27339" className="symbol-2_27339">
                <div id="2_27340" className="vector-2_27340"></div>
            </div>
        </div>
    );
};
export default Organizecalendar1;
