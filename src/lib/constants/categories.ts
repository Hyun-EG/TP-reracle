export const categories = [
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
          '쓰레기는 재활용하지 않으면 매립하거나 소각하여야 하는데, 이러면 돈이 든다. 때문에 버릴 때마다 돈을 내고서 버리거나 정부나 지자체에서 예산을 들여서 처리해야 한다. 하지만 분리배출된 쓰레기는 그대로 가져가서 재활용할 수 있기 때문에 재활용 업체에서 가져가 준다. 덕분에 대부분의 재활용 쓰레기는 분리배출하면 공짜로 버릴 수 있다. 하지만 재활용에도 회수, 재분류, 재처리 등의 비용이 들고 재활용해도 값이 잘 안 나오는 쓰레기도 ',
      },
      { id: 'ricebag', name: '쌀포대', img: 'ricebag', disposalMethod: '쌀포대 버리는 방법' },
      { id: 'notebook', name: '수첩', img: 'notebook', disposalMethod: '수첩 버리는 방법' },
    ],
  },
  {
    id: 'paperPack',
    name: '종이팩',
    img: 'paperPack',
    items: [{ id: 'milkpack', name: '우유팩', img: 'milkpack', disposalMethod: '우유팩 버리는 방법' }],
  },
  { id: 'can', name: '금속캔', img: 'can' },
  { id: 'scrapMetal', name: '고철', img: 'scrapMetal' },
  { id: 'glassBottle', name: '유리병', img: 'glassBottle' },
  { id: 'plastic', name: '플라스틱', img: 'plastic' },
  { id: 'vinyl', name: '비닐', img: 'vinyl' },
  { id: 'styrofoam', name: '발포합성', img: 'styrofoam' },
  { id: 'clothes', name: '의류', img: 'clothes' },
  {
    id: 'electronics',
    name: '가전제품',
    img: 'electronics',
    items: [
      { id: 'tv', name: 'TV', img: 'tv', disposalMethod: 'TV 버리는 방법' },
      { id: 'refrigerator', name: '냉장고', img: 'refrigerator', disposalMethod: '냉장고 버리는 방법' },
    ],
  },
  {
    id: 'largeWaste',
    name: '대형',
    img: 'largeWaste',
  },
  {
    id: 'foodWaste',
    name: '음식물',
    img: 'foodWaste',
  },
  {
    id: 'harmfulness',
    name: '유해',
    img: 'harmfulness',
  },
  {
    id: 'noncombustibleWaste',
    name: '불연성폐기물',
    img: 'noncombustibleWaste',
  },
  {
    id: 'garbage',
    name: '종량제 봉투',
    img: 'garbage',
  },
];
