import "@/styles/Cursor.css";
interface cursorProps {
    id?: string;
    className?: string;
}
const Cursor = (props: cursorProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_2226 ${className}`} id={id}>
            <div id="2_2226" className="symbol-2_2226">
                <div
                    id="2_2227"
                    className="rectangle-2_2227 fill-lightinteractiveaccent-2_2293"
                ></div>
            </div>
        </div>
    );
};
export default Cursor;
