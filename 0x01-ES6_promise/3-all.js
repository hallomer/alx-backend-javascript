import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((resolves) => {
      console.log(`${resolves[0].body} ${resolves[1].firstName} ${resolves[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
