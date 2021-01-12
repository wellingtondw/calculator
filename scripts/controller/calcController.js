 class CalcController {

    constructor() {
        this._displayCalc = '0'
        this._currentDate

        this.initialize()
    }

    initialize() {
        
        let displayCalcEl = document.querySelector('#display')
        let dateEl = document.querySelector('#date')
        let timeEl = document.querySelector('#time')

        displayCalcEl.innerHTML = 0
        dateEl.innerHTML = '10/10/2020'
        timeEl.innerHTML = '00:00'
    }

    get displayCalc() {
        return this._displayCalc
    }

    set displayCalc(value) {
        this._displayCalc = value
    }

    get currentDate() {
        return this._currentDate
    }

    set currentDate(value) {
        this._currentDate = value
    }
}

export default CalcController