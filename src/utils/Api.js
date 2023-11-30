import routes from './routes';
import Localstorage from './storage/Localstorage';
import LocalStorageUtil from './storage/Localstorage';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export class ApiException extends Error {
  constructor(message) {
    super(message);
  }
  jwtExeception() {
    // notification.error({
    //       message : "Session Expired" ,
    //       maxCount : 20 ,
    //       placement : "top"
    //   })
    Cookies.remove('JWT_TOKEN');
    Cookies.remove('USER_ID');
  }

  failfetch() {
    // notification.error({
    //     message : "Failed to handle Request !",
    //     maxCount : 20 ,
    //     placement : "top"
    // })
  }
}

export const apiGet = (url, baseURL) => {
  if (url) {
    const res = new Promise((resolve, reject) => {
      fetch(`${baseURL}${url}`, {
        method: 'GET',
        headers: {},
        credentials: 'include',
      })
        .then(async (response) => {
          console.log(response);
          if (response.status == 401) {
            console.log("Unauthorized")
            Cookies.remove('JWT_TOKEN');
          }
          let res = await response.json();
          res.status = response.status;
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return res;
  }
};

export const apiPost = async (url, baseURL, values) => {
  console.log(values);
  if (url) {
    return new Promise((resolve, reject) => {
      fetch(`${baseURL}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        credentials: 'include',
        body: JSON.stringify(values),
      })
        .then(async (response) => {
          console.log(response);
          if (response.status == 401) {
            throw new ApiException('JWT error').jwtExeception();
          }
          let res = await response.json();
          res.status = response.status;
          resolve(res);
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
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(values),
      })
        .then(async (response) => {
          console.log(response);
          if (response.status == 401) {
            throw new ApiException('JWT error').jwtExeception();
          }
          let res = await response.json();
          res.status = response.status;
          resolve(res);
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
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
        .then(async (response) => {
          console.log(response);
          if (response.status == 401) {
            throw new ApiException('JWT error').jwtExeception();
          }
          let res = await response.json();
          res.status = response.status;
          resolve(res);
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
        method: 'POST',
        headers: {},
        body: values,
        credentials: 'include',
      })
        .then(async (response) => {
          console.log(response);
          if (response.status == 401) {
            throw new ApiException('JWT error').jwtExeception();
          }
          let res = await response.json();
          res.status = response.status;
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
