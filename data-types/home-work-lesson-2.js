//bai1
// const originalPrice = " 1.000.000 đ ";
// const originalPriceAfter = Number(originalPrice.replaceAll(".","").replace("đ","").trim());
// const expectedPrice = (originalPriceAfter * (100 - 20)) / 100;
// console.log(`Gia mong doi la: ${expectedPrice}`);

//bai2
let rawTenSanPham = "   macbook pro m3   ";
let rawGiaGoc = "Price: 30,000,000 vnđ";
let rawSoLuong = "Sl: 2 máy";
let rawMaGiamGia = "DISCOUNT CODE: 10% OFF";

let giaGocStringStart = rawGiaGoc.indexOf(":");
let giaGocStringEnd = rawGiaGoc.indexOf("v");
let giaGocFinal = rawGiaGoc.slice(giaGocStringStart + 2,giaGocStringEnd -1 ).replaceAll(",","");

let soLuongStringStart = rawSoLuong.indexOf(":");
let soLuongStringEnd = rawSoLuong.indexOf("m");
let soLuongFinal= rawSoLuong.slice(soLuongStringStart + 2,soLuongStringEnd -1);

let tongTien = giaGocFinal * soLuongFinal;

let maGiamGiaStringStart = rawMaGiamGia.indexOf(":");
let maGiamGiaStringEnd = rawMaGiamGia.indexOf("OFF");
let maGiamGiaFinal = rawMaGiamGia.slice(maGiamGiaStringStart + 2,maGiamGiaStringEnd -1 );

let thanhTien = tongTien - ((tongTien * 10) / 100);

console.log("HOA DON THANH TOAN - ID: #0002");
console.log(`San pham: ${rawTenSanPham.trim().toUpperCase()}`);
console.log(`Don gia: ${giaGocFinal}`);
console.log(`So luong: ${soLuongFinal}`);
console.log(`Tong tien (Goc): ${tongTien}`);
console.log(`Giam gia: ${maGiamGiaFinal}`);
console.log(`THANH TIEN: ${thanhTien}`);








