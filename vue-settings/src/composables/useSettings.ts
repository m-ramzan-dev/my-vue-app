import { ref } from "vue"

interface GeneralSettings{
    name:string,
    email:string,
    gender:string,
    country:string,
    about:string
}

interface NotificationSettings{
    email:boolean,
    sms:boolean
}

const notifications = ref<NotificationSettings>({
    email:false,
    sms:false
});
interface PrivacySettings{
    visibility:Visibility,
    searchEngineIndesing: boolean
}
type Visibility = "public"|"private"
const privacy = ref<PrivacySettings>({
    visibility:"public",
    searchEngineIndesing:false
});
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
        general,
        notifications,
        privacy
    }
};