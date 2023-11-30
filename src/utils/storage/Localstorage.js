import Cookies from 'js-cookie';

function getValuefromCookies(key) {
  return Cookies.get(key);
}

function setValueinCookies(key, data) {
  Cookies.set(key, data, { expires: 7 }); // Set a cookie that expires in 7 days, you can adjust this as needed
}

function removeValueFromCookies(key) {
  Cookies.remove(key);
}

const cookieManager = {
  clear: function () {
    // Clear all cookies
    const cookies = Object.keys(Cookies.get());
    cookies.forEach((cookie) => Cookies.remove(cookie));
  },
  JWT_TOKEN: {
    key: "JWT_TOKEN",
    get: function () {
      return getValuefromCookies(this.key);
    },
    set: function (data) {
      return setValueinCookies(this.key, data);
    },
    remove: function () {
      return removeValueFromCookies(this.key);
    },
  },
  USER_ID: {
    key: "USER_ID",
    get: function () {
      return getValuefromCookies(this.key);
    },
    set: function (data) {
      return setValueinCookies(this.key, data);
    },
    remove: function () {
      return removeValueFromCookies(this.key);
    },
  },
};

export default cookieManager;