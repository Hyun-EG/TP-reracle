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
    items: [
      {
        id: 'battery',
        name: '폐건전지',
        img: 'battery',
        disposalMethod:
          '폐건전는 망간, 수은, 카드뮴 등 중그목 유해물질을 함유하고 있다. 환경오염 및 인체에 나쁜 영향을 일으킬 수 있으므로 전용수거함에 안전하게 배출한다.',
      },
      {
        id: 'fluorescentLamp',
        name: '폐형광등',
        img: 'fluorescentLamp',
        disposalMethod:
          '형광등 안에는 유해물질인 수은이 함유되어 있다. 인체에 위험한 수은이 노출되지 않도록 깨어지지 않게 주의하여 전용 수거함에 안전하게 배출한다.',
      },
      {
        id: 'medicine',
        name: '폐의약품',
        img: 'medicine',
        disposalMethod:
          '가정 내 폐의약품이 매립되거나 도시하수로 배출될 경우 공기, 토양, 수질 등의 환경오염을 유발하고 생태계 고랸의 원인이 된다. 폐의약품은 모아서 약국에 비치된 전용수거함으로 배출한다.',
      },
    ],
  },
  {
    id: 'noncombustibleWaste',
    name: '불연성폐기물',
    img: 'noncombustibleWaste',
    items: [
      {
        id: 'mirror',
        name: '거울',
        img: 'mirror',
        disposalMethod: '불연성폐기물로 배출 크기가 많이 큰 경우에 대형 폐기물로 배출',
      },
      {
        id: 'bowl',
        name: '그릇',
        img: 'bowl',
        disposalMethod: '불연성폐기물로 배출',
      },
      {
        id: 'brokenGlass',
        name: '깨진유리',
        img: 'brokenGlass',
        disposalMethod: '',
      },
      {
        id: 'heatResistantTableware',
        name: '내열 식기류',
        img: 'heatResistantTableware',
        disposalMethod: '불연성폐기물로 배출',
      },
      {
        id: 'ceramic',
        name: '도자기',
        img: 'ceramic',
        disposalMethod: '불연성폐기물로 배출',
      },
      {
        id: 'earthenPot',
        name: '뚝배기',
        img: 'earthenPot',
        disposalMethod: '불연성폐기물로 배출',
      },
      {
        id: 'mugCup',
        name: '머그컵',
        img: 'mugCup',
        disposalMethod: '불연성폐기물로 배출',
      },
      {
        id: 'incandescentLightBulb',
        name: '백열전구',
        img: 'incandescentLightBulb',
        disposalMethod: '불연성폐기물로 배출',
      },
      {
        id: 'brick',
        name: '벽돌',
        img: 'brick',
        disposalMethod: '불연성폐기물로 배출',
      },
      {
        id: 'glassPlate',
        name: '유리판,유리제품',
        img: 'glassPlate',
        disposalMethod: '불연성폐기물로 배출 크기가 많이 큰 경우에 대형 폐기물로 배출',
      },
      {
        id: 'ashtray',
        name: '재떨이(도자기,유리)',
        img: 'ashtray',
        disposalMethod: '불연성폐기물로 배출',
      },
      {
        id: 'teacup',
        name: '찻잔(도자기류)',
        img: 'teacup',
        disposalMethod: '불연성폐기물로 배출',
      },
      {
        id: 'cup',
        name: '컵(도자기,유리컵)',
        img: 'cup',
        disposalMethod: '불연성폐기물로 배출',
      },
      {
        id: 'pot',
        name: '화분',
        img: 'pot',
        disposalMethod: '불연성폐기물로 배출하되 재질에 맞게 배출',
      },
    ],
  },
  {
    id: 'garbage',
    name: '종량제 봉투',
    img: 'garbage',
    items: [
      {
        id: 'wig',
        name: '가발',
        img: 'wig',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'scissors',
        name: '가위',
        img: 'scissors',
        disposalMethod: '재질에 맞게 배출하되,여러재질이 섞인 경우,종량제 봉투로 배출',
      },
      {
        id: 'dishcloth',
        name: '걸레',
        img: 'dishcloth',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'eggshell',
        name: '계란껍질',
        img: 'eggshell',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'rubberGlove',
        name: '고무장갑',
        img: 'rubberGlove',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'golfBall',
        name: '골프공',
        img: 'golfBall',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'woodenLadle',
        name: '나무국자',
        img: 'woodenLadle',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'woodenChopsticks',
        name: '나무젓가락',
        img: 'woodenChopsticks',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'woodPiece',
        name: '나무조각',
        img: 'woodPiece',
        disposalMethod: '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리',
      },
      {
        id: 'woodCarving',
        name: '나뭇가지',
        img: 'woodPiece',
        disposalMethod: '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리',
      },
      {
        id: 'treeTrunk',
        name: '나무줄기',
        img: 'treeTrunk',
        disposalMethod: '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리',
      },
      {
        id: 'compass',
        name: '나침반',
        img: 'compass',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'fallenLeaves',
        name: '낙엽',
        img: 'fallenLeaves',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'sickleHandle',
        name: '낫손잡이',
        img: 'sickleHandle',
        disposalMethod: '고철로 배출하되, 가능하다면 손잡이 부분(나무재질 등)을 분리하여 배출',
      },
      {
        id: 'potLid',
        name: '냄비뚜껑(강화유리)',
        img: 'potLid',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'axHandle',
        name: '도끼 손잡이',
        img: 'axHandle',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'woodenCuttingBoard',
        name: '나무도마',
        img: 'woodenCuttingBoard',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'magnifyingGlasses',
        name: '돋보기',
        img: 'magnifyingGlasses',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'lighter',
        name: '라이터',
        img: 'lighter',
        disposalMethod: '모두 사용한 후 종량제 봉투로 배출',
      },
      {
        id: 'racket',
        name: '라켓',
        img: 'racket',
        disposalMethod: '종량제 봉투에 담을 수 없다면 대형으로처리',
      },
      {
        id: 'lab',
        name: '랩',
        img: 'lab',
        disposalMethod: '사용한 랩은 쓰레기 종량제 봉투로 배출',
      },
      {
        id: 'mask',
        name: '마스크',
        img: 'mask',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'mousePad',
        name: '마우스패드',
        img: 'mousePad',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'fountainPen',
        name: '만년필(마커펜)',
        img: 'fountainPen',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'disposableRazor',
        name: '일회용면도기',
        img: 'disposableRazor',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'razor',
        name: '면도칼',
        img: 'razor',
        disposalMethod: '수거원이 다치지 않도록 종이 등으로 감싸서 종량제 봉투로 배출',
      },
      {
        id: 'cottonSwab',
        name: '면봉',
        img: 'cottonSwab',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'businessCard',
        name: '명함',
        img: 'businessCard',
        disposalMethod: '종이류로 배출하며, 플라스틱 합성지 등 다른 재질 포함시 종량제봉투에 배출',
      },
      {
        id: 'businessCardWallet',
        name: '명함지갑',
        img: 'businessCardWallet',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'hat',
        name: '모자',
        img: 'hat',
        disposalMethod: '의류 및 원단류 배출 방법을 참고하여 배출하거나 종량제 봉투로 배출',
      },
      {
        id: 'wood',
        name: '목재',
        img: 'wood',
        disposalMethod: '종량제 봉투에 담을 수 없는 경우 대형폐기물로 처리',
      },
      {
        id: 'wetTissue',
        name: '물티슈',
        img: 'wetTissue',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'strawHat',
        name: '밀짚모자',
        img: 'strawHat',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'checkerboard',
        name: '바둑판',
        img: 'checkerboard',
        disposalMethod: '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리',
      },
      {
        id: 'cushion',
        name: '방석',
        img: 'cushion',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'badmintonBall',
        name: '배트민턴공',
        img: 'badmintonBall',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'inkStone',
        name: '벼루',
        img: 'inkStone',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'thermos',
        name: '보온병',
        img: 'thermos',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'pen',
        name: '볼펜',
        img: 'pen',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'brush',
        name: '붓',
        img: 'brush',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'vinylFlooring',
        name: '비닐장판',
        img: 'vinylFlooring',
        disposalMethod: '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리',
      },
      {
        id: 'vinylCoatedPaper',
        name: '비닐코팅종이',
        img: 'vinylCoatedPaper',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'comb',
        name: '빗',
        img: 'comb',
        disposalMethod: '재질에 맞게 배출하되 나무 빗 등은 쓰레기 종량제봉투로 배출',
      },
      {
        id: 'markerPen',
        name: '사인펜',
        img: 'markerPen',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'picture',
        name: '사진',
        img: 'picture',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'photoPaper',
        name: '사진인화지',
        img: 'photoPaper',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'fishBone',
        name: '생선뼈',
        img: 'fishBone',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'mechanicalPencil',
        name: '샤프펜슬',
        img: 'mechanicalPencil',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'matches',
        name: '성냥',
        img: 'matches',
        disposalMethod: '물에 적신 후 종량제 봉투로 배출',
      },
      {
        id: 'cotton',
        name: '솜',
        img: 'cotton',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'awl',
        name: '송곳',
        img: 'awl',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'scrubbers',
        name: '수세미',
        img: 'scrubbers',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'charcoal',
        name: '숯',
        img: 'charcoal',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'sponge',
        name: '스폰지',
        img: 'sponge',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'watch',
        name: '시계',
        img: 'watch',
        disposalMethod:
          '종량제 종투에 담을 수 없는 경우 대형폐기물로 처리, 건전지는 분리하여 전용수거함으로 배출',
      },
      {
        id: 'shoes',
        name: '신발',
        img: 'shoes',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'plant',
        name: '식물,나무',
        img: 'plant',
        disposalMethod: '종량제 봉투에 담을 수 없는 경우 대형폐기물로 처리',
      },
      {
        id: 'icePack',
        name: '아이스팩',
        img: 'icePack',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'instrument',
        name: '악기',
        img: 'instrument',
        disposalMethod:
          '종량제 봉투에 담을 수 없는경우 대형페기물로 배출 ※ 악기는 폐가전 제품 무상방문 수거 대상품목이 아님',
      },
      {
        id: 'petToiletSeat',
        name: '애완동물 용변 시트',
        img: 'petToiletSeat',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'photoFrame',
        name: '액자',
        img: 'photoFrame',
        disposalMethod: '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리',
      },
      {
        id: 'album',
        name: '앨범',
        img: 'album',
        disposalMethod: '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리',
      },
      {
        id: 'baseballBall',
        name: '야구공',
        img: 'baseballBall',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'baseballGlove',
        name: '야구글러브',
        img: 'baseballGlove',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'woodenBaseballBat',
        name: '나무야구배트',
        img: 'woodenBaseballBat',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'candle',
        name: '양초',
        img: 'candle',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'airMat',
        name: '에어매트',
        img: 'airMat',
        disposalMethod: '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리',
      },
      {
        id: 'pencil',
        name: '연필(색연필)',
        img: 'pencil',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'pencilSharpener',
        name: '연필깎이',
        img: 'pencilSharpener',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'yogaMat',
        name: '요가매트',
        img: 'yogaMat',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'umbrella',
        name: '우산',
        img: 'umbrella',
        disposalMethod:
          '뼈대와 비닐을 분리하여, 각각의 분리수거함으로 배출,분리가 어렵다면 종량제봉투로 배출',
      },
      {
        id: 'bedding',
        name: '이불',
        img: 'bedding',
        disposalMethod: '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리',
      },
      {
        id: 'doll',
        name: '인형',
        img: 'doll',
        disposalMethod: '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리',
      },
      {
        id: 'magnet',
        name: '자석',
        img: 'magnet',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'toys',
        name: '장난감',
        img: 'toys',
        disposalMethod:
          '크기에 따라 대형폐기물 또는 재질에 맞게 배출(여러재질이 섞인 경우 종량제 봉투로 배출)',
      },
      {
        id: 'electricalCord',
        name: '전기코드',
        img: 'electricalCord',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'electricToothbrush',
        name: '전동칫솔',
        img: 'electricToothbrush',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'electronicPiano',
        name: '전자피아노',
        img: 'electronicPiano',
        disposalMethod:
          '종량제 봉투에 담을 수 없는경우 대형폐기물로 처리 ※ 악기는 폐가전 제품 무상방문 수거 대상품목이 아님',
      },
      {
        id: 'glue',
        name: '접착제',
        img: 'glue',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'nipple',
        name: '젖꼭지(아기용품)',
        img: 'nipple',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'carvingKnife',
        name: '조각칼',
        img: 'carvingKnife',
        disposalMethod: '수거원이 다치지 않도록 종이 등으로 감싸서 배출',
      },
      {
        id: 'paperDiapers',
        name: '종이기저귀',
        img: 'paperDiapers',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'tapeMeasure',
        name: '줄자',
        img: 'tapeMeasure',
        disposalMethod: '재질에 맞게 배출 또는 종량제 봉투로 배출',
      },
      {
        id: 'eraser',
        name: '지우개',
        img: 'eraser',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'teaIngredients',
        name: '차 찌꺼기',
        img: 'teaIngredients',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'thermometer',
        name: '체온계',
        img: 'thermometer',
        disposalMethod: '건전지는 분리하여 전용수거함으로 배출',
      },
      {
        id: 'weightMeasuringMachine',
        name: '체중계',
        img: 'weightMeasuringMachine',
        disposalMethod: '종량제 봉투에 담을 수 없는 경우 대형폐기물로 처리',
      },
      {
        id: 'soccer',
        name: '축구공',
        img: 'soccer',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'bedding',
        name: '침구류',
        img: 'bedding',
        disposalMethod: '종량제 봉투에 담을 수 없는 경우 대형폐기물로 처리',
      },
      {
        id: 'toothbrush',
        name: '칫솔',
        img: 'electricToothbrush',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'carpet',
        name: '카펫(융단)',
        img: 'carpet',
        disposalMethod: '종량제 봉투에 담을 수 없는 경우 대형폐기물로 처리',
      },
      {
        id: 'curtain',
        name: '커튼(커튼레일)',
        img: 'curtain',
        disposalMethod: '종량제 봉투에 담을 수 없는 경우 대형폐기물로 처리',
      },
      {
        id: 'coffeeBeanIngredients',
        name: '커피원두 찌꺼기',
        img: 'coffeeBeanIngredients',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'corkscrew',
        name: '코르크따개',
        img: 'corkscrew',
        disposalMethod:
          ' 수거원이 다치지 않도록 종이 등으로 감싸서 배출, 재질에 맞게 해당 분리수거함으로 배출',
      },
      {
        id: 'corkStopper',
        name: '코르크마개',
        img: 'corkStopper',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'coatedPaper',
        name: '종이(코팅)',
        img: 'coatedPaper',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'powerSocket',
        name: '콘센트',
        img: 'powerSocket',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'contactLenses',
        name: '콘텍트렌즈',
        img: 'contactLenses',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'cushion',
        name: '쿠션',
        img: 'cushion',
        disposalMethod: '종량제 봉투에 담을 수 없는 경우 대형폐기물로 처리',
      },
      {
        id: 'crayon',
        name: '크레용',
        img: 'crayon',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'tent',
        name: '텐트',
        img: 'tent',
        disposalMethod: '종량제 봉투에 담을 수 없는 경우 대형폐기물로 처리',
      },
      {
        id: 'denture',
        name: '틀니',
        img: 'denture',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'teaBag',
        name: '티백(녹차)',
        img: 'teaBag',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'pineapplePeel',
        name: '파인애플껍질',
        img: 'pineapplePeel',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'photoFilm',
        name: '필름(사진용)',
        img: 'photoFilm',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'hotPack',
        name: '핫팩',
        img: 'hotPack',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'pieceOfCloth',
        name: '헝겊',
        img: 'hotPack',
        disposalMethod: '종량제 봉투로 배출',
      },
      {
        id: 'helmet',
        name: '헬멧',
        img: 'helmet',
        disposalMethod: '분리하여 재질별로 분리배출 가능',
      },
      {
        id: 'hoil',
        name: '호일',
        img: 'lab',
        disposalMethod: '종량제 봉투로 배출',
      },
    ],
  },
];
