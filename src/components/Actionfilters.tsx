import "@/styles/Actionfilters.css";
interface actionfiltersProps {
    id?: string;
    className?: string;
}
const Actionfilters = (props: actionfiltersProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24281 ${className}`} id={id}>
            <div id="2_24281" className="symbol-2_24281">
                <div id="2_24282" className="vector-2_24282"></div>
            </div>
        </div>
    );
};
export default Actionfilters;
