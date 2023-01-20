let wWidth = $('.aa').innerWidth();
$('.aa').animate({'left': -wWidth},0);

$('.yy').click(function(){
    if($('.aa').css('left')!='0px'){
        $('.aa').animate({'left':'0'},1000); 
    }else{
    let wWidth = $('.aa').innerWidth();
    $('.aa').animate({'left': -wWidth},1000);
    }
})




$('.ss').click(
    function(){
        
        $(this).next().slideToggle(1000);
    }
)







$('.kk').countdown({ until: new Date(2025, 12 - 1, 8),format: 'dHMS', layout:'<div class="d-flex justify-content-between kj p-5 text-white fs-1"><div class="border p-5 ">{dn} D</div><div class="border p-5">{hn} h</div><div class="border p-5">{mn} m</div><div class="border p-5">{sn} s</div></div>'}); 







let html=100;

$('.nn').keydown(function(e){
   let tTest = /^([a-z]|[0-9])$/i;
   let tTest2 = /^([^a-z]|[^0-9])$/i;
   if(tTest.test(e.key)==true || tTest2.test(e.key)==true){
  html--
  $('.nnn').html(html)
}

if(e.key=="Backspace" && html<100){
    html++
    $('.nnn').html(html)
}

}
)


