$('.article5 .tabmenu > li').on('click', function(){
    $(this)
    .addClass('active')
    .siblings().removeClass('active')
})