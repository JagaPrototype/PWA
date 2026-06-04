import "@/styles/Actionkebabmenu.css";
interface actionkebabmenuProps {
    id?: string;
    className?: string;
}
const Actionkebabmenu = (props: actionkebabmenuProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-355_5752 ${className}`} id={id}>
            <div id="355_5752" className="symbol-355_5752">
                <div id="355_5753" className="vector-355_5753"></div>
            </div>
        </div>
    );
};
export default Actionkebabmenu;
