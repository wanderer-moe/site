import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const timeAgo = (isoTimestamp: string) => {
    const now = dayjs();
    const timestamp = dayjs(isoTimestamp);
    return timestamp.from(now);
};

export const iso8601ToUnix = (isoTimestamp: string) => {
    return dayjs(isoTimestamp).unix();
};
