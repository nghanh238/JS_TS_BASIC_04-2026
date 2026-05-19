// function cleanRawString(rawString){
//     if(!rawString){
//         return 0;
//     }else{
//         let formattedString = rawString.replace("Giá: ", "").replace("VND","").replaceAll(",","").trim();
//         return formattedString;
//     }
// }

// let sp1 = "Giá: 1,500,000 VND";
// let sp2 = "250,000 VND";
// let sp3 = "";

// console.log(cleanRawString(sp1));
// console.log(cleanRawString(sp2));
// console.log(cleanRawString(sp3));

// function thongBaoKetQua(tenBaiTest, ketQua) {
//   console.log(`${tenBaiTest} - ${ketQua}`);
// }

// function chayTest(tenTest, thongBaoKetQua) {
//   console.log(`đang chạy ${tenTest}`);

//   //Giả lập: pass nếu test chứa logi fail nếu ko

//   const pass = tenTest.includes("login");
//   if (pass) {
//     thongBaoKetQua(tenTest, "Chạy passed");
//     // console.log(`${tenTest} - ${pass}`);
//   } else {
//     thongBaoKetQua(tenTest, "chạy fail");
//   }
//   // callBack(tenTest, pass ? "Chạy passed" : "chạy fail");
// }
// chayTest("login thành công", thongBaoKetQua);

// chayTest("đăng kí thiếu email", thongBaoKetQua);

const sanPhamUI = [
  { ten: "Chuột", gia: 150000, tonKho: true },
  { ten: "Bàn phím", gia: 500000, tonKho: false },
  { ten: "Màn hình", gia: 3000000, tonKho: true },
  { ten: "Tai nghe", gia: 200000, tonKho: true },
];
const mangSanPham = [];
for(let sanPham of sanPhamUI){
    if(sanPham.tonKho === true){
        mangSanPham.push(sanPham);
    }
}
console.log(mangSanPham);

const users = [
  { id: 1, ten: "neko", role: "admin" },
  { id: 2, ten: "mew", role: "tester" },
  { id: 3, ten: "Cat", role: "tester" },
];

const phanTu = users.find((user) => 
    user.role === "admin"
)
console.log(phanTu);

const testRun = [
  [
    "  login smoke  ",
    {browser: " Chromium ", env: "  staging  "},
    "  PASS  "
  ],
   [
    "  checkout payment  ",
    {browser: " Firefox ", env: "  test  "},
    "  PASS  "
  ],
   [
    "  search product  ",
    {browser: " Webkit ", env: "  product  "},
    "  FAIL  "
  ],
     [
    "  ",
    {browser: " Webkit ", env: "  product  "},
    "  FAIL  "
  ],
];
function taoBaoCaoTest(testRun){
  let invalid = 0;
  const passed =[];
  const failed = [];
  for(let item of testRun){
    const [rawTestname, {browser, env}, rawResult] = item;
  
  const testName = rawTestname.trim();
  const browserName = browser.trim();
  const realEnv = env.trim().toUpperCase();
  const result = rawResult.trim();

  if(testName === ""){
    invalid++;
    continue;
  }
  if(result !== "PASS" && result !== "FAIL"){
    invalid++;
    continue;
  }
  const reportItem = `${testName} - ${browserName} - ${realEnv}`
  if(result === "PASS"){
    passed.push(reportItem);
  }else{
    failed.push(reportItem);
  }
 }
 return{
    totalValid: passed.length + failed.length,
    totalInvalid: invalid,
    passed: passed,
    failed: failed
  }
}
console.log(taoBaoCaoTest(testRun));


