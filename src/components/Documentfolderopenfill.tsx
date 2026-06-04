import "@/styles/Documentfolderopenfill.css";
interface documentfolderopenfillProps {
    id?: string;
    className?: string;
}
const Documentfolderopenfill = (props: documentfolderopenfillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20315 ${className}`} id={id}>
            <div id="2_20315" className="symbol-2_20315">
                <div id="2_20316" className="vector-2_20316"></div>
            </div>
        </div>
    );
};
export default Documentfolderopenfill;
