import "@/styles/Actioncatalogfill.css";
interface actioncatalogfillProps {
    id?: string;
    className?: string;
}
const Actioncatalogfill = (props: actioncatalogfillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20307 ${className}`} id={id}>
            <div id="2_20307" className="symbol-2_20307">
                <div id="2_20308" className="vector-2_20308"></div>
            </div>
        </div>
    );
};
export default Actioncatalogfill;
