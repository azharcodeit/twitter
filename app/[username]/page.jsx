import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCurrentUser } from "@app/actions/getCurrentUser";
import MainContainer from "@components/MainContainer";
import Header from "@components/Header";
import Back from "@components/Back";

const UserProfile = async () => {
  const session = await getServerSession(authOptions);
  const currentUser = await getCurrentUser(session);
  return (
    <MainContainer>
      <div className='feed border-darker-gray-bg border-x h-max'>
        <Header>
          <div className='flex pr-4 pl-3 h-14 justify-items-center items-center'>
            <Back />
            <div>
              {" "}
              <h1 className="font-semibold text-xl">{currentUser?.name || "Name"}</h1>
              <p className="text-slate-400 text-sm">1 post</p>
            </div>
          </div>
        </Header>
        Hero Bio Feed
      </div>
    </MainContainer>
  );
};

export default UserProfile;
