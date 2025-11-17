Trong mini project này, em sử dụng Burp Suite/ZAP để pentest một website bán quần áo/thời trang (có chức năng tìm kiếm, đăng nhập và bình luận). Mục tiêu là minh hoạ cách phát hiện và khai thác một số lỗ hổng web phổ biến trên một ứng dụng gần với mô hình thương mại điện tử thực tế.

Cụ thể, phần demo tập trung vào ba lỗi chính:

•	Reflected XSS (≈ 7 phút): tìm tham số trên form/từ URL, intercept request, chèn payload JavaScript và chứng minh thực thi bằng hộp thoại alert.

•	Stored XSS (≈ 5 phút): gửi bình luận/bài đánh giá chứa script, được lưu trong hệ thống và tự động chạy khi user khác truy cập trang sản phẩm.

•	SQL Injection (≈ 8 phút):

o	Bypass đăng nhập bằng payload payload JSON được chế tạo đặc biệt:

{ "email": { "$ne": "a" }, "password": { "$ne": "a" }}

o	Ví dụ time-based blind để cho thấy có thể suy luận/trích xuất dữ liệu dù ứng dụng không trả lỗi rõ ràng.

Qua đó, đề tài nhấn mạnh tầm quan trọng của kiểm soát dữ liệu đầu vào, encode nội dung hiển thị và sử dụng truy vấn tham số hoá khi phát triển website thương mại điện tử.


⚙️ 2. Công nghệ sử dụng

🟩 Backend

Ngôn ngữ: Node.js

Môi trường chạy JavaScript phía server, hiệu năng cao, xử lý nhiều request đồng thời.

Framework: Express.js

Cung cấp cấu trúc MVC đơn giản, hỗ trợ định tuyến và middleware mạnh mẽ.

Cơ sở dữ liệu: MongoDB (NoSQL)

🟦 Frontend

Framework: Vue.js

📚 Thư viện chính (ví dụ điển hình):

•	Axios

•	Mongoose

•	bcrypt / JWT

•	Socket.io

•	Bootstrap / TailwindCSS

Ở phần Back-end ta có controllers, models và routes là 3 file chính trong đó:

•	controller xử lý các logic nghiệp vụ

•	models khai báo các schema MongoDB (User, Product, Order,…)

•	routes định nghĩa các API routes (auth, product, order,…)

Ở phần Front-end ta có:

• pages các trang hiển thị (Trang chủ, Giỏ hàng, Đăng nhập,…)

•	components thành phần giao diện tái sử dụng

Hướng dẫn cài đặt & chạy chương trình:

• Yêu cầu môi trường (phiên bản Node 16)

Vào tệp zip sau khi giải nén rồi dùng cmd:

•	cd "D:\Nhom 8_De-tai-16"

•	Rồi chạy:

•	mongorestore --uri="mongodb://localhost:27017" BackupMongo

•	Vì trong BackupMongo có thư mục AndShop, nên Mongo sẽ tạo lại database AndShop với đầy đủ collections.

•	Sau đó mở MongoDB Compass rồi ấn kết nối

Lệnh chạy hệ thống:

•	Back-end: dùng lệnh npm run start # http://127.0.0.1:3000

•	Front-end: dùng lệnh npm run dev

Tài khoản demo để đăng nhập: Username, Password cho từng vai trò (Admin, User,…):

*(User)
•	Username: user4000@gmail.com
•	Password: user4000

*(Admin)
•	Username: user3000@gmail.com
•	Password: user3000

Link Youtube: https://youtu.be/Bd9FWfeiVe8

<img width="1898" height="930" alt="image" src="https://github.com/user-attachments/assets/4f8a2e53-ea54-48ec-8805-45ba9107e126" />
<img width="1892" height="922" alt="image" src="https://github.com/user-attachments/assets/4f74fc5a-960c-4139-9131-a582715fc582" />
<img width="1887" height="926" alt="image" src="https://github.com/user-attachments/assets/a5a933dc-2651-4034-a4a6-71716274ad3b" />
<img width="1903" height="1009" alt="Screenshot 2025-11-09 121235" src="https://github.com/user-attachments/assets/779af890-078c-4661-8f46-9bc206211448" />
<img width="1913" height="1007" alt="Screenshot 2025-11-09 121209" src="https://github.com/user-attachments/assets/1ab0e442-1395-47fe-a181-c8d269fdec71" />

