"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var dataPathRoot = '../data/';
function removeId(obj) {
    var id = obj.id, state = __rest(obj, ["id"]);
    var target = __assign({}, state);
    return { target: target, idVal: id };
}
function removeKeyKeepVal(obj, key) {
    var id = obj.id, state = __rest(obj, ["id"]);
    //const target: Omit<T, [key]: _>  = {
    //  ...state
    //}
    var _a = obj, _b = key, _ = _a[_b], state2 = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return { target: state2, oldValue: id };
}
function addKeyWithVal(obj, desiredKey, value) {
    var _a;
    var target = __assign((_a = {}, _a[desiredKey] = value, _a), obj);
    return target;
}
function renameKey(obj, oldKey, newKey) {
    //const idRemoved = removeId(obj);
    var removedOldKey = removeKeyKeepVal(obj, oldKey);
    var withNewKey = addKeyWithVal(removedOldKey.target, newKey, removedOldKey.oldValue);
    return withNewKey;
}
function courseToCourseWId(course) {
    var renamedCourse = renameKey(course, 'id', 'courseId');
    return renamedCourse;
}
function renameSet(arr, oldKey, newKey) {
    if (arr) {
        var renamedThings = arr.map(function (thing) {
            var renamedThing = renameKey(thing, oldKey, newKey);
            return renamedThing;
        });
        return renamedThings;
    }
    else {
        return undefined;
    }
}
function runCourses() {
    var coursesFileName = 'courses.json';
    var coursesFileLoc = path.join(dataPathRoot, coursesFileName);
    var coursesData = require(coursesFileLoc);
    var coursesWithNewIds = coursesData.map(function (course) {
        var renamedCourse = courseToCourseWId(course);
        var renamedProducts = renameSet(course.products, 'id', 'productId');
        var renamedPublishingScheduleItems = renameSet(course.publishingSchedule, 'id', 'publishingScheduleItemId');
        var ranamedChapters = course.chapters.map(function (chapter) {
            var rc = renameKey(chapter, 'id', 'chapterId');
            var renamedLessons = renameSet(chapter.lessons, 'id', 'lessonId');
            rc.lessons = renamedLessons;
            return rc;
        });
        renamedCourse.products = renamedProducts;
        renamedCourse.chapters = ranamedChapters;
        renamedCourse.publishingSchedule = renamedPublishingScheduleItems;
        return renamedCourse;
    });
    var updatedJson = JSON.stringify(coursesWithNewIds, null, 2);
    var destLoc = "".concat(process.cwd(), "/data/coursesId.json");
    try {
        fs.writeFileSync(destLoc, updatedJson);
    }
    catch (er) {
        console.error(er);
    }
    console.log(updatedJson);
}
function runTracks() {
    var fileName = 'tracks.json';
    var fileLoc = path.join(dataPathRoot, fileName);
    var data = require(fileLoc);
    var tracksWIds = data.map(function (track) {
        var renamedTrack = renameKey(track, 'id', 'trackId');
        var renamedBundles = renameSet(track.bundles, 'id', 'bundleId');
        renamedTrack.bundles = renamedBundles;
        return renamedTrack;
    });
    var updatedJson = JSON.stringify(tracksWIds, null, 2);
    var destLoc = "".concat(process.cwd(), "/data/tracksIds.json");
    try {
        fs.writeFileSync(destLoc, updatedJson);
    }
    catch (er) {
        console.error(er);
    }
    console.log(updatedJson);
}
function runBundles() {
    var fileName = 'bundles.json';
    var fileLoc = path.join(dataPathRoot, fileName);
    var data = require(fileLoc);
    var bundlesWIds = data.map(function (bundle) {
        var renamedBundle = renameKey(bundle, 'id', 'bundleId');
        var renamedProducts = renameSet(bundle.products, 'id', 'productId');
        renamedBundle.products = renamedProducts;
        return renamedBundle;
    });
    var updatedJson = JSON.stringify(bundlesWIds, null, 2);
    var destLoc = "".concat(process.cwd(), "/data/bundlesIds.json");
    try {
        fs.writeFileSync(destLoc, updatedJson);
    }
    catch (er) {
        console.error(er);
    }
    console.log(updatedJson);
}
//runCourses();
//runTracks();
runBundles();
