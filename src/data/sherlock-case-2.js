export const SHERLOCK_CASE_2 = {
  "case_id": "sherlock_case_2",
  "title": "Vụ án 2: Người Phụ Nữ Hoang Tưởng (The Mystified Murderess)",
  "author": "Ystari & Raymond Edwards (SHCD Errata Edition)",
  "setting_date": "Ngày 5 tháng 3 năm 1889",
  "intro": {
    "story_text": "Sáng sớm ngày 5 tháng 3 năm 1889, Thanh tra Lestrade vội vã tìm đến 221B Baker Street với khuôn mặt biến sắc. Ông Clarendon - một quý tộc giàu có tại khu Bloomsbury - được phát hiện bị bắn chết ngay tại bàn làm việc trong phòng riêng. Cảnh sát tìm thấy Frances Nolan, người phụ nữ trẻ quen biết nạn nhân, đang trong trạng thái bần thần hoang tưởng gần hiện trường với vết máu trên tay và không thể nhớ bất kỳ điều gì đã xảy ra trong vài giờ qua. Mọi bằng chứng tại chỗ dường như quy kết Frances là kẻ sát nhân cuồng sát. Tuy nhiên, Holmes nghi ngờ cô gái trẻ đã bị thao túng tâm lý bằng kỹ thuật thôi miên cao tay để làm kẻ thế mạng cho một âm mưu chiếm đoạt gia tài tàn bạo!",
    "initial_clues": [
      "Nạn nhân Clarendon bị bắn chết bằng một viên đạn duy nhất từ súng ngắn Derringer tại bàn làm việc.",
      "Hiện trường vụ án CHỈ CÓ DUY NHẤT 1 LY RƯỢU VANG (Errata đặc biệt: Loại trừ sự xuất hiện của cô em gái Loretta tại hiện trường).",
      "Frances Nolan bị cảnh sát tạm giữ trong trạng thái hoang tưởng, ngơ ngác và liên tục bị mất trí nhớ tạm thời (blackout).",
      "Sổ tay ghi chép của nạn nhân đề cập đến cuộc gặp với luật sư Hiram Davenport và Bác sĩ Trevelyan.",
      "Nhật báo The Times đăng tin về các vụ tấn công bằng khăn thấm thuốc mê bốc hơi (Stupefying liquid) tại khu vực Lombard Street."
    ],
    "unlocked_nodes": ["36EC", "13WC", "15SW"]
  },
  "nodes": {
    "36EC": {
      "id": "36EC",
      "title": "Căn hộ hai chị em Frances & Loretta Nolan",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "x": 580, "y": 280 },
      "content": "Frances Nolan ngơ ngác chia sẻ: 'Trong 2 tuần qua, tôi liên tục bị ngất xỉu và mất trí nhớ 2 lần mà không rõ lý do. Lần đầu tiên tôi tỉnh dậy thấy mình đang ngồi trên ghế công viên Hyde Park. Lần thứ hai vài ngày sau, khi tôi đến Lambeth Walk (24SE) để hỏi thuê một ngôi nhà nghỉ dưỡng xa thành phố cho hai chị em, tôi lại bị ngất và sau đó tỉnh dậy tại Ga xe lửa Waterloo (Waterloo Station). Tôi đã hỏi ý kiến Bác sĩ Trevelyan và ông ấy bảo tôi chỉ bị kiệt sức. Nếu tôi có bất trắc gì xảy ra, luật sư Hiram Davenport của gia đình vẫn là người quản lý tài sản theo đúng ý nguyện cha mẹ'. Lời khai chứng minh Frances HOÀN TOÀN KHÔNG BIẾT việc di chúc của cô đã bị sửa đổi nhượng quyền cho Dr. Trevelyan!",
      "unlocks": {
        "nodes": ["24SE", "17WC", "28WC"],
        "evidence_items": [
          "Frances bị ngất xỉu 2 lần (Hyde Park và Lambeth Walk 24SE -> tỉnh ở Ga Waterloo).",
          "Frances tin rằng Luật sư Davenport vẫn quản lý tài sản, không hề biết di chúc đã bị sửa sang tên Dr. Trevelyan."
        ]
      },
      "key_hints": [
        "Frances bị thôi miên mất trí nhớ tại Lambeth Walk (24SE).",
        "Frances không biết di chúc đã bị đổi tên người thừa kế, chứng tỏ cô bị thôi miên khi ký di chúc."
      ]
    },
    "13WC": {
      "id": "13WC",
      "title": "Văn phòng Luật sư Hiram Davenport",
      "area": "WC",
      "type": "suspect_interview",
      "map_coords": { "x": 380, "y": 350 },
      "content": "Luật sư Hiram Davenport xem lại sổ sách và tiết lộ chi tiết Errata cực kỳ quan trọng: 'Tháng trước, cô Frances Nolan có tới đây cùng Bác sĩ Trevelyan - vị bác sĩ riêng phụ trách chăm sóc sức khỏe cho cô em gái Loretta. Cô Frances bày tỏ nguyện vọng muốn Bác sĩ Trevelyan trở thành người giám hộ hợp pháp toàn bộ tài sản gia đình nếu cô gặp bất trắc. Lúc ấy tôi thấy ánh mắt cô Frances đờ đẫn, thần trí vơ vẩn mộng du rất kỳ lạ. Nhưng khi nghe cô ấy bị ngất xỉu sau đó trong ngày, tôi chỉ nghĩ cô ấy bị say nắng'.",
      "unlocks": {
        "nodes": ["17WC", "14WC"],
        "evidence_items": ["Bác sĩ Trevelyan đi cùng Frances đến văn phòng luật sư khi cô ở trạng thái mộng du để đổi di chúc."]
      },
      "key_hints": [
        "Dr. Trevelyan trực tiếp đi cùng Frances khi đổi di chúc.",
        "Frances như người mộng du bị thôi miên khi ký văn bản pháp lý."
      ]
    },
    "17WC": {
      "id": "17WC",
      "title": "Phòng lưu trữ di chúc Chancery",
      "area": "WC",
      "type": "clue_inspection",
      "map_coords": { "x": 410, "y": 390 },
      "content": "Bản di chúc chính thức của Frances Nolan lập tháng 6 xác nhận: Trong trường hợp Frances qua đời hoặc mất khả năng hành vi (incapacitated), Bác sĩ Trevelyan sẽ trở thành người giám hộ duy nhất toàn quyền sở hữu và quản lý khối tài sản thừa kế khổng lồ của gia đình Nolan.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Bác sĩ Trevelyan là người thụ hưởng duy nhất từ bản di chúc mới của Frances."]
      },
      "key_hints": ["Động cơ sát hại Clarendon và hãm hại Frances thuộc về Bác sĩ Trevelyan."]
    },
    "24SE": {
      "id": "24SE",
      "title": "Căn hộ thuê bí mật Lambeth Walk",
      "area": "SE",
      "type": "location_search",
      "map_coords": { "x": 620, "y": 700 },
      "content": "Khám xét căn hộ cho thuê ở Lambeth Walk (nơi Frances bị ngất xỉu lần 2), thám tử phát hiện một phòng kín có dụng cụ thôi miên, đĩa quay con lắc pendulum và lọ thuốc mê ether bốc hơi. Chủ nhà xác nhận Bác sĩ Trevelyan thường xuyên lui tới căn hộ này dưới tên giả.",
      "unlocks": {
        "nodes": ["28WC"],
        "evidence_items": ["Phòng điều khiển thôi miên bí mật của Dr. Trevelyan tại Lambeth Walk."]
      },
      "key_hints": ["Dr. Trevelyan sử dụng địa điểm Lambeth Walk để thôi miên và điều khiển Frances."]
    },
    "15SW": {
      "id": "15SW",
      "title": "Khách sạn Clarendon lưu trú",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "x": 190, "y": 580 },
      "content": "Quản lý khách sạn nhớ lại chi tiết Errata bổ sung: 'Trong thời gian lưu trú, ông Clarendon có một phụ nữ ăn mặc rất nổi bật đến thăm. Sau đó xuất hiện người thứ hai: một gã đàn ông lực lưỡng hung tợn, có ria vây cá ngừ (thick walrus moustache) và vết sẹo dài trên má đến đe dọa đòi gặp Clarendon. Khi biết Clarendon không có ở đó, gã tức giận ngồi chực chờ ở quầy bar đến tận chạng vạng tối'. Hiện trường vụ án CHỈ CÓ 1 LY RƯỢU, chứng minh gã người lạ và cô em gái Loretta không có mặt trong phòng lúc nổ súng.",
      "unlocks": {
        "nodes": [],
        "evidence_items": [
          "Gã đàn ông có sẹo trên má đe dọa Clarendon.",
          "Chỉ có 1 ly rượu duy nhất tại hiện trường vụ án."
        ]
      },
      "key_hints": ["Chỉ có 1 ly rượu tại hiện trường, đập tan nghi vấn cô em gái Loretta tham gia bắn nổ súng."]
    },
    "28WC": {
      "id": "28WC",
      "title": "Cửa hàng súng sáu Derringer",
      "area": "WC",
      "type": "location_search",
      "map_coords": { "x": 440, "y": 320 },
      "content": "Chủ cửa hàng súng xác nhận khẩu súng Derringer gây án được mua bởi một người đàn ông đeo kính có ngoại hình giống Bác sĩ Trevelyan, nhưng biên nhận cố tình ghi tên Frances Nolan để vu khống cô.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Khẩu súng gây án do Dr. Trevelyan trực tiếp đi mua."]
      },
      "key_hints": ["Dr. Trevelyan dàn dựng bằng chứng vu khống Frances."]
    },
    "14WC": {
      "id": "14WC",
      "title": "Sở cảnh sát Scotland Yard - Hồ sơ Yoblinski (1861)",
      "area": "WC",
      "type": "clue_inspection",
      "map_coords": { "x": 360, "y": 420 },
      "content": "Hồ sơ vụ án năm 1861 ghi rõ: Cha mẹ của Frances và Loretta bị sát hại bởi Zagreb Yoblinski - một kẻ bị tâm thần hành động đơn độc. Vụ án đã khép lại và Yoblinski đã bị trừng phạt nghiêm khắc, không liên quan hung thủ vụ án hiện tại.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Tội phạm quá khứ Zagreb Yoblinski hành động đơn độc năm 1861."]
      },
      "key_hints": ["Loại trừ âm mưu liên quan đến vụ án cũ năm 1861."]
    }
  },
  "directory": [
    { "name": "Nolan, Frances & Loretta", "code": "36EC", "category": "Cư dân", "address": "36 East Central St", "desc": "Căn hộ hai chị em Frances Nolan và Loretta Nolan." },
    { "name": "Davenport, Hiram (Luật sư)", "code": "13WC", "category": "Luật sư", "address": "13 West Central St", "desc": "Văn phòng luật sư quản lý tài sản gia đình Nolan." },
    { "name": "Trevelyan, Dr. (Bác sĩ)", "code": "24SE", "category": "Bác sĩ", "address": "24 South East St", "desc": "Bác sĩ riêng của gia đình Nolan và phòng khám thôi miên bí mật." },
    { "name": "Chancery Office (Di chúc)", "code": "17WC", "category": "Cơ quan", "address": "17 West Central St", "desc": "Nơi lưu trữ di chúc pháp lý London." },
    { "name": "Khách sạn Clarendon", "code": "15SW", "category": "Khách sạn", "address": "15 South West St", "desc": "Nơi ông Clarendon lưu trú và xảy ra mâu thuẫn." },
    { "name": "Cửa hàng súng Derringer", "code": "28WC", "category": "Cửa hàng", "address": "28 West Central St", "desc": "Tiệm bán vũ khí và súng sáu nhỏ." },
    { "name": "Scotland Yard (Hồ sơ cũ)", "code": "14WC", "category": "Cơ quan", "address": "14 West Central St", "desc": "Hồ sơ vụ án tội phạm quá khứ năm 1861." }
  ],
  "newspaper": {
    "paper_name": "THE TIMES LONDON",
    "issue_date": "THỨ BA, NGÀY 5 THÁNG 3 NĂM 1889",
    "articles": [
      {
        "date": "5 THÁNG 3, 1889",
        "title": "VỤ ÁN MẠNG BÍ ẨN TẠI BLOOMSBURY",
        "summary": "Ông Clarendon được phát hiện bị bắn chết tại nhà riêng. Cảnh sát Scotland Yard đang tạm giữ cô Frances Nolan trong trạng thái bần thần hoang tưởng.",
        "related_code": "36EC"
      },
      {
        "date": "4 THÁNG 3, 1889",
        "title": "CẢNH BÁO THUỐC MÊ BỐC HƠI TẠI LOMBARD STREET",
        "summary": "Một kẻ lạ mặt đã dùng khăn thấm chất dịch mê (Stupefying liquid) làm ngất xỉu người trông coi giáo đường St. Mary Woolnoth.",
        "related_code": "24SE"
      }
    ]
  },
  "questions": {
    "part_1_main_case": [
      {
        "id": "q1",
        "question": "Ai là kẻ chủ mưu thực sự lên kế hoạch sát hại Clarendon và đổ tội cho Frances?",
        "options": [
          "Bác sĩ Trevelyan",
          "Luật sư Hiram Davenport",
          "Loretta Nolan",
          "Zagreb Yoblinski"
        ],
        "correct_option_index": 0,
        "explanation": "Bác sĩ Trevelyan đã dùng kỹ thuật thôi miên để ép Frances ký di chúc nhượng quyền giám hộ tài sản cho mình, sau đó dàn dựng vụ sát hại Clarendon để khống chế gia tài."
      },
      {
        "id": "q2",
        "question": "Chi tiết Errata nào tại hiện trường 15SW khẳng định cô em gái Loretta KHÔNG tham gia nổ súng?",
        "options": [
          "Hiện trường CHỈ CÓ DUY NHẤT 1 LY RƯỢU VANG",
          "Không tìm thấy dấu vân tay",
          "Cửa sổ bị khóa từ bên trong",
          "Có hai ly rượu vang trên bàn"
        ],
        "correct_option_index": 0,
        "explanation": "Ghi chú Errata đính chính hiện trường chỉ có 1 ly rượu vang duy nhất (thay vì 2 ly như bản cũ), đập tan nghi vấn Loretta có mặt tại hiện trường."
      },
      {
        "id": "q3",
        "question": "Động cơ chính của kẻ thủ mưu Dr. Trevelyan trong vụ án này là gì?",
        "options": [
          "Chiếm đoạt toàn bộ khối tài sản thừa kế khổng lồ của gia đình Nolan",
          "Trả thù mâu thuẫn cá nhân với Clarendon",
          "Trộm cắp bộ sưu tập súng cổ",
          "Bảo vệ bí mật y khoa"
        ],
        "correct_option_index": 0,
        "explanation": "Dr. Trevelyan muốn chiếm đoạt khối tài sản gia đình Nolan bằng cách gạt Frances vào tù/án tử và làm người giám hộ duy nhất của Loretta."
      },
      {
        "id": "q4",
        "question": "Frances Nolan tỉnh dậy ở đâu sau lần bị thôi miên ngất xỉu thứ hai tại Lambeth Walk (24SE)?",
        "options": [
          "Tại ga xe lửa Waterloo (Waterloo Station)",
          "Tại công viên Hyde Park",
          "Tại nhà nghỉ Camden House",
          "Tại bệnh viện St. Bartholomew"
        ],
        "correct_option_index": 0,
        "explanation": "Frances khai báo lần ngất xỉu thứ hai tại Lambeth Walk (24SE) kết thúc khi cô tỉnh dậy tại Ga Waterloo."
      },
      {
        "id": "q5",
        "question": "Ai là người trực tiếp đi mua khẩu súng sáu Derringer dùng làm hung khí gây án?",
        "options": [
          "Bác sĩ Trevelyan (dàn dựng đứng tên Frances)",
          "Frances Nolan",
          "Loretta Nolan",
          "Luật sư Hiram Davenport"
        ],
        "correct_option_index": 0,
        "explanation": "Dr. Trevelyan trực tiếp đi mua súng nhưng cố tình ghi tên Frances Nolan vào hóa đơn để vu khống cô."
      }
    ],
    "part_2_side_mysteries": [
      {
        "id": "q6",
        "question": "Frances Nolan bị ngất xỉu (blackout) mấy lần trong 2 tuần trước khi vụ án xảy ra?",
        "options": [
          "2 lần",
          "1 lần",
          "3 lần",
          "5 lần"
        ],
        "correct_option_index": 0,
        "explanation": "Frances xác nhận cô bị ngất xỉu mất trí nhớ 2 lần trong vòng 2 tuần."
      },
      {
        "id": "q7",
        "question": "Địa điểm nào được Bác sĩ Trevelyan dùng làm căn phòng thôi miên bí mật?",
        "options": [
          "Căn hộ thuê ở Lambeth Walk (24SE)",
          "Khách sạn Clarendon (15SW)",
          "Văn phòng luật sư (13WC)",
          "Giáo đường Lombard Street"
        ],
        "correct_option_index": 0,
        "explanation": "Thám tử khám xét 24SE Lambeth Walk phát hiện căn phòng thôi miên bí mật của Dr. Trevelyan."
      },
      {
        "id": "q8",
        "question": "Luật sư Hiram Davenport nhận xét gì về trạng thái của Frances khi cô đến lập di chúc mới cùng Dr. Trevelyan?",
        "options": [
          "Đờ đẫn, thần trí mộng du bất thường",
          "Tỉnh táo và minh mẫn",
          "Tức giận và hoảng loạn",
          "Say rượu nặng"
        ],
        "correct_option_index": 0,
        "explanation": "Luật sư Davenport nhớ lại Frances trông như người mộng du bị thôi miên khi ký di chúc."
      },
      {
        "id": "q9",
        "question": "Vụ án cũ năm 1861 sát hại cha mẹ hai chị em nhà Nolan do ai thực hiện?",
        "options": [
          "Zagreb Yoblinski",
          "Clarendon",
          "Dr. Trevelyan",
          "Hiram Davenport"
        ],
        "correct_option_index": 0,
        "explanation": "Hồ sơ cảnh sát 14WC xác nhận kẻ sát hại cha mẹ Nolan năm 1861 là Zagreb Yoblinski."
      },
      {
        "id": "q10",
        "question": "Chất dịch nào được kẻ lạ mặt sử dụng để làm ngất xỉu người trông coi giáo đường St. Mary Woolnoth?",
        "options": [
          "Thuốc mê bốc hơi (Ether / Stupefying liquid)",
          "Khí độc Carbon monoxide",
          "Rượu Gin nồng độ cao",
          "Bột ớt cay"
        ],
        "correct_option_index": 0,
        "explanation": "Nhật báo The Times đưa tin kẻ lạ mặt dùng khăn thấm thuốc mê bốc hơi dán vào mặt người trông coi giáo đường."
      }
    ]
  },
  "solution_summary": {
    "mastermind": "Bác sĩ Dr. Trevelyan",
    "motive": "Thôi miên Frances Nolan làm kẻ thế mạng để chiếm đoạt khối tài sản thừa kế khổng lồ của hai chị em nhà Nolan.",
    "full_truth": "Bác sĩ Dr. Trevelyan là kẻ chủ mưu nham hiểm đứng sau toàn bộ vụ án. Hắn lợi dụng vị trí bác sĩ riêng để lén lút đưa Frances Nolan tới căn hộ bí mật ở Lambeth Walk (24SE) và thực hiện các buổi thôi miên làm mất trí nhớ (blackout). Hắn thao túng Frances đến gặp Luật sư Davenport (13WC) để lập di chúc mới chỉ định Dr. Trevelyan làm người giám hộ hợp pháp toàn quyền quản lý tài sản (Frances hoàn toàn không biết việc này). Sau đó, Dr. Trevelyan mua súng Derringer đứng tên Frances (28WC), trực tiếp sát hại ông Clarendon (hiện trường chỉ có 1 ly rượu) và dàn dựng để Frances trở thành kẻ cuồng sát hoang tưởng. Nhờ các chi tiết bổ sung Errata, âm mưu thôi miên tàn bạo của Dr. Trevelyan đã bị vạch trần trước ánh sáng pháp lý!"
  }
};
