import Cookies from "js-cookie"
const cookieSet = (name: string, value: string) => {
    Cookies.set(name, value);
}

export default cookieSet