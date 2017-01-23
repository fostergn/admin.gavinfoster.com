if(window.Notification && Notification.permission !== 'denied') {
  Notification.requestPermission();
}

export function pushNotification(title, body, icon){
  if(window.Notification && Notification.permission !== 'denied') {
    if(Notification.permission !== 'granted'){
      const n = createNotification(title, body, icon);
    }
    Notification.requestPermission(function(status) {  // status is "granted", if accepted by user
      const n = createNotification(title, body, icon);
    });
  }
}

function createNotification(title, body, icon){
  return new Notification(title, { 
    body: body,
    icon: icon
  }); 
}