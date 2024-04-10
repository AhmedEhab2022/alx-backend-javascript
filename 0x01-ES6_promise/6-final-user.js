import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ])
    .then((values) => {
      const arr = [];
      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          arr.push({ status: value.status, value: value.value });
        } else {
          arr.push({
            status: value.status,
            value: `Error: ${value.reason.message}`,
          });
        }
      });
      return arr;
    })
}
