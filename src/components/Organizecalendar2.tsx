import "@/styles/Organizecalendar2.css";
interface organizecalendar2Props {
    id?: string;
    className?: string;
}
const Organizecalendar2 = (props: organizecalendar2Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-539_59879 ${className}`} id={id}>
            <div id="539_59879" className="symbol-539_59879">
                <div id="539_59880" className="vector-539_59880"></div>
            </div>
        </div>
    );
};
export default Organizecalendar2;
