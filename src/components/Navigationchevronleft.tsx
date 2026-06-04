import "@/styles/Navigationchevronleft.css";
interface navigationchevronleftProps {
    id?: string;
    className?: string;
}
const Navigationchevronleft = (props: navigationchevronleftProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_27180 ${className}`} id={id}>
            <div id="2_27180" className="symbol-2_27180">
                <div id="2_27181" className="vector-2_27181"></div>
                <div id="2_27182" className="vector-2_27182"></div>
            </div>
        </div>
    );
};
export default Navigationchevronleft;
