import "@/styles/Actiontrash.css";
interface actiontrashProps {
    id?: string;
    className?: string;
}
const Actiontrash = (props: actiontrashProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-1458_19258 ${className}`} id={id}>
            <div id="1458_19258" className="symbol-1458_19258">
                <div id="1458_19259" className="vector-1458_19259"></div>
            </div>
        </div>
    );
};
export default Actiontrash;
