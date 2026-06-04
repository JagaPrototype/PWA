import "@/styles/Communicationparentconnection.css";
interface communicationparentconnectionProps {
    id?: string;
    className?: string;
}
const Communicationparentconnection = (
    props: communicationparentconnectionProps
) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2284_56857 ${className}`} id={id}>
            <div id="2284_56857" className="symbol-2284_56857">
                <div id="2284_56858" className="vector-2284_56858"></div>
            </div>
        </div>
    );
};
export default Communicationparentconnection;
