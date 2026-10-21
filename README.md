# Inference Korea 스터디 보드 · 병아리 추론 연구소

**한국어** · [English](README.en.md) · [中文](README.zh.md)

[Inference Korea](https://songys.github.io/inference-korea/)는 AI 모델을 효율적이고 안정적으로 돌리는 법, 추론 엔지니어링을 공부하는 스터디 커뮤니티입니다.
이 저장소는 『Inference Engineering』(Kiely, P., 2026, Baseten Books)을 10주 동안 함께 읽는 스터디의 안내 보드입니다.
스터디장과 병아리들, 그리고 바쁜 박사님 대신 연구소에서 파견 온 조수와 초파리 연구원이 함께합니다.

- 기간: 2026년 10월 24일 ~ 12월 26일, 매주 토요일 저녁 8시(한국 시간, 가안), 10회
- 장소: Zoom 온라인 (참가 링크와 회의 ID·암호는 보드 첫 쪽 "참가 방법")
- 진행: 회차마다 책 발제 + 논문 발제, 특별 세션(연사 특강)은 Discord로 안내
- 발표 자료: [구글 드라이브 폴더](https://drive.google.com/drive/folders/1NxhUYActOe-POABwqiYdxXBaBg5tY44c)
- 일정·발제자 원본: [스터디 시간표(구글 시트)](https://docs.google.com/spreadsheets/d/1pVf5_bPLA5_UhImUO7EJ_Puh3Q5b485w65WVo1QlFsI/edit?usp=sharing)
- 우리 행사: [LangCon 2026](https://songys.github.io/2026Langcon/)

## 구성 (한국어 · English · 中文)

| 쪽 | 한국어 | English | 中文 |
|---|---|---|---|
| 브리핑 | `index.html` | `en/index.html` | `zh/index.html` |
| 일정표 | `schedule.html` | `en/schedule.html` | `zh/schedule.html` |
| 주제 안내 | `topic.html` | `en/topic.html` | `zh/topic.html` |
| 스터디 안내 | `guide.html` | `en/guide.html` | `zh/guide.html` |

모든 쪽의 오른쪽 위에 언어 전환(한국어 / EN / 中文)이 있습니다.

```
assets/
  css/board.css   공용 스타일
  js/data.js      책 범위·논문·영상·Zoom·링크·LangCon 등 기본 데이터 (세 언어 공용)
  js/board.js     날짜 계산, 구글 시트 읽기, 언어별 문구, 공용 조각
  img/            캐릭터 이미지
```

## 업데이트는 구글 시트에서만

보드는 열릴 때마다 구글 시트 '시간표'를 읽습니다. **저장소에 커밋할 일은 없습니다.**

| 시트에서 고치는 것 | 보드에서 바뀌는 것 |
|---|---|
| **발제자** 칸 (`책 : 이름, 논문: 이름`) | 회차 카드, 다음 모임, 빈 발제 자리 목록, 공지 띠 |
| **날짜** 칸 | D-day, 순서, 캘린더 링크, 스터디 기간 |
| (선택) **시간** 열을 새로 만들면 | 그 회차의 시작 시각 |
| (선택) **발표자료** 열에 링크 | 회차 카드의 "자료 열기" (없으면 드라이브 폴더로 연결) |
| (선택) **비고** 열 | 공지 띠와 카드에 표시, `휴강`이라고 적으면 그 회차를 건너뜀 |
| (선택) **완료** 열에 `O` | 시간 전이라도 완료로 표시 |

- 모임 시간(시작부터 2시간)이 지나면 그 회차는 자동으로 **완료**, 알이 부화하고 다음 모임이 넘어갑니다.
- 시트는 **"링크가 있는 모든 사용자: 보기"**로 공유되어 있어야 합니다. 시트를 읽지 못하면 `data.js`의 기본값이 보입니다.
- 시트의 '회차', '날짜', '발제자' 머리글 이름은 바꾸지 마세요. 열 순서는 바뀌어도 됩니다.
- 영어·중국어 쪽에서는 발제자 이름이 `data.js`의 `names` 표에 있으면 영문으로 보입니다. 새 발제자의 영문 표기를 넣고 싶을 때만 이 표에 추가하세요.
- 날짜 계산 미리 보기: 주소 뒤에 `?today=2026-11-10`

잘 바뀌지 않는 내용(책 범위, 참고 논문, 영상, Zoom 정보, Discord 링크 `discord`, 상단 띠 추가 공지 `notices`)은 `assets/js/data.js`에 있습니다.

## GitHub Pages로 올리기

1. 이 폴더 내용을 저장소 루트에 올립니다 (파일 이름과 폴더 구조는 그대로).
2. 저장소 **Settings → Pages → Build and deployment**에서 Source를 `Deploy from a branch`, 브랜치 `main` / 폴더 `/ (root)`로 지정합니다.
3. 잠시 뒤 `https://<계정>.github.io/<저장소>/`에서 열립니다.

빌드 과정은 없습니다. 글꼴은 Google Fonts에서 불러옵니다.

## 캐릭터 출처

- 스터디장: 스터디 운영진 제공 캐릭터
- 병아리(삐약코어·프리·디코·엔지): LangCon 2026 포스터 캐릭터
- 조수·초파리 연구원: 안상선, 「AI는 이미지를 어떻게 구분할까?」 시리즈 (CC BY-NC 4.0)

실험실의 수치와 병아리 비유는 이 보드에서 만든 설명용입니다.

---
페이지 제작: Reon Ahn (Ahn, Sang-Sun) · contact: sangsun.ahn@m-robo.com · page: [www.ahnboat.xyz](https://www.ahnboat.xyz)
