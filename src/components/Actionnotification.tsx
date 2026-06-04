import "@/styles/Actionnotification.css";
interface actionnotificationProps {
    id?: string;
    className?: string;
}
const Actionnotification = (props: actionnotificationProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20303 ${className}`} id={id}>
            <div id="2_20303" className="symbol-2_20303">
                <div id="2_20304" className="vector-2_20304"></div>
            </div>
        </div>
    );
};
export default Actionnotification;
