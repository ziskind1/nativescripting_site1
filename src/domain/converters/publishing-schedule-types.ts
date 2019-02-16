import { PublishingScheduleItem } from '../models/publishing-schedule-item.model';
import { PublishingSchedule_2 } from '../graphql-types';

export function publishingScheduleItemFromPublishingSchdule_2(
  si: PublishingSchedule_2
): PublishingScheduleItem {
  return {
    id: si.id,
    date: new Date(si.date)
  };
}
