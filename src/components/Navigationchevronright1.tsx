import "@/styles/Navigationchevronright1.css";
interface navigationchevronright1Props {
    id?: string;
    className?: string;
}
const Navigationchevronright1 = (props: navigationchevronright1Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24254 ${className}`} id={id}>
            <div id="2_24254" className="symbol-2_24254">
                <div id="2_24255" className="vector-2_24255"></div>
            </div>
        </div>
    );
};
export default Navigationchevronright1;
