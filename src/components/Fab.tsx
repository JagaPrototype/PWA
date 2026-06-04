import ButtonIcon from "@/components/buttonicon";
import "@/styles/Fab.css";
interface fabProps {
    size?: string;
    state?: string;
    colorScheme?: string;
    id?: string;
    className?: string;
}
const Fab = (props: fabProps) => {
    const { size, state, colorScheme, id, className = "" } = props;

    return (
        <div className={`component-1496_745 ${className}`} id={id}>
            <div id="1496_745" className="symbol-1496_745">
                {size === "m" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="1496_746" className="symbol-1496_746">
                            <ButtonIcon
                                id="1496_747"
                                className="instance-1496_747"
                                size={"xl"}
                                state={"default"}
                                variant={"primary"}
                                _style={"round"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="1496_748" className="symbol-1496_748">
                            <ButtonIcon
                                id="1496_749"
                                className="instance-1496_749"
                                size={"xl"}
                                state={"pressed"}
                                variant={"primary"}
                                _style={"round"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_1496_762"}
                            ></ButtonIcon>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    colorScheme === "accent" && (
                        <div id="1496_750" className="symbol-1496_750">
                            <ButtonIcon
                                id="1496_751"
                                className="instance-1496_751"
                                size={"l"}
                                state={"default"}
                                variant={"primary"}
                                _style={"round"}
                                colorScheme={"accent"}
                            ></ButtonIcon>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    colorScheme === "accent" && (
                        <div id="1496_752" className="symbol-1496_752">
                            <ButtonIcon
                                id="1496_753"
                                className="instance-1496_753"
                                size={"l"}
                                state={"pressed"}
                                variant={"primary"}
                                _style={"round"}
                                colorScheme={"accent"}
                                iconvariant24={"Component_1496_762"}
                            ></ButtonIcon>
                        </div>
                    )}
                {size === "s" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="1496_754" className="symbol-1496_754">
                            <ButtonIcon
                                id="1496_755"
                                className="instance-1496_755"
                                size={"l"}
                                state={"default"}
                                variant={"primary"}
                                _style={"round"}
                                colorScheme={"neutral"}
                            ></ButtonIcon>
                        </div>
                    )}
                {size === "s" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="1496_756" className="symbol-1496_756">
                            <ButtonIcon
                                id="1496_757"
                                className="instance-1496_757"
                                size={"l"}
                                state={"pressed"}
                                variant={"primary"}
                                _style={"round"}
                                colorScheme={"neutral"}
                                iconvariant24={"Component_1496_762"}
                            ></ButtonIcon>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    colorScheme === "neutral" && (
                        <div id="1496_758" className="symbol-1496_758">
                            <ButtonIcon
                                id="1496_759"
                                className="instance-1496_759"
                                size={"xl"}
                                state={"default"}
                                variant={"primary"}
                                _style={"round"}
                                colorScheme={"neutral"}
                            ></ButtonIcon>
                        </div>
                    )}
                {size === "m" &&
                    state === "pressed" &&
                    colorScheme === "neutral" && (
                        <div id="1496_760" className="symbol-1496_760">
                            <ButtonIcon
                                id="1496_761"
                                className="instance-1496_761"
                                size={"xl"}
                                state={"pressed"}
                                variant={"primary"}
                                _style={"round"}
                                colorScheme={"neutral"}
                                iconvariant24={"Component_1496_762"}
                            ></ButtonIcon>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Fab;
