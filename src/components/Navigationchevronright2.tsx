import "@/styles/Navigationchevronright2.css";
interface navigationchevronright2Props {
    id?: string;
    className?: string;
}
const Navigationchevronright2 = (props: navigationchevronright2Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_23125 ${className}`} id={id}>
            <div id="2_23125" className="symbol-2_23125">
                <div id="2_23126" className="vector-2_23126"></div>
            </div>
        </div>
    );
};
export default Navigationchevronright2;
