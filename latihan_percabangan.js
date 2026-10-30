console.log("SOAL PERCABANGAN 1")

let nilai = 80;
if (nilai >= 75) {
    console.log("lulus");
} else {
    console.log("Remedial");
}

console.log("SOAL PERCABANGAN 2")

let role = "U" ;
switch (role) {
    case "A":
    console.log("Admin");
    break;

    case "U":
    console.log("User");
    break;
    
    default:
        console.log("Guest");
        break;
}