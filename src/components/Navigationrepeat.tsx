import "@/styles/Navigationrepeat.css";
interface navigationrepeatProps {
    id?: string;
    className?: string;
}
const Navigationrepeat = (props: navigationrepeatProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2281_52890 ${className}`} id={id}>
            <div id="2281_52890" className="symbol-2281_52890">
                <div id="2281_52891" className="vector-2281_52891"></div>
            </div>
        </div>
    );
};
export default Navigationrepeat;
