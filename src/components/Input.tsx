import InputelementsLabel from "@/components/inputelementslabel";
import UsersUser from "@/components/usersuser";
import NavigationClose0 from "@/components/navigationclose0";
import InputelementsHint from "@/components/inputelementshint";
import SecurityKey from "@/components/securitykey";
import UsersUser0 from "@/components/usersuser0";
import NavigationClose from "@/components/navigationclose";
import SecurityPasswordShow0 from "@/components/securitypasswordshow0";
import Cursor from "@/components/cursor";
import SecurityPasswordShow from "@/components/securitypasswordshow";
import "@/styles/Input.css";
interface inputProps {
    label?: boolean;
    hint?: boolean;
    iconLeft?: boolean;
    iconLeft24?: string;
    iconLeft20?: string;
    iconRight?: boolean;
    iconRight24?: string;
    iconRight20?: string;
    iconRightPassword24?: string;
    iconRightPassword20?: string;
    size?: string;
    type?: string;
    state?: string;
    filled?: string;
    id?: string;
    className?: string;
}
const Input = (props: inputProps) => {
    const {
        label = true,
        hint = true,
        iconLeft = false,
        iconLeft24 = "Component_21_1186",
        iconLeft20 = "Component_21_1207",
        iconRight = false,
        iconRight24 = "Component_21_1188",
        iconRight20 = "Component_21_1209",
        iconRightPassword24 = "Component_21_1215",
        iconRightPassword20 = "Component_21_1211",
        size,
        type,
        state,
        filled,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_1841 ${className}`} id={id}>
            <div id="2_1841" className="symbol-2_1841">
                {size === "l" &&
                    type === "text" &&
                    state === "default" &&
                    filled === "false" && (
                        <div id="2_1842" className="symbol-2_1842">
                            {label && (
                                <InputelementsLabel
                                    id="2_1843"
                                    className="instance-2_1843"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1844" className="stroke-wrapper-2_1844">
                                <div className="frame-2_1844 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1844">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_1845"
                                                className="instance-2_1845"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_1846"
                                            className="frame-2_1846"
                                        >
                                            <div className="frame-content-2_1846">
                                                <p
                                                    id="2_1847"
                                                    className="paragraph-2_1847 fill-lightfgmuted-2_2296-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_1848"
                                                className="instance-2_1848"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1844 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1849"
                                    className="instance-2_1849"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "text" &&
                    state === "default" &&
                    filled === "false" && (
                        <div id="2_1850" className="symbol-2_1850">
                            <div id="2_1851" className="stroke-wrapper-2_1851">
                                <div className="frame-2_1851 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1851">
                                        {iconLeft && (
                                            <div
                                                id="2_1852"
                                                className="instance-2_1852"
                                                instance_2_2239={"SecurityKey"}
                                            >
                                                {iconLeft24 ===
                                                    "Component_2_2235" && (
                                                    <SecurityKey id="2_1852"></SecurityKey>
                                                )}
                                                {iconLeft24 ===
                                                    "Component_2_2239" && (
                                                    <UsersUser id="2_1852"></UsersUser>
                                                )}
                                            </div>
                                        )}
                                        <div
                                            id="2_1853"
                                            className="frame-2_1853"
                                        >
                                            <div className="frame-content-2_1853">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_1854"
                                                        className="instance-2_1854"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_1855"
                                                    className="frame-2_1855"
                                                >
                                                    <div className="frame-content-2_1855">
                                                        <p
                                                            id="2_1856"
                                                            className="paragraph-2_1856 fill-lightfgmuted-2_2296-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Placeholder text"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_1857"
                                                className="instance-2_1857"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1851 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1858"
                                    className="instance-2_1858"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "text" &&
                    state === "default" &&
                    filled === "false" && (
                        <div id="2_1859" className="symbol-2_1859">
                            {label && (
                                <InputelementsLabel
                                    id="2_1860"
                                    className="instance-2_1860"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1861" className="stroke-wrapper-2_1861">
                                <div className="frame-2_1861 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1861">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1862"
                                                className="instance-2_1862"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1863"
                                            className="frame-2_1863"
                                        >
                                            <div className="frame-content-2_1863">
                                                <p
                                                    id="2_1864"
                                                    className="paragraph-2_1864 fill-lightfgmuted-2_2296-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose
                                                id="2_1865"
                                                className="instance-2_1865"
                                            ></NavigationClose>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1861 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1866"
                                    className="instance-2_1866"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "text" &&
                    state === "default" &&
                    filled === "true" && (
                        <div id="2_1867" className="symbol-2_1867">
                            {label && (
                                <InputelementsLabel
                                    id="2_1868"
                                    className="instance-2_1868"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1869" className="stroke-wrapper-2_1869">
                                <div className="frame-2_1869 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1869">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1870"
                                                className="instance-2_1870"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1871"
                                            className="frame-2_1871"
                                        >
                                            <div className="frame-content-2_1871">
                                                <p
                                                    id="2_1872"
                                                    className="paragraph-2_1872 fill-lightfgdefault-2_2299-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Text filling"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose
                                                id="2_1873"
                                                className="instance-2_1873"
                                            ></NavigationClose>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1869 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1874"
                                    className="instance-2_1874"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "password" &&
                    state === "default" &&
                    filled === "true" && (
                        <div id="2_1875" className="symbol-2_1875">
                            {label && (
                                <InputelementsLabel
                                    id="2_1876"
                                    className="instance-2_1876"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1877" className="stroke-wrapper-2_1877">
                                <div className="frame-2_1877 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1877">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1878"
                                                className="instance-2_1878"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1879"
                                            className="frame-2_1879"
                                        >
                                            <div className="frame-content-2_1879">
                                                <p
                                                    id="2_1880"
                                                    className="paragraph-2_1880 fill-lightfgdefault-2_2299-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"••••••••••"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow0
                                                id="2_1881"
                                                className="instance-2_1881"
                                            ></SecurityPasswordShow0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1877 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1882"
                                    className="instance-2_1882"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "text" &&
                    state === "disabled" &&
                    filled === "false" && (
                        <div id="2_1883" className="symbol-2_1883">
                            {label && (
                                <InputelementsLabel
                                    id="2_1884"
                                    className="instance-2_1884"
                                    size={"m"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1885" className="stroke-wrapper-2_1885">
                                <div className="frame-2_1885 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-2_1885">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1886"
                                                className="instance-2_1886"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1887"
                                            className="frame-2_1887"
                                        >
                                            <div className="frame-content-2_1887">
                                                <p
                                                    id="2_1888"
                                                    className="paragraph-2_1888 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose
                                                id="2_1889"
                                                className="instance-2_1889"
                                            ></NavigationClose>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1885 stroke-lightneutralcontainer-soft-2_2301"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1890"
                                    className="instance-2_1890"
                                    state={"disabled"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "text" &&
                    state === "disabled" &&
                    filled === "true" && (
                        <div id="2_1891" className="symbol-2_1891">
                            {label && (
                                <InputelementsLabel
                                    id="2_1892"
                                    className="instance-2_1892"
                                    size={"m"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1893" className="stroke-wrapper-2_1893">
                                <div className="frame-2_1893 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-2_1893">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1894"
                                                className="instance-2_1894"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1895"
                                            className="frame-2_1895"
                                        >
                                            <div className="frame-content-2_1895">
                                                <p
                                                    id="2_1896"
                                                    className="paragraph-2_1896 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Text filling"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose
                                                id="2_1897"
                                                className="instance-2_1897"
                                            ></NavigationClose>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1893 stroke-lightneutralcontainer-soft-2_2301"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1898"
                                    className="instance-2_1898"
                                    state={"disabled"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "password" &&
                    state === "disabled" &&
                    filled === "true" && (
                        <div id="2_1899" className="symbol-2_1899">
                            {label && (
                                <InputelementsLabel
                                    id="2_1900"
                                    className="instance-2_1900"
                                    size={"m"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1901" className="stroke-wrapper-2_1901">
                                <div className="frame-2_1901 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-2_1901">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1902"
                                                className="instance-2_1902"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1903"
                                            className="frame-2_1903"
                                        >
                                            <div className="frame-content-2_1903">
                                                <p
                                                    id="2_1904"
                                                    className="paragraph-2_1904 fill-lightfgdisabled-2_2294-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"••••••••••"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow0
                                                id="2_1905"
                                                className="instance-2_1905"
                                            ></SecurityPasswordShow0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1901 stroke-lightneutralcontainer-soft-2_2301"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1906"
                                    className="instance-2_1906"
                                    state={"disabled"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "text" &&
                    state === "valid" &&
                    filled === "false" && (
                        <div id="2_1907" className="symbol-2_1907">
                            {label && (
                                <InputelementsLabel
                                    id="2_1908"
                                    className="instance-2_1908"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1909" className="stroke-wrapper-2_1909">
                                <div className="frame-2_1909 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1909">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1910"
                                                className="instance-2_1910"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1911"
                                            className="frame-2_1911"
                                        >
                                            <div className="frame-content-2_1911">
                                                <p
                                                    id="2_1912"
                                                    className="paragraph-2_1912 fill-lightfgmuted-2_2296-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose
                                                id="2_1913"
                                                className="instance-2_1913"
                                            ></NavigationClose>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1909 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1914"
                                    className="instance-2_1914"
                                    state={"success"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "text" &&
                    state === "valid" &&
                    filled === "true" && (
                        <div id="2_1915" className="symbol-2_1915">
                            {label && (
                                <InputelementsLabel
                                    id="2_1916"
                                    className="instance-2_1916"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1917" className="stroke-wrapper-2_1917">
                                <div className="frame-2_1917 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1917">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1918"
                                                className="instance-2_1918"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1919"
                                            className="frame-2_1919"
                                        >
                                            <div className="frame-content-2_1919">
                                                <p
                                                    id="2_1920"
                                                    className="paragraph-2_1920 fill-lightfgdefault-2_2299-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Text filling"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose
                                                id="2_1921"
                                                className="instance-2_1921"
                                            ></NavigationClose>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1917 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1922"
                                    className="instance-2_1922"
                                    state={"success"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "password" &&
                    state === "valid" &&
                    filled === "true" && (
                        <div id="2_1923" className="symbol-2_1923">
                            {label && (
                                <InputelementsLabel
                                    id="2_1924"
                                    className="instance-2_1924"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1925" className="stroke-wrapper-2_1925">
                                <div className="frame-2_1925 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1925">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1926"
                                                className="instance-2_1926"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1927"
                                            className="frame-2_1927"
                                        >
                                            <div className="frame-content-2_1927">
                                                <p
                                                    id="2_1928"
                                                    className="paragraph-2_1928 fill-lightfgdefault-2_2299-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"••••••••••"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow0
                                                id="2_1929"
                                                className="instance-2_1929"
                                            ></SecurityPasswordShow0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1925 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1930"
                                    className="instance-2_1930"
                                    state={"success"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "text" &&
                    state === "error" &&
                    filled === "false" && (
                        <div id="2_1931" className="symbol-2_1931">
                            {label && (
                                <InputelementsLabel
                                    id="2_1932"
                                    className="instance-2_1932"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1933" className="stroke-wrapper-2_1933">
                                <div className="frame-2_1933 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_1933">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1934"
                                                className="instance-2_1934"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1935"
                                            className="frame-2_1935"
                                        >
                                            <div className="frame-content-2_1935">
                                                <p
                                                    id="2_1936"
                                                    className="paragraph-2_1936 fill-lightfgmuted-2_2296-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose
                                                id="2_1937"
                                                className="instance-2_1937"
                                            ></NavigationClose>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1933 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1938"
                                    className="instance-2_1938"
                                    state={"error"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "text" &&
                    state === "error" &&
                    filled === "true" && (
                        <div id="2_1939" className="symbol-2_1939">
                            {label && (
                                <InputelementsLabel
                                    id="2_1940"
                                    className="instance-2_1940"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1941" className="stroke-wrapper-2_1941">
                                <div className="frame-2_1941 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_1941">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1942"
                                                className="instance-2_1942"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1943"
                                            className="frame-2_1943"
                                        >
                                            <div className="frame-content-2_1943">
                                                <p
                                                    id="2_1944"
                                                    className="paragraph-2_1944 fill-lightfgdefault-2_2299-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Text filling"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose
                                                id="2_1945"
                                                className="instance-2_1945"
                                            ></NavigationClose>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1941 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1946"
                                    className="instance-2_1946"
                                    state={"error"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "password" &&
                    state === "error" &&
                    filled === "true" && (
                        <div id="2_1947" className="symbol-2_1947">
                            {label && (
                                <InputelementsLabel
                                    id="2_1948"
                                    className="instance-2_1948"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1949" className="stroke-wrapper-2_1949">
                                <div className="frame-2_1949 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_1949">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1950"
                                                className="instance-2_1950"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1951"
                                            className="frame-2_1951"
                                        >
                                            <div className="frame-content-2_1951">
                                                <p
                                                    id="2_1952"
                                                    className="paragraph-2_1952 fill-lightfgdefault-2_2299-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"••••••••••"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow0
                                                id="2_1953"
                                                className="instance-2_1953"
                                            ></SecurityPasswordShow0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1949 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1954"
                                    className="instance-2_1954"
                                    state={"error"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "text" &&
                    state === "focus" &&
                    filled === "false" && (
                        <div id="2_1955" className="symbol-2_1955">
                            {label && (
                                <InputelementsLabel
                                    id="2_1956"
                                    className="instance-2_1956"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1957" className="stroke-wrapper-2_1957">
                                <div className="frame-2_1957 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1957">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1958"
                                                className="instance-2_1958"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1959"
                                            className="frame-2_1959"
                                        >
                                            <div className="frame-content-2_1959">
                                                <p
                                                    id="2_1960"
                                                    className="paragraph-2_1960 fill-lightfgmuted-2_2296-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                                <Cursor
                                                    id="2_1961"
                                                    className="instance-2_1961"
                                                ></Cursor>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose
                                                id="2_1962"
                                                className="instance-2_1962"
                                            ></NavigationClose>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1957 stroke-lightinteractiveaccent-2_2293"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1963"
                                    className="instance-2_1963"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "text" &&
                    state === "focus" &&
                    filled === "true" && (
                        <div id="2_1964" className="symbol-2_1964">
                            {label && (
                                <InputelementsLabel
                                    id="2_1965"
                                    className="instance-2_1965"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1966" className="stroke-wrapper-2_1966">
                                <div className="frame-2_1966 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1966">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1967"
                                                className="instance-2_1967"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1968"
                                            className="frame-2_1968"
                                        >
                                            <div className="frame-content-2_1968">
                                                <p
                                                    id="2_1969"
                                                    className="paragraph-2_1969 fill-lightfgdefault-2_2299-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"Text filling"}
                                                </p>
                                                <Cursor
                                                    id="2_1970"
                                                    className="instance-2_1970"
                                                ></Cursor>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose
                                                id="2_1971"
                                                className="instance-2_1971"
                                            ></NavigationClose>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1966 stroke-lightinteractiveaccent-2_2293"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1972"
                                    className="instance-2_1972"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    type === "password" &&
                    state === "focus" &&
                    filled === "true" && (
                        <div id="2_1973" className="symbol-2_1973">
                            {label && (
                                <InputelementsLabel
                                    id="2_1974"
                                    className="instance-2_1974"
                                    size={"m"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1975" className="stroke-wrapper-2_1975">
                                <div className="frame-2_1975 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1975">
                                        {iconLeft && (
                                            <UsersUser0
                                                id="2_1976"
                                                className="instance-2_1976"
                                            ></UsersUser0>
                                        )}
                                        <div
                                            id="2_1977"
                                            className="frame-2_1977"
                                        >
                                            <div className="frame-content-2_1977">
                                                <p
                                                    id="2_1978"
                                                    className="paragraph-2_1978 fill-lightfgdefault-2_2299-paragraph text-mobiledescription-l-2_2288"
                                                >
                                                    {"••••••••••"}
                                                </p>
                                                <Cursor
                                                    id="2_1979"
                                                    className="instance-2_1979"
                                                ></Cursor>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow0
                                                id="2_1980"
                                                className="instance-2_1980"
                                            ></SecurityPasswordShow0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1975 stroke-lightinteractiveaccent-2_2293"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1981"
                                    className="instance-2_1981"
                                    state={"default"}
                                    size={"m"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "text" &&
                    state === "default" &&
                    filled === "true" && (
                        <div id="2_1982" className="symbol-2_1982">
                            {label && (
                                <InputelementsLabel
                                    id="2_1983"
                                    className="instance-2_1983"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_1984" className="stroke-wrapper-2_1984">
                                <div className="frame-2_1984 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1984">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_1985"
                                                className="instance-2_1985"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_1986"
                                            className="frame-2_1986"
                                        >
                                            <div className="frame-content-2_1986">
                                                <p
                                                    id="2_1987"
                                                    className="paragraph-2_1987 fill-lightfgdefault-2_2299-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Text filling"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_1988"
                                                className="instance-2_1988"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1984 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1989"
                                    className="instance-2_1989"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "text" &&
                    state === "default" &&
                    filled === "true" && (
                        <div id="2_1990" className="symbol-2_1990">
                            <div id="2_1991" className="stroke-wrapper-2_1991">
                                <div className="frame-2_1991 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_1991">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_1992"
                                                className="instance-2_1992"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_1993"
                                            className="frame-2_1993"
                                        >
                                            <div className="frame-content-2_1993">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_1994"
                                                        className="instance-2_1994"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_1995"
                                                    className="frame-2_1995"
                                                >
                                                    <div className="frame-content-2_1995">
                                                        <p
                                                            id="2_1996"
                                                            className="paragraph-2_1996 fill-lightfgdefault-2_2299-paragraph text-body-l-2_2284"
                                                        >
                                                            {"Text filling"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_1997"
                                                className="instance-2_1997"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_1991 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_1998"
                                    className="instance-2_1998"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "password" &&
                    state === "default" &&
                    filled === "true" && (
                        <div id="2_1999" className="symbol-2_1999">
                            {label && (
                                <InputelementsLabel
                                    id="2_2000"
                                    className="instance-2_2000"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2001" className="stroke-wrapper-2_2001">
                                <div className="frame-2_2001 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2001">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2002"
                                                className="instance-2_2002"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2003"
                                            className="frame-2_2003"
                                        >
                                            <div className="frame-content-2_2003">
                                                <p
                                                    id="2_2004"
                                                    className="paragraph-2_2004 fill-lightfgdefault-2_2299-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"••••••••••"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow
                                                id="2_2005"
                                                className="instance-2_2005"
                                            ></SecurityPasswordShow>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2001 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2006"
                                    className="instance-2_2006"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "password" &&
                    state === "default" &&
                    filled === "true" && (
                        <div id="2_2007" className="symbol-2_2007">
                            <div id="2_2008" className="stroke-wrapper-2_2008">
                                <div className="frame-2_2008 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2008">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2009"
                                                className="instance-2_2009"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2010"
                                            className="frame-2_2010"
                                        >
                                            <div className="frame-content-2_2010">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2011"
                                                        className="instance-2_2011"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2012"
                                                    className="frame-2_2012"
                                                >
                                                    <div className="frame-content-2_2012">
                                                        <p
                                                            id="2_2013"
                                                            className="paragraph-2_2013 fill-lightfgdefault-2_2299-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"••••••••••"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow
                                                id="2_2014"
                                                className="instance-2_2014"
                                            ></SecurityPasswordShow>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2008 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2015"
                                    className="instance-2_2015"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "text" &&
                    state === "disabled" &&
                    filled === "false" && (
                        <div id="2_2016" className="symbol-2_2016">
                            {label && (
                                <InputelementsLabel
                                    id="2_2017"
                                    className="instance-2_2017"
                                    size={"l"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2018" className="stroke-wrapper-2_2018">
                                <div className="frame-2_2018 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-2_2018">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2019"
                                                className="instance-2_2019"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2020"
                                            className="frame-2_2020"
                                        >
                                            <div className="frame-content-2_2020">
                                                <p
                                                    id="2_2021"
                                                    className="paragraph-2_2021 fill-lightfgdisabled-2_2294-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2022"
                                                className="instance-2_2022"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2018 stroke-lightneutralcontainer-soft-2_2301"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2023"
                                    className="instance-2_2023"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "text" &&
                    state === "disabled" &&
                    filled === "false" && (
                        <div id="2_2024" className="symbol-2_2024">
                            <div id="2_2025" className="stroke-wrapper-2_2025">
                                <div className="frame-2_2025 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-2_2025">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2026"
                                                className="instance-2_2026"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2027"
                                            className="frame-2_2027"
                                        >
                                            <div className="frame-content-2_2027">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2028"
                                                        className="instance-2_2028"
                                                        size={"l"}
                                                        disabled={"true"}
                                                        counter={false}
                                                        icon={true}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2029"
                                                    className="frame-2_2029"
                                                >
                                                    <div className="frame-content-2_2029">
                                                        <p
                                                            id="2_2030"
                                                            className="paragraph-2_2030 fill-lightfgdisabled-2_2294-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Placeholder text"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2031"
                                                className="instance-2_2031"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2025 stroke-lightneutralcontainer-soft-2_2301"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2032"
                                    className="instance-2_2032"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "text" &&
                    state === "disabled" &&
                    filled === "true" && (
                        <div id="2_2033" className="symbol-2_2033">
                            {label && (
                                <InputelementsLabel
                                    id="2_2034"
                                    className="instance-2_2034"
                                    size={"l"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2035" className="stroke-wrapper-2_2035">
                                <div className="frame-2_2035 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-2_2035">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2036"
                                                className="instance-2_2036"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2037"
                                            className="frame-2_2037"
                                        >
                                            <div className="frame-content-2_2037">
                                                <p
                                                    id="2_2038"
                                                    className="paragraph-2_2038 fill-lightfgdisabled-2_2294-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Text filling"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2039"
                                                className="instance-2_2039"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2035 stroke-lightneutralcontainer-soft-2_2301"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2040"
                                    className="instance-2_2040"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "text" &&
                    state === "disabled" &&
                    filled === "true" && (
                        <div id="2_2041" className="symbol-2_2041">
                            <div id="2_2042" className="stroke-wrapper-2_2042">
                                <div className="frame-2_2042 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-2_2042">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2043"
                                                className="instance-2_2043"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2044"
                                            className="frame-2_2044"
                                        >
                                            <div className="frame-content-2_2044">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2045"
                                                        className="instance-2_2045"
                                                        size={"l"}
                                                        disabled={"true"}
                                                        counter={false}
                                                        icon={true}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2046"
                                                    className="frame-2_2046"
                                                >
                                                    <div className="frame-content-2_2046">
                                                        <p
                                                            id="2_2047"
                                                            className="paragraph-2_2047 fill-lightfgdisabled-2_2294-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Text filling"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2048"
                                                className="instance-2_2048"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2042 stroke-lightneutralcontainer-soft-2_2301"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2049"
                                    className="instance-2_2049"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "password" &&
                    state === "disabled" &&
                    filled === "true" && (
                        <div id="2_2050" className="symbol-2_2050">
                            {label && (
                                <InputelementsLabel
                                    id="2_2051"
                                    className="instance-2_2051"
                                    size={"l"}
                                    disabled={"true"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2052" className="stroke-wrapper-2_2052">
                                <div className="frame-2_2052 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-2_2052">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2053"
                                                className="instance-2_2053"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2054"
                                            className="frame-2_2054"
                                        >
                                            <div className="frame-content-2_2054">
                                                <p
                                                    id="2_2055"
                                                    className="paragraph-2_2055 fill-lightfgdisabled-2_2294-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"••••••••••"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow
                                                id="2_2056"
                                                className="instance-2_2056"
                                            ></SecurityPasswordShow>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2052 stroke-lightneutralcontainer-soft-2_2301"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2057"
                                    className="instance-2_2057"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "password" &&
                    state === "disabled" &&
                    filled === "true" && (
                        <div id="2_2058" className="symbol-2_2058">
                            <div id="2_2059" className="stroke-wrapper-2_2059">
                                <div className="frame-2_2059 fill-lightneutralcontainer-muted-2_2295">
                                    <div className="frame-content-2_2059">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2060"
                                                className="instance-2_2060"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2061"
                                            className="frame-2_2061"
                                        >
                                            <div className="frame-content-2_2061">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2062"
                                                        className="instance-2_2062"
                                                        size={"l"}
                                                        disabled={"true"}
                                                        counter={false}
                                                        icon={true}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2063"
                                                    className="frame-2_2063"
                                                >
                                                    <div className="frame-content-2_2063">
                                                        <p
                                                            id="2_2064"
                                                            className="paragraph-2_2064 fill-lightfgdisabled-2_2294-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"••••••••••"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow
                                                id="2_2065"
                                                className="instance-2_2065"
                                            ></SecurityPasswordShow>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2059 stroke-lightneutralcontainer-soft-2_2301"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2066"
                                    className="instance-2_2066"
                                    state={"disabled"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "text" &&
                    state === "focus" &&
                    filled === "false" && (
                        <div id="2_2067" className="symbol-2_2067">
                            {label && (
                                <InputelementsLabel
                                    id="2_2068"
                                    className="instance-2_2068"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2069" className="stroke-wrapper-2_2069">
                                <div className="frame-2_2069 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2069">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2070"
                                                className="instance-2_2070"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2071"
                                            className="frame-2_2071"
                                        >
                                            <div className="frame-content-2_2071">
                                                <p
                                                    id="2_2072"
                                                    className="paragraph-2_2072 fill-lightfgmuted-2_2296-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                                <Cursor
                                                    id="2_2073"
                                                    className="instance-2_2073"
                                                ></Cursor>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2074"
                                                className="instance-2_2074"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2069 stroke-lightinteractiveaccent-2_2293"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2075"
                                    className="instance-2_2075"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "text" &&
                    state === "focus" &&
                    filled === "false" && (
                        <div id="2_2076" className="symbol-2_2076">
                            <div id="2_2077" className="stroke-wrapper-2_2077">
                                <div className="frame-2_2077 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2077">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2078"
                                                className="instance-2_2078"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2079"
                                            className="frame-2_2079"
                                        >
                                            <div className="frame-content-2_2079">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2080"
                                                        className="instance-2_2080"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2081"
                                                    className="frame-2_2081"
                                                >
                                                    <div className="frame-content-2_2081">
                                                        <p
                                                            id="2_2082"
                                                            className="paragraph-2_2082 fill-lightfgmuted-2_2296-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Placeholder text"}
                                                        </p>
                                                        <Cursor
                                                            id="2_2083"
                                                            className="instance-2_2083"
                                                        ></Cursor>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2084"
                                                className="instance-2_2084"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2077 stroke-lightinteractiveaccent-2_2293"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2085"
                                    className="instance-2_2085"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "text" &&
                    state === "focus" &&
                    filled === "true" && (
                        <div id="2_2086" className="symbol-2_2086">
                            {label && (
                                <InputelementsLabel
                                    id="2_2087"
                                    className="instance-2_2087"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2088" className="stroke-wrapper-2_2088">
                                <div className="frame-2_2088 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2088">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2089"
                                                className="instance-2_2089"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2090"
                                            className="frame-2_2090"
                                        >
                                            <div className="frame-content-2_2090">
                                                <p
                                                    id="2_2091"
                                                    className="paragraph-2_2091 fill-lightfgdefault-2_2299-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Text filling"}
                                                </p>
                                                <Cursor
                                                    id="2_2092"
                                                    className="instance-2_2092"
                                                ></Cursor>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2093"
                                                className="instance-2_2093"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2088 stroke-lightinteractiveaccent-2_2293"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2094"
                                    className="instance-2_2094"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "text" &&
                    state === "focus" &&
                    filled === "true" && (
                        <div id="2_2095" className="symbol-2_2095">
                            <div id="2_2096" className="stroke-wrapper-2_2096">
                                <div className="frame-2_2096 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2096">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2097"
                                                className="instance-2_2097"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2098"
                                            className="frame-2_2098"
                                        >
                                            <div className="frame-content-2_2098">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2099"
                                                        className="instance-2_2099"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2100"
                                                    className="frame-2_2100"
                                                >
                                                    <div className="frame-content-2_2100">
                                                        <p
                                                            id="2_2101"
                                                            className="paragraph-2_2101 fill-lightfgdefault-2_2299-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Text filling"}
                                                        </p>
                                                        <Cursor
                                                            id="2_2102"
                                                            className="instance-2_2102"
                                                        ></Cursor>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2103"
                                                className="instance-2_2103"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2096 stroke-lightinteractiveaccent-2_2293"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2104"
                                    className="instance-2_2104"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "password" &&
                    state === "focus" &&
                    filled === "true" && (
                        <div id="2_2105" className="symbol-2_2105">
                            {label && (
                                <InputelementsLabel
                                    id="2_2106"
                                    className="instance-2_2106"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2107" className="stroke-wrapper-2_2107">
                                <div className="frame-2_2107 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2107">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2108"
                                                className="instance-2_2108"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2109"
                                            className="frame-2_2109"
                                        >
                                            <div className="frame-content-2_2109">
                                                <p
                                                    id="2_2110"
                                                    className="paragraph-2_2110 fill-lightfgdefault-2_2299-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"••••••••••"}
                                                </p>
                                                <Cursor
                                                    id="2_2111"
                                                    className="instance-2_2111"
                                                ></Cursor>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow
                                                id="2_2112"
                                                className="instance-2_2112"
                                            ></SecurityPasswordShow>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2107 stroke-lightinteractiveaccent-2_2293"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2113"
                                    className="instance-2_2113"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "password" &&
                    state === "focus" &&
                    filled === "true" && (
                        <div id="2_2114" className="symbol-2_2114">
                            <div id="2_2115" className="stroke-wrapper-2_2115">
                                <div className="frame-2_2115 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2115">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2116"
                                                className="instance-2_2116"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2117"
                                            className="frame-2_2117"
                                        >
                                            <div className="frame-content-2_2117">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2118"
                                                        className="instance-2_2118"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2119"
                                                    className="frame-2_2119"
                                                >
                                                    <div className="frame-content-2_2119">
                                                        <p
                                                            id="2_2120"
                                                            className="paragraph-2_2120 fill-lightfgdefault-2_2299-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"••••••••••"}
                                                        </p>
                                                        <Cursor
                                                            id="2_2121"
                                                            className="instance-2_2121"
                                                        ></Cursor>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow
                                                id="2_2122"
                                                className="instance-2_2122"
                                            ></SecurityPasswordShow>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2115 stroke-lightinteractiveaccent-2_2293"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2123"
                                    className="instance-2_2123"
                                    state={"default"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "text" &&
                    state === "error" &&
                    filled === "false" && (
                        <div id="2_2124" className="symbol-2_2124">
                            {label && (
                                <InputelementsLabel
                                    id="2_2125"
                                    className="instance-2_2125"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2126" className="stroke-wrapper-2_2126">
                                <div className="frame-2_2126 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_2126">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2127"
                                                className="instance-2_2127"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2128"
                                            className="frame-2_2128"
                                        >
                                            <div className="frame-content-2_2128">
                                                <p
                                                    id="2_2129"
                                                    className="paragraph-2_2129 fill-lightfgmuted-2_2296-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2130"
                                                className="instance-2_2130"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2126 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2131"
                                    className="instance-2_2131"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "text" &&
                    state === "error" &&
                    filled === "false" && (
                        <div id="2_2132" className="symbol-2_2132">
                            <div id="2_2133" className="stroke-wrapper-2_2133">
                                <div className="frame-2_2133 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_2133">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2134"
                                                className="instance-2_2134"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2135"
                                            className="frame-2_2135"
                                        >
                                            <div className="frame-content-2_2135">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2136"
                                                        className="instance-2_2136"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2137"
                                                    className="frame-2_2137"
                                                >
                                                    <div className="frame-content-2_2137">
                                                        <p
                                                            id="2_2138"
                                                            className="paragraph-2_2138 fill-lightfgmuted-2_2296-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Placeholder text"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2139"
                                                className="instance-2_2139"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2133 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2140"
                                    className="instance-2_2140"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "text" &&
                    state === "error" &&
                    filled === "true" && (
                        <div id="2_2141" className="symbol-2_2141">
                            {label && (
                                <InputelementsLabel
                                    id="2_2142"
                                    className="instance-2_2142"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2143" className="stroke-wrapper-2_2143">
                                <div className="frame-2_2143 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_2143">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2144"
                                                className="instance-2_2144"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2145"
                                            className="frame-2_2145"
                                        >
                                            <div className="frame-content-2_2145">
                                                <p
                                                    id="2_2146"
                                                    className="paragraph-2_2146 fill-lightfgdefault-2_2299-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Text filling"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2147"
                                                className="instance-2_2147"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2143 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2148"
                                    className="instance-2_2148"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "text" &&
                    state === "error" &&
                    filled === "true" && (
                        <div id="2_2149" className="symbol-2_2149">
                            <div id="2_2150" className="stroke-wrapper-2_2150">
                                <div className="frame-2_2150 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_2150">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2151"
                                                className="instance-2_2151"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2152"
                                            className="frame-2_2152"
                                        >
                                            <div className="frame-content-2_2152">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2153"
                                                        className="instance-2_2153"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2154"
                                                    className="frame-2_2154"
                                                >
                                                    <div className="frame-content-2_2154">
                                                        <p
                                                            id="2_2155"
                                                            className="paragraph-2_2155 fill-lightfgdefault-2_2299-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Text filling"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2156"
                                                className="instance-2_2156"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2150 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2157"
                                    className="instance-2_2157"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "password" &&
                    state === "error" &&
                    filled === "true" && (
                        <div id="2_2158" className="symbol-2_2158">
                            {label && (
                                <InputelementsLabel
                                    id="2_2159"
                                    className="instance-2_2159"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2160" className="stroke-wrapper-2_2160">
                                <div className="frame-2_2160 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_2160">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2161"
                                                className="instance-2_2161"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2162"
                                            className="frame-2_2162"
                                        >
                                            <div className="frame-content-2_2162">
                                                <p
                                                    id="2_2163"
                                                    className="paragraph-2_2163 fill-lightfgdefault-2_2299-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"••••••••••"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow
                                                id="2_2164"
                                                className="instance-2_2164"
                                            ></SecurityPasswordShow>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2160 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2165"
                                    className="instance-2_2165"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "password" &&
                    state === "error" &&
                    filled === "true" && (
                        <div id="2_2166" className="symbol-2_2166">
                            <div id="2_2167" className="stroke-wrapper-2_2167">
                                <div className="frame-2_2167 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_2167">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2168"
                                                className="instance-2_2168"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2169"
                                            className="frame-2_2169"
                                        >
                                            <div className="frame-content-2_2169">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2170"
                                                        className="instance-2_2170"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2171"
                                                    className="frame-2_2171"
                                                >
                                                    <div className="frame-content-2_2171">
                                                        <p
                                                            id="2_2172"
                                                            className="paragraph-2_2172 fill-lightfgdefault-2_2299-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"••••••••••"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow
                                                id="2_2173"
                                                className="instance-2_2173"
                                            ></SecurityPasswordShow>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2167 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2174"
                                    className="instance-2_2174"
                                    state={"error"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "text" &&
                    state === "valid" &&
                    filled === "false" && (
                        <div id="2_2175" className="symbol-2_2175">
                            {label && (
                                <InputelementsLabel
                                    id="2_2176"
                                    className="instance-2_2176"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2177" className="stroke-wrapper-2_2177">
                                <div className="frame-2_2177 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2177">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2178"
                                                className="instance-2_2178"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2179"
                                            className="frame-2_2179"
                                        >
                                            <div className="frame-content-2_2179">
                                                <p
                                                    id="2_2180"
                                                    className="paragraph-2_2180 fill-lightfgmuted-2_2296-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Placeholder text"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2181"
                                                className="instance-2_2181"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2177 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2182"
                                    className="instance-2_2182"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "text" &&
                    state === "valid" &&
                    filled === "false" && (
                        <div id="2_2183" className="symbol-2_2183">
                            <div id="2_2184" className="stroke-wrapper-2_2184">
                                <div className="frame-2_2184 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2184">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2185"
                                                className="instance-2_2185"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2186"
                                            className="frame-2_2186"
                                        >
                                            <div className="frame-content-2_2186">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2187"
                                                        className="instance-2_2187"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2188"
                                                    className="frame-2_2188"
                                                >
                                                    <div className="frame-content-2_2188">
                                                        <p
                                                            id="2_2189"
                                                            className="paragraph-2_2189 fill-lightfgmuted-2_2296-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Placeholder text"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2190"
                                                className="instance-2_2190"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2184 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2191"
                                    className="instance-2_2191"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "text" &&
                    state === "valid" &&
                    filled === "true" && (
                        <div id="2_2192" className="symbol-2_2192">
                            {label && (
                                <InputelementsLabel
                                    id="2_2193"
                                    className="instance-2_2193"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2194" className="stroke-wrapper-2_2194">
                                <div className="frame-2_2194 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2194">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2195"
                                                className="instance-2_2195"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2196"
                                            className="frame-2_2196"
                                        >
                                            <div className="frame-content-2_2196">
                                                <p
                                                    id="2_2197"
                                                    className="paragraph-2_2197 fill-lightfgdefault-2_2299-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"Text filling"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2198"
                                                className="instance-2_2198"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2194 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2199"
                                    className="instance-2_2199"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "text" &&
                    state === "valid" &&
                    filled === "true" && (
                        <div id="2_2200" className="symbol-2_2200">
                            <div id="2_2201" className="stroke-wrapper-2_2201">
                                <div className="frame-2_2201 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2201">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2202"
                                                className="instance-2_2202"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2203"
                                            className="frame-2_2203"
                                        >
                                            <div className="frame-content-2_2203">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2204"
                                                        className="instance-2_2204"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2205"
                                                    className="frame-2_2205"
                                                >
                                                    <div className="frame-content-2_2205">
                                                        <p
                                                            id="2_2206"
                                                            className="paragraph-2_2206 fill-lightfgdefault-2_2299-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"Text filling"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <NavigationClose0
                                                id="2_2207"
                                                className="instance-2_2207"
                                            ></NavigationClose0>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2201 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2208"
                                    className="instance-2_2208"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    type === "password" &&
                    state === "valid" &&
                    filled === "true" && (
                        <div id="2_2209" className="symbol-2_2209">
                            {label && (
                                <InputelementsLabel
                                    id="2_2210"
                                    className="instance-2_2210"
                                    size={"l"}
                                    disabled={"false"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></InputelementsLabel>
                            )}
                            <div id="2_2211" className="stroke-wrapper-2_2211">
                                <div className="frame-2_2211 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2211">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2212"
                                                className="instance-2_2212"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2213"
                                            className="frame-2_2213"
                                        >
                                            <div className="frame-content-2_2213">
                                                <p
                                                    id="2_2214"
                                                    className="paragraph-2_2214 fill-lightfgdefault-2_2299-paragraph text-mobilebody-m-2_2287"
                                                >
                                                    {"••••••••••"}
                                                </p>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow
                                                id="2_2215"
                                                className="instance-2_2215"
                                            ></SecurityPasswordShow>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2211 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2216"
                                    className="instance-2_2216"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    type === "password" &&
                    state === "valid" &&
                    filled === "true" && (
                        <div id="2_2217" className="symbol-2_2217">
                            <div id="2_2218" className="stroke-wrapper-2_2218">
                                <div className="frame-2_2218 fill-lightneutralcontainer-soft-2_2301">
                                    <div className="frame-content-2_2218">
                                        {iconLeft && (
                                            <UsersUser
                                                id="2_2219"
                                                className="instance-2_2219"
                                            ></UsersUser>
                                        )}
                                        <div
                                            id="2_2220"
                                            className="frame-2_2220"
                                        >
                                            <div className="frame-content-2_2220">
                                                {label && (
                                                    <InputelementsLabel
                                                        id="2_2221"
                                                        className="instance-2_2221"
                                                        size={"l"}
                                                        disabled={"false"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></InputelementsLabel>
                                                )}
                                                <div
                                                    id="2_2222"
                                                    className="frame-2_2222"
                                                >
                                                    <div className="frame-content-2_2222">
                                                        <p
                                                            id="2_2223"
                                                            className="paragraph-2_2223 fill-lightfgdefault-2_2299-paragraph text-mobilebody-l-2_2286"
                                                        >
                                                            {"••••••••••"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {iconRight && (
                                            <SecurityPasswordShow
                                                id="2_2224"
                                                className="instance-2_2224"
                                            ></SecurityPasswordShow>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-2_2218 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <InputelementsHint
                                    id="2_2225"
                                    className="instance-2_2225"
                                    state={"success"}
                                    size={"l"}
                                ></InputelementsHint>
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Input;
