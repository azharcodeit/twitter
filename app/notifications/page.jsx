import { getNotifications } from "@app/actions/getNotifications";
import TrendingBar from "@components/TrendingBar";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";

async function Notifications() {
  const fetchedNotifications = await getNotifications();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-inherit'>
        <Header>
          <div className='flex pl-3 h-14 items-center'>
            <div>
              <h1 className='font-semibold text-lg'>{"Notifications"}</h1>
            </div>
          </div>
        </Header>
        {fetchedNotifications?.map(async (fetchedNotification) => {
          const date = new Date(fetchedNotification?.createdAt);
          const day = date.getDate();
          const month = monthNames[date?.getMonth()];
          const year = date?.getFullYear();
          const formattedDate = `${day} ${month?.slice(0, 3)} ${year}`;
          return (
            <div
              key={fetchedNotification?.id}
              className='flex pl-3 h-14 items-center border-darker-gray-bg border-b'
            >
              {fetchedNotification?.body} on {formattedDate}
            </div>
          );
        })}
      </div>
      <TrendingBar />
    </MainContainer>
  );
}

export default Notifications;
