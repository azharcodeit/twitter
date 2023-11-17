import { getNotifications } from "@app/actions/getNotifications";
import { getFormattedDate } from "@utils";

export default async function page() {
  const fetchedNotifications = await getNotifications();
  return fetchedNotifications?.map(async (fetchedNotification) => {
    const date = getFormattedDate(fetchedNotification?.createdAt);
    return (
      <div
        key={fetchedNotification?.id}
        className='flex pl-3 h-14 items-center border-darker-gray-bg border-b'
      >
        {fetchedNotification?.body} on {date}
      </div>
    );
  });
}
