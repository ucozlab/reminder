globalcount = 1;
globalcount2 = 1;
function add(){
    var sheduler = document.querySelector('.sheduler .table');
    var check = document.querySelector(".empty");
    if (check.style.display != "none"){
        check.style.display = "none";
    }
    var text = document.querySelector('.send').value;
    var task = '<div class="table-row"><div class="table-cell">' + globalcount + '</div><div class="table-cell">' + text + '</div><div class="table-cell cell ok"></div><div class="table-cell delete"></div></div>';
    sheduler.innerHTML += task;
    globalcount++;
    globalcount2++;
    addclick();
}
document.querySelector('.button').addEventListener('click',function(){
    add();
});

document.querySelector('input[type=text]').onkeypress = function(event){
    if(event.keyCode == 13){
        add();
    }
};
function addclick(){ //add click functions on every new row;

    [].filter.call(document.querySelectorAll(".cell"), function (el) {
        return this;
    }).forEach(function (el) {
        el.addEventListener('click',function(event){

            function hasClass(element, cls) {
                return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
            }
            if(hasClass(event.target, 'ready')){
                event.target.classList.remove('ready');
                event.target.classList.add('ok');
                event.target.parentNode.classList.remove('activated');
            }
            else{
                event.target.classList.remove('ok');
                event.target.classList.add('ready');
                event.target.parentNode.classList.add('activated');
            }
        });

    });
    [].filter.call(document.querySelectorAll(".delete"), function (el2) {
        return this;
    }).forEach(function (el2) {
        el2.addEventListener('click',function(event){
            event.target.parentNode.parentNode.removeChild(this.parentNode);
            globalcount2--;
            if(globalcount2 == 1){
                document.querySelector(".empty").style.display = "block";
            }
        });

    });

}

//add click on ok button