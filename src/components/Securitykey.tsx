import "@/styles/Securitykey.css";
interface securitykeyProps {
    id?: string;
    className?: string;
}
const Securitykey = (props: securitykeyProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_2235 ${className}`} id={id}>
            <div id="2_2235" className="symbol-2_2235">
                <div id="2_2236" className="vector-2_2236"></div>
            </div>
        </div>
    );
};
export default Securitykey;
