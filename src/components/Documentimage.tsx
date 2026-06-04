import "@/styles/Documentimage.css";
interface documentimageProps {
    id?: string;
    className?: string;
}
const Documentimage = (props: documentimageProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_56375 ${className}`} id={id}>
            <div id="2_56375" className="symbol-2_56375">
                <div id="2_56376" className="vector-2_56376"></div>
            </div>
        </div>
    );
};
export default Documentimage;
