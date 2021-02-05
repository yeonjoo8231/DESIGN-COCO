$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

$('.article1 .plpa').on('click', function(){
    // .addClass() : 클래스 추가
    // .removeClass() : 클래스 삭제
    // .hasClass() : 글래스 유무 판단
    var $ibutton = $(this).find('i')
    if ( $ibutton.hasClass('fa-pause')) {
        $('.slide-group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide-group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})

var num;
$('.cs_board .tabmenu > li').on('click', function(){
    $(this)
    .addClass('active')
    .siblings().removeClass('active')
    // console.log( $(this).index() )
    // 변수선언 var 변수명
    // 변수에 값 저장하기 : 변수명 = 값
    // 변수는 값을 하나만 저장할 수 있음
    // 새로운 값을 저장하면 이전값은 지워짐
    // $('.cs_board .contents > div')
    var num = $(this).index()
    console.log(num)
    $(this).parent().next().children('div')
    .eq(num)
    .addClass('active')
    .siblings().removeClass('active')

})

$('#header .open').on('click',function(){
    $(this).toggleClass('on')
    $(this).next('#header #nav').toggleClass('on')
})
// var elOpen = document.querySelector('#header .open')
// elOpen.addEventListener.addClass

var ww = $(window).width()
console.log(ww)

if (ww<1024) {
    $('#header #nav .depth1 > li').on('click',function(){
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
    })
} else {
    $('#header #nav .depth1 > li').hover(
        function(){
            $(this).addClass('on')
        },
        function(){
            $(this).removeClass('on')
        }
    )
}