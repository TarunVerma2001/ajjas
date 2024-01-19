import { useState } from "react";
import { Comment } from "../components/comment";
import CommentCard from "../components/commentCard";
import CommentInput from "../components/commentInput";
import toast from "react-hot-toast";

const Home = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState();

  const addComment = () => {
    if (!comment || comment == "") {
      toast.error("Please add comment text");
      return;
    }
    var newCommentArray = comments;

    const newComment = new Comment(0, comment);

    comments.push(newComment);

    // console.log(newCommentArray);

    setComments(comments);
    setComment();
    toast.success("Successfully Commented");
  };

  const [replyBoxInfo, setReplyBoxInfo] = useState({});

  const [reply, setReply] = useState();

  const sortAcc = () => {
    const sortedComments = [...comments];
    sortedComments.sort((a, b) => a.time - b.time);

    setComments(sortedComments);
  };
  const sortDec = () => {
    const sortedComments = [...comments];

    sortedComments.sort((a, b) => b.time - a.time);
    setComments(sortedComments);
  };

  return (
    <div className="flex p-4 min-h-screen flex-col justify-between">
      <div className="flex justify-between">
        <h1 className="container  text-3xl text-indigo-900">Comment</h1>
        <div className="flex flex-col space-y-2">
          <h1 className="border p-2 rounded cursor-pointer" onClick={sortAcc}>
            Sort Accending based on Time
          </h1>
          <h1 onClick={sortDec} className="border p-2 rounded cursor-pointer">
            Sort Descending based on Time
          </h1>
        </div>
      </div>
      <div>
        <div className="flex pb-4 flex-col space-y-2 cursor-pointer">
          {comments.map((item, index) => (
            <CommentCard item={item} key={index} />
          ))}
        </div>

        <CommentInput
          value={comment}
          setValue={setComment}
          onClick={addComment}
        />
      </div>
    </div>
  );
};

export default Home;
