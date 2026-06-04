import "@/styles/Usersuserfill.css";
interface usersuserfillProps {
    id?: string;
    className?: string;
}
const Usersuserfill = (props: usersuserfillProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_23143 ${className}`} id={id}>
            <div id="2_23143" className="symbol-2_23143">
                <div id="2_23144" className="vector-2_23144"></div>
            </div>
        </div>
    );
};
export default Usersuserfill;
