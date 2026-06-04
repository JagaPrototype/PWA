import "@/styles/Navigationchevronup1.css";
interface navigationchevronup1Props {
    id?: string;
    className?: string;
}
const Navigationchevronup1 = (props: navigationchevronup1Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24183 ${className}`} id={id}>
            <div id="2_24183" className="symbol-2_24183">
                <div id="2_24184" className="vector-2_24184"></div>
            </div>
        </div>
    );
};
export default Navigationchevronup1;
