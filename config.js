/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "위대웅",
    nameEn: "Daewoong Wee",
    father: "위인호",
    mother: "장기화",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "전고운",
    nameEn: "Gowoong Jeon",
    father: "",
    mother: "이유진",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-22",
    time: "11:30",
    venue: "더세인트",
    hall: "그랜드볼룸홀 6층",
    address: "서울특별시 구로구 신도림동 692",
    tel: "02-2211-2400"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "사랑과 신뢰로 한 걸음 한 걸음\n서로의 인생에 다가선 두 사람이\n하나가 되어 새로운 시작을 하려 합니다.\n귀한 걸음으로 오셔서\n축복해 주시고 함께해 주세요."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/191537409",
    naver: "https://naver.me/xExWm05A"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "위대웅", bank: "새마을금고", number: "9003 3033 9605 6" },
      { role: "아버지", name: "위인호", bank: "하나은행", number: "310 19 00399 2" },
      { role: "어머니", name: "장기화", bank: "하나은행", number: "352 19 01069 7" }
    ],
    bride: [
      { role: "신부", name: "전고운", bank: "신한은행", number: "110 550 722835" },
      { role: "어머니", name: "이유진", bank: "국민은행", number: "558202 01 381881" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "위대웅 ♥ 전고운 결혼합니다",
    description: "2026년 8월 22일, 소중한 분들을 초대합니다."
  }
};
