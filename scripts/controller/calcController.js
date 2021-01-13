 class CalcController {

    constructor() {
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#date')
        this._timeEl = document.querySelector('#time')
        this._currentDate
        this._operation = []

        this.initialize()
    }

    initialize() {
        this.setDisplayDateTime()
        setInterval(() => {
            this.setDisplayDateTime()           
        }, 1000)

        this.initButtonsEvents()
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }

    clearAll() {
        this._operation = []
    }

    cancelEntry() {
        this._operation.pop()
    }

    addOperation(value) {
        this._operation.push(value)

        console.log(this._operation)
    }

    setError() {
        this.displayCalc = 'Error'
    }

    execBtn(value) {
        switch(value) {
            case 'ac':
                this.clearAll
            break
            case 'ce':
                this.cancelEntry
            break
            case 'sum':
                this.cancelEntry
            break
            case 'subtraction':
                this.cancelEntry
            break
            case 'multiplication':
                this.cancelEntry
            break
            case 'division':
                this.cancelEntry
            break
            case 'percent':
                this.cancelEntry
            break
            case 'equal':
                this.cancelEntry
            break
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
            break
            default: 
                this.setError()


            
        }
    }

    initButtonsEvents() {
        const buttons = document.querySelectorAll('#buttons > g, #parts > g')

        buttons.forEach(btn => {
            this.addEventListenerAll(btn, 'click drag', e => {
                const btnText  = btn.className.baseVal.replace('btn-', '');
                this.execBtn(btnText);
            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer'
            })
        })

    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }



    get displayTime() {
        return this._timeEl.innerHTML
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value
    }

    get displayDate() {
        return this._dateEl.innerHTML
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value
    }

    get currentDate() {
        return new Date()
    }

    set currentDate(value) {
        this._currentDate = value
    }
}

export default CalcController