interface CourseInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  chapters: ChapterInfo[];
  products: ProductInfo[];
  publishedChapters: number[];

  flavors: ['Vue'];
  level: 3;
  order: 37;
  label: 'POPULAR';
  launchdate: '01/01/2020';
  authors: ['alex_ziskind'];
}

interface LessonInfo {
  chapterId: number;
  id: string;
  name: string;
  isPreview: boolean;
}

interface ChapterInfo {
  id: number;
  name: string;
  lessons: LessonInfo[];
}

type ProductType = 'once' | 'plan';

interface ProductInfo {
  id: string;
  name: string;
  description: string;
  pricesale: number;
  pricereg: number;
  licensesMin: number;
  licensesMax: number | null;
  prodType: ProductType;
  numPayments: number;
  recurring: boolean;
  code: string;
}

function getCourseInfo(): CourseInfo {
  const courseId = $('#fedora-data').attr('data-course-id');
  const products = getProducts(courseId);
  const chapters = getChapters();

  const ci: CourseInfo = {
    id: $('#fedora-data').attr('data-course-id'),
    title: $('.course-title')[0].innerText,
    subtitle: $('.course-subtitle')[0].innerText,
    description: $('.course-description')[0].innerText,
    url: '',
    flavors: ['Vue'],
    level: 3,
    order: 37,
    label: 'POPULAR',
    launchdate: '01/01/2020',
    authors: ['alex_ziskind'],
    products: products,
    publishedChapters: chapters.map(c => c.id),
    chapters: chapters
  };
  ci.url = ci.title
    .toLocaleLowerCase()
    .split(' ')
    .join('-');
  return ci;
}

function getChapters(): ChapterInfo[] {
  const ret: ChapterInfo[] = [];
  $('.course-section').each((i, section) => {
    const chapterInfo = getChapterInfo(i, section);
    ret.push(chapterInfo);
  });
  return ret;
}

function getChapterInfo(index: number, section: HTMLElement): ChapterInfo {
  const sectitle = $(section)
    .find('.section-title')[0]
    .innerText.trim();
  const chapId = (index + 1) * 10;

  const chapInfo: ChapterInfo = {
    id: chapId,
    name: sectitle,
    lessons: getLessons(chapId, section)
  };
  return chapInfo;
}

function getLessons(chapId: number, section: HTMLElement): LessonInfo[] {
  const ret: LessonInfo[] = [];
  $(section)
    .find('.section-item a')
    .each((lessonIndex, secItem) => {
      const lessonInfo = getLessonInfo(
        chapId,
        lessonIndex,
        secItem as HTMLAnchorElement
      );
      ret.push(lessonInfo);
    });
  return ret;
}

function getLessonInfo(
  chapId: number,
  lessonIndex: number,
  secItem: HTMLAnchorElement
): LessonInfo {
  const lessonId = secItem.href.substring(secItem.href.lastIndexOf('/') + 1);
  const secBtn = $(secItem).find('.btn-primary');
  const secBtnText = $(secBtn)
    .text()
    .trim();
  const isPreview = secBtnText === 'Preview';
  $(secBtn).remove();
  const secItemTitle = secItem.innerText.trim();

  const ret: LessonInfo = {
    chapterId: chapId,
    id: lessonId,
    isPreview: isPreview,
    name: secItemTitle
  };
  return ret;
}

function getProducts(courseId: string): ProductInfo[] {
  const ret: ProductInfo[] = [];
  $('.checkout-button-group').each((i: number, group: HTMLElement) => {
    const prodInfo = getProductInfo(i, courseId, group);
    ret.push(prodInfo);
  });
  return ret;
}

let singleRegPrice2 = 0;

function getProductInfo(
  index: number,
  courseId: string,
  group: HTMLElement
): ProductInfo {
  const prodId = ($(group).find('input[type="radio"]')[0] as HTMLInputElement)
    .value;

  const priceObj = $(group).find('.default-product-price')[0];

  const priceStr = priceObj.innerText;
  let priceRecurring = false;
  let planNumPayments = 0;
  let planPricePerMonth = 0;

  if (priceStr.includes('payments')) {
    priceRecurring = true;
    const planParts = priceStr
      .replace(' payments of ', '')
      .replace('/m', '')
      .split('$');
    planNumPayments = parseFloat(planParts[0]);
    planPricePerMonth = parseFloat(planParts[1]);
  }

  let price = 0;
  const priceTemp = priceStr.replace('$', '').replace(',', '');
  if (priceTemp === 'FREE') {
    price = 0;
  } else {
    price = parseFloat(priceTemp);
  }

  const prodName = $(group).find('.product-name')[0].innerText;
  const prodDesc = $(group).find('.description')[0].innerText;

  const regex = /\d+/g;
  const matches = prodName.match(regex);

  const liccountOne = prodName.toLowerCase().indexOf('single') > -1;
  const licensesMin = liccountOne ? 1 : parseInt(matches[0]);
  const licensesMax = liccountOne ? 1 : parseInt(matches[1]);

  const groupDiscountData = getGroupDiscountData(courseId, licensesMin);

  if (licensesMin === 1) {
    singleRegPrice2 = price;
  }

  const regPrice = licensesMin * singleRegPrice2;
  const salePrice =
    groupDiscountData.percent === 0
      ? regPrice
      : Math.round(regPrice - (regPrice * groupDiscountData.percent) / 100);

  const productInfo: ProductInfo = {
    id: prodId,
    name: prodName,
    description: prodDesc,
    pricereg: priceRecurring ? planPricePerMonth : regPrice,
    pricesale: priceRecurring ? planPricePerMonth : salePrice,

    licensesMin: licensesMin,
    licensesMax: licensesMax,
    prodType: priceRecurring ? 'plan' : 'once',
    numPayments: planNumPayments,
    recurring: priceRecurring,
    code: groupDiscountData.code
  };
  return productInfo;
}

function getGroupDiscountData(
  courseId: string,
  numlicenses: number
): { percent: number; code: string } {
  let groupDiscountPercent = 0;
  let code = '';
  switch (numlicenses) {
    case 1:
      groupDiscountPercent = 0;
      code = `${courseId}ONE`;
      break;
    case 2:
      groupDiscountPercent = 15;
      code = `${courseId}TEAM2`;
      break;
    case 3:
      groupDiscountPercent = 15;
      code = `${courseId}TEAM3`;
      break;
    case 4:
      groupDiscountPercent = 20;
      code = `${courseId}TEAM4`;
      break;
    case 5:
      groupDiscountPercent = 20;
      code = `${courseId}TEAM5`;
      break;
    case 6:
      groupDiscountPercent = 25;
      code = `${courseId}TEAM6`;
      break;
    case 7:
      groupDiscountPercent = 25;
      code = `${courseId}TEAM7`;
      break;
    case 8:
      groupDiscountPercent = 30;
      code = `${courseId}TEAM8`;
      break;
    case 9:
      groupDiscountPercent = 30;
      code = `${courseId}TEAM9`;
      break;
    case 10:
      groupDiscountPercent = 35;
      code = `${courseId}TEAM10`;
      break;
    default:
      groupDiscountPercent = 0;
  }
  return { percent: groupDiscountPercent, code: code };
}

const courseInfo = getCourseInfo();
const productInfos = getProducts('-----');
//console.log(courseInfo);
//console.log(productInfos);
console.log(JSON.stringify(courseInfo, null, 2));
