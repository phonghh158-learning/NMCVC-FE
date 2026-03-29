const thumbnailInput = document.getElementById("topic-thumbnail");
const previewImage = document.getElementById("preview-image");
const uploadBox = document.getElementById("thumbnail-upload-box");

thumbnailInput.addEventListener("change", function () {
    handleFile(this.files[0]);
});

uploadBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadBox.classList.add("dragover");
});

uploadBox.addEventListener("dragleave", (e) => {
    e.preventDefault();
    uploadBox.classList.remove("dragover");
});

uploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadBox.classList.remove("dragover");

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        thumbnailInput.files = e.dataTransfer.files;
        handleFile(e.dataTransfer.files[0]);
    }
});

// Hàm dùng chung để đọc và hiển thị ảnh
function handleFile(file) {
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
            uploadBox.classList.add("has-image");
        };

        reader.readAsDataURL(file);
    } else {
        previewImage.src = "";
        uploadBox.classList.remove("has-image");
    }
}

const contentInput = document.getElementById("content");

contentInput.addEventListener("input", function () {
    this.style.height = "auto"; // reset
    this.style.height = this.scrollHeight + "px"; // set theo nội dung
});
