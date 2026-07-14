// Promise 加载图片
function loadImage(url) {
  const promise = new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      const error = new Error(`图片加载失败，url为${url}`);
      reject(error);
    };
    img.src = url;
  });

  return promise;
}

// 成功走then，失败走catch捕获错误
const url1 =
  "https://c-ssl.duitang.com/uploads/item/202005/11/20200511090348_llwnt.jpeg";
const url2 =
  "https://c-ssl.duitang.com/uploads/blog/202306/29/1mSaQGDXiQZpaYz.jpeg";

loadImage(url1)
  .then((img1) => {
    console.log("img1", img1);
    return loadImage(url2);
  })
  .then((img2) => {
    console.log("img2", img2);
  })
  .catch((error) => {
    console.error("error", error);
  });
