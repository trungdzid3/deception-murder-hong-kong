export const SHERLOCK_CASE_2 = {
  "case_id": "sherlock_case_2",
  "title": "Vụ án 3: Cái Chết Của Sherlock Holmes (The Death of Sherlock Holmes)",
  "author": "Cody Fleming (SHCD Official Case)",
  "setting_date": "Ngày 2 tháng 12 năm 1893",
  "holmes_clues": 4,
  "scoring": {
    "part1_max": 100,
    "part2_max": 30,
    "total_max": 130,
    "penalty_per_extra_clue": 5
  },
  "intro": {
    "story_text": "Chúng tôi chưa từng thấy Bác sĩ John Watson bàng hoàng và sụp đổ đến thế khi bước chân tới hiện trường vụ án. Đầu ông ngoẹo sang một bên, ngồi buông thõng dựa vào thùng gỗ trên vỉa hè, chìm trong cơn thẫn thờ như không nghe thấy tiếng gọi của chúng tôi. Căn hộ 221B Baker Street chỉ còn là đống tàn tích bốc khói nghi ngút. Cảnh sát hối hả chạy ngược chạy xuôi trong sự hoảng loạn. Phía sau hàng rào bảo vệ, đám đông hiếu kỳ mỗi lúc một đông. Dưới tấm khăn trải ngay gần Bác sĩ Watson là một thi thể... thi thể của Sherlock Holmes.\n\nBác sĩ Watson kiểm tra thi thể trong sự đau đớn: khoảng 85% cơ thể bị bỏng độ hai và độ ba. Tuy nhiên, ngoài tổn thương do ngọn lửa, thi thể còn có một vết thương thứ hai — vết đạn bắn xuyên từ đằng sau lưng và thoát ra ở bụng. Cùng lúc đó, nhóm thám tử phố Baker tìm thấy một hộp sắt nhỏ trên bàn làm việc của Holmes sống sót qua ngọn lửa, bên trong chứa vài cuộn chương trình kịch hát (The Allegro, The Lyceum, The Olympia), một biên lai xe ngựa và hai bức thư mật...",
    "initial_clues": [
      "Thi thể cháy xém tại 221B Baker Street mang vết đạn bắn xuyên từ đằng sau lưng thoát ra bụng.",
      "Chiếc hộp sắt trên bàn làm việc chứa vé xem kịch (The Allegro, The Lyceum, The Olympia) và biên lai xe ngựa.",
      "Văn phòng phẩm A. W. Faber (28WC) - Địa điểm nghi vấn tra cứu qua mật thư chữ cái.",
      "Thông tin về đợt tuyên án đường dây buôn lậu tại Outer Docks 2 năm trước (25/11/1891)."
    ],
    "unlocked_nodes": ["221B", "13SW", "38EC", "28WC", "34WC", "49SE"]
  },
  "nodes": {
    "221B": {
      "id": "221B",
      "title": "Căn hộ 221B Baker Street (Hiện trường hỏa hoạn)",
      "area": "NW",
      "type": "crime_scene",
      "map_coords": { "x": 110, "y": 85 },
      "content": "Căn hộ 221B chìm trong tro tàn sau ngọn lửa dữ dội. Thi thể bị cháy xém nằm cạnh bàn làm việc. Khám xét vết đạn trên lưng nạn nhân và vết chai xước tay, thám tử nhận ra người bị bắn chết thực chất là Marvin Pemberton - vị khách đến gặp Holmes sớm hơn hẹn. Cạnh tách trà bị vỡ tỏa mùi đắng nhẹ của chất độc Cyanide. Holmes đã nhận ra nguy hiểm, thoát ra ngoài và để lại mật thư bí ẩn cho Lestrade.",
      "unlocks": {
        "nodes": ["13SW", "38EC", "28WC", "34WC"],
        "evidence_items": [
          "Nạn nhân bị bắn tại 221B là Marvin Pemberton, không phải Sherlock Holmes.",
          "Trà của Holmes bị chèn chất độc Cyanide bởi Elle Fanning.",
          "Mật thư của Holmes chứa quy tắc lấy chữ cái đầu tiên."
        ]
      },
      "key_hints": [
        "Holmes vẫn sống; thi thể là Marvin Pemberton.",
        "Mật thư chữ cái đầu tiên chỉ địa điểm ẩn náu của Holmes."
      ]
    },
    "13SW": {
      "id": "13SW",
      "title": "Sở cảnh sát Scotland Yard (Thanh tra Lestrade)",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "x": 280, "y": 385 },
      "content": "Thanh tra Lestrade đọc lại bức mật thư của Holmes và chợt hiểu ra: 'Đây là vụ trả thù của băng nhóm Pentacle - người thân các phạm nhân vụ buôn lậu Outer Docks 2 năm trước! Elle Fanning (con gái sĩ quan Dick Alpert) chủ mưu gom 5 kẻ liên quan gồm Ambroise Beaupre, Gertrude Helwig, Israel Jacobs và tay súng Chandler Davenport để ám sát Holmes'. Bức mật thư với chữ cái đầu tiên hé lộ Holmes đang an toàn.",
      "unlocks": {
        "nodes": ["28WC", "34WC", "49SE"],
        "evidence_items": [
          "Băng nhóm 'The Pentacle' thành lập nhằm trả thù cho vụ án buôn lậu Outer Docks 1891.",
          "Holmes an toàn tại cửa hàng văn phòng phẩm A. W. Faber."
        ]
      },
      "key_hints": [
        "Băng 'The Pentacle' gồm 5 kẻ trả thù vụ buôn lậu 1891.",
        "Holmes giải mã ẩn náu tại cửa hàng A. W. Faber."
      ]
    },
    "38EC": {
      "id": "38EC",
      "title": "Bệnh viện St. Bartholomew (Phòng khám nghiệm Sir Jasper Meeks)",
      "area": "EC",
      "type": "clue_inspection",
      "map_coords": { "x": 615, "y": 260 },
      "content": "Bác sĩ pháp y Sir Jasper Meeks khẳng định: Tử thi bị bắn chết từ đằng sau qua cửa sổ trước khi ngọn lửa bùng phát. Cấu trúc xương và chiều cao ngắn hơn Holmes 2 inch – xác nhận đây là Marvin Pemberton. Ngoài ra tử thi có dấu vết ngấm chất độc Cyanide từ trà.",
      "unlocks": {
        "nodes": ["28WC"],
        "evidence_items": ["Sir Jasper Meeks xác nhận tử thi là Marvin Pemberton và nhiễm độc Cyanide."]
      },
      "key_hints": ["Tử thi ngấm độc Cyanide và là Marvin Pemberton."]
    },
    "28WC": {
      "id": "28WC",
      "title": "Căn hộ Chandler Davenport (Tay súng bắn lén)",
      "area": "WC",
      "type": "location_search",
      "map_coords": { "x": 430, "y": 315 },
      "content": "Khám xét phòng trọ của Chandler Davenport - kẻ duy nhất được tha bổng trong vụ án 1891 vì thiếu chứng cứ. Trong rương cất giấu nhiều khẩu súng săn và súng bắn tỉa cao cấp cùng bài báo 'Án phạt đường dây buôn lậu Outer Docks 25/11/1891'. Hắn là kẻ đứng từ cửa sổ đối diện bắn xuyên qua kính vào 221B.",
      "unlocks": {
        "nodes": ["34WC", "49SE"],
        "evidence_items": [
          "Chandler Davenport là tay súng bắn tỉa nấp tại Camden House ngắm bắn vào 221B.",
          "Rương súng và bài báo vụ án buôn lậu Outer Docks năm 1891."
        ]
      },
      "key_hints": ["Chandler Davenport là sát thủ nổ súng ám sát."]
    },
    "34WC": {
      "id": "34WC",
      "title": "Căn hộ Gerald Locke (Anh em sinh đôi John Locke)",
      "area": "WC",
      "type": "suspect_interview",
      "map_coords": { "x": 365, "y": 235 },
      "content": "Gerald Locke (anh em sinh đôi với John Locke - phạm nhân vụ buôn lậu) tiết lộ: 'Băng buôn lậu năm xưa gồm 8 kẻ dùng kho hàng tàu biển để buôn lậu cổ vật và ma túy. Elle Fanning đã đứng ra mời các thân nhân phạm nhân đến nhà hàng The Pavilion của cô ta để lên kế hoạch tàn bạo nhằm vào Holmes'.",
      "unlocks": {
        "nodes": ["49SE"],
        "evidence_items": [
          "Gerald Locke là anh em sinh đôi của John Locke.",
          "Elle Fanning chủ mưu cuộc họp 'The Pentacle' tại nhà hàng The Pavilion."
        ]
      },
      "key_hints": ["Elle Fanning triệu tập nhóm Pentacle tại The Pavilion."]
    },
    "49SE": {
      "id": "49SE",
      "title": "Nhà kho hoang bến tàu (Gertrude Helwig & Ambroise Beaupre)",
      "area": "SE",
      "type": "crime_scene",
      "map_coords": { "x": 520, "y": 460 },
      "content": "Khám xét căn hộ phóng hỏa của Ambroise Beaupre và Gertrude Helwig. Phát hiện cây gậy gộc gụ shillelagh của Beaupre và quần áo bị bỏng lửa của Gertrude Helwig - kẻ đã hét lên hoảng loạn khi bị lửa táp trúng mặt lúc tưới xăng phóng hỏa 221B Baker Street.",
      "unlocks": {
        "nodes": [],
        "evidence_items": [
          "Gertrude Helwig bị bỏng mặt khi phóng hỏa 221B làm phát ra tiếng kêu thét.",
          "Ambroise Beaupre mang gậy shillelagh đồng phạm phóng hỏa."
        ]
      },
      "key_hints": ["Gertrude Helwig bị bỏng mặt phát ra tiếng thét tại 221B."]
    }
  },
  "directory": [
    { "name": "Holmes, Sherlock (Căn hộ 221B)", "code": "221B", "category": "Căn hộ", "address": "221B Baker St", "desc": "Hiện trường vụ hỏa hoạn và nổ súng bí ẩn." },
    { "name": "Scotland Yard (Thanh tra Lestrade)", "code": "13SW", "category": "Cơ quan", "address": "13 South West St", "desc": "Sở cảnh sát London giải mã mật thư Holmes." },
    { "name": "Bệnh viện St. Bartholomew", "code": "38EC", "category": "Bệnh viện", "address": "38 East Central St", "desc": "Phòng khám nghiệm Sir Jasper Meeks." },
    { "name": "Davenport, Chandler (Tay súng)", "code": "28WC", "category": "Cư dân", "address": "28 West Central St", "desc": "Căn hộ tay súng ám sát nhóm Pentacle." },
    { "name": "Locke, Gerald (Anh em sinh đôi)", "code": "34WC", "category": "Cư dân", "address": "34 West Central St", "desc": "Anh em sinh đôi của phạm nhân buôn lậu John Locke." },
    { "name": "Beaupre & Helwig (Kẻ phóng hỏa)", "code": "49SE", "category": "Kho hàng", "address": "49 South East St", "desc": "Căn hộ phóng hỏa mang gậy shillelagh." }
  ],
  "newspaper": {
    "paper_name": "THE DAILY TELEGRAPH",
    "issue_date": "THỨ BẢY, NGÀY 2 THÁNG 12 NĂM 1893",
    "articles": [
      {
        "date": "2 THÁNG 12, 1893",
        "title": "THẢM HỌA HỎA HOẠN TẠI 221B BAKER STREET",
        "summary": "Vụ hỏa hoạn và nổ súng dữ dội thiêu rụi căn hộ thám tử Sherlock Holmes. Cảnh sát điều tra băng nhóm The Pentacle.",
        "related_code": "221B"
      },
      {
        "date": "25 THÁNG 11, 1891",
        "title": "TUYÊN ÁN ĐƯỜNG DÂY BUÔN LẬU OUTER DOCKS",
        "summary": "Tòa án tuyên phạt 8 đối tượng buôn lậu cổ vật và ma túy. Chandler Davenport được tha bổng vì thiếu chứng cứ.",
        "related_code": "28WC"
      }
    ]
  },
  "questions": {
    "part_1_main_case": [
      {
        "id": "q1",
        "question": "Động cơ nào khiến Elle Fanning lên kế hoạch sát hại Sherlock Holmes?",
        "options": [
          "Bất bình vì thông tin mật của Holmes khiến cha cô (Dick Alpert) bị bắn chết trong vụ án Outer Docks năm 1891",
          "Thù hằn cá nhân về nợ nần cờ bạc",
          "Trộm cướp bộ sưu tập sổ tay của Holmes",
          "Cạnh tranh danh tiếng thám tử tư"
        ],
        "correct_option_index": 0,
        "points": 25,
        "explanation": "Elle Fanning là con gái sĩ quan Dick Alpert - người bị đọ súng chết trong chiến dịch truy bắt băng buôn lậu Outer Docks theo manh mối của Holmes."
      },
      {
        "id": "q2",
        "question": "Loại độc chất nào đã được Elle Fanning lén bỏ vào tách trà của Holmes?",
        "options": [
          "Xyanua (Cyanide)",
          "Độc tố Belladonna",
          "Thạch tín (Arsenic)",
          "Thuốc phiện liều cao"
        ],
        "correct_option_index": 0,
        "points": 25,
        "explanation": "Elle Fanning đã lén cho Cyanide vào trà của Holmes tại nhà hàng The Pavilion."
      },
      {
        "id": "q3",
        "question": "Tại sao nạn nhân bị nổ súng bắn chết tại phòng làm việc 221B Baker Street lại bị sát hại?",
        "options": [
          "Kẻ ám sát (Chandler Davenport) nhầm Marvin Pemberton là Sherlock Holmes",
          "Marvin Pemberton là kẻ phản bội băng nhóm",
          "Do xô xát cướp tài sản",
          "Do cướp súng tự sát"
        ],
        "correct_option_index": 0,
        "points": 25,
        "explanation": "Chandler Davenport nấp từ cửa sổ đối diện bắn nhầm Marvin Pemberton vì tưởng đó là Sherlock Holmes."
      },
      {
        "id": "q4",
        "question": "Sherlock Holmes thực sự đang ẩn náu an toàn tại đâu?",
        "options": [
          "Cửa hàng văn phòng phẩm A. W. Faber (giải mã từ mật thư chữ cái đầu tiên)",
          "Nhà bác sĩ John Watson",
          "Biệt thự Mycroft Holmes",
          "Trụ sở Scotland Yard"
        ],
        "correct_option_index": 0,
        "points": 25,
        "explanation": "Mật thư gửi cho Lestrade giải mã theo chữ cái đầu tiên của từng từ ghi rõ Holmes đang giấu mình ở cửa hàng A. W. Faber."
      }
    ],
    "part_2_side_mysteries": [
      {
        "id": "q5",
        "question": "Nguyên nhân tạo ra tiếng thét thất thanh tại hiện trường hỏa hoạn 221B Baker Street là gì?",
        "options": [
          "Gertrude Helwig bị lửa táp bỏng mặt khi phóng hỏa",
          "Bác sĩ Watson phát hiện thi thể",
          "Con mèo bị kẹt trong lửa",
          "Chủ nhà bà Hudson thét lên"
        ],
        "correct_option_index": 0,
        "points": 10,
        "explanation": "Gertrude Helwig bị lửa táp trúng mặt khi tưới xăng phóng hỏa phát ra tiếng thét thất thanh."
      },
      {
        "id": "q6",
        "question": "Nhân vật nào trong băng nhóm luôn mang theo cây gậy gộc gụ shillelagh bên mình?",
        "options": [
          "Ambroise Beaupre",
          "Chandler Davenport",
          "Israel Jacobs",
          "Gerald Locke"
        ],
        "correct_option_index": 0,
        "points": 10,
        "explanation": "Ambroise Beaupre luôn mang theo gậy shillelagh bên mình."
      },
      {
        "id": "q7",
        "question": "Israel Jacobs đồng thời làm công việc bán thời gian ở hai nơi nào?",
        "options": [
          "Camden House và Nhà hàng Ship and Turtle",
          "221B Baker St và Scotland Yard",
          "Nhà hát Lyceum và Khách sạn Clarendon",
          "Tiệm xì gà Havana và Bệnh viện St. Bartholomew"
        ],
        "correct_option_index": 0,
        "points": 10,
        "explanation": "Israel Jacobs làm việc tại Camden House (để rình rập Holmes) và nhà hàng Ship and Turtle."
      }
    ]
  },
  "solution_summary": {
    "mastermind": "Nhóm sát thủ Băng Pentacle (Elle Fanning, Chandler Davenport, Ambroise Beaupre, Gertrude Helwig, Israel Jacobs)",
    "motive": "Trả thù cho vụ triệt phá đường dây buôn lậu Outer Docks năm 1891.",
    "holmes_optimal_path": ["221B", "13SW", "38EC", "28WC"],
    "holmes_clue_count": 4,
    "full_truth": "Băng nhóm The Pentacle tập hợp người thân các tù nhân vụ buôn lậu 1891 nhằm trả thù Holmes. Elle Fanning cho độc Cyanide vào trà; Israel Jacobs ném thùng dưa chuột làm chấn thương chân Holmes; Chandler Davenport nấp ở Camden House nổ súng bắn nhầm Marvin Pemberton thành Holmes; Gertrude Helwig và Ambroise Beaupre tưới xăng đốt 221B. Sherlock Holmes đã phát hiện ra trước, nhắn mật thư bằng quy luật chữ cái đầu cho Lestrade và giấu mình an toàn tại tiệm văn phòng phẩm A. W. Faber!"
  }
};
