import "@/styles/Actionequaliser.css";
interface actionequaliserProps {
    id?: string;
    className?: string;
}
const Actionequaliser = (props: actionequaliserProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24191 ${className}`} id={id}>
            <div id="2_24191" className="symbol-2_24191">
                <div id="2_24192" className="vector-2_24192"></div>
            </div>
        </div>
    );
};
export default Actionequaliser;
