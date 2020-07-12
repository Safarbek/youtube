
const list = document.querySelector("ul");
const inputAdd = document.getElementById("inputAdd")
const addBtn = document.getElementById("addBook")
const seraInput = document.getElementsByTagName('input')[0];

// Удалит кардани китобхо
list.onclick = function(e) {
    var del = e.target;
    if(del.classList.contains('delete')){
        var parent = del.parentElement;
        
        list.removeChild(parent);
    }
}



//Дохил кардани китоби нав

addBtn.onclick = function(){
    if(inputAdd.value != '') {
        var li = document.createElement("li");
        var spanName  = document.createElement('span');
        var spanDelete = document.createElement("span");

        spanName.innerText = inputAdd.value;
        spanDelete.innerText = "Удалить"
        spanDelete.classList.add('delete')
        li.appendChild(spanName)
        li.appendChild(spanDelete)

        list.appendChild(li);

        inputAdd.value = '';
        

    } else{
        var mes = document.getElementById("messege");
        mes.innerText = "Шумо хеч чиз ворид накардед!";
        setTimeout(()=> {mes.innerText = ''}, 3000);
    }
}


//Чустучу кардани китобхо

seraInput.addEventListener('keyup', function(){
    var nomho = list.getElementsByTagName('li');
    for (var i = 0; i < nomho.length; i++) {
        var name = nomho[i].textContent.toLowerCase();
        var serach = seraInput.value.toLowerCase();

        if(name.indexOf(serach) != -1){
            nomho[i].style.display = ''
        } else{
            nomho[i].style.display = 'none'
        }

    }
})

