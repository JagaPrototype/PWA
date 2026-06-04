import "@/styles/Paginationpin.css";
interface paginationpinProps {
    active?: string;
    more?: string;
    id?: string;
    className?: string;
}
const Paginationpin = (props: paginationpinProps) => {
    const { active, more, id, className = "" } = props;

    return (
        <div className={`component-2_24018 ${className}`} id={id}>
            <div id="2_24018" className="symbol-2_24018">
                {active === "true" && more === "false" && (
                    <div id="2_24019" className="symbol-2_24019">
                        <div
                            id="2_24020"
                            className="frame-2_24020 fill-lightfgdefault-2_22054"
                        ></div>
                    </div>
                )}
                {active === "false" && more === "false" && (
                    <div id="2_24021" className="symbol-2_24021">
                        <div
                            id="2_24022"
                            className="frame-2_24022 fill-lightbgsurface4-2_23165"
                        ></div>
                    </div>
                )}
                {active === "false" && more === "true" && (
                    <div id="2_24023" className="symbol-2_24023">
                        <div
                            id="2_24024"
                            className="frame-2_24024 fill-lightbgsurface4-2_23165"
                        ></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Paginationpin;
