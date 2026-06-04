import "@/styles/Navigationcheck.css";
interface navigationcheckProps {
    id?: string;
    className?: string;
}
const Navigationcheck = (props: navigationcheckProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24178 ${className}`} id={id}>
            <div id="2_24178" className="symbol-2_24178">
                <div id="2_24179" className="vector-2_24179"></div>
            </div>
        </div>
    );
};
export default Navigationcheck;
