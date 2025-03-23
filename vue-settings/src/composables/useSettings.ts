import { ref } from "vue"

interface GeneralSettings{
    name:string,
    email:string,
    gender:string,
    country:string,
    about:string
}
const general = ref<GeneralSettings>({
    name:"",
    email:"",
    gender:"Male",
    country:"Pakistan",
    about:""
});
export default general;