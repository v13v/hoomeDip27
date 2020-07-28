const calc = data => {
    const calcResult = document.getElementById('calc-result');
    const startingPrice = (data.type) ? 10000 : 15000
    let sum = startingPrice

    const checkBottom = () => {
        let res;
        if(data.bottom) {
            if(data.type) {
                res = 1000
            } else {
                res = 2000
            }
        } else {
            res = 0
        }
        return res
    }

    checkBottom()

    sum = startingPrice + (startingPrice * data.diam) + (startingPrice * data.diamCount) + checkBottom()

    calcResult.value = sum
}
export default calc