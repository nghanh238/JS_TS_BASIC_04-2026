let rawProjectName = "   Neko CRM   ";
let rawEnvName = "   ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = "   ";
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"

//Dùng .trim() để làm sạch rawProjectName và rawEnvName.
//Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.
//Ép rawPassRate sang Number.
//Ép rawHasReport sang Boolean đúng cách.
let projectName = rawProjectName.trim();
let envName = rawEnvName.trim() === "" ? "Development" : rawEnvName;
let passRate = Number(rawPassRate);
let hasReport = Boolean(rawHasReport);

// Tạo hasCriticalBug theo quy tắc:
// nếu message là null hoặc undefined -> false
// nếu sau trim() là rỗng -> false
// ngược lại -> true
let hasCriticalBug;
let criticalBugMessage;
if(rawCriticalMessage === null || rawCriticalMessage === undefined){
    hasCriticalBug = false;
    criticalBugMessage = "Không có bug nghiêm trọng"
}else if(rawCriticalMessage.trim() === ""){
    hasCriticalBug = false;
    criticalBugMessage = "Không có bug nghiêm trọng"
}else{
    hasCriticalBug = true;
    criticalBugMessage = "Có bug nghiêm trọng"
}

// Dùng if / else if để xếp hạng:
// >= 95 -> "EXCELLENT"
// >= 80 -> "GOOD"
// >= 60 -> "NEEDS IMPROVEMENT"
// còn lại -> "CRITICAL"
let quality;
if(passRate >= 95){
    quality = "EXELENT";
}else if(passRate >= 80){
    quality = "GOOD";
}else if(passRate >= 60){
    quality = "NEED IMPROVEMENT";
}else{
    quality = "CRITICAL";
}

// Dùng switch/case để gán tên engine cho browserUsed:
// chrome -> "Chromium"
// edge -> "Chromium"
// firefox -> "Gecko"
// safari -> "WebKit"
// Nếu không khớp -> "Unknown"
let engine;
switch (browserUsed){
    case "chrome":
        engine = "Chromium";
    break;
    case "edge":
        engine = "Chromium";
    break;
    case "firefox":
        engine = "Gecko";
    break;
    case "safari":
        engine = "WebKit";
    break;
    default:
        engine = "Unknown";
}

// Dùng toán tử 3 ngôi để tạo message cho report:
// nếu hasReport là true -> "Có report"
// ngược lại -> "Chưa có report"
let messageForReport = hasReport === true ? "Có report" : "Chưa có report";

// Tạo isReadyToRelease theo quy tắc:
// nếu pass rate dưới 80 -> false
// nếu có critical bug -> false
// nếu chưa có report -> false
// còn lại -> true
// In báo cáo ra console.
let isReadyToRelease;
let messageReadyToRelease;
if(passRate < 80){
    isReadyToRelease = false;
    messageReadyToRelease = "NO"
}else if(hasCriticalBug === true){
    isReadyToRelease = false;
    messageReadyToRelease = "NO"
}else if(hasReport === false){
    isReadyToRelease = false;
    messageReadyToRelease = "NO"
}else{
    isReadyToRelease = true;
    messageReadyToRelease = "YES"
    console.log(`Có report hay không: ${messageForReport}`);
}

console.log(`Project: ${projectName}`);
console.log(`Environment: ${envName}`);
console.log(`Browser: ${browserUsed}`);
console.log(`Engine: ${engine}`);
console.log(`Pass Rate: ${passRate.toFixed(2)}%`);
console.log(`Grade: ${quality}`);
console.log(`Report: ${messageForReport}`);
console.log(`Critical Bug: ${criticalBugMessage}`);
console.log(`Ready: ${messageReadyToRelease}`);






