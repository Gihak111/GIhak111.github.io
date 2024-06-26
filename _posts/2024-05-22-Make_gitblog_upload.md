---
layout: single
title:  "깃허브 블로그 만들기 총 정리"
categories: "Vlog"
tag: "code"
toc: true
author_profile: false
sidebar:
    nav: "docs"
---

# 이번엔 깃허브 블로그를 만드는 과정을 정리합니다!
처음 깃허브 블로그를 만들면서 조사할 것도 많고 중간에 막히던 구간도 많더군요. 그래서 최대한 쉽게 깃허브 블로그를 만드는 방법을 정리할까 합니다.

# 만들기 전 준비물
먼저 컴퓨터에 필요한 준비물 입니다.  
깃      url : [https://git-scm.com/downloads](https://git-scm.com/downloads)  
루비    url : [https://rubyinstaller.org/](https://rubyinstaller.org/)  
깃허브 데스크톱     *필수는 아닙니다.*  
깃허브 ID

위의 3개를 모두 가지고 있다면 바로 시작할 수 있습니다.  

# 깃허브에 사용할 테마 고르기.
깃허브 블로그를 만들 짼 보통 jekyll라는 블로그 테마 생성기를 활용합니다.  
물론 직접 jekyll을 생성해서 처음부터 만들 수 도 있습니다.  
하지만 오늘은 다른 사람이 만들어 놓은 jekyll 테마를 활용해 보갰습니다.  
이는 장단점이 있는데, 직접 만들면 아무래도 포토폴리오에 적을 때 좀더 고점을 노릴수 있겠습니다.  
반면 테마를 활용하면 내가 직접 만든 블로그보다 좀더 완성도 있는 블로그를 보다 빠르게 만들 수 있죠.

jekyll 테마는 다음과 같은 사이트에서 가져올 수 있습니다.  

[https://jekyllthemes.io](https://jekyllthemes.io)
[http://jekyllthemes.org](http://jekyllthemes.org)

위의 사이트에 들어가서 원하는 테마를 고르시면 됩니다!  
원하는 테마를 고르시면 바로 다운로드나 fork 해 주세요.

다운로드 하신 테마를 압축 해제 해 주시고 원하는 폴더 하나에 집어넣으시면 됩니다!

# 내 깃허브에 다운로드한 테마 집어넣기
이번에 할 것들은 앞서 fork 하신 분들은 넘어가셔도 됩니다! 다운로드하신 분들만 깃허브에 연동해 주시면 되요.  

앞서 fork 하신 분들은 자신의 깃허브 블로그의 브로필 -> your repositories에 들어가시면 자신이 fork해온 repository가 있는것을 보실 수 있습니다.  
그 repository에 들어가셔서 Setting으로 들어가시면 REpository name을 변경 할 수 있습니다.  
그곳에서 이름을 자신의_깃허브_닉네임/github.io 로 바꿔주시면 됩니다.


다운로드 하신 분들은 create a new repository를 하셔야 하는데, 이때의 이름은 자신의_깃허브_닉네임/github.io를 repository name에 넣으시고 Public으로 설정하신 뒤 만드시면 됩니다.  
그러면 텅 빈 repository가 생성되는데요, 바로 무지성으로 압축해제하셨던 그 폴더를 통째로 그래그 앤 드랍 하시면 됩니다. 그러면 바로 파일이 올라가 지면서 화면이 넘어가 지는데요, 업로드가 모르 끝나면 밑에있는 Commit changes의 Add file via upload에 creat git blog라고 입력하시고 밑에 있는 Commit changes를 누르시면 됩니다.

# 깃 블로그 설정 완료하기.
업로드가 끝난 후 레파지토리에 들어가셔서 파일을 보다보면 _config.yml 이라는 파일이 있는데요, 이 안에 들어가셔서 설정을 마무리 해 주시면 깃허브 블로그 생성이 끝납니다.  

해당 파일에 들어가면 바로 보이는 url 라인이 보이는데요, url에 자신의 깃허브 블로그 주소를 집어넣으시면 됩니다. https://내_이름/내_이름.github.io 를 넣어주시면 됩니다. 이걸로 자신의 블로그가 생성되었습니다.

# 깃 블로그 들어가서 확인하고 로컬 서버 열어보기.
바로 브라우저의 url에 내_이름/내_이름.github.io 를 입력하시면 자신의 블로그에 접속할 수 있습니다!  
하지만 변경사항이 바로 저장되지 않고 만일 오류가 생겼을 때 디버깅이 수월하지 않다는 단점이 있습니다. 따라서 깃허브의 파일을 clone 해서 수정한 후 로컬 서버에서 테스트를 해 보고 본 서버에 push하곤 하는데요, 이번엔 이 과정을 해 볼 겁니다.  

먼저 깃허브 데스크탑을 켜 줍니다. 내 래파지토리에서 자신이 원하는 폴더에 클론하시면 됩니다. 깃허브 데스크탑을 다운로드  하시지 않으신 분들은 바탕화면에 빈 폴더를 하나 만들어준 뒤 우클릭을 통해 미리 다운로드 하셨던 Git Bash Here을 통해 다음 명령어를 순서대로 입력하시면 됩니다.
```git
git clone 내 깃허브 블로그 주소
```  
여기서 내 깃허브 블로그 주소는 자신의 래파지토리에서 Code를 누르면 찾을 수 있습니다.
그대로 붙여넣기 해 주세요.  
위의 코드를 실행하면 자신이 만든 폴더 안에 깃허브 블로그가 Clone 된 것을 보실 수 있습니다.
이어서 번들은 다운로드 해 줍니다.
```git
boundle install
boundle exec jekyll serve
```
위의 코드를 실행하면 서버 주소가 밑에 나오는데요, 그 주소를 브라우저에 입력하시면 자신의 블로그를 확인할 수 있습니다.  
로컬 서버는 본 서버와 다르게 변경사항이 바로바로 적용되어 디버깅 하기 훨신 수월하다는 장점이 있습니다.

이상으로 마치겠습니다.
다음에는 블로그에 글 쓰는법으로 돌아오겠습니다.