import "@/styles/Navigationclose.css";
interface navigationcloseProps {
    id?: string;
    className?: string;
}
const Navigationclose = (props: navigationcloseProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_1837 ${className}`} id={id}>
            <div id="2_1837" className="symbol-2_1837">
                <div id="2_1838" className="vector-2_1838"></div>
            </div>
        </div>
    );
};
export default Navigationclose;
