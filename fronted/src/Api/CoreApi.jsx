import { message } from "antd";
import API from "./Api"; // import Api.jsx

export const UserDataGet = async () => {
  const response = await API.get("feedback/", {
    headers: { "Content-Type": "application/json" }
  }).catch(() => message.error("Fetching data failed"));

  return response ? response.data : {};
};

export const UserDataPost = async (values) => {
  const response = await API.post(
    "feedback/",
    values,
    { headers: { "Content-Type": "application/json" } }
  ).catch(() => message.error("Failed to send message"));

  return response ? response.data : {};
};

export const UserDataUpdate = async (id, value) => {
  const response = await API.put(
    `feedback/${id}/`,
    value,
    { headers: { "Content-Type": "application/json" } }
  ).catch(() => message.error("Update failed"));

  return response ? response.data : {};
};

export const UserDataRemove = async (id) => {
  const response = await API.delete(`feedback/${id}/`, {
    headers: { "Content-Type": "application/json" }
  }).catch(() => message.error("Delete failed"));

  return response ? response.data : {};
};


// --------------------------------------- Email Suscribe --------------------------------------- 


// 🔵 GET — All email subscribers
export const EmailDataGet = async () => {
  const response = await API.get(
    "email_suscribe/",
    {
      headers: { "Content-Type": "application/json" }
    }
  ).catch(() => message.error("Get data failed"));

  return response ? response.data : {};
};


// 🔵 POST — Add new email subscriber
export const EmailDataPost = async (values) => {
  const response = await API.post(
    "email_suscribe/",
    values,
    {
      headers: { "Content-Type": "application/json" }
    }
  ).catch(() => message.error("Email subscription failed"));

  return response ? response.data : {};
};


// 🔵 UPDATE — Update email subscriber
export const EmailDataUpdate = async (id, value) => {
  const response = await API.put(
    `email_suscribe/${id}/`,
    value,
    {
      headers: { "Content-Type": "application/json" }
    }
  ).catch(() => message.error("Update failed"));

  return response ? response.data : {};
};


// 🔵 DELETE — Remove email subscriber
export const EmailDataRemove = async (id) => {
  const response = await API.delete(
    `email_suscribe/${id}/`,
    {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken}`,
      }
    }
  ).catch(() => message.error("Delete failed"));

  return response ? response.data : {};
};