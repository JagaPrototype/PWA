import Loader from "@/components/loader";
import Buttonicon from "@/components/buttonicon";
import DocumentDOC from "@/components/documentdoc";
import AlertOkColor from "@/components/alertokcolor";
import DocumentDocument from "@/components/documentdocument";
import DocumentDOC0 from "@/components/documentdoc0";
import AlertErrorColor from "@/components/alerterrorcolor";
import InputelementsHint from "@/components/inputelementshint";
import "@/styles/Loadingfile.css";
interface loadingfileProps {
    download?: boolean;
    remove?: boolean;
    size?: string;
    type?: string;
    onGreyBg?: string;
    id?: string;
    className?: string;
}
const Loadingfile = (props: loadingfileProps) => {
    const {
        download = true,
        remove = true,
        size,
        type,
        onGreyBg,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-1458_19100 ${className}`} id={id}>
            <div id="1458_19100" className="symbol-1458_19100">
                {size === "m" && type === "loading" && onGreyBg === "true" && (
                    <div
                        id="1458_19101"
                        className="symbol-1458_19101 fill-lightbgsurface1-1458_19260"
                    >
                        <div
                            id="1458_19102"
                            className="frame-1458_19102 fill-lightbgsurface2-2_29110"
                        >
                            <Loader
                                id="1458_19103"
                                className="instance-1458_19103"
                                size={"s"}
                                colorScheme={"neutral"}
                            ></Loader>
                        </div>
                        <div id="1458_19104" className="frame-1458_19104">
                            <div className="frame-content-1458_19104">
                                <p
                                    id="1458_19105"
                                    className="paragraph-1458_19105 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                                <p
                                    id="1458_19106"
                                    className="paragraph-1458_19106 fill-lightfgmuted-2_29133-paragraph text-mobilecaption-l-1458_19247"
                                >
                                    {"Загрузка 70%"}
                                </p>
                            </div>
                        </div>
                        <Buttonicon
                            id="1458_19107"
                            className="instance-1458_19107"
                            size={"m"}
                            variant={"tertiary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_943_43808"}
                        ></Buttonicon>
                    </div>
                )}
                {size === "m" && type === "success" && onGreyBg === "true" && (
                    <div
                        id="1458_19108"
                        className="symbol-1458_19108 fill-lightbgsurface1-1458_19260"
                    >
                        <div
                            id="1458_19109"
                            className="frame-1458_19109 fill-lightaccentcontainer-soft-256_20601"
                        >
                            <DocumentDOC
                                id="1458_19110"
                                className="instance-1458_19110"
                            ></DocumentDOC>
                            <AlertOkColor
                                id="1458_19111"
                                className="instance-1458_19111"
                            ></AlertOkColor>
                        </div>
                        <div id="1458_19112" className="frame-1458_19112">
                            <div className="frame-content-1458_19112">
                                <p
                                    id="1458_19113"
                                    className="paragraph-1458_19113 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                                <p
                                    id="1458_19114"
                                    className="paragraph-1458_19114 fill-lightfgmuted-1458_19248-paragraph text-mobilecaption-l-1458_19247"
                                >
                                    {"Загрузка 70%"}
                                </p>
                            </div>
                        </div>
                        <Buttonicon
                            id="1458_19115"
                            className="instance-1458_19115"
                            size={"m"}
                            variant={"tertiary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_1009_59114"}
                        ></Buttonicon>
                    </div>
                )}
                {size === "m" && type === "loaded" && onGreyBg === "true" && (
                    <div
                        id="1458_19116"
                        className="symbol-1458_19116 fill-lightbgsurface1-1458_19260"
                    >
                        <div
                            id="1458_19117"
                            className="frame-1458_19117 fill-lightaccentcontainer-soft-1458_19261"
                        >
                            <div
                                id="1458_19118"
                                className="instance-1458_19118"
                                instance_1458_19256={"DocumentDocument"}
                            >
                                <DocumentDocument id="1458_19118"></DocumentDocument>
                                <DocumentDOC id="1458_19118"></DocumentDOC>
                            </div>
                        </div>
                        <div id="1458_19119" className="frame-1458_19119">
                            <div className="frame-content-1458_19119">
                                <p
                                    id="1458_19120"
                                    className="paragraph-1458_19120 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                                <p
                                    id="1458_19121"
                                    className="paragraph-1458_19121 fill-lightfgmuted-1458_19248-paragraph text-mobilecaption-l-1458_19247"
                                >
                                    {"12,1 Мб"}
                                </p>
                            </div>
                        </div>
                        <div id="1458_19122" className="frame-1458_19122">
                            {download && (
                                <Buttonicon
                                    id="1458_19123"
                                    className="instance-1458_19123"
                                    size={"m"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_1458_19242"}
                                ></Buttonicon>
                            )}
                            {remove && (
                                <Buttonicon
                                    id="1458_19124"
                                    className="instance-1458_19124"
                                    size={"m"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_1009_59114"}
                                ></Buttonicon>
                            )}
                        </div>
                    </div>
                )}
                {size === "s" && type === "loading" && onGreyBg === "true" && (
                    <div
                        id="1458_19125"
                        className="symbol-1458_19125 fill-lightbgsurface1-1458_19260"
                    >
                        <Loader
                            id="1458_19126"
                            className="instance-1458_19126"
                            size={"xs"}
                            colorScheme={"neutral"}
                        ></Loader>
                        <div id="1458_19127" className="frame-1458_19127">
                            <div className="frame-content-1458_19127">
                                <p
                                    id="1458_19128"
                                    className="paragraph-1458_19128 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                            </div>
                        </div>
                        <p
                            id="1458_19129"
                            className="paragraph-1458_19129 fill-lightfgmuted-2_29133-paragraph text-mobilecaption-l-1458_19247"
                        >
                            {"Загрузка 70%"}
                        </p>
                        <Buttonicon
                            id="1458_19130"
                            className="instance-1458_19130"
                            size={"xs"}
                            variant={"tertiary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_4154_112897"}
                            iconvariant16={"Component_738_68570"}
                        ></Buttonicon>
                    </div>
                )}
                {size === "s" && type === "loaded" && onGreyBg === "true" && (
                    <div
                        id="1458_19131"
                        className="symbol-1458_19131 fill-lightbgsurface1-1458_19260"
                    >
                        <DocumentDOC0
                            id="1458_19132"
                            className="instance-1458_19132"
                        ></DocumentDOC0>
                        <div id="1458_19133" className="frame-1458_19133">
                            <div className="frame-content-1458_19133">
                                <p
                                    id="1458_19134"
                                    className="paragraph-1458_19134 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                            </div>
                        </div>
                        <p
                            id="1458_19135"
                            className="paragraph-1458_19135 fill-lightfgmuted-1458_19248-paragraph text-mobilecaption-l-1458_19247"
                        >
                            {"12,1 Мб"}
                        </p>
                        <div id="1458_19136" className="frame-1458_19136">
                            {download && (
                                <Buttonicon
                                    id="1458_19137"
                                    className="instance-1458_19137"
                                    size={"xs"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_4154_112897"}
                                    iconvariant16={"Component_1458_19244"}
                                ></Buttonicon>
                            )}
                            {remove && (
                                <Buttonicon
                                    id="1458_19138"
                                    className="instance-1458_19138"
                                    size={"xs"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_4154_112897"}
                                    iconvariant16={"Component_1458_19258"}
                                ></Buttonicon>
                            )}
                        </div>
                    </div>
                )}
                {size === "s" && type === "success" && onGreyBg === "true" && (
                    <div
                        id="1458_19139"
                        className="symbol-1458_19139 fill-lightbgsurface1-1458_19260"
                    >
                        <AlertOkColor
                            id="1458_19140"
                            className="instance-1458_19140"
                        ></AlertOkColor>
                        <div id="1458_19141" className="frame-1458_19141">
                            <div className="frame-content-1458_19141">
                                <p
                                    id="1458_19142"
                                    className="paragraph-1458_19142 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                            </div>
                        </div>
                        <p
                            id="1458_19143"
                            className="paragraph-1458_19143 fill-lightfgmuted-2_29133-paragraph text-mobilecaption-l-1458_19247"
                        >
                            {"12,1 Мб"}
                        </p>
                        <Buttonicon
                            id="1458_19144"
                            className="instance-1458_19144"
                            size={"xs"}
                            variant={"tertiary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_4154_112897"}
                            iconvariant16={"Component_1458_19258"}
                        ></Buttonicon>
                    </div>
                )}
                {size === "s" && type === "error" && onGreyBg === "true" && (
                    <div id="1458_19145" className="symbol-1458_19145">
                        <div
                            id="1458_19146"
                            className="frame-1458_19146 fill-lightbgsurface1-1458_19260"
                        >
                            <div className="frame-content-1458_19146">
                                <AlertErrorColor
                                    id="1458_19147"
                                    className="instance-1458_19147"
                                ></AlertErrorColor>
                                <div
                                    id="1458_19148"
                                    className="frame-1458_19148"
                                >
                                    <div className="frame-content-1458_19148">
                                        <p
                                            id="1458_19149"
                                            className="paragraph-1458_19149 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                        >
                                            {"Документ.doc"}
                                        </p>
                                    </div>
                                </div>
                                <p
                                    id="1458_19150"
                                    className="paragraph-1458_19150 fill-lightfgmuted-2_29133-paragraph text-mobilecaption-l-1458_19247"
                                >
                                    {"12,1 Мб"}
                                </p>
                                <Buttonicon
                                    id="1458_19151"
                                    className="instance-1458_19151"
                                    size={"xs"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_4154_112897"}
                                    iconvariant16={"Component_1458_19258"}
                                ></Buttonicon>
                            </div>
                        </div>
                        <InputelementsHint
                            id="1458_19152"
                            className="instance-1458_19152"
                            state={"error"}
                            size={"l"}
                            text={`Превышен максимальный вес файла `}
                        ></InputelementsHint>
                    </div>
                )}
                {size === "m" && type === "error" && onGreyBg === "true" && (
                    <div id="1458_19153" className="symbol-1458_19153">
                        <div
                            id="1458_19154"
                            className="frame-1458_19154 fill-lightbgsurface1-1458_19260"
                        >
                            <div className="frame-content-1458_19154">
                                <div
                                    id="1458_19155"
                                    className="frame-1458_19155 fill-lightbgsurface2-2_29110"
                                >
                                    <DocumentDOC
                                        id="1458_19156"
                                        className="instance-1458_19156"
                                    ></DocumentDOC>
                                    <AlertErrorColor
                                        id="1458_19157"
                                        className="instance-1458_19157"
                                    ></AlertErrorColor>
                                </div>
                                <div
                                    id="1458_19158"
                                    className="frame-1458_19158"
                                >
                                    <div className="frame-content-1458_19158">
                                        <p
                                            id="1458_19159"
                                            className="paragraph-1458_19159 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                        >
                                            {"Документ.doc"}
                                        </p>
                                        <p
                                            id="1458_19160"
                                            className="paragraph-1458_19160 fill-lightfgmuted-1458_19248-paragraph text-mobilecaption-l-1458_19247"
                                        >
                                            {"Загрузка 70%"}
                                        </p>
                                    </div>
                                </div>
                                <Buttonicon
                                    id="1458_19161"
                                    className="instance-1458_19161"
                                    size={"m"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_1009_59114"}
                                ></Buttonicon>
                            </div>
                        </div>
                        <InputelementsHint
                            id="1458_19162"
                            className="instance-1458_19162"
                            state={"error"}
                            size={"l"}
                            text={`Превышен максимальный вес файла `}
                        ></InputelementsHint>
                    </div>
                )}
                {size === "m" && type === "error" && onGreyBg === "false" && (
                    <div id="1458_19163" className="symbol-1458_19163">
                        <div
                            id="1458_19164"
                            className="frame-1458_19164 fill-lightbgsurface2-2_29110"
                        >
                            <div className="frame-content-1458_19164">
                                <div
                                    id="1458_19165"
                                    className="frame-1458_19165 fill-lightbgsurface1-2_29086"
                                >
                                    <DocumentDOC
                                        id="1458_19166"
                                        className="instance-1458_19166"
                                    ></DocumentDOC>
                                    <AlertErrorColor
                                        id="1458_19167"
                                        className="instance-1458_19167"
                                    ></AlertErrorColor>
                                </div>
                                <div
                                    id="1458_19168"
                                    className="frame-1458_19168"
                                >
                                    <div className="frame-content-1458_19168">
                                        <p
                                            id="1458_19169"
                                            className="paragraph-1458_19169 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                        >
                                            {"Документ.doc"}
                                        </p>
                                        <p
                                            id="1458_19170"
                                            className="paragraph-1458_19170 fill-lightfgmuted-1458_19248-paragraph text-mobilecaption-l-1458_19247"
                                        >
                                            {"Загрузка 70%"}
                                        </p>
                                    </div>
                                </div>
                                <Buttonicon
                                    id="1458_19171"
                                    className="instance-1458_19171"
                                    size={"m"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_1009_59114"}
                                ></Buttonicon>
                            </div>
                        </div>
                        <InputelementsHint
                            id="1458_19172"
                            className="instance-1458_19172"
                            state={"error"}
                            size={"l"}
                            text={`Превышен максимальный вес файла `}
                        ></InputelementsHint>
                    </div>
                )}
                {size === "s" && type === "error" && onGreyBg === "false" && (
                    <div id="1458_19173" className="symbol-1458_19173">
                        <div
                            id="1458_19174"
                            className="frame-1458_19174 fill-lightbgsurface2-2_29110"
                        >
                            <div className="frame-content-1458_19174">
                                <AlertErrorColor
                                    id="1458_19175"
                                    className="instance-1458_19175"
                                ></AlertErrorColor>
                                <div
                                    id="1458_19176"
                                    className="frame-1458_19176"
                                >
                                    <div className="frame-content-1458_19176">
                                        <p
                                            id="1458_19177"
                                            className="paragraph-1458_19177 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                        >
                                            {"Документ.doc"}
                                        </p>
                                    </div>
                                </div>
                                <p
                                    id="1458_19178"
                                    className="paragraph-1458_19178 fill-lightfgmuted-2_29133-paragraph text-mobilecaption-l-1458_19247"
                                >
                                    {"12,1 Мб"}
                                </p>
                                <Buttonicon
                                    id="1458_19179"
                                    className="instance-1458_19179"
                                    size={"xs"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_4154_112897"}
                                    iconvariant16={"Component_1458_19258"}
                                ></Buttonicon>
                            </div>
                        </div>
                        <InputelementsHint
                            id="1458_19180"
                            className="instance-1458_19180"
                            state={"error"}
                            size={"l"}
                            text={`Превышен максимальный вес файла `}
                        ></InputelementsHint>
                    </div>
                )}
                {size === "s" && type === "success" && onGreyBg === "false" && (
                    <div
                        id="1458_19181"
                        className="symbol-1458_19181 fill-lightbgsurface2-2_29110"
                    >
                        <AlertOkColor
                            id="1458_19182"
                            className="instance-1458_19182"
                        ></AlertOkColor>
                        <div id="1458_19183" className="frame-1458_19183">
                            <div className="frame-content-1458_19183">
                                <p
                                    id="1458_19184"
                                    className="paragraph-1458_19184 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                            </div>
                        </div>
                        <p
                            id="1458_19185"
                            className="paragraph-1458_19185 fill-lightfgmuted-2_29133-paragraph text-mobilecaption-l-1458_19247"
                        >
                            {"12,1 Мб"}
                        </p>
                        <Buttonicon
                            id="1458_19186"
                            className="instance-1458_19186"
                            size={"xs"}
                            variant={"tertiary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_4154_112897"}
                            iconvariant16={"Component_1458_19258"}
                        ></Buttonicon>
                    </div>
                )}
                {size === "s" && type === "loaded" && onGreyBg === "false" && (
                    <div
                        id="1458_19187"
                        className="symbol-1458_19187 fill-lightbgsurface2-2_29110"
                    >
                        <DocumentDOC0
                            id="1458_19188"
                            className="instance-1458_19188"
                        ></DocumentDOC0>
                        <div id="1458_19189" className="frame-1458_19189">
                            <div className="frame-content-1458_19189">
                                <p
                                    id="1458_19190"
                                    className="paragraph-1458_19190 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                            </div>
                        </div>
                        <p
                            id="1458_19191"
                            className="paragraph-1458_19191 fill-lightfgmuted-1458_19248-paragraph text-mobilecaption-l-1458_19247"
                        >
                            {"12,1 Мб"}
                        </p>
                        <div id="1458_19192" className="frame-1458_19192">
                            {download && (
                                <Buttonicon
                                    id="1458_19193"
                                    className="instance-1458_19193"
                                    size={"xs"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_4154_112897"}
                                    iconvariant16={"Component_1458_19244"}
                                ></Buttonicon>
                            )}
                            {remove && (
                                <Buttonicon
                                    id="1458_19194"
                                    className="instance-1458_19194"
                                    size={"xs"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_4154_112897"}
                                    iconvariant16={"Component_1458_19258"}
                                ></Buttonicon>
                            )}
                        </div>
                    </div>
                )}
                {size === "s" && type === "loading" && onGreyBg === "false" && (
                    <div
                        id="1458_19195"
                        className="symbol-1458_19195 fill-lightbgsurface2-2_29110"
                    >
                        <Loader
                            id="1458_19196"
                            className="instance-1458_19196"
                            size={"xs"}
                            colorScheme={"neutral"}
                        ></Loader>
                        <div id="1458_19197" className="frame-1458_19197">
                            <div className="frame-content-1458_19197">
                                <p
                                    id="1458_19198"
                                    className="paragraph-1458_19198 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                            </div>
                        </div>
                        <p
                            id="1458_19199"
                            className="paragraph-1458_19199 fill-lightfgmuted-2_29133-paragraph text-mobilecaption-l-1458_19247"
                        >
                            {"Загрузка 70%"}
                        </p>
                        <Buttonicon
                            id="1458_19200"
                            className="instance-1458_19200"
                            size={"xs"}
                            variant={"tertiary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_4154_112897"}
                            iconvariant16={"Component_738_68570"}
                        ></Buttonicon>
                    </div>
                )}
                {size === "m" && type === "loaded" && onGreyBg === "false" && (
                    <div
                        id="1458_19201"
                        className="symbol-1458_19201 fill-lightbgsurface2-2_29110"
                    >
                        <div
                            id="1458_19202"
                            className="frame-1458_19202 fill-lightbgsurface1-2_29086"
                        >
                            <DocumentDOC
                                id="1458_19203"
                                className="instance-1458_19203"
                            ></DocumentDOC>
                        </div>
                        <div id="1458_19204" className="frame-1458_19204">
                            <div className="frame-content-1458_19204">
                                <p
                                    id="1458_19205"
                                    className="paragraph-1458_19205 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                                <p
                                    id="1458_19206"
                                    className="paragraph-1458_19206 fill-lightfgmuted-1458_19248-paragraph text-mobilecaption-l-1458_19247"
                                >
                                    {"Загрузка 70%"}
                                </p>
                            </div>
                        </div>
                        <div id="1458_19207" className="frame-1458_19207">
                            {download && (
                                <Buttonicon
                                    id="1458_19208"
                                    className="instance-1458_19208"
                                    size={"m"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_1458_19242"}
                                ></Buttonicon>
                            )}
                            {remove && (
                                <Buttonicon
                                    id="1458_19209"
                                    className="instance-1458_19209"
                                    size={"m"}
                                    variant={"tertiary"}
                                    _style={"square"}
                                    state={"default"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_1009_59114"}
                                ></Buttonicon>
                            )}
                        </div>
                    </div>
                )}
                {size === "m" && type === "success" && onGreyBg === "false" && (
                    <div
                        id="1458_19210"
                        className="symbol-1458_19210 fill-lightbgsurface2-2_29110"
                    >
                        <div
                            id="1458_19211"
                            className="frame-1458_19211 fill-lightbgsurface1-2_29086"
                        >
                            <DocumentDOC
                                id="1458_19212"
                                className="instance-1458_19212"
                            ></DocumentDOC>
                            <AlertOkColor
                                id="1458_19213"
                                className="instance-1458_19213"
                            ></AlertOkColor>
                        </div>
                        <div id="1458_19214" className="frame-1458_19214">
                            <div className="frame-content-1458_19214">
                                <p
                                    id="1458_19215"
                                    className="paragraph-1458_19215 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                                <p
                                    id="1458_19216"
                                    className="paragraph-1458_19216 fill-lightfgmuted-1458_19248-paragraph text-mobilecaption-l-1458_19247"
                                >
                                    {"Загрузка 70%"}
                                </p>
                            </div>
                        </div>
                        <Buttonicon
                            id="1458_19217"
                            className="instance-1458_19217"
                            size={"m"}
                            variant={"tertiary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_1009_59114"}
                        ></Buttonicon>
                    </div>
                )}
                {size === "m" && type === "loading" && onGreyBg === "false" && (
                    <div
                        id="1458_19218"
                        className="symbol-1458_19218 fill-lightbgsurface2-2_29110"
                    >
                        <div
                            id="1458_19219"
                            className="frame-1458_19219 fill-lightbgsurface1-2_29086"
                        >
                            <Loader
                                id="1458_19220"
                                className="instance-1458_19220"
                                size={"s"}
                                colorScheme={"neutral"}
                            ></Loader>
                        </div>
                        <div id="1458_19221" className="frame-1458_19221">
                            <div className="frame-content-1458_19221">
                                <p
                                    id="1458_19222"
                                    className="paragraph-1458_19222 fill-lightfgdefault-1458_19249-paragraph text-mobiledescription-l-1458_19246"
                                >
                                    {"Документ.doc"}
                                </p>
                                <p
                                    id="1458_19223"
                                    className="paragraph-1458_19223 fill-lightfgmuted-2_29133-paragraph text-mobilecaption-l-1458_19247"
                                >
                                    {"Загрузка 70%"}
                                </p>
                            </div>
                        </div>
                        <Buttonicon
                            id="1458_19224"
                            className="instance-1458_19224"
                            size={"m"}
                            variant={"tertiary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_943_43808"}
                        ></Buttonicon>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Loadingfile;
