import "@/styles/Actionmore.css";
interface actionmoreProps {
    id?: string;
    className?: string;
}
const Actionmore = (props: actionmoreProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20305 ${className}`} id={id}>
            <div id="2_20305" className="symbol-2_20305">
                <div id="2_20306" className="vector-2_20306"></div>
            </div>
        </div>
    );
};
export default Actionmore;
