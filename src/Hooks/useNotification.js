const useNotification = () => {
  let permission = Notification.permission;

  if (permission === "default") {
    requestAndShowPermission();
  }

  function showNotification(title, body) {
    const options = {
      icon: "../assets/Vector.png",
    };

    const notification = new Notification(title, { body, options });
    notification.onclick = () => {
      notification.close();
      window.parent.focus();
    };
  }
  function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
      if (permission === "denied") {
        alert("please allow notifications");
      }
    });
  }
  return showNotification;
};

export default useNotification;
