import { PublishingScheduleItem } from '../models/publishing-schedule-item.model';
import { publishingSchedule_2 } from '../graphql-types';

export function publishingScheduleItemFromPublishingSchdule_2(
  si: publishingSchedule_2
): PublishingScheduleItem {
  return {
    id: si.id,
    date: new Date(si.date)
  };
}
