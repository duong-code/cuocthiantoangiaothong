function addStory() {
  const story = document.getElementById("story").value;
  if (story.trim()) {
      const storyDiv = document.createElement("div");
      storyDiv.className = "story";
      storyDiv.textContent = story;
      document.getElementById("community-posts").appendChild(storyDiv);
      document.getElementById("story").value = "";
  } else {
      alert("Vui lòng nhập câu chuyện của bạn!");
  }
}
