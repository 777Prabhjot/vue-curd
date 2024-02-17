import axios from "axios";

export const getVlogs = async () => {
  const data = await axios.get("http://127.0.0.1:8000/api/getVlogs");
  return data;
};

export const addVlogs = async (payload) => {
  const data = await axios.post("http://127.0.0.1:8000/api/create", payload);
  return data;
};

export const deleteVlog = async (id) => {
  const data = await axios.delete(`http://127.0.0.1:8000/api/delete/${id}`);
  return data;
};
