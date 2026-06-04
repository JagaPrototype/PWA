import PanelHeader from "@/components/panelheader";
import PriorityPriorityNormal from "@/components/priorityprioritynormal";
import Projecticon from "@/components/projecticon";
import Tag from "@/components/tag";
import Button from "@/components/button";
import Empty from "@/components/empty";
import "@/styles/Recents.css";
interface recentsProps {
    id?: string;
    className?: string;
    Counter?: boolean;
    instance_2_24200_2_24213_343_47807_2_18699?: string;
    text_2_24200_2_24213_343_47807_2_18701?: string;
    label?: string;
    iconvariant20?: string;
    instance_2_24200_2_24213_343_47807_2_18703_2_22652?: string;
    text_2_24200_2_24213_343_47807_2_18702_2_23071?: string;
    text_2_24200_2_24213_343_47810?: string;
    text_2_24200_2_24213_343_47811?: string;
    text_2_24200_2_24213_343_47813?: string;
    instance_2_24200_2_24213_343_47818_2_24307?: string;
    text_2_24200_2_24213_343_47819?: string;
    instance_2_24200_2_24213_343_47820_2_27254?: string;
    instance_2_24200_2_24213_343_47820_2_27258?: string;
    text_2_24200_2_24213_343_47820_2_27257?: string;
    text_2_24200_2_24213_343_47822?: string;
    instance_2_24200_2_24213_343_47827_2_24307?: string;
    text_2_24200_2_24213_343_47828?: string;
    instance_2_24200_2_24213_343_47829_2_27254?: string;
    instance_2_24200_2_24213_343_47829_2_27258?: string;
    text_2_24200_2_24213_343_47829_2_27257?: string;
    text_2_24200_2_24213_343_47831?: string;
    instance_2_24200_2_24213_343_47836_2_24307?: string;
    text_2_24200_2_24213_343_47837?: string;
    instance_2_24200_2_24213_343_47838_2_27254?: string;
    instance_2_24200_2_24213_343_47838_2_27258?: string;
    text_2_24200_2_24213_343_47838_2_27257?: string;
    text_2_24200_2_24213_343_47840?: string;
    text_2_24200_2_24213_343_47841?: string;
    text_2_24200_2_24213_343_47843?: string;
    instance_2_24200_2_24213_343_47848_2_24307?: string;
    text_2_24200_2_24213_343_47849?: string;
    instance_2_24200_2_24213_343_47850_2_27254?: string;
    instance_2_24200_2_24213_343_47850_2_27258?: string;
    text_2_24200_2_24213_343_47850_2_27257?: string;
    text_2_24200_2_24213_343_47852?: string;
    instance_2_24200_2_24213_343_47857_2_24307?: string;
    text_2_24200_2_24213_343_47858?: string;
    instance_2_24200_2_24213_343_47859_2_27254?: string;
    instance_2_24200_2_24213_343_47859_2_27258?: string;
    text_2_24200_2_24213_343_47859_2_27257?: string;
    text_2_24200_2_24213_343_47861?: string;
    instance_2_24200_2_24213_343_47866_2_24307?: string;
    text_2_24200_2_24213_343_47867?: string;
    instance_2_24200_2_24213_343_47868_2_27254?: string;
    instance_2_24200_2_24213_343_47868_2_27258?: string;
    text_2_24200_2_24213_343_47868_2_27257?: string;
    instance_2_24200_2_24213_343_47870_2_21161?: string;
    text_2_24200_2_24213_343_47870_2_21162?: string;
    instance_2_24200_2_24213_343_47870_2_21164?: string;
    text_2_24200_2_24213_343_47870_2_21163_2_22031?: string;
    text_2_24200_2_24213_343_47871_2_27370?: string;
    text_2_24200_2_24213_343_47871_2_27371?: string;
    instance_2_24200_2_24213_343_47871_2_27374_2_27801?: string;
    text_2_24200_2_24213_343_47871_2_27374_2_27803?: string;
    instance_2_24200_2_24213_343_47871_2_27374_2_27804?: string;
    instance_2_24200_2_24213_343_47871_2_27373_2_27831?: string;
    text_2_24200_2_24213_343_47871_2_27373_2_27833?: string;
    instance_2_24200_2_24213_343_47871_2_27373_2_27834?: string;
    instance_2_24200_2_24213_343_47873_2_21766?: string;
    text_2_24200_2_24213_343_47873_2_21767?: string;
    instance_2_24200_2_24213_343_47873_2_21769?: string;
    text_2_24200_2_24213_343_47873_2_21768_2_22021?: string;
}
const Recents = (props: recentsProps) => {
    const {
        id,
        className = "",
        Counter,
        instance_2_24200_2_24213_343_47807_2_18699,
        text_2_24200_2_24213_343_47807_2_18701,
        label,
        iconvariant20,
        instance_2_24200_2_24213_343_47807_2_18703_2_22652,
        text_2_24200_2_24213_343_47807_2_18702_2_23071,
        text_2_24200_2_24213_343_47810,
        text_2_24200_2_24213_343_47811,
        text_2_24200_2_24213_343_47813,
        instance_2_24200_2_24213_343_47818_2_24307,
        text_2_24200_2_24213_343_47819,
        instance_2_24200_2_24213_343_47820_2_27254,
        instance_2_24200_2_24213_343_47820_2_27258,
        text_2_24200_2_24213_343_47820_2_27257,
        text_2_24200_2_24213_343_47822,
        instance_2_24200_2_24213_343_47827_2_24307,
        text_2_24200_2_24213_343_47828,
        instance_2_24200_2_24213_343_47829_2_27254,
        instance_2_24200_2_24213_343_47829_2_27258,
        text_2_24200_2_24213_343_47829_2_27257,
        text_2_24200_2_24213_343_47831,
        instance_2_24200_2_24213_343_47836_2_24307,
        text_2_24200_2_24213_343_47837,
        instance_2_24200_2_24213_343_47838_2_27254,
        instance_2_24200_2_24213_343_47838_2_27258,
        text_2_24200_2_24213_343_47838_2_27257,
        text_2_24200_2_24213_343_47840,
        text_2_24200_2_24213_343_47841,
        text_2_24200_2_24213_343_47843,
        instance_2_24200_2_24213_343_47848_2_24307,
        text_2_24200_2_24213_343_47849,
        instance_2_24200_2_24213_343_47850_2_27254,
        instance_2_24200_2_24213_343_47850_2_27258,
        text_2_24200_2_24213_343_47850_2_27257,
        text_2_24200_2_24213_343_47852,
        instance_2_24200_2_24213_343_47857_2_24307,
        text_2_24200_2_24213_343_47858,
        instance_2_24200_2_24213_343_47859_2_27254,
        instance_2_24200_2_24213_343_47859_2_27258,
        text_2_24200_2_24213_343_47859_2_27257,
        text_2_24200_2_24213_343_47861,
        instance_2_24200_2_24213_343_47866_2_24307,
        text_2_24200_2_24213_343_47867,
        instance_2_24200_2_24213_343_47868_2_27254,
        instance_2_24200_2_24213_343_47868_2_27258,
        text_2_24200_2_24213_343_47868_2_27257,
        instance_2_24200_2_24213_343_47870_2_21161,
        text_2_24200_2_24213_343_47870_2_21162,
        instance_2_24200_2_24213_343_47870_2_21164,
        text_2_24200_2_24213_343_47870_2_21163_2_22031,
        text_2_24200_2_24213_343_47871_2_27370,
        text_2_24200_2_24213_343_47871_2_27371,
        instance_2_24200_2_24213_343_47871_2_27374_2_27801,
        text_2_24200_2_24213_343_47871_2_27374_2_27803,
        instance_2_24200_2_24213_343_47871_2_27374_2_27804,
        instance_2_24200_2_24213_343_47871_2_27373_2_27831,
        text_2_24200_2_24213_343_47871_2_27373_2_27833,
        instance_2_24200_2_24213_343_47871_2_27373_2_27834,
        instance_2_24200_2_24213_343_47873_2_21766,
        text_2_24200_2_24213_343_47873_2_21767,
        instance_2_24200_2_24213_343_47873_2_21769,
        text_2_24200_2_24213_343_47873_2_21768_2_22021
    } = props;

    return (
        <div className={`component-343_47806 ${className}`} id={id}>
            <div id="343_47806" className="symbol-343_47806">
                <PanelHeader
                    id="343_47807"
                    className="instance-343_47807"
                    Counter={Counter}
                    instance_2_24200_2_24213_343_47807_2_18699={
                        instance_2_24200_2_24213_343_47807_2_18699
                    }
                    text_2_24200_2_24213_343_47807_2_18701={
                        text_2_24200_2_24213_343_47807_2_18701
                    }
                    label={label}
                    iconvariant20={iconvariant20}
                    instance_2_24200_2_24213_343_47807_2_18703_2_22652={
                        instance_2_24200_2_24213_343_47807_2_18703_2_22652
                    }
                    text_2_24200_2_24213_343_47807_2_18702_2_23071={
                        text_2_24200_2_24213_343_47807_2_18702_2_23071
                    }
                ></PanelHeader>
                <div id="343_47808" className="frame-343_47808">
                    <div
                        id="343_47809"
                        className="frame-343_47809 fill-lightbgsurface1-2_2272"
                    >
                        <div className="frame-content-343_47809">
                            <p
                                id="343_47810"
                                className="paragraph-343_47810 fill-lightaccentdefault-2_18976-paragraph text-fontbodym-strong-2_20328"
                            >
                                {text_2_24200_2_24213_343_47810 ?? "Все"}
                            </p>
                            <p
                                id="343_47811"
                                className="paragraph-343_47811 text-body-m-strong-2_24196"
                            >
                                {text_2_24200_2_24213_343_47811 ?? "Сегодня"}
                            </p>
                        </div>
                    </div>
                    <div id="343_47812" className="stroke-wrapper-343_47812">
                        <div className="frame-343_47812 fill-lightbgsurface1-2_2272">
                            <div className="frame-content-343_47812">
                                <p
                                    id="343_47813"
                                    className="paragraph-343_47813 fill-lightfgdefault-2_2273-paragraph text-body-l-2_2284"
                                >
                                    {text_2_24200_2_24213_343_47813 ??
                                        "Стратегия мультитенантности"}
                                </p>
                                <div id="343_47814" className="frame-343_47814">
                                    <div className="frame-content-343_47814">
                                        <div
                                            id="343_47815"
                                            className="frame-343_47815"
                                        >
                                            <div className="frame-content-343_47815">
                                                <div
                                                    id="343_47816"
                                                    className="frame-343_47816"
                                                >
                                                    <PriorityPriorityNormal
                                                        id="343_47817"
                                                        className="instance-343_47817"
                                                    ></PriorityPriorityNormal>
                                                    <Projecticon
                                                        id="343_47818"
                                                        className="instance-343_47818"
                                                        instance_2_24307={
                                                            "IconFontAwesomeFreeSolidFfeatheralt"
                                                        }
                                                        Size={"16"}
                                                        form={"Icon"}
                                                        State={"Default"}
                                                        Color={"Violet"}
                                                        Favorites={"OFF"}
                                                        instance_2_24200_2_24213_343_47818_2_24307={
                                                            instance_2_24200_2_24213_343_47818_2_24307
                                                        }
                                                    ></Projecticon>
                                                    <p
                                                        id="343_47819"
                                                        className="paragraph-343_47819 fill-lightfgmuted-2_2271-paragraph text-description-m-2_20359"
                                                    >
                                                        {text_2_24200_2_24213_343_47819 ??
                                                            "ARCH-1051"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Tag
                                            id="343_47820"
                                            className="instance-343_47820"
                                            size={"xs"}
                                            state={"default"}
                                            selected={"false"}
                                            iconRight={false}
                                            iconLeft={false}
                                            text={`Беклог`}
                                            instance_2_24200_2_24213_343_47820_2_27254={
                                                instance_2_24200_2_24213_343_47820_2_27254
                                            }
                                            instance_2_24200_2_24213_343_47820_2_27258={
                                                instance_2_24200_2_24213_343_47820_2_27258
                                            }
                                            text_2_24200_2_24213_343_47820_2_27257={
                                                text_2_24200_2_24213_343_47820_2_27257
                                            }
                                        ></Tag>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stroke-343_47812"></div>
                    </div>
                    <div id="343_47821" className="stroke-wrapper-343_47821">
                        <div className="frame-343_47821 fill-lightbgsurface1-2_2272">
                            <div className="frame-content-343_47821">
                                <p
                                    id="343_47822"
                                    className="paragraph-343_47822 fill-lightfgdefault-2_2273-paragraph text-body-l-2_2284"
                                >
                                    {text_2_24200_2_24213_343_47822 ??
                                        "Анализ и проектирование гибридной схемы хранения данных (Hot/Warm/Cold) для оптимизации затрат и производительности логов аудита"}
                                </p>
                                <div id="343_47823" className="frame-343_47823">
                                    <div className="frame-content-343_47823">
                                        <div
                                            id="343_47824"
                                            className="frame-343_47824"
                                        >
                                            <div className="frame-content-343_47824">
                                                <div
                                                    id="343_47825"
                                                    className="frame-343_47825"
                                                >
                                                    <PriorityPriorityNormal
                                                        id="343_47826"
                                                        className="instance-343_47826"
                                                    ></PriorityPriorityNormal>
                                                    <Projecticon
                                                        id="343_47827"
                                                        className="instance-343_47827"
                                                        instance_2_24307={
                                                            "IconFontAwesomeFreeSolidFfeatheralt"
                                                        }
                                                        Size={"16"}
                                                        form={"Icon"}
                                                        State={"Default"}
                                                        Color={"Violet"}
                                                        Favorites={"OFF"}
                                                        instance_2_24200_2_24213_343_47827_2_24307={
                                                            instance_2_24200_2_24213_343_47827_2_24307
                                                        }
                                                    ></Projecticon>
                                                    <p
                                                        id="343_47828"
                                                        className="paragraph-343_47828 fill-lightfgmuted-2_2271-paragraph text-description-m-2_20359"
                                                    >
                                                        {text_2_24200_2_24213_343_47828 ??
                                                            "ARCH-1033"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Tag
                                            id="343_47829"
                                            className="instance-343_47829"
                                            size={"xs"}
                                            state={"default"}
                                            selected={"false"}
                                            iconRight={false}
                                            iconLeft={false}
                                            text={`В работе`}
                                            instance_2_24200_2_24213_343_47829_2_27254={
                                                instance_2_24200_2_24213_343_47829_2_27254
                                            }
                                            instance_2_24200_2_24213_343_47829_2_27258={
                                                instance_2_24200_2_24213_343_47829_2_27258
                                            }
                                            text_2_24200_2_24213_343_47829_2_27257={
                                                text_2_24200_2_24213_343_47829_2_27257
                                            }
                                        ></Tag>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stroke-343_47821"></div>
                    </div>
                    <div id="343_47830" className="stroke-wrapper-343_47830">
                        <div className="frame-343_47830 fill-lightbgsurface1-2_2272">
                            <div className="frame-content-343_47830">
                                <p
                                    id="343_47831"
                                    className="paragraph-343_47831 fill-lightfgdefault-2_2273-paragraph text-body-l-2_2284"
                                >
                                    {text_2_24200_2_24213_343_47831 ??
                                        "Проектирование отказоустойчивой event-driven архитектуры"}
                                </p>
                                <div id="343_47832" className="frame-343_47832">
                                    <div className="frame-content-343_47832">
                                        <div
                                            id="343_47833"
                                            className="frame-343_47833"
                                        >
                                            <div className="frame-content-343_47833">
                                                <div
                                                    id="343_47834"
                                                    className="frame-343_47834"
                                                >
                                                    <PriorityPriorityNormal
                                                        id="343_47835"
                                                        className="instance-343_47835"
                                                    ></PriorityPriorityNormal>
                                                    <Projecticon
                                                        id="343_47836"
                                                        className="instance-343_47836"
                                                        instance_2_24307={
                                                            "IconFontAwesomeFreeSolidFfeatheralt"
                                                        }
                                                        Size={"16"}
                                                        form={"Icon"}
                                                        State={"Default"}
                                                        Color={"Violet"}
                                                        Favorites={"OFF"}
                                                        instance_2_24200_2_24213_343_47836_2_24307={
                                                            instance_2_24200_2_24213_343_47836_2_24307
                                                        }
                                                    ></Projecticon>
                                                    <p
                                                        id="343_47837"
                                                        className="paragraph-343_47837 fill-lightfgmuted-2_2271-paragraph text-description-m-2_20359"
                                                    >
                                                        {text_2_24200_2_24213_343_47837 ??
                                                            "ARCH-1042"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Tag
                                            id="343_47838"
                                            className="instance-343_47838"
                                            size={"xs"}
                                            state={"default"}
                                            selected={"false"}
                                            iconRight={false}
                                            iconLeft={false}
                                            text={`Беклог`}
                                            instance_2_24200_2_24213_343_47838_2_27254={
                                                instance_2_24200_2_24213_343_47838_2_27254
                                            }
                                            instance_2_24200_2_24213_343_47838_2_27258={
                                                instance_2_24200_2_24213_343_47838_2_27258
                                            }
                                            text_2_24200_2_24213_343_47838_2_27257={
                                                text_2_24200_2_24213_343_47838_2_27257
                                            }
                                        ></Tag>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stroke-343_47830 stroke-lightbgsurface2-2_22051"></div>
                    </div>
                    <div
                        id="343_47839"
                        className="frame-343_47839 fill-lightbgsurface1-2_2272"
                    >
                        <div className="frame-content-343_47839">
                            <p
                                id="343_47840"
                                className="paragraph-343_47840 fill-lightaccentdefault-2_18976-paragraph text-fontbodym-strong-2_20328"
                            >
                                {text_2_24200_2_24213_343_47840 ?? "Все"}
                            </p>
                            <p
                                id="343_47841"
                                className="paragraph-343_47841 text-body-m-strong-2_24196"
                            >
                                {text_2_24200_2_24213_343_47841 ?? "Вчера"}
                            </p>
                        </div>
                    </div>
                    <div id="343_47842" className="stroke-wrapper-343_47842">
                        <div className="frame-343_47842 fill-lightbgsurface1-2_2272">
                            <div className="frame-content-343_47842">
                                <p
                                    id="343_47843"
                                    className="paragraph-343_47843 fill-lightfgdefault-2_2273-paragraph text-body-l-2_2284"
                                >
                                    {text_2_24200_2_24213_343_47843 ??
                                        "Service Mesh внедрение и миграция модуля отчетности для авторизация на ABAC"}
                                </p>
                                <div id="343_47844" className="frame-343_47844">
                                    <div className="frame-content-343_47844">
                                        <div
                                            id="343_47845"
                                            className="frame-343_47845"
                                        >
                                            <div className="frame-content-343_47845">
                                                <div
                                                    id="343_47846"
                                                    className="frame-343_47846"
                                                >
                                                    <PriorityPriorityNormal
                                                        id="343_47847"
                                                        className="instance-343_47847"
                                                    ></PriorityPriorityNormal>
                                                    <Projecticon
                                                        id="343_47848"
                                                        className="instance-343_47848"
                                                        instance_2_24307={
                                                            "IconFontAwesomeFreeSolidFfeatheralt"
                                                        }
                                                        Size={"16"}
                                                        form={"Icon"}
                                                        State={"Default"}
                                                        Color={"Violet"}
                                                        Favorites={"OFF"}
                                                        instance_2_24200_2_24213_343_47848_2_24307={
                                                            instance_2_24200_2_24213_343_47848_2_24307
                                                        }
                                                    ></Projecticon>
                                                    <p
                                                        id="343_47849"
                                                        className="paragraph-343_47849 fill-lightfgmuted-2_2271-paragraph text-description-m-2_20359"
                                                    >
                                                        {text_2_24200_2_24213_343_47849 ??
                                                            "ARCH-1033"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Tag
                                            id="343_47850"
                                            className="instance-343_47850"
                                            size={"xs"}
                                            state={"default"}
                                            selected={"false"}
                                            iconRight={false}
                                            iconLeft={false}
                                            text={`В работе`}
                                            instance_2_24200_2_24213_343_47850_2_27254={
                                                instance_2_24200_2_24213_343_47850_2_27254
                                            }
                                            instance_2_24200_2_24213_343_47850_2_27258={
                                                instance_2_24200_2_24213_343_47850_2_27258
                                            }
                                            text_2_24200_2_24213_343_47850_2_27257={
                                                text_2_24200_2_24213_343_47850_2_27257
                                            }
                                        ></Tag>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stroke-343_47842"></div>
                    </div>
                    <div id="343_47851" className="stroke-wrapper-343_47851">
                        <div className="frame-343_47851 fill-lightbgsurface1-2_2272">
                            <div className="frame-content-343_47851">
                                <p
                                    id="343_47852"
                                    className="paragraph-343_47852 fill-lightfgdefault-2_2273-paragraph text-body-l-2_2284"
                                >
                                    {text_2_24200_2_24213_343_47852 ??
                                        "Оптимизация стратегии кеширования многоуровневой архитектуры (L1/L2/L3) для снижения p95-латентности ключевых API-эндпоинтов"}
                                </p>
                                <div id="343_47853" className="frame-343_47853">
                                    <div className="frame-content-343_47853">
                                        <div
                                            id="343_47854"
                                            className="frame-343_47854"
                                        >
                                            <div className="frame-content-343_47854">
                                                <div
                                                    id="343_47855"
                                                    className="frame-343_47855"
                                                >
                                                    <PriorityPriorityNormal
                                                        id="343_47856"
                                                        className="instance-343_47856"
                                                    ></PriorityPriorityNormal>
                                                    <Projecticon
                                                        id="343_47857"
                                                        className="instance-343_47857"
                                                        instance_2_24307={
                                                            "IconFontAwesomeFreeSolidFfeatheralt"
                                                        }
                                                        Size={"16"}
                                                        form={"Icon"}
                                                        State={"Default"}
                                                        Color={"Violet"}
                                                        Favorites={"OFF"}
                                                        instance_2_24200_2_24213_343_47857_2_24307={
                                                            instance_2_24200_2_24213_343_47857_2_24307
                                                        }
                                                    ></Projecticon>
                                                    <p
                                                        id="343_47858"
                                                        className="paragraph-343_47858 fill-lightfgmuted-2_2271-paragraph text-description-m-2_20359"
                                                    >
                                                        {text_2_24200_2_24213_343_47858 ??
                                                            "ARCH-1069"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Tag
                                            id="343_47859"
                                            className="instance-343_47859"
                                            size={"xs"}
                                            state={"default"}
                                            selected={"false"}
                                            iconRight={false}
                                            iconLeft={false}
                                            text={`Готово`}
                                            instance_2_24200_2_24213_343_47859_2_27254={
                                                instance_2_24200_2_24213_343_47859_2_27254
                                            }
                                            instance_2_24200_2_24213_343_47859_2_27258={
                                                instance_2_24200_2_24213_343_47859_2_27258
                                            }
                                            text_2_24200_2_24213_343_47859_2_27257={
                                                text_2_24200_2_24213_343_47859_2_27257
                                            }
                                        ></Tag>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stroke-343_47851"></div>
                    </div>
                    <div
                        id="343_47860"
                        className="frame-343_47860 fill-lightbgsurface1-2_2272"
                    >
                        <div className="frame-content-343_47860">
                            <p
                                id="343_47861"
                                className="paragraph-343_47861 fill-lightfgdefault-2_2273-paragraph text-body-l-2_2284"
                            >
                                {text_2_24200_2_24213_343_47861 ??
                                    "Рефакторинг модуля авторизации на основе ABAC для поддержки динамически изменяемых бизнес-правил"}
                            </p>
                            <div id="343_47862" className="frame-343_47862">
                                <div className="frame-content-343_47862">
                                    <div
                                        id="343_47863"
                                        className="frame-343_47863"
                                    >
                                        <div className="frame-content-343_47863">
                                            <div
                                                id="343_47864"
                                                className="frame-343_47864"
                                            >
                                                <PriorityPriorityNormal
                                                    id="343_47865"
                                                    className="instance-343_47865"
                                                ></PriorityPriorityNormal>
                                                <Projecticon
                                                    id="343_47866"
                                                    className="instance-343_47866"
                                                    instance_2_24307={
                                                        "IconFontAwesomeFreeSolidFfeatheralt"
                                                    }
                                                    Size={"16"}
                                                    form={"Icon"}
                                                    State={"Default"}
                                                    Color={"Violet"}
                                                    Favorites={"OFF"}
                                                    instance_2_24200_2_24213_343_47866_2_24307={
                                                        instance_2_24200_2_24213_343_47866_2_24307
                                                    }
                                                ></Projecticon>
                                                <p
                                                    id="343_47867"
                                                    className="paragraph-343_47867 fill-lightfgmuted-2_2271-paragraph text-description-m-2_20359"
                                                >
                                                    {text_2_24200_2_24213_343_47867 ??
                                                        "ARCH-1020"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Tag
                                        id="343_47868"
                                        className="instance-343_47868"
                                        size={"xs"}
                                        state={"default"}
                                        selected={"false"}
                                        iconRight={false}
                                        iconLeft={false}
                                        text={`Готово`}
                                        instance_2_24200_2_24213_343_47868_2_27254={
                                            instance_2_24200_2_24213_343_47868_2_27254
                                        }
                                        instance_2_24200_2_24213_343_47868_2_27258={
                                            instance_2_24200_2_24213_343_47868_2_27258
                                        }
                                        text_2_24200_2_24213_343_47868_2_27257={
                                            text_2_24200_2_24213_343_47868_2_27257
                                        }
                                    ></Tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="343_47869" className="frame-343_47869">
                    <div className="frame-content-343_47869">
                        <Button
                            id="343_47870"
                            className="instance-343_47870"
                            size={"l"}
                            variant={"secondary"}
                            colorScheme={"accent"}
                            state={"default"}
                            Text={`Показать ещё`}
                            lefticon={false}
                            instance_2_24200_2_24213_343_47870_2_21161={
                                instance_2_24200_2_24213_343_47870_2_21161
                            }
                            text_2_24200_2_24213_343_47870_2_21162={
                                text_2_24200_2_24213_343_47870_2_21162
                            }
                            instance_2_24200_2_24213_343_47870_2_21164={
                                instance_2_24200_2_24213_343_47870_2_21164
                            }
                            text_2_24200_2_24213_343_47870_2_21163_2_22031={
                                text_2_24200_2_24213_343_47870_2_21163_2_22031
                            }
                        ></Button>
                    </div>
                </div>
                <Empty
                    id="343_47871"
                    className="instance-343_47871"
                    type={"with illustrations"}
                    secondarybutton={false}
                    primarybutton={false}
                    subtext={`Вы можете закрепить здесь любой вид  через его настройки`}
                    title={`В избранном пока нет видов`}
                    text_2_24200_2_24213_343_47871_2_27370={
                        text_2_24200_2_24213_343_47871_2_27370
                    }
                    text_2_24200_2_24213_343_47871_2_27371={
                        text_2_24200_2_24213_343_47871_2_27371
                    }
                    instance_2_24200_2_24213_343_47871_2_27374_2_27801={
                        instance_2_24200_2_24213_343_47871_2_27374_2_27801
                    }
                    text_2_24200_2_24213_343_47871_2_27374_2_27803={
                        text_2_24200_2_24213_343_47871_2_27374_2_27803
                    }
                    instance_2_24200_2_24213_343_47871_2_27374_2_27804={
                        instance_2_24200_2_24213_343_47871_2_27374_2_27804
                    }
                    instance_2_24200_2_24213_343_47871_2_27373_2_27831={
                        instance_2_24200_2_24213_343_47871_2_27373_2_27831
                    }
                    text_2_24200_2_24213_343_47871_2_27373_2_27833={
                        text_2_24200_2_24213_343_47871_2_27373_2_27833
                    }
                    instance_2_24200_2_24213_343_47871_2_27373_2_27834={
                        instance_2_24200_2_24213_343_47871_2_27373_2_27834
                    }
                ></Empty>
                <div
                    id="343_47872"
                    className="frame-343_47872 fill-lightbgsurface1-2_2272"
                >
                    <div className="frame-content-343_47872">
                        <Button
                            id="343_47873"
                            className="instance-343_47873"
                            size={"xs"}
                            variant={"tertiary"}
                            colorScheme={"neutral"}
                            state={"default"}
                            rightIconvariant16={"Component_2_28813"}
                            Text={`Показать еще`}
                            lefticon={false}
                            righticon={true}
                            instance_2_24200_2_24213_343_47873_2_21766={
                                instance_2_24200_2_24213_343_47873_2_21766
                            }
                            text_2_24200_2_24213_343_47873_2_21767={
                                text_2_24200_2_24213_343_47873_2_21767
                            }
                            instance_2_24200_2_24213_343_47873_2_21769={
                                instance_2_24200_2_24213_343_47873_2_21769
                            }
                            text_2_24200_2_24213_343_47873_2_21768_2_22021={
                                text_2_24200_2_24213_343_47873_2_21768_2_22021
                            }
                        ></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Recents;
