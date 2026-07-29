export const SHERLOCK_CASE_6 = {
  "case_id": "sherlock_case_6",
  "title": "Vụ Án 6: Bản Thiết Kế Bị Đánh Cắp (The Stolen Blueprint)",
  "author": "Sherlock Holmes Fan Case (Nhập môn nâng cao)",
  "setting_date": "Thứ Ba, ngày 14 tháng 10 năm 1890",
  "holmes_clues": 3,
  "scoring": {
    "part1_max": 100,
    "part2_max": 30,
    "total_max": 130,
    "penalty_per_extra_clue": 5,
    "note": "Holmes đạt 100 điểm với 3 bước đi tối ưu (10WC -> 12NW -> 08EC). Điểm tối đa của người chơi là 130 điểm. Trừ 5 điểm cho mỗi địa điểm thừa so với Holmes."
  },
  "intro": {
    "story_text": "Sáng thứ Ba, ngày 14 tháng 10 năm 1890, Arthur Pendelton - một sinh viên cơ khí xuất sắc - hốt hoảng lao vào căn hộ 221B Baker Street.\n\n\"Anh Holmes, bản thiết kế tâm huyết của tôi đã bị đánh cắp đêm qua khỏi phòng thí nghiệm! Đó là sơ đồ của một hệ thống điều khiển vòng kín dùng cho động cơ hơi nước. Nếu không có nó để nộp cho hội đồng vào chiều nay, tôi sẽ trượt tốt nghiệp!\"\n\n\"Cậu rời phòng lúc nào? Có ai khả nghi không?\" Holmes điềm tĩnh hỏi.\n\n\"Tôi rời đi lúc 9 giờ tối qua. Sáng nay đến, cửa sổ kính nhìn ra sân cỏ phía sau bị đập vỡ, ngăn kéo bàn bị cạy tung. Chỉ có hai người biết chi tiết về dự án này: Thomas Higgins – gã sinh viên cùng khóa luôn ganh tị; và Giáo sư Sterling – người hướng dẫn của tôi. Tuần trước, Giáo sư đòi đứng tên đồng tác giả nhưng tôi từ chối vì toàn bộ thuật toán phản hồi đều do tôi tự tính toán.\"\n\nHolmes quay sang bạn: \"Một bài toán logic thú vị đây. Chúng ta bắt đầu từ đâu nào?\"",
    "initial_clues": [
      {
        "title": "Báo cáo nghiệm thu hiện trường phòng thí nghiệm",
        "type": "report",
        "issuer": "SCOTLAND YARD - GIÁM ĐỊNH HIỆN TRƯỜNG (10 WC)",
        "detail": "BIÊN BẢN KHÁM NGHIỆM PHÒNG THÍ NGHIỆM CƠ KHÍ\n----------------------------------------\n- Nạn nhân mất tài sản: Sinh viên Arthur Pendelton.\n- Hiện trường: Tủ đồ án bàn học bị cạy phá chốt cơ học.\n- Tài sản bị cắp: Sơ đồ thuật toán ma trận điều khiển vòng kín cho động cơ hơi nước."
      },
      {
        "title": "Báo cáo dấu vết cửa sổ kính đập vỡ",
        "type": "evidence",
        "issuer": "SCOTLAND YARD - KHÁM NGHIỆM VẬT CHỨNG (10 WC)",
        "detail": "GHI NHẬN DẤU VẾT CỬA SỔ PHÒNG THÍ NGHIỆM\n----------------------------------------\n- Điểm đột nhập: Cửa sổ kính nhìn ra phía bãi cỏ bên ngoài bị đập vỡ.\n- Đặc điểm mảnh vỡ: Toàn bộ mảnh kính rơi vãi lả tả ra bãi cỏ bên ngoài, sàn phòng bên trong hoàn toàn sạch sẽ."
      },
      {
        "title": "Biên bản vật chứng vệt tro xì gà thượng hạng",
        "type": "evidence",
        "issuer": "BẮT ĐƯỢC TẠI HIỆN TRƯỜNG PHÒNG THÍ NGHIỆM",
        "detail": "GIÁM ĐỊNH VẬT CHỨNG CỰC KỲ QUAN TRỌNG\n----------------------------------------\n- Vật chứng: Vệt tro xì gà mịn màu xám trắng tỏa mùi thơm đặc trưng.\n- Chủng loại xì gà: Xì gà Cuba Partagas thượng hạng đắt tiền.\n- Thời gian để lại: Rụng tại rãnh ngăn kéo chưa quá 12 tiếng."
      }
    ],
    "unlocked_nodes": ["10WC"]
  },
  "nodes": {
    "10WC": {
      "id": "10WC",
      "title": "Phòng thí nghiệm Cơ khí (Hiện trường vụ án)",
      "area": "WC",
      "type": "crime_scene",
      "map_coords": { "left": "44%", "top": "28%" },
      "content": "Ngăn kéo bàn của Arthur bị cạy tung bằng vật cứng. Cửa sổ kính nhìn ra sân cỏ phía sau bị đập vỡ, tạo ra một lỗ hổng vừa đủ để thò tay vào mở chốt. Nhìn kỹ rìa bệ cửa sổ, toàn bộ những mảnh kính vỡ vụn đều rơi lả tả trên bãi cỏ bên ngoài – sàn nhà bên trong lại hoàn toàn sạch sẽ.\n\nNgay cạnh rãnh trượt của ngăn kéo, có một vệt tro màu xám trắng rất mịn, tỏa ra mùi thơm ngầy ngậy đặc trưng của một điếu xì gà đắt tiền rụng xuống chưa quá 12 tiếng.",
      "unlocks": {
        "nodes": ["08EC", "12NW", "17EC"],
        "evidence_items": [
          "Toàn bộ mảnh kính vỡ vụn rơi trên bãi cỏ bên ngoài, sàn bên trong hoàn toàn sạch sẽ.",
          "Vệt tro xì gà đắt tiền mùi ngầy ngậy cạnh ngăn kéo bị cạy."
        ]
      },
      "key_hints": [
        "Quan sát phía nào có mảnh kính vỡ, phía nào sạch.",
        "Ai là người hút xì gà đắt tiền trong số những người liên quan?"
      ]
    },
    "14SW": {
      "id": "14SW",
      "title": "Căn hộ của sinh viên Thomas Higgins",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "left": "20%", "top": "66%" },
      "content": "Căn hộ tồi tàn và bừa bộn. Higgins nhồi những nhúm thuốc lá sợi rẻ tiền vào một chiếc tẩu gỗ cộc kệch, gắt gỏng: \"Tôi ăn cắp bản thiết kế đó làm gì? Các ma trận điều khiển của nó tôi còn chẳng hiểu! Tối qua tôi ở quán rượu Cáo Trắng đến tận nửa đêm. Các anh đi mà hỏi Giáo sư Sterling ấy, viện trợ nghiên cứu của ông ta sắp bị cắt sạch rồi!\"",
      "unlocks": {
        "nodes": ["22WC"],
        "evidence_items": [
          "Higgins hút thuốc lá sợi cuộn rẻ tiền bằng tẩu gỗ.",
          "Higgins khai tối qua ở Quán Cáo Trắng, gợi ý điều tra Giáo sư Sterling."
        ]
      },
      "key_hints": ["Lưu ý loại thuốc lá Higgins đang dùng so với vật chứng tại hiện trường."]
    },
    "08EC": {
      "id": "08EC",
      "title": "Văn phòng Giáo sư Sterling",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "left": "68%", "top": "24%" },
      "content": "Giáo sư Sterling bệ vệ ngồi sau bàn làm việc bằng gỗ sồi, tay kẹp một điếu xì gà Cuba tỏa khói nghi ngút. \"Thật đáng tiếc cho Arthur. Nếu cậu ta chịu hợp tác với tôi, hệ thống đó đã có thể cứu vãn nhiều thứ.\"\n\nQuan sát kỹ, trên mu bàn tay phải của Giáo sư có một vết xước rướm máu tươi còn mới. Ông ta vội giấu tay xuống gầm bàn: \"Tối qua tôi làm việc ở đây đến khuya. Thật xui xẻo cho cậu sinh viên kia.\"",
      "unlocks": {
        "nodes": ["12NW", "17EC"],
        "evidence_items": [
          "Giáo sư Sterling đang hút xì gà Cuba đắt tiền.",
          "Vết xước mới rướm máu trên mu bàn tay phải của Giáo sư Sterling."
        ]
      },
      "key_hints": [
        "Đối chiếu loại xì gà Sterling đang hút với vệt tro tìm thấy tại hiện trường.",
        "Không có ai xác nhận lời khai tối qua của Sterling."
      ]
    },
    "22WC": {
      "id": "22WC",
      "title": "Quán rượu Cáo Trắng",
      "area": "WC",
      "type": "suspect_interview",
      "map_coords": { "left": "48%", "top": "34%" },
      "content": "Ông chủ quán lau ly, gật gù: \"Thomas Higgins hả? Tối qua nó ngồi ở góc kia uống rượu từ 8 giờ tối đến gần 1 giờ sáng mới lảo đảo đi về. Nó cứ lải nhải phàn nàn về mấy phương trình tự động hóa của thằng nhóc Arthur.\"",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Thomas Higgins có mặt tại Quán Cáo Trắng liên tục từ 8 giờ tối đến gần 1 giờ sáng."]
      },
      "key_hints": ["Đối chiếu khung giờ Higgins ở đây với thời điểm xảy ra vụ đột nhập."]
    },
    "12NW": {
      "id": "12NW",
      "title": "Phòng Giáo vụ Đại học UCL",
      "area": "NW",
      "type": "clue_inspection",
      "map_coords": { "left": "32%", "top": "16%" },
      "content": "Trưởng phòng Giáo vụ mở sổ cái tài chính: \"Khoa Cơ khí của Giáo sư Sterling đang gặp khủng hoảng nghiêm trọng. Nếu cuối tháng này ông ấy không trình làng được một phát minh hoặc bằng sáng chế mới nào có tính ứng dụng cao, hội đồng quản trị sẽ cắt 100% ngân sách và đóng cửa phòng thí nghiệm của ông ấy.\"",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Giáo sư Sterling sẽ bị cắt 100% ngân sách và đóng cửa phòng thí nghiệm nếu không có phát minh mới cuối tháng này."]
      },
      "key_hints": ["Liên hệ tình huống khủng hoảng ngân sách này với động cơ có thể có của các người liên quan."]
    },
    "17EC": {
      "id": "17EC",
      "title": "Cửa hàng Xì gà Havana",
      "area": "EC",
      "type": "clue_inspection",
      "map_coords": { "left": "74%", "top": "26%" },
      "content": "Người bán hàng kiểm tra lọ tro mà Holmes mang tới: \"Mùi hương và chất tro này? Đây là loại xì gà Partagas thượng hạng nhập từ Cuba. Khách quen mua loại này của tôi không nhiều, Giáo sư Sterling là một trong số những người luôn đặt hàng đều đặn mỗi tuần.\"",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Xì gà Partagas Cuba: Giáo sư Sterling là khách quen đặt hàng đều đặn mỗi tuần tại tiệm Havana."]
      },
      "key_hints": ["So sánh loại xì gà Sterling hay mua với vệt tro tìm thấy tại hiện trường."]
    },
    "13SW": {
      "id": "13SW",
      "title": "Sở Cảnh sát Scotland Yard (Thanh tra Lestrade)",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "left": "38.5%", "top": "68%" },
      "content": "Thanh tra Lestrade ngáp dài: \"Vụ vỡ cửa kính ở trường đại học à? Chắc chắn là do bọn trộm vặt quanh phố nhòm ngó đồ đồng nát thôi. Hoặc là cậu sinh viên Higgins kia ghen tị nên đập phá. Tôi sẽ phái người đi bắt Higgins dọa cho một trận là nó khai ngay!\"",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Lestrade quy kết Higgins là hung thủ mà không nêu bằng chứng cụ thể."]
      },
      "key_hints": ["Lời kết luận vội của Lestrade chỉ là đánh lạc hướng điều tra."]
    },
    "96NW": {
      "id": "96NW",
      "title": "Tiệm thuộc da Henderson",
      "area": "NW",
      "type": "decoy",
      "map_coords": { "left": "18%", "top": "46%" },
      "content": "Xưởng chế tác da thuộc hoạt động bình thường, không có manh mối liên quan vụ án.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "98SW": {
      "id": "98SW",
      "title": "Khách sạn Victoria Club",
      "area": "SW",
      "type": "decoy",
      "map_coords": { "left": "30%", "top": "88%" },
      "content": "Khách sạn dành cho khách du lịch. Không phát hiện dấu vết hay đối tượng nghi vấn.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "11EC": {
      "id": "11EC",
      "title": "Chủ xưởng đóng tàu Albert Jenkins",
      "area": "EC",
      "type": "decoy",
      "map_coords": { "left": "74%", "top": "16%" },
      "content": "Xưởng đóng tàu Albert Jenkins làm việc bận rộn. Không có thông tin gì về vụ án.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "21EC": {
      "id": "21EC",
      "title": "Văn phòng quản ngục Newgate",
      "area": "EC",
      "type": "decoy",
      "map_coords": { "left": "86%", "top": "24%" },
      "content": "Hồ sơ phạm nhân Newgate được lưu trữ cẩn thận. Không có manh mối nào liên quan.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "24WC": {
      "id": "24WC",
      "title": "Tiệm đồng hồ Alfred Higgins",
      "area": "WC",
      "type": "decoy",
      "map_coords": { "left": "48%", "top": "22%" },
      "content": "Tiệm sửa đồng hồ cổ Alfred Higgins buôn bán bình thường, không liên quan vụ án.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "31WC": {
      "id": "31WC",
      "title": "Phòng tranh William Blake",
      "area": "WC",
      "type": "decoy",
      "map_coords": { "left": "54%", "top": "34%" },
      "content": "Phòng triển lãm tranh nghệ thuật yên tĩnh, không có manh mối nào.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "45NW": {
      "id": "45NW",
      "title": "Tiệm đồng hồ Oxford Street",
      "area": "NW",
      "type": "decoy",
      "map_coords": { "left": "20%", "top": "30%" },
      "content": "Cửa hàng bán đồng hồ quả lắc bình thường, không có manh mối khả nghi.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "54SW": {
      "id": "54SW",
      "title": "Hội trường Victoria Memorial",
      "area": "SW",
      "type": "decoy",
      "map_coords": { "left": "28%", "top": "82%" },
      "content": "Hội trường sinh hoạt cộng đồng yên tĩnh, không phát hiện sự cố.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "66EC": {
      "id": "66EC",
      "title": "Union Bank of London",
      "area": "EC",
      "type": "decoy",
      "map_coords": { "left": "92%", "top": "18%" },
      "content": "Chi nhánh ngân hàng Union Bank hoạt động bình thường, không có liên hệ vụ án.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "78NW": {
      "id": "78NW",
      "title": "Bệnh viện đại học University College",
      "area": "NW",
      "type": "decoy",
      "map_coords": { "left": "34%", "top": "42%" },
      "content": "Bệnh viện tiếp nhận bệnh nhân thông thường, không có báo cáo nghi vấn.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "82EC": {
      "id": "82EC",
      "title": "Đại lý vận tải biển Xavier",
      "area": "EC",
      "type": "decoy",
      "map_coords": { "left": "86%", "top": "44%" },
      "content": "Đại lý tàu biển Xavier làm việc bình thường, không có lịch trình khả nghi.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "99NW": {
      "id": "99NW",
      "title": "Hội động vật học Zoological Society",
      "area": "NW",
      "type": "decoy",
      "map_coords": { "left": "16%", "top": "48%" },
      "content": "Trụ sở hội nghiên cứu động vật yên tĩnh, không có dấu vết nào.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    }
  },
  "directory": [
    { "name": "Arthur Pendelton", "category": "Sinh viên", "address": "14 SW Kensington", "code": "14SW", "desc": "Sinh viên cơ khí tác giả bản thiết kế bị đánh cắp." },
    { "name": "Giáo sư Sterling", "category": "Giáo sư UCL", "address": "08 EC Bloomsbury", "code": "08EC", "desc": "Giáo sư hướng dẫn Khoa Cơ khí." },
    { "name": "Higgins, Thomas (Sinh viên)", "category": "Sinh viên", "address": "14 SW Whitechapel", "code": "14SW", "desc": "Sinh viên cùng khóa ganh tị với Arthur." },
    { "name": "Phòng Giáo vụ UCL", "category": "Đại học", "address": "12 NW Gower St", "code": "12NW", "desc": "Nơi quản lý ngân sách và cấp phép phòng thí nghiệm." },
    { "name": "Phòng thí nghiệm Cơ khí UCL", "category": "Hiện trường", "address": "10 WC Gower St", "code": "10WC", "desc": "Hiện trường vụ mất cắp bản thiết kế." },
    { "name": "Quán rượu Cáo Trắng", "category": "Quán rượu", "address": "22 WC Strand", "code": "22WC", "desc": "Quán rượu nơi Higgins uống đến 1 giờ sáng." },
    { "name": "Cửa hàng Xì gà Havana", "category": "Cửa hàng", "address": "17 EC Minories", "code": "17EC", "desc": "Tiệm bán xì gà Partagas nhập khẩu Cuba." },
    { "name": "Scotland Yard (Lestrade)", "category": "Cơ quan", "address": "13 SW Victoria", "code": "13SW", "desc": "Sở cảnh sát London." },
    { "name": "Henderson Leather", "category": "Chế tác da", "address": "96 NW Marylebone", "code": "96NW", "desc": "Xưởng sản xuất đồ da thuộc." },
    { "name": "Khách sạn Victoria Club", "category": "Khách sạn", "address": "98 SW Victoria", "code": "98SW", "desc": "Khách sạn sang trọng khu Victoria." },
    { "name": "Albert Jenkins Shipyard", "category": "Xưởng tàu", "address": "11 EC Minories", "code": "11EC", "desc": "Xưởng đóng tàu sông Thames." },
    { "name": "Newgate Prison Office", "category": "Quản ngục", "address": "21 EC Fleet St", "code": "21EC", "desc": "Văn phòng nhà tù Newgate." },
    { "name": "Alfred Higgins Watchmaker", "category": "Đồng hồ", "address": "24 WC Strand", "code": "24WC", "desc": "Tiệm đồng hồ cổ." },
    { "name": "William Blake Gallery", "category": "Phòng tranh", "address": "31 WC High Holborn", "code": "31WC", "desc": "Phòng trưng bày nghệ thuật." },
    { "name": "Oxford Street Watchmaker", "category": "Đồng hồ", "address": "45 NW Oxford St", "code": "45NW", "desc": "Tiệm đồng hồ Oxford." },
    { "name": "Victoria Memorial Hall", "category": "Hội trường", "address": "54 SW Victoria St", "code": "54SW", "desc": "Hội trường sinh hoạt." },
    { "name": "Union Bank of London", "category": "Ngân hàng", "address": "66 EC Threadneedle St", "code": "66EC", "desc": "Chi nhánh ngân hàng thương mại." },
    { "name": "University College Hospital", "category": "Bệnh viện", "address": "78 NW Gower St", "code": "78NW", "desc": "Bệnh viện đại học." },
    { "name": "Xavier Shipping Agency", "category": "Vận tải", "address": "82 EC Minories", "code": "82EC", "desc": "Đại lý vé tàu biển." },
    { "name": "Zoological Society", "category": "Hội nghiên cứu", "address": "99 NW Regent's Park", "code": "99NW", "desc": "Hội động vật học London." }
  ],
  "newspaper": {
    "paper_name": "THE TIMES LONDON",
    "issue_date": "THỨ BA, NGÀY 14 THÁNG 10 NĂM 1890",
    "articles": [
      {
        "date": "14 THÁNG 10, 1890",
        "title": "ĐÁNH CẮP TÀI SẢN TRÍ TUỆ TẠI ĐẠI HỌC UCL",
        "summary": "Phòng thí nghiệm Cơ khí Đại học UCL bị đột nhập ban đêm. Bản thiết kế hệ thống điều khiển động cơ hơi nước của sinh viên Arthur Pendelton bị đánh cắp trước kỳ nộp bài tốt nghiệp.",
        "related_code": "10WC",
        "full_text": "INTELLECTUAL PROPERTY STOLEN AT UCL (14 Oct 1890)\nThe Engineering Laboratory at University College London was broken into last night. The blueprint for a closed-loop steam engine control system developed by student Arthur Pendelton was stolen hours before the final evaluation by the board."
      },
      {
        "date": "13 THÁNG 10, 1890",
        "title": "KHỦNG HOẢNG NGÂN SÁCH NGHIÊN CỨU TẠI UCL",
        "summary": "Hội đồng quản trị UCL chuẩn bị đánh giá lại ngân sách các khoa. Nhiều phòng thí nghiệm đứng trước nguy cơ đóng cửa nếu không đạt kết quả nghiên cứu cuối tháng.",
        "related_code": "12NW",
        "full_text": "RESEARCH BUDGET CRISIS AT UCL (13 Oct 1890)\nThe Board of Governors at UCL is scheduled to review departmental grants at the end of the month. Laboratories that fail to present actionable innovations or patents risk a 100% budget cut and immediate closure."
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
