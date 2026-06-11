function pv(){
    
    var files=
    document.getElementById("inputFiles").files;

    const preview =
    document.getElementById("preview");

    for(let i = 0; i < files.length; i++){

        preview.querySelectorAll("img")

        let fr=
        new FileReader();

        fr.onload= function(){

            console.log(files[i].name);

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