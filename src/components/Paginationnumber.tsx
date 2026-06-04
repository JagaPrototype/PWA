import ButtonIcon0 from "@/components/buttonicon0";
import "@/styles/Paginationnumber.css";
interface paginationnumberProps {
    number?: string;
    state?: string;
    selected?: string;
    more?: string;
    id?: string;
    className?: string;
    text_2_19191?: string;
    text_2_19197?: string;
}
const Paginationnumber = (props: paginationnumberProps) => {
    const {
        number = "1",
        state,
        selected,
        more,
        id,
        className = "",
        text_2_19191,
        text_2_19197
    } = props;

    return (
        <div className={`component-2_19187 ${className}`} id={id}>
            <div id="2_19187" className="symbol-2_19187">
                {state === "default" &&
                    selected === "false" &&
                    more === "true" && (
                        <div id="2_19188" className="symbol-2_19188">
                            <ButtonIcon0
                                id="2_19189"
                                className="instance-2_19189"
                                size={"s"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"neutral"}
                                iconvariant20={"Component_2_20305"}
                            ></ButtonIcon0>
                        </div>
                    )}
                {state === "default" &&
                    selected === "false" &&
                    more === "false" && (
                        <div id="2_19190" className="symbol-2_19190">
                            <p
                                id="2_19191"
                                className="paragraph-2_19191 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-2_2288"
                            >
                                {number ?? text_2_19191 ?? "1"}
                            </p>
                        </div>
                    )}
                {state === "pressed" &&
                    selected === "false" &&
                    more === "false" && (
                        <div
                            id="2_19192"
                            className="symbol-2_19192 fill-lightneutralcontainer-default-2_2292"
                        >
                            <p
                                id="2_19193"
                                className="paragraph-2_19193 fill-lightfgsoft-2_22056-paragraph text-mobiledescription-l-2_2288"
                            >
                                {number ?? "1"}
                            </p>
                        </div>
                    )}
                {state === "disabled" &&
                    selected === "false" &&
                    more === "false" && (
                        <div id="2_19194" className="symbol-2_19194">
                            <p
                                id="2_19195"
                                className="paragraph-2_19195 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                            >
                                {number ?? "1"}
                            </p>
                        </div>
                    )}
                {state === "default" &&
                    selected === "true" &&
                    more === "false" && (
                        <div
                            id="2_19196"
                            className="symbol-2_19196 fill-lightfgdefault-2_2273"
                        >
                            <p
                                id="2_19197"
                                className="paragraph-2_19197 fill-lightbgsurface1-2_2272-paragraph text-mobiledescription-l-2_2288"
                            >
                                {number ?? text_2_19197 ?? "1"}
                            </p>
                        </div>
                    )}
                {state === "disabled" &&
                    selected === "true" &&
                    more === "false" && (
                        <div
                            id="2_19198"
                            className="symbol-2_19198 fill-lightbgdisabled-2_22065"
                        >
                            <p
                                id="2_19199"
                                className="paragraph-2_19199 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                            >
                                {number ?? "1"}
                            </p>
                        </div>
                    )}
                {state === "pressed" &&
                    selected === "true" &&
                    more === "false" && (
                        <div
                            id="2_19200"
                            className="symbol-2_19200 fill-lightfgdefault-2_2273"
                        >
                            <p
                                id="2_19201"
                                className="paragraph-2_19201 fill-lightbgsurface1-2_2272-paragraph text-mobiledescription-l-2_2288"
                            >
                                {number ?? "1"}
                            </p>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Paginationnumber;
