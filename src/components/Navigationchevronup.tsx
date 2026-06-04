import "@/styles/Navigationchevronup.css";
interface navigationchevronupProps {
    id?: string;
    className?: string;
}
const Navigationchevronup = (props: navigationchevronupProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20280 ${className}`} id={id}>
            <div id="2_20280" className="symbol-2_20280">
                <div id="2_20281" className="vector-2_20281"></div>
            </div>
        </div>
    );
};
export default Navigationchevronup;
