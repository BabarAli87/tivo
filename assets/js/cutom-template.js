const div = document.getElementById('wraper-form');
let output = document.getElementById("form-count");
let output1 = document.getElementById("form-count1");
let tagBtn = document.getElementById("tag-btn");
function duplicateForm() {
   
    console.log(output)
    let result = Number(output.innerText) + 1;
    output.innerText = result;
    if(result<=10){
        let buttons = div.getElementsByClassName('add-temp');
        let firstBtn=buttons[0];
        let btnclone=firstBtn.cloneNode(true)
        let forms = div.getElementsByClassName('temp-form');
        let firstForm = forms[0];
        let formClone = firstForm.cloneNode(true);
        div.appendChild(formClone);
        div.appendChild(btnclone);
    }
    if(result == 10){
        alert("error")
        tagBtn.style.display = "block";
    }
   
  }
function duplicateTag() {
   
    console.log(output)
    let result = Number(output1.innerText) + 1;
    output1.innerText = result;
    if(result<=10){
        let buttons = div.getElementsByClassName('add-tag');
        let firstBtn=buttons[0];
        let btnclone=firstBtn.cloneNode(true)
        let forms = div.getElementsByClassName('temp-form');
        let firstForm = forms[1];
        let formClone = firstForm.cloneNode(true);
        div.appendChild(formClone);
        div.appendChild(btnclone);
    }
    if(result == 10){
        alert("error")
        tagBtn.style.display = "block";
    }
   
  }