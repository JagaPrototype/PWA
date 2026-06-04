import "@/styles/Securitypasswordhide.css";
interface securitypasswordhideProps {
    id?: string;
    className?: string;
}
const Securitypasswordhide = (props: securitypasswordhideProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-270_39968 ${className}`} id={id}>
            <div id="270_39968" className="symbol-270_39968">
                <div id="270_39969" className="vector-270_39969"></div>
            </div>
        </div>
    );
};
export default Securitypasswordhide;
