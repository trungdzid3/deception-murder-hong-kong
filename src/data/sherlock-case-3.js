export const SHERLOCK_CASE_3 = {
  "case_id": "sherlock_case_3",
  "title": "Vụ án 3: Lời Nguyền Của Xác Ướp (The Mummy's Curse)",
  "author": "Ystari & Raymond Edwards (SHCD Errata Edition)",
  "setting_date": "Ngày 11 tháng 4 năm 1890",
  "intro": {
    "story_text": "Ngày 11 tháng 4 năm 1890, giới thượng lưu và giới khảo cổ học London xôn xao trước chuỗi cái chết kỳ quặc giội xuống các thành viên đoàn thám hiểm khai quật lăng mộ nữ vương Ai Cập Katebet. Báo chí giật tít về 'Lời nguyền của Xác ướp' khi ông Oswald Mason - Trưởng kế toán Ngân hàng Anh và là nhà tài trợ đoàn thám hiểm - được phát hiện bị đập chết thảm khốc tại phòng làm việc 42 Tottenham Court Road. Trong khi dư luận hoảng loạn tin vào sức mạnh siêu nhiên của lời nguyền Ai Cập cổ đại, Sherlock Holmes khẳng định đây chỉ là màn kịch tàn nhẫn được che đậy khéo léo để che giấu các vụ giết người cướp cổ vật và thủ tiêu mâu thuẫn học thuật!",
    "initial_clues": [
      "Nạn nhân Oswald Mason bị đập chết bằng vật nặng vào đầu lúc 10:00 tối tại phòng làm việc 42 Tottenham Court Road.",
      "Kẻ đột nhập vào nhà bằng cửa sổ tầng trên, phòng làm việc có dấu vết xáo trộn mạnh cho thấy đã xảy ra xô xát.",
      "Hiện trường thu được thông tin nhà phóng viên báo The Times (Travis) liên tục bị ngăn cản tiếp cận lăng mộ Katebet.",
      "Văn bản khảo cổ đề cập đến quan tài Nữ vương Katebet và bảo vật vua Toutankhamon."
    ],
    "unlocked_nodes": ["42WC", "12NW", "38EC"]
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
      "content": "Bà quả phụ quyến rũ tuyệt đẹp tiếp đón thám tử trong phòng khách tràn ngập cổ vật Ai Cập. Cô tiết lộ mâu thuẫn nảy lửa trong nội bộ đoàn khai quật: 'Chồng tôi và Giáo sư Windibank tranh cãi nảy lửa về quyền sở hữu các cổ vật của Toutankhamon. Windibank muốn bán lén cổ vật ra thị trường đen cho các nhà sưu tập tư nhân ở London'.",
      "unlocks": {
        "nodes": ["38EC", "30EC"],
        "evidence_items": ["Mâu thuẫn nảy lửa về cổ vật Toutankhamon giữa đoàn thám hiểm và Giáo sư Windibank."]
      },
      "key_hints": ["Giáo sư Windibank âm mưu tuồn cổ vật Ai Cập ra thị trường đen."]
    },
    "50EC": {
      "id": "50EC",
      "title": "Phóng viên báo The Times (Travis)",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "x": 610, "y": 310 },
      "content": "Phóng viên Travis bức xúc trình bày: 'Mọi người nghi ngờ tôi là hung thủ vì tôi theo sát đoàn thám hiểm. Nhưng sự thật là hàng rào an ninh quanh khu vực khai quật vô cùng nghiêm ngặt. Dù tôi đã nhiều lần xin phép nhưng họ tuyệt đối không cho tôi bước chân vào lăng mộ. Tôi không thể nào tiếp cận nạn nhân hay lăng mộ để gây án được!'.",
      "unlocks": {
        "nodes": ["43WC"],
        "evidence_items": ["Phóng viên Travis có chứng cứ ngoại phạm vì bị vây chặt bởi hàng rào an ninh nghiêm ngặt."]
      },
      "key_hints": ["Travis không thể lọt vào khu vực lăng mộ hay gây án, loại trừ khả năng Travis là hung thủ."]
    },
    "38EC": {
      "id": "38EC",
      "title": "Viện Bảo Tàng Anh (British Museum - Phòng Ai Cập)",
      "area": "EC",
      "type": "clue_inspection",
      "map_coords": { "x": 550, "y": 340 },
      "content": "Chuyên gia bảo tàng giám định chiếc bùa hộ mệnh thu được và khẳng định: 'Chiếc bùa này không phải của Nữ vương Katebet mà thuộc về lăng mộ Vua Toutankhamon (King Tut). Nó đã được đánh tráo tinh vi nhằm dựng lên vụ án Lời nguyền siêu nhiên hù dọa dư luận'.",
      "unlocks": {
        "nodes": ["30EC"],
        "evidence_items": ["Cổ vật bị đánh tráo thuộc về Toutankhamon để dựng hiện trường giả Lời Nguyền."]
      },
      "key_hints": ["Vụ án là mạng kịch đánh tráo cổ vật Toutankhamon thành Lời Nguyền Xác Ướp."]
    },
    "43WC": {
      "id": "43WC",
      "title": "Đại học tổng hợp London (Department of Archaeology)",
      "area": "WC",
      "type": "suspect_interview",
      "map_coords": { "x": 370, "y": 310 },
      "content": "Đại diện khoa khảo cổ xác nhận: Trợ lý Turnbull đã bất ngờ xin từ chức khỏi Đại học sau khi xảy ra bất đồng sâu sắc với Oswald Mason và Windibank về việc phân chia lợi nhuận bán cổ vật.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Trợ lý Turnbull bất ngờ từ chức vì bất đồng lợi nhuận cổ vật."]
      },
      "key_hints": ["Mâu thuẫn lợi nhuận mua bán cổ vật Ai Cập giữa các thành viên."]
    },
    "30EC": {
      "id": "30EC",
      "title": "Cửa hàng đồ cổ Ai Cập đường Oxford",
      "area": "EC",
      "type": "location_search",
      "map_coords": { "x": 510, "y": 300 },
      "content": "Chủ tiệm đồ cổ khai báo: 'Một người đàn ông tự xưng là đại diện đoàn Katebet đã bán lén cho tôi 3 bức tượng nhỏ Ai Cập với giá rất cao. Người này có trình độ chuyên môn rất giỏi về đồ cổ Ai Cập'.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Cổ vật lăng mộ bị tuồn bán lén tại đường Oxford."]
      },
      "key_hints": ["Cổ vật bị tuồn bán lén bởi thành viên chuyên môn trong đoàn khai quật."]
    }
  },
  "directory": [
    { "name": "Mason, Oswald (Kế toán trưởng)", "code": "42WC", "category": "Nạn nhân", "address": "42 Tottenham Court Rd", "desc": "Nhà riêng nạn nhân Oswald Mason - Trưởng kế toán Bank of England." },
    { "name": "Quả phụ Katebet (Bảo tàng tư nhân)", "code": "12NW", "category": "Nhân chứng", "address": "12 North West St", "desc": "Nhà riêng góa phụ thám hiểm gia Katebet." },
    { "name": "Travis (Phóng viên báo The Times)", "code": "50EC", "category": "Báo chí", "address": "50 East Central St", "desc": "Phóng viên điều tra mảng tin tức khảo cổ." },
    { "name": "British Museum (Khoa Ai Cập)", "code": "38EC", "category": "Bảo tàng", "address": "38 East Central St", "desc": "Viện bảo tàng lưu trữ và giám định cổ vật Ai Cập." },
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
        "date": "10 THÁNG 4, 1890",
        "title": "TRIỂN LÃM CỔ VẬT AI CẬP TẠI OLYMPIA",
        "summary": "Đoàn thám hiểm trưng bày các cổ vật được cho là của Nữ vương Katebet và Vua Toutankhamon.",
        "related_code": "38EC"
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
        "question": "Mục tiêu chính mà hung thủ lấy đi khi sát hại Oswald Mason tại 42 Tottenham Court Road là gì?",
        "options": [
          "Cuộn bản đồ định vị lăng mộ cổ vật Ai Cập",
          "Toàn bộ tiền mặt trong két sắt",
          "Bộ trang sức kim cương của phu nhân Rose",
          "Chiếc đồng hồ bỏ túi vàng"
        ],
        "correct_option_index": 0,
        "explanation": "Chiếc két sắt không mất tiền mặt mà bị lấy mất cuộn bản đồ định vị vị trí lăng mộ Ai Cập."
      },
      {
        "id": "q3",
        "question": "Cổ vật bị đánh tráo tại hiện trường thực chất thuộc về lăng mộ nào?",
        "options": [
          "Vua Toutankhamon (Ramses II / King Tut)",
          "Nữ vương Katebet",
          "Nữ hoàng Cleopatra",
          "Pharaoh Khufu"
        ],
        "correct_option_index": 0,
        "explanation": "Chuyên gia bảo tàng 38EC xác nhận cổ vật bị đánh tráo thuộc về Toutankhamon chứ không phải Katebet."
      },
      {
        "id": "q4",
        "question": "Tại sao phóng viên Travis báo The Times lại có chứng cứ ngoại phạm chắc chắn?",
        "options": [
          "Vì bị lực lượng an ninh vây chặt bên ngoài và tuyệt đối không được bước vào lăng mộ",
          "Vì đang ở New York đưa tin dịch bệnh",
          "Vì bị cảnh sát bắt giữ từ trước",
          "Vì đang thi đấu bóng đá tại New Zealand"
        ],
        "correct_option_index": 0,
        "explanation": "Travis xác nhận hàng rào an ninh nghiêm ngặt khiến ông không thể tiếp cận lăng mộ hay nạn nhân."
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
        "question": "Trợ lý Turnbull đã có hành động gì sau khi xảy ra bất đồng lợi nhuận cổ vật?",
        "options": [
          "Bất ngờ nộp đơn xin từ chức khỏi Đại học",
          "Báo cảnh sát Scotland Yard",
          "Bỏ trốn sang Ai Cập",
          "Viết bài tố cáo lên báo The Times"
        ],
        "correct_option_index": 0,
        "explanation": "Trợ lý Turnbull đã đột ngột nộp đơn xin từ chức khỏi Đại học sau khi xảy ra tranh chấp."
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
        "question": "Sự kiện biểu diễn nổi bật nào diễn ra tại nhà hát Oxford Music Hall theo tin báo chí?",
        "options": [
          "Miss Violette Blue hát các ca khúc mới nhất",
          "Bắt giữ băng nhôm Anarchist",
          "Đua bóng đá New Zealand",
          "Triển lãm cừu giống mới"
        ],
        "correct_option_index": 0,
        "explanation": "Nhật báo The Times đăng tin Miss Violette Blue biểu diễn tại Oxford Music Hall."
      },
      {
        "id": "q10",
        "question": "Vật dùng làm hung khí đánh chết Oswald Mason tại phòng làm việc là gì?",
        "options": [
          "Vật nặng nện vào đầu (Tượng đập đầu)",
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
    "full_truth": "Giáo sư Windibank là kẻ chủ mưu lợi dụng tin đồn mị dân về 'Lời nguyền của Xác ướp Katebet' để thực hiện tội ác. Nhận thấy Oswald Mason sở hữu bản đồ định vị vị trí các lăng mộ cổ vật vô giá, Windibank đã đột nhập phòng làm việc sát hại Mason và lấy đi bản đồ. Hắn đánh tráo các báu vật của Vua Toutankhamon thành cổ vật Katebet rồi đem tuồn bán lén cho các nhà sưu tập tư nhân trên đường Oxford. Nhờ sự suy luận sắc bén, Sherlock Holmes đã bóc gỡ màn kịch mượn danh tâm linh để vạch trần kẻ sát nhân cướp cổ vật!"
  }
};
