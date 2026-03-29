const commentInput = document.getElementById("comment");

commentInput.addEventListener("input", function () {
    this.style.height = "auto"; // reset
    this.style.height = this.scrollHeight + "px"; // set theo nội dung
});

const comments = document.querySelectorAll(".comment");
comments.forEach((comment) => {
    let reactionButton = comment.querySelector(".admin-react-button");
    let reactionList = comment.querySelector(".admin-reaction-list");

    reactionButton.addEventListener("click", () => {
        reactionList.classList.toggle("show");
    });
    let adminReactionComment = comment.querySelector(".comment-body .admin-reaction");
    let commentContent = comment.querySelector(".comment-body .comment-content");

    if (!adminReactionComment.classList.contains("isNull")) {
        adminReactionComment.style.height = commentContent.clientHeight.toString() + "px";
    }

    let reactions = reactionList.querySelectorAll(".admin-reaction");
    reactions.forEach((reaction) => {
        reaction.addEventListener("click", () => {
            reactionList.classList.remove("show");
            if (adminReactionComment.classList.contains("isNull")) {
                adminReactionComment.classList.remove("isNull");
            }

            adminReactionComment.style.height = commentContent.clientHeight.toString() + "px";
            adminReactionComment.setAttribute(
                "src",
                reaction.querySelector("img").getAttribute("src"),
            );
        });
    });
});
