import { useState } from "react";

const useNotification = () => {
  const [permission, setPermission] = useState(() => Notification.permission);

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
  function requestPermission() {
    Notification.requestPermission(function (permission) {
      if (permission === "denied") {
        setPermission("denied");
      }
    });
  }
  return [showNotification, permission];
};

export default useNotification;
