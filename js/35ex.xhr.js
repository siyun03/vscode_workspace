/*
'https://jsonplaceholder.typicode.com/photos';

    {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }
  */

/*
 // XHR 객체 생성
const xhr = new XMLHttpRequest();

 // 요청 초기화
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos');

 // 요청 전송
 // GET방식 : 데이터를 요청URL 뒤에 붙여서 보냄
 // POST방식 : 데이터를 send메소드의 인자로 넣어서 보냄 
xhr.send();

xhr.onreadystatechange = () => {
    // console.log('요청상태코드값' + xhr.readyState);
    // 요청을 잘 보내고 응답을 잘 받으면
    if (xhr.readyState === 4 && xhr.status==200){
        console.log(xhr.response);
    }else{
        console.error('에러발생', xhr.status, xhr.statusText);
    }
};
*/
const xhr = new XMLHttpRequest();

const xhrUtil ={
    // httpMethod : 요청방식
    // url : 요청URL
    // payload : 요청시 전송할 데이터
    xhr: new XMLHttpRequest(),
    init: (httpMethod, url, payload) => {
        // GET방식 요청이라면 
        if(httpMethod.toUpperCase()=='GET'){
            // payload가 있으면 url뒤에 데이터를 붙임
            url = url + (payload ? payload : ' ');
        }
        // 요청 초기화
        xhr.open(httpMethod, url)

        // POST || PUT || PATCH 방식의 요청이라면
        if(
            httpMethod.toUpperCase()=='POST'||
            httpMethod.toUpperCase()=='PUT'||
            httpMethod.toUpperCase()=='PATCH'
        ) {
        // POST, PUT, PATCH 요청시에는 요청헤더를 설정
        // 서버에 요청데이터가 JSON형식임을 알려줌
        xhr.setRequestHeader('content-type', 'application/json');
        }

        console.log(payload);

        // 요청 전송
        xhr.send(payload); // get 일때는 비워둠
    }
};

    xhr.onreadystatechange = () => {
        if (xhr.readyState !==4 ) return false;
        if (xhr.status==200 || xhr.status ==201){
        console.log(xhr.response);
        } else{
        console.log('에러발생@', xhr.status, xhr.statusText);
        }
    }

// list (전체)
// xhrUtil.init('GET', 'https://jsonplaceholder.typicode.com/photos');

// get (하나만 가져옴)
xhrUtil.init('GET', 'https://jsonplaceholder.typicode.com/photos', '?id=1');

// post : 한건 등록
// xhrUtil.init('POST', 'https://jsonplaceholder.typicode.com/photos', 
// '{"albumId": 101, "id":5001,"title":"title5001","url":"url5001","thumbnailUrl":"thumbnailUrl5001"}');

// put : 한건 전체 수정
// xhrUtil.init('PUT', 'https://jsonplaceholder.typicode.com/photos/1', 
//     '{"albumId": 1, "id":1,"title":"mod_title5001","url":"mod_url5001","thumbnailUrl":"mod_thumbnailUrl5001"}');

// patch : 한건 부분 수정
// xhrUtil.init('PATCH', 'https://jsonplaceholder.typicode.com/photos/1', 
//     '{"title":"pardmod_title5001"}');

// delete : 한건 삭제
// xhrUtil.init('DELETE', 'https://jsonplaceholder.typicode.com/photos/1');


