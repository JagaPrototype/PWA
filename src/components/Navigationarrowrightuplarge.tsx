import "@/styles/Navigationarrowrightuplarge.css";
interface navigationarrowrightuplargeProps {
    id?: string;
    className?: string;
}
const Navigationarrowrightuplarge = (
    props: navigationarrowrightuplargeProps
) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_20341 ${className}`} id={id}>
            <div id="2_20341" className="symbol-2_20341">
                <div id="2_20342" className="vector-2_20342"></div>
            </div>
        </div>
    );
};
export default Navigationarrowrightuplarge;
