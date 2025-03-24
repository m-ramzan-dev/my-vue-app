import { ref } from "vue"

interface GeneralSettings{
    name:string,
    email:string,
    gender:string,
    country:string,
    about:string
}
const general = ref<GeneralSettings>((()=>{
    const stored  = localStorage.getItem('general');
    return stored !== null ? JSON.parse(stored) : {
        name:"",
        email:"",
        gender:"Male",
        country:"Pakistan",
        about:""
    }
})());
export function useSettings(){
    return {
        general
    }
};