import "@/styles/Securitypasswordshow.css";
interface securitypasswordshowProps {
    id?: string;
    className?: string;
}
const Securitypasswordshow = (props: securitypasswordshowProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_2243 ${className}`} id={id}>
            <div id="2_2243" className="symbol-2_2243">
                <div id="2_2244" className="vector-2_2244"></div>
            </div>
        </div>
    );
};
export default Securitypasswordshow;
