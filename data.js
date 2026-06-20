// data.js - 영화관 및 상영관 좌석 배치도 핵심 데이터

export const BRANDS = [
  { id: 'cgv', name: 'CGV', color: '#E50914', desc: '대한민국 최대 멀티플렉스이자 압도적인 몰입감의 IMAX관 보유' },
  { id: 'megabox', name: '메가박스', color: '#3B1E78', desc: '돌비 시네마와 화려한 사운드' },
  { id: 'lotte', name: '롯데시네마', color: '#ED1C24', desc: '초대형 스크린 수퍼플렉스' },
  { id: 'others', name: '기타 영화관', color: '#4B5563', desc: '라이카시네마 등 로컬 독립 영화관과 숨겨진 매니아들의 성지' }
];

export const BRANCHES = {
  cgv: [
    // 서울
    { id: 'cgv-yongsan', name: '용산아이파크몰', region: '서울' },
    { id: 'cgv-yeongdeungpo', name: '영등포', region: '서울' },
    { id: 'cgv-wangsimni', name: '왕십리', region: '서울' },
    { id: 'cgv-hongdae', name: '홍대입구', region: '서울' },
    { id: 'cgv-gangnam', name: '강남', region: '서울' },
    { id: 'cgv-gangbyeon', name: '강변', region: '서울' },
    { id: 'cgv-konkuk', name: '건대입구', region: '서울' },
    { id: 'cgv-guro', name: '구로', region: '서울' },
    { id: 'cgv-daehangno', name: '대학로', region: '서울' },
    { id: 'cgv-dongdaemun', name: '동대문', region: '서울' },
    { id: 'cgv-myeongdong', name: '명동', region: '서울' },
    { id: 'cgv-myeongdong-library', name: '명동역 씨네라이브러리', region: '서울' },
    { id: 'cgv-mokdong', name: '목동', region: '서울' },
    { id: 'cgv-songpa', name: '송파', region: '서울' },
    { id: 'cgv-sinchon', name: '신촌아트레온', region: '서울' },
    { id: 'cgv-apgujeong', name: '압구정', region: '서울' },
    { id: 'cgv-yeouido', name: '여의도', region: '서울' },
    { id: 'cgv-cheonho', name: '천호', region: '서울' },
    { id: 'cgv-cheongdam', name: '청담씨네시티', region: '서울' },
    { id: 'cgv-piccadilly', name: '피카디리1958', region: '서울' },
    // 경기/인천
    { id: 'cgv-inchon', name: '인천', region: '인천' },
    { id: 'cgv-inchon-nonhyeon', name: '인천논현', region: '인천' },
    { id: 'cgv-inchon-yeonsu', name: '인천연수', region: '인천' },
    { id: 'cgv-suwon', name: '수원', region: '경기' },
    { id: 'cgv-suwon-station', name: '수원역', region: '경기' },
    { id: 'cgv-ilsan', name: '일산', region: '경기' },
    { id: 'cgv-pankyo', name: '판교', region: '경기' },
    { id: 'cgv-gwanggyo', name: '광교', region: '경기' },
    { id: 'cgv-dongtan', name: '동탄', region: '경기' },
    { id: 'cgv-uijeongbu', name: '의정부', region: '경기' },
    { id: 'cgv-ansan', name: '안산', region: '경기' },
    { id: 'cgv-sofoong', name: '부천소풍', region: '경기' },
    { id: 'cgv-bucheon', name: '부천', region: '경기' },
    { id: 'cgv-yatap', name: '분당야탑', region: '경기' },
    { id: 'cgv-ori', name: '분당오리', region: '경기' },
    { id: 'cgv-pyeongtaek', name: '평택', region: '경기' },
    // 대전/충청
    { id: 'cgv-daejeon', name: '대전', region: '대전' },
    { id: 'cgv-daejeon-terminal', name: '대전터미널', region: '대전' },
    { id: 'cgv-sejong', name: '세종', region: '세종' },
    { id: 'cgv-asan', name: '아산', region: '충청' },
    { id: 'cgv-cheonanpentaport', name: '천안펜타포트', region: '충청' },
    { id: 'cgv-cheongju', name: '청주', region: '충청' },
    { id: 'cgv-hongseong', name: '홍성', region: '충청' },
    // 부산/울산/경상
    { id: 'cgv-seomyeon', name: '서면', region: '부산' },
    { id: 'cgv-centum', name: '센텀시티', region: '부산' },
    { id: 'cgv-asiad', name: '아시아드', region: '부산' },
    { id: 'cgv-ulsansamsan', name: '울산삼산', region: '울산' },
    { id: 'cgv-daegu', name: '대구', region: '대구' },
    { id: 'cgv-daegu-academy', name: '대구아카데미', region: '대구' },
    { id: 'cgv-changwon', name: '창원', region: '경상' },
    { id: 'cgv-pohang', name: '포항', region: '경상' },
    // 광주/전라
    { id: 'cgv-gwangjuterminal', name: '광주터미널', region: '광주' },
    { id: 'cgv-gwangju-sangmu', name: '광주상무', region: '광주' },
    { id: 'cgv-gwangyang', name: '광양', region: '전라' },
    { id: 'cgv-gunsan', name: '군산', region: '전라' },
    { id: 'cgv-jeonju', name: '전주', region: '전라' },
    { id: 'cgv-jeonju-hyoja', name: '전주효자', region: '전라' },
    { id: 'cgv-mokpo', name: '목포', region: '전라' },
    { id: 'cgv-suncheon', name: '순천', region: '전라' },
    { id: 'cgv-yeosu', name: '여수웅천', region: '전라' },
    // 강원/제주
    { id: 'cgv-gangneung', name: '강릉', region: '강원' },
    { id: 'cgv-chuncheon', name: '춘천', region: '강원' },
    { id: 'cgv-wonju', name: '원주', region: '강원' },
    { id: 'cgv-jeju', name: '제주', region: '제주' },
    { id: 'cgv-jeju-nohyeong', name: '제주노형', region: '제주' }
  ],
  megabox: [
    // 서울
    { id: 'mb-coex', name: '코엑스', region: '서울' },
    { id: 'mb-seongsu', name: '성수', region: '서울' },
    { id: 'mb-hongdae', name: '홍대', region: '서울' },
    { id: 'mb-gangnam', name: '강남', region: '서울' },
    { id: 'mb-dongdaemun', name: '동대문', region: '서울' },
    { id: 'mb-mokdong', name: '목동', region: '서울' },
    { id: 'mb-sangam', name: '상암월드컵경기장', region: '서울' },
    { id: 'mb-central', name: '센틀럴(고속터미널)', region: '서울' },
    { id: 'mb-sinchon', name: '신촌', region: '서울' },
    { id: 'mb-isu', name: '이수', region: '서울' },
    { id: 'mb-hwagok', name: '화곡', region: '서울' },
    // 경기/인천
    { id: 'mb-goyang', name: '고양스타필드', region: '경기' },
    { id: 'mb-namyangju', name: '남양주현대아울렛 Space1', region: '경기' },
    { id: 'mb-dongtan', name: '동탄', region: '경기' },
    { id: 'mb-baekseok', name: '백석', region: '경기' },
    { id: 'mb-bundang', name: '분당', region: '경기' },
    { id: 'mb-suwonstarfield', name: '수원스타필드', region: '경기' },
    { id: 'mb-yeongtong', name: '영통', region: '경기' },
    { id: 'mb-kintex', name: '킨텍스', region: '경기' },
    { id: 'mb-hanam', name: '하남스타필드', region: '경기' },
    { id: 'mb-songdo', name: '송도', region: '인천' },
    // 대전/충청
    { id: 'mb-daejeon', name: '대전', region: '대전' },
    { id: 'mb-daejeon-shinsegae', name: '대전신세계 Art & Science', region: '대전' },
    { id: 'mb-sejong', name: '세종', region: '세종' },
    { id: 'mb-ochang', name: '오창', region: '충청' },
    { id: 'mb-cheonan', name: '천안', region: '충청' },
    // 부산/울산/경상
    { id: 'mb-daegu-shinsegae', name: '대구신세계', region: '대구' },
    { id: 'mb-deokcheon', name: '덕천', region: '부산' },
    { id: 'mb-pnu', name: '부산대', region: '부산' },
    { id: 'mb-sasang', name: '사상', region: '부산' },
    { id: 'mb-seomyeon', name: '서면', region: '부산' },
    { id: 'mb-ulsan', name: '울산', region: '울산' },
    { id: 'mb-haeundae', name: '해운대(장산)', region: '부산' },
    // 광주/전라
    { id: 'mb-gwangju-sangmu', name: '광주상무', region: '광주' },
    { id: 'mb-suncheon', name: '순천', region: '전라' },
    { id: 'mb-yeosu', name: '여수웅천', region: '전라' },
    { id: 'mb-jeonju', name: '전주혁신', region: '전라' },
    // 강원/제주
    { id: 'mb-chuncheon', name: '남춘천', region: '강원' },
    { id: 'mb-wonju', name: '원주', region: '강원' },
    { id: 'mb-jeju', name: '제주서귀포', region: '제주' }
  ],
  lotte: [
    // 서울
    { id: 'lc-worldtower', name: '월드타워', region: '서울' },
    { id: 'lc-konkuk', name: '건대입구', region: '서울' },
    { id: 'lc-sillim', name: '신림', region: '서울' },
    { id: 'lc-gasan', name: '가산디지털', region: '서울' },
    { id: 'lc-gayang', name: '가양', region: '서울' },
    { id: 'lc-gimpo', name: '김포공항', region: '서울' },
    { id: 'lc-nowon', name: '노원', region: '서울' },
    { id: 'lc-snu', name: '서울대입구', region: '서울' },
    { id: 'lc-sindorim', name: '신도림', region: '서울' },
    { id: 'lc-yeongdeungpo', name: '영등포', region: '서울' },
    { id: 'lc-yongsan', name: '용산', region: '서울' },
    { id: 'lc-cheongnyangni', name: '청량리', region: '서울' },
    { id: 'lc-hapjeong', name: '합정', region: '서울' },
    { id: 'lc-hongdae', name: '홍대입구', region: '서울' },
    // 경기/인천
    { id: 'lc-gwanggyo', name: '광교아울렛', region: '경기' },
    { id: 'lc-gwangmyeong', name: '광명아울렛', region: '경기' },
    { id: 'lc-guri', name: '구리', region: '경기' },
    { id: 'lc-dongtan', name: '동탄', region: '경기' },
    { id: 'lc-byeongjeom', name: '병점', region: '경기' },
    { id: 'lc-bucheon', name: '부천', region: '경기' },
    { id: 'lc-bupyeong', name: '부평역사', region: '인천' },
    { id: 'lc-seongnam', name: '성남중앙', region: '경기' },
    { id: 'lc-suwon', name: '수원', region: '경기' },
    { id: 'lc-suwon-station', name: '수원역', region: '경기' },
    { id: 'lc-siheung', name: '시흥장현', region: '경기' },
    { id: 'lc-ansan', name: '안산', region: '경기' },
    { id: 'lc-anyang', name: '안양일번가', region: '경기' },
    { id: 'lc-giheung', name: '용인기흥', region: '경기' },
    { id: 'lc-wye', name: '위례', region: '경기' },
    { id: 'lc-inchon-asiad', name: '인천아시아드', region: '인천' },
    { id: 'lc-inchon-terminal', name: '인천터미널', region: '인천' },
    { id: 'lc-ilsan', name: '일산', region: '경기' },
    { id: 'lc-pyeongchon', name: '평촌', region: '경기' },
    { id: 'lc-pyeongtaek', name: '평택', region: '경기' },
    // 대전/충청
    { id: 'lc-daejeon', name: '대전', region: '대전' },
    { id: 'lc-daejeon-central', name: '대전센트럴', region: '대전' },
    { id: 'lc-asan', name: '아산터미널', region: '충청' },
    { id: 'lc-cheongju', name: '서청주', region: '충청' },
    { id: 'lc-chungju', name: '충주', region: '충청' },
    // 부산/울산/경상
    { id: 'lc-daegu-dongseongro', name: '동성로', region: '대구' },
    { id: 'lc-gwangbok', name: '광복', region: '부산' },
    { id: 'lc-dongnae', name: '동래', region: '부산' },
    { id: 'lc-busan-station', name: '부산본점', region: '부산' },
    { id: 'lc-centum', name: '센텀시티', region: '부산' },
    { id: 'lc-ulsan', name: '울산', region: '울산' },
    { id: 'lc-changwon', name: '창원', region: '경상' },
    { id: 'lc-pohang', name: '포항', region: '경상' },
    // 광주/전라
    { id: 'lc-gwangju', name: '광주', region: '광주' },
    { id: 'lc-gwangsan', name: '광산', region: '광주' },
    { id: 'lc-gunsan', name: '군산몰', region: '전라' },
    { id: 'lc-suwan', name: '수완', region: '광주' },
    { id: 'lc-suncheon', name: '순천', region: '전라' },
    { id: 'lc-yeosu', name: '여수', region: '전라' },
    { id: 'lc-jeonju', name: '전주', region: '전라' },
    // 강원/제주
    { id: 'lc-wonju', name: '원주무실', region: '강원' },
    { id: 'lc-chuncheon', name: '춘천', region: '강원' },
    { id: 'lc-jeju-ara', name: '제주아라', region: '제주' },
    { id: 'lc-seoguipo', name: '서귀포', region: '제주' }
  ],
  others: [
    // 서울
    { id: 'ot-sindorim', name: '씨네Q 신도림', region: '서울' },
    { id: 'ot-daehan', name: '대한극장', region: '서울' },
    { id: 'ot-laika', name: '라이카시네마 (연희)', region: '서울' },
    { id: 'ot-emu', name: '에무시네마 (광화문)', region: '서울' },
    { id: 'ot-theforest', name: '더숲 아트시네마 (노원)', region: '서울' },
    { id: 'ot-seoulart', name: '서울아트시네마 (중구)', region: '서울' },
    { id: 'ot-momo', name: '아트하우스 모모 (이화여대)', region: '서울' },
    { id: 'ot-filmforum', name: '필름포럼 (신촌)', region: '서울' },
    { id: 'ot-kofa', name: '시네마테크 KOFA (상암)', region: '서울' },
    { id: 'ot-indiespace', name: '인디스페이스 (홍대)', region: '서울' },
    { id: 'ot-arirang', name: '아리랑시네센터 (성북)', region: '서울' },
    // 경기/인천/강원
    { id: 'ot-juan', name: '영화공간 주안 (인천)', region: '인천' },
    { id: 'ot-heyri', name: '헤이리시네마 (파주)', region: '경기' },
    { id: 'ot-shining', name: '강릉독립예술극장 신영', region: '강원' },
    // 대전/충청/전라/광주
    { id: 'ot-dj-art', name: '대전아트시네마', region: '대전' },
    { id: 'ot-cineq-chungju', name: '씨네Q 충주연수', region: '충청' },
    { id: 'ot-gj-indie', name: '광주독립영화관', region: '광주' },
    { id: 'ot-jj-indie', name: '전주디지털독립영화관', region: '전라' },
    { id: 'ot-cineq-jeonju', name: '씨네Q 전주영화의거리', region: '전라' },
    // 부산/대구/울산/경상
    { id: 'ot-rhizome', name: '씨네아트 리좀 (창원)', region: '경상' },
    { id: 'ot-corner', name: '모퉁이극장 (부산)', region: '부산' },
    { id: 'ot-kukdo', name: '국도예술관 (부산)', region: '부산' },
    { id: 'ot-andong', name: '안동중앙아트시네마', region: '경상' },
    { id: 'ot-indieplus-dg', name: '인디플러스 대구', region: '대구' }
  ]
};

