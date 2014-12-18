globalcount = 1;
function add(){
    var sheduler = document.querySelector('.sheduler .table');
    if(sheduler.textContent == "empty"){
        sheduler.textContent = "";
    }
    var text = document.querySelector('.send').value;
    var task = '<div class="table-row"><div class="table-cell">' + globalcount + '</div><div class="table-cell">' + text + '</div><div class="table-cell ok"></div><div class="table-cell delete"></div></div>';
    sheduler.innerHTML += task;
    globalcount++;
    document.querySelector(".ok").addEventListener('click',function(event){
        event.target.classList.remove('ok');
        event.target.classList.add('ready');
        event.target.parentNode.classList.add('activated');
    });
}
document.querySelector('.button').addEventListener('click',function(){
    add();
});

document.querySelector('input[type=text]').onkeypress = function(event){
    if(event.keyCode == 13){
        add();
    }
};
