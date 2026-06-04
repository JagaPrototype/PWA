import "@/styles/Navigationcloselarge1.css";
interface navigationcloselarge1Props {
    id?: string;
    className?: string;
}
const Navigationcloselarge1 = (props: navigationcloselarge1Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24252 ${className}`} id={id}>
            <div id="2_24252" className="symbol-2_24252">
                <div id="2_24253" className="vector-2_24253"></div>
            </div>
        </div>
    );
};
export default Navigationcloselarge1;
