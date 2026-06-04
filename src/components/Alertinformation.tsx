import "@/styles/Alertinformation.css";
interface alertinformationProps {
    id?: string;
    className?: string;
}
const Alertinformation = (props: alertinformationProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2281_51970 ${className}`} id={id}>
            <div id="2281_51970" className="symbol-2281_51970">
                <div id="2281_51971" className="vector-2281_51971"></div>
            </div>
        </div>
    );
};
export default Alertinformation;
