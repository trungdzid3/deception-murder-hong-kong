export const SHERLOCK_CASE_1 = {
  "case_id": "sherlock_case_1",
  "title": "Vụ án 1: Bức Tranh Bị Đánh Tráo (The Swapped Canvas)",
  "author": "Sherlock Holmes Fan Case (Tân thủ)",
  "setting_date": "Ngày 10 tháng 9 năm 1890",
  "intro": {
    "story_text": "Sáng thứ Tư, ngày 10 tháng 9 năm 1890, Ngài Archibald - chủ sở hữu Phòng tranh Archibald danh giá bậc nhất London - hớt hải tìm đến 221B Baker Street. Kiệt tác duy nhất 'Hoàng hôn trên sông Thames' của danh họa Turner đã bị đánh tráo thành hàng giả ngay trước buổi đấu giá quốc tế lớn nhất thập kỷ! Phòng tranh được khóa cẩn thận từ bên trong, không có dấu hiệu cạy phá. Con chó ngao gác đêm Brutus dữ tợn nhưng sáng ra vẫn nằm ngủ ngon lành. Hai nghi phạm chính xuất hiện: họa sĩ Elias vừa ra tù chuyên chép tranh giả, và Julian - gã sưu tầm nghệ thuật đối thủ không đội trời chung.",
    "initial_clues": [
      "Bức tranh 'Hoàng hôn trên sông Thames' trị giá lớn bị đánh tráo thành hàng giả ngay tại phòng tranh.",
      "Phòng tranh 10EC được khóa kỹ từ bên trong, con chó ngao canh gác Brutus không hề sủa hay phản ứng.",
      "Bức tranh giả có mùi sơn dầu và dầu lanh vẫn còn rất mới, mới được vẽ chưa quá một tuần.",
      "Người quản lý Victor bồn chồn, mặc áo măng-tô màu xám và ngón tay ám vàng do thói quen hút xì gà nồng đậm."
    ],
    "unlocked_nodes": ["10EC", "13SW", "14SE", "08EC"]
  },
  "nodes": {
    "10EC": {
      "id": "10EC",
      "title": "Phòng tranh Archibald (Hiện trường)",
      "area": "EC",
      "type": "crime_scene",
      "map_coords": { "x": 540, "y": 280 },
      "content": "Hiện trường không có dấu hiệu bị đột nhập. Ổ khóa và kính nguyên vẹn. Con chó ngao Brutus vẫy đuôi thân thiện khi thám tử bước vào. Tiến gần bức tranh giả, Holmes nhận thấy mùi dầu lanh và sơn dầu vẫn còn rất mới, mới được vẽ chưa quá một tuần. Quản lý Victor đứng ghi chép gần đó mặc áo măng-tô màu xám, ngón tay trỏ ám vàng vì hút nhiều xì gà nồng đậm.",
      "unlocks": {
        "nodes": ["14SE", "22SW", "05WC"],
        "evidence_items": [
          "Chó Brutus thân thiện chứng tỏ thủ phạm là người quen.",
          "Bức tranh giả mới vẽ chưa tới 1 tuần.",
          "Quản lý Victor mặc áo măng-tô xám và nghiện hút xì gà."
        ]
      },
      "key_hints": [
        "Thủ phạm là người quen có chìa khóa khiến chó không sủa.",
        "Dấu hiệu áo măng-tô xám và mùi xì gà của Victor."
      ]
    },
    "13SW": {
      "id": "13SW",
      "title": "Sở cảnh sát Scotland Yard (Thanh tra Lestrade)",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "x": 210, "y": 590 },
      "content": "Thanh tra Lestrade khẳng định chắc nịch: 'Vụ đánh tráo à? Chắc chắn là do gã họa sĩ Elias làm. Hắn vừa ra tù tháng trước. Chiều nay tôi sẽ cho người đến tóm cổ hắn là xong chuyện!'.",
      "unlocks": {
        "nodes": ["14SE"],
        "evidence_items": ["Lestrade vội vã quy kết cho họa sĩ Elias mà không có bằng chứng."]
      },
      "key_hints": ["Lời kết luận vội vã của Lestrade mang tính chất đánh lạc hướng."]
    },
    "14SE": {
      "id": "14SE",
      "title": "Xưởng vẽ của họa sĩ Elias",
      "area": "SE",
      "type": "suspect_interview",
      "map_coords": { "x": 630, "y": 680 },
      "content": "Họa sĩ Elias hoảng hốt phân trần: 'Tôi thề tôi không trộm tranh! Tuần trước, một gã mặc áo măng-tô xám, đội mũ sụp mặt đã đến thuê tôi chép lại bức Hoàng hôn trên sông Thames qua ảnh chụp. Hắn trả bằng tiền mặt và sực nức mùi xì gà đắt tiền. Hắn yêu cầu tôi bỏ bức tranh giả vào tủ đồ số 4 ở ga King's Cross cách đây 2 ngày'.",
      "unlocks": {
        "nodes": ["05WC", "22SW"],
        "evidence_items": [
          "Elias bị kẻ lạ mặt mặc áo măng-tô xám, hút xì gà đắt tiền thuê chép tranh giả.",
          "Tranh giả được giao tại ga King's Cross."
        ]
      },
      "key_hints": [
        "Đặc điểm áo măng-tô xám và mùi xì gà trùng khớp với quản lý Victor."
      ]
    },
    "08EC": {
      "id": "08EC",
      "title": "Dinh thự của Julian",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "x": 510, "y": 250 },
      "content": "Quản gia cho biết: Ngài Julian đã đi nghỉ dưỡng ở Paris từ hai tuần trước và phải đến cuối tháng mới trở về. Ngài ấy không liên lạc hay gửi thư từ gì về London trong suốt thời gian qua.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Julian có bằng chứng ngoại phạm hoàn hảo tại Paris từ 2 tuần trước."]
      },
      "key_hints": ["Loại trừ Julian hoàn toàn khỏi danh sách nghi phạm."]
    },
    "05WC": {
      "id": "05WC",
      "title": "Cửa hàng Họa cụ xóm Đông",
      "area": "WC",
      "type": "location_search",
      "map_coords": { "x": 390, "y": 330 },
      "content": "Chủ cửa hàng lật sổ tay: 'Khoảng một tuần trước, Elias có đến mua toan vẽ và lượng lớn sơn dầu. Đi cùng anh ta là một gã mặc áo măng-tô xám đứng chờ ngoài cửa trả tiền, khói xì gà bay mù mịt cả góc phố'.",
      "unlocks": {
        "nodes": ["22SW"],
        "evidence_items": ["Gã mặc áo măng-tô xám trả tiền nguyên liệu cho Elias vẽ tranh giả."]
      },
      "key_hints": ["Củng cố chứng cứ kẻ mặc áo măng-tô xám chính là kẻ đứng sau."]
    },
    "22SW": {
      "id": "22SW",
      "title": "Quán rượu & Sòng bạc Cáo Đỏ (Porky)",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "x": 230, "y": 610 },
      "content": "Ông trùm Porky nhếch mép: 'Tên quản lý Victor là khách VIP ở đây. Hắn đang nợ sòng bạc này tới 5,000 Bảng Anh. Tối qua hắn vừa hứa với tôi là sắp có một món hàng lớn để thế chấp trừ nợ'.",
      "unlocks": {
        "nodes": ["17WC"],
        "evidence_items": ["Victor nợ sòng bạc 5,000 Bảng Anh và hứa thế chấp món hàng lớn trừ nợ."]
      },
      "key_hints": ["Động cơ tài chính trực tiếp buộc tội Victor."]
    },
    "17WC": {
      "id": "17WC",
      "title": "Ngân hàng Trung tâm",
      "area": "WC",
      "type": "clue_inspection",
      "map_coords": { "x": 420, "y": 380 },
      "content": "Nhân viên giao dịch xác nhận: Tài khoản của Phòng tranh Archibald rất khỏe mạnh. Tuy nhiên, tài khoản cá nhân của quản lý Victor đã cạn kiệt từ ba tháng nay.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Tài khoản cá nhân của Victor cạn kiệt hoàn toàn."]
      },
      "key_hints": ["Khẳng định khó khăn tài chính của Victor."]
    },
    "30EC": {
      "id": "30EC",
      "title": "Tòa soạn báo The Times",
      "area": "EC",
      "type": "clue_inspection",
      "map_coords": { "x": 570, "y": 310 },
      "content": "Tổng biên tập Henry Ellis cho biết Ngài Archibald vừa mua bảo hiểm cho bức 'Hoàng hôn trên sông Thames' trị giá 20,000 Bảng Anh.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Bức tranh thật được bảo hiểm trị giá 20,000 Bảng."]
      },
      "key_hints": ["Giá trị tài sản khổng lồ của bức tranh thật."]
    }
  },
  "directory": [
    { "name": "Archibald Gallery (Phòng tranh)", "code": "10EC", "category": "Phòng tranh", "address": "10 East Central St", "desc": "Phòng tranh Archibald nơi xảy ra vụ đánh tráo." },
    { "name": "Scotland Yard (Cảnh sát)", "code": "13SW", "category": "Cơ quan", "address": "13 South West St", "desc": "Sở cảnh sát London." },
    { "name": "Elias (Xưởng vẽ)", "code": "14SE", "category": "Họa sĩ", "address": "14 South East St", "desc": "Xưởng vẽ gác xép của họa sĩ chép tranh Elias." },
    { "name": "Julian (Dinh thự)", "code": "08EC", "category": "Dinh thự", "address": "08 East Central St", "desc": "Dinh thự nhà sưu tầm nghệ thuật Julian." },
    { "name": "Cửa hàng Họa cụ xóm Đông", "code": "05WC", "category": "Cửa hàng", "address": "05 West Central St", "desc": "Tiệm bán sơn dầu và toan vẽ." },
    { "name": "Sòng bạc Cáo Đỏ (Porky)", "code": "22SW", "category": "Sòng bạc", "address": "22 South West St", "desc": "Quán rượu và sòng bạc ngầm của Porky." },
    { "name": "Ngân hàng Trung tâm", "code": "17WC", "category": "Ngân hàng", "address": "17 West Central St", "desc": "Ngân hàng quản lý tài khoản cá nhân và phòng tranh." },
    { "name": "Tòa soạn báo The Times", "code": "30EC", "category": "Báo chí", "address": "30 East Central St", "desc": "Tòa soạn nhật báo London." }
  ],
  "newspaper": {
    "paper_name": "THE TIMES LONDON",
    "issue_date": "THỨ TƯ, NGÀY 10 THÁNG 9 NĂM 1890",
    "articles": [
      {
        "date": "10 THÁNG 9, 1890",
        "title": "BUỔI ĐẤU GIÁ NGHỆ THUẬT QUỐC TẾ TẠI BLOOMSBURY",
        "summary": "Phòng tranh Archibald chuẩn bị đấu giá kiệt tác Hoàng hôn trên sông Thames của danh họa Turner với gói bảo hiểm 20,000 Bảng Anh.",
        "related_code": "10EC"
      }
    ]
  },
  "questions": {
    "part_1_main_case": [
      {
        "id": "q1",
        "question": "Ai là kẻ chủ mưu thực sự đánh cắp bức tranh thật?",
        "options": [
          "Victor (Quản lý phòng tranh)",
          "Họa sĩ Elias",
          "Julian",
          "Ngài Archibald"
        ],
        "correct_option_index": 0,
        "explanation": "Victor là người có chìa khóa, mặc áo măng-tô xám, nghiện xì gà và đang nợ sòng bạc 5,000 Bảng Anh."
      },
      {
        "id": "q2",
        "question": "Ai là người trực tiếp vẽ bức tranh giả?",
        "options": [
          "Họa sĩ Elias (bị thuê làm theo đơn đặt hàng)",
          "Victor",
          "Julian",
          "Porky"
        ],
        "correct_option_index": 0,
        "explanation": "Elias bị gã mặc áo măng-tô xám sực nức mùi xì gà thuê vẽ chép tranh giả qua ảnh chụp."
      },
      {
        "id": "q3",
        "question": "Bằng chứng quan trọng nào tại hiện trường 10EC chỉ ra thủ phạm là người quen phòng tranh?",
        "options": [
          "Con chó gác đêm Brutus vẫy đuôi thân thiện không hề sủa",
          "Cửa sổ bị đập vỡ",
          "Khóa cửa bị cạy phá",
          "Có dấu chân bùn đất"
        ],
        "correct_option_index": 0,
        "explanation": "Con chó ngao Brutus dữ tợn với người lạ nhưng lại vẫy đuôi thân thiện chứng tỏ thủ phạm là Victor."
      },
      {
        "id": "q4",
        "question": "Julian có liên quan đến vụ đánh tráo tranh không? Vì sao?",
        "options": [
          "Không liên quan, có bằng chứng ngoại phạm ở Paris từ 2 tuần trước",
          "Có liên quan, là kẻ thuê Elias vẽ tranh",
          "Có liên quan, mua tranh giả gạt nợ",
          "Có liên quan, cung cấp sơn dầu"
        ],
        "correct_option_index": 0,
        "explanation": "Julian đang đi nghỉ dưỡng tại Paris từ hai tuần trước và không liên lạc về London."
      },
      {
        "id": "q5",
        "question": "Số lượng manh mối (bước đi) tối ưu mà Sherlock Holmes đã sử dụng để giải vụ án này là bao nhiêu?",
        "options": [
          "4 manh mối (10EC, 14SE, 22SW, 08EC)",
          "6 manh mối",
          "8 manh mối",
          "2 manh mối"
        ],
        "correct_option_index": 0,
        "explanation": "Holmes chỉ cần 4 bước: 10EC (Hiện trường), 14SE (Elias), 22SW (Sòng bạc) và 08EC (Dinh thự Julian)."
      }
    ],
    "part_2_side_mysteries": [
      {
        "id": "q6",
        "question": "Tên bức tranh kiệt tác của danh họa Turner bị đánh tráo là gì?",
        "options": [
          "Hoàng hôn trên sông Thames",
          "Bình minh Baker Street",
          "Đêm sương mù London",
          "Tháp Cầu London"
        ],
        "correct_option_index": 0,
        "explanation": "Bức tranh có tên 'Hoàng hôn trên sông Thames'."
      },
      {
        "id": "q7",
        "question": "Victor nợ sòng bạc Cáo Đỏ của Porky khoản tiền bao nhiêu?",
        "options": [
          "5,000 Bảng Anh",
          "2,000 Bảng Anh",
          "10,000 Bảng Anh",
          "500 Bảng Anh"
        ],
        "correct_option_index": 0,
        "explanation": "Porky tại 22SW xác nhận Victor nợ sòng bạc 5,000 Bảng Anh."
      },
      {
        "id": "q8",
        "question": "Bức tranh giả được Victor yêu cầu Elias gửi tại địa điểm nào?",
        "options": [
          "Tủ đồ số 4 ở ga King's Cross",
          "Khách sạn Metropolitan",
          "Bảo tàng Anh",
          "Quán Cáo Đỏ"
        ],
        "correct_option_index": 0,
        "explanation": "Elias khai báo tranh giả được gửi tại tủ đồ số 4 ga King's Cross."
      },
      {
        "id": "q9",
        "question": "Đặc điểm nhận dạng trang phục và thói quen nào của Victor giúp nhận diện hắn?",
        "options": [
          "Mặc áo măng-tô xám và ngón tay ám vàng do hút xì gà nồng đậm",
          "Mặc áo choàng đen và đeo kính râm",
          "Đeo găng tay trắng và mang gậy chống",
          "Mặc đồng phục cảnh sát"
        ],
        "correct_option_index": 0,
        "explanation": "Victor mặc áo măng-tô xám và ngón tay ám vàng do hút nhiều xì gà."
      },
      {
        "id": "q10",
        "question": "Gói bảo hiểm cho bức tranh thật trị giá bao nhiêu Bảng Anh?",
        "options": [
          "20,000 Bảng Anh",
          "5,000 Bảng Anh",
          "50,000 Bảng Anh",
          "1,000 Bảng Anh"
        ],
        "correct_option_index": 0,
        "explanation": "Tòa soạn báo The Times ghi nhận gói bảo hiểm trị giá 20,000 Bảng Anh."
      }
    ]
  },
  "solution_summary": {
    "mastermind": "Victor (Quản lý phòng tranh)",
    "motive": "Lấy trộm bức tranh thật để tuồn ra thị trường đen gạt khoản nợ sòng bạc 5,000 Bảng Anh.",
    "full_truth": "Victor là thủ phạm chính. Hắn nợ sòng bạc Cáo Đỏ 5,000 Bảng và nảy sinh ý định trộm bức tranh thật. Vì có chìa khóa phòng tranh nên hắn ra vào dễ dàng và con chó Brutus không sủa. Hắn âm thầm đến gặp Elias thuê chép bức tranh giả qua ảnh, trả bằng tiền mặt rồi tráo tranh thật lấy tranh giả. Nhờ nhận diện chiếc áo măng-tô xám, mùi xì gà nồng đậm và khoản nợ sòng bạc, Holmes đã phá vụ án chỉ trong 4 bước đi!"
  }
};
