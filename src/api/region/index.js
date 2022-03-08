import axios from 'axios';
import addAxiosHeader from '../../utils/addAxiosHeader';

const url = 'https://localhost:44349/api/';
export const regionApi = {
    getCategory: async (config) => {
        return await axios.get(url + 'Regions',config);
    },
    createCategory: async (data,config) => {
        return await axios.post(url + 'Regions', data,config);
    },
    deleteCategory: async (id,config) => {
        return await axios.delete(url + `Regions/${id}`,config);
    },
    editCategory: async (data,config) => {
        return await axios.put(url + `Regions/${data.id}`, data,config);
    },
    getCategoryById: async (id,config)=>{
        return await  axios.get(url+`Regions/${id}`,config);
    },

};
