export const SHERLOCK_CASE_5 = {
  "case_id": "sherlock_case_5",
  "title": "Vụ án 5: Cán Cân Công Lý Bất Ổn (The Case of the Unsettled Balance)",
  "author": "Ystari & Raymond Edwards (SHCD Special Edition)",
  "setting_date": "Ngày 4 tháng 6 năm 1890",
  "intro": {
    "story_text": "Sáng ngày 4 tháng 6 năm 1890, căn hộ 221B Baker Street rơi vào bầu không khí u uất khi Sherlock Holmes lâm vào trạng thái mệt mỏi kiệt sức sau nhiều ngày suy ngẫm. Cùng lúc đó, các thiếu niên nhóm thám tử phố Baker đứng đầu là Wiggins nhận được tin đồn chấn động từ khắp London: một chuỗi các vụ án mạng kỳ lạ liên tiếp diễn ra mang theo dấu vết của 4 nguyên tố cổ đại Thủy, Hỏa, Phong, Thổ. Từ vụ cháy bí ẩn tại khu nhà trọ Mrs. Hagwood, vụ ngạt nước ngầm trong nhà tắm công cộng, cho đến vụ ngã từ trên mái nhà cao tầng tại đường Fleet Street. Nhóm thám tử trẻ phải thay mặt Holmes dấn thân vào những ngõ ngách nguy hiểm của London để ngăn chặn một âm mưu tàn bạo nhân danh triết học cổ đại!",
    "initial_clues": [
      "Vụ cháy bất ngờ thiêu rụi căn hộ của Martha Jamieson tại nhà trọ Mrs. Hagwood khu EC.",
      "Vụ phát hiện thi thể người đàn ông bị ngã từ mái nhà 63 Fleet Street khu EC không mang theo bất kỳ giấy tờ tùy thân nào.",
      "Bác sĩ pháp y Sir Jasper Meeks ghi nhận mùi hương lạ bám trên trang phục của nạn nhân ngã từ trên cao.",
      "Tin tức báo chí đăng tải bài phỏng vấn nhân chứng Angus McAllister tại khách sạn Metropolitan Hotel.",
      "Cuốn sách triết học cổ đại về 4 nguyên tố của tác giả K. Raikos đã bị mua sạch tại tiệm sách Gilbert & Field."
    ],
    "unlocked_nodes": ["63EC", "7EC"]
  },
  "nodes": {
    "7EC": {
      "id": "7EC",
      "title": "Nhà trọ Mrs. Hagwood - Căn hộ Martha Jamieson",
      "area": "EC",
      "type": "crime_scene",
      "map_coords": { "x": 560, "y": 290 },
      "content": "Bà chủ trọ Hagwood kể lại: Martha Jamieson đã chuyển đến ở một mình vài tuần trước sau khi xảy ra mâu thuẫn nặng nề với chồng. Đêm qua, ngọn lửa bùng lên bất ngờ trong căn hộ độc lập của cô. Dù ngọn lửa nhanh chóng được dập tắt, nhưng khói độc bốc lên ngột ngạt làm Martha tử vong trước khi ngọn lửa kịp lan rộng. Hiện trường ngạt khí tượng trưng cho Nguyên tố Hỏa và Khí.",
      "unlocks": {
        "nodes": ["10EC", "41EC"],
        "evidence_items": ["Martha Jamieson tử vong do ngạt khí độc trong vụ cháy căn hộ độc lập."]
      },
      "key_hints": ["Vụ cháy tại nhà trọ là mắt xích đầu tiên trong chuỗi án mạng 4 nguyên tố."]
    },
    "63EC": {
      "id": "63EC",
      "title": "Hiện trường mái nhà 63 Fleet Street (Góc đường Shoe Lane)",
      "area": "EC",
      "type": "crime_scene",
      "map_coords": { "x": 590, "y": 310 },
      "content": "Thanh tra Lestrade và Bác sĩ pháp y Sir Jasper Meeks đang khám xét thi thể người đàn ông ngã từ mái nhà xuống ngõ Shoe Lane. Nạn nhân bị gãy nhiều xương và vỡ hộp sọ, tử vong tức thì. Sir Jasper Meeks phát hiện một mùi hương thảo mộc kỳ lạ bám trên quần áo nạn nhân. Quanh đó không có giấy tờ tùy thân hay bóp tiền, tượng trưng cho Nguyên tố Thổ.",
      "unlocks": {
        "nodes": ["31NW", "13SW"],
        "evidence_items": ["Thi thể ngã từ mái nhà có mùi hương thảo mộc lạ bám trên trang phục."]
      },
      "key_hints": ["Mùi hương thảo mộc bám trên quần áo nạn nhân dẫn tới Vườn Bách thảo."]
    },
    "41EC": {
      "id": "41EC",
      "title": "Tiệm sách cổ Gilbert & Field",
      "area": "EC",
      "type": "location_search",
      "map_coords": { "x": 530, "y": 270 },
      "content": "Chủ tiệm sách đeo kính bạc xác nhận cuốn luận văn về 4 nguyên tố thiên nhiên của tác giả người Hy Lạp K. Raikos đã bán sạch không còn một bản. Vài ngày trước, một vị khách bí ẩn ăn mặc lịch thiệp đã đến gom toàn bộ những bản sách cuối cùng với thái độ vô cùng vội vã.",
      "unlocks": {
        "nodes": ["13SW"],
        "evidence_items": ["Cuốn sách về 4 nguyên tố của K. Raikos bị một khách hàng bí ẩn mua sạch."]
      },
      "key_hints": ["Triết lý 4 nguyên tố của K. Raikos chính là kim chỉ nam cho hành vi của hung thủ."]
    },
    "31NW": {
      "id": "31NW",
      "title": "Vườn Bách thảo London (Botanical Gardens)",
      "area": "NW",
      "type": "clue_inspection",
      "map_coords": { "x": 160, "y": 320 },
      "content": "Trong nhà kính Vườn Bách thảo, thám tử phát hiện bảng tên cây Atropa Belladonna (dược liệu kiêm chất độc chết người). Mùi hương chiết xuất từ loài cây này trùng khớp hoàn toàn với mùi hương lạ bám trên thi thể tại 63 Fleet Street. Quản lý xác nhận một lượng lớn chiết xuất cây Belladonna vừa bị đánh trộm.",
      "unlocks": {
        "nodes": ["22SW"],
        "evidence_items": ["Chất độc Belladonna bị trộm tại Vườn Bách thảo trùng với mùi hương trên thi thể Fleet Street."]
      },
      "key_hints": ["Hung thủ đã dùng chất độc Belladonna chiết xuất để làm tê liệt các nạn nhân."]
    },
    "13SW": {
      "id": "13SW",
      "title": "Thư viện London (Học giả Lomax)",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "x": 210, "y": 620 },
      "content": "Học giả Lomax giải thích ý nghĩa triết học cổ đại: 'Empedocles là triết gia Hy Lạp cổ đại tin rằng vũ trụ vận hành dựa trên 4 nguyên tố Đất, Khí, Lửa, Nước và hai lực đối lập Ái tình và Thù hận. Những kẻ cuồng tín có thể thực hành giáo lý này bằng cách tạo ra các cái chết đại diện cho từng nguyên tố để thiết lập lại Cán cân công lý!'.",
      "unlocks": {
        "nodes": ["22SW", "83EC"],
        "evidence_items": ["Chuỗi án mạng được thực hiện dựa trên giáo lý 4 nguyên tố của triết gia Empedocles."]
      },
      "key_hints": ["Mỗi án mạng ứng với một nguyên tố trong giáo lý của Empedocles."]
    },
    "22SW": {
      "id": "22SW",
      "title": "Bệnh viện khám nghiệm y khoa (Bác sĩ Murray)",
      "area": "SW",
      "type": "clue_inspection",
      "map_coords": { "x": 240, "y": 590 },
      "content": "Bác sĩ Murray xem xét trường hợp người phụ nữ tử vong tại nhà tắm công cộng (Nguyên tố Thủy): Nạn nhân nằm thư thái trong bồn tắm, không có dấu vết giằng co hay chống cự. Điều này chứng tỏ nạn nhân đã bị chuốc thuốc mê Belladonna làm mất khả năng chống cự trước khi chìm vào nước ngạt thở.",
      "unlocks": {
        "nodes": ["83EC"],
        "evidence_items": ["Nạn nhân vụ án ngạt nước bị chuốc thuốc mê Belladonna trước khi dìm nước."]
      },
      "key_hints": ["Hung thủ vô hiệu hóa nạn nhân bằng thuốc mê Belladonna trước khi thi hành nghi thức."]
    },
    "83EC": {
      "id": "83EC",
      "title": "Nhà hàng Ship & Turtle",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "x": 640, "y": 330 },
      "content": "Tại nhà hàng cao cấp Ship & Turtle, thám tử bắt gặp Langdale Pike đang dùng bữa cùng Sir Jasper Meeks và tiểu thư Joan Lynch. Langdale Pike tiết lộ tin đồn quý tộc: Douglas Ferguson - một thương gia thường xuyên đi công tác nước ngoài - đã liên quan đến các khoản đầu tư mờ ám vào các tổ chức bí mật Hy Lạp.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Douglas Ferguson dính lấp đến các tổ chức mật nghi thức triết học cổ đại."]
      },
      "key_hints": ["Douglas Ferguson là mắt xích tài chính cho kẻ chủ mưu."]
    }
  },
  "directory": [
    { "name": "Hagwood, Mrs. (Nhà trọ Jamieson)", "code": "7EC", "category": "Nhà trọ", "address": "7 East Central St", "desc": "Khu nhà trọ độc lập xảy ra vụ cháy căn hộ Martha Jamieson." },
    { "name": "Hiện trường Mái nhà Fleet Street", "code": "63EC", "category": "Hiện trường", "address": "63 Fleet St", "desc": "Hiện trường thi thể ngã từ mái nhà đường Shoe Lane." },
    { "name": "Gilbert & Field (Tiệm sách)", "code": "41EC", "category": "Cửa hàng", "address": "41 East Central St", "desc": "Tiệm sách cổ bán luận văn 4 nguyên tố của K. Raikos." },
    { "name": "Vườn Bách thảo London", "code": "31NW", "category": "Công viên", "address": "31 North West St", "desc": "Nhà kính trồng cây độc Atropa Belladonna." },
    { "name": "Lomax (Thư viện London)", "code": "13SW", "category": "Thư viện", "address": "13 South West St", "desc": "Học giả nghiên cứu triết học cổ đại Empedocles." },
    { "name": "Bác sĩ Murray (Y khoa)", "code": "22SW", "category": "Bệnh viện", "address": "22 South West St", "desc": "Khám nghiệm hiện trường vụ án ngạt nước tại nhà tắm." },
    { "name": "Nhà hàng Ship & Turtle", "code": "83EC", "category": "Nhà hàng", "address": "83 East Central St", "desc": "Nhà hàng cao cấp nơi Langdale Pike thường thu thập tin đồn." }
  ],
  "newspaper": {
    "paper_name": "THE TIMES LONDON",
    "issue_date": "THỨ TƯ, NGÀY 4 THÁNG 6 NĂM 1890",
    "articles": [
      {
        "date": "4 THÁNG 6, 1890",
        "title": "ÁN MẠNG VÀ THẢM HỌA KHỎI ĐỘC TẠI EC",
        "summary": "Một chuỗi các sự cố bí ẩn bao gồm tai nạn rơi từ mái nhà Fleet Street và vụ cháy căn hộ trọ ngạt khí xảy ra liên tiếp trong 24 giờ qua.",
        "related_code": "7EC"
      },
      {
        "date": "4 THÁNG 6, 1890",
        "title": "TRIỂN LÃM CÂY ĐỘC TẠI VƯỜN BÁCH THẢO",
        "summary": "Nhà kính Vườn Bách thảo mở cửa bộ sưu tập thảo mộc cổ đại bao gồm các loài cây có chứa độc tố chết người.",
        "related_code": "31NW"
      }
    ]
  },
  "questions": {
    "part_1_main_case": [
      {
        "id": "q1",
        "question": "Giáo lý triết học cổ đại nào được kẻ chủ mưu sử dụng làm kim chỉ nam thực hiện chuỗi án mạng?",
        "options": [
          "Giáo lý 4 nguyên tố Đất, Khí, Lửa, Nước của triết gia Empedocles",
          "Thuyết ngũ hành của Trung Hoa",
          "Thuyết nguyên tử của Democritus",
          "Thuật chiêm tinh Babylon"
        ],
        "correct_option_index": 0,
        "explanation": "Học giả Lomax tại 13SW xác nhận kẻ cuồng tín đã áp dụng giáo lý 4 nguyên tố của Empedocles để thực hiện các cái chết đại diện."
      },
      {
        "id": "q2",
        "question": "Chất độc thảo mộc nào được hung thủ chiết xuất tại Vườn Bách thảo (31NW) để vô hiệu hóa các nạn nhân?",
        "options": [
          "Atropa Belladonna",
          "Xyanua",
          "Thuốc phiện nồng độ cao",
          "Độc tố thạch tín"
        ],
        "correct_option_index": 0,
        "explanation": "Thám tử phát hiện mùi hương cây độc Atropa Belladonna tại Vườn Bách thảo trùng khớp với mùi trên trang phục nạn nhân."
      },
      {
        "id": "q3",
        "question": "Nguyên nhân tử vong chính của nạn nhân Martha Jamieson trong vụ cháy nhà trọ 7EC là gì?",
        "options": [
          "Ngạt khí độc trước khi ngọn lửa bùng phát",
          "Bị chấn thương do vật nặng",
          "Bị trúng đạn",
          "Bị nhiễm độc thực phẩm"
        ],
        "correct_option_index": 0,
        "explanation": "Bà chủ trọ xác nhận khói độc ngạt thở đã làm nạn nhân tử vong trước khi ngọn lửa kịp lan rộng."
      },
      {
        "id": "q4",
        "question": "Tác giả của cuốn sách triết học 4 nguyên tố bị gom mua sạch tại tiệm sách 41EC là ai?",
        "options": [
          "K. Raikos",
          "Empedocles",
          "Langdale Pike",
          "Angus McAllister"
        ],
        "correct_option_index": 0,
        "explanation": "Chủ tiệm sách Gilbert & Field xác nhận tác giả cuốn sách là K. Raikos."
      },
      {
        "id": "q5",
        "question": "Chi tiết kỳ lạ nào được Bác sĩ Sir Jasper Meeks phát hiện trên thi thể nạn nhân rơi từ mái nhà 63 Fleet Street?",
        "options": [
          "Mùi hương thảo mộc Belladonna bám trên trang phục",
          "Dấu vân tay màu xanh",
          "Vết cắn của động vật hoang dã",
          "Hình xăm bản đồ kho báu"
        ],
        "correct_option_index": 0,
        "explanation": "Sir Jasper Meeks ghi nhận mùi hương thảo mộc Belladonna bám trên quần áo nạn nhân ngã từ trên cao."
      }
    ],
    "part_2_side_mysteries": [
      {
        "id": "q6",
        "question": "Nhân chứng Angus McAllister đã mua bao nhiêu tờ báo The Times có in tên mình?",
        "options": [
          "Hơn 50 tờ",
          "10 tờ",
          "100 tờ",
          "5 tờ"
        ],
        "correct_option_index": 0,
        "explanation": "McAllister khoe tại khách sạn Metropolitan rằng ông đã mua hơn 50 tờ báo The Times."
      },
      {
        "id": "q7",
        "question": "Tại nhà tắm công cộng (22SW), tư thế thi thể nạn nhân có đặc điểm gì bất thường?",
        "options": [
          "Nằm thư thái trong bồn tắm không có dấu vết giằng co",
          "Tay bị trói chặt vào thành bồn",
          "Bị mặc trang phục dạ hội",
          "Có nhiều vết trầy xước trên người"
        ],
        "correct_option_index": 0,
        "explanation": "Bác sĩ Murray xác nhận nạn nhân nằm rất thư thái vì đã bị chuốc thuốc mê Belladonna trước đó."
      },
      {
        "id": "q8",
        "question": "Tên bà chủ nhà trọ độc lập tại 7EC là gì?",
        "options": [
          "Mrs. Hagwood",
          "Martha Jamieson",
          "Rose Mason",
          "Pearl Jones"
        ],
        "correct_option_index": 0,
        "explanation": "Nhà trọ thuộc sở hữu của bà Mrs. Hagwood."
      },
      {
        "id": "q9",
        "question": "Địa điểm nào là nơi Langdale Pike thường xuyên lưu lui tới để thưởng thức súp rùa và thu thập tin đồn?",
        "options": [
          "Nhà hàng Ship & Turtle (83EC)",
          "Khách sạn Metropolitan Hotel",
          "Sòng bạc Kilgore",
          "Bảo tàng Anh"
        ],
        "correct_option_index": 0,
        "explanation": "Langdale Pike gặp thám tử tại nhà hàng Ship & Turtle 83EC."
      },
      {
        "id": "q10",
        "question": "Thương gia Douglas Ferguson thường xuyên thực hiện các chuyến đi đến đâu?",
        "options": [
          "Các chuyến công tác nước ngoài tại châu Âu",
          "Các chuyến đi săn ở châu Phi",
          "Các chuyến thăm mỏ vàng ở Úc",
          "Các chuyến du lịch ở New York"
        ],
        "correct_option_index": 0,
        "explanation": "Langdale Pike cho biết thương gia Ferguson thường xuyên đi công tác nước ngoài qua lại châu Âu."
      }
    ]
  },
  "solution_summary": {
    "mastermind": "Nhóm cuồng tín triết học cổ đại K. Raikos",
    "motive": "Thực hiện chuỗi án mạng 4 nguyên tố theo giáo lý Empedocles để thiết lập Cán cân công lý cuồng tín.",
    "full_truth": "Nhóm cuồng tín triết học dẫn đầu bởi K. Raikos đã lên kế hoạch thực hiện chuỗi án mạng đại diện cho 4 nguyên tố thiên nhiên. Chúng đánh trộm chiết xuất Belladonna tại Vườn Bách thảo (31NW) để vô hiệu hóa các nạn nhân. Với Martha Jamieson, chúng gây ra vụ cháy nhà trọ (7EC - đại diện Lửa và Khí). Với nạn nhân tại đường tắm công cộng, chúng dìm nước khi nạn nhân bị mê man (22SW - đại diện Thủy). Với nạn nhân tại 63 Fleet Street, chúng chuốc độc rồi ném từ trên mái nhà xuống (63EC - đại diện Thổ). Nhờ sự mẫn cảm với mùi hương dược liệu và việc giải mã triết học Empedocles tại thư viện Lomax (13SW), nhóm thám tử phố Baker đã ngăn chặn toàn bộ kế hoạch tội ác!"
  }
};
