// 운동 추가
const exerciseInput=
    document.getElementById('exerciseInput');

const exerciseList=
    document.getElementById('exerciseList');

function addExercise(){

    const li=
        document.createElement("li");

    const deleteBtn =
    document.createElement("button");

    const text = exerciseInput.value;

    if(text.trim()===""){
        alert('운동을 추가해주세요');
        return;
    }

    deleteBtn.onclick = function(){
        li.remove();
    }

    li.textContent = text;

    deleteBtn.textContent = "삭제";
    li.appendChild(deleteBtn);

    exerciseList.appendChild(li);

    exerciseInput.value= "";

}

// 운동 게시판
const recordInput =
    document.getElementById("recordInput");

const postList =
    document.getElementById("postList");

function record(){

    // textarea 내용 읽기
    const text= recordInput.value;

    if(text.trim()===""){
        alert('기록을 입력해주세요');
        return;
    }

    const post = document.createElement("div");

    // post에 내용 읽기
    post.textContent = text;

    postList.appendChild(post);

    recordInput.value= "";
}
