import "@/styles/Navigationchevronright5.css";
interface navigationchevronright5Props {
    id?: string;
    className?: string;
}
const Navigationchevronright5 = (props: navigationchevronright5Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_23123 ${className}`} id={id}>
            <div id="2_23123" className="symbol-2_23123">
                <div id="2_23124" className="vector-2_23124"></div>
            </div>
        </div>
    );
};
export default Navigationchevronright5;
