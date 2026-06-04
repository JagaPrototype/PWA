import "@/styles/Navigationcloselarge.css";
interface navigationcloselargeProps {
    id?: string;
    className?: string;
}
const Navigationcloselarge = (props: navigationcloselargeProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_18845 ${className}`} id={id}>
            <div id="2_18845" className="symbol-2_18845">
                <div id="2_18846" className="vector-2_18846"></div>
            </div>
        </div>
    );
};
export default Navigationcloselarge;
