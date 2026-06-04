import "@/styles/Illustrationgraphics.css";
interface illustrationgraphicsProps {
    id?: string;
    className?: string;
}
const Illustrationgraphics = (props: illustrationgraphicsProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-355_5750 ${className}`} id={id}>
            <div id="355_5750" className="symbol-355_5750">
                <div id="355_5751" className="vector-355_5751"></div>
            </div>
        </div>
    );
};
export default Illustrationgraphics;
