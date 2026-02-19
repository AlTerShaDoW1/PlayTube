import mongoose from "mongoose"
import {Comment} from "../models/comment.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.params
    const {page = 1, limit = 10} = req.query

    if(!videoId){
        throw new ApiError(400, "video Id is required")
    }

    const options= {
        page,
        limit
    }

    const MyaggregateComments= Comment.aggregate([
        {
            $match: {
                video: new mongoose.Types.objectId(videoId)
            }
        }, {
            $lookup: {
                from: "users",
                localField: "owner",
                foreignField: "_id",
                as: "commentor"
            }
        }, {
            $unwind: "$commentor"
        }, {
            $project: {
                _id: 1,
                content: 1,
                "commentor._id": 1,
                "commentor.username": 1,
                "commentor.fullName": 1,
                "commentor.avatar": 1,
                "commentor.createdAt": 1,
            }
        }
    ]);

    if(!MyaggregateComments){
        throw new ApiError(404, "No comments found for this video")
    }

    Comment.aggregatePaginate(MyaggregateComments, options, function(err, results){
        if(err){
            console.log(err);
            throw new ApiError(500, "An error occurred while fetching comments")
        } else {
            return res.
            status(200).
            json(new ApiResponse(200, results, "Got video all comments successfully"))
        }
    })


})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video
    const {videoId} = req.params
    const {content} = req.body
    const userId = req.user._id
    if(!videoId){
        throw new ApiError(400, "video Id is required")
    }
    if(!content){
        throw new ApiError(400, "content is required")
    }
    const comment= await Comment.create({
        content,
        video: videoId,
        owner: userId
    });
    if(!comment){
        throw new ApiError(500, "An error occurred while adding comment")
    }
    await comment.save();
    return res.
    status(200).
    json(
        new ApiResponse(200, comment, "Comment added successfully")
    )

})

const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
    /*
    1. Get the comment id from the request params
    2. Get the updated content from the request body
    3. Find the comment by id and update it with the new content
    4. Return the updated comment in the response
    */
   const {commentId} = req.params;
   const {updatedContent} = req.body;

   if(!commentId){
    throw new ApiError(400, "comment id is invalid");
    }
    if(!updatedContent){
        throw new ApiError(400, "updated content is required");
    }
    const updateComment = await Comment.findByIdAndUpdate(
        commentId,
        {
            $set: {
                content: updatedContent,
            }
        },
        {
            $new: true
        }
    );
    
    if(!updateComment){
        throw new ApiError(404, "Comment not found");
    }
    return res.
    status(200).
    json(
        new ApiResponse(200, updateComment, "Comment updated successfully")
    )
})

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
    const {commentId} = req.params;
    if(!commentId){
        throw new ApiError(400, "comment id is invalid");
    }
    const deleteComment = await Comment.findByIdAndDelete(commentId);
    if(!deleteComment){
        throw new ApiError(404, "Comment not found");
    }
    return res.
    status(200).
    json(
        new ApiResponse(200, deleteComment, "Comment deleted successfully")
    )
})

export {
    getVideoComments, 
    addComment, 
    updateComment,
    deleteComment
    }