import "@/styles/Usersprofileinformation.css";
interface usersprofileinformationProps {
    id?: string;
    className?: string;
}
const Usersprofileinformation = (props: usersprofileinformationProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-4_33582 ${className}`} id={id}>
            <div id="4_33582" className="symbol-4_33582">
                <div id="4_33583" className="vector-4_33583"></div>
            </div>
        </div>
    );
};
export default Usersprofileinformation;