// 상영관별 좌석 배치도 및 특성 정의
export const SCREENS = {
  'cgv-yongsan': [
    {
      id: 'yong-imax',
      name: 'IMAX관 (용아맥)',
      type: 'IMAX',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
      cols: 28,
      aisles: [4, 24], // 4번과 5번 사이, 24번과 25번 사이 통로 (1-indexed)
      wheelchairs: ['P1', 'P2', 'P27', 'P28'],
      seatCount: 444,
      desc: '국내 최대 크기의 IMAX 스크린. 압도적인 몰입감.'
    },
    {
      id: 'yong-4dx',
      name: '4DX SCREEN관',
      type: '4DX',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
      cols: 16,
      aisles: [4, 12],
      wheelchairs: ['K1', 'K16'],
      seatCount: 174,
      desc: '모션 시트와 사방 스크린의 결합, 역동적인 오감 체험관.'
    },
    {
      id: 'yong-park',
      name: '17관 (박찬욱관 / 아트하우스)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
      cols: 14,
      aisles: [4, 10],
      wheelchairs: ['M1', 'M2'],
      seatCount: 182,
      desc: '한국 영화의 거장 박찬욱 감독 헌정관. 예술 영화와 독립 영화 전용 고품격 스크린.'
    },
    {
      id: 'yong-1',
      name: '1관 (일반 2D)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
      cols: 16,
      aisles: [4, 12],
      wheelchairs: ['K1', 'K2'],
      seatCount: 174,
      desc: '용산아이파크몰의 기본 2D 표준 상영관.'
    },
    {
      id: 'yong-tempur',
      name: 'TEMPUR CINEMA (템퍼시네마)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E'],
      cols: 10,
      aisles: [5],
      wheelchairs: ['E1', 'E10'],
      seatCount: 50,
      desc: '세계 최초 매트리스 브랜드 템퍼와의 콜라보로 탄생한 최고급 모션 베드 침대 극장.'
    },
    {
      id: 'yong-2d-15',
      name: '15관 (일반 2D)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      cols: 20,
      aisles: [5, 15],
      wheelchairs: ['L1', 'L2'],
      seatCount: 238,
      desc: '쾌적한 좌석 배치를 자랑하는 일반 레이아웃 관.'
    }
  ],
  'cgv-yeongdeungpo': [
    {
      id: 'ydp-screenx',
      name: 'ScreenX PLF관',
      type: 'ScreenX',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
      cols: 24,
      aisles: [6, 18],
      wheelchairs: ['N1', 'N24'],
      seatCount: 334,
      desc: '정면과 좌우 벽면까지 3면을 스크린으로 쓰는 초광각 멀티 프로젝션 관.'
    },
    {
      id: 'ydp-2d-5',
      name: '5관 (일반 2D)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
      cols: 18,
      aisles: [4, 14],
      wheelchairs: ['K1'],
      seatCount: 197,
      desc: '표준적인 레이아웃의 상영관.'
    }
  ],
  'cgv-wangsimni': [
    {
      id: 'ws-imax',
      name: 'IMAX관',
      type: 'IMAX',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      cols: 22,
      aisles: [4, 18],
      wheelchairs: ['L1', 'L22'],
      seatCount: 262,
      desc: '용아맥 이전 서울 IMAX의 중심지.'
    }
  ],
  'cgv-hongdae': [
    {
      id: 'hd-2d-1',
      name: '1관 (일반 2D)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      cols: 16,
      aisles: [4, 12],
      wheelchairs: ['J1'],
      seatCount: 159,
      desc: '홍대 젊음의 거리 중심에 위치한 캐주얼한 일반관.'
    }
  ],
  'mb-coex': [
    {
      id: 'cx-dolby',
      name: 'Dolby Cinema (돌비관)',
      type: 'Dolby',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
      cols: 22,
      aisles: [5, 17],
      wheelchairs: ['M1', 'M2', 'M21', 'M22'],
      seatCount: 282,
      desc: '돌비 비전의 압도적 시각 효과와 돌비 애트모스의 입체 음향의 완벽한 결합.'
    },
    {
      id: 'cx-2d-2',
      name: '2관 (일반 2D)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
      cols: 20,
      aisles: [4, 16],
      wheelchairs: ['K1', 'K2'],
      seatCount: 218,
      desc: '선명한 사운드 밸런스가 강점인 대형 일반관.'
    }
  ],
  'mb-seongsu': [
    {
      id: 'ss-dolby',
      name: 'Dolby Cinema',
      type: 'Dolby',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
      cols: 18,
      aisles: [4, 14],
      wheelchairs: ['K1', 'K18'],
      seatCount: 196,
      desc: '컴팩트하지만 음향 몰입감이 매우 뛰어난 돌비 시네마.'
    }
  ],
  'mb-hongdae': [
    {
      id: 'mbh-2d-1',
      name: '1관 (일반 2D)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      cols: 14,
      aisles: [3, 11],
      wheelchairs: ['J1'],
      seatCount: 139,
      desc: '아늑하고 쾌적한 2D 일반관.'
    }
  ],
  'mb-daejeon': [
    {
      id: 'dj-dolby',
      name: 'Dolby Cinema',
      type: 'Dolby',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      cols: 20,
      aisles: [4, 16],
      wheelchairs: ['L1', 'L2'],
      seatCount: 238,
      desc: '중부권 최고의 돌비 시네마 상영관.'
    }
  ],
  'lc-worldtower': [
    {
      id: 'wt-superplex',
      name: '수퍼플렉스 (Super Plex)',
      type: '2D', // 대형 스크린 특성
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
      cols: 30,
      aisles: [5, 25],
      wheelchairs: ['P1', 'P2', 'P29', 'P30'],
      seatCount: 476,
      desc: '압도적인 데시벨의 오디오와 세계 최대 수준의 울트라 와이드 스크린.'
    },
    {
      id: 'wt-2d-5',
      name: '5관 (일반 2D)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      cols: 20,
      aisles: [5, 15],
      wheelchairs: ['L1'],
      seatCount: 239,
      desc: '기본에 충실한 롯데시네마 대표 표준 상영관.'
    }
  ],
  'lc-konkuk': [
    {
      id: 'kk-2d-3',
      name: '3관 (일반 2D)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
      cols: 18,
      aisles: [4, 14],
      wheelchairs: ['K1'],
      seatCount: 197,
      desc: '건대 상권에 위치하여 유동인구가 많은 대중적인 일반 상영관.'
    }
  ],
  'lc-sillim': [
    {
      id: 'sl-2d-1',
      name: '1관 (일반 2D)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      cols: 16,
      aisles: [4, 12],
      wheelchairs: ['J1'],
      seatCount: 159,
      desc: '역세권에 입지한 아담한 규모의 2D 전용관.'
    }
  ],
  'ot-sindorim': [
    {
      id: 'sd-cineq',
      name: '1관 (Premium CineQ)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      cols: 16,
      aisles: [4, 12],
      wheelchairs: ['J1', 'J16'],
      seatCount: 158,
      desc: '넓은 전 좌석 가죽 시트와 쾌적한 피치를 자랑하는 편안한 영화관.'
    }
  ],
  'ot-daehan': [
    {
      id: 'dh-1',
      name: '1관 (역사관)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      cols: 18,
      aisles: [4, 14],
      wheelchairs: ['L1'],
      seatCount: 215,
      desc: '전통 있는 한국 영화의 메카, 충무로 대한극장의 메인 상영관.'
    }
  ],
  'ot-laika': [
    {
      id: 'laika-1',
      name: '1관 (COCOON)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      cols: 10,
      aisles: [3, 8],
      wheelchairs: ['G1'],
      seatCount: 68,
      desc: '연희동 골목길에 숨겨진 복합문화공간 라이카시네마의 아늑하고 현대적인 독립영화관.'
    }
  ],
  'ot-emu': [
    {
      id: 'emu-1',
      name: '1관 (경희궁 뒷뜰)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F'],
      cols: 8,
      aisles: [3],
      wheelchairs: ['F1'],
      seatCount: 47,
      desc: '광화문 숲속에 자리 잡은 문학관 복합예술 극장. 고즈넉한 독립 영화 감상 공간.'
    }
  ],
  'ot-theforest': [
    {
      id: 'forest-1',
      name: '1관 (숲)',
      type: '2D',
      rows: ['A', 'B', 'C', 'D', 'E', 'F'],
      cols: 8,
      aisles: [3],
      wheelchairs: ['F1'],
      seatCount: 47,
      desc: '노원구 복합문화공간 더숲에 위치한 작은 영화관. 커피 향 가득한 아트하우스 스크린.'
    }
  ]
};

