import { store } from "../store";
import { setLoading } from "../store/appSlice";

export const callApi = (
  method = "GET",
  endpoint: any,
  data: any = {},
  file = false,
  autoLogin = false
) => {
  method = method ? method : "GET";
  let fullUrl = import.meta.env.VITE_API_BASE_URL + endpoint;
  console.log("********* FULL URL ************\n" + fullUrl);
  let options: any = {
    headers: {
      "Content-Type": "application/json",
      "X-My-Custom-Header": "value-v",
    },
    crossDomain: true,
    method: method,
    credentials: "include",
  };
  if (["POST", "PUT", "DELETE"].indexOf(method) > -1)
    options.body = JSON.stringify(data);

  if (file) {
    const formData = new FormData();
    formData.append("media", data.file, data.file.name);
    options = {
      method: "POST",
      body: formData,
    };
  }
  console.log(options);

  return fetch(fullUrl, options)
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json();
        const error = Object.assign({}, errorData, {
          status: response.status,
          statusText: response.statusText,
          message: errorData.message,
        });
        return Promise.reject(error);
      }
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") > -1) {
        return response
          .json()
          .then((json) => {
            if ([200, 403].indexOf(response.status) === -1)
              throw new Error(
                `Error ${response.status}: ${response.statusText}`
              );
            if ([304, 403].indexOf(response.status) > -1)
              throw new Error(
                `Error ${response.status}: ${response.statusText}`
              );
            if (Array.isArray(json)) return { res: [...json] };
            else return { res: { ...json } };
          })
          .catch(() => {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          });
      } else {
        return { res: {} };
      }
    })
    .catch((error) => {
      console.log(error);
      if (error.status === 401 && !autoLogin) {
        return (window.location.href = `/login`);
      } else {
        return { error };
      }
    });
};

export const getAvatarTitle = (name: any) => {
  name = name.trim();
  name = name.split(" ");
  let title = name[0].slice(0, 1).toUpperCase();
  if (name.length > 1) {
    let count = 0;
    for (let i = 1; i < name.length; i++) {
      if (name[i] && !count) {
        count++;
        title += name[i].slice(0, 1).toUpperCase();
      }
    }
  } else {
    title += name[0].slice(1, 2).toUpperCase();
  }
  return title;
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const SetLoadingStatus = (loading: boolean) => {
  store.dispatch(setLoading(loading));
};
