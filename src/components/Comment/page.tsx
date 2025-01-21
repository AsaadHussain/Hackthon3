"use client";

import { useState } from "react";

interface Comment {
    id: number;
    userName: string;
    text: string;
    date: string;
}

export default function CommentsSection() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>("");
    const [userName, setUserName] = useState<string>("");

    const handleAddComment = () => {
        if (newComment.trim() === "" || userName.trim() === "") {
            alert("Please enter your name and comment.");
            return;
        }

        const newCommentObject: Comment = {
            id: comments.length + 1,
            userName,
            text: newComment,
            date: new Date().toLocaleString(),
        };

        setComments((prevComments) => [newCommentObject, ...prevComments]);
        setNewComment("");
        setUserName("");
    };

    return (
        <div className="poppins w-full max-w-3xl mx-auto bg-white p-4 ">
            <h2 className="text-xl font-[400] mb-4">Comments</h2>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <textarea
                    placeholder="Write a comment..."
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button
                    className="font-[400] text-[14px] rounded-lg border-[1px] border-black px-6 py-[8px] my-2"
                    onClick={handleAddComment}
                >
                    Submit Comment
                </button>
            </div>

            <div className="space-y-4">
                {comments.length === 0 ? (
                    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                ) : (
                    comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="border-b pb-3 mb-3"
                        >
                            <p className="text-sm text-black font-[400]">
                                <strong className="text-sm text-black font-[600]">{comment.userName}</strong> - {comment.date}
                            </p>
                            <p className="text-gray-800">{comment.text}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
