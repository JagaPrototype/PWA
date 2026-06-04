import "@/styles/Communicationcomments.css";
interface communicationcommentsProps {
    id?: string;
    className?: string;
}
const Communicationcomments = (props: communicationcommentsProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-4_31835 ${className}`} id={id}>
            <div id="4_31835" className="symbol-4_31835">
                <div id="4_31836" className="vector-4_31836"></div>
            </div>
        </div>
    );
};
export default Communicationcomments;