// 영화 종류 정의
export const MOVIE_TYPES = [
  { id: 'domestic', name: '국내 영화 (자막 없음)', desc: '자막 없이 배우의 대사와 행동에 몰입하는 일반 영화' },
  { id: 'foreign', name: '해외 영화 (자막 있음)', desc: '화면 아래쪽 자막 판독이 필요하여 최적 시야가 조금 뒤쪽으로 형성됨' },
  { id: 'musical', name: '뮤지컬 & 음악 영화', desc: '상영관의 스피커 지향각이 교차하는 사운드 스위트스팟 중심 추천' }
];

// 기본 시드 리뷰 데이터 (사용자에게 입체감 있는 후기 제공)
export const DEFAULT_REVIEWS = {
  'yong-imax': {
    'H14': [
      { rating: 5, comment: '용아맥 최고의 명당입니다! 시야 꽉 차고 사운드도 가슴을 울립니다. 강추!', date: '2026-06-15' },
      { rating: 5, comment: '자막 볼 때도 눈 전혀 안 피로하고 한눈에 들어와요.', date: '2026-06-18' }
    ],
    'I15': [
      { rating: 5, comment: 'H열도 좋지만 I열이 목도 더 편하고 영화 감상하기 최고입니다.', date: '2026-06-12' }
    ],
    'D14': [
      { rating: 2, comment: '화면이 너무 커서 좌우로 눈을 굴려야 합니다. 목이 조금 아프네요.', date: '2026-06-10' }
    ],
    'A14': [
      { rating: 1, comment: '여기는 목디스크 걸리기 십상입니다. 예매 실패해서 앉았는데 다신 안 옴.', date: '2026-06-01' }
    ]
  },
  'cx-dolby': {
    'I11': [
      { rating: 5, comment: '돌비 시네마 오디오 튜닝이 완벽하게 체감됩니다. 사방에서 음향이 쏟아져요!', date: '2026-06-14' },
      { rating: 5, comment: '화질도 좋고 최적의 자리입니다.', date: '2026-06-19' }
    ],
    'B11': [
      { rating: 2, comment: '앞이라 사운드가 앞에서만 꽂히고 돌비 특유의 공간감이 안 살아요. 아쉽.', date: '2026-06-05' }
    ]
  }
};

