import axios from "axios";
import {BASE_URL, REGISTER_URL, LOGIN_URL, SEARCH} from "./api-urls";

const instance = axios.create({
    baseURL: BASE_URL,
  });

  const api = {
    createUser: async (userData) => {
      try {
        const response = await instance.post(REGISTER_URL, userData);
        return response.data;
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },
    loginUser: async (userData) => {
      try {
        const response = await instance.post(LOGIN_URL, userData);
        return response.data;
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },
    getCountries: async () => {
      try {
        const response = await instance.get(SEARCH+"/countries");
        return response.data;
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },
    getStates: async (countryName) => {
      try {
        const response = await instance.get(SEARCH+`/countries/${countryName}`);
        return response.data;
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },
    getLocalities: async (stateName) => {
      try {
        const response = await instance.get(SEARCH+`/state/${stateName}`);
        return response.data;
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },

  };

  export default api;
  