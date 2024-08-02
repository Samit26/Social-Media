/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { PostList } from "../Context/Post-store";
import styles from "./Post.module.css";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Post = ({ post }) => {
  const { likeBtnPress } = useContext(PostList);
  const [value1, setValue1] = useState("Clicked")
  const likeBtn1 = (value) => {
    value === "Clicked" ? (setValue1("Not Clicked")) : (setValue1("Clicked"));
    console.log(value1)
  };

  const Tags = post.tags;
  const text = post.body;
  const limit = 120;
  const limitedText =
    text.length > limit ? text.substring(0, limit) + "..." : text;
  const Title = post.title;
  const titleLimit = 50;
  const limitedTitle =
    Title.length > titleLimit ? Title.substring(0, titleLimit) + "..." : Title;

  return (
    <>
      <div className={styles["card-1"]}>
        <div className={styles["card-header-1"]}>
          <img src={post.imageUrl} alt="rover" />
        </div>
        <div className={styles["card-body-1"]}>
          <div className={styles["tags-container"]}>
            {post.tags.map((tag) => (
              <span
                className={`${styles["tag-1"]} ${
                  styles["tag-color-" + Tags.indexOf(tag)]
                }`}
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <h5 className={`${styles["heading"]}`}>{limitedTitle}</h5>
          <p className={styles["card-body-p"]}>{limitedText}</p>
          <div className={styles["user-1"]}>
            <img
              className={styles["user-img-1"]}
              src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
              alt="user"
            />
            <div className={styles["user-info-1"]}>
              <h5 className={styles["user-info-h5"]}>{post.userId}</h5>
              <small className={styles["user-small"]}>2h ago</small>
            </div>
            <div className={styles["likeBtn"]}>
              <span className={styles["likeCount"]}>{post.reactions}</span>
              {value1 === "Not Clicked" ? (
                <FcLike
                  onClick={() => {
                    likeBtnPress(value1, post.id);
                    likeBtn1(value1);
                  }}
                />
              ) : (
                <FaRegHeart
                  onClick={() => {
                    likeBtnPress(value1, post.id);
                    likeBtn1(value1);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
