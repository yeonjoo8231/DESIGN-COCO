$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {
            arrows: false
        }
    }]


})

$('.article1 .plpa').on('click', function () {
    // .addClass() : 클래스 추가
    // .removeClass() : 클래스 삭제
    // .hasClass() : 클래스 유무 판단(결과는 true 또는 false)
    // if ( true or false ) { true 실행문 } else { false 실행문 }
    var $ibutton = $(this).find('i')
    if ($ibutton.hasClass('fa-pause')) {
        $('.slide-group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide-group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})

// .index() : 선택자의 인덱스번호를 알아냄
// p.60~61 참고
// 변수선언 : var 변수명
var num;
$('.cs_board .tabmenu > li').on('click', function () {
    $(this).addClass('active')
        .siblings().removeClass('active')
    // console.log( $(this).index() )
    // 변수에 값 저장하기 : 변수명 = 값
    // 변수는 값을 하나만 저장할 수 있음
    // 새로운 값을 저장하면 이전값은 지워짐
    num = $(this).index()
    $(this).parent().next().children()
        .eq(num).addClass('active')
        .siblings().removeClass('active')
})

$('#header .open').addClass('on')
$('#header .open').on('click', function () {
    $(this).next().addClass('on')
    $(this).removeClass('on')
    $(this).next().next().addClass('on')
})
$('#header .close').on('click', function () {
    $(this).prev().removeClass('on')
    $(this).removeClass('on')
    $(this).prev().prev().addClass('on')
    $('.depth1 > li').removeClass('on')
})

var deviceSize = 1024;

function scrollOX(status) {
    $('html').css({
        overflowY: status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hiddnn')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd > 0) {
    deviceSize = deviceSize - swd
}


// 함수선언
function init() {
    var ww = $(window).width()
    if (ww > deviceSize && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('mobile')
        $('.search #sbox').removeClass('on')
        $('.depth1 > li').removeClass('on')
    } else if (ww <= deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        $('#header .close').removeClass('on')
        $('#header #nav').removeClass('on')
        $('#header .open').addClass('on')
        $('.search #sbox').removeClass('on')
    }
}

// 함수호출
init()

$(window).on('resize', function () {
    init()
})


$('.depth1 > li').hover(
    function () {
        if ($('html').hasClass('pc')) {
            $(this).addClass('on')
        }
    },
    function () {
        if ($('html').hasClass('pc')) {
            $(this).removeClass('on')
        }
    }
)
$('.depth1 > li').on('click', function (e) {
    if ($('html').hasClass('mobile')) {
        e.preventDefault()
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
    }
})





$('.depth2 > li').on('click', function (e) {
    e.stopPropagation()
})



// 돋보기 클릭시 검색창 박스 열고닫기
$('.search label').on('click', function () {
    $(this).prev().toggleClass('on')
})


// $(window).on('scroll', function(){
//     var sct = $(this).scrollTop()
//     if ( sct >= 50 && !$('#header > .fix').hasClass('on')) {
//         $('#header > .fix').addClass('on')
//     } else if (sct < 50 && $('#header > .fix').hasClass('on')) {
//         $('#header > .fix').removeClass('on')
//     }
// })

$(window).on('scroll', function () {
    var sct = $(this).scrollTop()
    if (sct >= 10 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
    } else if (sct < 10 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
    }
})


// 동영상이미지 클릭시 모달창에서 유투브영상 플레이시키기
$('.tubewrap img').on('click', function () {
    $('body').append('<div class="vout"><div class="vin"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/h7C3RyiZfYs?controls=0&amp;mute=1&amp;autoplay=1&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><button>닫기</button></div></div>')
    $('.vout').css({
        position:'fixed',
        top:0, left:0, right:0, bottom:0,
        background:'rgba(0,0,0,0.8)',
        zIndex:'999'
    })
    $('.vin').css({
        position:'absolute',
        top:'100px', left:'100px', right:'100px', bottom:'100px'
    })
    $('.vin button').css({
        position:'absolute',
        top:'-10px', right:'-10px',
        padding:'5px',
        background:'fff',
        color:'#000',
        borderRadius:'5px'
    })
})
$('body').on('click','.vout', function(){
    $(this).remove()
})
$('body').on('click','.vin botton', function(){
    $('.vout').remove()
})

// what we do 에서 클릭시 배경이미지 모달창에 표시하기
$('.article2 ul li').on('click',function(){
    var bgimg = $(this).css('backgroundImage')
    // p.128
    var newbgimg = bgimg.replace('url(.','')
    var src = newbgimg.replace(')','')
    $('body').append(`<div class="outbox"><div class="inbox"></div></div>`)
    $('.outbox').css({
        position:'fixed',
        top:0, left:0, bottom:0, right:0,
        background:'rgba(0,0,0,0.8),'
    })
    $('.inbox').css({
        position:'absolute',
        top:'50%', left:'50%', transform:'translate(-50%,-50%)',
        background:'rgba(0,0,0,0.8),'
    })
    $('.inbox').append(`<img src="${src}" alt="">`)
})