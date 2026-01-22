document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  console.log(
    `Site loaded at :\n${year}/${month}/${day} ${hours}:${minutes}:${seconds}`,
  );
});
