
const manifest = {
    containerId: 5643,
    destination: "Denver",
    weight: 54,
    unit: "lb",
    hazmat: false
}


function normalizeUnits (manifest){
    const newManifest = {};
    newManifest.containerId = manifest.containerId;
    newManifest.destination = manifest.destination;
    newManifest.weight = manifest.weight;
    newManifest.unit = manifest.unit;
    newManifest.hazmat = manifest.hazmat;
    
    if (manifest.unit === "lb") {
        newManifest.unit = "kg";
        newManifest.weight = newManifest.weight * 0.45;
    }
    return newManifest;
}

function validateManifest (manifest){
     const errors = {};

     if (!Object.hasOwn(manifest, "containerId")){
        errors.containerId = "Missing";
     }
     else if ((typeof manifest.containerId !== "number") || (manifest.containerId <= 0) || (!Number.isInteger(manifest.containerId))){
        errors.containerId = "Invalid";
     }
    
    if (!Object.hasOwn(manifest, "destination")){
        errors.destination = "Missing";
    }
    else if ((typeof manifest.destination !== "string") || (manifest.destination.trim() === "")){
        errors.destination = "Invalid";
    }

    if (!Object.hasOwn(manifest, "weight")){
        errors.weight = "Missing";
    }
    else if((typeof manifest.weight !== "number") || (manifest.weight <= 0) || Number.isNaN(manifest.weight)) {
        errors.weight = "Invalid";
    }

    if (!Object.hasOwn(manifest, "unit")){
        errors.unit = "Missing";
    }

    else if ((manifest.unit !== "lb") && (manifest.unit !== "kg")){
        errors.unit = "Invalid";
    }

    if(!Object.hasOwn(manifest, "hazmat")) {
        errors.hazmat = "Missing";
    }

    else if (typeof manifest.hazmat !== "boolean") {
        errors.hazmat = "Invalid";
    }
return errors;
}

function processManifest(manifest){

    const errors = validateManifest(manifest);
    if (Object.keys(errors).length === 0) {
        console.log(`Validation success: ${manifest.containerId}`);
        const normalizedManifest = normalizeUnits(manifest);
        console.log(`Total weight: ${normalizedManifest.weight} kg`);
    }

    else {
    
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(errors);
    }

}





















//console.log(normalizeUnits(manifest));
//console.log(manifest);