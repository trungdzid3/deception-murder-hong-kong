export const SHERLOCK_CASE_6 = {
  "case_id": "sherlock_case_6",
  "title": "Vụ án 6: Bản Thiết Kế Bị Đánh Cắp (The Stolen Blueprint)",
  "author": "Sherlock Holmes Fan Case (Nhập môn nâng cao)",
  "setting_date": "Thứ Ba, ngày 14 tháng 10 năm 1890",
  "holmes_clues": 3,
  "scoring": {
    "part1_max": 100,
    "part2_max": 30,
    "total_max": 130,
    "penalty_per_extra_clue": 5,
    "note": "Holmes đạt 100 điểm với 3 bước đi tối ưu. Điểm tối đa của người chơi là 130 điểm. Trừ 5 điểm cho mỗi địa điểm thừa so với Holmes."
  },
  "intro": {
    "story_text": "Sáng thứ Ba, ngày 14 tháng 10 năm 1890, Arthur Pendelton - một sinh viên cơ khí xuất sắc - hốt hoảng lao vào căn hộ 221B Baker Street. Bản thiết kế hệ thống điều khiển vòng kín dùng cho động cơ hơi nước của anh đã bị đánh cắp ngay trong đêm, chỉ vài tiếng trước kỳ nộp bài tốt nghiệp quan trọng. Cửa sổ phòng thí nghiệm bị đập vỡ, ngăn kéo bị cạy tung. Hai nghi phạm duy nhất biết về dự án bí mật này là Thomas Higgins - gã sinh viên ganh tị - và chính Giáo sư Sterling - người hướng dẫn đã bị từ chối đứng tên đồng tác giả tuần trước.",
    "initial_clues": [
      "Cửa sổ phòng thí nghiệm 10WC bị đập vỡ và ngăn kéo bàn của Arthur bị cạy tung trong đêm qua.",
      "Bản thiết kế hệ thống điều khiển vòng kín dùng cho động cơ hơi nước biến mất.",
      "Thomas Higgins và Giáo sư Sterling là 2 người duy nhất biết chi tiết dự án.",
      "Giáo sư Sterling vừa bị Arthur từ chối đứng tên đồng tác giả tuần trước."
    ],
    "unlocked_nodes": ["10WC", "14SW", "08EC"]
  },
  "nodes": {
    "10WC": {
      "id": "10WC",
      "title": "Phòng thí nghiệm Cơ khí (Hiện trường vụ án)",
      "area": "WC",
      "type": "crime_scene",
      "map_coords": { "x": 390, "y": 310 },
      "content": "Ngăn kéo bàn của Arthur bị cạy tung bằng vật cứng. Cửa sổ kính nhìn ra sân cỏ phía sau bị đập vỡ, tạo ra một lỗ hổng vừa đủ để thò tay vào mở chốt. Tuy nhiên, toàn bộ những mảnh kính vỡ đều rơi lả tả trên bãi cỏ bên ngoài, sàn nhà bên trong lại hoàn toàn sạch sẽ. Điều này chứng minh cửa sổ bị đập từ BÊN TRONG ra ngoài! Ngay cạnh rãnh trượt ngăn kéo, có một vệt tro màu xám trắng rất mịn, tỏa ra mùi thơm ngầy ngậy đặc trưng của một điếu xì gà đắt tiền rụng xuống chưa quá 12 tiếng.",
      "unlocks": {
        "nodes": ["08EC", "12NW", "17EC"],
        "evidence_items": [
          "Cửa sổ bị đập vỡ từ bên trong (mảnh kính rơi ra bãi cỏ ngoài, sàn trong sạch sẽ) – hung thủ có chìa khóa.",
          "Vệt tàn xì gà đắt tiền mùi thơm ngầy ngậy cạnh ngăn kéo bị cạy."
        ]
      },
      "key_hints": [
        "Kính vỡ từ bên trong loại trừ hoàn toàn đột nhập từ bên ngoài.",
        "Tàn xì gà đắt tiền chỉ thẳng đến người dùng xì gà cao cấp."
      ]
    },
    "14SW": {
      "id": "14SW",
      "title": "Căn hộ của sinh viên Thomas Higgins",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "x": 180, "y": 580 },
      "content": "Căn hộ tồi tàn và bừa bộn. Higgins nhồi những nhúm thuốc lá sợi rẻ tiền vào một chiếc tẩu gỗ cộc kệch. Anh ta gắt gỏng: 'Tôi ăn cắp bản thiết kế đó làm gì? Các ma trận điều khiển của nó tôi còn chẳng hiểu! Tối qua tôi ở quán rượu Cáo Trắng (22WC) đến tận nửa đêm. Các anh đi mà hỏi Giáo sư Sterling ấy, viện trợ nghiên cứu của ông ta sắp bị cắt sạch rồi!' Thuốc lá sợi rẻ tiền loại trừ hoàn toàn Higgins là chủ nhân của tàn xì gà đắt tiền tại hiện trường.",
      "unlocks": {
        "nodes": ["22WC"],
        "evidence_items": [
          "Higgins hút thuốc lá sợi rẻ tiền – loại trừ hắn khỏi chủ nhân tàn xì gà tại hiện trường.",
          "Higgins khai đang ở Quán Cáo Trắng tối qua, và gợi ý điều tra Giáo sư Sterling."
        ]
      },
      "key_hints": ["Thuốc lá sợi rẻ tiền loại trừ Higgins. Hắn không phải hung thủ."]
    },
    "08EC": {
      "id": "08EC",
      "title": "Văn phòng Giáo sư Sterling",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "x": 560, "y": 280 },
      "content": "Giáo sư Sterling bệ vệ ngồi sau bàn làm việc bằng gỗ sồi, tay kẹp một điếu xì gà Cuba tỏa khói nghi ngút. Khi hỏi về tối qua, ông ta tuyên bố làm việc đến khuya tại đây nhưng không ai xác nhận điều đó. Quan sát kỹ, trên mu bàn tay phải của Giáo sư có một vết xước rướm máu tươi còn mới. Ông ta vội giấu tay xuống gầm bàn. Vết xước khớp hoàn toàn với vết thương do mảnh kính cứa khi đập cửa sổ từ bên trong phòng thí nghiệm.",
      "unlocks": {
        "nodes": ["12NW", "17EC"],
        "evidence_items": [
          "Giáo sư Sterling hút xì gà Cuba đắt tiền – trùng khớp với tàn xì gà tại hiện trường.",
          "Vết xước mới trên mu bàn tay phải khớp với thương tích do mảnh kính gây ra khi đập cửa sổ."
        ]
      },
      "key_hints": [
        "Xì gà Cuba + vết xước mới = bằng chứng trực tiếp Giáo sư Sterling là hung thủ.",
        "Không có ai xác nhận lời khai tối qua của Sterling."
      ]
    },
    "22WC": {
      "id": "22WC",
      "title": "Quán rượu Cáo Trắng",
      "area": "WC",
      "type": "suspect_interview",
      "map_coords": { "x": 420, "y": 350 },
      "content": "Ông chủ quán lau ly, gật gù: 'Thomas Higgins hả? Tối qua nó ngồi ở góc kia uống rượu ực ực từ 8 giờ tối đến gần 1 giờ sáng mới lảo đảo đi về. Nó cứ lải nhải phàn nàn về mấy phương trình tự động hóa của thằng nhóc Arthur'. Xác nhận chứng cứ ngoại phạm hoàn hảo cho Thomas Higgins.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Thomas Higgins có ngoại phạm chắc chắn: uống rượu tại Cáo Trắng từ 8 giờ tối đến 1 giờ sáng."]
      },
      "key_hints": ["Higgins được loại trừ hoàn toàn. Sterling là nghi phạm duy nhất còn lại."]
    },
    "12NW": {
      "id": "12NW",
      "title": "Phòng Giáo vụ Đại học UCL",
      "area": "NW",
      "type": "clue_inspection",
      "map_coords": { "x": 150, "y": 270 },
      "content": "Trưởng phòng Giáo vụ mở sổ cái tài chính: 'Khoa Cơ khí của Giáo sư Sterling đang gặp khủng hoảng nghiêm trọng. Nếu cuối tháng này ông ấy không trình làng được một phát minh hoặc bằng sáng chế mới nào có tính ứng dụng cao, hội đồng quản trị sẽ cắt 100% ngân sách và đóng cửa phòng thí nghiệm của ông ấy.'",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Giáo sư Sterling sẽ bị cắt 100% ngân sách và đóng cửa phòng thí nghiệm nếu không có phát minh mới cuối tháng này."]
      },
      "key_hints": ["Động cơ bức thiết của Sterling: chiếm đoạt phát minh để cứu phòng thí nghiệm."]
    },
    "17EC": {
      "id": "17EC",
      "title": "Cửa hàng Xì gà Havana",
      "area": "EC",
      "type": "clue_inspection",
      "map_coords": { "x": 590, "y": 270 },
      "content": "Người bán hàng kiểm tra lọ tro mà Holmes mang tới: 'Mùi hương và chất tro này? Đây là loại xì gà Partagas thượng hạng nhập từ Cuba. Khách quen mua loại này của tôi không nhiều, Giáo sư Sterling là một trong số những người luôn đặt hàng đều đặn mỗi tuần.' Xác nhận thêm bằng chứng liên kết trực tiếp tàn xì gà tại hiện trường với Giáo sư Sterling.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Tàn xì gà Partagas tại hiện trường được xác nhận thuộc về Giáo sư Sterling – khách quen duy nhất mua hàng tuần."]
      },
      "key_hints": ["Bằng chứng xì gà hoàn toàn xác nhận Sterling có mặt tại hiện trường."]
    },
    "13SW": {
      "id": "13SW",
      "title": "Sở Cảnh sát Scotland Yard (Thanh tra Lestrade)",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "x": 200, "y": 600 },
      "content": "Thanh tra Lestrade ngáp dài: 'Vụ vỡ cửa kính ở trường đại học à? Chắc chắn là do bọn trộm vặt quanh phố nhòm ngó đồ đồng nát thôi. Hoặc là cậu sinh viên Higgins kia ghen tị nên đập phá. Tôi sẽ phái người đi bắt Higgins dọa cho một trận là nó khai ngay!' Lestrade vội vã quy kết cho Higgins mà không có bằng chứng – phán đoán sai lầm điển hình.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Lestrade kết luận vội vàng quy tội cho Higgins mà không có bằng chứng."]
      },
      "key_hints": ["Lời kết luận vội của Lestrade chỉ là đánh lạc hướng điều tra."]
    }
  },
  "directory": [
    { "name": "Phòng thí nghiệm Cơ khí UCL", "code": "10WC", "category": "Trường học", "address": "10 West Central St", "desc": "Hiện trường vụ đánh cắp bản thiết kế của Arthur Pendelton." },
    { "name": "Higgins, Thomas (Sinh viên)", "code": "14SW", "category": "Cư dân", "address": "14 South West St", "desc": "Sinh viên cùng khóa ganh tị với Arthur." },
    { "name": "Sterling (Giáo sư)", "code": "08EC", "category": "Giáo sư", "address": "08 East Central St", "desc": "Văn phòng Giáo sư Sterling, người hướng dẫn của Arthur." },
    { "name": "Quán rượu Cáo Trắng", "code": "22WC", "category": "Quán rượu", "address": "22 West Central St", "desc": "Nơi sinh viên tụ tập sau giờ học." },
    { "name": "Giáo vụ Đại học UCL", "code": "12NW", "category": "Cơ quan", "address": "12 North West St", "desc": "Phòng hành chính quản lý ngân sách các khoa." },
    { "name": "Cửa hàng Xì gà Havana", "code": "17EC", "category": "Cửa hàng", "address": "17 East Central St", "desc": "Tiệm bán xì gà cao cấp nhập khẩu Cuba." },
    { "name": "Scotland Yard (Lestrade)", "code": "13SW", "category": "Cơ quan", "address": "13 South West St", "desc": "Sở cảnh sát London." }
  ],
  "newspaper": {
    "paper_name": "THE TIMES LONDON",
    "issue_date": "THỨ BA, NGÀY 14 THÁNG 10 NĂM 1890",
    "articles": [
      {
        "date": "14 THÁNG 10, 1890",
        "title": "ĐÁNH CẮP TÀI SẢN TRÍ TUỆ TẠI ĐẠI HỌC UCL",
        "summary": "Phòng thí nghiệm Cơ khí Đại học UCL bị đột nhập ban đêm. Bản thiết kế hệ thống điều khiển động cơ hơi nước của sinh viên Arthur Pendelton bị đánh cắp trước kỳ nộp bài tốt nghiệp.",
        "related_code": "10WC"
      },
      {
        "date": "13 THÁNG 10, 1890",
        "title": "KHỦNG HOẢNG NGÂN SÁCH NGHIÊN CỨU TẠI UCL",
        "summary": "Hội đồng quản trị UCL chuẩn bị đánh giá lại ngân sách các khoa. Nhiều phòng thí nghiệm đứng trước nguy cơ đóng cửa nếu không đạt kết quả nghiên cứu cuối tháng.",
        "related_code": "12NW"
      }
    ]
  },
  "questions": {
    "part_1_main_case": [
      {
        "id": "q1",
        "question": "Kẻ đã đánh cắp bản thiết kế của Arthur Pendelton là ai?",
        "options": [
          "Giáo sư Sterling (người hướng dẫn)",
          "Thomas Higgins (sinh viên cùng khóa)",
          "Một tên trộm bất kỳ",
          "Arthur Pendelton tự dựng cảnh"
        ],
        "correct_option_index": 0,
        "points": 25,
        "explanation": "Giáo sư Sterling là hung thủ: có mùi xì gà Cuba trùng tàn xì gà hiện trường, vết xước do kính cứa, và động cơ bức thiết (nguy cơ cắt ngân sách)."
      },
      {
        "id": "q2",
        "question": "Cửa sổ tại phòng thí nghiệm bị đập vỡ từ phía nào?",
        "options": [
          "Từ bên trong ra ngoài (mảnh kính rơi trên bãi cỏ bên ngoài)",
          "Từ bên ngoài vào trong (mảnh kính rơi trên sàn trong phòng)",
          "Không thể xác định được",
          "Cả hai chiều cùng lúc"
        ],
        "correct_option_index": 0,
        "points": 25,
        "explanation": "Toàn bộ mảnh kính rơi ra bãi cỏ bên ngoài, sàn bên trong sạch sẽ hoàn toàn → đập từ bên trong. Hung thủ có chìa khóa hoặc được vào từ cửa chính."
      },
      {
        "id": "q3",
        "question": "Động cơ thực sự khiến hung thủ đánh cắp bản thiết kế là gì?",
        "options": [
          "Chiếm đoạt phát minh để giữ lại ngân sách nghiên cứu của phòng thí nghiệm",
          "Thù hằn cá nhân với Arthur Pendelton",
          "Bán bản thiết kế cho đối thủ cạnh tranh",
          "Phá hoại buổi nộp bài tốt nghiệp"
        ],
        "correct_option_index": 0,
        "points": 25,
        "explanation": "Phòng Giáo vụ UCL xác nhận Khoa Cơ khí của Sterling sẽ bị cắt 100% ngân sách nếu không có phát minh mới cuối tháng."
      },
      {
        "id": "q4",
        "question": "Bằng chứng vật lý nào tại hiện trường liên kết trực tiếp với hung thủ?",
        "options": [
          "Vệt tàn xì gà Partagas đắt tiền cạnh ngăn kéo bị cạy",
          "Dấu giày đế cao su trên bệ cửa sổ",
          "Mảnh vải từ áo khoác trên mảnh kính vỡ",
          "Sợi tóc tìm thấy trong ngăn kéo"
        ],
        "correct_option_index": 0,
        "points": 25,
        "explanation": "Tàn xì gà Partagas Cuba được tiệm 17EC xác nhận là đặc trưng của Giáo sư Sterling, người đặt hàng đều đặn mỗi tuần."
      }
    ],
    "part_2_side_mysteries": [
      {
        "id": "q5",
        "question": "Thomas Higgins đã ở đâu vào khoảng thời gian xảy ra vụ án?",
        "options": [
          "Uống rượu tại Quán Cáo Trắng từ 8 giờ tối đến 1 giờ sáng",
          "Nằm ngủ tại nhà suốt cả tối",
          "Làm bài tập nhóm tại thư viện UCL",
          "Đi xem biểu diễn tại nhà hát"
        ],
        "correct_option_index": 0,
        "points": 10,
        "explanation": "Ông chủ Quán Cáo Trắng (22WC) xác nhận Higgins ở đó liên tục từ 8 giờ tối đến gần 1 giờ sáng."
      },
      {
        "id": "q6",
        "question": "Vết xước trên mu bàn tay phải của Giáo sư Sterling do đâu mà có?",
        "options": [
          "Do mảnh kính cứa tay khi đập vỡ cửa sổ từ bên trong",
          "Do tai nạn khi cắt nguyên liệu thí nghiệm",
          "Do mèo cào khi ông vuốt ve",
          "Do bị ngã trên đường đi làm"
        ],
        "correct_option_index": 0,
        "points": 10,
        "explanation": "Vết xước mới còn rướm máu trùng khớp với thương tích do mảnh kính gây ra khi đập cửa sổ từ bên trong phòng thí nghiệm."
      },
      {
        "id": "q7",
        "question": "Khoa Cơ khí của UCL đang đối mặt với thảm họa gì vào cuối tháng này?",
        "options": [
          "Bị cắt 100% ngân sách nghiên cứu và đóng cửa phòng thí nghiệm",
          "Bị sáp nhập vào khoa khác",
          "Bị mất quyền cấp bằng tốt nghiệp",
          "Bị thanh tra vì nghi ngờ gian lận học thuật"
        ],
        "correct_option_index": 0,
        "points": 10,
        "explanation": "Phòng Giáo vụ UCL (12NW) xác nhận hội đồng sẽ cắt 100% ngân sách và đóng cửa phòng thí nghiệm nếu không có phát minh mới."
      }
    ]
  },
  "solution_summary": {
    "mastermind": "Giáo sư Sterling",
    "motive": "Chiếm đoạt bản thiết kế hệ thống điều khiển vòng kín của Arthur để nộp như phát minh của mình, nhằm cứu Khoa Cơ khí khỏi bị cắt 100% ngân sách và đóng cửa cuối tháng.",
    "holmes_optimal_path": ["10WC", "12NW", "08EC"],
    "holmes_clue_count": 3,
    "full_truth": "Giáo sư Sterling biết rõ bản thiết kế của Arthur là phát minh xuất sắc duy nhất có thể cứu ngân sách phòng thí nghiệm khỏi bị cắt hoàn toàn. Sau khi bị Arthur từ chối đứng tên đồng tác giả, Sterling quyết định lén vào phòng thí nghiệm bằng chìa khóa cùng của, đập vỡ cửa sổ từ BÊN TRONG để tạo hiện trường đột nhập giả, và lấy đi bản thiết kế. Tuy nhiên khi đập kính, Sterling bị mảnh kính cứa tay để lại vết xước. Thói quen hút xì gà Partagas Cuba đắt tiền của Sterling – không ai ngờ – lại để lại dấu vết trực tiếp ngay cạnh ngăn kéo bị cạy. Nhờ 3 bước suy luận: kính vỡ từ bên trong (10WC) → động cơ bức thiết (12NW) → xì gà và vết xước của Sterling (08EC), Holmes đã phá án chỉ trong một buổi sáng!"
  }
};
