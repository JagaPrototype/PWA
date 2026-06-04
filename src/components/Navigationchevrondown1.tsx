import "@/styles/Navigationchevrondown1.css";
interface navigationchevrondown1Props {
    id?: string;
    className?: string;
}
const Navigationchevrondown1 = (props: navigationchevrondown1Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24185 ${className}`} id={id}>
            <div id="2_24185" className="symbol-2_24185">
                <div id="2_24186" className="vector-2_24186"></div>
            </div>
        </div>
    );
};
export default Navigationchevrondown1;
