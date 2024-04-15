import { reactive } from "vue";

export const api = {
    baseUrl: 'http://127.0.0.1:8000/api/',
}

export const store = reactive({
    projects: [],
});