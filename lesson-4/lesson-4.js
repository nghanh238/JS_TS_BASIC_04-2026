let soLuongDon = 5;
for(let i = 0; i < soLuongDon; i++){
    let maDonHang = `ORDER-${i}`
    console.log(maDonHang);
    
}
let danhSachUrl = ["/login", "/dashboard", "/profile"];
for(let url of danhSachUrl){
    console.log(`Dang kiem tra ${url}`);
    
}