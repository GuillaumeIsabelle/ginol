const notifier = require('node-notifier');
// String
//notifier.notify('Message');

// Object
notifier.notify({
  title: 'My notification',
  message: 'Hello, there!',
  icon: 'Terminal Icon', // Absolute Path to Triggering Icon
});