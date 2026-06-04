import "@/styles/Navigationchecklarge.css";
interface navigationchecklargeProps {
    id?: string;
    className?: string;
}
const Navigationchecklarge = (props: navigationchecklargeProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20278 ${className}`} id={id}>
            <div id="2_20278" className="symbol-2_20278">
                <div id="2_20279" className="vector-2_20279"></div>
            </div>
        </div>
    );
};
export default Navigationchecklarge;
