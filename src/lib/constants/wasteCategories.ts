import { WasteCategoryTypes } from '@/lib/types/wasteTypes';

export const wasteCategories: WasteCategoryTypes[] = [
  {
    id: 'paper',
    name: '종이',
    img: 'paper',
    items: [
      {
        id: 'newspaper',
        name: '신문지',
        img: 'newspaper',
        disposalMethod:
          '1. 물기에 젖지 않도록 하고 반듯하게 펴서 차곡차곡 쌓은 후 묶어서 배출 2. 비닐코팅된 광고지, 비닐류, 기타 오물이 섞이지 않도록 함',
      },
      { id: 'ricebag', name: '쌀포대', img: 'ricebag', disposalMethod: '쌀포대 버리는 방법' },
      {
        id: 'notebook',
        name: '수첩',
        img: 'notebook',
        disposalMethod: '스프링 등 종이류와 다른 재질은 제거한 후 배출한다.',
      },
      {
        id: 'magazine',
        name: '잡지',
        img: 'magazine',
        disposalMethod: '스프링 등 종이류와 다른 재질은 제거한 후 배출한다.',
      },
      {
        id: 'priceTag',
        name: '가격표',
        img: 'priceTag',
        disposalMethod:
          '1. 물기에 젖지 않도록 하고 반듯하게 펴서 차곡차곡 쌓은 후 묶어서 배출 2. 비닐코팅된 광고지, 비닐류, 기타 오물이 섞이지 않도록 함',
      },
      {
        id: 'cardboard',
        name: '골판지',
        img: 'cardboard',
        disposalMethod:
          '비닐코팅 부분, 상자에 붙어있는 테이프ㆍ철핀, 알루미늄박 등을 제거하고 접어서 배출 - 야외 별도 보관 장소마련 등 다른 종이류와 섞이지 않게 배출',
      },
      {
        id: 'flyer',
        name: '전단지',
        img: 'flyer',
        disposalMethod: '비닐 코팅된 종이, 공책의 스프링, 비닐포장지 등은 제거 후 배출',
      },
      {
        id: 'paperCup',
        name: '종이컵',
        img: 'paperCup',
        disposalMethod: '내용물을 비우고 물로 헹군 후 압착하여 투명한 비닐에 넣어서 배출',
      },
      {
        id: 'businessCard',
        name: '명함',
        img: 'businessCard',
        disposalMethod: '명함 버리는 방법',
      },
      {
        id: 'encyclopedia',
        name: '백과사전',
        img: 'encyclopedia',
        disposalMethod: '비닐 코팅된 종이, 공책의 스프링, 비닐포장지 등은 제거 후 배출',
      },
      {
        id: 'paperbox',
        name: '종이상자',
        img: 'paperbox',
        disposalMethod:
          '비닐코팅 부분, 상자에 붙어있는 테이프ㆍ철핀, 알루미늄박 등을 제거하고 접어서 배출 - 야외 별도 보관 장소마련 등 다른 종이류와 섞이지 않게 배출',
      },
      {
        id: 'book',
        name: '책',
        img: 'book',
        disposalMethod: '비닐 코팅된 종이, 공책의 스프링, 비닐포장지 등은 제거 후 배출',
      },
      {
        id: 'calendar',
        name: '캘린더',
        img: 'calendar',
        disposalMethod: '비닐 코팅된 종이, 공책의 스프링, 비닐포장지 등은 제거 후 배출',
      },
    ],
  },
  {
    id: 'paperPack',
    name: '종이팩',
    img: 'paperPack',
    items: [
      {
        id: 'milkpack',
        name: '우유팩',
        img: 'milkpack',
        disposalMethod:
          '내용물을 비우고, 물로 깨끗이 세척해서 배출 - 빨대, 비닐, 플라스틱 뚜껑 등 다른 재질은 분리해서 재질별로 분리 배출',
      },
    ],
  },
  {
    id: 'can',
    name: '금속캔',
    img: 'can',
    items: [
      {
        id: 'spray',
        name: '스프레이',
        img: 'spray',
        disposalMethod: '내용물을 제거한 후 배출',
      },
      {
        id: 'beverageCan',
        name: '음료캔',
        img: 'beverageCan',
        disposalMethod:
          '내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출 - 담배꽁초 등 이물질을 넣지 않고 배출 - 플라스틱 뚜껑 등 금속캔과 다른 재질은 제거한 후 배출',
      },
      {
        id: 'cannedFood',
        name: '통조림',
        img: 'cannedFood',
        disposalMethod:
          '내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출 - 담배꽁초 등 이물질을 넣지 않고 배출 - 플라스틱 뚜껑 등 금속캔과 다른 재질은 제거한 후 배출',
      },
    ],
  },
  {
    id: 'scrapMetal',
    name: '고철',
    img: 'scrapMetal',
    items: [{}],
  },
  { id: 'glassBottle', name: '유리병', img: 'glassBottle', items: [{}] },
  { id: 'plastic', name: '플라스틱', img: 'plastic', items: [{}] },
  { id: 'vinyl', name: '비닐', img: 'vinyl', items: [{}] },
  { id: 'styrofoam', name: '발포합성', img: 'styrofoam', items: [{}] },
  { id: 'clothes', name: '의류', img: 'clothes', items: [{}] },
  {
    id: 'electronics',
    name: '가전제품',
    img: 'electronics',
    items: [
      {
        id: 'washingmachine',
        name: '세탁기',
        img: 'washingmachine',
        disposalMethod: '세탁기 버리는 방법',
      },
      { id: 'tv', name: '텔레비전', img: 'tv', disposalMethod: 'TV 버리는 방법' },
      { id: 'refrigerator', name: '냉장고', img: 'refrigerator', disposalMethod: '냉장고 버리는 방법' },
      {
        id: 'humidifier',
        name: '가습기',
        img: 'humidifier',
        disposalMethod: '가습기 버리는 방법',
      },
      {
        id: 'audioSet',
        name: '오디오세트',
        img: 'audioSet',
        disposalMethod: '오디오세트 버리는 방법',
      },
      {
        name: '정수기',
        id: 'waterPurifier',
        img: 'waterPurifier',
        disposalMethod: '정수기 버리는 방법',
      },
      {
        name: '스캐너',
        id: 'scanner',
        img: 'scanner',
        disposalMethod: '스캐너 버리는 방법',
      },
      {
        name: '스피커',
        id: 'speaker',
        img: 'speaker',
        disposalMethod: '스피커 버리는 방법',
      },
      {
        name: '식기세척기',
        id: 'dishwasher',
        img: 'dishwasher',
        disposalMethod: '식기세척기 버리는 방법',
      },
      {
        name: '선풍기',
        id: 'fan',
        img: 'fan',
        disposalMethod: '선풍기 버리는 방법',
      },
      {
        name: '비디오카메라',
        id: 'videocamera',
        img: 'videocamera',
        disposalMethod: '비디오카메라 버리는 방법',
      },
      {
        name: '비데',
        id: 'bidet',
        img: 'bidet',
        disposalMethod: '비데 버리는 방법',
      },
      {
        name: '스탠드',
        id: 'stand',
        img: 'stand',
        disposalMethod: '스탠드 버리는 방법',
      },
      {
        name: '온풍기',
        id: 'heater',
        img: 'heater',
        disposalMethod: '온풍기 버리는 방법',
      },
      {
        name: '와인셀러',
        id: 'wineCeller',
        img: 'wineCeller',
        disposalMethod: '와인셀러 버리는 방법',
      },
      {
        name: '에어컨',
        id: 'aircon',
        img: 'aircon',
        disposalMethod: '에어컨 버리는 방법',
      },
      {
        name: '전기밥솥',
        id: 'riceCooker',
        img: 'riceCooker',
        disposalMethod: '전기밥솥 버리는 방법',
      },
      {
        name: '전기포트',
        id: 'electricPot',
        img: 'electricPot',
        disposalMethod: '전기포트 버리는 방법',
      },
      {
        name: '전자레인지',
        id: 'microwave',
        img: 'microwave',
        disposalMethod: '전자레인지 버리는 방법',
      },
      {
        name: '전자사전',
        id: 'electronicDictionary',
        img: 'electronicDictionary',
        disposalMethod: '전자사전 버리는 방법',
      },
      {
        name: '전화기',
        id: 'telephone',
        img: 'telephone',
        disposalMethod: '전화기 버리는 방법',
      },
      {
        name: '청소기',
        id: 'cleaner',
        img: 'cleaner',
        disposalMethod: '청소기 버리는 방법',
      },
      {
        name: '키보드',
        id: 'keyboard',
        img: 'keyboard',
        disposalMethod: '키보드 버리는 방법',
      },
      {
        name: '커피메이커',
        id: 'coffeeMaker',
        img: 'coffeeMaker',
        disposalMethod: '커피메이커 버리는 방법',
      },
      {
        name: '컴퓨터',
        id: 'computer',
        img: 'computer',
        disposalMethod: '컴퓨터 버리는 방법',
      },
      {
        name: '토스터기',
        id: 'toasters',
        img: 'toasters',
        disposalMethod: '토스터기 버리는 방법',
      },
      // {
      //   name: '탈수기',
      //   id: 'dehydrator',
      //   img: 'dehydrator',
      //   disposalMethod: '탈수기 버리는 방법',
      // },
      {
        name: '프린터',
        id: 'printer',
        img: 'printer',
        disposalMethod: '프린터 버리는 방법',
      },
      {
        name: '헤드폰',
        id: 'headphone',
        img: 'headphone',
        disposalMethod: '헤드폰 버리는 방법',
      },
      {
        name: '휴대용플레이어',
        id: 'portablePlayer',
        img: 'portablePlayer',
        disposalMethod: '휴대용플레이어 버리는 방법',
      },
    ],
  },
  {
    id: 'largeWaste',
    name: '대형',
    img: 'largeWaste',
    items: [
      {
        name: '가구류',
        id: 'furniture',
        img: 'furniture',
        disposalMethod: '대형 생활 폐기물로 신고 한 후 스티커 부착',
      },
      {
        name: '거울',
        id: 'mirror',
        img: 'mirror',
        disposalMethod: '거울 버리는 방법',
      },
      {
        name: '씽크대',
        id: 'sink',
        img: 'sink',
        disposalMethod: '대형 생활 폐기물로 신고 한 후 스티커 부착',
      },
      {
        name: '나뭇가지',
        id: 'branch',
        img: 'branch',
        disposalMethod: '나뭇가지 버리는 방법',
      },
      {
        name: '낚싯대',
        id: 'fishingRod',
        img: 'fishingRod',
        disposalMethod: '낚싯대 버리는 방법',
      },
      {
        name: '골프백',
        id: 'golfBag',
        img: 'golfBag',
        disposalMethod: '골프백 버리는 방법',
      },
      {
        name: '악기',
        id: 'instrument',
        img: 'instrument',
        disposalMethod: '악기 버리는 방법',
      },
      {
        name: '라켓',
        id: 'racket',
        img: 'racket',
        disposalMethod: '라켓 버리는 방법',
      },
      {
        name: '목발',
        id: 'crutch',
        img: 'crutch',
        disposalMethod: '목발 버리는 방법',
      },
      {
        name: '목재',
        id: 'lumber',
        img: 'lumber',
        disposalMethod: '목재 버리는 방법',
      },
      {
        name: '문짝',
        id: 'door',
        img: 'door',
        disposalMethod: '문짝 버리는 방법',
      },
      {
        name: '매트',
        id: 'mat',
        img: 'mat',
        disposalMethod: '매트 버리는 방법',
      },
      {
        name: '바둑판',
        id: 'badukBoard',
        img: 'badukBoard',
        disposalMethod: '바둑판 버리는 방법',
      },
      {
        name: '바베큐그릴',
        id: 'bbqGrill',
        img: 'bbqGrill',
        disposalMethod: '바베큐그릴 버리는 방법',
      },
      {
        name: '밥상',
        id: 'table',
        img: 'table',
        disposalMethod: '밥상 버리는 방법',
      },
      {
        name: '시계',
        id: 'Clock',
        img: 'Clock',
        disposalMethod: '시계 버리는 방법',
      },
      {
        name: '블라인드',
        id: 'blind',
        img: 'blind',
        disposalMethod: '블라인드 버리는 방법',
      },
      {
        name: '비닐장판',
        id: 'vinylSheet',
        img: 'vinylSheet',
        disposalMethod: '비닐장판 버리는 방법',
      },
      {
        name: '사다리',
        id: 'ladder',
        img: 'ladder',
        disposalMethod: '사다리 버리는 방법',
      },
      {
        name: '삽',
        id: 'shovel',
        img: 'shovel',
        disposalMethod: '삽 버리는 방법',
      },
      {
        name: '쌀통',
        id: 'riceContainer',
        img: 'riceContainer',
        disposalMethod: '쌀통 버리는 방법',
      },
      {
        name: '서랍장',
        id: 'drawer',
        img: 'drawer',
        disposalMethod: '서랍장 버리는 방법',
      },
      {
        name: '세면대',
        id: 'washbasin',
        img: 'washbasin',
        disposalMethod: '세면대 버리는 방법',
      },
      {
        name: '솜이불',
        id: 'cottonBlanket',
        img: 'cottonBlanket',
        disposalMethod: '솜이불 버리는 방법',
      },
      {
        name: '수족관, 어항',
        id: 'aquarium',
        img: 'aquarium',
        disposalMethod: '수족관, 어항 버리는 방법',
      },
      {
        name: '스노우보드',
        id: 'snowboard',
        img: 'snowboard',
        disposalMethod: '스노우보드 버리는 방법',
      },
      {
        name: '스키용구류',
        id: 'skiEquipment',
        img: 'skiEquipment',
        disposalMethod: '스키용구류 버리는 방법',
      },
      {
        name: '식물',
        id: 'plant',
        img: 'plant',
        disposalMethod: '식물, 나무 버리는 방법',
      },
      {
        name: '신발장',
        id: 'shoeRack',
        img: 'shoeRack',
        disposalMethod: '신발장 버리는 방법',
      },
      {
        name: '아기욕조',
        id: 'babyBath',
        img: 'babyBath',
        disposalMethod: '아기욕조 버리는 방법',
      },
      {
        name: '침구류',
        id: 'bedding',
        img: 'bedding',
        disposalMethod: '침구류 버리는 방법',
      },
      {
        name: '침대',
        id: 'bed',
        img: 'bed',
        disposalMethod: '침대 버리는 방법',
      },
      {
        name: '아기침대',
        id: 'babyBed',
        img: 'babyBed',
        disposalMethod: '아기침대 버리는 방법',
      },
      {
        name: '액자',
        id: 'frame',
        img: 'frame',
        disposalMethod: '액자 버리는 방법',
      },
      {
        name: '앨범',
        id: 'album',
        img: 'album',
        disposalMethod: '앨범 버리는 방법',
      },
      {
        name: '에어매트',
        id: 'airMat',
        img: 'airMat',
        disposalMethod: '에어매트 버리는 방법',
      },
      {
        name: '여행가방',
        id: 'travelBag',
        img: 'travelBag',
        disposalMethod: '여행가방 버리는 방법',
      },
      {
        name: '유리판',
        id: 'glassPlate',
        img: 'glassPlate',
        disposalMethod: '유리판 버리는 방법',
      },
      {
        name: '유모차',
        id: 'stroller',
        img: 'stroller',
        disposalMethod: '유모차 버리는 방법',
      },
      {
        name: '응접세트',
        id: 'receptionSet',
        img: 'receptionSet',
        disposalMethod: '응접세트 버리는 방법',
      },
      {
        name: '의자',
        id: 'chair',
        img: 'chair',
        disposalMethod: '의자 버리는 방법',
      },
      {
        name: '이불',
        id: 'blanket',
        img: 'blanket',
        disposalMethod: '이불 버리는 방법',
      },
      {
        name: '인형',
        id: 'doll',
        img: 'doll',
        disposalMethod: '인형 버리는 방법',
      },
      {
        name: '자전거',
        id: 'bicycle',
        img: 'bicycle',
        disposalMethod: '자전거 버리는 방법',
      },
      {
        name: '장난감류',
        id: 'toy',
        img: 'toy',
        disposalMethod: '장난감류 버리는 방법',
      },
      {
        name: '대걸레',
        id: 'mop',
        img: 'mop',
        disposalMethod: '자루걸레 버리는 방법',
      },
      {
        name: '장롱',
        id: 'wardrobe',
        img: 'wardrobe',
        disposalMethod: '장롱 버리는 방법',
      },
      {
        name: '장식장',
        id: 'dresser',
        img: 'dresser',
        disposalMethod: '장식장 버리는 방법',
      },
      {
        name: '장판',
        id: 'floorMat',
        img: 'floorMat',
        disposalMethod: '장판 버리는 방법',
      },
      {
        name: '전기장판',
        id: 'electricMat',
        img: 'electricMat',
        disposalMethod: '전기장판 버리는 방법',
      },
      {
        name: '피아노',
        id: 'piano',
        img: 'piano',
        disposalMethod: '피아노 버리는 방법',
      },
      {
        name: '진열대',
        id: 'shelf',
        img: 'shelf',
        disposalMethod: '진열대 버리는 방법',
      },
      {
        name: '책상',
        id: 'desk',
        img: 'desk',
        disposalMethod: '책상 버리는 방법',
      },
      {
        name: '천체망원경',
        id: 'telescope',
        img: 'telescope',
        disposalMethod: '천체망원경 버리는 방법',
      },
      {
        name: '체중계',
        id: 'scale',
        img: 'scale',
        disposalMethod: '체중계 버리는 방법',
      },
      {
        name: '카펫',
        id: 'carpet',
        img: 'carpet',
        disposalMethod: '카펫 버리는 방법',
      },
      {
        name: '캐비넷',
        id: 'cabinet',
        img: 'cabinet',
        disposalMethod: '캐비넷 버리는 방법',
      },
      {
        name: '커튼',
        id: 'curtain',
        img: 'curtain',
        disposalMethod: '커튼 버리는 방법',
      },
      {
        name: '쿠션',
        id: 'cushion',
        img: 'cushion',
        disposalMethod: '쿠션 버리는 방법',
      },
      {
        name: '텐트',
        id: 'tent',
        img: 'tent',
        disposalMethod: '텐트 버리는 방법',
      },
      {
        name: '항아리',
        id: 'jar',
        img: 'jar',
        disposalMethod: '항아리 버리는 방법',
      },
      {
        name: '화로',
        id: 'brazier',
        img: 'brazier',
        disposalMethod: '화로 버리는 방법',
      },
      {
        name: '화장대',
        id: 'vanity',
        img: 'vanity',
        disposalMethod: '화장대 버리는 방법',
      },
    ],
  },
  {
    id: 'foodWaste',
    name: '음식물',
    img: 'foodWaste',
    items: [
      {
        name: '바나나껍질',
        id: 'bananaPeel',
        img: 'bananaPeel',
        disposalMethod: '음식물 쓰레기에 버리세요',
      },
      {
        name: '상한음식',
        id: 'rottenFood',
        img: 'rottenFood',
        disposalMethod: '음식물 쓰레기에 버리세요',
      },
      {
        name: '생선',
        id: 'fish',
        img: 'fish',
        disposalMethod: '일반 쓰레기로 분류되어 종량제 봉투에 버리세요',
      },
      {
        name: '오렌지껍질',
        id: 'orangePeel',
        img: 'orangePeel',
        disposalMethod: '음식물 쓰레기에 버리세요',
      },
    ],
  },
  {
    id: 'harmfulness',
    name: '유해',
    img: 'harmfulness',
    items: [{}],
  },
  {
    id: 'noncombustibleWaste',
    name: '불연성폐기물',
    img: 'noncombustibleWaste',
    items: [{}],
  },
  {
    id: 'garbage',
    name: '종량제 봉투',
    img: 'garbage',
    items: [{}],
  },
];
