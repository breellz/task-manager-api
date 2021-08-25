const calcTip = ( total, tip) => {
    const Tip = total * tip
    return total + Tip
}

module.exports = {
    calcTip
}