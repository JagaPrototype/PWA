import "@/styles/Securityprivate1.css";
interface securityprivate1Props {
    id?: string;
    className?: string;
}
const Securityprivate1 = (props: securityprivate1Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_2233 ${className}`} id={id}>
            <div id="2_2233" className="symbol-2_2233">
                <div id="2_2234" className="vector-2_2234"></div>
            </div>
        </div>
    );
};
export default Securityprivate1;
