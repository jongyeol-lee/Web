// 운동 추가
function addEc(){

    const input=
    document.getElementById('exerciseInput');

    const list=
    document.getElementById('exerciseList');

    const li=
    document.createElement("li");

    const text = input.value;

    li.textContent = text;

    if(text===""){
        alert('운동을 추가해주세요');
        return;
    }

    list.appendChild(li);

    input.value= "";

}

// 운동 게시판
function record(){

    const textarea =
    document.getElementById("recordInput");

    const postList =
    document.getElementById("postList");

    // textarea 내용 읽기
    const text= textarea.value;

    if(text.trim()===""){
        alert('기록을 입력해주세요');
        return;
    }

    const post = document.createElement("div");

    // post에 내용 읽기
    post.textContent = text;

    postList.appendChild(post);

    textarea.value= "";
}
