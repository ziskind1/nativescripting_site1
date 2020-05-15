function getCourseInfo() {
    var ci = {
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
        products: getProducts(),
        chapters: getChapters()
    };
    ci.url = ci.title
        .toLocaleLowerCase()
        .split(' ')
        .join('-');
    return ci;
}
function getChapters() {
    var ret = [];
    $('.course-section').each(function (i, section) {
        var chapterInfo = getChapterInfo(i, section);
        ret.push(chapterInfo);
    });
    return ret;
}
function getChapterInfo(index, section) {
    var sectitle = $(section)
        .find('.section-title')[0]
        .innerText.trim();
    var chapId = (index + 1) * 10;
    var chapInfo = {
        id: chapId,
        name: sectitle,
        lessons: getLessons(chapId, section)
    };
    return chapInfo;
}
function getLessons(chapId, section) {
    var ret = [];
    $(section)
        .find('.section-item a')
        .each(function (lessonIndex, secItem) {
        var lessonInfo = getLessonInfo(chapId, lessonIndex, secItem);
        ret.push(lessonInfo);
    });
    return ret;
}
function getLessonInfo(chapId, lessonIndex, secItem) {
    var lessonId = secItem.href.substring(secItem.href.lastIndexOf('/') + 1);
    var secBtn = $(secItem).find('.btn-primary');
    var secBtnText = $(secBtn)
        .text()
        .trim();
    var isPreview = secBtnText === 'Preview';
    $(secBtn).remove();
    var secItemTitle = secItem.innerText.trim();
    var ret = {
        chapterId: chapId,
        id: lessonId,
        isPreview: isPreview,
        name: secItemTitle
    };
    return ret;
}
function getProducts() {
    var ret = [];
    $('.checkout-button-group').each(function (i, group) {
        var prodInfo = getProductInfo(i, group);
        ret.push(prodInfo);
    });
    return ret;
}
var singleRegPrice2 = 0;
function getProductInfo(index, group) {
    var prodId = $(group).find('input[type="radio"]')[0]
        .value;
    var priceObj = $(group).find('.default-product-price')[0];
    var priceStr = priceObj.innerText;
    var priceRecurring = false;
    var planNumPayments = 0;
    var planPricePerMonth = 0;
    if (priceStr.includes('payments')) {
        priceRecurring = true;
        var planParts = priceStr
            .replace(' payments of ', '')
            .replace('/m', '')
            .split('$');
        planNumPayments = parseFloat(planParts[0]);
        planPricePerMonth = parseFloat(planParts[1]);
    }
    var price = 0;
    var priceTemp = priceStr.replace('$', '').replace(',', '');
    if (priceTemp === 'FREE') {
        price = 0;
    }
    else {
        price = parseFloat(priceTemp);
    }
    var prodName = $(group).find('.product-name')[0].innerText;
    var prodDesc = $(group).find('.description')[0].innerText;
    var regex = /\d+/g;
    var matches = prodName.match(regex);
    var liccountOne = prodName.toLowerCase().indexOf('single') > -1;
    var licensesMin = liccountOne ? 1 : parseInt(matches[0]);
    var licensesMax = liccountOne ? 1 : parseInt(matches[1]);
    var groupDiscountPercent = getGroupDiscountPercent(licensesMin);
    if (licensesMin === 1) {
        singleRegPrice2 = price;
    }
    var regPrice = licensesMin * singleRegPrice2;
    var salePrice = groupDiscountPercent === 0
        ? regPrice
        : Math.round(regPrice - (regPrice * groupDiscountPercent) / 100);
    var productInfo = {
        id: prodId,
        name: prodName,
        description: prodDesc,
        pricereg: priceRecurring ? planPricePerMonth : regPrice,
        pricesale: priceRecurring ? planPricePerMonth : salePrice,
        licensesMin: licensesMin,
        licensesMax: licensesMax,
        prodType: priceRecurring ? 'plan' : 'once',
        numPayments: planNumPayments,
        recurring: priceRecurring
    };
    return productInfo;
}
function getGroupDiscountPercent(numlicenses) {
    var groupDiscountPercent = 0;
    switch (numlicenses) {
        case 1:
            groupDiscountPercent = 0;
            break;
        case 2:
        case 3:
            groupDiscountPercent = 15;
            break;
        case 4:
        case 5:
            groupDiscountPercent = 20;
            break;
        case 6:
        case 7:
            groupDiscountPercent = 25;
            break;
        case 8:
        case 9:
            groupDiscountPercent = 30;
            break;
        case 10:
            groupDiscountPercent = 35;
            break;
        default:
            groupDiscountPercent = 0;
    }
    return groupDiscountPercent;
}
var courseInfo = getCourseInfo();
var productInfos = getProducts();
//console.log(courseInfo);
console.log(productInfos);
