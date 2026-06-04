import "@/styles/Usersuser.css";
interface usersuserProps {
    id?: string;
    className?: string;
}
const Usersuser = (props: usersuserProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_2239 ${className}`} id={id}>
            <div id="2_2239" className="symbol-2_2239">
                <div id="2_2240" className="vector-2_2240"></div>
            </div>
        </div>
    );
};
export default Usersuser;
