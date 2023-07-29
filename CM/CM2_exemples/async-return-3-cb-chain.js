function async_work(n, cb) {
  return setTimeout(() => cb(n ** 2), 0);
}

// pyramid of doom
async_work(3, (r1) => {
  console.log(r1);
  async_work(r1, (r2) => {
    console.log(r2);
    async_work(r2, (r3) => console.log(r3));
  });
});
