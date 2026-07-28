/**
 * MASTER DIRECTORY – NIÊN GIÁM DANH BẠ LONDON TỔNG HỢP
 * Hợp nhất tất cả địa điểm, nhân vật và cơ sở từ 6 vụ án SHCD.
 *
 * Hệ thống tọa độ bản đồ (860×570px viewport):
 *   NW  (tây bắc)  x: 50–270,   y: 50–230
 *   WC  (trung tâm) x: 270–470,  y: 130–420
 *   EC  (đông)      x: 470–820,  y: 80–410
 *   SW  (tây nam)   x: 50–300,   y: 400–550
 *   SE  (đông nam)  x: 440–820,  y: 400–550
 *
 * Chú thích thời gian:
 *  Case 1 (1890-09) → Case 2 (1893-12) → Case 3 (1889-03) → Case 4 (1890-04)
 *  → Case 5 (1890-06) → Case 6 (1890-10)
 *  Thứ tự thật: C3(Mar 1889) → C4(Apr 1890) → C1(Sep 1890) → C5(Jun 1890) → C6(Oct 1890) → C2(Dec 1893)
 */

export const MASTER_DIRECTORY = [

  // ═══════════════════════════════════════════════════════
  // KHU VỰC NW – NORTH WEST (x:50-270, y:50-230)
  // ═══════════════════════════════════════════════════════
  {
    name: "221B Baker Street (Holmes & Watson)",
    code: "1NW",
    category: "Cư dân",
    address: "221B Baker Street, NW",
    map_coords: { x: 70, y: 65 },
    desc: "Căn hộ nổi tiếng của Sherlock Holmes và Tiến sĩ Watson. Điểm khởi đầu mọi cuộc điều tra.",
    appeared_in: ["case_1", "case_2", "case_3", "case_4", "case_5", "case_6"]
  },
  {
    name: "Quả phụ đoàn thám hiểm Katebet",
    code: "12NW",
    category: "Cư dân",
    address: "12 North West St, NW",
    map_coords: { x: 115, y: 100 },
    desc: "Nhà riêng bà quả phụ tuyệt đẹp của thám hiểm gia Katebet. Tiết lộ mâu thuẫn nội bộ đoàn khai quật.",
    appeared_in: ["case_4"]
  },
  {
    name: "Giáo vụ Đại học UCL",
    code: "12NW",
    category: "Cơ quan",
    address: "12B North West St, NW",
    map_coords: { x: 155, y: 100 },
    desc: "Phòng Giáo vụ quản lý ngân sách các Khoa. Khoa Cơ khí của Sterling bị cắt 100% ngân sách cuối tháng (Case 6).",
    appeared_in: ["case_6"]
  },
  {
    name: "Công viên Regent's Park",
    code: "3NW",
    category: "Địa danh",
    address: "Regent's Park, NW",
    map_coords: { x: 90, y: 55 },
    desc: "Công viên hoàng gia phía bắc London.",
    appeared_in: []
  },
  {
    name: "Cửa hàng Xì gà Havana",
    code: "17EC",
    category: "Cửa hàng",
    address: "17 North East, NW",
    map_coords: { x: 215, y: 80 },
    desc: "Tiệm bán xì gà cao cấp nhập khẩu Cuba. Khách quen: Giáo sư Sterling (mua Partagas mỗi tuần). (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    name: "Phòng trưng bày tranh National Gallery",
    code: "4NW",
    category: "Địa danh",
    address: "4 North West St, NW",
    map_coords: { x: 253, y: 120 },
    desc: "Phòng trưng bày tranh quốc gia. Tổ chức buổi đấu giá kiệt tác 'Hoàng hôn trên sông Thames'. (Case 1)",
    appeared_in: ["case_1"]
  },

  // ═══════════════════════════════════════════════════════
  // KHU VỰC WC – WEST CENTRAL (x:270-475, y:130-430)
  // ═══════════════════════════════════════════════════════
  {
    name: "Phòng thí nghiệm Cơ khí UCL",
    code: "10WC",
    category: "Trường học",
    address: "10 West Central St, WC",
    map_coords: { x: 290, y: 155 },
    desc: "Phòng thí nghiệm nơi bản thiết kế điều khiển động cơ hơi nước của Arthur Pendelton bị đánh cắp. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    name: "Chancery Office (Di chúc)",
    code: "17WC",
    category: "Cơ quan",
    address: "17 West Central St, WC",
    map_coords: { x: 320, y: 175 },
    desc: "Phòng lưu trữ di chúc pháp lý London. Di chúc mới của Frances Nolan chỉ định Dr. Trevelyan giám hộ. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Scotland Yard (Hồ sơ cũ 1861)",
    code: "14WC",
    category: "Cơ quan",
    address: "14 West Central St, WC",
    map_coords: { x: 350, y: 175 },
    desc: "Hồ sơ vụ án tội phạm Zagreb Yoblinski năm 1861. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Davenport, Hiram (Luật sư)",
    code: "13WC",
    category: "Luật sư",
    address: "13 West Central St, WC",
    map_coords: { x: 385, y: 175 },
    desc: "Văn phòng luật sư quản lý tài sản gia đình Nolan. Thấy Frances như người mộng du khi lập di chúc mới. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Đại học Tổng hợp London UCL (Khoa Khảo cổ)",
    code: "43WC",
    category: "Trường học",
    address: "43 West Central St, WC",
    map_coords: { x: 295, y: 215 },
    desc: "Khoa Khảo cổ UCL. Trợ lý Turnbull từ chức sau tranh chấp cổ vật Toutankhamon với Windibank. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Mason, Oswald (Nhà riêng nạn nhân)",
    code: "42WC",
    category: "Cư dân",
    address: "42 Tottenham Court Rd, WC",
    map_coords: { x: 340, y: 215 },
    desc: "Nhà riêng Oswald Mason – Trưởng kế toán Ngân hàng Anh bị đập chết. Cuộn bản đồ cổ vật Katebet bị lấy mất. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Quán rượu Cáo Trắng",
    code: "22WC",
    category: "Quán rượu",
    address: "22 West Central St, WC",
    map_coords: { x: 425, y: 215 },
    desc: "Nơi sinh viên UCL tụ tập. Thomas Higgins có mặt ở đây từ 8 giờ tối đến 1 giờ sáng – ngoại phạm vụ Case 6. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    name: "Phòng trưng bày Đấu giá Christie's",
    code: "5WC",
    category: "Địa danh",
    address: "5 West Central St, WC",
    map_coords: { x: 295, y: 260 },
    desc: "Nhà đấu giá Christie's. Địa điểm dự kiến đấu giá bức tranh 'Hoàng hôn trên sông Thames'. (Case 1)",
    appeared_in: ["case_1"]
  },
  {
    name: "Cửa hàng súng Derringer",
    code: "28WC",
    category: "Cửa hàng",
    address: "28 West Central St, WC",
    map_coords: { x: 340, y: 260 },
    desc: "Tiệm bán vũ khí. Dr. Trevelyan mua súng Derringer đứng tên Frances Nolan để dàn dựng. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Scotland Yard (Thanh tra Lestrade)",
    code: "13SW",
    category: "Cơ quan",
    address: "13 South West St, WC/SW",
    map_coords: { x: 385, y: 260 },
    desc: "Sở Cảnh sát London. Lestrade quy tội vội cho Higgins mà không có bằng chứng. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    name: "Xưởng phục chế tranh Fitzroy",
    code: "9WC",
    category: "Xưởng",
    address: "9 West Central St, WC",
    map_coords: { x: 425, y: 260 },
    desc: "Nơi bức tranh gốc được cất giữ và phục chế. Đây là manh mối quan trọng trong vụ Case 1.",
    appeared_in: ["case_1"]
  },
  {
    name: "Nhà bá tước Pemberton (Chủ bức tranh)",
    code: "7WC",
    category: "Cư dân",
    address: "7 West Central St, WC",
    map_coords: { x: 295, y: 310 },
    desc: "Nhà riêng bá tước Pemberton – chủ sở hữu bức tranh 'Hoàng hôn trên sông Thames' bị đánh tráo. (Case 1)",
    appeared_in: ["case_1"]
  },
  {
    name: "Sterling, Giáo sư (Văn phòng)",
    code: "8EC",
    category: "Giáo sư",
    address: "8 East Central, WC/EC biên giới",
    map_coords: { x: 460, y: 175 },
    desc: "Văn phòng Giáo sư Sterling – người hướng dẫn của Arthur Pendelton. Hung thủ vụ đánh cắp bản thiết kế. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    name: "Higgins, Thomas (Sinh viên)",
    code: "14SW",
    category: "Cư dân",
    address: "14 South West St, SW/WC",
    map_coords: { x: 295, y: 355 },
    desc: "Căn hộ sinh viên Thomas Higgins. Loại trừ vì hút thuốc sợi rẻ và có ngoại phạm tại Cáo Trắng. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    name: "Văn phòng luật sư Evenson & Co",
    code: "11WC",
    category: "Luật sư",
    address: "11 West Central St, WC",
    map_coords: { x: 340, y: 355 },
    desc: "Văn phòng có dấu hiệu đột nhập bí ẩn. Bài báo Times ngày 11/4/1890 đề cập đến Evenson & Co. (Case 4 – đánh lạc hướng)",
    appeared_in: ["case_4"]
  },
  {
    name: "Ngân hàng Anh (Bank of England)",
    code: "6WC",
    category: "Cơ quan",
    address: "6 West Central St, WC",
    map_coords: { x: 425, y: 355 },
    desc: "Trụ sở Ngân hàng Anh. Oswald Mason là Trưởng kế toán trước khi bị sát hại. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Violette (Nhạc viện – nơi tập luyện)",
    code: "21WC",
    category: "Nghệ sĩ",
    address: "21 West Central St, WC",
    map_coords: { x: 340, y: 400 },
    desc: "Nơi cô Violette Blue luyện tập trước khi biểu diễn tại Oxford Music Hall. Nhân vật quan trọng Case 4.",
    appeared_in: ["case_4"]
  },

  // ═══════════════════════════════════════════════════════
  // KHU VỰC EC – EAST CENTRAL (x:470-820, y:80-400)
  // ═══════════════════════════════════════════════════════
  {
    name: "Viện Bảo Tàng Anh (Phòng Ai Cập)",
    code: "38EC",
    category: "Bảo tàng",
    address: "38 East Central St, EC",
    map_coords: { x: 510, y: 115 },
    desc: "Phòng Ai Cập Bảo tàng Anh. Xác nhận cổ vật đánh tráo thuộc về lăng mộ Vua Toutankhamon. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Nolan, Frances & Loretta (Căn hộ)",
    code: "36EC",
    category: "Cư dân",
    address: "36 East Central St, EC",
    map_coords: { x: 550, y: 115 },
    desc: "Căn hộ hai chị em Frances và Loretta Nolan. Frances khai hai lần mất trí nhớ do bị thôi miên. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Xưởng tranh họa sĩ Victor Renard",
    code: "3EC",
    category: "Xưởng",
    address: "3 East Central St, EC",
    map_coords: { x: 600, y: 115 },
    desc: "Xưởng họa sĩ Victor Renard – người vẽ bức tranh nhái giống hệt bản gốc trong vụ Case 1.",
    appeared_in: ["case_1"]
  },
  {
    name: "Oxford Music Hall (Violette Blue biểu diễn)",
    code: "11EC",
    category: "Sân khấu",
    address: "11 East Central St, EC",
    map_coords: { x: 650, y: 115 },
    desc: "Nhà hát âm nhạc Oxford. Violette Blue biểu diễn tại đây – manh mối duy nhất dẫn đến cô ta. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Phóng viên Travis (Nhà riêng)",
    code: "50EC",
    category: "Cư dân",
    address: "50 East Central St, EC",
    map_coords: { x: 510, y: 160 },
    desc: "Phóng viên Travis – không thể tiếp cận lăng mộ do hàng rào an ninh nghiêm ngặt. Ngoại phạm xác nhận. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Sterling, Giáo sư (Văn phòng EC)",
    code: "8EC",
    category: "Giáo sư",
    address: "08 East Central St, EC",
    map_coords: { x: 550, y: 160 },
    desc: "Văn phòng Giáo sư Sterling – xì gà Cuba và vết xước tay phải lộ diện. Hung thủ Case 6. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    name: "Bệnh viện St. Bartholomew",
    code: "38EC-b",
    category: "Bệnh viện",
    address: "38B East Central St, EC",
    map_coords: { x: 600, y: 160 },
    desc: "Phòng khám nghiệm tử thi Bác sĩ Sir Jasper Meeks. Kết luận Clarendon bị bắn cận chiến bằng Derringer. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Cửa hàng đồ cổ Ai Cập (Oxford St)",
    code: "30EC",
    category: "Cửa hàng",
    address: "30 East Central St, EC",
    map_coords: { x: 650, y: 160 },
    desc: "Tiệm đồ cổ nhận bán lén cổ vật Toutankhamon bị tuồn ra thị trường đen. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Shinwell, Porky (Sòng bạc Kilgore)",
    code: "52EC",
    category: "Cơ sở cờ bạc",
    address: "52 East Central St, EC",
    map_coords: { x: 510, y: 210 },
    desc: "Sòng bạc Kilgore và tay chân Gus Bullock. Clarendon nợ 7.000 Bảng và bị tay chân đe dọa. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Đại học Tổng hợp UCL (Cổng EC)",
    code: "43EC",
    category: "Trường học",
    address: "43 East Central St, EC",
    map_coords: { x: 550, y: 210 },
    desc: "Cổng phía đông UCL. Windibank có văn phòng tại đây. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Tiệm chụp ảnh Thompson & Sons",
    code: "20EC",
    category: "Cửa hàng",
    address: "20 East Central St, EC",
    map_coords: { x: 600, y: 210 },
    desc: "Tiệm chụp ảnh chuyên nghiệp. Có thể lưu giữ ảnh các nhân vật liên quan Case 2.",
    appeared_in: ["case_2"]
  },
  {
    name: "Cửa hàng Xì gà Havana (EC)",
    code: "17EC-b",
    category: "Cửa hàng",
    address: "17 East Central St, EC",
    map_coords: { x: 650, y: 210 },
    desc: "Tiệm xì gà Partagas Cuba. Xác nhận Giáo sư Sterling là khách quen đặt hàng tuần. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    name: "Nhà kho bến sông Thames",
    code: "40EC",
    category: "Địa danh",
    address: "40 East Central St, EC",
    map_coords: { x: 510, y: 265 },
    desc: "Kho hàng dọc bờ sông Thames. Có tin đồn về hàng lậu cổ vật Ai Cập. (Case 4 – đánh lạc hướng)",
    appeared_in: ["case_4"]
  },
  {
    name: "Ngân hàng Cán Cân (Nơi vụ cướp đầu tiên)",
    code: "35EC",
    category: "Cơ quan",
    address: "35 East Central St, EC",
    map_coords: { x: 560, y: 265 },
    desc: "Ngân hàng liên quan đến chuỗi vụ cướp và án mạng theo nghi thức 4 nguyên tố cổ đại. (Case 5)",
    appeared_in: ["case_5"]
  },
  {
    name: "Xưởng hóa chất Belladonna",
    code: "41EC",
    category: "Xưởng",
    address: "41 East Central St, EC",
    map_coords: { x: 610, y: 265 },
    desc: "Xưởng bào chế độc tố Belladonna được dùng trong chuỗi án mạng nghi thức triết học. (Case 5)",
    appeared_in: ["case_5"]
  },
  {
    name: "Tòa soạn Nhật báo The Times",
    code: "45EC",
    category: "Cơ quan",
    address: "45 East Central St, EC",
    map_coords: { x: 660, y: 265 },
    desc: "Tòa soạn The Times London. Phóng viên Travis làm việc tại đây sau khi rời Đại học. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Công ty Khai thác Katebet",
    code: "33EC",
    category: "Cơ quan",
    address: "33 East Central St, EC",
    map_coords: { x: 510, y: 315 },
    desc: "Văn phòng đoàn thám hiểm khai quật lăng mộ Katebet tại Ai Cập. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Thư viện Pháp y Scotland Yard",
    code: "48EC",
    category: "Cơ quan",
    address: "48 East Central St, EC",
    map_coords: { x: 560, y: 315 },
    desc: "Thư viện lưu hồ sơ tội phạm. Chứa thông tin về các vụ án nghi thức. (Case 5)",
    appeared_in: ["case_5"]
  },
  {
    name: "Nhà hát Opera Covent Garden",
    code: "18EC",
    category: "Sân khấu",
    address: "18 East Central St, EC",
    map_coords: { x: 610, y: 315 },
    desc: "Nhà hát Opera. Địa điểm xuất hiện trong Case 2 liên quan đến nhân vật bí ẩn.",
    appeared_in: ["case_2"]
  },
  {
    name: "Văn phòng Moriarty (bỏ hoang)",
    code: "60EC",
    category: "Địa danh",
    address: "60 East Central St, EC",
    map_coords: { x: 660, y: 315 },
    desc: "Văn phòng cũ của Giáo sư Moriarty, hiện bỏ hoang. Được đề cập trong Case 2.",
    appeared_in: ["case_2"]
  },
  {
    name: "Sông Thames – Bến Blackfriars",
    code: "55EC",
    category: "Địa danh",
    address: "55 East Central St, EC",
    map_coords: { x: 555, y: 370 },
    desc: "Bến sông Thames khu Blackfriars. Địa điểm nghi thức 'Thủy' trong chuỗi án Case 5.",
    appeared_in: ["case_5"]
  },

  // ═══════════════════════════════════════════════════════
  // KHU VỰC SW – SOUTH WEST (x:50-320, y:400-550)
  // ═══════════════════════════════════════════════════════
  {
    name: "Khách sạn Clarendon",
    code: "15SW",
    category: "Khách sạn",
    address: "15 South West St, SW",
    map_coords: { x: 80, y: 430 },
    desc: "Nơi ông Clarendon lưu trú. Hiện trường chỉ có 1 ly rượu, loại trừ Loretta. Gus Bullock chực chờ ở quầy bar. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Căn hộ Higgins, Thomas",
    code: "14SW",
    category: "Cư dân",
    address: "14 South West St, SW",
    map_coords: { x: 130, y: 430 },
    desc: "Căn hộ tồi tàn của sinh viên Thomas Higgins. Hút thuốc lá sợi rẻ → loại trừ khỏi vụ trộm Case 6. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    name: "Xưởng in bản đồ London",
    code: "19SW",
    category: "Xưởng",
    address: "19 South West St, SW",
    map_coords: { x: 180, y: 430 },
    desc: "Xưởng in ấn chuyên bản đồ và tài liệu địa lý. Có thể cung cấp thông tin về vị trí các lăng mộ. (Case 4 – đánh lạc hướng)",
    appeared_in: ["case_4"]
  },
  {
    name: "Nhà kho Pendelton, Arthur",
    code: "26SW",
    category: "Cư dân",
    address: "26 South West St, SW",
    map_coords: { x: 230, y: 430 },
    desc: "Nhà trọ của sinh viên Arthur Pendelton – nạn nhân vụ đánh cắp bản thiết kế. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    name: "Trại thực hành hóa học SW",
    code: "27SW",
    category: "Xưởng",
    address: "27 South West St, SW",
    map_coords: { x: 280, y: 430 },
    desc: "Phòng thực hành hóa chất nhỏ tại khu SW. Liên quan đến vụ nghi thức đầu độc Case 5.",
    appeared_in: ["case_5"]
  },
  {
    name: "Công viên Hyde Park",
    code: "2SW",
    category: "Địa danh",
    address: "Hyde Park, SW",
    map_coords: { x: 80, y: 490 },
    desc: "Công viên hoàng gia Hyde Park. Frances Nolan tỉnh dậy ở đây sau lần bị thôi miên thứ nhất. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Phòng khám bí mật Dr. Trevelyan",
    code: "24SE-SW",
    category: "Bác sĩ",
    address: "24 South East/South West, SW",
    map_coords: { x: 130, y: 490 },
    desc: "Phòng khám ẩn danh của Dr. Trevelyan nơi Frances được đưa đến để thôi miên bí mật. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Nhà thờ St. Mary Woolnoth",
    code: "31SW",
    category: "Địa danh",
    address: "31 South West St, SW",
    map_coords: { x: 195, y: 490 },
    desc: "Giáo đường Lombard Street. Người trông coi bị kẻ lạ mặt dùng thuốc mê bốc hơi làm ngất xỉu. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Trại tập kết Case 5 (Thủy)",
    code: "25SW",
    category: "Địa danh",
    address: "25 South West St, SW",
    map_coords: { x: 255, y: 490 },
    desc: "Địa điểm phát sinh nghi thức 'Thủy' trong chuỗi án mạng 4 nguyên tố cổ đại Empedocles. (Case 5)",
    appeared_in: ["case_5"]
  },
  {
    name: "Ga xe lửa Waterloo",
    code: "32SW",
    category: "Địa danh",
    address: "32 South West St, SW",
    map_coords: { x: 80, y: 545 },
    desc: "Ga xe lửa Waterloo. Frances Nolan tỉnh dậy tại đây sau lần bị thôi miên thứ hai tại Lambeth Walk. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Lambeth Walk (Căn hộ thuê bí mật)",
    code: "24SE",
    category: "Địa danh",
    address: "24 South East St, SW/SE",
    map_coords: { x: 145, y: 545 },
    desc: "Căn hộ cho thuê ở Lambeth Walk – phòng thôi miên bí mật của Dr. Trevelyan. Frances bị ngất xỉu lần 2 tại đây. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Khu nhà ổ chuột Southwark",
    code: "37SW",
    category: "Địa danh",
    address: "37 South West St, SW",
    map_coords: { x: 215, y: 545 },
    desc: "Khu dân cư nghèo Southwark. Nơi một số nhân vật ẩn náu trong Case 5.",
    appeared_in: ["case_5"]
  },

  // ═══════════════════════════════════════════════════════
  // KHU VỰC SE – SOUTH EAST (x:440-820, y:400-560)
  // ═══════════════════════════════════════════════════════
  {
    name: "Trevelyan, Dr. (Phòng khám SE)",
    code: "24SE-clinic",
    category: "Bác sĩ",
    address: "24 South East St, SE",
    map_coords: { x: 475, y: 430 },
    desc: "Phòng khám chính thức Dr. Trevelyan. Bác sĩ riêng của Loretta Nolan. Kẻ chủ mưu vụ án Case 3. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    name: "Bến cảng London (Victoria Docks)",
    code: "62SE",
    category: "Địa danh",
    address: "62 South East St, SE",
    map_coords: { x: 535, y: 430 },
    desc: "Cảng sông Thames. Cổ vật Ai Cập bị vận chuyển qua đây. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Nhà tù Newgate (Hồ sơ bắt giữ)",
    code: "59SE",
    category: "Cơ quan",
    address: "59 South East St, SE",
    map_coords: { x: 595, y: 430 },
    desc: "Nhà tù Newgate. Gus Bullock bị bắt và thụ án tại đây sau vụ Case 3 (từ tháng 3/1889). Vụ sau không còn liên hệ hắn.",
    appeared_in: ["case_3"]
  },
  {
    name: "Dinh thự Katebet Expedition HQ",
    code: "54SE",
    category: "Cơ quan",
    address: "54 South East St, SE",
    map_coords: { x: 655, y: 430 },
    desc: "Trụ sở đoàn thám hiểm Katebet tại London. Cất giữ tài liệu và cổ vật từ Ai Cập. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Câu lạc bộ Triết học Empedocles",
    code: "58SE",
    category: "Địa danh",
    address: "58 South East St, SE",
    map_coords: { x: 715, y: 430 },
    desc: "Câu lạc bộ cuồng tín triết học cổ đại 4 nguyên tố Thủy-Hỏa-Phong-Thổ. Gốc rễ của chuỗi án Case 5.",
    appeared_in: ["case_5"]
  },
  {
    name: "Nhà thờ St. George Southwark",
    code: "61SE",
    category: "Địa danh",
    address: "61 South East St, SE",
    map_coords: { x: 475, y: 490 },
    desc: "Địa điểm nghi thức 'Thổ' trong chuỗi án Case 5.",
    appeared_in: ["case_5"]
  },
  {
    name: "Cầu London Bridge",
    code: "56SE",
    category: "Địa danh",
    address: "56 South East St, SE",
    map_coords: { x: 555, y: 490 },
    desc: "Cầu London nối bờ Bắc và Nam sông Thames. Địa điểm giao dịch bí mật trong Case 5.",
    appeared_in: ["case_5"]
  },
  {
    name: "Nhà kho Case 2 (Đám cháy bí ẩn)",
    code: "49SE",
    category: "Địa danh",
    address: "49 South East St, SE",
    map_coords: { x: 635, y: 490 },
    desc: "Nhà kho bị đám cháy bí ẩn. Một thi thể bị cháy xém được phát hiện bên trong liên quan Case 2.",
    appeared_in: ["case_2"]
  },
  {
    name: "Bảo tàng Lịch sử Tự nhiên SE",
    code: "47SE",
    category: "Bảo tàng",
    address: "47 South East St, SE",
    map_coords: { x: 715, y: 490 },
    desc: "Bảo tàng lưu trữ mẫu vật khảo cổ. Chuyên gia bảo tàng xác nhận danh tính cổ vật Ai Cập. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    name: "Ga xe lửa London Bridge",
    code: "70SE",
    category: "Địa danh",
    address: "70 South East St, SE",
    map_coords: { x: 555, y: 545 },
    desc: "Ga xe lửa London Bridge. Điểm đến trong các tuyến trốn thoát của nghi phạm.",
    appeared_in: []
  },
  {
    name: "Nhà kho Buôn lậu Cổ vật Rotherhithe",
    code: "75SE",
    category: "Địa danh",
    address: "75 South East St, SE",
    map_coords: { x: 715, y: 545 },
    desc: "Kho hàng bí mật tại Rotherhithe. Nơi tạm cất giữ cổ vật Toutankhamon trước khi bán. (Case 4 – đánh lạc hướng)",
    appeared_in: ["case_4"]
  }
];

/**
 * Lấy directory entries cho một vụ án cụ thể (lọc theo case_id)
 * Nếu caseId = null, trả về toàn bộ
 */
export function getDirectoryForCase(caseId = null) {
  if (!caseId) return MASTER_DIRECTORY;
  return MASTER_DIRECTORY.filter(entry =>
    entry.appeared_in.includes(caseId) || entry.appeared_in.length === 0
  );
}

/**
 * Lấy tất cả map nodes cho một vụ án (từ nodes của case + MASTER_DIRECTORY)
 * Trả về array các entry có map_coords để render pin
 */
export function getAllMapPinsForCase(caseData) {
  if (!caseData) return [];
  const nodeIds = new Set(Object.keys(caseData.nodes || {}));
  return MASTER_DIRECTORY.filter(entry => nodeIds.has(entry.code));
}
