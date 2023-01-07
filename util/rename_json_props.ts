import { NSBundlesJson, NSBundlesJsonProducts, NSCoursesJson, 
  NSCoursesJsonChapters, 
  NSCoursesJsonChaptersLessons, 
  NSCoursesJsonProducts, 
  NSCoursesJsonPublishingSchedule, 
  NSTracksJson,
  NSTracksJsonBundles} from "./models/json-models";
import { NSBundlesJsonProductsWId, NSBundlesJsonWId, NSCoursesJsonChaptersLessonsWId,
   NSCoursesJsonChaptersWId, 
   NSCoursesJsonProductsWId, 
   NSCoursesJsonPublishingScheduleWId, 
   NSCoursesJsonWId, 
   NSTracksJsonBundlesWId, 
   NSTracksJsonWId} from "./models/json-models-renamed";

import * as fs from 'fs';
import * as path from 'path';

const dataPathRoot = '../data/';


type OmitId<T extends { id: any }> = Omit<T, 'id'>;


function removeId<T extends { id: any }>(obj: T): {target: Omit<T, 'id'>, idVal: string} {
  const {id, ...state} = obj;
  const target: Omit<T, 'id'>  = {
    ...state
  }
  return { target: target, idVal: id};
}

function removeKeyKeepVal<T extends { [key: string]: any }>(obj: T, key: keyof T): {target: Omit<T, keyof T>, oldValue: string} {
  const {id, ...state} = obj;
  //const target: Omit<T, [key]: _>  = {
  //  ...state
  //}
  const { [key]: _, ...state2 } = obj;
  return { target: state2, oldValue: id};
}


function addKeyWithVal<T, V>(obj: T, desiredKey: string, value: V): T & { [desiredKey: string]: V } {
  const target = {
    [desiredKey]: value,
    ...obj
  };
  return target;
}

function renameKey<T extends { [key: string]: any }>(obj: T, oldKey: string, newKey: string): Omit<T, keyof T> & {[desiredKey: string]: string;}

{

  //const idRemoved = removeId(obj);
  const removedOldKey = removeKeyKeepVal(obj, oldKey);
  const withNewKey = addKeyWithVal(removedOldKey.target, newKey, removedOldKey.oldValue);

  return withNewKey;
}


function courseToCourseWId(course: NSCoursesJson) :  NSCoursesJsonWId {
  const renamedCourse = renameKey(course, 'id', 'courseId');
  return renamedCourse as unknown as NSCoursesJsonWId;
}

  

function renameSet<T,R>(arr: T[], oldKey: string, newKey: string): R[] {
  if (arr) {
    const renamedThings = arr.map((thing: T) => {
      const renamedThing = renameKey(thing, oldKey, newKey);
      return renamedThing;
    });
    return renamedThings as unknown[] as R[];
  } else {
    return undefined;
  }
}


  
 
function runCourses() {
  const coursesFileName = 'courses.json'; 
  const coursesFileLoc = path.join(dataPathRoot, coursesFileName);
  const coursesData: NSCoursesJson[] = require(coursesFileLoc);

    const coursesWithNewIds = coursesData.map((course: NSCoursesJson): NSCoursesJsonWId => {
      const renamedCourse = courseToCourseWId(course);
  
      const renamedProducts = renameSet<NSCoursesJsonProducts, NSCoursesJsonProductsWId>(course.products, 'id', 'productId');
      const renamedPublishingScheduleItems = renameSet<NSCoursesJsonPublishingSchedule, NSCoursesJsonPublishingScheduleWId>(course.publishingSchedule, 'id', 'publishingScheduleItemId');
  
      const ranamedChapters = course.chapters.map((chapter: NSCoursesJsonChapters) => {
        const rc = renameKey<NSCoursesJsonChapters>(chapter, 'id', 'chapterId') as unknown as NSCoursesJsonChaptersWId;
        const renamedLessons = renameSet<NSCoursesJsonChaptersLessons, NSCoursesJsonChaptersLessonsWId>(chapter.lessons, 'id', 'lessonId');
        rc.lessons = renamedLessons;
        return rc;
      });
  
      renamedCourse.products = renamedProducts;
      renamedCourse.chapters = ranamedChapters;
      renamedCourse.publishingSchedule = renamedPublishingScheduleItems;
  
      return renamedCourse;
    });
  
    const updatedJson = JSON.stringify(coursesWithNewIds, null, 2);

    const destLoc = `${process.cwd()}/data/coursesId.json`;
    try {
        fs.writeFileSync(destLoc, updatedJson);
    } catch(er) {
        console.error(er);
    }
    console.log(updatedJson);
  }

function runTracks() {
  const fileName = 'tracks.json'; 
  const fileLoc = path.join(dataPathRoot, fileName);
  const data: NSTracksJson[] = require(fileLoc);

  const tracksWIds = data.map((track: NSTracksJson): NSTracksJsonWId => {
    const renamedTrack = renameKey(track, 'id', 'trackId') as unknown as NSTracksJsonWId;
    const renamedBundles = renameSet<NSTracksJsonBundles, NSTracksJsonBundlesWId>(track.bundles, 'id', 'bundleId');
    renamedTrack.bundles = renamedBundles;
    return renamedTrack;
  });

  const updatedJson = JSON.stringify(tracksWIds, null, 2);

  const destLoc = `${process.cwd()}/data/tracksIds.json`;
  try {
      fs.writeFileSync(destLoc, updatedJson);
  } catch(er) {
      console.error(er);
  }
  console.log(updatedJson);
}

function runBundles() {
  const fileName = 'bundles.json'; 
  const fileLoc = path.join(dataPathRoot, fileName);
  const data: NSBundlesJson[] = require(fileLoc);

  const bundlesWIds = data.map((bundle: NSBundlesJson): NSBundlesJsonWId => {
    const renamedBundle = renameKey(bundle, 'id', 'bundleId') as unknown as NSBundlesJsonWId;
    const renamedProducts = renameSet<NSBundlesJsonProducts, NSBundlesJsonProductsWId>(bundle.products, 'id', 'productId');
    renamedBundle.products = renamedProducts;
    return renamedBundle;
  });

  const updatedJson = JSON.stringify(bundlesWIds, null, 2);

  const destLoc = `${process.cwd()}/data/bundlesIds.json`;
  try {
      fs.writeFileSync(destLoc, updatedJson);
  } catch(er) {
      console.error(er);
  }
  console.log(updatedJson);
}



  //runCourses();
  //runTracks();
  runBundles();