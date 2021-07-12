import Notification from '../models/notification';

const NOTIFICATIONS = [
  new Notification(true),
  new Notification(true),
  new Notification(true),
  new Notification(),
  new Notification(),
  new Notification(),
  new Notification(),
  new Notification(false, 'Berke', 'Öztekin'),
  new Notification(),
  new Notification(false, 'Şirin', 'Şevo'),
  new Notification(),
];

export default NOTIFICATIONS;