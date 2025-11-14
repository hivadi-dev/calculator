const inp = document.querySelectorAll('input')
const sum = document.getElementById('sum')

let op = ''
function _op(tempop) {
    op = tempop
    sum.value = op
}

function _sum() {
    let val1 = inp[0].value
    let val2 = inp[1].value

    if (val1 == '' || val2 == '') {
        alert('هردو عدد وارد شود')
        return
    }
    let x = +val1
    let y = +val2
    if (op === '/' && y === 0) {
        alert('تقسیم بر صفر مجاز نیست')
        return
    }
    if (isNaN(x) || isNaN(y)) {
        alert('لطفا فقط عدد وارد کنید')
        return
    }
    if (!op) {
        alert('لطفا یک عملگر انتخاب کنید')
    }

    switch (op) {
        case '+': x += y; break;
        case '-': x -= y; break;
        case '*': x *= y; break;
        case '/': x /= y; break;
        default: alert('لطفا یک عملگر انتخاب کنید')
            return
    }

    sum.value = x
}

function clearall() {
    num1.value = ''
    num2.value = ''
    sum.innerText = ''
    op = ''
}


////////////////////


const _main = document.getElementById('container')
const click = document.querySelector('.header>span')
let mode = true
function toggleState() {
    if (mode) {
        _main.classList.add('light')
        click.innerHTML = '<i class="ri-moon-fill"></i>'

    } else {
        _main.classList.remove('light')
        click.innerHTML = '<i class="ri-sun-fill"></i>'
    }
    mode = !mode
}