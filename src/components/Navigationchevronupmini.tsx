import "@/styles/Navigationchevronupmini.css";
interface navigationchevronupminiProps {
    id?: string;
    className?: string;
}
const Navigationchevronupmini = (props: navigationchevronupminiProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-4_31727 ${className}`} id={id}>
            <div id="4_31727" className="symbol-4_31727">
                <div id="4_31728" className="vector-4_31728"></div>
            </div>
        </div>
    );
};
export default Navigationchevronupmini;
