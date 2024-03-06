"use strict";
window.addEventListener("DOMContentLoaded", () => {
  let kirimBtn = document.querySelector(".kirim");
  let chiqimBtn = document.querySelector(".chiqim");
  let userKey = "_user";

  function reloadData() {
    document.querySelector(".total").innerHTML = user.total;
  }

  function setUser(userData) {
    if (!userData) {
      userData = {
        total: 0,
        gazna: 0,
        xarajatlar: 0,
      };
    }
    localStorage.setItem(userKey, JSON.stringify(userData));
    return userData;
  }

  function getUser() {
    let userData = localStorage.getItem(userKey);
    if (userData) {
        console.log(userData, 1);
      return JSON.parse(userData);
    } else {
      console.log(userData);
      return setUser();
    }
  }

  let user = getUser();
  //   reloadData();

  kirimBtn.addEventListener("click", () => {
    let kirimSum = +prompt("Kirim miqdorini kiriting:");
    if (Number(kirimSum)) {
      if (kirimSum >= 1000) {
        user.total += kirimSum;
        setUser(user);
      } else {
        alert("Minimal kiritish summasi 1000 so'm");
      }
    } else {
      alert("Pul miqdorini kiritng.");
    }
  });
});
