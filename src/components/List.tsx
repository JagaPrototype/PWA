import Listitems from "@/components/listitems";
import "@/styles/List.css";
interface listProps {
    id?: string;
    className?: string;
}
const List = (props: listProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_79792 ${className}`} id={id}>
            <div id="2_79792" className="symbol-2_79792">
                <Listitems
                    id="2_79793"
                    className="instance-2_79793"
                    subtitleLines={"1 line"}
                    left={"icon"}
                    right={"switch"}
                    checked={"false"}
                    disabled={"false"}
                ></Listitems>
                <Listitems
                    id="2_79794"
                    className="instance-2_79794"
                    subtitleLines={"1 line"}
                    left={"icon"}
                    right={"switch"}
                    checked={"false"}
                    disabled={"false"}
                ></Listitems>
                <Listitems
                    id="2_79795"
                    className="instance-2_79795"
                    subtitleLines={"1 line"}
                    left={"icon"}
                    right={"none"}
                    checked={"false"}
                    disabled={"false"}
                ></Listitems>
            </div>
        </div>
    );
};
export default List;
