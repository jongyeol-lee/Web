function addEc(){

    const input=
    document.getElementById('exerciseInput');

    const list=
    document.getElementById('exerciseList');

    const li=
    document.createElement("li");

    li.textContent=
    input.value;

    list.appendChild(li);

    input.value= "";

}
