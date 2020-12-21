/**
 * 验证传入值是否有效
 * @param v
 * @return {Boolean}
 */
export function isUndef(v) {
    return v === undefined || v === null;
}

/**
 * 判断传入值的类型
 * @param obj
 * getType() // Undefined
 * getType(null) // Null
 * getType(NaN) // Number
 */
export function isCheckType(obj){
    return Object.prototype.toString.call(obj).slice(8, -1)
}
