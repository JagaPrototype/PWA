import "@/styles/Prioritynormal.css";
interface prioritynormalProps {
    id?: string;
    className?: string;
}
const Prioritynormal = (props: prioritynormalProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2281_53156 ${className}`} id={id}>
            <div id="2281_53156" className="symbol-2281_53156">
                <div id="2281_53157" className="vector-2281_53157"></div>
            </div>
        </div>
    );
};
export default Prioritynormal;
