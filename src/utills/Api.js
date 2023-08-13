import Localstorage from "./storage/Localstorage";
import LocalStorageUtil from "./storage/Localstorage";
import { notification } from "antd";

export class ApiException extends Error {
  constructor(message) {
    super(message);
  }
  jwtExeception() {
    notification.error({
      message: "Session Expired",
      maxCount: 20,
      placement: "top",
    });
    Localstorage.clear();
    window.location.href = "/login";
  }

  failfetch() {
    notification.error({
      message: "Failed to handle Request !",
      maxCount: 20,
      placement: "top",
    });
  }
}

export const apiGet = (url, baseURL) => {
  if (url) {
    const res = new Promise((resolve, reject) => {
      fetch(`${baseURL}${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: LocalStorageUtil.JWT_TOKEN.get(),
          userid: LocalStorageUtil.USER_ID.get(),
        },
      })
        .then((response) => {
          if (response.status == 401) {
            throw new ApiException("JWT error").jwtExeception();
          }
          if (!response.ok) {
            throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
          }
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
    return res;
  }
};

export const apiPost = async (url, baseURL, values) => {
  if (url) {
    return new Promise((resolve, reject) => {
      fetch(`${baseURL}${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: LocalStorageUtil.JWT_TOKEN.get(),
          userid: LocalStorageUtil.USER_ID.get(),
        },
        body: JSON.stringify(values),
      })
        .then(async (response) => {
          if (!response.ok) {
            response = await response.json();
            notification.error({
              message: response.message,
              maxCount: 3,
            });
            reject(response);
            // throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
          } else if (response.status == 401) {
            throw new ApiException("JWT error").jwtExeception();
          } else {
            resolve(response.json());
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

export const apiPut = (url, baseURL, values) => {
  if (url) {
    return new Promise((resolve, reject) => {
      fetch(`${baseURL}${url}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: LocalStorageUtil.JWT_TOKEN.get(),
          userid: LocalStorageUtil.USER_ID.get(),
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (!response.ok) {
            throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
          }
          if (response.status == 401) {
            throw new ApiException("JWT error").jwtExeception();
          }
          // resolve(response.json());
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

export const apiDelete = (url, baseURL) => {
  if (url) {
    return new Promise((resolve, reject) => {
      fetch(`${baseURL}${url}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: LocalStorageUtil.JWT_TOKEN.get(),
          userid: LocalStorageUtil.USER_ID.get(),
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
          }
          if (response.status == 401) {
            throw new ApiException("JWT error").jwtExeception();
          }
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

export const apiPostImage = async (url, baseURL, values) => {
  if (url) {
    return new Promise((resolve, reject) => {
      fetch(`${baseURL}${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          token: LocalStorageUtil.JWT_TOKEN.get(),
          userid: LocalStorageUtil.USER_ID.get(),
        },
        body: values,
      })
        .then((response) => {
          if (!response.ok) {
            throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
          }

          if (response.status == 401) {
            throw new ApiException("JWT error").jwtExeception();
          }
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
