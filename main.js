globalcount = 1;
function add(){
    var sheduler = document.querySelector('.sheduler .table');
    if(sheduler.textContent == "empty"){
        sheduler.textContent = "";
    }
    var text = document.querySelector('.send').value;
    var task = '<div class="table-row"><div class="table-cell">' + globalcount + '</div><div class="table-cell">' + text + '</div></div><div>';
    sheduler.innerHTML += task;
    globalcount++;
}
document.querySelector('.button').addEventListener('click',function(){
    add();
});


document.querySelector('input[type=text]').onkeypress = function(event){
    if(event.keyCode == 13){
        add();
    }
};