import "@/styles/Usersusers.css";
interface usersusersProps {
    id?: string;
    className?: string;
}
const Usersusers = (props: usersusersProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-4_31839 ${className}`} id={id}>
            <div id="4_31839" className="symbol-4_31839">
                <div id="4_31840" className="vector-4_31840"></div>
            </div>
        </div>
    );
};
export default Usersusers;
