const data = [
  "常钜沅",
  "陈明宇",
  "陈雨欣",
  "程麒璇",
  "崔于龙博",
  "崔兆瑞",
  "樊宇霞",
  "范鑫荣",
  "范益佳",
  "郭昌兴",
  "郭荣旺",
  "郭效言",
  "韩宇",
  "韩玉欣",
  "郝星宇",
  "冀青香",
  "贾皓",
  "江昢",
  "郎圣春",
  "李丹晨",
  "李瑾瑶",
  "李靖",
  "李可飞",
  "李尚伦",
  "连浩毅",
  "刘宇康",
  "孟菁昀",
  "师佳琪",
  "史睿思",
  "史宇辉",
  "苏洋",
  "孙熠晖",
  "唐瑜",
  "陶思娟",
  "王文宣",
  "王雯佳",
  "王奕夫",
  "王泽寰",
  "魏瑞龙",
  "武超仪",
  "武文琪",
  "武宇凡",
  "许鑫苑",
  "杨涵舒",
  "杨薪煜",
  "杨泽宇",
  "杨铮",
  "张皓翔",
  "张佳琦",
  "张琳浠",
  "张晟瑄",
  "张子钰",
  "赵航宇",
  "赵继鑫",
  "赵佳慧",
  "赵美琳",
  "赵心嫣",
  "赵阳阳",
  "赵泽宇",
  "周博涛"
];
let randData = data;
var waitTime = 3;
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

var slidecount = 0;

function randStart() {
  (function() {
    $("div.card.clickable")
      .nextAll()
      .remove();
    tail = $("div.roll-card.clickable");
    slidecount = 0;
    slide();
  })();
}

function getNextCardText() {
  let len = randomNum(0, data.length - 1);
  let name = randData[len];

  return name;
}

// 将卡片向上移动
function showCard(selector, duration, complete) {
  $(selector).animate({ top: "-1px" }, duration, "swing", complete);
}

function slide() {
  if (slidecount > 35) {
    return;
  }

  // 滑动时间
  var duration =
    slidecount > 33
      ? 1500
      : slidecount > 32
        ? 800
        : slidecount > 25
          ? 400
          : slidecount > 20
            ? 200
            : slidecount > 15
              ? 150
              : 100;

  const cardName = getNextCardText();

  card = $(
    '<div class="roll-card">' +
      '<div class="title">' +
      cardName +
      "</div>" +
      "</div>"
  );
  tail.after(card);
  tail = card;
  slidecount++;
  showCard(card, duration, slide);
}
