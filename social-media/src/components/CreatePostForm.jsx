import { useContext, useRef } from "react";
import styles from "./CreatePostForm.module.css";
import { PostList } from "../Context/Post-store";
import { toast } from "react-hot-toast";

const CreatePostForm = () => {
  const { addPost } = useContext(PostList);
  const Tag = useRef();
  const Body = useRef();
  const Title = useRef();
  const ImageUrl = useRef();

  const submitButton = (event) => {
    event.preventDefault();
    if (
      Tag.current.value === "" ||
      Body.current.value === "" ||
      Title.current.value === "" ||
      ImageUrl.current.value === ""
    ) {
      console.log("error");
      toast.error("Please fill all the fields");
    } else {
      let imageUrl = ImageUrl.current.value;
      let tag = Tag.current.value.split(" ");
      let body = Body.current.value;
      let title = Title.current.value;
      addPost(imageUrl, tag, body, title);
      toast.success("Successfully Posted!");
      ImageUrl.current.value = "";
      Tag.current.value = "";
      Body.current.value = "";
      Title.current.value = "";
    }
  };

  return (
    <>
      <form onSubmit={submitButton}>
        <div className={styles["card-1"]}>
          <div className={styles["card-header-1"]}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/260/680/non_2x/photo-editing-icon-free-vector.jpg"
              alt="Edit Image"
            />
          </div>
          <div className={styles["card-body-1"]}>
            <input
              type="text"
              placeholder="Enter ImageUrl"
              ref={ImageUrl}
              className={styles["tags-container-image"]}
            ></input>
            <input
              type="text"
              placeholder="Enter Tag"
              ref={Tag}
              className={styles["tags-container"]}
            ></input>
            <input
              type="text"
              placeholder="Enter Title"
              ref={Title}
              className={`${styles["heading"]}`}
            ></input>
            <input
              type="text"
              placeholder="Enter Body"
              ref={Body}
              className={styles["card-body-p"]}
            ></input>
            <button type="submit" className="btn btn-info">
              Post
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreatePostForm;
