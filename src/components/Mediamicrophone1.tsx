import "@/styles/Mediamicrophone1.css";
interface mediamicrophone1Props {
    id?: string;
    className?: string;
}
const Mediamicrophone1 = (props: mediamicrophone1Props) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_27185 ${className}`} id={id}>
            <div id="2_27185" className="symbol-2_27185">
                <div id="2_27186" className="vector-2_27186"></div>
            </div>
        </div>
    );
};
export default Mediamicrophone1;
