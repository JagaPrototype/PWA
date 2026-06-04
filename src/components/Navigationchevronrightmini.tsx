import "@/styles/Navigationchevronrightmini.css";
interface navigationchevronrightminiProps {
    id?: string;
    className?: string;
}
const Navigationchevronrightmini = (props: navigationchevronrightminiProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-343_47876 ${className}`} id={id}>
            <div id="343_47876" className="symbol-343_47876">
                <div id="343_47877" className="vector-343_47877"></div>
            </div>
        </div>
    );
};
export default Navigationchevronrightmini;
