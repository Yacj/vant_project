/**
 * cookie的设置，获取，删除
 */
export const cookie = {
    setCookie(name, cValue, exDays) {
        const d = new Date();
        d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toGMTString();
        document.cookie = name + "=" + cValue + "; " + expires;
    },
    getCookie(name) {
        const cookie = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            const c = ca[i].trim();
            if (c.indexOf(cookie) === 0) {
                return c.substring(cookie.length, c.length);
            }
        }
        return "";
    },
    delCookie(name) {
        const exp = new Date();
        exp.setTime(exp.getTime() - 1);
        const getCookie = this.getCookie(name);
        if (getCookie != null)
            document.cookie = name + "=" + getCookie + ";expires=" + exp.toGMTString();
    }
}