/**
 * 특정 상영관 유형과 영화 특성에 따라 각 좌석의 명당 등급을 계산하는 함수
 * @param {string} screenType - IMAX, Dolby, ScreenX, 4DX, 2D
 * @param {string} movieType - domestic, foreign, musical
 * @param {string} row - 좌석 행 이름 (예: 'A', 'B' ...)
 * @param {number} col - 좌석 열 번호 (예: 1, 2, 3 ...)
 * @param {Array} allRows - 전체 행 이름 배열 (예: ['A', 'B', ...])
 * @param {number} totalCols - 전체 열 개수
 * @returns {object} { rating: 'best'|'good'|'normal'|'avoid', score: number, desc: string }
 */
export function evaluateSeat(screenType, movieType, row, col, allRows, totalCols) {
  const rowIndex = allRows.indexOf(row);
  const totalRows = allRows.length;
  
  // 0-indexed로 정규화된 값 계산
  const rowRatio = rowIndex / (totalRows - 1 || 1); // 0 (맨앞) ~ 1 (맨뒤)
  const colIndex = col - 1;
  const midCol = (totalCols - 1) / 2;
  const colDistance = Math.abs(colIndex - midCol);
  const colRatio = colDistance / (midCol || 1); // 0 (중앙) ~ 1 (맨끝)

  let rating = 'normal';
  let score = 3;
  let desc = '무난하게 관람 가능한 좌석입니다.';

  // 극단적인 외곽 좌석 및 맨 앞 줄 기본 비추천
  if (rowIndex === 0) {
    return { rating: 'avoid', score: 1, desc: '맨 앞 좌석은 스크린이 너무 가깝고 시야각이 좁아 목에 강한 피로감을 줍니다.' };
  }
  if (colRatio > 0.85) {
    return { rating: 'avoid', score: 1.5, desc: '좌측/우측 벽면에 가까워 화면 왜곡이 심하고 사운드 균형이 맞지 않습니다.' };
  }

  // 상영관 종류별 특성에 따른 평가 알고리즘
  if (screenType === 'IMAX') {
    // IMAX 핵심: 화면이 엄청 커서 시야가 한눈에 채워져야 하지만 너무 가깝지 않아야 함.
    // 보통 전체 16행 기준 G(6) ~ J(9) 가 명당
    let bestStartRatio = 0.4;
    let bestEndRatio = 0.65;
    
    // 자막 유무 보정 (자막이 있으면 조금 더 뒤에서 봐야 편함)
    if (movieType === 'foreign') {
      bestStartRatio = 0.5;
      bestEndRatio = 0.75;
      desc = '자막 시독성 확보를 위해 IMAX 스크린 전체와 하단 자막이 시야에 편하게 차는 자리입니다.';
    } else if (movieType === 'musical') {
      bestStartRatio = 0.45;
      bestEndRatio = 0.68;
      desc = '웅장한 멀티 채널 사운드가 모이는 중앙 사운드 중심 자리입니다.';
    } else {
      desc = '화면 몰입도가 극대화되는 시각적 최적 지점입니다.';
    }

    if (rowRatio >= bestStartRatio && rowRatio <= bestEndRatio && colRatio <= 0.25) {
      rating = 'best';
      score = 5;
    } else if (rowRatio >= (bestStartRatio - 0.15) && rowRatio <= (bestEndRatio + 0.1) && colRatio <= 0.5) {
      rating = 'good';
      score = 4;
      desc = '명당과 인접하여 시야 몰입도가 훌륭한 좌석입니다.';
    } else if (rowRatio < 0.25) {
      rating = 'avoid';
      score = 1.8;
      desc = 'IMAX 특성상 스크린이 너무 거대하게 다가와 시선 분산 및 목 통증을 느낄 수 있습니다.';
    }
  } 
  else if (screenType === 'Dolby') {
    // Dolby Cinema 핵심: 서라운드 사운드의 지향점이 한데 뭉치는 '음향 스위트 스팟(Sweat Spot)'이 제일 중요.
    // 보통 중간 행(F ~ I열)과 정중앙 구역.
    let bestStartRatio = 0.45;
    let bestEndRatio = 0.7;

    if (movieType === 'musical') {
      // 뮤지컬 영화의 경우 음향 집중도가 높은 구역이 더 세밀해짐
      bestStartRatio = 0.5;
      bestEndRatio = 0.68;
      desc = '돌비 애트모스의 다차원 입체 음향 밸런스가 가장 정밀하게 구현되는 메인 음향 스팟입니다.';
    } else if (movieType === 'foreign') {
      bestStartRatio = 0.52;
      bestEndRatio = 0.73;
      desc = '서라운드 입체 음향과 더불어 하단 자막이 편안하게 잡히는 명당자리입니다.';
    } else {
      desc = '돌비 비전의 깊은 명암비와 사방 음향이 완벽히 조화되는 오디오/비주얼 스위트스팟입니다.';
    }

    if (rowRatio >= bestStartRatio && rowRatio <= bestEndRatio && colRatio <= 0.22) {
      rating = 'best';
      score = 5;
    } else if (rowRatio >= (bestStartRatio - 0.12) && rowRatio <= (bestEndRatio + 0.08) && colRatio <= 0.45) {
      rating = 'good';
      score = 4;
      desc = '돌비의 우수한 몰입감을 편안하게 즐길 수 있는 우수석입니다.';
    } else if (rowRatio < 0.22) {
      rating = 'avoid';
      score = 2.0;
      desc = '스크린과의 거리가 가깝고 서라운드 스피커의 소리가 머리 위를 지나가 음향 입체감이 떨어집니다.';
    }
  } 
  else if (screenType === 'ScreenX') {
    // ScreenX 핵심: 3면 벽을 사용하므로, 사이드 스크린 시야까지 확보하기 위해 '맨 뒤에 가까운 열'에 앉아야 함.
    // 뒷열 중앙이 Royal zone.
    let bestStartRatio = 0.65;
    let bestEndRatio = 0.88;

    desc = '정면 스크린뿐 아니라 좌우 3면의 와이드 뷰가 시선 외곽선에 편안하게 걸리는 이상적인 ScreenX 명당입니다.';

    if (rowRatio >= bestStartRatio && rowRatio <= bestEndRatio && colRatio <= 0.25) {
      rating = 'best';
      score = 5;
    } else if (rowRatio >= 0.5 && rowRatio <= 0.95 && colRatio <= 0.5) {
      rating = 'good';
      score = 4;
      desc = '3면 와이드 시야각이 적당히 한눈에 들어오는 권장 좌석입니다.';
    } else if (rowRatio < 0.45) {
      rating = 'avoid';
      score = 1.5;
      desc = '스크린과 너무 가까워 좌우 벽면 스크린의 사이드 영상을 거의 인지하지 못합니다.';
    }
  } 
  else if (screenType === '4DX') {
    // 4DX 핵심: 상영관 크기가 보통 크지 않고 모션 베이스 효과가 가득함.
    // 너무 앞이면 어지럽고 뒤면 스크린 몰입이 낮아짐. 중앙 정렬이 최고.
    let bestStartRatio = 0.4;
    let bestEndRatio = 0.65;

    desc = '모션 체어의 진동/움직임 효과와 특수 환경 효과가 화면 모션과 일치하여 제일 큰 현실감을 주는 구간입니다.';

    if (rowRatio >= bestStartRatio && rowRatio <= bestEndRatio && colRatio <= 0.25) {
      rating = 'best';
      score = 5;
    } else if (rowRatio >= 0.3 && rowRatio <= 0.75 && colRatio <= 0.45) {
      rating = 'good';
      score = 4;
      desc = '다이나믹한 4DX 효과와 시야 밸런스가 우수한 구역입니다.';
    } else if (rowRatio < 0.25) {
      rating = 'avoid';
      score = 1.8;
      desc = '격렬한 좌석 움직임과 정면 스크린 왜곡으로 어지러움(멀미) 또는 눈의 피로를 유발할 수 있습니다.';
    }
  } 
  else {
    // 일반 2D 상영관
    // 시선 일치도가 가장 좋은 중간보다 약간 뒤 (55% ~ 75%)
    let bestStartRatio = 0.5;
    let bestEndRatio = 0.72;

    if (movieType === 'foreign') {
      bestStartRatio = 0.58;
      bestEndRatio = 0.78;
      desc = '자막을 읽으면서 정면 시야를 잃지 않는 장시간 관람 최적의 자리입니다.';
    } else if (movieType === 'musical') {
      bestStartRatio = 0.45;
      bestEndRatio = 0.65;
      desc = '중앙 오디오 출력 밸런스가 집중되는 2D 시네마 사운드 스팟입니다.';
    } else {
      desc = '일반 스크린을 정면으로 평안히 올려다보는 아이레벨(Eye-Level) 스위트스팟입니다.';
    }

    if (rowRatio >= bestStartRatio && rowRatio <= bestEndRatio && colRatio <= 0.25) {
      rating = 'best';
      score = 5;
    } else if (rowRatio >= (bestStartRatio - 0.15) && rowRatio <= (bestEndRatio + 0.1) && colRatio <= 0.45) {
      rating = 'good';
      score = 4;
      desc = '스크린 왜곡이 없고 시야가 넓게 트이는 쾌적한 추천 좌석입니다.';
    } else if (rowRatio < 0.25) {
      rating = 'avoid';
      score = 2.0;
      desc = '스크린을 과도하게 올려다봐야 해서 장시간 관람 시 목과 허리에 큰 부담을 줍니다.';
    }
  }

  return { rating, score, desc };
}

