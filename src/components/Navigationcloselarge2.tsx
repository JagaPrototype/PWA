import "@/styles/Navigationcloselarge2.css";
interface navigationcloselarge2Props {
    id?: string;
    className?: string;
}
const Navigationcloselarge2 = (props: navigationcloselarge2Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-256_20607 ${className}`} id={id}>
            <div id="256_20607" className="symbol-256_20607">
                <div id="256_20608" className="vector-256_20608"></div>
            </div>
        </div>
    );
};
export default Navigationcloselarge2;
