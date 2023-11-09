import { getNotifications } from "@app/actions/getNotifications";
import TrendingBar from "@components/TrendingBar";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import { getFormattedDate } from "@utils";

async function Notifications() {
  const fetchedNotifications = await getNotifications();
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
          const date = getFormattedDate(fetchedNotification?.createdAt);
          return (
            <div
              key={fetchedNotification?.id}
              className='flex pl-3 h-14 items-center border-darker-gray-bg border-b'
            >
              {fetchedNotification?.body} on {date}
            </div>
          );
        })}
      </div>
      <TrendingBar />
    </MainContainer>
  );
}

export default Notifications;
