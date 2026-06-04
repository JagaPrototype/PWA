import "@/styles/Actionattachment.css";
interface actionattachmentProps {
    id?: string;
    className?: string;
}
const Actionattachment = (props: actionattachmentProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-4_31823 ${className}`} id={id}>
            <div id="4_31823" className="symbol-4_31823">
                <div id="4_31824" className="vector-4_31824"></div>
            </div>
        </div>
    );
};
export default Actionattachment;
