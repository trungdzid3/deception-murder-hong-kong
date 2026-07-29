export const SHERLOCK_CASE_1 = {
  "case_id": "sherlock_case_1",
  "title": "Vụ Án 1: Bức Tranh Bị Đánh Tráo (The Swapped Canvas)",
  "author": "Sherlock Holmes Fan Case (Tân thủ)",
  "setting_date": "Ngày 10 tháng 9 năm 1890",
  "intro": {
    "story_text": "Sáng thứ Tư, ngày 10 tháng 9 năm 1890, Ngài Archibald - chủ sở hữu Phòng tranh Archibald danh giá bậc nhất London - hớt hải tìm đến 221B Baker Street. Kiệt tác duy nhất 'Hoàng hôn trên sông Thames' của danh họa Turner đã bị đánh tráo thành hàng giả ngay trước buổi đấu giá quốc tế lớn nhất thập kỷ!\n\n\"Anh Holmes, tôi tiêu đời rồi! Bức tranh kiệt tác duy nhất của Turner đã bị tráo thành hàng giả! Sáng nay lúc 8 giờ mở cửa phòng tranh, bức tranh vẫn nằm trong khung nhưng màu sắc dại hơn. Đêm qua phòng tranh khóa cẩn thận từ bên trong, con chó ngao canh gác Brutus dữ tợn nhưng sáng ra vẫn nằm ngủ ngon lành.\"\n\nHolmes điềm tĩnh hỏi: \"Ngài nghi ngờ ai không?\"\n\n\"Có chứ! Julian - gã sưu tầm đối thủ thề làm mọi cách để bôi nhọ buổi đấu giá này. Ngoài ra còn có Elias, gã họa sĩ từng đi tù vì chép tranh giả.\" Holmes mỉm cười: \"Thú vị đây, Watson. Chúng ta bắt đầu dạo chơi quanh London thôi!\"",
    "initial_clues": [
      {
        "title": "📜 Hợp đồng bảo hiểm Bức tranh 'Hoàng hôn trên sông Thames'",
        "type": "certificate",
        "issuer": "TẬP ĐOÀN BẢO HIỂM HOÀNG GIA LONDON",
        "cert_no": "POLICY #2009-1890",
        "detail": "CHỨNG THƯ BẢO HIỂM NGHỆ THUẬT QUỐC TẾ\n----------------------------------------\nBên được bảo hiểm: Ngài Archibald - Phòng tranh Archibald (10 EC).\nTài sản: Bức tranh kiệt tác 'Hoàng hôn trên sông Thames' (J.M.W. Turner).\n\n- Giá trị bảo hiểm: 20,000 Bảng Anh (£20,000).\n- Ngân hàng bảo chứng tài chính: Ngân hàng Trung tâm London (17 WC).\n- Ngày lập hợp đồng: Ngày 09 tháng 9 năm 1890."
      },
      {
        "title": "🖼️ Biên bản kiểm tra bức tranh nhái tại hiện trường",
        "type": "report",
        "issuer": "HIỆN TRƯỜNG PHÒNG TRANH ARCHIBALD (10 EC)",
        "detail": "BIÊN BẢN KHÁM NGHIỆM BAN ĐẦU\n----------------------------------------\n- Bức tranh giả được đặt trong khung gỗ mạ vàng nguyên bản.\n- Bề mặt: Mùi sơn dầu lanh và bột màu tươi bốc lên sực nức.\n- Đánh giá chuyên môn: Bức tranh nhái được vẽ chép lại cực kỳ tỉ mỉ và mới hoàn thiện chưa tới 1 tuần."
      },
      {
        "title": "🗝️ Báo cáo an ninh cửa & Con chó ngao Brutus",
        "type": "evidence",
        "issuer": "GHI NHẬN AN NINH BAN ĐÊM",
        "detail": "BÁO CÁO HIỆN TRƯỜNG 10 EC\n----------------------------------------\n- Cửa chính & cửa sổ: Khóa kín từ bên trong, không có bất kỳ dấu hiệu cạy phá hay đột nhập từ bên ngoài.\n- Danh sách chìa khóa: Chỉ có Ngài Archibald và Quản lý Victor sở hữu chìa khóa.\n- Chó gác đêm Brutus: Giống chó ngao cực kỳ dữ tợn với người lạ. Đêm qua Brutus vẫn nằm ngủ bình yên, không sủa một tiếng nào."
      },
      {
        "title": "💼 Hồ sơ nghi phạm ban đầu (Julian & Elias)",
        "type": "dossier",
        "issuer": "SỔ TAY GHI CHÉP NGHI PHẠM BAN ĐẦU",
        "detail": "DANH SÁCH NGHI PHẠM KHẢ NGHI:\n----------------------------------------\n1. Julian (Dinh thự 08 EC): Nhà sưu tầm nghệ thuật đối thủ không đội trời chung, từng thề phá hoại buổi đấu giá.\n2. Elias (Xưởng vẽ 14 SE): Họa sĩ chép tranh từng ngồi tù vì tội chép tranh giả, mới mãn hạn gần đây."
      }
    ],
    "unlocked_nodes": ["10EC"]
  },
  "nodes": {
    "10EC": {
      "id": "10EC",
      "title": "Phòng tranh Archibald (Hiện trường vụ án)",
      "area": "EC",
      "type": "crime_scene",
      "map_coords": {"left":"72%","top":"32%"},
      "content": "Hiện trường không có dấu hiệu bị đột nhập. Kính và ổ khóa nguyên vẹn. Con chó ngao Brutus vẫy đuôi thân thiện khi chúng tôi bước vào. Tiến gần bức tranh giả, Holmes đưa mũi ngửi: \"Mùi dầu lanh và sơn dầu vẫn còn rất mới, bức tranh này mới được vẽ chưa quá một tuần.\" Quản lý Victor đang đứng ghi chép sổ sách gần đó. Anh ta mặc chiếc áo măng-tô màu xám, trông khá bồn chồn và nhợt nhạt. Căn phòng thoang thoảng mùi khói xì gà nồng đậm. Holmes liếc nhìn ngón tay trỏ và ngón giữa của Victor, chúng bị ám vàng vì hút thuốc lá nhiều.",
      "unlocks": {
        "nodes": ["14SE", "22SW", "05WC"],
        "evidence_items": [
          "Con chó ngáo Brutus vẫy đuôi thân thiện khi có người vào.",
          "Bức tranh giả mới vẽ chưa tới 1 tuần.",
          "Quản lý Victor mặc áo măng-tô màu xám, mùi xì gà nồng đậm, ngón tay ám vàng."
        ]
      },
      "key_hints": [
        "Lưu ý phản ứng của Brutus khi có người vào so với mô tả ban đầu của chủ nhân.",
        "Vật chứng: áo măng-tô xám và mùi xì gà của người đang có mặt."
      ]
    },
    "13SW": {
      "id": "13SW",
      "title": "Sở cảnh sát Scotland Yard (Thanh tra Lestrade)",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": {"left":"38.5%","top":"68%"},
      "content": "Thanh tra Lestrade gãi đầu gãi tai: \"Vụ đánh tráo à? Chắc chắn là do gã họa sĩ Elias làm. Hắn vừa ra tù tháng trước. Các anh không cần điều tra đâu, chiều nay tôi sẽ cho người đến tóm cổ hắn là xong chuyện!\"",
      "unlocks": {
        "nodes": ["14SE"],
        "evidence_items": ["Lestrade vội vã quy kết cho họa sĩ Elias mà không có bằng chứng."],
        "key_hints": ["Lời kết luận vội vã của Lestrade mang tính chất đánh lạc hướng."]
      }
    },
    "14SE": {
      "id": "14SE",
      "title": "Xưởng vẽ của họa sĩ Elias",
      "area": "SE",
      "type": "suspect_interview",
      "map_coords": {"left":"65%","top":"78%"},
      "content": "Elias đang sống trong một căn gác xép tồi tàn. Anh ta hoảng hốt khi thấy chúng tôi: \"Tôi thề tôi không biết gì về vụ trộm! Tuần trước, một gã mặc áo măng-tô xám, đội mũ sụp mặt đã đến thuê tôi vẽ chép lại bức 'Hoàng hôn trên sông Thames' qua một tấm ảnh chụp. Hắn trả bằng tiền mặt, giấu mặt rất kỹ, nhưng tôi nhớ rõ hắn sực nức mùi xì gà đắt tiền. Hắn yêu cầu tôi bỏ bức tranh giả vào tủ đồ số 4 ở ga King's Cross cách đây 2 ngày.\"",
      "unlocks": {
        "nodes": ["05WC", "22SW"],
        "evidence_items": [
          "Một khách hàng lạ mặt (áo măng-tô xám, mùi xì gà) thuê Elias chép tranh.",
          "Tranh giả được giao tại tủ đồ số 4 ga King's Cross."
        ]
      },
      "key_hints": [
        "Đối chiếu mô tả người thuê Elias (áo măng-tô xám, mùi xì gà) với những người bạn đã gặp."
      ]
    },
    "08EC": {
      "id": "08EC",
      "title": "Dinh thự của Julian",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": {"left":"68%","top":"24%"},
      "content": "Người quản gia ra mở cửa và cau mày: \"Ngài Julian không có nhà. Ngài ấy đã đi nghỉ dưỡng ở Paris từ hai tuần trước và phải đến cuối tháng này mới trở về. Ngài ấy không liên lạc hay gửi thư từ gì về London cả.\"",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Julian đi nghỉ dưỡng ở Paris từ 2 tuần trước, không có mặt ở London."]
      },
      "key_hints": ["Thời gian biểu của Julian chứng minh anh ta không liên quan đến vụ việc."]
    },
    "05WC": {
      "id": "05WC",
      "title": "Cửa hàng Họa cụ xóm Đông",
      "area": "WC",
      "type": "location_search",
      "map_coords": { "left": "40%", "top": "26%" },
      "content": "Ông chủ cửa hàng lật cuốn sổ tay: \"Khoảng một tuần trước, Elias có đến mua toan vẽ và một lượng lớn sơn dầu. Đi cùng anh ta là một gã mặc áo măng-tô xám đứng chờ ngoài cửa. Gã đó là người trả tiền. Tôi không thấy mặt hắn, nhưng lúc hắn đứng đó, khói xì gà bay mù mịt cả góc phố.\"",
      "unlocks": {
        "nodes": ["22SW"],
        "evidence_items": ["Một gã mặc áo măng-tô xám, mùi xì gà nồng nặc là người trả tiền mua họa cụ cho Elias."]
      },
      "key_hints": ["Mô tả người trả tiền cho Elias khớp với kẻ thuê anh ta và người tại hiện trường."]
    },
    "22SW": {
      "id": "22SW",
      "title": "Quán rượu & Sòng bạc Cáo Đỏ (Porky)",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": {"left":"34%","top":"84%"},
      "content": "Ông trùm Porky nhếch mép khi nghe hỏi thăm: \"Phòng tranh Archibald à? Tôi không biết gì về nghệ thuật. Nhưng tên quản lý Victor của chỗ đó thì là khách VIP ở đây. Hắn đang nợ sòng bạc này tới 5,000 bảng Anh. Tối qua hắn vừa hứa với tôi là 'sắp có một món hàng lớn' để thế chấp trừ nợ.\"",
      "unlocks": {
        "nodes": ["17WC"],
        "evidence_items": ["Victor nợ sòng bạc 5,000 Bảng Anh và hứa thế chấp món hàng lớn trừ nợ."]
      },
      "key_hints": ["Liên hệ động cơ tài chính này với những người liên quan."]
    },
    "17WC": {
      "id": "17WC",
      "title": "Ngân hàng Trung tâm",
      "area": "WC",
      "type": "clue_inspection",
      "map_coords": {"left":"44%","top":"36%"},
      "content": "Nhân viên giao dịch kiểm tra sổ sách: \"Tài khoản của Phòng tranh Archibald rất khỏe mạnh. Tuy nhiên, tài khoản cá nhân của Victor - người quản lý - thì đã cạn kiệt từ ba tháng nay.\"",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Tài khoản cá nhân của Victor cạn kiệt hoàn toàn."]
      },
      "key_hints": ["Ai trong số những người liên quan có khó khăn tài chính?"]
    },
    "30EC": {
      "id": "30EC",
      "title": "Tòa soạn báo The Times",
      "area": "EC",
      "type": "clue_inspection",
      "map_coords": {"left":"76%","top":"34%"},
      "content": "Tổng biên tập Henry Ellis lật tờ báo ngày hôm qua: \"Phòng tranh Archibald dạo này rất nổi tiếng. Ngài Archibald vừa mua bảo hiểm cho bức 'Hoàng hôn trên sông Thames' trị giá 20,000 bảng Anh. Ngoài ra không có tin tức tội phạm nào đáng chú ý ở khu vực đó.\"",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Bức tranh thật được bảo hiểm trị giá 20,000 Bảng."]
      },
      "key_hints": ["Giá trị tài sản khổng lồ của bức tranh thật."]
    },
    "96NW": {
      "id": "96NW",
      "title": "Tiệm thuộc da Henderson",
      "area": "NW",
      "type": "decoy",
      "map_coords": {"left":"18%","top":"46%"},
      "content": "Xưởng chế tác da thuộc hoạt động bình thường. Không có manh mối nào liên quan tới vụ đánh tráo bức tranh.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "98SW": {
      "id": "98SW",
      "title": "Khách sạn Victoria Club",
      "area": "SW",
      "type": "decoy",
      "map_coords": {"left":"30%","top":"88%"},
      "content": "Khách sạn dành cho khách du lịch. Không phát hiện dấu vết hay đối tượng nghi vấn.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "11EC": {
      "id": "11EC",
      "title": "Chủ xưởng đóng tàu Albert Jenkins",
      "area": "EC",
      "type": "decoy",
      "map_coords": {"left":"74%","top":"16%"},
      "content": "Xưởng đóng tàu Albert Jenkins làm việc bận rộn. Không có thông tin gì về vụ tráo tranh.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "14SW": {
      "id": "14SW",
      "title": "Kensington Tea Rooms",
      "area": "SW",
      "type": "decoy",
      "map_coords": {"left":"20%","top":"66%"},
      "content": "Quán trà quý tộc Kensington hoạt động bình thường, không có dấu vết khả nghi.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "21EC": {
      "id": "21EC",
      "title": "Văn phòng quản ngục Newgate",
      "area": "EC",
      "type": "decoy",
      "map_coords": {"left":"86%","top":"24%"},
      "content": "Hồ sơ phạm nhân Newgate được lưu trữ cẩn thận. Không có manh mối nào liên quan.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "24WC": {
      "id": "24WC",
      "title": "Tiệm đồng hồ Alfred Higgins",
      "area": "WC",
      "type": "decoy",
      "map_coords": {"left":"48%","top":"22%"},
      "content": "Tiệm sửa đồng hồ cổ Alfred Higgins buôn bán bình thường, không liên quan vụ án.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "31WC": {
      "id": "31WC",
      "title": "Phòng tranh William Blake",
      "area": "WC",
      "type": "decoy",
      "map_coords": {"left":"54%","top":"34%"},
      "content": "Phòng triển lãm tranh nghệ thuật yên tĩnh, không có manh mối nào.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "45NW": {
      "id": "45NW",
      "title": "Tiệm đồng hồ Oxford Street",
      "area": "NW",
      "type": "decoy",
      "map_coords": {"left":"20%","top":"30%"},
      "content": "Cửa hàng bán đồng hồ quả lắc bình thường, không có manh mối khả nghi.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "54SW": {
      "id": "54SW",
      "title": "Hội trường Victoria Memorial",
      "area": "SW",
      "type": "decoy",
      "map_coords": {"left":"28%","top":"82%"},
      "content": "Hội trường sinh hoạt cộng đồng yên tĩnh, không phát hiện sự cố.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "66EC": {
      "id": "66EC",
      "title": "Union Bank of London",
      "area": "EC",
      "type": "decoy",
      "map_coords": {"left":"92%","top":"18%"},
      "content": "Chi nhánh ngân hàng Union Bank hoạt động bình thường, không có liên hệ vụ án.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "78NW": {
      "id": "78NW",
      "title": "Bệnh viện đại học University College",
      "area": "NW",
      "type": "decoy",
      "map_coords": {"left":"34%","top":"42%"},
      "content": "Bệnh viện tiếp nhận bệnh nhân thông thường, không có báo cáo nghi vấn.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "82EC": {
      "id": "82EC",
      "title": "Đại lý vận tải biển Xavier",
      "area": "EC",
      "type": "decoy",
      "map_coords": {"left":"86%","top":"44%"},
      "content": "Đại lý tàu biển Xavier làm việc bình thường, không có lịch trình khả nghi.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "99NW": {
      "id": "99NW",
      "title": "Hội động vật học Zoological Society",
      "area": "NW",
      "type": "decoy",
      "map_coords": {"left":"16%","top":"48%"},
      "content": "Trụ sở hội nghiên cứu động vật yên tĩnh, không có dấu vết nào.",
      "unlocks": { "nodes": [], "evidence_items": [] }
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
    { "name": "Tòa soạn báo The Times", "code": "30EC", "category": "Báo chí", "address": "30 East Central St", "desc": "Tòa soạn nhật báo London." },
    { "name": "Henderson Leather", "code": "96NW", "category": "Chế tác da", "address": "96 North West St", "desc": "Xưởng sản xuất đồ da thuộc." },
    { "name": "Khách sạn Victoria Club", "code": "98SW", "category": "Khách sạn", "address": "98 South West St", "desc": "Khách sạn sang trọng khu Victoria." },
    { "name": "Albert Jenkins Shipyard", "code": "11EC", "category": "Xưởng tàu", "address": "11 East Central St", "desc": "Xưởng đóng tàu sông Thames." },
    { "name": "Kensington Tea Rooms", "code": "14SW", "category": "Quán trà", "address": "14 South West St", "desc": "Quán trà cao cấp." },
    { "name": "Newgate Prison Office", "code": "21EC", "category": "Quản ngục", "address": "21 East Central St", "desc": "Văn phòng nhà tù Newgate." },
    { "name": "Alfred Higgins Watchmaker", "code": "24WC", "category": "Đồng hồ", "address": "24 West Central St", "desc": "Tiệm đồng hồ cổ." },
    { "name": "William Blake Gallery", "code": "31WC", "category": "Phòng tranh", "address": "31 West Central St", "desc": "Phòng trưng bày nghệ thuật." },
    { "name": "Oxford Street Watchmaker", "code": "45NW", "category": "Đồng hồ", "address": "45 North West St", "desc": "Tiệm đồng hồ Oxford." },
    { "name": "Victoria Memorial Hall", "code": "54SW", "category": "Hội trường", "address": "54 South West St", "desc": "Hội trường sinh hoạt." },
    { "name": "Union Bank of London", "code": "66EC", "category": "Ngân hàng", "address": "66 East Central St", "desc": "Chi nhánh ngân hàng thương mại." },
    { "name": "University College Hospital", "code": "78NW", "category": "Bệnh viện", "address": "78 North West St", "desc": "Bệnh viện đại học." },
    { "name": "Xavier Shipping Agency", "code": "82EC", "category": "Vận tải", "address": "82 East Central St", "desc": "Đại lý vé tàu biển." },
    { "name": "Zoological Society", "code": "99NW", "category": "Hội nghiên cứu", "address": "99 North West St", "desc": "Hội động vật học London." }
  ],
  "newspaper": {
    "paper_name": "THE TIMES LONDON",
    "issue_date": "THỨ TƯ, NGÀY 10 THÁNG 9 NĂM 1890",
    "articles": [
      {
        "date": "10 THÁNG 9, 1890",
        "title": "BUỔI ĐẤU GIÁ NGHỆ THUẬT QUỐC TẾ TẠI BLOOMSBURY",
        "summary": "Phòng tranh Archibald chuẩn bị đấu giá kiệt tác 'Hoàng hôn trên sông Thames' của danh họa Turner với gói bảo hiểm 20,000 Bảng Anh.",
        "related_code": "10EC",
        "full_text": "BLOOMSBURY INTERNATIONAL ART AUCTION (10 Sept 1890)\nThe Archibald Gallery will host the grandest international art auction of the decade tomorrow. The centerpiece of the event is the famous masterpiece 'Sunset on the Thames' by J.M.W. Turner, recently insured for £20,000. Elite collectors from Paris, Vienna, and New York have arrived in London for this momentous occasion."
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
