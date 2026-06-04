import AlertInformation from "@/components/alertinformation";
import CommunicationComments from "@/components/communicationcomments";
import ActionAttachment from "@/components/actionattachment";
import CommunicationParentBranchconnection from "@/components/communicationparentbranchconnection";
import OrganizeHistory from "@/components/organizehistory";
import DocumentImage from "@/components/documentimage";
import NavigationChevrondown from "@/components/navigationchevrondown";
import Counter from "@/components/counter";
import "@/styles/Tabstab.css";
interface tabstabProps {
    chevron?: boolean;
    text?: boolean;
    tabText?: string;
    numberText?: string;
    icon?: boolean;
    icon20?: string;
    state?: string;
    indicator?: string;
    type?: string;
    id?: string;
    className?: string;
    text_2290_53441?: string;
    text_2290_53472?: string;
    text_2290_53527?: string;
    text_2290_53556?: string;
}
const Tabstab = (props: tabstabProps) => {
    const {
        chevron = true,
        text = true,
        tabText = "Tab",
        numberText = "23",
        icon = true,
        icon20 = "Component_3491_96386",
        state,
        indicator,
        type,
        id,
        className = "",
        text_2290_53441,
        text_2290_53472,
        text_2290_53527,
        text_2290_53556
    } = props;

    return (
        <div className={`component-2290_53436 ${className}`} id={id}>
            <div id="2290_53436" className="symbol-2290_53436">
                {state === "active" &&
                    indicator === "none" &&
                    type === "primary" && (
                        <div id="2290_53437" className="symbol-2290_53437">
                            <div id="2290_53438" className="frame-2290_53438">
                                <div className="frame-content-2290_53438">
                                    <div
                                        id="2290_53439"
                                        className="frame-2290_53439"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53440"
                                                className="instance-2290_53440"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53440"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53440"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53440"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53440"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53440"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53440"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53441"
                                            className="paragraph-2290_53441 fill-lightfgdefault-2290_53632-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ??
                                                text_2290_53441 ??
                                                "Tab"}
                                        </p>
                                    </div>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53442"
                                            className="instance-2290_53442"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                            <div
                                id="2290_53443"
                                className="vector-2290_53443"
                            ></div>
                        </div>
                    )}
                {state === "active" &&
                    indicator === "small counter" &&
                    type === "primary" && (
                        <div id="2290_53444" className="symbol-2290_53444">
                            <div id="2290_53445" className="frame-2290_53445">
                                <div className="frame-content-2290_53445">
                                    <div
                                        id="2290_53446"
                                        className="frame-2290_53446"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53447"
                                                className="instance-2290_53447"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53447"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53447"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53447"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53447"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53447"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53447"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53448"
                                            className="paragraph-2290_53448 fill-lightfgdefault-2290_53632-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                    <Counter
                                        id="2290_53449"
                                        className="instance-2290_53449"
                                        size={"xss (6)"}
                                        variant={"primary"}
                                        disabled={"false"}
                                    ></Counter>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53450"
                                            className="instance-2290_53450"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                            <div
                                id="2290_53451"
                                className="vector-2290_53451"
                            ></div>
                        </div>
                    )}
                {state === "active" &&
                    indicator === "large counter" &&
                    type === "primary" && (
                        <div id="2290_53452" className="symbol-2290_53452">
                            <div id="2290_53453" className="frame-2290_53453">
                                <div className="frame-content-2290_53453">
                                    <div
                                        id="2290_53454"
                                        className="frame-2290_53454"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53455"
                                                className="instance-2290_53455"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53455"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53455"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53455"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53455"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53455"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53455"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53456"
                                            className="paragraph-2290_53456 fill-lightfgdefault-2290_53632-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                    <Counter
                                        id="2290_53457"
                                        className="instance-2290_53457"
                                        size={"s (20)"}
                                        variant={"secondary"}
                                        disabled={"false"}
                                        label={`7`}
                                    ></Counter>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53458"
                                            className="instance-2290_53458"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                            <div
                                id="2290_53459"
                                className="vector-2290_53459"
                            ></div>
                        </div>
                    )}
                {state === "active" &&
                    indicator === "number" &&
                    type === "primary" && (
                        <div id="2290_53460" className="symbol-2290_53460">
                            <div id="2290_53461" className="frame-2290_53461">
                                <div className="frame-content-2290_53461">
                                    <div
                                        id="2290_53462"
                                        className="frame-2290_53462"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53463"
                                                className="instance-2290_53463"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53463"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53463"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53463"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53463"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53463"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53463"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53464"
                                            className="paragraph-2290_53464 fill-lightfgdefault-2290_53632-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                        <p
                                            id="2290_53465"
                                            className="paragraph-2290_53465 fill-lightfgmuted-2290_53623-paragraph text-mobiledescription-l-2290_53614"
                                        >
                                            {numberText ?? "23"}
                                        </p>
                                    </div>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53466"
                                            className="instance-2290_53466"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                            <div
                                id="2290_53467"
                                className="vector-2290_53467"
                            ></div>
                        </div>
                    )}
                {state === "default" &&
                    indicator === "none" &&
                    type === "primary" && (
                        <div id="2290_53468" className="symbol-2290_53468">
                            <div id="2290_53469" className="frame-2290_53469">
                                <div className="frame-content-2290_53469">
                                    <div
                                        id="2290_53470"
                                        className="frame-2290_53470"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53471"
                                                className="instance-2290_53471"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53471"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53471"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53471"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53471"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53471"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53471"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53472"
                                            className="paragraph-2290_53472 fill-lightfgsoft-2290_53618-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ??
                                                text_2290_53472 ??
                                                "Tab"}
                                        </p>
                                    </div>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53473"
                                            className="instance-2290_53473"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    indicator === "small counter" &&
                    type === "primary" && (
                        <div id="2290_53474" className="symbol-2290_53474">
                            <div id="2290_53475" className="frame-2290_53475">
                                <div className="frame-content-2290_53475">
                                    <div
                                        id="2290_53476"
                                        className="frame-2290_53476"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53477"
                                                className="instance-2290_53477"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53477"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53477"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53477"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53477"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53477"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53477"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53478"
                                            className="paragraph-2290_53478 fill-lightfgsoft-2290_53618-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                    <Counter
                                        id="2290_53479"
                                        className="instance-2290_53479"
                                        size={"xss (6)"}
                                        variant={"primary"}
                                        disabled={"false"}
                                    ></Counter>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53480"
                                            className="instance-2290_53480"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    indicator === "large counter" &&
                    type === "primary" && (
                        <div id="2290_53481" className="symbol-2290_53481">
                            <div id="2290_53482" className="frame-2290_53482">
                                <div className="frame-content-2290_53482">
                                    <div
                                        id="2290_53483"
                                        className="frame-2290_53483"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53484"
                                                className="instance-2290_53484"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53484"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53484"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53484"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53484"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53484"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53484"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53485"
                                            className="paragraph-2290_53485 fill-lightfgsoft-2290_53618-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                    <Counter
                                        id="2290_53486"
                                        className="instance-2290_53486"
                                        size={"s (20)"}
                                        variant={"secondary"}
                                        disabled={"false"}
                                        label={`7`}
                                    ></Counter>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53487"
                                            className="instance-2290_53487"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    indicator === "number" &&
                    type === "primary" && (
                        <div id="2290_53488" className="symbol-2290_53488">
                            <div id="2290_53489" className="frame-2290_53489">
                                <div className="frame-content-2290_53489">
                                    <div
                                        id="2290_53490"
                                        className="frame-2290_53490"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53491"
                                                className="instance-2290_53491"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53491"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53491"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53491"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53491"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53491"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53491"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53492"
                                            className="paragraph-2290_53492 fill-lightfgsoft-2290_53618-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                        <p
                                            id="2290_53493"
                                            className="paragraph-2290_53493 fill-lightfgmuted-2290_53623-paragraph text-mobiledescription-l-2290_53614"
                                        >
                                            {numberText ?? "23"}
                                        </p>
                                    </div>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53494"
                                            className="instance-2290_53494"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    indicator === "none" &&
                    type === "primary" && (
                        <div id="2290_53495" className="symbol-2290_53495">
                            <div id="2290_53496" className="frame-2290_53496">
                                <div className="frame-content-2290_53496">
                                    <div
                                        id="2290_53497"
                                        className="frame-2290_53497"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53498"
                                                className="instance-2290_53498"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53498"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53498"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53498"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53498"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53498"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53498"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53499"
                                            className="paragraph-2290_53499 fill-lightfgdisabled-2290_53620-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53500"
                                            className="instance-2290_53500"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    indicator === "small counter" &&
                    type === "primary" && (
                        <div id="2290_53501" className="symbol-2290_53501">
                            <div id="2290_53502" className="frame-2290_53502">
                                <div className="frame-content-2290_53502">
                                    <div
                                        id="2290_53503"
                                        className="frame-2290_53503"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53504"
                                                className="instance-2290_53504"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53504"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53504"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53504"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53504"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53504"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53504"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53505"
                                            className="paragraph-2290_53505 fill-lightfgdisabled-2290_53620-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                    <Counter
                                        id="2290_53506"
                                        className="instance-2290_53506"
                                        size={"xss (6)"}
                                        variant={"primary"}
                                        disabled={"false"}
                                    ></Counter>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53507"
                                            className="instance-2290_53507"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    indicator === "large counter" &&
                    type === "primary" && (
                        <div id="2290_53508" className="symbol-2290_53508">
                            <div id="2290_53509" className="frame-2290_53509">
                                <div className="frame-content-2290_53509">
                                    <div
                                        id="2290_53510"
                                        className="frame-2290_53510"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53511"
                                                className="instance-2290_53511"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53511"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53511"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53511"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53511"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53511"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53511"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        <p
                                            id="2290_53512"
                                            className="paragraph-2290_53512 fill-lightfgdisabled-2290_53620-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                    <Counter
                                        id="2290_53513"
                                        className="instance-2290_53513"
                                        size={"s (20)"}
                                        variant={"secondary"}
                                        disabled={"true"}
                                    ></Counter>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53514"
                                            className="instance-2290_53514"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    indicator === "number" &&
                    type === "primary" && (
                        <div id="2290_53515" className="symbol-2290_53515">
                            <div id="2290_53516" className="frame-2290_53516">
                                <div className="frame-content-2290_53516">
                                    <div
                                        id="2290_53517"
                                        className="frame-2290_53517"
                                    >
                                        {icon && (
                                            <div
                                                id="2290_53518"
                                                className="instance-2290_53518"
                                                instance_1588_46023={
                                                    "OrganizeHistory"
                                                }
                                            >
                                                {icon20 ===
                                                    "Component_2281_51970" && (
                                                    <AlertInformation id="2290_53518"></AlertInformation>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52642" && (
                                                    <CommunicationComments id="2290_53518"></CommunicationComments>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52091" && (
                                                    <ActionAttachment id="2290_53518"></ActionAttachment>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52521" && (
                                                    <CommunicationParentBranchconnection id="2290_53518"></CommunicationParentBranchconnection>
                                                )}
                                                {icon20 ===
                                                    "Component_2281_52745" && (
                                                    <OrganizeHistory id="2290_53518"></OrganizeHistory>
                                                )}
                                                {icon20 ===
                                                    "Component_1588_46023" && (
                                                    <DocumentImage id="2290_53518"></DocumentImage>
                                                )}
                                            </div>
                                        )}
                                        {text && (
                                            <div
                                                id="2290_53519"
                                                className="frame-2290_53519"
                                            >
                                                <p
                                                    id="2290_53520"
                                                    className="paragraph-2290_53520 fill-lightfgdisabled-2290_53620-paragraph text-mobiledescription-l-strong-2290_53613"
                                                >
                                                    {tabText ?? "Tab"}
                                                </p>
                                                <p
                                                    id="2290_53521"
                                                    className="paragraph-2290_53521 fill-lightfgdisabled-2290_53620-paragraph text-mobiledescription-l-2290_53614"
                                                >
                                                    {numberText ?? "23"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    {chevron && (
                                        <NavigationChevrondown
                                            id="2290_53522"
                                            className="instance-2290_53522"
                                        ></NavigationChevrondown>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                {state === "active" &&
                    indicator === "none" &&
                    type === "secondary" && (
                        <div
                            id="2290_53523"
                            className="symbol-2290_53523 fill-lightaccentdefault-2290_53630"
                        >
                            <div id="2290_53524" className="frame-2290_53524">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53525"
                                        className="instance-2290_53525"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53526"
                                        className="frame-2290_53526"
                                    >
                                        <p
                                            id="2290_53527"
                                            className="paragraph-2290_53527 fill-lightaccenton-accent-2290_53629-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ??
                                                text_2290_53527 ??
                                                "Tab"}
                                        </p>
                                    </div>
                                )}
                            </div>
                            {chevron && (
                                <NavigationChevrondown
                                    id="2290_53528"
                                    className="instance-2290_53528"
                                ></NavigationChevrondown>
                            )}
                        </div>
                    )}
                {state === "active" &&
                    indicator === "number" &&
                    type === "secondary" && (
                        <div
                            id="2290_53529"
                            className="symbol-2290_53529 fill-lightaccentdefault-2290_53630"
                        >
                            <div id="2290_53530" className="frame-2290_53530">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53531"
                                        className="instance-2290_53531"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53532"
                                        className="frame-2290_53532"
                                    >
                                        <p
                                            id="2290_53533"
                                            className="paragraph-2290_53533 fill-lightaccenton-accent-2290_53629-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                )}
                                <p
                                    id="2290_53534"
                                    className="paragraph-2290_53534 fill-lightaccenton-accent-2290_53629-paragraph text-mobiledescription-m-2290_53615"
                                >
                                    {numberText ?? "23"}
                                </p>
                            </div>
                            {chevron && (
                                <NavigationChevrondown
                                    id="2290_53535"
                                    className="instance-2290_53535"
                                ></NavigationChevrondown>
                            )}
                        </div>
                    )}
                {state === "active" &&
                    indicator === "small counter" &&
                    type === "secondary" && (
                        <div
                            id="2290_53536"
                            className="symbol-2290_53536 fill-lightaccentdefault-2290_53630"
                        >
                            <div id="2290_53537" className="frame-2290_53537">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53538"
                                        className="instance-2290_53538"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53539"
                                        className="frame-2290_53539"
                                    >
                                        <p
                                            id="2290_53540"
                                            className="paragraph-2290_53540 fill-lightaccenton-accent-2290_53629-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div id="2290_53541" className="frame-2290_53541">
                                <Counter
                                    id="2290_53542"
                                    className="instance-2290_53542"
                                    size={"xss (6)"}
                                    variant={"contrast"}
                                    disabled={"false"}
                                ></Counter>
                                {chevron && (
                                    <NavigationChevrondown
                                        id="2290_53543"
                                        className="instance-2290_53543"
                                    ></NavigationChevrondown>
                                )}
                            </div>
                        </div>
                    )}
                {state === "active" &&
                    indicator === "large counter" &&
                    type === "secondary" && (
                        <div
                            id="2290_53544"
                            className="symbol-2290_53544 fill-lightaccentdefault-2290_53630"
                        >
                            <div id="2290_53545" className="frame-2290_53545">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53546"
                                        className="instance-2290_53546"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53547"
                                        className="frame-2290_53547"
                                    >
                                        <p
                                            id="2290_53548"
                                            className="paragraph-2290_53548 fill-lightaccenton-accent-2290_53629-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div id="2290_53549" className="frame-2290_53549">
                                <Counter
                                    id="2290_53550"
                                    className="instance-2290_53550"
                                    size={"s (20)"}
                                    variant={"contrast"}
                                    disabled={"false"}
                                ></Counter>
                                {chevron && (
                                    <NavigationChevrondown
                                        id="2290_53551"
                                        className="instance-2290_53551"
                                    ></NavigationChevrondown>
                                )}
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    indicator === "none" &&
                    type === "secondary" && (
                        <div id="2290_53552" className="symbol-2290_53552">
                            <div id="2290_53553" className="frame-2290_53553">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53554"
                                        className="instance-2290_53554"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53555"
                                        className="frame-2290_53555"
                                    >
                                        <p
                                            id="2290_53556"
                                            className="paragraph-2290_53556 fill-lightfgsoft-2290_53618-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ??
                                                text_2290_53556 ??
                                                "Tab"}
                                        </p>
                                    </div>
                                )}
                            </div>
                            {chevron && (
                                <NavigationChevrondown
                                    id="2290_53557"
                                    className="instance-2290_53557"
                                ></NavigationChevrondown>
                            )}
                        </div>
                    )}
                {state === "default" &&
                    indicator === "number" &&
                    type === "secondary" && (
                        <div id="2290_53558" className="symbol-2290_53558">
                            <div id="2290_53559" className="frame-2290_53559">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53560"
                                        className="instance-2290_53560"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53561"
                                        className="frame-2290_53561"
                                    >
                                        <p
                                            id="2290_53562"
                                            className="paragraph-2290_53562 fill-lightfgsoft-2290_53618-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                )}
                                <p
                                    id="2290_53563"
                                    className="paragraph-2290_53563 fill-lightfgmuted-2290_53623-paragraph text-mobiledescription-m-2290_53615"
                                >
                                    {numberText ?? "23"}
                                </p>
                            </div>
                            {chevron && (
                                <NavigationChevrondown
                                    id="2290_53564"
                                    className="instance-2290_53564"
                                ></NavigationChevrondown>
                            )}
                        </div>
                    )}
                {state === "default" &&
                    indicator === "small counter" &&
                    type === "secondary" && (
                        <div id="2290_53565" className="symbol-2290_53565">
                            <div id="2290_53566" className="frame-2290_53566">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53567"
                                        className="instance-2290_53567"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53568"
                                        className="frame-2290_53568"
                                    >
                                        <p
                                            id="2290_53569"
                                            className="paragraph-2290_53569 fill-lightfgsoft-2290_53618-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div id="2290_53570" className="frame-2290_53570">
                                <Counter
                                    id="2290_53571"
                                    className="instance-2290_53571"
                                    size={"xss (6)"}
                                    variant={"primary"}
                                    disabled={"false"}
                                ></Counter>
                                {chevron && (
                                    <NavigationChevrondown
                                        id="2290_53572"
                                        className="instance-2290_53572"
                                    ></NavigationChevrondown>
                                )}
                            </div>
                        </div>
                    )}
                {state === "default" &&
                    indicator === "large counter" &&
                    type === "secondary" && (
                        <div id="2290_53573" className="symbol-2290_53573">
                            <div id="2290_53574" className="frame-2290_53574">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53575"
                                        className="instance-2290_53575"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53576"
                                        className="frame-2290_53576"
                                    >
                                        <p
                                            id="2290_53577"
                                            className="paragraph-2290_53577 fill-lightfgsoft-2290_53618-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div id="2290_53578" className="frame-2290_53578">
                                <Counter
                                    id="2290_53579"
                                    className="instance-2290_53579"
                                    size={"s (20)"}
                                    variant={"secondary"}
                                    disabled={"false"}
                                    label={`7`}
                                ></Counter>
                                {chevron && (
                                    <NavigationChevrondown
                                        id="2290_53580"
                                        className="instance-2290_53580"
                                    ></NavigationChevrondown>
                                )}
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    indicator === "none" &&
                    type === "secondary" && (
                        <div id="2290_53581" className="symbol-2290_53581">
                            <div id="2290_53582" className="frame-2290_53582">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53583"
                                        className="instance-2290_53583"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53584"
                                        className="frame-2290_53584"
                                    >
                                        <p
                                            id="2290_53585"
                                            className="paragraph-2290_53585 fill-lightfgdisabled-2290_53620-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                )}
                            </div>
                            {chevron && (
                                <NavigationChevrondown
                                    id="2290_53586"
                                    className="instance-2290_53586"
                                ></NavigationChevrondown>
                            )}
                        </div>
                    )}
                {state === "disabled" &&
                    indicator === "number" &&
                    type === "secondary" && (
                        <div id="2290_53587" className="symbol-2290_53587">
                            <div id="2290_53588" className="frame-2290_53588">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53589"
                                        className="instance-2290_53589"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53590"
                                        className="frame-2290_53590"
                                    >
                                        <p
                                            id="2290_53591"
                                            className="paragraph-2290_53591 fill-lightfgdisabled-2290_53620-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                )}
                                <p
                                    id="2290_53592"
                                    className="paragraph-2290_53592 fill-lightfgdisabled-2290_53620-paragraph text-mobiledescription-m-2290_53615"
                                >
                                    {numberText ?? "23"}
                                </p>
                            </div>
                            {chevron && (
                                <NavigationChevrondown
                                    id="2290_53593"
                                    className="instance-2290_53593"
                                ></NavigationChevrondown>
                            )}
                        </div>
                    )}
                {state === "disabled" &&
                    indicator === "small counter" &&
                    type === "secondary" && (
                        <div id="2290_53594" className="symbol-2290_53594">
                            <div id="2290_53595" className="frame-2290_53595">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53596"
                                        className="instance-2290_53596"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53597"
                                        className="frame-2290_53597"
                                    >
                                        <p
                                            id="2290_53598"
                                            className="paragraph-2290_53598 fill-lightfgdisabled-2290_53620-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div id="2290_53599" className="frame-2290_53599">
                                <Counter
                                    id="2290_53600"
                                    className="instance-2290_53600"
                                    size={"xss (6)"}
                                    variant={"primary"}
                                    disabled={"false"}
                                ></Counter>
                                {chevron && (
                                    <NavigationChevrondown
                                        id="2290_53601"
                                        className="instance-2290_53601"
                                    ></NavigationChevrondown>
                                )}
                            </div>
                        </div>
                    )}
                {state === "disabled" &&
                    indicator === "large counter" &&
                    type === "secondary" && (
                        <div id="2290_53602" className="symbol-2290_53602">
                            <div id="2290_53603" className="frame-2290_53603">
                                {icon && (
                                    <DocumentImage
                                        id="2290_53604"
                                        className="instance-2290_53604"
                                    ></DocumentImage>
                                )}
                                {text && (
                                    <div
                                        id="2290_53605"
                                        className="frame-2290_53605"
                                    >
                                        <p
                                            id="2290_53606"
                                            className="paragraph-2290_53606 fill-lightfgdisabled-2290_53620-paragraph text-mobiledescription-l-strong-2290_53613"
                                        >
                                            {tabText ?? "Tab"}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div id="2290_53607" className="frame-2290_53607">
                                <Counter
                                    id="2290_53608"
                                    className="instance-2290_53608"
                                    size={"s (20)"}
                                    variant={"secondary"}
                                    disabled={"true"}
                                ></Counter>
                                {chevron && (
                                    <NavigationChevrondown
                                        id="2290_53609"
                                        className="instance-2290_53609"
                                    ></NavigationChevrondown>
                                )}
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Tabstab;
