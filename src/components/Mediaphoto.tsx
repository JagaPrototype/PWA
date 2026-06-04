import "@/styles/Mediaphoto.css";
interface mediaphotoProps {
    id?: string;
    className?: string;
}
const Mediaphoto = (props: mediaphotoProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_28827 ${className}`} id={id}>
            <div id="2_28827" className="symbol-2_28827">
                <div id="2_28828" className="vector-2_28828"></div>
            </div>
        </div>
    );
};
export default Mediaphoto;
