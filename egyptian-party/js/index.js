

$('#main span').click(function(){
    currentMargin=$('#main').css('margin-left')
    if(currentMargin=='0px'){
        $('#main').animate({'marginLeft':'250px'},'1000')
        $('.sidenav').css({'width':'250px'})
    }
    else{
        $('#main').animate({'marginLeft':'0px'},'1000')
        $('.sidenav').css({'width':'0px'})
    }
    
})

$('.closebtn').click(function(){
    $('#main').animate({'marginLeft':'0px'},'1000')
    $('.sidenav').css({'width':'0px'})
})

$('#singers h3').ready(function(){
    $('#singers div:first').css('display','block')
    
    $('#singers h3').click(function(){
        if($(this).next().css('display')=='none'){
            $(this).siblings('#singers div').slideUp(500);
            $(this).next().slideDown(500);
        }
        else{
            $(this).siblings('#singers div').slideUp(500);
        }
    })
})

function countDown(){
    var eventDate = new Date(2022, 12, 28);
    var now = new Date().getTime();

    var distance = eventDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML=`<h3>${days} D</h3>`
  document.getElementById('hours').innerHTML=`<h3>${hours} H</h3>`
  document.getElementById('minutes').innerHTML=`<h3>${minutes} M</h3>`
  document.getElementById('seconds').innerHTML=`<h3>${seconds} S</h3>`

  setTimeout(countDown,1000)

}

countDown()

let max=100
function countValues(){
    let a=document.querySelectorAll('textarea')
    let numOfChars=document.getElementById('char')
    $(a).keyup(function(){
        temp=max-this.value.length
        if(temp>=0){
            numOfChars.innerHTML=`${temp}`
        }
        else{
            numOfChars.innerHTML='your available character finished'
        }
    })
}

countValues()
