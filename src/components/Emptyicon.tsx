import DocumentDocumentSearch from "@/components/documentdocumentsearch";
import "@/styles/Emptyicon.css";
interface emptyiconProps {
    id?: string;
    className?: string;
}
const Emptyicon = (props: emptyiconProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_27384 ${className}`} id={id}>
            <div
                id="2_27384"
                className="symbol-2_27384 fill-lightneutralcontainer-soft-2_24225"
            >
                <DocumentDocumentSearch
                    id="2_27385"
                    className="instance-2_27385"
                ></DocumentDocumentSearch>
            </div>
        </div>
    );
};
export default Emptyicon;
