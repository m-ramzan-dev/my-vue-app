import { ref, watch } from "vue"


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
interface PrivacySettings{
    visibility:Visibility,
    searchEngineIndesing: boolean
}
interface SettingsMap {
    general: GeneralSettings,
    notifications: NotificationSettings,
    privacy: PrivacySettings
}
type SettingsKey = keyof SettingsMap;
type Visibility = "public"|"private";

const init = <T extends SettingsKey>(key:T,defaults:SettingsMap[T])=>{
    const stored  = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaults
}

const watcher = <T extends SettingsKey>(key:T)=>(value:SettingsMap[T])=>{
    localStorage.setItem(key,JSON.stringify(value))
}
const notifications = ref<NotificationSettings>(init('notifications',{
    email:false,
    sms:false
}));

watch(notifications,watcher('notifications'),{deep:true})

const privacy = ref<PrivacySettings>(init('privacy',{
    visibility:"public",
    searchEngineIndesing:false
}));

watch(privacy,watcher('privacy'),{deep:true})
 
const general = ref<GeneralSettings>(init('general',{
    name:"",
    email:"",
    gender:"Male",
    country:"Pakistan",
    about:""
}));

watch(general,watcher('general'),{deep:true})

export function useSettings(){
    return {
        general,
        notifications,
        privacy
    }
};