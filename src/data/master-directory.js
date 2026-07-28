/**
 * MASTER DIRECTORY – NIÊN GIÁM DANH BẠ VÀ BẢN ĐỒ TỔNG HỢP LONDON 1888-1893
 * Hợp nhất 100% tất cả địa điểm, nhân vật và cơ quan từ 6 Vụ án SHCD.
 *
 * Tọa độ bản đồ chuẩn (kích thước Viewport 860 × 570 px):
 *   - NW (Phía Tây Bắc): x: 60 - 260, y: 50 - 230
 *   - WC (Trung tâm Tây): x: 270 - 470, y: 130 - 420
 *   - EC (Phía Đông Bắc/Trung): x: 480 - 820, y: 70 - 400
 *   - SW (Phía Tây Nam): x: 60 - 320, y: 400 - 550
 *   - SE (Phía Đông Nam): x: 440 - 820, y: 400 - 550
 */

export const MASTER_DIRECTORY = [

  // ═════════════════════════════════════════════════════════════════════
  // PHÂN KHU NW – NORTH WEST (TÂY BẮC LONDON)
  // ═════════════════════════════════════════════════════════════════════
  {
    code: "1NW",
    name: "221B Baker Street (Sherlock Holmes & Dr. Watson)",
    category: "Cư dân",
    address: "221B Baker Street, NW",
    map_coords: { x: 75, y: 70 },
    desc: "Căn hộ nổi tiếng của Sherlock Holmes và Tiến sĩ Watson. Điểm xuất phát của mọi kỳ án.",
    appeared_in: ["case_1", "case_2", "case_3", "case_4", "case_5", "case_6"]
  },
  {
    code: "3NW",
    name: "Công viên Hoàng Gia Regent's Park",
    category: "Địa danh",
    address: "Regent's Park, NW",
    map_coords: { x: 130, y: 55 },
    desc: "Công viên hoàng gia tuyệt đẹp ở phía tây bắc London.",
    appeared_in: []
  },
  {
    code: "4NW",
    name: "Phòng trưng bày Quốc gia National Gallery",
    category: "Địa danh",
    address: "Trafalgar Square, NW",
    map_coords: { x: 230, y: 110 },
    desc: "Phòng trưng bày mỹ thuật quốc gia. Nơi diễn ra các sự kiện triển lãm lớn.",
    appeared_in: ["case_1"]
  },
  {
    code: "12NW",
    name: "Phòng Giáo vụ Đại học UCL / Dinh thự Katebet Widow",
    category: "Cơ quan & Cư dân",
    address: "12 Gower Street, NW",
    map_coords: { x: 190, y: 140 },
    desc: "Phòng Giáo vụ quản lý ngân sách UCL (Case 6) và dinh thự của góa phụ thám hiểm gia Katebet (Case 4).",
    appeared_in: ["case_4", "case_6"]
  },
  {
    code: "31NW",
    name: "Hẻm Shoe Lane (Hiện trường ngã từ mái nhà)",
    category: "Hiện trường",
    address: "Shoe Lane, NW",
    map_coords: { x: 245, y: 190 },
    desc: "Ngõ nhỏ râm mát nơi thi thể nạn nhân ngã từ mái nhà được phát hiện với mùi thảo mộc kỳ lạ. (Case 5)",
    appeared_in: ["case_5"]
  },

  // ═════════════════════════════════════════════════════════════════════
  // PHÂN KHU WC – WEST CENTRAL (TRUNG TÂM TÂY LONDON)
  // ═════════════════════════════════════════════════════════════════════
  {
    code: "05WC",
    name: "Nhà kho tủ đồ Ga King's Cross",
    category: "Địa danh",
    address: "King's Cross Station, WC",
    map_coords: { x: 290, y: 140 },
    desc: "Dãy tủ gửi đồ số 4 ga King's Cross. Nơi cất giấu bức tranh nhái giả trong vụ án 1. (Case 1)",
    appeared_in: ["case_1"]
  },
  {
    code: "07WC",
    name: "Dinh thự Bá tước Pemberton",
    category: "Cư dân",
    address: "7 Russell Square, WC",
    map_coords: { x: 335, y: 140 },
    desc: "Dinh thự Bá tước Pemberton - chủ sở hữu ban đầu của kiệt tác 'Hoàng hôn trên sông Thames'. (Case 1)",
    appeared_in: ["case_1"]
  },
  {
    code: "09WC",
    name: "Xưởng phục chế nghệ thuật Fitzroy",
    category: "Xưởng",
    address: "9 Fitzroy Street, WC",
    map_coords: { x: 380, y: 140 },
    desc: "Xưởng tranh danh tiếng chuyên phục chế kiệt tác cổ. (Case 1)",
    appeared_in: ["case_1"]
  },
  {
    code: "10WC",
    name: "Phòng thí nghiệm Cơ khí UCL (Arthur Pendelton)",
    category: "Trường học",
    address: "10 Gower Street, WC",
    map_coords: { x: 425, y: 140 },
    desc: "Phòng thí nghiệm nơi bản thiết kế hệ thống điều khiển hơi nước bị cạy tủ đánh cắp. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    code: "11WC",
    name: "Văn phòng Luật sư Evenson & Co",
    category: "Luật sư",
    address: "11 Lincoln's Inn Fields, WC",
    map_coords: { x: 290, y: 195 },
    desc: "Văn phòng luật sư tư vấn tài chính doanh nghiệp. Đột nhập bí ẩn được báo Times nhắc tới. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "13WC",
    name: "Văn phòng Luật sư Hiram Davenport",
    category: "Luật sư",
    address: "13 Chancery Lane, WC",
    map_coords: { x: 335, y: 195 },
    desc: "Văn phòng luật sư gia đình Nolan. Nơi Frances Nolan bị thôi miên đến thay đổi người giám hộ di chúc. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    code: "14WC",
    name: "Scotland Yard - Hồ sơ vụ án cũ 1861 (Yoblinski)",
    category: "Cơ quan",
    address: "14 Great Scotland Yard, WC",
    map_coords: { x: 380, y: 195 },
    desc: "Lưu trữ hồ sơ vụ án cũ năm 1861 về sát thủ điên Zagreb Yoblinski. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    code: "17WC",
    name: "Chancery Office (Tòa án Di chúc London)",
    category: "Cơ quan",
    address: "17 Chancery Lane, WC",
    map_coords: { x: 425, y: 195 },
    desc: "Nơi lưu giữ bản di chúc pháp lý công chứng của Frances Nolan dành toàn bộ quyền cho Dr. Trevelyan. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    code: "21WC",
    name: "Nhạc viện London (Phòng luyện âm Violette Blue)",
    category: "Nghệ sĩ",
    address: "21 Drury Lane, WC",
    map_coords: { x: 290, y: 250 },
    desc: "Phòng tập luyện riêng của ca sĩ Violette Blue trước khi đến hát tại Oxford Music Hall. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "22WC",
    name: "Quán rượu Cáo Trắng (White Fox Tavern)",
    category: "Quán rượu",
    address: "22 Bloomsbury St, WC",
    map_coords: { x: 335, y: 250 },
    desc: "Quán rượu sinh viên UCL. Nơi Thomas Higgins nhậu từ 8h tối đến 1h sáng tạo chứng cứ ngoại phạm. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    code: "28WC",
    name: "Cửa hàng súng sáu & Vũ khí Derringer",
    category: "Cửa hàng",
    address: "28 Holborn Street, WC",
    map_coords: { x: 380, y: 250 },
    desc: "Tiệm bán súng ngắn sáu nòng. Dr. Trevelyan trực tiếp đi mua Derringer đứng tên Frances vu khống. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    code: "42WC",
    name: "Nhà riêng nạn nhân Oswald Mason",
    category: "Cư dân",
    address: "42 Tottenham Court Road, WC",
    map_coords: { x: 425, y: 250 },
    desc: "Hiện trường vụ đập chết Trưởng kế toán Ngân hàng Anh Oswald Mason và cướp cuộn bản đồ cổ vật Katebet. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "43WC",
    name: "Đại học Tổng hợp London UCL (Khoa Khảo cổ)",
    category: "Trường học",
    address: "43 Gower Street, WC",
    map_coords: { x: 335, y: 305 },
    desc: "Khoa Khảo cổ UCL. Trợ lý Turnbull nộp đơn xin từ chức giận dữ sau mâu thuẫn cổ vật với Windibank. (Case 4)",
    appeared_in: ["case_4"]
  },

  // ═════════════════════════════════════════════════════════════════════
  // PHÂN KHU EC – EAST CENTRAL (ĐÔNG TRUNG TÂM LONDON)
  // ═════════════════════════════════════════════════════════════════════
  {
    code: "03EC",
    name: "Xưởng tranh Họa sĩ Victor Renard",
    category: "Xưởng",
    address: "3 Fleet Street, EC",
    map_coords: { x: 500, y: 110 },
    desc: "Xưởng vẽ của danh họa làm giả bức 'Hoàng hôn trên sông Thames'. (Case 1)",
    appeared_in: ["case_1"]
  },
  {
    code: "08EC",
    name: "Văn phòng Giáo sư Sterling (Khoa Cơ khí)",
    category: "Giáo sư",
    address: "8 East Central St, EC",
    map_coords: { x: 550, y: 110 },
    desc: "Văn phòng Giáo sư Sterling - hung thủ vụ cạy ngăn kéo cướp bản thiết kế động cơ hơi nước. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    code: "10EC",
    name: "Phòng tranh Archibald (Hiện trường đánh tráo)",
    category: "Hiện trường",
    address: "10 Bond Street, EC",
    map_coords: { x: 600, y: 110 },
    desc: "Hiện trường đánh tráo kiệt tác tranh Turner. Chó gác Brutus không sủa vì kẻ gian là quản lý Victor. (Case 1)",
    appeared_in: ["case_1"]
  },
  {
    code: "11EC",
    name: "Nhà hát Oxford Music Hall (Violette Blue)",
    category: "Sân khấu",
    address: "11 Oxford Street, EC",
    map_coords: { x: 650, y: 110 },
    desc: "Nhà hát ca nhạc sôi động. Nơi duy nhất đăng cáo thị biểu diễn của nữ ca sĩ Violette Blue. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "17EC",
    name: "Cửa hàng Xì gà Havana Partagas",
    category: "Cửa hàng",
    address: "17 Cheapside, EC",
    map_coords: { x: 700, y: 110 },
    desc: "Cửa hàng bán xì gà Cuba đắt tiền. Giáo sư Sterling là khách quen đặt hàng Partagas hàng tuần. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    code: "18EC",
    name: "Nhà hát Opera Covent Garden",
    category: "Sân khấu",
    address: "18 Bow Street, EC",
    map_coords: { x: 750, y: 110 },
    desc: "Nhà hát opera danh tiếng. Địa điểm xuất hiện trong nghi vấn Case 2.",
    appeared_in: ["case_2"]
  },
  {
    code: "20EC",
    name: "Tiệm chụp ảnh Thompson & Sons",
    category: "Cửa hàng",
    address: "20 Fleet Street, EC",
    map_coords: { x: 500, y: 170 },
    desc: "Tiệm nhiếp ảnh chuyên nghiệp lưu giữ hình ảnh các nhân vật quan trọng. (Case 2)",
    appeared_in: ["case_2"]
  },
  {
    code: "30EC",
    name: "Tiệm đồ cổ Ai Cập đường Oxford",
    category: "Cửa hàng",
    address: "30 Oxford Street, EC",
    map_coords: { x: 550, y: 170 },
    desc: "Cửa hàng nhận mua lén các tượng nhỏ cổ vật Toutankhamon bị tuồn ra thị trường đen. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "33EC",
    name: "Văn phòng Đoàn Thám Hiểm Katebet",
    category: "Cơ quan",
    address: "33 Leadenhall Street, EC",
    map_coords: { x: 600, y: 170 },
    desc: "Trụ sở đại diện đoàn khai quật lăng mộ nữ vương Katebet tại London. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "35EC",
    name: "Ngân hàng Cán Cân (Unsettled Balance Bank)",
    category: "Cơ quan",
    address: "35 Lombard Street, EC",
    map_coords: { x: 650, y: 170 },
    desc: "Ngân hàng xảy ra vụ cướp bí ẩn mở đầu cho chuỗi án mạng 4 nguyên tố triết học. (Case 5)",
    appeared_in: ["case_5"]
  },
  {
    code: "36EC",
    name: "Căn hộ hai chị em Frances & Loretta Nolan",
    category: "Cư dân",
    address: "36 Moorgate, EC",
    map_coords: { x: 700, y: 170 },
    desc: "Nơi Frances Nolan sinh sống và khai báo về hai lần bị ngất xỉu mất trí nhớ do thôi miên. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    code: "38EC",
    name: "Bệnh viện St. Bartholomew / Bảo tàng Anh Ai Cập",
    category: "Bệnh viện & Bảo tàng",
    address: "38 Smithfield, EC",
    map_coords: { x: 750, y: 170 },
    desc: "Khám nghiệm Sir Jasper Meeks (Case 3) và Phòng cổ vật Toutankhamon Bảo tàng Anh (Case 4).",
    appeared_in: ["case_3", "case_4"]
  },
  {
    code: "40EC",
    name: "Kho hàng bến sông Thames Blackfriars",
    category: "Kho hàng",
    address: "40 Upper Thames St, EC",
    map_coords: { x: 500, y: 230 },
    desc: "Kho hàng bị nghi ngờ cất giấu cổ vật buôn lậu Ai Cập. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "41EC",
    name: "Xưởng hóa chất Belladonna (Độc tố thảo mộc)",
    category: "Xưởng",
    address: "41 Cannon Street, EC",
    map_coords: { x: 550, y: 230 },
    desc: "Xưởng bào chế và chiết xuất độc tố Belladonna được dùng trong các vụ ám sát nghi thức. (Case 5)",
    appeared_in: ["case_5"]
  },
  {
    code: "43EC",
    name: "Cổng phía Đông Đại học UCL",
    category: "Trường học",
    address: "43 Bishopsgate, EC",
    map_coords: { x: 600, y: 230 },
    desc: "Văn phòng phụ của Giáo sư Windibank tại khu vực phía đông. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "45EC",
    name: "Tòa soạn Nhật báo The Times London",
    category: "Cơ quan",
    address: "45 Printing House Square, EC",
    map_coords: { x: 650, y: 230 },
    desc: "Tòa soạn nhật báo The Times. Nơi phóng viên Travis làm việc sau khi rời UCL. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "50EC",
    name: "Căn hộ Phóng viên Travis (The Times)",
    category: "Cư dân",
    address: "50 Fleet Street, EC",
    map_coords: { x: 700, y: 230 },
    desc: "Nhà riêng phóng viên Travis. Xác nhận không thể tiếp cận lăng mộ do hàng rào an ninh nghiêm ngặt. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "52EC",
    name: "Sòng bạc Kilgore & Porky Shinwell",
    category: "Sòng bạc",
    address: "52 Whitechapel Road, EC",
    map_coords: { x: 750, y: 230 },
    desc: "Tiệm sòng bạc Kilgore nơi Clarendon nợ 7.000 Bảng và gã sẹo Gus Bullock đòi nợ. (Case 3)",
    appeared_in: ["case_3"]
  },

  // ═════════════════════════════════════════════════════════════════════
  // PHÂN KHU SW – SOUTH WEST (TÂY NAM LONDON)
  // ═════════════════════════════════════════════════════════════════════
  {
    code: "02SW",
    name: "Công viên Hoàng Gia Hyde Park",
    category: "Địa danh",
    address: "Hyde Park, SW",
    map_coords: { x: 80, y: 430 },
    desc: "Công viên Hyde Park. Nơi Frances Nolan tỉnh dậy sau lần ngất xỉu thôi miên thứ nhất. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    code: "13SW",
    name: "Sở Cảnh sát Scotland Yard (Thanh tra Lestrade)",
    category: "Cơ quan",
    address: "4 Whitehall Place, SW",
    map_coords: { x: 140, y: 430 },
    desc: "Trụ sở Cảnh sát Hoàng Gia Scotland Yard. Nơi Thanh tra Lestrade tiếp đón thám tử. (Case 1, 5, 6)",
    appeared_in: ["case_1", "case_5", "case_6"]
  },
  {
    code: "14SW",
    name: "Căn hộ sinh viên Thomas Higgins",
    category: "Cư dân",
    address: "14 Pimlico Road, SW",
    map_coords: { x: 195, y: 430 },
    desc: "Căn hộ tồi tàn của Higgins. Hút thuốc lá sợi rẻ tiền → bằng chứng loại trừ vụ trộm bản thiết kế. (Case 6)",
    appeared_in: ["case_6"]
  },
  {
    code: "15SW",
    name: "Khách sạn Clarendon",
    category: "Khách sạn",
    address: "15 Victoria Street, SW",
    map_coords: { x: 250, y: 430 },
    desc: "Khách sạn Clarendon tạm trú. Hiện trường chỉ có 1 ly rượu (loại trừ Loretta) và vết sẹo Gus Bullock. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    code: "22SW",
    name: "Biệt thự sưu tầm Julian",
    category: "Cư dân",
    address: "22 Belgrave Square, SW",
    map_coords: { x: 80, y: 490 },
    desc: "Dinh thự gã sưu tầm tranh Julian - đối thủ mua tranh của Bá tước Pemberton. (Case 1)",
    appeared_in: ["case_1"]
  },
  {
    code: "25SW",
    name: "Trạm nước sông Thames (Nghi thức Thủy)",
    category: "Hiện trường",
    address: "25 Chelsea Embankment, SW",
    map_coords: { x: 140, y: 490 },
    desc: "Trạm lấy nước bờ sông Thames liên quan đến vụ sát hại nghi thức Nguyên tố Thủy. (Case 5)",
    appeared_in: ["case_5"]
  },
  {
    code: "31SW",
    name: "Giáo đường St. Mary Woolnoth (Khăn mê)",
    category: "Địa danh",
    address: "31 Lombard Street, SW",
    map_coords: { x: 195, y: 490 },
    desc: "Nơi người trông coi giáo đường bị đánh ngất bằng khăn thấm thuốc mê bốc hơi. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    code: "32SW",
    name: "Ga xe lửa Waterloo Station",
    category: "Địa danh",
    address: "Waterloo Station, SW",
    map_coords: { x: 250, y: 490 },
    desc: "Ga xe lửa Waterloo. Nơi Frances Nolan tỉnh dậy sau lần ngất xỉu thôi miên thứ hai tại Lambeth Walk. (Case 3)",
    appeared_in: ["case_3"]
  },

  // ═════════════════════════════════════════════════════════════════════
  // PHÂN KHU SE – SOUTH EAST (ĐÔNG NAM LONDON)
  // ═════════════════════════════════════════════════════════════════════
  {
    code: "14SE",
    name: "Xưởng vẽ của Họa sĩ Elias",
    category: "Xưởng",
    address: "14 Southwark Bridge Rd, SE",
    map_coords: { x: 500, y: 430 },
    desc: "Xưởng vẽ Elias - kẻ khai nhận được người mặc áo xám hút xì gà đắt tiền thuê chép tranh giả. (Case 1)",
    appeared_in: ["case_1"]
  },
  {
    code: "24SE",
    name: "Căn hộ thuê Lambeth Walk / Phòng khám Dr. Trevelyan",
    category: "Địa danh & Bác sĩ",
    address: "24 Lambeth Walk, SE",
    map_coords: { x: 560, y: 430 },
    desc: "Căn hộ bí mật có đĩa thôi miên và thuốc mê của Dr. Trevelyan. Nơi Frances bị ngất lần 2. (Case 3)",
    appeared_in: ["case_3"]
  },
  {
    code: "49SE",
    name: "Nhà kho hoang bến tàu (Đám cháy Baker Street)",
    category: "Hiện trường",
    address: "49 Bermondsey Wall, SE",
    map_coords: { x: 620, y: 430 },
    desc: "Nhà kho bị phóng hỏa nghi vấn trong vụ án Cái chết của Sherlock Holmes. (Case 2)",
    appeared_in: ["case_2"]
  },
  {
    code: "54SE",
    name: "Trụ sở Đoàn thám hiểm Katebet Expedition",
    category: "Cơ quan",
    address: "54 Tooley Street, SE",
    map_coords: { x: 680, y: 430 },
    desc: "Trụ sở quản lý hậu cần và cổ vật lăng mộ Nữ vương Katebet. (Case 4)",
    appeared_in: ["case_4"]
  },
  {
    code: "56SE",
    name: "Cầu London Bridge (Địa điểm giao dịch)",
    category: "Địa danh",
    address: "London Bridge, SE",
    map_coords: { x: 740, y: 430 },
    desc: "Cầu London Bridge nối hai bờ sông Thames. Nơi trao đổi thư mật. (Case 5)",
    appeared_in: ["case_5"]
  },
  {
    code: "58SE",
    name: "Câu lạc bộ Triết học Empedocles (4 Nguyên tố)",
    category: "Địa danh",
    address: "58 Borough High St, SE",
    map_coords: { x: 500, y: 490 },
    desc: "Câu lạc bộ thảo luận triết học cuồng tín Empedocles đứng sau chuỗi án mạng 4 nguyên tố. (Case 5)",
    appeared_in: ["case_5"]
  },
  {
    code: "59SE",
    name: "Nhà tù Newgate (Nơi giam giữ Gus Bullock)",
    category: "Cơ quan",
    address: "59 Old Bailey, SE",
    map_coords: { x: 560, y: 490 },
    desc: "Nhà tù Newgate. Nơi tay đòi nợ sẹo Gus Bullock bị bắt giữ và kết án sau vụ án 3 năm 1889.",
    appeared_in: ["case_3"]
  },
  {
    code: "61SE",
    name: "Giáo đường St. George Southwark (Nghi thức Thổ)",
    category: "Địa danh",
    address: "61 Borough Road, SE",
    map_coords: { x: 620, y: 490 },
    desc: "Giáo đường cổ nơi phát hiện nạn nhân bị sát hại theo nghi thức Nguyên tố Thổ. (Case 5)",
    appeared_in: ["case_5"]
  },
  {
    code: "62SE",
    name: "Cảng Victoria Docks (Vận chuyển cổ vật)",
    category: "Địa danh",
    address: "62 Victoria Docks, SE",
    map_coords: { x: 680, y: 490 },
    desc: "Bến cảng nơi cổ vật Toutankhamon và Katebet từ Ai Cập cập bến London. (Case 4)",
    appeared_in: ["case_4"]
  }
];

/**
 * Lấy danh sách địa điểm theo Vụ án
 */
export function getDirectoryForCase(caseId = null) {
  if (!caseId) return MASTER_DIRECTORY;
  return MASTER_DIRECTORY.filter(entry =>
    entry.appeared_in.includes(caseId) || entry.appeared_in.length === 0
  );
}

/**
 * Lấy tất cả Map Pins cần render trên bản đồ cho một Vụ án cụ thể
 */
export function getAllMapPinsForCase(caseData) {
  if (!caseData) return MASTER_DIRECTORY;
  return MASTER_DIRECTORY;
}
