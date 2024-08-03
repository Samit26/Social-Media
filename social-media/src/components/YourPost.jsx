import { useContext } from "react";
import { PostList } from "../Context/Post-store";
import YourPostAre from "./YourPostAre";

const YourPost = () => {
  const UserId = "user_9";
  const { postList } = useContext(PostList);
  const userPost = postList.filter((user) => UserId === user.userId);
  return (
    <>
      {}
      {userPost.map((post) => (
        <YourPostAre key={post.id} post={post} />
      ))}
    </>
  );
};

export default YourPost;
