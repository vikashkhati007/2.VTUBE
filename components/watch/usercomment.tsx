import Image from "next/image";

const UserComments = ({ avatar, username, uploaddate, usercomment }: any) => {
  return (
    <>
      <div className="flex justify-start gap-3 my-5 border border-white border-opacity-20 rounded-md p-2 overflow-x-hidden">
        <div className="image">
          <Image
            className="rounded-full"
            src={avatar}
            width={40}
            height={40}
            alt="profile"
          />
        </div>
        <div className="userdeatils text-sm flex flex-col gap-1">
          <div className="usernameandtime flex gap-3 items-center">
            <p className="font-semibold">{username}</p>
            <span className="opacity-70 text-xs">{uploaddate}</span>
          </div>
          <h3 className="break-words">
            {usercomment}
          </h3>
        </div>
      </div>
    </>
  );
};

export default UserComments;
