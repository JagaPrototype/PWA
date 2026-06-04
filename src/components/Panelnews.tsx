import ButtonIcon from "@/components/buttonicon";
import "@/styles/Panelnews.css";
interface panelnewsProps {
    id?: string;
    className?: string;
}
const Panelnews = (props: panelnewsProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-2_18704 ${className}`} id={id}>
            <div id="2_18704" className="symbol-2_18704">
                <div id="2_18705" className="frame-2_18705">
                    <div className="frame-content-2_18705">
                        <div id="2_18706" className="frame-2_18706">
                            <div className="frame-content-2_18706">
                                <div id="2_18707" className="frame-2_18707">
                                    <div
                                        id="2_18708"
                                        className="rectangle-2_18708"
                                    ></div>
                                </div>
                                <div id="2_18709" className="frame-2_18709">
                                    <div className="frame-content-2_18709">
                                        <p
                                            id="2_18710"
                                            className="paragraph-2_18710 fill-lightfgdefault-2_18970-paragraph text-body-m-strong-2_24196"
                                        >
                                            {"Обновление главной"}
                                        </p>
                                        <div
                                            id="2_18711"
                                            className="text-2_18711 fill-lightfgmuted-2_18966-text text-description-m-2_20359"
                                        >
                                            <p
                                                id="2_18711_0"
                                                className="paragraph-2_18711_0"
                                            >
                                                <span
                                                    id="2_18711_0_1"
                                                    className="span-2_18711_0_1 text-description-m-2_20359"
                                                >
                                                    {
                                                        "Узнайте, что нового появилось"
                                                    }
                                                </span>
                                            </p>
                                            <p
                                                id="2_18711_1"
                                                className="paragraph-2_18711_1"
                                            >
                                                <span
                                                    id="2_18711_1_1"
                                                    className="span-2_18711_1_1 text-description-m-2_20359"
                                                >
                                                    {"в последнем релизе"}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="2_18712" className="frame-2_18712">
                    <div className="frame-content-2_18712">
                        <ButtonIcon
                            id="2_18713"
                            className="instance-2_18713"
                            size={"m"}
                            state={"default"}
                            variant={"secondary"}
                            _style={"round"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_2_20341"}
                        ></ButtonIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Panelnews;
