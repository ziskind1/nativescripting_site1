//Go to teachable course page, ex: http://nativescripting.teachable.com/p/nativescript-with-angular-getting-started-guide
//Open console and paste and execute this code. Then copy the results for each course.
//Change the level, launch date, tag, and categories manually

//Course rip code
var courseTitle = $('.course-title')[0].innerText;
var courseSubTitle = $('.course-subtitle')[0].innerText;
var courseDescription = $('.course-description')[0].innerText;
var courseId = $('#fedora-data').attr('data-course-id');
var courseUrl = courseTitle
  .toLocaleLowerCase()
  .split(' ')
  .join('-');
var chapters = [];
var chapCounter = 0;
$('.course-section').each((i, section) => {
  chapCounter += 10;
  var sectitleObj = $(section).find('.section-title');
  var sectitle = sectitleObj[0].innerText;
  var lessons = [];
  $(section)
    .find('.section-item a')
    .each((j, secitem) => {
      var secBtn = $(secitem).find('.btn-primary');
      var secBtnText = $(secBtn)
        .text()
        .trim();
      var isPreview = secBtnText === 'Preview';
      $(secBtn).remove();
      var secItemTitle = secitem.innerText.trim();
      var href = secitem.href;
      var id = href.substring(href.lastIndexOf('/') + 1);
      lessons.push({
        chapterId: chapCounter,
        lessonId: id,
        name: secItemTitle,
        isPreview: isPreview
      });
    });
  chapters.push({ chapterId: chapCounter, name: sectitle, lessons: lessons });
});
var productsTemp = [];
$('.checkout-button-group').each((i, group) => {
  let prodId = $(group).find('input[type="radio"]')[0].value;

  const priceStr = $(group).find('.default-product-price')[0].innerText;
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

  var price = parseFloat(
    $(group)
      .find('.default-product-price')[0]
      .innerText.replace('$', '')
      .replace(',', '')
  );

  if (price === 'FREE') price = 0;
  var prodName = $(group).find('.product-name')[0].innerText;
  var prodDesc = $(group).find('.description')[0].innerText;

  var regex = /\d+/g;
  var matches = prodName.match(regex);

  var liccountOne = prodName.toLowerCase().indexOf('single') > -1;
  var licensesMin = liccountOne ? 1 : parseInt(matches[0]);
  var licensesMax = liccountOne ? 1 : parseInt(matches[1]);

  productsTemp.push({
    id: prodId,
    name: prodName,
    description: prodDesc,
    price: priceRecurring ? planPricePerMonth : price,
    licensesMin: licensesMin,
    licensesMax: licensesMax,
    prodType: priceRecurring ? 'plan' : 'once',
    numPayments: planNumPayments,
    recurring: priceRecurring
  });
});

const singleRegPrice = productsTemp.find(p => p.licensesMin === 1).price;

var products = [];
productsTemp.forEach((p, i) => {
  const regPrice = p.licensesMin * singleRegPrice;

  if (!products.find(f => f.licensesMin === p.licensesMin)) {
    const curLicMats = productsTemp.filter(
      pr => pr.licensesMin === p.licensesMin
    );

    if (curLicMats.length > 1) {
      const saleProd =
        curLicMats[0].price < curLicMats[1].price
          ? curLicMats[0]
          : curLicMats[1];

      const regProd = curLicMats.find(c => c.id !== saleProd.id);

      products.push({
        id: saleProd.id,
        name: saleProd.name,
        description: saleProd.description,
        pricesale: saleProd.price,
        pricereg: regPrice,
        licensesMin: saleProd.licensesMin,
        licensesMax: saleProd.licensesMax
      });
    } else {
      products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        pricesale: p.price,
        pricereg: regPrice,
        licensesMin: p.licensesMin,
        licensesMax: p.licensesMax
      });
    }
  }
});

var authors = ['alex_ziskind'];
var courseObj = {
  id: courseId,
  title: courseTitle,
  subtitle: courseSubTitle,
  description: courseDescription,
  url: courseUrl,
  flavors: ['Core', 'Angular'],
  level: 1,
  order: 999,
  label: 'PRESALE',
  launchdate: '05/01/2017',
  authors: authors,
  products: products,
  publishedChapters: [10, 20, 30, 40, 50, 60],
  chapters: chapters
};
//console.log(productsTemp);
//console.log(products);
console.log(JSON.stringify(courseObj, null, 2));
