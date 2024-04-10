import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.all([uploadPhoto(filename), signUpUser(firstName, lastName)])
    .then((values) => {
      console.log(
        `${values[0].message} ${values[1].firstName} ${values[1].lastName}`
      );
    })
    .catch((error) => console.log(error.message));
}
