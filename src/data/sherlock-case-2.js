export const SHERLOCK_CASE_2 = {
  "case_id": "sherlock_case_2",
  "title": "Vụ án 2: Người Phụ Nữ Hoang Tưởng (The Mystified Murderess)",
  "author": "Ystari & Raymond Edwards (SHCD Errata Edition)",
  "setting_date": "Ngày 5 tháng 3 năm 1889",
  "intro": {
    "story_text": "Sáng sớm ngày 5 tháng 3 năm 1889, Thanh tra Lestrade vội vã tìm đến 221B Baker Street với khuôn mặt biến sắc. Ông Clarendon - một quý tộc giàu có tại khu Bloomsbury - được phát hiện bị bắn chết ngay tại bàn làm việc trong phòng riêng. Cảnh sát tìm thấy Frances Nolan, người phụ nữ trẻ quen biết nạn nhân, đang trong trạng thái bần thần hoang tưởng gần hiện trường với vết máu trên tay và không thể nhớ bất kỳ điều gì đã xảy ra trong vài giờ qua. Mọi bằng chứng tại chỗ dường như quy kết Frances là kẻ sát nhân cuồng sát. Tuy nhiên, Holmes nghi ngờ cô gái trẻ đã bị thao túng tâm lý bằng kỹ thuật thôi miên cao tay để làm kẻ thế mạng cho một âm mưu chiếm đoạt gia tài tàn bạo!",
    "initial_clues": [
      "Nạn nhân Clarendon bị bắn chết bằng một viên đạn duy nhất từ súng ngắn Derringer tại bàn làm việc.",
      "Frances Nolan bị cảnh sát tạm giữ trong trạng thái hoang tưởng, ngơ ngác và liên tục bị mất trí nhớ tạm thời (blackout).",
      "Sổ tay ghi chép của nạn nhân đề cập đến cuộc gặp với luật sư Hiram Davenport và Bác sĩ Trevelyan.",
      "Nhật báo The Times đăng tin về các vụ tấn công bằng thuốc mê bốc hơi tại khu vực Lombard Street."
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
      "content": "Frances Nolan ngơ ngác chia sẻ: 'Trong 2 tuần qua, tôi liên tục bị ngất xỉu và mất trí nhớ 2 lần mà không rõ lý do. Lần đầu tiên tôi tỉnh dậy và thấy mình đang ngồi trên ghế công viên Hyde Park. Lần thứ hai vài ngày sau, khi tôi đến Lambeth Walk (24SE) để hỏi thuê nhà nghỉ dưỡng cho hai chị em, tôi lại bị ngất và tỉnh dậy tại Ga ga xe lửa Waterloo (Waterloo Station). Tôi đã hỏi ý kiến Bác sĩ Trevelyan và ông ấy bảo tôi chỉ bị kiệt sức'. Lời khai cho thấy Frances không hề nhớ mình đã mua súng hay tới căn hộ của Clarendon.",
      "unlocks": {
        "nodes": ["24SE", "17WC", "28WC"],
        "evidence_items": ["Frances bị mất trí nhớ 2 lần trong 2 tuần, tỉnh dậy ở Hyde Park và Ga Waterloo."]
      },
      "key_hints": ["Frances bị mất trí nhớ tại Lambeth Walk (24SE) trước khi tỉnh ở Ga Waterloo.", "Frances được điều trị bởi Bác sĩ Trevelyan."]
    },
    "13WC": {
      "id": "13WC",
      "title": "Văn phòng Luật sư Hiram Davenport",
      "area": "WC",
      "type": "suspect_interview",
      "map_coords": { "x": 380, "y": 350 },
      "content": "Luật sư Hiram Davenport xem lại sổ sách và tiết lộ thông tin chấn động: 'Tháng trước, cô Frances Nolan có tới đây cùng Bác sĩ Trevelyan - bác sĩ riêng chăm sóc cho cô em gái Loretta. Cô Frances yêu cầu lập di chúc mới chỉ định Bác sĩ Trevelyan làm người giám hộ hợp pháp toàn bộ tài sản của chị em cô nếu cô gặp bất kỳ bất trắc gì. Lúc đó tôi thấy mắt cô Frances đờ đẫn, thần trí như người mộng du rất kỳ lạ. Nhưng sau khi nghe cô ấy bị ngất xỉu trong ngày, tôi chỉ nghĩ cô ấy bị say nắng'.",
      "unlocks": {
        "nodes": ["17WC", "14WC"],
        "evidence_items": ["Di chúc mới chỉ định Bác sĩ Trevelyan làm người giám hộ tài sản được lập khi Frances đờ đẫn mộng du."]
      },
      "key_hints": ["Bác sĩ Trevelyan đi cùng Frances khi lập di chúc mới.", "Frances như người mộng du bị thôi miên khi ký di chúc."]
    },
    "17WC": {
      "id": "17WC",
      "title": "Phòng lưu trữ di chúc Chancery",
      "area": "WC",
      "type": "clue_inspection",
      "map_coords": { "x": 410, "y": 390 },
      "content": "Bản di chúc chính thức của Frances Nolan ký tháng 6 chỉ định rõ ràng: Trong trường hợp Frances qua đời hoặc mất khả năng hành vi, Bác sĩ Trevelyan sẽ trở thành người giám hộ toàn quyền quản lý khối tài sản thừa kế khổng lồ của gia đình Nolan.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Bác sĩ Trevelyan là người hưởng lợi duy nhất từ di chúc của Frances Nolan."]
      },
      "key_hints": ["Động cơ sát hại Clarendon và đổ tội cho Frances thuộc về Bác sĩ Trevelyan để chiếm đoạt tài sản."]
    },
    "24SE": {
      "id": "24SE",
      "title": "Căn hộ thuê Lambeth Walk",
      "area": "SE",
      "type": "location_search",
      "map_coords": { "x": 620, "y": 700 },
      "content": "Khám xét căn hộ cho thuê ở Lambeth Walk, thám tử phát hiện một phòng kín có dấu vết dụng cụ thôi miên, đĩa quay đồng hồ pendulum và lọ thuốc mê ether bốc hơi. Chủ nhà xác nhận Bác sĩ Trevelyan thường xuyên lui tới căn hộ này dưới tên giả.",
      "unlocks": {
        "nodes": ["28WC"],
        "evidence_items": ["Phòng thôi miên bí mật của Bác sĩ Trevelyan tại Lambeth Walk."]
      },
      "key_hints": ["Dr. Trevelyan sử dụng địa điểm Lambeth Walk để thôi miên và điều khiển Frances."]
    },
    "15SW": {
      "id": "15SW",
      "title": "Khách sạn Clarendon lưu trú",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "x": 190, "y": 580 },
      "content": "Quản lý khách sạn nhớ lại: 'Trong thời gian lưu trú, ông Clarendon chỉ có một người khách đến thăm. Sau đó có một gã đàn ông lực lưỡng có ria vây cá ngừ và vết sẹo dài trên má đến đe dọa ông Clarendon tại quầy bar vì mâu thuẫn tiền bạc cũ'.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Clarendon bị đe dọa bởi kẻ có sẹo trên má."]
      },
      "key_hints": ["Cuộc tranh chấp tiền bạc riêng của Clarendon với kẻ có sẹo."]
    },
    "28WC": {
      "id": "28WC",
      "title": "Cửa hàng súng sáu Derringer",
      "area": "WC",
      "type": "location_search",
      "map_coords": { "x": 440, "y": 320 },
      "content": "Chủ cửa hàng súng xác nhận khẩu súng Derringer gây án được mua bởi một người đàn ông đeo kính có ngoại hình giống Bác sĩ Trevelyan, nhưng biên nhận cố tình ghi tên Frances Nolan để tạo hiện trường giả.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Khẩu súng gây án do Dr. Trevelyan mua đứng tên Frances."]
      },
      "key_hints": ["Dr. Trevelyan trực tiếp mua súng và dàn dựng bằng chứng vu khống Frances."]
    },
    "14WC": {
      "id": "14WC",
      "title": "Sở cảnh sát Scotland Yard - Hồ sơ Yoblinski",
      "area": "WC",
      "type": "clue_inspection",
      "map_coords": { "x": 360, "y": 420 },
      "content": "Hồ sơ vụ án năm 1861 ghi rõ: Cha mẹ của Frances và Loretta bị sát hại bởi Zagreb Yoblinski - một kẻ bị bệnh tâm thần. Vụ án đã khép lại và Yoblinski đã bị trừng phạt.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Vụ án cũ gia đình Nolan đã giải quyết xong."]
      },
      "key_hints": ["Vụ án cũ không liên quan hung thủ hiện tại."]
    }
  },
  "directory": [
    { "name": "Nolan, Frances & Loretta", "code": "36EC", "category": "Cư dân", "address": "36 East Central St", "desc": "Căn hộ hai chị em Frances Nolan và Loretta Nolan." },
    { "name": "Davenport, Hiram (Luật sư)", "code": "13WC", "category": "Luật sư", "address": "13 West Central St", "desc": "Văn phòng luật sư quản lý tài sản gia đình Nolan." },
    { "name": "Trevelyan, Dr. (Bác sĩ)", "code": "24SE", "category": "Bác sĩ", "address": "24 South East St", "desc": "Bác sĩ riêng của gia đình Nolan và phòng khám thôi miên." },
    { "name": "Chancery Office (Di chúc)", "code": "17WC", "category": "Cơ quan", "address": "17 West Central St", "desc": "Nơi lưu trữ di chúc pháp lý London." },
    { "name": "Khách sạn Clarendon", "code": "15SW", "category": "Khách sạn", "address": "15 South West St", "desc": "Nơi ông Clarendon cư trú trước khi bị sát hại." },
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
        "summary": "Một kẻ lạ mặt đã dùng khăn thấm chất dịch mê stupefied làm ngất xỉu người trông coi giáo đường St. Mary Woolnoth.",
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
        "question": "Phương pháp nào được sử dụng để thao túng và làm mất trí nhớ cô Frances Nolan?",
        "options": [
          "Kỹ thuật thôi miên và thuốc mê bốc hơi",
          "Độc tố thạch tín arsenic",
          "Rượu thuốc phiện độc hại",
          "Bị chấn thương sọ não"
        ],
        "correct_option_index": 0,
        "explanation": "Dr. Trevelyan đã sử dụng kỹ thuật thôi miên kết hợp ether tại căn hộ Lambeth Walk để điều khiển Frances làm kẻ thế mạng."
      },
      {
        "id": "q3",
        "question": "Động cơ chính của kẻ thủ mưu Dr. Trevelyan trong vụ án này là gì?",
        "options": [
          "Chiếm đoạt toàn bộ khối tài sản thừa kế kế sù của gia đình Nolan",
          "Trả thù mâu thuẫn cá nhân với Clarendon",
          "Trộm cắp bộ sưu tập súng cổ",
          "Bảo vệ bí mật y khoa"
        ],
        "correct_option_index": 0,
        "explanation": "Dr. Trevelyan muốn chiếm đoạt khối tài sản gia đình Nolan bằng cách gạt Frances vào tù/án tử và làm người giám hộ duy nhất của Loretta."
      },
      {
        "id": "q4",
        "question": "Frances Nolan tỉnh dậy ở đâu sau lần bị thôi miên ngất xỉu thứ hai?",
        "options": [
          "Tại ga xe lửa Waterloo (Waterloo Station)",
          "Tại công viên Hyde Park",
          "Tại nhà nghỉ Camden House",
          "Tại bệnh viện St. Bartholomew"
        ],
        "correct_option_index": 0,
        "explanation": "Frances khai báo lần ngất xỉu thứ hai tại Lambeth Walk kết thúc khi cô tỉnh dậy tại Ga Waterloo."
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
        "question": "Luật sư Hiram Davenport nhận xét gì về trạng thái của Frances khi cô đến lập di chúc mới?",
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
    "full_truth": "Bác sĩ Dr. Trevelyan là kẻ chủ mưu nham hiểm đứng sau toàn bộ vụ án. Hắn lợi dụng vị trí bác sĩ riêng để lén lút đưa Frances Nolan tới căn hộ bí mật ở Lambeth Walk (24SE) và thực hiện các buổi thôi miên làm mất trí nhớ (blackout). Hắn thao túng Frances đến gặp Luật sư Davenport (13WC) để lập di chúc mới chỉ định Dr. Trevelyan làm người giám hộ hợp pháp toàn quyền quản lý tài sản. Sau đó, Dr. Trevelyan mua súng Derringer đứng tên Frances (28WC), trực tiếp sát hại ông Clarendon và dàn dựng hiện trường để Frances trở thành kẻ cuồng sát hoang tưởng. Nhờ sự tinh tường của thám tử, âm mưu thôi miên tàn bạo của Dr. Trevelyan đã bị vạch trần trước pháp luật!"
  }
};
