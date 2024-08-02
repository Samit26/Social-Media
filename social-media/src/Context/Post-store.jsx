import { createContext, useReducer, useState } from "react";
const POST_DATA = [
  {
    id: "12",
    title: "Bleach:Thousand Year Blood War",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus dolor aliquam repellat iusto velit nobis illum quis? Officiis minima soluta voluptatem praesentium! Voluptatibus qui tempore dolorum porro voluptatem minus velit sit eligendi perspiciatis aliquam cupiditate iste ex unde assumenda quo placeat sequi, nihil aut.",
    imageUrl:
      "https://www.justwatch.com/images/backdrop/301641455/s640/season-1/season-1",
    reactions: 8,
    userId: "user_9",
    tags: ["Bleach", "TYBW", "S1", "Anime", "BEST"],
  },
  {
    id: "13",
    title: "Bleach:Thousand Year Blood War Season 2",
    body: "i dont want to do homework",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
    reactions: 3,
    userId: "user_35",
    tags: ["Bleach", "S2"],
  },
  {
    id: "15",
    title: "Bleach Manga",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ayBLTmJE81ZQvF8628XY__4Ngk0V2n2VMQ&s",
    body: "i dont want to do homework",
    reactions: 3,
    userId: "user_35",
    tags: ["#Bleach"],
  },
  {
    id: "17",
    title: "Bleach:Aizen the master mind",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus dolor aliquam repellat iusto velit nobis illum quis? Officiis minima soluta voluptatem praesentium! Voluptatibus qui tempore dolorum porro voluptatem minus velit sit eligendi perspiciatis aliquam cupiditate iste ex unde assumenda quo placeat sequi, nihil aut.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMQXyDf9_PcFMv1gHSNamcjpLmn90gqcDiw&s",
    reactions: 8,
    userId: "user_9",
    tags: ["Bleach", "TYBW", "S1", "Anime", "BEST"],
  },
  {
    id: "18",
    title: "Bleach: Ichigo",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus dolor aliquam repellat iusto velit nobis illum quis? Officiis minima soluta voluptatem praesentium! Voluptatibus qui tempore dolorum porro voluptatem minus velit sit eligendi perspiciatis aliquam cupiditate iste ex unde assumenda quo placeat sequi, nihil aut.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzdmxBVkTUa3Tvqwp_tjZt33Pjyj2fDRTgA&s",
    reactions: 8,
    userId: "user_9",
    tags: ["Bleach", "TYBW", "S1", "Anime", "BEST"],
  },
  {
    id: "21",
    title: "Bleach:Thousand Year Blood War",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus dolor aliquam repellat iusto velit nobis illum quis? Officiis minima soluta voluptatem praesentium! Voluptatibus qui tempore dolorum porro voluptatem minus velit sit eligendi perspiciatis aliquam cupiditate iste ex unde assumenda quo placeat sequi, nihil aut.",
    imageUrl:
      "https://www.justwatch.com/images/backdrop/301641455/s640/season-1/season-1",
    reactions: 8,
    userId: "user_9",
    tags: ["Bleach", "TYBW", "S1", "Anime", "BEST"],
  },
  {
    id: "20",
    title: "Bleach:Thousand Year Blood War Season 2",
    body: "i dont want to do homework",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
    reactions: 3,
    userId: "user_35",
    tags: ["Bleach", "S2"],
  },
];

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  likeBtnPress: () => {},
});

const postListReducer = (currPost, action) => {
  let newListPost = currPost;

  if (action.type === "DELETE_POST") {
    newListPost = currPost.filter((post) => post.id !== action.payload.id);
    return newListPost;
  }

  if (action.type === "LIKED_POST") {
    return currPost.map((post) =>
      post.id === action.payload.id
        ? { ...post, reactions: post.reactions + 1 }
        : post
    );
  }

  if (action.type === "UNLIKED_POST") {
    return currPost.map((post) =>
      post.id === action.payload.id
        ? { ...post, reactions: post.reactions - 1 }
        : post
    );
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, POST_DATA);

  const addPost = () => {};

  const likeBtnPress = (like, id) => {
    console.log("btnpreseed" + id);
    if (like === "Clicked") {
      dispatchPostList({
        type: "LIKED_POST",
        payload: {
          id,
        },
      });
    }

    if (like === "Not Clicked") {
      dispatchPostList({
        type: "UNLIKED_POST",
        payload: {
          id,
        },
      });
    }
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        likeBtnPress,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
