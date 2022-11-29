let add = document.querySelector("#addbtn");
let textvalue = document.querySelector("#textvalue");
let body = document.querySelector("body");
let s2 = document.querySelector("#s2");

add.addEventListener('click', () => {
    let newvalue = textvalue.value;
    let newspan = document.createElement("span");
    newspan.innerHTML = `
    <span class="text">${newvalue}</span>
    <span class="btns">
            <button class="btn done">done</button>
            <button class="btn remove">remove</button>
            <button class="btn edit">edit</button>
        </span>
    `
    s2.appendChild(newspan);
    textvalue.value = "";
})

s2.addEventListener('click', (event) => {
    if (event.target.classList.contains("remove")) {
        let rtask = event.target.parentNode.parentNode;
        rtask.remove();
    }
    if (event.target.classList.contains("edit")) {
        let etask = event.target.parentNode.previousElementSibling.innerHTML;
        console.log(etask);
        textvalue.value = etask;

    }
    if (event.target.classList.contains("done")) {
        let dtask = event.target.parentNode.previousElementSibling;
        dtask.style.textDecoration = "line-through";
    }
})
