import "@/styles/Navigationchevrondown.css";
interface navigationchevrondownProps {
    id?: string;
    className?: string;
}
const Navigationchevrondown = (props: navigationchevrondownProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_27402 ${className}`} id={id}>
            <div id="2_27402" className="symbol-2_27402">
                <div id="2_27403" className="vector-2_27403"></div>
            </div>
        </div>
    );
};
export default Navigationchevrondown;
