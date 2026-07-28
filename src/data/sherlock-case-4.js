export const SHERLOCK_CASE_4 = {
  "case_id": "sherlock_case_4",
  "title": "Vụ án 4: Lời Nguyền Của Xác Ướp (The Mummy's Curse)",
  "author": "Ystari & Raymond Edwards",
  "setting_date": "Ngày 11 tháng 4 năm 1890",
  "intro": {
    "story_text": "Ngày 11 tháng 4 năm 1890, giới thượng lưu và giới khảo cổ học London xôn xao trước chuỗi cái chết kỳ quặc giội xuống các thành viên đoàn thám hiểm khai quật lăng mộ nữ vương Ai Cập Katebet. Báo chí giật tít về 'Lời nguyền của Xác ướp' khi ông Oswald Mason - Trưởng kế toán Ngân hàng Anh và là nhà tài trợ đoàn thám hiểm - được phát hiện bị đập chết thảm khốc tại phòng làm việc 42 Tottenham Court Road. Trong khi dư luận hoảng loạn tin vào sức mạnh siêu nhiên của lời nguyền Ai Cập cổ đại, Sherlock Holmes khẳng định đây chỉ là màn kịch tàn nhẫn được che đậy khéo léo để che giấu các vụ giết người cướp cổ vật và thủ tiêu mâu thuẫn học thuật!",
    "initial_clues": [
      "Nạn nhân Oswald Mason bị đập chết bằng vật nặng vào đầu lúc 10:00 tối tại phòng làm việc 42 Tottenham Court Road.",
      "Kẻ đột nhập vào nhà bằng cửa sổ tầng trên, phòng làm việc có dấu vết xáo trộn mạnh cho thấy đã xảy ra xô xát.",
      "Hiện trường thu được thông tin nhà phóng viên báo The Times (Travis) liên tục bị ngăn cản tiếp cận lăng mộ Katebet.",
      "Nhật báo The Times đăng tin khu cắm trại khai quật Ai Cập được canh gác nghiêm ngặt để tránh trộm cướp.",
      "Quảng cáo trên báo tin tức nhắc tới điểm biểu diễn ca nhạc Oxford Music Hall của cô Violette Blue."
    ],
    "unlocked_nodes": ["42WC"]
  },
  "nodes": {
    "42WC": {
      "id": "42WC",
      "title": "Nhà riêng nạn nhân Oswald Mason",
      "area": "WC",
      "type": "crime_scene",
      "map_coords": { "x": 390, "y": 290 },
      "content": "Bà Rose Mason (vợ nạn nhân) nức nở kể lại: 'Chồng tôi trở về nhà lúc 9:30 tối và vào phòng làm việc. Lúc 10:00 tối khi tôi vào phòng thì bàng hoàng thấy ông ấy nằm gục trên bàn làm việc, đầu bị thương nặng. Chiếc két sắt trong phòng có dấu vết bị cạy nhưng không mất tiền mặt, chỉ mất đi cuộn bản đồ định vị cổ vật lăng mộ Katebet mà ông ấy vừa nhận từ Ai Cập'.",
      "unlocks": {
        "nodes": ["12NW", "50EC", "43WC"],
        "evidence_items": ["Oswald Mason bị đập chết, cuộn bản đồ định vị cổ vật Katebet bị lấy mất."]
      },
      "key_hints": ["Mục tiêu của kẻ sát nhân là cuộn bản đồ vị trí lăng mộ Katebet chứ không phải tiền bạc."]
    },
    "12NW": {
      "id": "12NW",
      "title": "Nhà riêng Bà quả phụ Thám hiểm gia Katebet",
      "area": "NW",
      "type": "suspect_interview",
      "map_coords": { "x": 140, "y": 380 },
      "content": "Bà quả phụ tuyệt đẹp và quyến rũ tiếp đón thám tử trong phòng khách tràn ngập cổ vật Ai Cập. Cô tiết lộ mâu thuẫn nảy lửa trong nội bộ đoàn khai quật: 'Chồng tôi và Giáo sư Windibank tranh cãi nảy lửa về quyền sở hữu các cổ vật của Vua Toutankhamon. Windibank đặc biệt lo lắng và muốn bán lén cổ vật ra thị trường đen cho các nhà sưu tập tư nhân ở London'.",
      "unlocks": {
        "nodes": ["38EC", "30EC"],
        "evidence_items": ["Mâu thuẫn nảy lửa về cổ vật Toutankhamon giữa đoàn thám hiểm và Giáo sư Windibank."]
      },
      "key_hints": ["Giáo sư Windibank âm mưu tuồn cổ vật Toutankhamon ra thị trường đen."]
    },
    "50EC": {
      "id": "50EC",
      "title": "Phóng viên báo The Times (Travis)",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "x": 610, "y": 310 },
      "content": "Phóng viên Travis trình bày chi tiết: 'Mọi người nghi ngờ tôi là hung thủ vì tôi liên tục đưa tin về đoàn thám hiểm. Nhưng sự thật là hàng rào an ninh quanh khu vực cắm trại khai quật vô cùng nghiêm ngặt. Dù tôi đã nhiều lần đệ đơn xin phép nhưng họ tuyệt đối không cho tôi bước chân vào lăng mộ. Tôi hoàn toàn không thể nào tiếp cận lăng mộ hay nạn nhân để gây ra vụ sát hại đầu tiên được!'. Chi tiết an ninh nghiêm ngặt tạo chứng cứ ngoại phạm sắt đá loại trừ Travis!",
      "unlocks": {
        "nodes": ["43WC"],
        "evidence_items": [
          "Trại khai quật canh gác cực kỳ nghiêm ngặt.",
          "Phóng viên Travis có chứng cứ ngoại phạm chắc chắn, loại trừ khả năng là hung thủ."
        ]
      },
      "key_hints": [
        "Trại khai quật được bảo vệ cẩn mật khiến Travis không thể tiếp cận lăng mộ.",
        "Loại trừ Travis khỏi danh sách nghi phạm."
      ]
    },
    "38EC": {
      "id": "38EC",
      "title": "Viện Bảo Tàng Anh (Phòng Ai Cập)",
      "area": "EC",
      "type": "clue_inspection",
      "map_coords": { "x": 550, "y": 340 },
      "content": "Chuyên gia bảo tàng đính chính thông tin: 'Chiếc bùa hộ mệnh thu được tại hiện trường không phải của Nữ vương Katebet mà thuộc về lăng mộ Vua Toutankhamon. Nó đã được đánh tráo tinh vi nhằm dựng lên vụ án Lời nguyền siêu nhiên hù dọa dư luận'. Chỉ duy nhất Đại học London là nhà tài trợ chính thức.",
      "unlocks": {
        "nodes": ["30EC"],
        "evidence_items": ["Cổ vật bị đánh tráo thuộc về lăng mộ Vua Toutankhamon chứ không phải Ramses II hay Katebet."]
      },
      "key_hints": ["Vụ án là màn kịch đánh tráo cổ vật Toutankhamon thành Lời Nguyền Xác Ướp."]
    },
    "43WC": {
      "id": "43WC",
      "title": "Đại học tổng hợp London (Khoa Khảo cổ)",
      "area": "WC",
      "type": "suspect_interview",
      "map_coords": { "x": 370, "y": 310 },
      "content": "Đại diện khoa khảo cổ xác nhận: Trợ lý Turnbull rất khao khát tham gia đoàn thám hiểm Katebet. Sau khi bị từ chối và xảy ra mâu thuẫn lợi nhuận mua bán cổ vật với Giáo sư Windibank, Turnbull đã giận dữ nộp đơn xin từ chức khỏi Đại học và chuyển sang làm phóng viên tự do.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Trợ lý Turnbull giận dữ từ chức khỏi Đại học sau tranh chấp với Windibank."]
      },
      "key_hints": ["Turnbull từ chức vì mâu thuẫn học thuật và lợi nhuận bán cổ vật."]
    },
    "30EC": {
      "id": "30EC",
      "title": "Cửa hàng đồ cổ Ai Cập đường Oxford",
      "area": "EC",
      "type": "location_search",
      "map_coords": { "x": 510, "y": 300 },
      "content": "Chủ tiệm đồ cổ khai báo: 'Một người đàn ông năng nổ kỳ quặc đại diện đoàn thám hiểm đã bán lén cho tôi các bức tượng nhỏ Ai Cập với giá rất cao. Kẻ này hiểu biết rất sâu về cổ vật Toutankhamon'.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Cổ vật Toutankhamon bị tuồn bán lén tại tiệm đồ cổ đường Oxford."]
      },
      "key_hints": ["Giáo sư Windibank âm mưu bán lén cổ vật Toutankhamon."]
    }
  },
  "directory": [
    { "name": "Mason, Oswald (Kế toán trưởng)", "code": "42WC", "category": "Nạn nhân", "address": "42 Tottenham Court Rd", "desc": "Nhà riêng nạn nhân Oswald Mason - Trưởng kế toán Ngân hàng Anh." },
    { "name": "Quả phụ Katebet (Bảo tàng tư nhân)", "code": "12NW", "category": "Nhân chứng", "address": "12 North West St", "desc": "Nhà riêng góa phụ thám hiểm gia Katebet." },
    { "name": "Travis (Phóng viên báo The Times)", "code": "50EC", "category": "Báo chí", "address": "50 East Central St", "desc": "Phóng viên điều tra mảng tin tức khảo cổ." },
    { "name": "Bảo tàng Anh (Khoa Ai Cập)", "code": "38EC", "category": "Bảo tàng", "address": "38 East Central St", "desc": "Viện bảo tàng lưu trữ và giám định cổ vật Ai Cập." },
    { "name": "Đại học Khảo cổ London", "code": "43WC", "category": "Trường học", "address": "43 West Central St", "desc": "Khoa nghiên cứu khảo cổ học thuộc Đại học London." },
    { "name": "Tiệm đồ cổ Ai Cập Oxford", "code": "30EC", "category": "Cửa hàng", "address": "30 East Central St", "desc": "Tiệm mua bán cổ vật Ai Cập tư nhân." }
  ],
  "newspaper": {
    "paper_name": "THE TIMES LONDON",
    "issue_date": "THỨ SÁU, NGÀY 11 THÁNG 4 NĂM 1890",
    "articles": [
      {
        "date": "11 THÁNG 4, 1890",
        "title": "ÁN MẠNG DÃ DƯỠI TẠI BLOOMSBURY",
        "summary": "Ông Oswald Mason, Kế toán trưởng Ngân hàng Anh, bị phát hiện sát hại tại phòng làm việc. Nghi vấn liên quan đến 'Lời nguyền Xác ướp' Katebet.",
        "related_code": "42WC"
      },
      {
        "date": "11 THÁNG 4, 1890",
        "title": "NỘI DUNG MỚI: VỤ ĐỘT NHẬP CỬA HÀNG QUÀ TẶNG EVENSON & CO",
        "summary": "Đêm thứ Tư xảy ra vụ đột nhập cạy khóa cửa sau tiệm Evenson & Co. Gift Store. Không phát hiện đồ đạc bị lấy mất.",
        "related_code": "30EC"
      },
      {
        "date": "11 THÁNG 4, 1890",
        "title": "NỘI DUNG MỚI: CA SĨ VIOLETTE BLUE TẠI OXFORD MUSIC HALL",
        "summary": "Cô Violette Blue biểu diễn các ca khúc mới nhất trong suốt tháng này tại nhà hát Oxford Music Hall. Giá vé từ 1s.",
        "related_code": "50EC"
      },
      {
        "date": "10 THÁNG 4, 1890",
        "title": "AN NINH KHU KHAI QUẬT AI CẬP",
        "summary": "Khu cắm trại thám hiểm Ai Cập được lực lượng canh gác cực kỳ nghiêm ngặt để ngăn chặn trộm cướp.",
        "related_code": "50EC"
      }
    ]
  },
  "questions": {
    "part_1_main_case": [
      {
        "id": "q1",
        "question": "Bản chất thực sự đằng sau chuỗi cái chết bị đồn là 'Lời nguyền Xác ướp Katebet' là gì?",
        "options": [
          "Vụ án mạng đôi do mâu thuẫn tranh chấp và trộm bán cổ vật Toutankhamon",
          "Lời nguyền quỷ dữ Ai Cập có thật",
          "Vụ cướp tài sản thông thường của kẻ lang thang",
          "Vụ tai nạn lao động tại công trường khai quật"
        ],
        "correct_option_index": 0,
        "explanation": "Lời nguyền chỉ là màn kịch do hung thủ dựng lên để che giấu hành vi sát hại Oswald Mason nhằm cướp bản đồ và tuồn bán cổ vật Toutankhamon ra thị trường đen."
      },
      {
        "id": "q2",
        "question": "Chi tiết đặc biệt nào về khu cắm trại khai quật Ai Cập tạo chứng cứ ngoại phạm chắc chắn cho phóng viên Travis?",
        "options": [
          "Khu cắm trại được canh gác cực kỳ nghiêm ngặt để ngăn chặn trộm cướp",
          "Travis bị cảnh sát bắt giữ từ trước",
          "Travis đang ở New York đưa tin dịch bệnh",
          "Travis thi đấu bóng đá tại New Zealand"
        ],
        "correct_option_index": 0,
        "explanation": "Chi tiết đính chính xác nhận trại khai quật được bảo vệ nghiêm ngặt khiến Travis không thể tiếp cận lăng mộ hay nạn nhân để gây ra vụ án đầu tiên."
      },
      {
        "id": "q3",
        "question": "Cổ vật bị đánh tráo tại hiện trường thực chất thuộc về lăng mộ nào?",
        "options": [
          "Vua Toutankhamon",
          "Nữ vương Katebet",
          "Ramses II",
          "Pharaoh Khufu"
        ],
        "correct_option_index": 0,
        "explanation": "Chuyên gia bảo tàng 38EC đính chính cổ vật bị đánh tráo thuộc về Vua Toutankhamon chứ không phải Ramses II hay Katebet."
      },
      {
        "id": "q4",
        "question": "Quảng cáo bổ sung trên nhật báo The Times chỉ ra địa điểm biểu diễn của ca sĩ Violette Blue ở đâu?",
        "options": [
          "Nhà hát Oxford Music Hall",
          "Triển lãm Irish Exhibition Olympia",
          "Giáo đường St. Mary Woolnoth",
          "Bảo tàng Anh"
        ],
        "correct_option_index": 0,
        "explanation": "Mục giải trí trên báo The Times đính chính quảng cáo ca sĩ Violette Blue biểu diễn tại Oxford Music Hall."
      },
      {
        "id": "q5",
        "question": "Ai là người âm mưu bán lén các cổ vật quý Ai Cập ra thị trường đen tại đường Oxford?",
        "options": [
          "Giáo sư Windibank và đồng mưu trong đoàn thám hiểm",
          "Phóng viên Travis",
          "Bà quả phụ Katebet",
          "Cảnh sát Lane"
        ],
        "correct_option_index": 0,
        "explanation": "Giáo sư Windibank đã lén lút tuồn các cổ vật giá trị ra thị trường đen tư nhân ở đường Oxford."
      }
    ],
    "part_2_side_mysteries": [
      {
        "id": "q6",
        "question": "Vợ của nạn nhân Oswald Mason tên là gì?",
        "options": [
          "Rose Mason",
          "Katebet",
          "Lucretia Prim",
          "Violette Blue"
        ],
        "correct_option_index": 0,
        "explanation": "Báo chí và lời khai xác nhận vợ nạn nhân tên là Rose Mason."
      },
      {
        "id": "q7",
        "question": "Trợ lý Turnbull đã có hành động gì sau khi xảy ra bất đồng lợi nhuận cổ vật với Windibank?",
        "options": [
          "Giận dữ nộp đơn xin từ chức khỏi Đại học",
          "Báo cảnh sát Scotland Yard",
          "Bỏ trốn sang Ai Cập",
          "Viết bài tố cáo lên báo The Times"
        ],
        "correct_option_index": 0,
        "explanation": "Trợ lý Turnbull đã đột ngột giận dữ nộp đơn xin từ chức khỏi Đại học sau khi xảy ra tranh chấp với Windibank."
      },
      {
        "id": "q8",
        "question": "Tên nữ vương Ai Cập được đặt tên cho đoàn thám hiểm khai quật là gì?",
        "options": [
          "Katebet",
          "Nefertiti",
          "Cleopatra",
          "Hatshepsut"
        ],
        "correct_option_index": 0,
        "explanation": "Đoàn thám hiểm khai quật lăng mộ nữ vương Katebet."
      },
      {
        "id": "q9",
        "question": "Mục tin tức nào được bổ sung liên quan đến tiệm quà tặng Evenson & Co?",
        "options": [
          "Vụ đột nhập cạy khóa cửa sau tiệm quà tặng Evenson & Co",
          "Vụ cháy tiệm quà tặng",
          "Vụ mua bán trang sức trộm cắp",
          "Vụ cướp két sắt"
        ],
        "correct_option_index": 0,
        "explanation": "Báo The Times bổ sung mẩu tin về vụ đột nhập cạy khóa cửa sau tại tiệm Evenson & Co."
      },
      {
        "id": "q10",
        "question": "Vật dùng làm hung khí đánh chết Oswald Mason tại phòng làm việc là gì?",
        "options": [
          "Vật nặng nện vào đầu",
          "Súng ngắn Derringer",
          "Thuốc độc Xyanua",
          "Dao găm Ai Cập"
        ],
        "correct_option_index": 0,
        "explanation": "Cảnh sát kết luận Mason tử vong do bị một đòn đánh rất mạnh bằng vật nặng vào đầu."
      }
    ]
  },
  "solution_summary": {
    "mastermind": "Giáo sư Windibank",
    "motive": "Sát hại Oswald Mason để cướp bản đồ lăng mộ và dựng lên kịch bản Lời Nguyền Xác Ướp che giấu việc buôn lén cổ vật Toutankhamon.",
    "full_truth": "Giáo sư Windibank là kẻ chủ mưu lợi dụng tin đồn mị dân về 'Lời nguyền của Xác ướp Katebet' để thực hiện tội ác. Nhận thấy Oswald Mason sở hữu bản đồ định vị vị trí các lăng mộ cổ vật vô giá, Windibank đã đột nhập phòng làm việc sát hại Mason và lấy đi bản đồ. Hắn đánh tráo các báu vật của Vua Toutankhamon thành cổ vật Katebet rồi đem tuồn bán lén cho các nhà sưu tập tư nhân trên đường Oxford. Nhờ các mẩu tin đính chính trên báo The Times (ngoại phạm của Travis nhờ khu vực trại được canh gác nghiêm ngặt), Sherlock Holmes đã bóc gỡ màn kịch mượn danh tâm linh để vạch trần kẻ sát nhân cướp cổ vật!"
  },
  "directory": [
    { "name": "Oswald Mason", "category": "Nạn nhân", "address": "42 WC Tottenham", "code": "42WC", "desc": "Trưởng kế toán Ngân hàng Anh bị giết tại phòng riêng." },
    { "name": "Rose Mason", "category": "Nhân chứng", "address": "42 WC Tottenham", "code": "42WC", "desc": "Vợ nạn nhân Oswald Mason." },
    { "name": "Giáo sư Windibank", "category": "Giáo sư khảo cổ", "address": "12 NW Gower St", "code": "12NW", "desc": "Trưởng đoàn thám hiểm lăng mộ Katebet." },
    { "name": "Phóng viên Travis", "category": "Nhà báo", "address": "38 EC Fleet St", "code": "38EC", "desc": "Phóng viên tờ The Times theo dõi lời nguyền Ai Cập." },
    { "name": "Violette Blue", "category": "Ca sĩ", "address": "15 WC Oxford", "code": "15WC", "desc": "Nữ ca sĩ biểu diễn tại Oxford Music Hall." },
    { "name": "Cửa hàng đồ cổ Evenson & Co", "category": "Cửa hàng đồ cổ", "address": "29 WC Strand", "code": "29WC", "desc": "Nơi xảy ra vụ đột nhập cửa sau cạy khóa." }
  ]
};
