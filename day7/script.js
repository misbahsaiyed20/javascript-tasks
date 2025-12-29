const notifications = document.querySelectorAll(".notification");

for (let i = 0; i < notifications.length; i++) {
  notifications[i].addEventListener("click", function () {
    notifications[i].classList.toggle("read");
  });
}
