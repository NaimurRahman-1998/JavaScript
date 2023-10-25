const payment = true;
const mark = 81;

const enroll = () => {
  console.log("enrollment in progress..");

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payment) {
        resolve();
      } else {
        reject("payment failed");
      }
    }, 2000);
  });

  return promise;
};
const course = () => {
  console.log("Payment Successful");

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mark > 80) {
        resolve();
      } else {
        reject("u failed");
      }
    }, 3000);
  });

  return promise;
};
const certificate = () => {
  console.log("Course is on Progress");

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("COngrats ! you completed the course, Certificate Done");
    }, 1000);
  });

  return promise;
};

// enroll()
//     .then(course)
//     .then(certificate)
//     .then((value)=>{
//         console.log(value)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

const fullCycle = async () => {
  try {
    await enroll();
    await course();
    const message = await certificate();
    console.log(message)
  } catch(err) {
    console.log(err)
  }
};

fullCycle()