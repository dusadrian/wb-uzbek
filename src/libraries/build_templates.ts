
// translate pages
import { Eta } from "eta"
import { writeFileSync } from "original-fs";
import * as path from "path";

// import * as one_en from "../templates/1_UZ_ChildDI_Children_in_the_child_care_system_en.json";
// import * as one_ru from "../templates/1_UZ_ChildDI_Children_in_the_child_care_system_ru.json";
// import * as one_uz from "../templates/1_UZ_ChildDI_Children_in_the_child_care_system_uz.json";

// import * as one_en from "../templates/3_UZ_ChildDI_Staff_Registry_en.json";
// import * as one_ru from "../templates/3_UZ_ChildDI_Staff_Registry_ru.json";
// import * as one_uz from "../templates/3_UZ_ChildDI_Staff_Registry_uz.json";

// import * as one_en from "../templates/4_UZ_ChildDI_Material_Resources_en.json";
// import * as one_ru from "../templates/4_UZ_ChildDI_Material_Resources_ru.json";
// import * as one_uz from "../templates/4_UZ_ChildDI_Material_Resources_uz.json";

// import * as one_en from "../templates/6_UZ_ChildDI_Entries_Exists_Sheet_en.json";
// import * as one_ru from "../templates/6_UZ_ChildDI_Entries_Exists_Sheet_ru.json";
// import * as one_uz from "../templates/6_UZ_ChildDI_Entries_Exists_Sheet_uz.json";

export default function build_templates() {

    const etaObj = new Eta({ views: path.join(__dirname, "../../src/templates") })
    
    // writeFileSync(path.join(__dirname, "../../src/templates/3_UZ_ChildDI_Staff_Registry_en.html"), etaObj.render("3_UZ_ChildDI_Staff_Registry.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/3_UZ_ChildDI_Staff_Registry_ru.html"), etaObj.render("3_UZ_ChildDI_Staff_Registry.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/3_UZ_ChildDI_Staff_Registry_uz.html"), etaObj.render("3_UZ_ChildDI_Staff_Registry.eta", one_uz))

    // writeFileSync(path.join(__dirname, "../../src/templates/4_UZ_ChildDI_Material_Resources_en.html"), etaObj.render("4_UZ_ChildDI_Material_Resources.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/4_UZ_ChildDI_Material_Resources_ru.html"), etaObj.render("4_UZ_ChildDI_Material_Resources.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/4_UZ_ChildDI_Material_Resources_uz.html"), etaObj.render("4_UZ_ChildDI_Material_Resources.eta", one_uz))

    
    // writeFileSync(path.join(__dirname, "../../src/templates/1_UZ_ChildDI_Children_in_the_child_care_system_en.html"), etaObj.render("1_UZ_ChildDI_Children_in_the_child_care_system.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/1_UZ_ChildDI_Children_in_the_child_care_system_ru.html"), etaObj.render("1_UZ_ChildDI_Children_in_the_child_care_system.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/1_UZ_ChildDI_Children_in_the_child_care_system_uz.html"), etaObj.render("1_UZ_ChildDI_Children_in_the_child_care_system.eta", one_uz))

    // import * as six_en from "./templates/6_UZ_ChildDI_Entries_Exists_Sheet_en.json";
    // import * as six_ru from "./templates/6_UZ_ChildDI_Entries_Exists_Sheet_ru.json";
    // import * as six_uz from "./templates/6_UZ_ChildDI_Entries_Exists_Sheet_uz.json";
    // writeFileSync(path.join(__dirname, "../src/templates/6_UZ_ChildDI_Entries_Exists_Sheet_en.html"), etaObj.render("6_UZ_ChildDI_Entries_Exists_Sheet.eta", six_en))
    // writeFileSync(path.join(__dirname, "../src/templates/6_UZ_ChildDI_Entries_Exists_Sheet_ru.html"), etaObj.render("6_UZ_ChildDI_Entries_Exists_Sheet.eta", six_ru))
    // writeFileSync(path.join(__dirname, "../src/templates/6_UZ_ChildDI_Entries_Exists_Sheet_uz.html"), etaObj.render("6_UZ_ChildDI_Entries_Exists_Sheet.eta", six_uz))

}
