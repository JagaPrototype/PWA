import "@/styles/Mediamicrophone.css";
interface mediamicrophoneProps {
    id?: string;
    className?: string;
}
const Mediamicrophone = (props: mediamicrophoneProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_24283 ${className}`} id={id}>
            <div id="2_24283" className="symbol-2_24283">
                <div id="2_24284" className="vector-2_24284"></div>
            </div>
        </div>
    );
};
export default Mediamicrophone;
