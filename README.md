# 게임하면서 통화까지! Dixcord

![readme_mockup2](https://user-images.githubusercontent.com/112460466/210706312-6a44b60d-a42e-4210-b334-9e5983f70fb3.png)


## 프로젝트 소개

- Dixcord는 친구와 통화하면서 채팅할 수 있으며, 원하는 방에 참여하여 단체 채팅을 즐길 수 있는 메신저 사이트입니다.
- 제일 먼저, 실생활에도 밀접하고 개인적으로도 계속 사용할 수 있다는 것이 없을까라고 생각했습니다. 때마침 통화 기능이 생각났고 디스코드의 기능을 구현하면 재밌겠다라고 생각했습니다.
- 디스코드의 기능은 기본적으로 구현하되 팀원들과 기존의 디스코드에서 기능적으로 불편했던 점, UI등을 개선하며 개발 능력 향상을 목표로 했습니다.

<br>

## 팀원 구성

<div align="center">

| **이서연** | **장동우** | **설현관** | **김윤** | **원호연** | **윤도현** |
| :------: |  :------: | :------: | :------: | :------: |
| [<img src="https://github.com/user-attachments/assets/1348490d-a8e3-486c-9d7a-9ac7b3fd684e" height=150 width=150> <br/> @SEOYEON-a](https://github.com/SEOYEON-a) | <img src="https://github.com/user-attachments/assets/4ba22779-886f-400c-b65f-a83f3becaab2" height=130 width=130> <br/> | <img src="https://github.com/user-attachments/assets/25e8976f-6bf9-43f5-8b5c-7aef97b691a1" height=130 width=130> <br/> | <img src="https://github.com/user-attachments/assets/be81161e-0bee-4483-84f7-9f5fb93dbfae" height=135 width=135> <br/> | <img src="https://github.com/user-attachments/assets/164d6e0e-6bcb-4314-9aa2-b5c3be181f2d" height=135 width=135> <br/>

</div>

<br>

## 1. 개발 환경

- Front : HTML5, CSS3, JS ES6
- Back-end : Spring Legacy 3.9.11, Apache Tomcat 9.0, Security
- DB / GIT : ORACLE XE 11.2, Notion, ERD Cloud
- Real Time : WEB SOCKET,
- Testing : JUnit6
- 협업 툴 : Figma
- 버전 및 이슈관리 : Github, Git
- 디자인 : [Figma](https://www.figma.com/design/g9BHZkhIW2VpjkB0AeL8wM/%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C?node-id=1354-2&t=xdNK9hZ4O73N3iiN-1)
<br>

## 2. 프로젝트 규칙

### 규칙

프로젝트 규칙 및 수칙

1. 각종 변경사항 있을 시 팀원에게 알리기 / 회의하기
   - ERD ( 테이블 ) 변경사항
   - 페이지 / 코드 변경사항 등
   - 변경사항 회의록에 남기고, 엑셀에 수정하기

2. 매일, 매주 목표치 설정하고 회의 시 목표치 달성 여부 체크하기
   - 가급적 목표치 달성을 위해 최선을 다하기
   - 목표 미 달성 시 특별한 제제는 없으니 부담갖지 않기!

3. 프로젝트 진행 중 알아볼 수 있게 주석 달기
   - 함수의 역할, 함수 내부의 로직 등
   - CSS 변경 시 문제가 될 수 있는 경우 
   ex) // 이 부분 건드리면 화면 깨짐

4. 회의 시 눈치보지말고 본인 의견 적극적으로 전달하기

5. 코드 짤 때 GPT는 최대한 후순위로 미루기 ( 목표 : 내가 만든 코드는 내가 이해하기 )
   -  내가 생각나는 만큼 만들기
   -> 생각이 안나면 수업 자료 찾아보기 ( 블로그, 노션, 수업프로젝트 등 )
   -> 수업 자료로 해결이 안되면 팀원에게 물어보기
   -> 팀원도 모르면 GPT 한테 물어보기
   -> GPT도 해결을 못해주면 강사님 한테 물어보기

6. 오류 발생 시 오류코드 자세히 들여다보기 ( 그냥 긁어서 GPT한테 물어보기 금지! )
   - 봐도 모르겠으면 팀원한테 물어보기
   - 팀원도 모르면 그때 GPT 한테 물어보기
   - GPT도 모르면 그때 강사님 콜하기

7. 프로젝트 병합
   - 깃 pull / push 하기 전에 프로젝트 압축하여 백업 해두기 ( 가급적 날짜별로 )
   - 깃 pull / push 하기
   - 문제 발생 시 바로 팀원과 공유하기

8. 로그 잘찍기
   - 전달받는 데이터
   - 전달 할 데이터 (가공 후)
   - 도착한 메소드
  
<br>

## 3. 역할 분담

### 🍊이서연

- **UI**
    - 페이지 : 친구 메인 페이지, 모든 친구 페이지, 추천 친구 페이지, 요청 친구 페이지, 대기 중 친구 페이지, 차단 친구 페이지, 상세 친구 추가 페이지, 친구 채팅방 페이지, 친구 사이드바 페이지
- **기능**
    - 친구 검색, 친구 삭제, 친구 차단, 친구 추가, 친구 수락, 친구 거절, 친구 실시간 온/오프라인 상태, 친구 채팅방 알림 레드닷, 실시간 채팅

<br>
    
### 👻장동우

- **UI**
    - 페이지 : 메인 페이지, 로그인/회원가입 페이지, 관리자 페이지, 마이페이지
- **기능**
    - 로그인/로그아웃, 회원가입, 사용자 아이콘 및 배경사진 업로드

<br>

### 🔉설현관

- **UI**
    - 페이지 : 챗봇 페이지
- **기능**
    - 채팅 필터링, 강퇴, 음악 재생, 도움말

<br>

### 🐬김윤

- **UI**
    - 페이지 : 단체 채팅방 페이지, 방 사이드바 페이지
- **기능**
    - 방 생성, 방 보기, 방 초대 코드 생성, 방 입장 시 알림, 실시간 채팅
    
<br>

### 😎원호연

- **UI**
    - 페이지 : 음성 채팅 페이지, 이모지/GIF 페이지
- **기능**
    - 음성 채팅, 이모지 전송, 카테고리별 GIF 전송, 실시간 채팅
    
<br>

### 🐬윤도현

- **UI**
    - 페이지 : 고객센터 페이지, 내 문의 페이지, FAQ 페이지
- **기능**
    - 공지사항 보기, 공지사항 검색, 내 문의 등록, 내 문의 보기, 공지글 등록

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-12-06 ~ 2025-01-06
- UI 구현 : 2024-12-09 ~ 2024-12-12
- 기능 구현 : 2024-12-13 ~ 2024-12-30
- CSS 수정 : 2024-12-31 ~ 2025-01-03

<br>

## 5. 페이지별 기능

### [초기화면]
- 친구 아이콘을 클릭했을때 제일 초기 화면입니다.

| 초기화면 |
|----------|
|![friend-main](https://github.com/user-attachments/assets/81420684-c2ec-410b-93c1-b41cf02f5e47)|

<br>

## [출력 기능]

### [모든 친구 리스트 출력]
- 모두를 클릭하면 현재 로그인한 유저와 친구인 유저의 리스트가 출력됩니다.
- 마우스 오버 시 해당 div 영역 뒤에 불투명한 회색 배경이 뜹니다.

| 모든 친구 리스트 출력 |
|----------|
|![allFriendsList](https://github.com/user-attachments/assets/dd55055b-7463-46d9-abd7-b8b9f9ec2dfb)|

<br>

### [추천 친구 리스트 출력]
- 추천을 클릭하면 현재 로그인한 유저와 친구가 아닌 유저의 리스트가 출력됩니다.
- 마우스 오버 시 해당 div 영역 뒤에 불투명한 회색 배경이 뜹니다.

| 추천 친구 리스트 출력 |
|----------|
|![RecommendFriendsList](https://github.com/user-attachments/assets/94f0c24d-e4a2-4fdd-95d1-3f4d8c00b22e)|

<br>

### [요청 친구 리스트 출력]
- 요청을 클릭하면 현재 로그인한 유저가 친구 추가를 보낸 유저의 리스트가 출력됩니다.
- 마우스 오버 시 해당 div 영역 뒤에 불투명한 회색 배경이 뜹니다.

| 요청 친구 리스트 출력 |
|----------|
|![RequestFriendsList](https://github.com/user-attachments/assets/83cef693-46e2-4cca-ae62-b7b9b93f928f)|

<br>

### [대기 중 친구 리스트 출력]
- 대기 중을 클릭하면 현재 로그인한 유저에게 친구 추가를 보낸 유저의 리스트가 출력됩니다.
- 마우스 오버 시 해당 div 영역 뒤에 불투명한 회색 배경이 뜹니다.
  
| 대기 중 친구 리스트 출력 |
|----------|
|![WaitFriendsList](https://github.com/user-attachments/assets/84ee758d-4446-4f28-824a-ce8bc126f746)|

<br>

### [차단 친구 리스트 출력]
- 차단을 클릭하면 현재 로그인한 유저에게 친구 추가를 보낸 유저의 리스트가 출력됩니다.
- 마우스 오버 시 해당 div 영역 뒤에 불투명한 회색 배경이 뜹니다.
  
| 차단 친구 리스트 출력 |
|----------|
|![BlockFriendsList](https://github.com/user-attachments/assets/dd61fd8a-8323-4dcd-bfe9-a28ecbb91495)|

<br>

## [검색 기능]

### [모든 친구 검색]
- 모두를 클릭한 후 검색하기 창에 유저의 닉네임을 검색하면 해당 검색어와 맞는 유저가 검색됩니다.
- 마우스 오버 시 해당 div 영역 뒤에 불투명한 회색 배경이 뜹니다.

| 모든 친구 검색 |
|----------|
|![searchAllfriend](https://github.com/user-attachments/assets/c25a0d5a-59ad-4ef4-9c4f-91d8769bf7c7)|

<br>

### [추천 친구 검색]
- 추천을 클릭한 후 검색하기 창에 유저의 닉네임을 검색하면 해당 검색어와 맞는 유저가 검색됩니다.
- 마우스 오버 시 해당 div 영역 뒤에 불투명한 회색 배경이 뜹니다.

| 추천 친구 검색 |
|----------|
|![searchRecommendfriend](https://github.com/user-attachments/assets/f5137343-0327-423a-9b47-9566aa31fe10)|

<br>

### [요청 친구 검색]
- 요청을 클릭한 후 검색하기 창에 유저의 닉네임을 검색하면 해당 검색어와 맞는 유저가 검색됩니다.
- 마우스 오버 시 해당 div 영역 뒤에 불투명한 회색 배경이 뜹니다.

| 요청 친구 검색 |
|----------|
|![searchRequestfriend](https://github.com/user-attachments/assets/4075596a-bdda-4e1e-b4a4-1d3f27e97785)|

<br>

### [대기 중 친구 검색]
- 대기 중을 클릭한 후 검색하기 창에 유저의 닉네임을 검색하면 해당 검색어와 맞는 유저가 검색됩니다.
- 마우스 오버 시 해당 div 영역 뒤에 불투명한 회색 배경이 뜹니다.

| 대기 중 친구 검색 |
|----------|
|![searchWaitfriend](https://github.com/user-attachments/assets/a673f0aa-3424-4169-9da7-29901f7efa90)|

<br>

### [차단 친구 검색]
- 차단을 클릭한 후 검색하기 창에 유저의 닉네임을 검색하면 해당 검색어와 맞는 유저가 검색됩니다.
- 마우스 오버 시 해당 div 영역 뒤에 불투명한 회색 배경이 뜹니다.

| 차단 친구 검색 |
|----------|
|![searchBlockfriend](https://github.com/user-attachments/assets/3a7fabd4-0dcb-467a-b275-efc733020e54)|

<br>

## [버튼 기능]

### [채팅방 이동]
- 모든 친구 리스트에 출력된 각 유저의 우측에 있는 채팅방 버튼을 클릭하면 채팅방으로 이동하게 됩니다.
- 채팅방으로 이동하는 즉시 좌측 친구목록에 유저가 뜨게 됩니다.

| 채팅방 이동 |
|----------|
|![friend-movetochatroom](https://github.com/user-attachments/assets/6c775d80-4ff1-4d6e-9974-b069d6f39f74)|

<br>

### [친구 차단하기]
- 모든 친구 리스트에 출력된 각 유저의 우측에 있는 기타버튼을 클릭하면 모달창이 나옵니다.
- 친구 차단하기를 클릭하면 친구상태가 차단친구로 변경되고 차단친구 리스트에 뜨게 됩니다.

| 친구 차단하기 |
|----------|
|![friend-blockfriend](https://github.com/user-attachments/assets/03c63909-7318-44e3-bef4-c856b38a5dcd)|

<br>

### [친구 삭제하기]
- 모든 친구 리스트에 출력된 각 유저의 우측에 있는 기타버튼을 클릭하면 모달창이 뜹니다.
- 친구 삭제하기를 클릭하면 친구가 삭제되고 모든 친구에서 사라지게 되며 좌측 친구목록 리스트에 채팅 기록이 있는 유저면 동시에 삭제됩니다.

| 친구 삭제하기 |
|----------|
|![friend-deletefriend](https://github.com/user-attachments/assets/bbf21d0f-a405-4576-841c-4dcf01cce65d)|

<br>

### [친구 추가하기]
- 추천 친구 리스트에 출력된 각 유저의 우측에 있는 요청하기 버튼을 클릭하면 친구에게 요청을 보냅니다.
- 요청 탭에서 로그인한 유저가 친구 요청을 보낸 리스트를 확인할 수 있습니다.

| 친구 추가하기 |
|----------|
|![friend-addfriend](https://github.com/user-attachments/assets/ba2b6161-a787-4e89-a7d7-1acc2c52eb8e)|

<br>

### [친구 요청 취소하기]
- 요청 친구 리스트에 출력된 각 유저의 우측에 있는 요청 취소하기 버튼을 클릭하면 요청이 취소됩니다.
- 요청이 취소되는 즉시 요청 리스트에서 삭제되고 추천 친구 리스트에 뜨게 됩니다.

| 친구 요청 취소하기 |
|----------|
|![friend-cancelfriend](https://github.com/user-attachments/assets/cf85227f-8b2b-4186-82ea-69c8201efa0b)|

<br>

### [친구 요청 수락하기]
- 대기 중 친구 리스트에 출력된 각 유저의 우측에 있는 체크 버튼을 클릭하면 친구 요청이 수락됩니다.
- 수락하는 즉시 대기 중 리스트에서 삭제되고 모든 친구 리스트에 뜨게 됩니다.

| 친구 요청 수락하기 |
|----------|
|![friend-acceptfriend](https://github.com/user-attachments/assets/968d8212-70be-482f-bfc1-2096fcb35d56)|

<br>

### [친구 요청 거절하기]
- 대기 중 친구 리스트에 출력된 각 유저의 우측에 있는 X 버튼을 클릭하면 친구 요청이 거절됩니다.
- 거절하는 즉시 대기 중 리스트에서 삭제됩니다.

| 친구 요청 거절하기 |
|----------|
|![friend-denyfriend](https://github.com/user-attachments/assets/763ecaff-1210-40a5-a17c-88a94971418f)|

<br>

### [친구 차단 해제하기]
- 차단 친구 리스트에 출력된 각 유저의 우측에 있는 차단 해제 버튼을 클릭하면 친구 차단이 해제됩니다.
- 해제되는 즉시 삭제되며 친구상태가 일반친구로 변경됩니다.

| 친구 차단 해제하기 |
|----------|
|![friend-blockcancelfriend](https://github.com/user-attachments/assets/65dd552a-4ca9-4a5a-b6d8-996522f67e5e)|

<br>

## [상세 친구 추가 기능]

### [이메일로 추가하기]
- 이메일을 입력하고 친구 요청 보내기를 클릭하면 요청을 보내지 않거나 이메일이 올바르면 초록색 테두리로 변경되고 아래에 친구 요청이 성공했다는 메세지가 나옵니다.
- 만일 요청을 이미 보냈거나 이메일이 잘못되었으면 빨간색 테두리로 변경되고 아래에 다시 확인하라는 메세지가 나옵니다.

| 이메일로 추가하기 |
|----------|
|![friend-detailaddfriend](https://github.com/user-attachments/assets/7fff2f44-66a6-4a71-99af-fb86f3ab10c8)|

<br>

## [친구 온/오프라인 상태 변경 기능]

### [온/오프라인 실시간 변경]
- 친구인 유저가 로그인을 하면 유저 아이콘 옆에 작은 동그라미가 청록색으로 변경됩니다.
- 로그아웃을 하면 유저 아이콘 옆에 작은 동그라미가 회색으로 변경됩니다.
- 좌측 사이드바 친구목록과 모든 친구 리스트에서 동시에 변경됩니다.

| 온/오프라인 실시간 변경 |
|----------|
|![friendList-onoffline](https://github.com/user-attachments/assets/e4b1ae76-6b90-4783-bf5e-fedc2680f5e9)|

<br>

### [채팅방 이동]
- 좌측 사이드바 친구목록에 있는 친구를 클릭하면 채팅방으로 이동합니다.
- 유저가 설정한 프로필이 있으면 설정한 프로필이 뜨고
- 유저가 설정하지 않았으면 기본 프로필이 뜹니다.

| 채팅방 이동 |
|----------|
|![chatfriend-defaultprofile](https://github.com/user-attachments/assets/ffe4e392-5ce0-4ff1-8960-57a7fb9c68c9)|
|![chatfriend-customprofile](https://github.com/user-attachments/assets/5e2b4734-0efd-479f-83da-7253aeaf4f99)|

<br>

### [레드닷 알림]
- 유저가 로그인한 유저에게 채팅을 보내면 좌측 사이드바 친구 우측에 레드닷이 뜹니다.
- 클릭 시 삭제되며 실시간으로 채팅이 왔는지를 알 수 있습니다.
- 로그인한 유저가 보내도 친구인 유저의 사이드바 목록에 뜹니다.

| 레드닷 알림 |
|----------|
|![friendreddotalarm](https://github.com/user-attachments/assets/f12a55a6-b15f-4bae-81c9-18e05e7fe7db)|
|![reddotr](https://github.com/user-attachments/assets/28865e11-aa7f-47ad-80d2-ba35b1e4b285)|

<br>

## 6. 트러블 슈팅

- [CamelCase 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_Camel-Case)

- [COMMIT 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_COMMIT)

- [CSS 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_CSS)
  
- [Encoding 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_Encoding)
  
- [Mapping 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_Mapping)
  
- [Paging 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_Paging)
  
- [ReflectionException 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_ReflectionException)

- [Button Event 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%EB%B2%84%ED%8A%BC-%EB%8F%99%EC%9E%91)

- [DB 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%EC%9C%A0%EC%A0%80-%EB%B2%88%ED%98%B8)

- [DATA 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%EC%9C%A0%EC%A0%80-%EC%A0%95%EB%B3%B4)

- [Filtering 이슈](https://github.com/SEOYEON-a/HypePOP-prj/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%ED%95%84%ED%84%B0%EB%A7%81)

<br>

## 7. 개선 목표

- API : 다양한 API를 사용해보지 않아서 API 기능의 다양성 필요
- CSS 보완 : CSS의 미흡한 점이 많아서 보완 필요
- 문서 작업 : 시간 문제로 클래스 정의서를 작성하지 못하여서 패키지 정의서로 대체

<br>

## 8. 프로젝트 후기

### 이서연

설계하고 개발하면서 에러가 발생했을때 확인하는 태도와 회의를 하는 모습 등에서 1차 프로젝트를 했을 때보다 더 성장한 것을 느꼈습니다. 
처음으로 웹소켓을 사용하면서 실시간으로 값이 바뀌는 것이 신기했고 css와 피그마 설계를 주도하면서 사용자를 위한 UI, UX가 무엇인지도 알게 되었습니다.
최종 프로젝트를 하면서 도와주신 팀원분들께 감사하다는 말을 전하고 싶습니다.

### 장동우

아무래도 첫 프로젝트이다 보니 생각보다 꽤 어려운 점이 많았던 것 같습니다. 배운 것을 이것도 활용해보고 저것도 활용해보다 보면 어느새 코드들이 여러 방식으로 섞여 있게 되기도 했었고, 
프로젝트를 완성시키고 보니 성에 차지 않는 부분도 많이 보여 속이 상하기도 했습니다. 
하지만 처음 사용해보는 지도 API를 사용했을 때, 풀리지 않던 코드가 풀렸을 때, 머릿속으로 상상하던 기능을 내가 직접 만들었을 때, 이 모든 것을 상쇄하고도 남을 행복감을 얻었습니다. 
이번 프로젝트를 하며 고생도 많이 하고 즐겁기도 했지만, 제가 얻은 가장 큰 수확은 팀장으로서 역할을 하며 알게된 앞으로 하게 될 여러 프로젝트에서 올바른 방향으로 나아갈 수 있는 방향성이었던 것 같습니다. 

### 설현관

기능들 하나하나 만드는게 너무 재미있었습니다. 혼자 만들 때는 몰랐는데 팀 프로젝트로 진행하면서 다 함께 만드니까 합치는 과정에서 많은 수정을 해야해서 팀원분들 모두 고생하신 것 같다고 생각합니다. 
개발을 원활히 하기 위해선 개발을 시작하기 전 여러 문서작업을 통해 밑그림을 최대한 완벽하게 그리는것이 좋다는 생각을 하게 되었습니다. 
 
### 김윤

설계와 역할 분담의 중요성을 깨달았고, 잘 짜인 계획이 프로젝트를 원활하게 이끌어간다는 것을 느꼈습니다.
오류 대처 능력도 향상되어, 문제 발생 시 두려움 없이 해결할 자신감이 생겼으며 오류가 오히려 해결의 기회를 준다는 점에서 긍정적으로 받아들일 수 있었던 기회였습니다. 

### 원호연

동기로 페이지 데이터를 가져와서 사용하는 경우 유지 보수를 할 때 쉽게 수정할 수 없다고 생각했습니다.
QA하면서 보았던 유저 친화라는 것이 개발자 입장에서 달갑지 않다는 것을 깨달았으며 WebSocket을 이용하면서 실시간 화면이 어떻게 구동하는지 알게되었고 다른 프로젝트에서도 사용해보고 싶다는 생각이 들었습니다.

### 윤도현

동기로 페이지 데이터를 가져와서 사용하는 경우 유지 보수를 할 때 쉽게 수정할 수 없다고 생각했습니다.
QA하면서 보았던 유저 친화라는 것이 개발자 입장에서 달갑지 않다는 것을 깨달았으며 WebSocket을 이용하면서 실시간 화면이 어떻게 구동하는지 알게되었고 다른 프로젝트에서도 사용해보고 싶다는 생각이 들었습니다.

