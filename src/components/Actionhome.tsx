import "@/styles/Actionhome.css";
interface actionhomeProps {
    id?: string;
    className?: string;
    instance_2_18964?: string;
}
const Actionhome = (props: actionhomeProps) => {
    const { id, className = "", instance_2_18964 } = props;

    return (
        <div className={`component-2_18964 ${className}`} id={id}>
            <div id="2_18964" className="symbol-2_18964">
                <div id="2_18965" className="vector-2_18965"></div>
            </div>
        </div>
    );
};
export default Actionhome;
