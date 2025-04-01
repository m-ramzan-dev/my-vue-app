import { ref } from "vue"

const init = <T>(key:string,defaults:T)=>{
    const stored  = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaults
}
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

const notifications = ref<NotificationSettings>(init('notifications',{
    email:false,
    sms:false
}));
interface PrivacySettings{
    visibility:Visibility,
    searchEngineIndesing: boolean
}
type Visibility = "public"|"private"
const privacy = ref<PrivacySettings>(init('privacy',{
    visibility:"public",
    searchEngineIndesing:false
}));

const general = ref<GeneralSettings>(init('general',{
    name:"",
    email:"",
    gender:"Male",
    country:"Pakistan",
    about:""
}));
export function useSettings(){
    return {
        general,
        notifications,
        privacy
    }
};