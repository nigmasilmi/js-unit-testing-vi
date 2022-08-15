import jwt from "jsonwebtoken";

// asynchronous code using a callback
export function generateToken(userEmail, doneFn) {
  jwt.sign({ email: userEmail }, "secret123", doneFn);
}

// asynchronous code using promises
export function generateTokenPromise(userEmail) {
  const promise = new Promise((resolve, reject) => {
    jwt.sign({ email: userEmail }, "secret123", (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

  return promise;
}

// generateToken('test@test.com', (err, token) => {
//   console.log(token);
// });

// generateTokenPromise('test@test.com').then((token) => console.log(token));
