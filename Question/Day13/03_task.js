function pv(){
    
    const files=
    document.getElementById("inputFiles").files;

    const preview =
    document.getElementById("preview");

    for(let i = 0; i < files.length; i++){

        const fr = new FileReader();

        fr.onload= function(){

            console.log("읽기 완료");

            const img=
            document.createElement('img');

            img.src= fr.result;

            img.style.maxWidth= "300px";
            img.style.maxHeight= "300px";
            img.style.border= "4px solid pink";

            preview.appendChild(img);

        };
    
    fr.readAsDataURL(files[i])
    
    }        
}