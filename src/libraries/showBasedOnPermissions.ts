import { ipcRenderer } from "electron";
import { User } from "../interfaces/database";

export const showByPermissions = () => {
    // show based on permissions
    const appSession = JSON.parse(sessionStorage.getItem('appSession'));
    if (appSession) {
        showBasedOnPermissions(appSession.userData);
    } else {
        ipcRenderer.on('appSession', (event, arg) => {
            showBasedOnPermissions(arg.userData);
        });
    }
}



const showBasedOnPermissions = (userData: User) => {
    // instrument 1
    const add_child_cpis = document.getElementById('add_child_cpis');
    if (add_child_cpis && userData.role_code == '2' && (userData.service_type_code == '1' || userData.service_type_code == '2' || userData.service_type_code == '3' || userData.service_type_code == '7' || userData.service_type_code == '9')) {
        add_child_cpis.classList.remove('hidden');
        add_child_cpis.classList.add('flex');
    }
    // instrument 2
    const add_child_cibs = document.getElementById('add_child_cibs');    
    if (add_child_cibs && userData.role_code == '2' && (userData.service_type_code == '4' || userData.service_type_code == '5')) {
        add_child_cibs.classList.remove('hidden');
        add_child_cibs.classList.add('flex');
    }
    // instrument 3
    const add_staff = document.getElementById('add_staff');    
    if (add_staff && userData.role_code == '3' && (userData.service_type_code == '1' || userData.service_type_code == '2' || userData.service_type_code == '3' || userData.service_type_code == '7' || userData.service_type_code == '4' || userData.service_type_code == '5')) {
        add_staff.classList.remove('hidden');
        add_staff.classList.add('flex');
    }
    // instrument 5
    const add_young_people = document.getElementById('add_young_people');    
    if (add_young_people && userData.role_code == '2' && userData.service_type_code == '9') {
        add_young_people.classList.remove('hidden');
        add_young_people.classList.add('flex');
    }
    // instrument 5a
    const add_young_people_a = document.getElementById('add_young_people_a');    
    if (add_young_people_a && userData.role_code == '2' && (userData.service_type_code == '1' || userData.service_type_code == '2' || userData.service_type_code == '3' || userData.service_type_code == '7' || userData.service_type_code == '4' || userData.service_type_code == '5' || userData.service_type_code == '9')) {
        add_young_people_a.classList.remove('hidden');
        add_young_people_a.classList.add('flex');
    }
    // instrument 7
    const add_family_type = document.getElementById('add_family_type');    
    if (add_family_type && userData.role_code == '2' && userData.service_type_code == '9') {
        add_family_type.classList.remove('hidden');
        add_family_type.classList.add('flex');
    }
    // instrument 8
    const add_patronat_family = document.getElementById('add_patronat_family');    
    if (add_patronat_family && userData.role_code == '2' && userData.service_type_code == '9') {
        add_patronat_family.classList.remove('hidden');
        add_patronat_family.classList.add('flex');
    }
}
