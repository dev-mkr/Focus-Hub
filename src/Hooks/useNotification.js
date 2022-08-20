const useNotification = () => {
  let permission = Notification.permission;

  if (permission === "default") {
    requestPermission();
  }
  const showNotification = (title, body) => {
    if (permission === "default" || permission === "denied") {
      requestPermission();
    } else {
      const options = {
        body,
        icon: "https://raw.githubusercontent.com/dev-mkr/Focus-Hub/master/public/favicon.ico",
      };

      const notification = new Notification(title, options);
      notification.onclick = () => {
        notification.close();
        window.parent.focus();
      };
    }
  };
  const requestPermission = () => {
    Notification.requestPermission(function (permission) {
      if (permission === "denied") {
        alert("please allow notifications From the I icon in the search bar above");
      }
    });
  };
  return showNotification;
};

export default useNotification;
