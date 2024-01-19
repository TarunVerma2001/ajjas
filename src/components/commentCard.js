import { useState } from "react";
import { Comment } from "./comment";

const CommentCard = ({ item }) => {
  const [replyBoxInfo, setReplyBoxInfo] = useState(null);

  const [toggleReply, setToggleReply] = useState(false);

  const onReply = (comment) => {
    const newReply = new Comment(0, replyBoxInfo.reply);
    comment.comments.push(newReply);
    setReplyBoxInfo(null);
  };

  const [viewReply, setViewReply] = useState(false);

  return (
    <div>
      <div className="border px-4 py-2 rounded-md">
        {/* <h1 className="text-lg">{item.id}</h1> */}
        <div className="flex justify-between">
          <h1 className="text-lg">{item.description}</h1>

          <div className="flex space-x-2 items-center">
            <h1 className="text-lg">
              {new Date(item.time).toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </h1>
            <div
              className="cursor-pointer"
              onClick={() => {
                item.downVote();
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2>{item.votes}</h2>
            <div className="cursor-pointer" onClick={() => {}}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>

        <h2
          className="text-indigo-500 cursor-pointer text-sm pb-2"
          onClick={() => setViewReply(!viewReply)}
        >
          View Replies ({item.comments.length})
        </h2>

        {viewReply &&
          item.comments.map((reply) => (
            <CommentCard key={reply.id} item={reply} />
          ))}

        <div className="flex mb-2">
          <h2
            onClick={() =>
              setReplyBoxInfo({
                id: item.id,
                reply: "",
              })
            }
            className=" px-2 text-sm cursor-pointer bg-gray-200 rounded text-black"
          >
            reply
          </h2>
        </div>
        {item.id == replyBoxInfo?.id && (
          <div className=" flex space-x-4 items-center">
            <input
              type="text"
              value={replyBoxInfo.reply}
              onChange={(e) =>
                setReplyBoxInfo({ ...replyBoxInfo, reply: e.target.value })
              }
              placeholder="Write a comment"
              className="w-full px-4 py-2 text-sm rounded-xl border"
            />
            <div
              onClick={() => onReply(item)}
              className="bg-indigo-600 cursor-pointer hover:bg-indigo-400 rounded-full px-4 py-2 text-white"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
