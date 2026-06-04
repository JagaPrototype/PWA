import "@/styles/Overlay.css";
interface overlayProps {
    id?: string;
    className?: string;
}
const Overlay = (props: overlayProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_79809 ${className}`} id={id}>
            <div
                id="2_79809"
                className="symbol-2_79809 fill-lightstaticblack-2_80765"
            ></div>
        </div>
    );
};
export default Overlay;
