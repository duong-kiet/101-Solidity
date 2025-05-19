# 🚀 Conventional Commit Guidelines

Tuân theo chuẩn [Conventional Commits](https://www.conventionalcommits.org/) giúp commit dễ hiểu, dễ phân loại, hỗ trợ changelog, versioning, CI/CD.

---

## 🎯 Cấu trúc chuẩn của commit message:

```
<type>(<scope>): <description>

<body> (tùy chọn)

<footer> (tùy chọn, ví dụ: BREAKING CHANGE, issue reference)
```

---

## 🔖 Một số loại commit phổ biến:

| Loại `type` | Ý nghĩa |
|-------------|--------|
| `feat`      | Thêm tính năng mới |
| `fix`       | Sửa bug |
| `chore`     | Thay đổi không ảnh hưởng đến logic (build, config, script,...) |
| `docs`      | Thay đổi tài liệu |
| `style`     | Format, dấu cách, dấu chấm phẩy,... (không thay đổi logic) |
| `refactor`  | Refactor code (không thêm tính năng mới hay sửa bug) |
| `test`      | Thêm/sửa test |
| `perf`      | Cải thiện hiệu năng |
| `ci`        | Cấu hình hoặc thay đổi CI/CD pipeline |
| `build`     | Thay đổi liên quan đến hệ thống build hoặc phụ thuộc |

---

## 🧪 Ví dụ commit cụ thể:

```bash
feat(auth): thêm chức năng đăng nhập bằng Google

fix(cart): sửa lỗi không cập nhật số lượng sản phẩm

docs(readme): cập nhật hướng dẫn cài đặt

refactor(user): tách service xử lý user riêng

style(header): format lại code cho dễ đọc

chore: nâng cấp phiên bản eslint

test(product): thêm unit test cho hàm tính giá

ci(github-actions): thêm workflow chạy test tự động
```

---

## 💥 Ghi chú về Breaking Change:

Nếu bạn có thay đổi phá vỡ tương thích (breaking change), hãy thêm trong phần `footer`:

```bash
feat(api): thay đổi endpoint lấy sản phẩm

BREAKING CHANGE: endpoint cũ /api/products đổi thành /api/v2/products
```
