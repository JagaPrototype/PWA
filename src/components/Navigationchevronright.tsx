import "@/styles/Navigationchevronright.css";
interface navigationchevronrightProps {
    id?: string;
    className?: string;
}
const Navigationchevronright = (props: navigationchevronrightProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_23123 ${className}`} id={id}>
            <div id="2_23123" className="symbol-2_23123">
                <div id="2_23124" className="vector-2_23124"></div>
            </div>
        </div>
    );
};
export default Navigationchevronright;
