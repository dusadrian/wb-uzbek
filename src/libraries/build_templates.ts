
// translate pages
import { Eta } from "eta"
import { writeFileSync } from "original-fs";
import * as path from "path";

// Instrument 1
// import * as one_en from "../templates/1_UZ_ChildDI_Children_in_the_child_care_system_en.json";
// import * as one_ru from "../templates/1_UZ_ChildDI_Children_in_the_child_care_system_ru.json";
// import * as one_uz from "../templates/1_UZ_ChildDI_Children_in_the_child_care_system_uz.json";

// Instrument 3
// import * as one_en from "../templates/3_UZ_ChildDI_Staff_Registry_en.json";
// import * as one_ru from "../templates/3_UZ_ChildDI_Staff_Registry_ru.json";
// import * as one_uz from "../templates/3_UZ_ChildDI_Staff_Registry_uz.json";

// Instrument 4
// import * as one_en from "../templates/4_UZ_ChildDI_Material_Resources_en.json";
// import * as one_ru from "../templates/4_UZ_ChildDI_Material_Resources_ru.json";
// import * as one_uz from "../templates/4_UZ_ChildDI_Material_Resources_uz.json";

// Instrument 5
// import * as one_en from "../templates/5_UZ_ChildDI_Youth_Leaving_Care_en.json";
// import * as one_ru from "../templates/5_UZ_ChildDI_Youth_Leaving_Care_ru.json";
// import * as one_uz from "../templates/5_UZ_ChildDI_Youth_Leaving_Care_uz.json";

// Instrument 6
// import * as one_en from "../templates/6_UZ_ChildDI_Entries_Exists_Sheet_en.json";
// import * as one_ru from "../templates/6_UZ_ChildDI_Entries_Exists_Sheet_ru.json";
// import * as one_uz from "../templates/6_UZ_ChildDI_Entries_Exists_Sheet_uz.json";

// Instrument 7
// import * as one_en from "../templates/7_UZ_ChildDI_Family_Type_Homes_en.json";
// import * as one_ru from "../templates/7_UZ_ChildDI_Family_Type_Homes_ru.json";
// import * as one_uz from "../templates/7_UZ_ChildDI_Family_Type_Homes_uz.json";

// Instrument 8
// import * as one_en from "../templates/8_UZ_ChildDI_Patronat_Family_en.json";
// import * as one_ru from "../templates/8_UZ_ChildDI_Patronat_Family_ru.json";
// import * as one_uz from "../templates/8_UZ_ChildDI_Patronat_Family_uz.json";

// Instrument 9
// import * as one_en from "../templates/9_UZ_ChildDI_External_Evaluation_Form_en.json";
// import * as one_ru from "../templates/9_UZ_ChildDI_External_Evaluation_Form_ru.json";
// import * as one_uz from "../templates/9_UZ_ChildDI_External_Evaluation_Form_uz.json";


export default function build_templates() {

    const etaObj = new Eta({ views: path.join(__dirname, "../../src/templates") })

    // Instrument 1
    // writeFileSync(path.join(__dirname, "../../src/templates/1_UZ_ChildDI_Children_in_the_child_care_system_en.html"), etaObj.render("1_UZ_ChildDI_Children_in_the_child_care_system.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/1_UZ_ChildDI_Children_in_the_child_care_system_ru.html"), etaObj.render("1_UZ_ChildDI_Children_in_the_child_care_system.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/1_UZ_ChildDI_Children_in_the_child_care_system_uz.html"), etaObj.render("1_UZ_ChildDI_Children_in_the_child_care_system.eta", one_uz))
    
    // Instrument 3
    // writeFileSync(path.join(__dirname, "../../src/templates/3_UZ_ChildDI_Staff_Registry_en.html"), etaObj.render("3_UZ_ChildDI_Staff_Registry.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/3_UZ_ChildDI_Staff_Registry_ru.html"), etaObj.render("3_UZ_ChildDI_Staff_Registry.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/3_UZ_ChildDI_Staff_Registry_uz.html"), etaObj.render("3_UZ_ChildDI_Staff_Registry.eta", one_uz))

    // Instrument 4
    // writeFileSync(path.join(__dirname, "../../src/templates/4_UZ_ChildDI_Material_Resources_en.html"), etaObj.render("4_UZ_ChildDI_Material_Resources.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/4_UZ_ChildDI_Material_Resources_ru.html"), etaObj.render("4_UZ_ChildDI_Material_Resources.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/4_UZ_ChildDI_Material_Resources_uz.html"), etaObj.render("4_UZ_ChildDI_Material_Resources.eta", one_uz))

    // Instrument 5
    // writeFileSync(path.join(__dirname, "../../src/templates/5_UZ_ChildDI_Youth_Leaving_Care_en.html"), etaObj.render("5_UZ_ChildDI_Youth_Leaving_Care.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/5_UZ_ChildDI_Youth_Leaving_Care_ru.html"), etaObj.render("5_UZ_ChildDI_Youth_Leaving_Care.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/5_UZ_ChildDI_Youth_Leaving_Care_uz.html"), etaObj.render("5_UZ_ChildDI_Youth_Leaving_Care.eta", one_uz))

    // Instrument 6
    // writeFileSync(path.join(__dirname, "../../src/templates/6_UZ_ChildDI_Entries_Exists_Sheet_en.html"), etaObj.render("6_UZ_ChildDI_Entries_Exists_Sheet.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/6_UZ_ChildDI_Entries_Exists_Sheet_ru.html"), etaObj.render("6_UZ_ChildDI_Entries_Exists_Sheet.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/6_UZ_ChildDI_Entries_Exists_Sheet_uz.html"), etaObj.render("6_UZ_ChildDI_Entries_Exists_Sheet.eta", one_uz))

    // Instrument 7
    // writeFileSync(path.join(__dirname, "../../src/templates/7_UZ_ChildDI_Family_Type_Homes_en.html"), etaObj.render("7_UZ_ChildDI_Family_Type_Homes.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/7_UZ_ChildDI_Family_Type_Homes_ru.html"), etaObj.render("7_UZ_ChildDI_Family_Type_Homes.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/7_UZ_ChildDI_Family_Type_Homes_uz.html"), etaObj.render("7_UZ_ChildDI_Family_Type_Homes.eta", one_uz))

    // Instrument 8
    // writeFileSync(path.join(__dirname, "../../src/templates/8_UZ_ChildDI_Patronat_Family_en.html"), etaObj.render("8_UZ_ChildDI_Patronat_Family.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/8_UZ_ChildDI_Patronat_Family_ru.html"), etaObj.render("8_UZ_ChildDI_Patronat_Family.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/8_UZ_ChildDI_Patronat_Family_uz.html"), etaObj.render("8_UZ_ChildDI_Patronat_Family.eta", one_uz))
    
    // Instrument 9
    // writeFileSync(path.join(__dirname, "../../src/templates/9_UZ_ChildDI_External_Evaluation_Form_en.html"), etaObj.render("9_UZ_ChildDI_External_Evaluation_Form.eta", one_en))
    // writeFileSync(path.join(__dirname, "../../src/templates/9_UZ_ChildDI_External_Evaluation_Form_ru.html"), etaObj.render("9_UZ_ChildDI_External_Evaluation_Form.eta", one_ru))
    // writeFileSync(path.join(__dirname, "../../src/templates/9_UZ_ChildDI_External_Evaluation_Form_uz.html"), etaObj.render("9_UZ_ChildDI_External_Evaluation_Form.eta", one_uz))

}
