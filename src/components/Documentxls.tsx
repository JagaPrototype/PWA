import "@/styles/Documentxls.css";
interface documentxlsProps {
    id?: string;
    className?: string;
}
const Documentxls = (props: documentxlsProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-4_52246 ${className}`} id={id}>
            <div id="4_52246" className="symbol-4_52246">
                <div id="4_52247" className="vector-4_52247"></div>
            </div>
        </div>
    );
};
export default Documentxls;
