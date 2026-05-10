//Bai 1
console.log("Bai 1");


let apiResponse = {
    userId: 101,
    username: "neko_tester",
    email: null,
    isActive: "true",  // Bug: phải là boolean, không phải string
    phone: "",
    role: "admin"
};

let soLoi = 0;
for(let key in apiResponse){
    if(!apiResponse[key]){
        console.log(`Field ${key} bị lỗi`);
        soLoi++;
    }
    if(key === "isActive" && typeof apiResponse[key] !== "boolean"){
        console.log(`Field ${key} bị sai kieu du liệu`);
        soLoi++
    }
}
console.log(`Có tổng là ${soLoi} lỗi`);

//Bai 2
console.log("-------------------");
console.log("Bai 2");



let testUrls = [
    { url: "/api/users", status: 200 },
    { url: "", status: null },
    { url: "/api/products", status: 200 },
    { url: "/api/orders", status: 500 },
    { url: "/api/reviews", status: 200 }
];
let testedURL = 0;
for(let testURl of testUrls){
    if(testURl.url === ""){
        console.log("URL bị rỗng");
        continue;
    }
    if(testURl.status === 500){
        console.log(`Lỗi nghiêm trọng!!! - URL: ${testURl.url}`);
        testedURL++;
        break;
    }
    console.log(`Pass - URL: ${testURl.url}`);
    testedURL++;
}
console.log(`Có tổng là ${testedURL} url đã được test.`);
