import UsersUser from "@/components/usersuser";
import UsersUser0 from "@/components/usersuser0";
import "@/styles/Lefticon.css";
interface lefticonProps {
    iconvariant24?: string;
    iconvariant20?: string;
    size?: string;
    active?: string;
    id?: string;
    className?: string;
}
const Lefticon = (props: lefticonProps) => {
    const {
        iconvariant24 = "Component_3491_94699",
        iconvariant20 = "Component_3491_94694",
        size,
        active,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_23170 ${className}`} id={id}>
            <div id="2_23170" className="symbol-2_23170">
                {size === "l" && active === "false" && (
                    <div id="2_23171" className="symbol-2_23171">
                        <UsersUser
                            id="2_23172"
                            className="instance-2_23172"
                        ></UsersUser>
                    </div>
                )}
                {size === "m" && active === "false" && (
                    <div id="2_23173" className="symbol-2_23173">
                        <UsersUser0
                            id="2_23174"
                            className="instance-2_23174"
                        ></UsersUser0>
                    </div>
                )}
                {size === "l" && active === "true" && (
                    <div id="2_23175" className="symbol-2_23175">
                        <UsersUser
                            id="2_23176"
                            className="instance-2_23176"
                        ></UsersUser>
                    </div>
                )}
                {size === "m" && active === "true" && (
                    <div id="2_23177" className="symbol-2_23177">
                        <UsersUser0
                            id="2_23178"
                            className="instance-2_23178"
                        ></UsersUser0>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Lefticon;
