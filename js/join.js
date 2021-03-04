// 회원가입폼 데이터유효성 체크
$('.joinBox form').on('submit', function(){

    $('input').css({
        border: '1px solid #ddd'
    })

    // val 인풋상자에 입력된 텍스트가 추출됨
    var idbox = $('#idbox').val()
    if ( idbox.length>=3 && idbox.length<6 ) {
        for ( var i=0; i<idbox.length; i++) {
            // p.128 참고 / 글자수만큼 반복문을 돌려서 조사
            // 한글자씩 추출함 숫자를 추출해도 문자로 추출됨으로 추출된후에는 ''를 붙여서 사용
            var ch = idbox.charAt(i)
            if ( !(ch>='0' && ch<='9') && !(ch>='A' && ch<='Z') && !(ch>='a' && ch<='z')) {
                //     숫자             영대문자        영소문자
                // 특수문자이면 경고장 띄우고 오류표시 해주고 진행중단
                $('#idbox').css({
                    border:'1px solid #f00'
                }).focus().select()
                return false
            } 
        }

    } else {
        alert('아이디는 3~5글자 범위입니다.')
        $('#idbox').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }

    // 비밀번호 유효성체크 : 첫글자는 영문자만 허용하며, 숫자와 특수문자는 각각 1개 이상 포함
    // ^ : 첫문자일치, $: 끝문자 일치 여부
    // ?= : 조건확인 후 처음으로 돌아감
    // . : 임의의 모든문자(숫자,문자, 특수문자를 포함한 모든 문자)
    // * : 앞의 글자가 0번 이상 나올 수 있음

    // 정규표현식
    //              처음 영문                        특수문자
    var check = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
    var pwbox = $('#pwbox').val()
    // test()메서드 조사하는 메서드 / pwbox내용이 check식에 맞는지 조사해라
    if ( !check.test(pwbox) ) {
        alert('비밀번호 조건에 맞지 않습니다.')
        $('#pwbox').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    }

    var irum = $('#irum').val()
    var check2 = /^[가-힣]+$/
    if (irum.length>=2) {
        // irum안에 check2가 맞는지 체크
        if( !check2.test(irum) ) {
            alert('이름은 한글 두글자 이상입니다')
            $('#irum').css({
                border: '1px solid #f00'
            }).focus().select()
            return false
        }

    } else {
        alert('이름은 한글 두글자 이상입니다')
        $('#irum').css({
            border: '1px solid #f00'
        }).focus().select()
        return false 
        // 다시해라
    }


    // 휴대폰번호 유효성체크 : 중간번호 (숫자 3~4개), 끝번호(숫자4개)
    var hp1 = $('#hp1').val()
    var hp2 = $('#hp2').val()
    var check3 = /[0-9]{3,4}/  // \d{3,4}
    var check4 = /[0-9]{4}/
    if ( !check3.test(hp1) ) {
        alert('번호형식이 맞지 않습니다.')
        $('#hp1').css({
            border: '1px solid #f00'
        }).focus().select()
        return false 
    } else if ( !check4.test(hp2) ) {
        $('#hp2').css({
            border: '1px solid #f00'
        }).focus().select()
        return false 
    }

    // 이메일 아이디 유효성체크 : 특수문자제외 / 회사명.com 회사명.co.kr
    var emailid = $('#emailid').val()
    var check5 = /^[a-zA-Z0-9]+$/ 
    // +는 한번이상 나와야한다
    if ( !check5.test(emailid) ) {
        alert('이메일 형식이 아닙니다.')
        $('#emailid').css({
            border: '1px solid #f00'
        }).focus().select()
        return false 
    }
    var maildo = $('#maildomain').val()
    var check6 = /^[a-zA-Z0-9]+[\.][a-z]+([\.][a-z]+)*$/
    if ( maildo !== '' ) {
        if ( !check6.test(maildo) ) {
            alert('이메일형식이 아닙니다.')
        $('#maildomain').css({
            border: '1px solid #f00'
        }).focus().select()
        return false 
        }
    } else {
        alert('이메일 도메인을 선택해주세요.')
        $('#maildomain').css({
            border: '1px solid #f00'
        }).focus().select()
        return false 
    }

    // 성별 선택 유효성체크 : 반드시 선택해야함
    var gender = $('input[name=gender]:checked').length
    if (gender === 0) {
        alert('성별을 선택해주세요.')
        $('input[name=gender]').focus()
        return false
    }

    return false // 테스트완료후 삭제
})

$('#pwbox').on('focus', function(){
    $(this).after('<span>비밀번호 첫글자는 영문자이고, 숫자, 특수문자중 2가지 이상 조합해야 합니다</span>')
    $(this).next().css({
        color:'#f00', paddingLeft:'10px'
    })
})
$('#pwbox').on('blur', function(){
    $(this).next().remove()
})
// append prepend는 자식으로 새로운 요소 추가
// after before 는 나 다음으로 새로운 요소 추가

$('#domainlist').on('change', function(){
    var doval = $('#domainlist option:selected').val()
    if ( doval != 'noselect' && doval != 'self' ) {
        $('#maildomain').val(doval)
    } else if ( doval === 'noselect') {
        $('#maildomain').attr({
            disabled:true
        }).val('')
    } else {
        $('#maildomain').attr({
            disabled:false
        }).val('')
    }
})
// $('#emaildomain').val() value값을 추출함/ ()안에 값을 써주면 value값을 변경


// 전체선택
$('#all').on('click', function(){
    // var all = $('input[id=all]:checked').length
    // if (all === 0) {
    //     $('input[name^=co]').attr({
    //         // ^ 저글자로 시작하는
    //         checked:false
    //     })
    // } else {
    //     $('input[name^=co]').attr({
    //         checked:true
    //     })
    // } 이거는 문제가 있음/ 개별적으로 체크하고 올을 체크하고 껏다 켯을때.
    
    var bool = $(this).prop('checked')
    $('input[name^=co]').prop('checked', bool)
    // 현재 checked 값을 bool값으로 바꿔라 / .prop은 true false로 추출 
    console.log(bool)

})


// 남은글자 표시하기
$('#memo').on('keydown', function(){
    var curr = $(this).val().length
    var max = 10
    var remain = max - curr
    $('.remain').text(remain)
    // if (curr > max) {
    //     alert('글자수를 초과하셨습니다.')
    // }
})

// 생년월일 간에 datepicker연결하기
$('#birth').datepicker({
    dateFormat:'yy-mm-dd',
    changeMonth:true,
    changeYear:true,
    yearRange:'1900:2021'
})