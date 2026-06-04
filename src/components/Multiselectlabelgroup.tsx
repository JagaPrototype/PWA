import Tag from "@/components/tag";
import "@/styles/Multiselectlabelgroup.css";
interface multiselectlabelgroupProps {
    label3?: boolean;
    label4?: boolean;
    label5?: boolean;
    label6?: boolean;
    disabled?: string;
    id?: string;
    className?: string;
    text_4_31643_4_30332?: string;
    text_4_31644_4_30332?: string;
    text_4_31645_4_30332?: string;
    text_4_31646_4_30332?: string;
    text_4_31647_4_30332?: string;
    text_4_31648_4_30332?: string;
    text_4_31650_4_30392?: string;
    text_4_31651_4_30392?: string;
    text_4_31652_4_30392?: string;
    text_4_31653_4_30392?: string;
    text_4_31654_4_30392?: string;
    text_4_31655_4_30392?: string;
}
const Multiselectlabelgroup = (props: multiselectlabelgroupProps) => {
    const {
        label3 = true,
        label4 = true,
        label5 = false,
        label6 = false,
        disabled,
        id,
        className = "",
        text_4_31643_4_30332,
        text_4_31644_4_30332,
        text_4_31645_4_30332,
        text_4_31646_4_30332,
        text_4_31647_4_30332,
        text_4_31648_4_30332,
        text_4_31650_4_30392,
        text_4_31651_4_30392,
        text_4_31652_4_30392,
        text_4_31653_4_30392,
        text_4_31654_4_30392,
        text_4_31655_4_30392
    } = props;

    return (
        <div className={`component-4_31641 ${className}`} id={id}>
            <div id="4_31641" className="symbol-4_31641">
                {disabled === "false" && (
                    <div id="4_31642" className="symbol-4_31642">
                        <Tag
                            id="4_31643"
                            className="instance-4_31643"
                            size={"xs"}
                            state={"default"}
                            selected={"false"}
                            iconRight={false}
                            iconLeft={false}
                            text_4_31643_4_30332={text_4_31643_4_30332}
                        ></Tag>
                        <Tag
                            id="4_31644"
                            className="instance-4_31644"
                            size={"xs"}
                            state={"default"}
                            selected={"false"}
                            iconRight={false}
                            iconLeft={false}
                            text_4_31644_4_30332={text_4_31644_4_30332}
                        ></Tag>
                        {label3 && (
                            <Tag
                                id="4_31645"
                                className="instance-4_31645"
                                size={"xs"}
                                state={"default"}
                                selected={"false"}
                                iconRight={false}
                                iconLeft={false}
                                text_4_31645_4_30332={text_4_31645_4_30332}
                            ></Tag>
                        )}
                        {label4 && (
                            <Tag
                                id="4_31646"
                                className="instance-4_31646"
                                size={"xs"}
                                state={"default"}
                                selected={"false"}
                                iconRight={false}
                                iconLeft={false}
                                text_4_31646_4_30332={text_4_31646_4_30332}
                            ></Tag>
                        )}
                        {label5 && (
                            <Tag
                                id="4_31647"
                                className="instance-4_31647"
                                size={"xs"}
                                state={"default"}
                                selected={"false"}
                                iconRight={false}
                                iconLeft={false}
                                text_4_31647_4_30332={text_4_31647_4_30332}
                            ></Tag>
                        )}
                        {label6 && (
                            <Tag
                                id="4_31648"
                                className="instance-4_31648"
                                size={"xs"}
                                state={"default"}
                                selected={"false"}
                                iconRight={false}
                                iconLeft={false}
                                text_4_31648_4_30332={text_4_31648_4_30332}
                            ></Tag>
                        )}
                    </div>
                )}
                {disabled === "true" && (
                    <div id="4_31649" className="symbol-4_31649">
                        <Tag
                            id="4_31650"
                            className="instance-4_31650"
                            size={"xs"}
                            state={"disabled"}
                            selected={"false"}
                            iconRight={false}
                            iconLeft={false}
                            text_4_31650_4_30392={text_4_31650_4_30392}
                        ></Tag>
                        <Tag
                            id="4_31651"
                            className="instance-4_31651"
                            size={"xs"}
                            state={"disabled"}
                            selected={"false"}
                            iconRight={false}
                            iconLeft={false}
                            text_4_31651_4_30392={text_4_31651_4_30392}
                        ></Tag>
                        {label3 && (
                            <Tag
                                id="4_31652"
                                className="instance-4_31652"
                                size={"xs"}
                                state={"disabled"}
                                selected={"false"}
                                iconRight={false}
                                iconLeft={false}
                                text_4_31652_4_30392={text_4_31652_4_30392}
                            ></Tag>
                        )}
                        {label4 && (
                            <Tag
                                id="4_31653"
                                className="instance-4_31653"
                                size={"xs"}
                                state={"disabled"}
                                selected={"false"}
                                iconRight={false}
                                iconLeft={false}
                                text_4_31653_4_30392={text_4_31653_4_30392}
                            ></Tag>
                        )}
                        {label5 && (
                            <Tag
                                id="4_31654"
                                className="instance-4_31654"
                                size={"xs"}
                                state={"disabled"}
                                selected={"false"}
                                iconRight={false}
                                iconLeft={false}
                                text_4_31654_4_30392={text_4_31654_4_30392}
                            ></Tag>
                        )}
                        {label6 && (
                            <Tag
                                id="4_31655"
                                className="instance-4_31655"
                                size={"xs"}
                                state={"disabled"}
                                selected={"false"}
                                iconRight={false}
                                iconLeft={false}
                                text_4_31655_4_30392={text_4_31655_4_30392}
                            ></Tag>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Multiselectlabelgroup;