/**
 * 지점의 브랜드와 지점명을 기반으로 등록된 상영관이 없으면 동적으로 자동 생성하는 함수
 * @param {object} branch - 지점 객체 (id, name, region)
 * @returns {Array} 상영관 객체 배열
 */
export function getScreensForBranch(branch) {
  const branchId = branch.id;
  const branchName = branch.name;

  // 1. 수동 정의된 상영관이 있는 경우 우선 반환
  if (SCREENS[branchId]) {
    return SCREENS[branchId];
  }

  // 2. 수동 정의된 상영관이 없는 경우 브랜드를 파악하여 동적 생성
  const brandId = branchId.split('-')[0] || branchId.substring(0, 2);
  const screens = [];
  let hasSpecial = false;

  // IMAX 보유 지점 아이디 매핑 (실제 국내 IMAX관 리스트 일부)
  const imaxBranches = [
    'cgv-inchon', 'cgv-suwon', 'cgv-ilsan', 'cgv-daejeon', 
    'cgv-daegu', 'cgv-gwangjuterminal', 'cgv-seomyeon', 
    'cgv-ulsansamsan', 'cgv-pankyo', 'cgv-cheonanpentaport', 
    'cgv-uijeongbu', 'cgv-sofoong', 'cgv-cheonho'
  ];

  // Dolby Cinema 보유 지점 아이디 매핑 (국내 돌비 시네마 주요 지점)
  const dolbyBranches = [
    'mb-daejeon-shinsegae', 'mb-songdo', 'mb-namyangju', 'mb-suwonstarfield', 'mb-goyang'
  ];

  if (brandId === 'cgv') {
    // 1. IMAX관 동적 추가
    const isImax = imaxBranches.includes(branchId) || branchName.includes('IMAX');
    if (isImax) {
      screens.push({
        id: `${branchId}-imax`,
        name: 'IMAX관 (동적)',
        type: 'IMAX',
        rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
        cols: 24,
        aisles: [4, 20],
        wheelchairs: ['O1', 'O24'],
        seatCount: 360,
        desc: '초대형 와이드 스크린과 선명한 화질을 자랑하는 아이맥스 스크린.'
      });
      hasSpecial = true;
    }

    // 2. 4DX관 동적 추가 (특정 거점 지점 위주)
    const is4DX = ['인천', '수원', '서면', '광주터미널', '센텀시티', '대구', '대전', '판교'].some(k => branchName.includes(k));
    if (is4DX) {
      screens.push({
        id: `${branchId}-4dx`,
        name: '4DX관 (동적)',
        type: '4DX',
        rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        cols: 16,
        aisles: [4, 12],
        wheelchairs: ['J1', 'J16'],
        seatCount: 160,
        desc: '바람, 빛, 모션 등 다이내믹 시트가 탑재된 오감 체험 특별관.'
      });
      hasSpecial = true;
    }
  } else if (brandId === 'mb') {
    // 1. Dolby Cinema 동적 추가
    const isDolby = dolbyBranches.includes(branchId) || branchName.includes('돌비') || branchName.includes('Dolby');
    if (isDolby) {
      screens.push({
        id: `${branchId}-dolby`,
        name: 'Dolby Cinema (동적)',
        type: 'Dolby',
        rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
        cols: 20,
        aisles: [4, 16],
        wheelchairs: ['L1', 'L20'],
        seatCount: 240,
        desc: '입체 서라운드 사운드 밸런스와 완벽한 블랙 대비의 돌비 시네마.'
      });
      hasSpecial = true;
    }
  } else if (brandId === 'lc') {
    // 1. 수퍼플렉스 대형관 동적 추가
    const isSuperPlex = ['수원', '은평', '광복', '동탄', '가산', '청량리'].some(k => branchName.includes(k));
    if (isSuperPlex) {
      screens.push({
        id: `${branchId}-superplex`,
        name: '수퍼플렉스 (동적)',
        type: '2D',
        rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
        cols: 26,
        aisles: [5, 21],
        wheelchairs: ['O1', 'O2', 'O25', 'O26'],
        seatCount: 390,
        desc: '롯데시네마 특유의 시원한 대형 스크린과 강력한 몰입감 제공.'
      });
      hasSpecial = true;
    }
  }

  // 3. 기본 일반 2D 상영관 배치 (2D관 2~3개 자동 생성)
  const generalCount = hasSpecial ? 2 : 3;
  for (let i = 1; i <= generalCount; i++) {
    const screenNo = hasSpecial ? i + 1 : i;
    let rows, cols, aisles;
    
    // 지연 방지 및 다변화를 위해 인덱스별 레이아웃 차별화
    if (i === 1) {
      rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
      cols = 16;
      aisles = [4, 12];
    } else if (i === 2) {
      rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
      cols = 18;
      aisles = [4, 14];
    } else {
      rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      cols = 14;
      aisles = [3, 11];
    }

    screens.push({
      id: `${branchId}-2d-${screenNo}`,
      name: `${screenNo}관 (일반 2D)`,
      type: '2D',
      rows: rows,
      cols: cols,
      aisles: aisles,
      wheelchairs: [`${rows[rows.length - 1]}1`],
      seatCount: (rows.length * cols) - 1,
      desc: '선명한 스크린과 표준 2D 영사 레이아웃을 가진 쾌적한 일반관.'
    });
  }

  return screens;
}

