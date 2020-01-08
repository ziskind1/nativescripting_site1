import { PublishingScheduleItem } from '../models/publishing-schedule-item.model';
import { CoursesJsonPublishingSchedule } from '../graphql-types';

export function publishingScheduleItemFromPublishingSchdule_2(
  si: CoursesJsonPublishingSchedule
): PublishingScheduleItem {
  return {
    id: si.id,
    date: new Date(si.date)
  };
}
