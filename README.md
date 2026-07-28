# 🕵️‍♂️ DETECTIVE CHRONICLES - NỀN TẢNG BOARDGAME TRINH THÁM MULTIPLAYER

Ứng dụng web trực tuyến đa nền tảng cho phép người chơi tham gia các vụ án trinh thám, đấu trí ẩn vai trò và suy luận lập luận sắc bén cùng bạn bè.

---

## 🎮 CÁC TỰA GAME ĐANG HỖ TRỢ

### 1. 🩸 Deception: Murder in Hong Kong (Vụ Án Mạng Tại Hồng Kông)
- **Thể loại**: Hidden Role (Ẩn vai trò), Đấu trí, Suy luận vụ án.
- **Số lượng người chơi**: 3 - 12 thám tử (hỗ trợ Bot tự động đệm slot).
- **Vai trò**: Pháp Y (Forensic Scientist), Kẻ Sát Nhân (Murderer), Đồng Mưu (Accomplice), Nhân Chứng (Witness), Thám Tử (Investigator).
- **Tính năng nổi bật**:
  - Đóng đạn trên thẻ bối cảnh realtime.
  - Phá án nhấp nhanh bằng thẻ bài.
  - Tự động đếm ngược thời gian thảo luận & mở sổ phá án.

### 2. 🔍 Sherlock Holmes: Consulting Detective (Thám Tử Lừng Danh Sherlock Holmes)
- **Thể loại**: Co-op Investigative Boardgame (Điều tra hợp tác), Trả lời câu hỏi phá án.
- **Vụ án hiện tại**: **Vụ Án Căn Hộ 221B Baker Street** (The Disappearance & Fire at Baker St).
- **Tính năng nổi bật**:
  - **Bản đồ London 1888**: Nhấp tọa độ khám xét trực quan trên bản đồ Victorian cổ điển.
  - **Sổ Tay Vụ Án (Casebook)**: Đọc hồ sơ vụ án, lời khai nhân chứng, bản ghi khám nghiệm.
  - **Danh Bạ Niên Giám A-Z (Directory)**: Tra cứu địa chỉ nhân vật và địa điểm theo chữ cái.
  - **Nhật Báo The Daily Telegraph**: Đọc tin tức báo chí London để tìm manh mối ngầm.
  - **Bộ Câu Hỏi Phá Án (Solve the Case)**: Trả lời 10 câu hỏi trắc nghiệm (Main Case & Side Mysteries) và chấm điểm so sánh với thiên tài Sherlock Holmes!

---

## 🛠️ CÔNG NGHỆ SỬ DỤNG (TECH STACK)

- **Frontend**: React 18 + Vite (Vanilla CSS design system, Lucide Icons).
- **Backend / Realtime**: Node.js + Express + Socket.IO (Railway ready).
- **Styling**: Cyber Crimson Noir Design System + Victorian Vintage Aesthetic.

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT STRUCTURE)

```
Deception - Murder in Hong Kong/
├── .agent/                    # Quy chuẩn & Hướng dẫn đặc tả Agents (GEMINI, UI, Database...)
├── docs/                      # Tài liệu tham khảo & Kịch bản / Errata / Luật chơi PDF
│   ├── cases/                 # Tài liệu kịch bản mở rộng & Hồ sơ Errata (Case 4, Errata PDF & TXT)
│   ├── references/            # Hình ảnh tham khảo (Anh-Tham-Khao-Ban-Do-London-1888.jpg, Anh-Tham-Khao-Background-Game.jpg)
│   └── rulebooks/             # File luật chơi PDF (Luat-Choi-Sherlock-Holmes.pdf, Luat-Choi-Deception-Murder-in-Hong-Kong.pdf)
├── public/                    # Tài nguyên tĩnh web (Assets)
│   ├── audio/                 # Nhạc nền Sherlock Holmes BGM (Audio MP3)
│   ├── fonts/                 # Font chữ tùy chỉnh (KK7 Dia Dao)
│   └── images/                # Ảnh nền Landing Page, Game Board, Bản đồ London 1888
├── src/                       # Mã nguồn Frontend (React)
│   ├── data/                  # Dữ liệu thẻ bài & Kịch bản vụ án Sherlock
│   │   ├── game-data.js       # Dữ liệu thẻ Deception (Roles, Means, Clues, Scene Tiles)
│   │   ├── sherlock-cases.js  # Registry quản lý danh sách & chọn Vụ án Sherlock Holmes
│   │   ├── sherlock-case-1.js # Vụ án 1: Bức Tranh Bị Đánh Tráo (The Swapped Canvas - Tân thủ)
│   │   ├── sherlock-case-2.js # Vụ án 2: Cái Chết Của Sherlock Holmes (Baker Street)
│   │   ├── sherlock-case-3.js # Vụ án 3: Người Phụ Nữ Hoang Tưởng (The Mystified Murderess)
│   │   ├── sherlock-case-4.js # Vụ án 4: Lời Nguyền Của Xác Ướp (The Mummy's Curse)
│   │   ├── sherlock-case-5.js # Vụ án 5: Cán Cân Công Lý Bất Ổn (The Case of the Unsettled Balance)
│   │   └── spyfall-data.js    # Dữ liệu cho mode Spyfall
├── App.css                # Style phụ trợ
├── App.jsx                # Component chính điều phối game & UI
├── index.css              # Style hệ thống UI Design System (Crimson Cyber & Victorian)
│   └── main.jsx               # Entrypoint React
├── server.js                  # Socket.IO Realtime Server (Backend Node.js)
├── package.json               # Cấu hình dự án & Dependencies
└── vite.config.js             # Cấu hình Vite Build
```

---

## 🚀 HƯỚNG DẪN KHỞI CHẠY LẠI PROJECCT (LOCAL DEVELOPMENT)

### 1. Cài đặt các gói phụ thuộc:
```bash
npm install
```

### 2. Chạy Backend Socket.IO Server (Port 3001):
```bash
node server.js
```

### 3. Chạy Frontend Vite Dev Server (Port 5173):
```bash
npm run dev
```

### 4. Build bản Production:
```bash
npm run build
```
