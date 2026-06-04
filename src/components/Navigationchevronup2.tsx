import "@/styles/Navigationchevronup2.css";
interface navigationchevronup2Props {
    id?: string;
    className?: string;
}
const Navigationchevronup2 = (props: navigationchevronup2Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-343_47874 ${className}`} id={id}>
            <div id="343_47874" className="symbol-343_47874">
                <div id="343_47875" className="vector-343_47875"></div>
            </div>
        </div>
    );
};
export default Navigationchevronup2;
