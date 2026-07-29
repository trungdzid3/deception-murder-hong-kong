export const SHERLOCK_CASE_5 = {
  "case_id": "sherlock_case_5",
  "title": "Vụ án 5: Cán Cân Chao Đảo (The Case of the Unsettled Balance)",
  "author": "Ilias Monemvasiotis",
  "setting_date": "Ngày 11 tháng 6 năm 1888",
  "intro": {
    "story_text": "Sáng sớm thứ Hai ngày 11 tháng 6 năm 1888, trong căn phòng khách ấm áp tại 221B Baker Street, Sherlock Holmes nằm dài trên ghế sô-fa trong bộ áo khoác mộng mị, ánh mắt nhìn xa xăm sau một đêm làm việc miệt mài với các ống nghiệm. Thanh tra Lestrade tìm đến báo tin về một vụ ngã tử vong từ tầng cao tại địa chỉ 63 phố Fleet Street, góc ngõ Shoe Lane. Lestrade cho rằng đây là một vụ tự tử thông thường của một gã lang thang. Holmes không thể rời phòng, nên Bác sĩ Watson cùng đội thám tử nhí Wiggins lập tức lên đường điều tra. Nhưng họ không ngờ rằng, vụ tai nạn này mở đầu cho một chuỗi án mạng tàn bạo liên quan đến thuyết 4 nguyên tố cổ đại (Hỏa, Thủy, Phong, Thổ) nhân danh cuộc trả thù bi kịch từ năm 1867!",
    "initial_clues": [
      {
        "title": "📜 Báo cáo khám nghiệm tử thi 63 Fleet Street",
        "detail": "Báo cáo khám nghiệm Bác sĩ Sir Jasper Meeks:\n'Nạn nhân nam vỡ hộp sọ và gãy nhiều xương do ngã từ tầng cao. Khuôn mặt bị biến dạng nặng. Quần áo có bám mùi khói nhẹ kỳ lạ.'"
      },
      {
        "title": "👵 Lời khai nhân chứng cụ bà sống đối diện Shoe Lane",
        "detail": "Ghi nhận nhân chứng:\nCụ bà nghe tiếng động mạnh như bao than ngã sầm rạng sáng. Nhìn qua sương mờ thấy bóng một người đàn ông vội vã tháo chạy."
      },
      {
        "title": "📜 Thư đe dọa ký tên Empedocles (Triết lý 4 Nguyên tố)",
        "detail": "Nội dung bức thư nhắn bí ẩn:\n\"Fire consumes, water preserves, air carries, and earth receives. All things return to their proper state.\n- Empedocles\"\n\n(Dịch: \"Lửa thiêu rụi, nước bảo tồn, không khí chuyên chở, và đất mẹ tiếp nhận. Mọi thứ sẽ trở về đúng trạng thái nguyên bản. - Empedocles\")"
      }
    ],
    "unlocked_nodes": ["63EC"]
  },
  "nodes": {
    "63EC": {
      "id": "63EC",
      "title": "Hiện trường 63 Fleet Street (Góc ngõ Shoe Lane)",
      "area": "EC",
      "type": "crime_scene",
      "map_coords": {"left":"58.5%","top":"36.5%"},
      "content": "Căn nhà hoang số 63 Fleet Street xơ xác, các cửa sổ bị đóng ván gỗ. Thanh tra Lestrade dẫn chúng ta ra sân sau nơi thi thể nạn nhân nằm trên nền đá lạnh: \"Không có dấu hiệu ẩu đả, không có ví tiền hay giấy tờ. Nhiều khả năng chỉ là một gã lang thang tự tử ngã từ mái nhà. Tuy nhiên, cụ bà sống tại căn nhà đối diện ngõ Shoe Lane (34EC) có báo tin nghe thấy tiếng động sầm rạng sáng\". Bác sĩ Sir Jasper Meeks tháo găng tay kiểm tra: \"Nạn nhân bị vỡ hộp sọ và gãy nhiều xương, tử vong tức thì do ngã từ trên cao. Mặt nạn nhân bị biến dạng nặng không thể nhận diện. Tuy nhiên, quần áo có mùi khói nhẹ bộc phát rất kỳ lạ\".",
      "unlocks": {
        "nodes": ["34EC", "22SW", "13SW"],
        "evidence_items": ["Nạn nhân 63EC bị ngã từ trên cao, mặt biến dạng, quần áo có mùi khói nhẹ."]
      },
      "key_hints": ["Frank Jamieson bị tạo dựng hiện trường như ngã tự tử (Không khí), nhưng thực chất bị chết cháy (Hỏa)."]
    },
    "34EC": {
      "id": "34EC",
      "title": "Nhà cụ bà đối diện 63 Fleet Street",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": {"left":"70.9%","top":"56.1%"},
      "content": "Cụ bà sống đối diện Shoe Lane cho biết: \"Tôi nghe thấy một tiếng động khủng khiếp như bao than rơi từ trên xe xuống! Tôi báo cảnh sát nhưng họ không nghe. Sáng sớm hôm đó trong sương mờ, tôi thấy một bóng người di chuyển rất nhanh qua ngõ. Tôi cũng đọc báo thấy có bài viết về một gã mang dao tấn công người khác!\".",
      "unlocks": {
        "nodes": ["35EC"],
        "evidence_items": ["Nhân chứng nghe tiếng ngã và thấy bóng người lạ chạy trốn lúc rạng sáng."]
      },
      "key_hints": ["Cụ bà gợi ý kiểm tra báo Police Gazette tại 35EC."]
    },
    "7EC": {
      "id": "7EC",
      "title": "Nhà trọ Mrs. Hagwood (Nơi Martha Jamieson ở)",
      "area": "EC",
      "type": "crime_scene",
      "map_coords": {"left":"65%","top":"30%"},
      "content": "Bà chủ trọ Hagwood kể lại: \"Cô Martha Jamieson thuê căn hộ riêng ở đây vài tuần nay vì mâu thuẫn với chồng. Đêm qua xảy ra hỏa hoạn trong phòng cô ấy. Chúng tôi dập lửa rất nhanh, căn phòng chỉ bị ám khói. Người ta bảo không khí ngột ngạt làm cô ấy chết ngạt trước khi lửa cháy tới\". Tuy nhiên, thám tử phát hiện quần áo của Martha ẩm ướt bất thường và vết ướt trên sàn phòng tắm chứng tỏ cô ấy bị dìm chết đuối (Thủy) trước khi lửa được châm lên (Hỏa).",
      "unlocks": {
        "nodes": ["10EC", "39EC"],
        "evidence_items": ["Martha Jamieson bị dìm chết đuối trong phòng tắm trước khi nhà bị đốt cháy."]
      },
      "key_hints": ["Martha bị dàn cảnh chết cháy (Hỏa) nhưng thực chất chết do dìm nước (Thủy)."]
    },
    "10EC": {
      "id": "10EC",
      "title": "Khách sạn Metropolitan Hotel (Angus McAllister)",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": {"left":"72%","top":"32%"},
      "content": "Ông Angus McAllister hào hứng khoe: \"Tôi nhìn thấy toàn bộ vụ cháy ở nhà trọ Hagwood từ phòng khách sạn! Tôi đã trả lời phỏng vấn trên tờ báo The Times và mua hẳn 50 tờ báo! Tôi còn nhớ thấy hai chiếc xe cấp cứu chạy đến sau vụ cháy, một chiếc rồi lại thêm một chiếc nữa!\".",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Hai chiếc xe cấp cứu xuất hiện tại hiện trường vụ cháy."]
      },
      "key_hints": ["Sir Jasper Meeks dùng xe cấp cứu để đánh tráo và di chuyển thi thể."]
    },
    "39EC": {
      "id": "39EC",
      "title": "Nhà riêng vợ chồng Jamieson",
      "area": "EC",
      "type": "location",
      "map_coords": {"left":"70%","top":"38%"},
      "content": "Căn nhà bừa bộn và bám bụi. Trên tường treo hai bằng tốt nghiệp Đại học UCL mang tên Frank Jamieson và Martha Jamieson. Trên bàn làm việc có một mảnh giấy nhắn ngắn: \"Frank, Chúng ta không thể tiếp tục thế này. Hãy đến gặp em tại căn hộ góc đường Clifton & Sun Street lúc 10 giờ. - M.\". Mảnh giấy này trùng nét chữ với bức thư gửi Pearl Jones!",
      "unlocks": {
        "nodes": ["41EC", "43WC"],
        "evidence_items": ["Mảnh giấy nhắn giả mạo chữ Martha gửi Frank Jamieson dụ đến hiện trường."]
      },
      "key_hints": ["Chữ viết do Sir Jasper Meeks giả mạo để dụ các nạn nhân."]
    },
    "78WC": {
      "id": "78WC",
      "title": "Nhà Pearl Jones",
      "area": "WC",
      "type": "location",
      "map_coords": {"left":"48%","top":"36%"},
      "content": "Trong căn hộ của cô Pearl Jones (nạn nhân tử vong tại nhà tắm Thổ Nhĩ Kỳ), thám tử tìm thấy một bức thư đe dọa nhem nhuốc: \"Cô Jones, Cô phải đến nhà tắm Nevill's Turkish Baths tối nay. Đi một mình. Không đèn. Không được từ chối. Fire consumes, water preserves, air carries, and earth receives. All things return to their proper state. Đến lúc 9:30. - Empedocles\". Ngoài ra còn có bức thư tình từ chồng mới cưới Douglas Ferguson.",
      "unlocks": {
        "nodes": ["92WC", "54WC", "178WC"],
        "evidence_items": ["Bức thư đe dọa ký tên Empedocles gửi Pearl Jones.", "Lịch hẹn tại nhà tắm Nevill's."]
      },
      "key_hints": ["Mã ký tên Empedocles chứa triết lý 4 nguyên tố."]
    },
    "178WC": {
      "id": "178WC",
      "title": "Nhật ký bí mật của Pearl Jones (Khám xét kỹ hơn)",
      "area": "WC",
      "type": "clue_inspection",
      "map_coords": {"left":"49%","top":"37%"},
      "content": "Dưới đáy hòm trang điểm giấu cuốn nhật ký cũ của Pearl Jones: \"Tối nay chúng tôi đến nhà tắm Haley. Philippe mang loại cây Belladonna đến để thử nghiệm tĩnh tâm. Agnes không muốn thử nhưng chúng tôi ép cô ấy uống. Liều quá mạnh làm Agnes co giật ngạt thở. Frank đứng nhìn không làm gì. Để che giấu sự thật, Frank bảo dìm xác cô ấy xuống nước và dựng hiện trường chết đuối accident. Nhưng khi tôi về nhà, tôi nhìn thấy một bóng người đứng trong bóng tối theo dõi tất cả... Sir Jasper Meeks!\".",
      "unlocks": {
        "nodes": ["43SW"],
        "evidence_items": ["Cuốn nhật ký tiết lộ bi kịch Agnes Monroe bị dìm chết năm 1867 và sự chứng kiến của Meeks."]
      },
      "key_hints": ["Động cơ vụ án là Sir Jasper Meeks trả thù cho bi kịch của người yêu Agnes Monroe năm 1867."]
    },
    "92WC": {
      "id": "92WC",
      "title": "Nhà tắm Thổ Nhĩ Kỳ Nevill's Turkish Baths",
      "area": "WC",
      "type": "crime_scene",
      "map_coords": {"left":"51%","top":"38%"},
      "content": "Nhân viên nhà tắm cho biết Pearl Jones được tìm thấy chết trong phòng tắm hơi ngâm nước. Cảnh sát cho rằng cô bị ngất do nhiệt và đuối nước (Thủy). Tuy nhiên, Bác sĩ Murray khám nghiệm nhận xét hiện trường không hề có dấu vết giãy giụa chống cự của người bị đuối nước. Cô ấy đã bị đầu độc bằng chiết xuất thảo mộc Belladonna (Thổ) trước khi đưa vào phòng tắm!",
      "unlocks": {
        "nodes": ["93WC", "22SW"],
        "evidence_items": ["Pearl Jones bị đầu độc bằng Belladonna (Thổ) chứ không phải chết đuối (Thủy)."]
      },
      "key_hints": ["Pearl Jones bị dàn cảnh chết đuối nhưng thực tế bị đầu độc Belladonna."]
    },
    "90SE": {
      "id": "90SE",
      "title": "Công viên Archbishop's Park (Hòm gỗ chôn sống)",
      "area": "SE",
      "type": "crime_scene",
      "map_coords": {"left":"50.5%","top":"74%"},
      "content": "Con chó Bram của gã Alby Sam đã đào được một chiếc hòm gỗ chôn dưới đất trong công viên. Bên trong hòm là thi thể của nhà khảo cổ Philippe Pelletier. Công chúng ngỡ anh bị chôn sống (Thổ), nhưng khám nghiệm của Murray chứng minh trong hòm gỗ không hề có vết cào cấu hay giãy giụa. Philippe đã bị rút hết oxy ngạt thở (Khí) trong phòng kín của Meeks trước khi đặt vào hòm chôn!",
      "unlocks": {
        "nodes": ["66SE", "11SE"],
        "evidence_items": ["Philippe Pelletier bị ngạt thở trong phòng kín (Khí) trước khi bỏ vào hòm chôn."]
      },
      "key_hints": ["Pelletier bị dàn cảnh chôn sống (Thổ) nhưng thực chất chết ngạt (Khí)."]
    },
    "66SE": {
      "id": "66SE",
      "title": "Nhà gã Alby Sam (Chủ con chó Bram)",
      "area": "SE",
      "type": "suspect_interview",
      "map_coords": {"left":"62%","top":"80%"},
      "content": "Alby Sam tỏ ra hằn học nhưng khi thấy giấy giới thiệu Credentials (R) từ Scotland Yard thì đồng ý hợp tác. Con chó Bram ngậm ra một mẩu báo rách The Times ngày 4 tháng 6 ghi lại vụ cháy nhà trọ.",
      "unlocks": {
        "nodes": ["11SE"],
        "evidence_items": ["Con chó Bram tìm thấy mẩu báo The Times gần hiện trường."]
      },
      "key_hints": ["Xác nhận sự liên quan của con chó Bram trong việc phát hiện thi thể."]
    },
    "11SE": {
      "id": "11SE",
      "title": "Dirk Stephen (Trợ lý đồn khám nghiệm)",
      "area": "SE",
      "type": "suspect_interview",
      "map_coords": {"left":"68%","top":"73%"},
      "content": "Dirk Stephen xin việc tại đồn khám nghiệm của Sir Jasper Meeks kể lại: \"Tôi nghe thấy tiếng động kỳ lạ và tiếng thở dốc hốt hoảng từ phòng riêng của Meeks. Meeks gạt đi bảo là tiếng chó của ông ấy. Nhưng tôi ghét chó nên bỏ đi luôn. Meeks làm gì có nuôi con chó nào!\".",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Meeks giấu nạn nhân Pelletier trong phòng kín hút oxy trước khi cho vào hòm."]
      },
      "key_hints": ["Chứng minh Meeks không nuôi chó, tiếng động trong phòng là nạn nhân bị nhốt ngạt khí."]
    },
    "43WC": {
      "id": "43WC",
      "title": "Đại học UCL (University College London)",
      "area": "WC",
      "type": "location",
      "map_coords": {"left":"42.5%","top":"23%"},
      "content": "Trong phòng giáo vụ Đại học UCL, vị giáo sư già cho chúng tôi xem bức ảnh tập thể dự án năm 1867: \"EMPEDOCLES PROJECT — 2A, 2G, 2H — 1867\". Bức ảnh chụp 6 sinh viên xuất sắc gồm 2 triết gia (Pearl Jones, Martha Jamieson), 2 y khoa (Sir Jasper Meeks, Agnes Monroe) và 2 khảo cổ (Frank Jamieson, Philippe Pelletier). Vị giáo sư thở dài: \"Tội nghiệp cô Agnes Monroe...\".",
      "unlocks": {
        "nodes": ["43SW"],
        "evidence_items": ["Bức ảnh dự án Empedocles 1867 kết nối cả 6 nhân vật liên quan."]
      },
      "key_hints": ["Dự án Empedocles 1867 giải mã toàn bộ mối quan hệ giữa các nạn nhân và hung thủ Meeks."]
    },
    "43SW": {
      "id": "43SW",
      "title": "Nhà cha mẹ Agnes Monroe",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": {"left":"22%","top":"64%"},
      "content": "Bà Monroe đau buồn đưa cho chúng tôi cuốn nhật ký thời đại học của con gái Agnes: \"Họ bảo con tôi bị chết đuối tai nạn. Nhưng nhật ký Agnes ghi rõ nhóm bạn Pearl, Martha, Frank, Philippe dụ cô ấy dùng thử cây Belladonna tại nhà tắm. Khi Agnes gặp nguy hiểm, không ai cứu cô ấy mà còn dìm cô ấy xuống nước để ngụy tạo tai nạn. Người yêu của Agnes thời đó chính là Jasper Meeks!\".",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Agnes Monroe là người yêu cũ của Jasper Meeks bị nhóm bạn hãm hại năm 1867."]
      },
      "key_hints": ["Meeks lên kế hoạch đảo ngược 4 nguyên tố để trừng phạt từng kẻ liên quan đến cái chết của Agnes."]
    },
    "54SW": {
      "id": "54SW",
      "title": "Đại sứ quán Nga (Thông tin sát thủ thuê Ivan Moroz)",
      "area": "SW",
      "type": "location",
      "map_coords": {"left":"28%","top":"82%"},
      "content": "Quan chức đại sứ quán xác nhận: Gã nam giới có vết sẹo dài trên mặt nói tiếng Nga là Ivan Moroz - một tên tay sai đâm thuê chém thuê khét tiếng đi cùng Sergei Sokolov. Chúng được ai đó tại London thuê để di chuyển thi thể và phóng hỏa dàn cảnh.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Tên sát thủ đánh thuê Ivan Moroz và Sergei Sokolov được Meeks thuê hỗ trợ dàn cảnh."]
      },
      "key_hints": ["Gã có sẹo mặt trong báo Police Gazette là Ivan Moroz."]
    },
    "96NW": {
      "id": "96NW",
      "title": "Tiệm thuộc da Henderson",
      "area": "NW",
      "type": "decoy",
      "content": "Xưởng chế tác da thuộc hoạt động bình thường, không có manh mối liên quan vụ án.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "98SW": {
      "id": "98SW",
      "title": "Khách sạn Victoria Club",
      "area": "SW",
      "type": "decoy",
      "content": "Khách sạn dành cho khách du lịch. Không phát hiện dấu vết hay đối tượng nghi vấn.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "11EC": {
      "id": "11EC",
      "title": "Chủ xưởng đóng tàu Albert Jenkins",
      "area": "EC",
      "type": "decoy",
      "content": "Xưởng đóng tàu Albert Jenkins làm việc bận rộn. Không có thông tin gì về vụ án.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "14SW": {
      "id": "14SW",
      "title": "Kensington Tea Rooms",
      "area": "SW",
      "type": "decoy",
      "content": "Quán trà quý tộc Kensington hoạt động bình thường, không có dấu vết khả nghi.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "21EC": {
      "id": "21EC",
      "title": "Văn phòng quản ngục Newgate",
      "area": "EC",
      "type": "decoy",
      "content": "Hồ sơ phạm nhân Newgate được lưu trữ cẩn thận. Không có manh mối nào liên quan.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "24WC": {
      "id": "24WC",
      "title": "Tiệm đồng hồ Alfred Higgins",
      "area": "WC",
      "type": "decoy",
      "content": "Tiệm sửa đồng hồ cổ Alfred Higgins buôn bán bình thường, không liên quan vụ án.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "31WC": {
      "id": "31WC",
      "title": "Phòng tranh William Blake",
      "area": "WC",
      "type": "decoy",
      "content": "Phòng triển lãm tranh nghệ thuật yên tĩnh, không có manh mối nào.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "39EC_decoy": {
      "id": "39EC_decoy",
      "title": "Ngân hàng Barings",
      "area": "EC",
      "type": "decoy",
      "content": "Ngân hàng Barings giao dịch chứng khoán bình thường, không có ghi chép bất thường.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "45NW": {
      "id": "45NW",
      "title": "Tiệm đồng hồ Oxford Street",
      "area": "NW",
      "type": "decoy",
      "content": "Cửa hàng bán đồng hồ quả lắc bình thường, không có manh mối khả nghi.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "54SW_decoy": {
      "id": "54SW_decoy",
      "title": "Hội trường Victoria Memorial",
      "area": "SW",
      "type": "decoy",
      "content": "Hội trường sinh hoạt cộng đồng yên tĩnh, không phát hiện sự cố.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "66EC": {
      "id": "66EC",
      "title": "Union Bank of London",
      "area": "EC",
      "type": "decoy",
      "content": "Chi nhánh ngân hàng Union Bank hoạt động bình thường, không có liên hệ vụ án.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "78NW": {
      "id": "78NW",
      "title": "Bệnh viện đại học University College",
      "area": "NW",
      "type": "decoy",
      "content": "Bệnh viện tiếp nhận bệnh nhân thông thường, không có báo cáo nghi vấn.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "82EC": {
      "id": "82EC",
      "title": "Đại lý vận tải biển Xavier",
      "area": "EC",
      "type": "decoy",
      "content": "Đại lý tàu biển Xavier làm việc bình thường, không có lịch trình khả nghi.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    },
    "99NW": {
      "id": "99NW",
      "title": "Hội động vật học Zoological Society",
      "area": "NW",
      "type": "decoy",
      "content": "Trụ sở hội nghiên cứu động vật yên tĩnh, không có dấu vết nào.",
      "unlocks": { "nodes": [], "evidence_items": [] }
    }
  },
  "questions": {
    "part_1_main_case": [
      {
        "id": "q1",
        "question": "Ai là nạn nhân thực sự tử vong tại hiện trường 63 Fleet Street?",
        "options": [
          "Frank Jamieson",
          "Philippe Pelletier",
          "Sir Jasper Meeks",
          "Ivan Moroz"
        ],
        "correct_option_index": 0,
        "explanation": "Frank Jamieson là nạn nhân tại 63 Fleet Street, bị thiêu chết trong hỏa hoạn nhưng dàn cảnh ngã từ mái nhà (Đáo ngược giữa Hỏa và Phong)."
      },
      {
        "id": "q2",
        "question": "Nguyên nhân tử vong thực sự của cô Pearl Jones tại nhà tắm Nevill's là gì?",
        "options": [
          "Chết đuối do kiệt sức",
          "Bị đầu độc bằng thảo mộc Belladonna (Thổ)",
          "Bị siết cổ ngạt thở",
          "Bị nhốt trong phòng hơi nóng"
        ],
        "correct_option_index": 1,
        "explanation": "Pearl Jones không bị chết đuối (Thủy) mà bị Meeks đầu độc bằng chất kịch độc Belladonna (Thổ) trước khi đưa vào bồn tắm."
      },
      {
        "id": "q3",
        "question": "Kẻ đứng sau toàn bộ chuỗi án mạng 4 nguyên tố cổ đại và ký tên Empedocles là ai?",
        "options": [
          "Bác sĩ pháp y Sir Jasper Meeks",
          "Nhà khảo cổ Philippe Pelletier",
          "Trùm sòng bạc Porky Shinwell",
          "Tay súng Ivan Moroz"
        ],
        "correct_option_index": 0,
        "explanation": "Sir Jasper Meeks chính là Empedocles, vị bác sĩ pháp y thực hiện chuỗi án mạng trả thù cho người yêu cũ Agnes Monroe."
      },
      {
        "id": "q4",
        "question": "Động cơ chính dẫn đến hành vi sát hại 4 nạn nhân của Sir Jasper Meeks là gì?",
        "options": [
          "Trả thù cho Agnes Monroe - người bị 4 nạn nhân hãm hại và dìm chết năm 1867",
          "Tranh đoạt tài sản bảo hiểm của gia đình Jamieson",
          "Bị tống tiền do liên quan đến vụ án mạng cũ",
          "Trộm cắp kiệt tác cổ vật của dự án Empedocles"
        ],
        "correct_option_index": 0,
        "explanation": "Năm 1867, Agnes Monroe (người yêu của Meeks) bị nhóm bạn ép dùng Belladonna rồi dìm chết dưới nước ngụy tạo tai nạn. Meeks chứng kiến và lên kế hoạch trả thù sau 21 năm."
      },
      {
        "id": "q5",
        "question": "Tên hung thủ Sir Jasper Meeks đã tẩu thoát đến đâu trên con tàu Levant Star?",
        "options": [
          "Palermo, Sicily (Ý)",
          "Paris (Pháp)",
          "Athens (Hy Lạp)",
          "Alexandria (Ai Cập)"
        ],
        "correct_option_index": 0,
        "explanation": "Sir Jasper Meeks đã lên tàu Levant Star tẩu thoát đến Palermo, Sicily (nơi có núi lửa Etna gắn liền với huyền thoại triết gia Empedocles)."
      }
    ],
    "part_2_side_mysteries": [
      {
        "id": "q6",
        "question": "Nạn nhân bi kịch khởi nguồn cho mọi sự việc năm 1867 tên là gì?",
        "options": [
          "Agnes Monroe",
          "Martha Jamieson",
          "Pearl Jones",
          "Faynola Jacobs"
        ],
        "correct_option_index": 0,
        "explanation": "Agnes Monroe là nữ sinh viên y khoa bị nhóm bạn hại chết năm 1867."
      },
      {
        "id": "q7",
        "question": "Loại cây kịch độc nào được dùng để đầu độc Pearl Jones?",
        "options": [
          "Atropa Belladonna",
          "Cyanide",
          "Arsenic",
          "Strychnine"
        ],
        "correct_option_index": 0,
        "explanation": "Atropa Belladonna (cây cà độc dược) là độc chất được Pelletier mang tới năm 1867 và Meeks dùng lại để giết Pearl Jones."
      },
      {
        "id": "q8",
        "question": "Tên con chó của Alby Sam đã đào phát hiện ra hòm gỗ chôn sống là gì?",
        "options": [
          "Bram",
          "Brutus",
          "Toby",
          "Brawn"
        ],
        "correct_option_index": 0,
        "explanation": "Con chó tên là Bram (không phải Brawn như báo đăng nhầm)."
      },
      {
        "id": "q9",
        "question": "Món ăn yêu thích của Langdale Pike tại nhà hàng Ship & Turtle là gì?",
        "options": [
          "Súp rùa (Turtle soup)",
          "Bít tết bò",
          "Cừu nướng sốt",
          "Súp hải sản"
        ],
        "correct_option_index": 0,
        "explanation": "Langdale Pike cực kỳ ưa thích món Súp rùa (Turtle soup) tại nhà hàng Ship & Turtle."
      },
      {
        "id": "q10",
        "question": "Chất gỗ thượng hạng được dùng để đóng chiếc hòm chứa thi thể Pelletier là gì?",
        "options": [
          "Gỗ gụ Honduras (Honduran mahogany)",
          "Gỗ sồi Pháp",
          "Gỗ thông Na Uy",
          "Gỗ tuyết tùng"
        ],
        "correct_option_index": 0,
        "explanation": "Ông chủ xưởng hòm Pound & Co. khẳng định hòm được đóng bằng gỗ gụ Honduras (Honduran mahogany)."
      }
    ]
  },
  "solution_summary": {
    "full_truth": "Năm 1867, tại Đại học UCL, 6 sinh viên tham gia dự án Empedocles Project gồm Pearl Jones, Martha Jamieson, Frank Jamieson, Philippe Pelletier, Sir Jasper Meeks và Agnes Monroe (người yêu Meeks). Tại nhà tắm Haley, Pelletier mang cây Belladonna đến, Pearl ép Agnes uống làm cô co giật. Để che giấu, Frank và nhóm bạn dìm Agnes xuống nước cho chết đuối và dàn cảnh tai nạn. Meeks bí mật chứng kiến tất cả và âm thầm lên kế hoạch trả thù đảo ngược 4 nguyên tố: Pearl Jones (ép ép Agnes uống độc) bị giết bằng Belladonna (Thổ) nhưng dàn cảnh chết đuối (Thủy); Frank Jamieson (bỏ rơi Agnes) bị đốt chết (Hỏa) nhưng dàn cảnh ngã từ trên cao (Phong); Philippe Pelletier (mang thuốc độc) bị rút oxy ngạt thở trong phòng kín (Phong) nhưng dàn cảnh chôn sống (Thổ); Martha Jamieson (đồng phạm) bị dìm chết đuối (Thủy) nhưng dàn cảnh chết cháy (Hỏa). Meeks thuê hai tay súng Nga Ivan Moroz và Sergei Sokolov hỗ trợ dàn cảnh rồi trốn lên tàu Levant Star sang Palermo, Sicily.",
    "mastermind": "Bác sĩ pháp y Sir Jasper Meeks (biệt hiệu Empedocles).",
    "motive": "Trả thù cho cái chết của người yêu Agnes Monroe bị nhóm bạn hãm hại năm 1867."
  },
  "directory": [
    { "name": "Alby Sam", "category": "Cư dân", "address": "66 SE Wallington Place", "code": "66SE", "desc": "Chủ con chó Bram phát hiện hòm gỗ chôn sống." },
    { "name": "Angus McAllister", "category": "Nhân chứng", "address": "10 EC Metropolitan Hotel", "code": "10EC", "desc": "Khách du lịch Scotland nhân chứng vụ cháy." },
    { "name": "Central Carriage Stables", "category": "Giao thông", "address": "5 WC High Holborn", "code": "5WC", "desc": "Trạm xe ngựa trung tâm London." },
    { "name": "Dirk Stephen", "category": "Cơ quan", "address": "11 SE Borough", "code": "11SE", "desc": "Người xin việc tại đồn khám nghiệm của Meeks." },
    { "name": "Disraeli O'Brian", "category": "Lưu trữ", "address": "14 WC Chancery Lane", "code": "14WC", "desc": "Văn phòng lưu trữ quốc gia." },
    { "name": "Douglas Ferguson", "category": "Cư dân", "address": "54 WC Strand", "code": "54WC", "desc": "Chồng mới cưới của Pearl Jones." },
    { "name": "Edward Hall", "category": "Luật sư", "address": "36 EC Old Bailey", "code": "36EC", "desc": "Luật sư đại diện vụ ly hôn của Jamieson." },
    { "name": "Frank Jamieson", "category": "Nạn nhân", "address": "39 EC Fleet St", "code": "39EC", "desc": "Nạn nhân bị thiêu chết tại 63 Fleet Street." },
    { "name": "Gilbert & Field Bookshop", "category": "Hiệu sách", "address": "41 EC Minories", "code": "41EC", "desc": "Hiệu sách bán tác phẩm về 4 nguyên tố." },
    { "name": "Henry Ellis", "category": "Tòa soạn", "address": "30 EC Fleet St", "code": "30EC", "desc": "Nhà báo tờ The Times." },
    { "name": "Ivan Moroz", "category": "Sát thủ", "address": "54 SW Kensington", "code": "54SW", "desc": "Sát thủ Nga có vết sẹo dài trên mặt." },
    { "name": "Langdale Pike", "category": "Báo chí", "address": "2 SW Pall Mall", "code": "2SW", "desc": "Chuyên gia tin đồn giới thượng lưu." },
    { "name": "Lomax", "category": "Thư viện", "address": "5 SW St James", "code": "5SW", "desc": "Thư viện trưởng London Library." },
    { "name": "Martha Jamieson", "category": "Nạn nhân", "address": "7 EC Minories", "code": "7EC", "desc": "Nạn nhân bị dìm chết tại nhà trọ Hagwood." },
    { "name": "Mrs. Hagwood", "category": "Chủ trọ", "address": "7 EC Minories", "code": "7EC", "desc": "Chủ dãy nhà trọ độc lập." },
    { "name": "Nevill's Turkish Baths", "category": "Nhà tắm", "address": "92 WC Strand", "code": "92WC", "desc": "Nhà tắm nơi Pearl Jones bị đầu độc." },
    { "name": "Pearl Jones", "category": "Nạn nhân", "address": "78 WC Strand", "code": "78WC", "desc": "Nạn nhân bị đầu độc bằng Belladonna." },
    { "name": "Philippe Pelletier", "category": "Nạn nhân", "address": "89 WC Strand", "code": "89WC", "desc": "Nhà khảo cổ nạn nhân bị ngạt thở." },
    { "name": "Porky Shinwell", "category": "Quán rượu", "address": "52 EC Whitechapel", "code": "52EC", "desc": "Chủ quán Raven & Rat Pub." },
    { "name": "Pound & Co.", "category": "Xưởng hòm", "address": "66 SW Victoria", "code": "66SW", "desc": "Xưởng sản xuất hòm gỗ gụ Honduras." },
    { "name": "Quintin Hogg", "category": "Tòa soạn", "address": "35 EC Minories", "code": "35EC", "desc": "Nhà báo tờ Police Gazette." },
    { "name": "Royal Botanic Gardens", "category": "Vườn bách thảo", "address": "98 NW Regent's Park", "code": "98NW", "desc": "Vườn bách thảo trưng bày cây Belladonna." },
    { "name": "Scotland Yard", "category": "Cảnh sát", "address": "13 SW Victoria", "code": "13SW", "desc": "Sở cảnh sát London." },
    { "name": "Sir Jasper Meeks", "category": "Bác sĩ pháp y", "address": "38 EC Fleet St", "code": "38EC", "desc": "Bác sĩ pháp y / Hung thủ Empedocles." },
    { "name": "Somerset House", "category": "Hồ sơ", "address": "17 WC Strand", "code": "17WC", "desc": "Văn phòng lưu trữ đăng ký kết hôn & khai sinh." },
    { "name": "Sotheran & Co.", "category": "Hiệu sách", "address": "72 WC High Holborn", "code": "72WC", "desc": "Hiệu sách triết học cổ đại." },
    { "name": "University College London (UCL)", "category": "Đại học", "address": "43 WC Gower St", "code": "43WC", "desc": "Trụ sở dự án Empedocles 1867." }
  ],
  "newspaper": {
    "issue_date": "Monday, 4 June 1888",
    "paper_name": "THE TIMES & POLICE GAZETTE - SPECIAL EDITION",
    "articles": [
      {
        "title": "HỎA HOẠN CHẾT NGUYỜI TẠI KHU VỰC EAST CENTRAL LONDON",
        "date": "4 Jun 1888",
        "summary": "Vụ cháy tại nhà trọ Mrs. Hagwood cướp đi sinh mạng cô Martha Jamieson. Cảnh sát nghi ngờ nạn nhân chết ngạt do khói độc.",
        "related_code": "7EC",
        "full_text": "FATAL FIRE AT EAST CENTRAL LONDON (4 June 1888)\nA fire of a serious nature occurred on the evening of the 2nd instant at a boarding establishment under the management of Mrs. Hagwood, resulting in the death of a resident. The deceased has been identified as Mrs. Martha Jamieson, who had been residing at the establishment for some time. Authorities have indicated that the incident is believed to be accidental, and no suspicion of foul play has at present been raised."
      },
      {
        "title": "CON CHÓ ĐÀO PHÁT HIỆN HÒM GỖ CHÔN BÍ ẨN TẠI ARCHBISHOP'S PARK",
        "date": "7 Jun 1888",
        "summary": "Con chó Bram của ông Alby Sam đã đào phát hiện một chiếc hòm gỗ chôn thi thể người tại công viên Archbishop's Park.",
        "related_code": "90SE",
        "full_text": "DOG LEADS OWNER TO HIDDEN COFFIN (7 June 1888)\nA most unusual and disturbing discovery has been reported from Archbishop's Park, where a body was brought to light under unexpected circumstances. The coffin was unearthed by a dog belonging to a Mr. Sam Alby, of 66 Wallington Place. Investigations are understood to be ongoing."
      },
      {
        "title": "VỤ TỬ VONG BÍ ẨN TẠI NHÀ TẮM THỔ NHĨ KỲ NEVILL'S",
        "date": "9 Jun 1888",
        "summary": "Cô Pearl Jones được phát hiện tử vong tại nhà tắm Nevill's Turkish Baths. Cảnh sát nhận định có thể do say nóng và ngạt nước.",
        "related_code": "92WC",
        "full_text": "DEATH AT NEVILL'S TURKISH BATHS (9 June 1888)\nMiss Pearl Jones was found dead early this morning at Nevill's Turkish Baths. Miss Jones, understood to have been a woman of education with a background in philosophy, had been making use of the baths the previous evening. Authorities state that the matter is believed to be an accident."
      },
      {
        "title": "VỤ TẤN CÔNG BẰNG DAO TẠI WEST-CENTRAL LONDON: PHÁC HỌA CHÂN DUNG SÁT THỦ CÓ SẸO MẶT",
        "date": "9 Jun 1888",
        "summary": "Ông G. Vickers bị một gã nói tiếng nước ngoài có vết sẹo dài trên mặt tấn công bằng dao. Cảnh sát phát hành bản phác họa chân dung nghi phạm Ivan Moroz.",
        "related_code": "54SW",
        "full_text": "ASSAULT IN WEST-CENTRAL LONDON (9 June 1888)\nMr. G. Vickers, a stationer, was attacked last evening while returning home from his place of business in a quiet street in West Central London. The assailant, who had been standing at a distance, advanced suddenly with a knife in hand. Mr. Vickers narrowly escaped. The man is described as bearing a noticeable scar near the jaw. His manner of speech was said to be unusual."
      }
    ]
  }
};
