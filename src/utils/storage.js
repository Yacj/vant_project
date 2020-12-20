/**
 * localStorage的设置，获取，删除
 */
export let storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    remove(key) {
        localStorage.removeItem(key)
    }
}
