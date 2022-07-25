module.exports = function reverse(n) {
    let arr = String(n).replace("-", "").split("").reverse();

    return Number(arr.join(""));
};
