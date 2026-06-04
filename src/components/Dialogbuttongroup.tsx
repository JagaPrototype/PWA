import Button from "@/components/button";
import "@/styles/Dialogbuttongroup.css";
interface dialogbuttongroupProps {
    variant?: string;
    id?: string;
    className?: string;
    text_355_7659_355_6970?: string;
    text_355_7658_355_7061?: string;
    text_355_7659_355_6972_319_2989?: string;
    text_355_7658_355_7063_319_2991?: string;
}
const Dialogbuttongroup = (props: dialogbuttongroupProps) => {
    const {
        variant,
        id,
        className = "",
        text_355_7659_355_6970,
        text_355_7658_355_7061,
        text_355_7659_355_6972_319_2989,
        text_355_7658_355_7063_319_2991
    } = props;

    return (
        <div className={`component-355_7656 ${className}`} id={id}>
            <div id="355_7656" className="symbol-355_7656">
                {variant === "horizontal" && (
                    <div
                        id="355_7657"
                        className="symbol-355_7657 fill-lightbgsurface1-355_5764"
                    >
                        <Button
                            id="355_7658"
                            className="instance-355_7658"
                            size={"m"}
                            variant={"secondary"}
                            state={"default"}
                            colorScheme={"neutral"}
                            leftIcon={false}
                            text_355_7658_355_7061={text_355_7658_355_7061}
                            text_355_7658_355_7063_319_2991={
                                text_355_7658_355_7063_319_2991
                            }
                        ></Button>
                        <Button
                            id="355_7659"
                            className="instance-355_7659"
                            size={"m"}
                            variant={"primary"}
                            state={"default"}
                            colorScheme={"accent"}
                            leftIcon={false}
                            text_355_7659_355_6970={text_355_7659_355_6970}
                            text_355_7659_355_6972_319_2989={
                                text_355_7659_355_6972_319_2989
                            }
                        ></Button>
                    </div>
                )}
                {variant === "vertical" && (
                    <div
                        id="355_7660"
                        className="symbol-355_7660 fill-lightbgsurface1-355_5764"
                    >
                        <Button
                            id="355_7661"
                            className="instance-355_7661"
                            size={"m"}
                            variant={"primary"}
                            state={"default"}
                            colorScheme={"accent"}
                            leftIcon={false}
                        ></Button>
                        <Button
                            id="355_7662"
                            className="instance-355_7662"
                            size={"m"}
                            variant={"secondary"}
                            state={"default"}
                            colorScheme={"neutral"}
                            leftIcon={false}
                        ></Button>
                    </div>
                )}
                {variant === "oneButton" && (
                    <div
                        id="355_7663"
                        className="symbol-355_7663 fill-lightbgsurface1-355_5764"
                    >
                        <Button
                            id="355_7664"
                            className="instance-355_7664"
                            size={"m"}
                            variant={"primary"}
                            state={"default"}
                            colorScheme={"accent"}
                            leftIcon={false}
                        ></Button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Dialogbuttongroup;
