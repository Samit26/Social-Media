import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../Context/Post-store";

const PostContainer = () => {
  const { postList } = useContext(PostList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostContainer;
