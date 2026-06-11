function addEc(){

    const input=
    document.getElementById('exerciseInput');

    const list=
    document.getElementById('exerciseList');

    const li=
    document.createElement("li");

    const text=
    input.value;

    li.textContent= text;

    if(text===""){
        alert('운동을 추가해주세요');
        return;
    }

    list.appendChild(li);

    input.value= "";

}
