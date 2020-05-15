function getCourseInfo() {
    var courseId = $('#fedora-data').attr('data-course-id');
    var products = getProducts(courseId);
    var chapters = getChapters();
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
        products: products,
        publishedChapters: chapters.map(function (c) { return c.id; }),
        chapters: chapters
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
function getProducts(courseId) {
    var ret = [];
    $('.checkout-button-group').each(function (i, group) {
        var prodInfo = getProductInfo(i, courseId, group);
        ret.push(prodInfo);
    });
    return ret;
}
var singleRegPrice2 = 0;
function getProductInfo(index, courseId, group) {
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
    var groupDiscountData = getGroupDiscountData(courseId, licensesMin);
    if (licensesMin === 1) {
        singleRegPrice2 = price;
    }
    var regPrice = licensesMin * singleRegPrice2;
    var salePrice = groupDiscountData.percent === 0
        ? regPrice
        : Math.round(regPrice - (regPrice * groupDiscountData.percent) / 100);
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
        recurring: priceRecurring,
        code: groupDiscountData.code
    };
    return productInfo;
}
function getGroupDiscountData(courseId, numlicenses) {
    var groupDiscountPercent = 0;
    var code = '';
    switch (numlicenses) {
        case 1:
            groupDiscountPercent = 0;
            break;
        case 2:
            groupDiscountPercent = 15;
            code = courseId + "TEAM2";
            break;
        case 3:
            groupDiscountPercent = 15;
            code = courseId + "TEAM3";
            break;
        case 4:
            groupDiscountPercent = 20;
            code = courseId + "TEAM4";
            break;
        case 5:
            groupDiscountPercent = 20;
            code = courseId + "TEAM5";
            break;
        case 6:
            groupDiscountPercent = 25;
            code = courseId + "TEAM6";
            break;
        case 7:
            groupDiscountPercent = 25;
            code = courseId + "TEAM7";
            break;
        case 8:
            groupDiscountPercent = 30;
            code = courseId + "TEAM8";
            break;
        case 9:
            groupDiscountPercent = 30;
            code = courseId + "TEAM9";
            break;
        case 10:
            groupDiscountPercent = 35;
            code = courseId + "TEAM10";
            break;
        default:
            groupDiscountPercent = 0;
    }
    return { percent: groupDiscountPercent, code: code };
}
var courseInfo = getCourseInfo();
var productInfos = getProducts('-----');
//console.log(courseInfo);
//console.log(productInfos);
console.log(JSON.stringify(courseInfo, null, 2));
