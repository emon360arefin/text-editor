document.querySelectorAll('[data-group = "1"]').forEach(
    function event(item) {
        let id = item.getAttribute('id');
        item.addEventListener('click', function () {
            item.classList.toggle('bg-slate-300');
            let text = document.querySelector('#text');
            text.classList.toggle(id);
        })
    }
)


function align(cl) {
    document.querySelector('#' + cl).addEventListener('click', function () {
        let arr = ['text-left', 'text-center', 'text-right'];
        arr.splice(arr.indexOf(cl), 1);

        let style = document.querySelector('#' + cl);
        let style1 = document.querySelector('#' + arr[0]);
        let style2 = document.querySelector('#' + arr[1]);
        let text = document.querySelector('#text');

        if (style.classList.contains('bg-slate-300') == false) {
            style1.classList.remove('bg-slate-300');
            style2.classList.remove('bg-slate-300');
            style.classList.add('bg-slate-300');
            text.classList.remove(arr[0]);
            text.classList.remove(arr[1]);
            text.classList.add(cl);
        }
    })
}

align('text-left');
align('text-center');
align('text-right');

document.querySelector('#color').addEventListener('change', function () {
    let text = document.querySelector('#text');
    let color = document.querySelector('#color');
    let colorValue = color.value;
    text.style.color = colorValue;
    console.log(colorValue);
})

let text = document.querySelector('#text');
let number = document.querySelector('#number');
let numberValue = number.value;
text.style.fontSize = numberValue + 'px';

document.querySelector('#number').addEventListener('click', function () {

    let text = document.querySelector('#text');
    let number = document.querySelector('#number');
    let numberValue = number.value;
    text.style.fontSize = numberValue + 'px';
})


function hasan(x,y) {
    let result = (100 * (100-y) / (100 + x));
    return result;
}

console.log(hasan(100,100));

