import "@/styles/Organizecalendar.css";
interface organizecalendarProps {
    id?: string;
    className?: string;
}
const Organizecalendar = (props: organizecalendarProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_25176 ${className}`} id={id}>
            <div id="2_25176" className="symbol-2_25176">
                <div id="2_25177" className="vector-2_25177"></div>
            </div>
        </div>
    );
};
export default Organizecalendar;
