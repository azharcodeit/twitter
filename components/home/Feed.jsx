import {getCurrentUser} from "@app/actions/getCurrentUser";
import Header from "@components/Header";
import PostContainer from "@components/PostContainer";
import NewPost from "@components/NewPost";

async function Feed () {
  const currentUser = await getCurrentUser()

  return (
    <div className='feed border-darker-gray-bg border-x h-max'>
      <Header border={true}>
        <div className='flex px-4 h-14 font-semibold text-xl justify-items-center items-center'>
          <h1>Home</h1>
        </div>
        <div className='flex h-auto'>
          <div className='flex flex-col items-center w-[50%] hover:bg-black/10 transition duration-200 cursor-pointer'>
            {" "}
            <div className='py-4 font-medium text-slate-500 focus:font-semibold focus:text-main-secondary'>
              For you
            </div>
          </div>
          <div className='flex flex-col items-center  w-[50%] hover:bg-black/10 transition duration-200 cursor-pointer'>
            <div>
              <div className='py-4 font-semibold text-main-secondary'>
                Following
              </div>
              <div className='w-full h-[4px] bg-main-primary rounded-lg'></div>
            </div>
          </div>
        </div>
      </Header>
      <NewPost currentUser={currentUser}/>
      {/* <PostContainer /> */}
    </div>
  );
}

export default Feed;
