/*
 * ROMIH website content
 * 앞으로 문구, 링크, 공연 자료는 이 파일에서만 수정하면 됩니다.
 */
window.ROMIH_CONTENT = {
  profile: {
    eyebrow: "DJ · STORYTELLER",
    taglineBefore: "Not limited by ",
    taglineAccent: "genres",
    taglineAfter: ". Every set tells a different story",
    instagram: "#",
    soundcloud: "#",
    collective: "#"
  },

  images: {
    boothPhoto: "images/image-3.jpg",
    crowdPhoto: "images/image-4.jpg",
    showPhoto1: "images/image-5.jpg",
    showPhoto2: "images/image-6.jpg",
    showPhoto3: "images/image-7.jpg",
    showPhoto4: "images/image-8.jpg",
    showPhoto5: "images/image-9.jpg",
    showPhoto6: "images/image-10.jpg"
  },

  // 헤더 사진은 현재 순서 그대로 유지됩니다.
  heroPhotos: [
    "boothPhoto", "crowdPhoto", "showPhoto1", "showPhoto2",
    "showPhoto3", "showPhoto4", "showPhoto5", "showPhoto6"
  ],

  // 이전 공연은 준비되는 대로 한 개씩 추가하면 됩니다.
  shows: [],

  // 예정된 공연은 날짜순으로 표시됩니다. 시간과 티켓 링크는 생략할 수 있습니다.
  upcoming: [
    {
      date: "2026-08-15",
      title: "FLUX: Open Air Party",
      venue: "Wonderlove",
      city: "Portland, OR",
      url: "https://www.eventbrite.com/e/babsy-wonderlove-flux-open-air-party-tickets-1996503755477?aff=ebdssbdestsearch"
    },
    {
      date: "2026-08-18",
      title: "Chuesday",
      venue: "Wonderlove",
      city: "Portland, OR"
    },
    {
      date: "2026-08-21",
      title: "Why Not Campout",
      venue: "Mount Hood National Forest",
      city: "Portland, OR",
      url: "https://www.whynotcampout.com"
    }
  ]
};
