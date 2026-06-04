import "@/styles/Navigationcaretsort.css";
interface navigationcaretsortProps {
    id?: string;
    className?: string;
}
const Navigationcaretsort = (props: navigationcaretsortProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_18843 ${className}`} id={id}>
            <div id="2_18843" className="symbol-2_18843">
                <div id="2_18844" className="vector-2_18844"></div>
            </div>
        </div>
    );
};
export default Navigationcaretsort;
