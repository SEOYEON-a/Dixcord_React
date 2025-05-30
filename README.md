# 게임하면서 채팅하고 전화까지! Dixcord

![Dixcord](https://github.com/user-attachments/assets/a6cd8af9-cc5b-4439-9245-0ab718cbbf04)


## 프로젝트 소개

- Dixcord는 실시간 음성 통화와 채팅이 동시에 가능한 웹 기반 메신저 서비스로, 친구 추가, 단체방 참여, 실시간 상태 확인 등의 기능을 제공합니다.
- Discord 사용 중 불편했던 경험에서 착안하여, 실생활에서 자주 사용할 수 있는 메신저를 직접 구현하고자 했습니다.
- Discord의 기능은 기본적으로 구현하되 팀원들과 기존의 Discord에서 기능적으로 불편했던 점, UI등을 개선하며 개발 능력 향상을 목표로 했습니다.
- 친구 페이지에서 유형별 친구 리스트를 볼 수 있고 친구 요청, 수락 및 거절, 차단 및 삭제 등을 할 수 있습니다.
- 좌측 사이드바에서 친구의 접속 상태를 확인할 수 있고 친구에게 채팅이 오면 해당 친구의 우측에 레드닷이 생깁니다.
- 친구 채팅방에서는 실시간 채팅이 가능하며 친구의 프로필과 가입날짜를 볼 수 있습니다.

<br>

## 팀원 구성

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/SEOYEON-a"><img src="https://github.com/user-attachments/assets/1348490d-a8e3-486c-9d7a-9ac7b3fd684e" width="250px;" height="250px;" alt=""/><br /><sub><b>이서연</b></sub></a><br /></td>
      <td align="center"><img src="https://github.com/user-attachments/assets/4ba22779-886f-400c-b65f-a83f3becaab2" width="250px;" height="250px;"alt=""/><br /><sub><b>장동우</b></sub><br /></td>
      <td align="center"><img src="https://github.com/user-attachments/assets/25e8976f-6bf9-43f5-8b5c-7aef97b691a1" width="250px;" height="250px;"alt=""/><br /><sub><b>설현관</b></sub><br /></td>
     <tr/>
      <td align="center"><img src="https://github.com/user-attachments/assets/be81161e-0bee-4483-84f7-9f5fb93dbfae" width="250px;" height="250px;"alt=""/><br /><sub><b>김윤</b></sub><br /></td>
      <td align="center"><img src="https://github.com/user-attachments/assets/c06919fd-00c8-4aa2-9ffa-25b32597931a" width="250px;" height="250px;"alt=""/><br /><sub><b>원호연</b></sub><br /></td>
      <td align="center"><img src="https://github.com/user-attachments/assets/164d6e0e-6bcb-4314-9aa2-b5c3be181f2d" width="250px;" height="250px;"alt=""/><br /><sub><b>윤도현</b></sub><br /></td>
    </tr>
  </tbody>
</table>

<br>

## 1. 개발 환경

- Front-end : HTML5, CSS3, JS ES6, React 18.3.1
- Back-end : Spring Legacy 5.0.7, Apache Tomcat 9.0, Java 11, Rombok 3.9.11
- DB : ORACLE 11.2.0.2, SQL 21.4.3
- Real Time : WEB SOCKET 4.8.1
- 협업 툴 : Figma, Github, Git, Notion, ERD Cloud
- 디자인 : [Figma](https://www.figma.com/design/g9BHZkhIW2VpjkB0AeL8wM/%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C?node-id=1354-2&t=xdNK9hZ4O73N3iiN-1)
  
<br>

## 2. 페이지별 기능

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
- 친구 삭제하기를 클릭하면 친구가 삭제되고 모든 친구에서 사라지게 되며 좌측 친구목록 리스트에 <br/> 채팅 기록이 있는 유저면 동시에 삭제됩니다.

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
- 이메일을 입력하고 친구 요청 보내기를 클릭하면 요청을 보내지 않거나 이메일이 올바르면 초록색 테두리로 변경되고 <br/> 아래에 친구 요청이 성공했다는 메세지가 나옵니다.
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

## 3. 트러블 슈팅

- [Anotation 이슈](https://github.com/SEOYEON-a/Dixcord_React/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_Anotation)
- [상태 관리 이슈](https://github.com/SEOYEON-a/Dixcord_React/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC)

<br>

## 4. 개선 목표

- API : 구글 로그인 api의 잦은 오류 개선 필요
- 문서 작업 : 시간 문제로 클래스 정의서와 패키지 정의서를 작성하지 못하여 작성 필요

<br>

## 5. 개발 기간

### 개발 기간

- 전체 개발 기간 : 2024-12-02 ~ 2025-01-03
- UI 구현 : 2024-12-02 ~ 2024-12-06
- 기능 구현 : 2024-12-09 ~ 2024-12-27
- CSS 수정 : 2024-12-30 ~ 2025-01-03

<br>

## 6. 역할 분담

### 🌞 이서연

- **역할**
    - Figma 설계
- **UI**
    - 페이지 : 친구 메인 페이지, 모든 친구 페이지, 추천 친구 페이지, 요청 친구 페이지, 대기 중 친구 페이지, 차단 친구 페이지, <br/>
      상세 친구 추가 페이지, 친구 채팅방 페이지, 친구 사이드바 페이지
- **기능**
    - 친구 검색, 친구 차단/삭제, 친구 추가, 친구 수락/거절, 친구 실시간 온/오프라인 상태, 친구 채팅방 알림 레드닷, 실시간 채팅

### 👥 팀원 간단 역할 요약

- **장동우**: 메인/로그인/마이페이지 개발, 회원가입 및 프로필 이미지 업로드 기능 구현  
- **설현관**: 챗봇 페이지 개발, 필터링/음악 재생/도움말 기능 담당  
- **김윤**: 단체 채팅방 UI 및 방 생성/초대/입장 로직 구현  
- **원호연**: 음성 채팅 및 이모지/GIF 기능 구현, 회의록 정리 및 스토리보드 작성  
- **윤도현**: 고객센터/FAQ 페이지 구현, 공지사항/문의글 기능 담당

<br>

## 7. 프로젝트 규칙

### 규칙

프로젝트 규칙 및 수칙

1. 각종 변경사항 있을 시 팀원에게 알리기 / 회의하기
   - ERD ( 테이블 ) 변경사항
   - 페이지 / 코드 변경사항 등
   - 변경사항 회의록에 남기고, 엑셀에 수정하기

2. 매일, 매주 목표치 설정하고 회의 시 목표치 달성 여부 체크하기
   - 가급적 목표치 달성을 위해 최선을 다하기

3. 프로젝트 진행 중 알아볼 수 있게 주석 달기
   - 함수의 역할, 함수 내부의 로직 등
   - CSS 변경 시 문제가 될 수 있는 경우 
   ex) // 이 부분 건드리면 화면 깨짐

4. 로그 잘찍기
   - 전달받는 데이터
   - 전달 할 데이터 (가공 후)
   - 도착한 메소드
  
<br>

## 8. 프로젝트 후기

### 🌞 이서연

설계하고 개발하면서 에러가 발생했을때 확인하는 태도와 회의를 하는 모습 등에서 1차 프로젝트를 했을 때보다 더 성장한 것을 느꼈습니다. <br/>
처음으로 웹소켓을 사용하면서 실시간으로 구동되는 것이 신기했고 css와 피그마 설계를 주도하면서 사용자를 위한 UI, UX가 무엇인지도 알게 되었습니다. <br/>
최종 프로젝트를 하면서 도와주신 팀원분들께 감사하다는 말을 전하고 싶습니다.

### 👥 팀원 한줄 회고 요약

- **장동우**: 정기 회의와 협업을 통해 많은 성장을 느꼈고, 팀워크에 감사함을 느낌  
- **설현관**: 봇 개발 과정에서 팀 코드 전반을 이해하게 되었고, 독립적 구조의 중요성을 느낌  
- **김윤**: 직접 로직을 짜며 코딩 흥미를 되찾고, 팀 분위기 덕분에 질문을 많이 하며 성장함  
- **원호연**: 여러 API와 협업을 통해 개발 실력이 향상되었고, 팀워크에 감사함  
- **윤도현**: 리액트 컴포넌트 활용과 협업의 중요성을 체감함

