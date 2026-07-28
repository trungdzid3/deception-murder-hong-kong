export const SHERLOCK_CASE_2 = {
  "case_id": "sherlock_case_2",
  "title": "Vụ án 2: Cái Chết Của Sherlock Holmes",
  "author": "Cody Fleming (SHCD Master Edition)",
  "setting_date": "Ngày 2 tháng 12 năm 1893",
  "intro": {
    "story_text": "Bầu trời London xám xịt chìm trong nỗi bàng hoàng sâu sắc. Căn hộ 221B Baker Street của Sherlock Holmes vừa hứng chịu một vụ hỏa hoạn kinh hoàng và một thi thể cháy xém được phát hiện ngay bên trong căn phòng làm việc tan hoang. Bác sĩ John Watson bàng hoàng không thể thốt lên lời. Toàn bộ Scotland Yard và giới báo chí đều tin rằng vị thám tử lừng danh đã tử thương. Tuy nhiên, các thiếu niên nhóm thám tử phố Baker phát hiện vết đạn bắn từ sau lưng thi thể và những cuộn tài liệu mật liên quan đến Tập đoàn Vũ khí Hoàng gia bị biến mất. Liệu đây là cái chết thực sự của Holmes hay là một hạ sách vượt ngoài dự đoán của vị thiên tài?",
    "initial_clues": [
      "Vụ hỏa hoạn và thi thể cháy xém mang vết đạn sau lưng tại 221B Baker Street.",
      "Cuộn tài liệu mật về Tập đoàn Vũ khí Hoàng gia Harrington bị biến mất khỏi két sắt.",
      "Nhật báo đưa tin về mâu thuẫn giữa Lord Harrington và Huân tước Moriarty.",
      "Tin đồn về căn biệt thự bí mật của Moriarty tại khu ngoại ô phía Đông."
    ],
    "unlocked_nodes": ["221B", "13SW", "38EC", "10EC"]
  },
  "nodes": {
    "221B": {
      "id": "221B",
      "title": "Căn hộ 221B Baker Street (Hiện trường hỏa hoạn)",
      "area": "NW",
      "type": "crime_scene",
      "map_coords": { "x": 180, "y": 260 },
      "content": "Căn hộ 221B chìm trong tro tàn. Bác sĩ Watson ngồi thần thờ trên bậc cửa. Khám xét góc làm việc bị cháy, thám tử phát hiện két sắt bí mật đã bị mở bằng chìa khóa chuẩn xác. Dưới sàn nhà còn sót lại một mảnh huy hiệu kim loại mang biểu tượng của Tập đoàn Vũ khí Harrington.",
      "unlocks": {
        "nodes": ["13SW", "38EC", "10EC"],
        "evidence_items": ["Mảnh huy hiệu kim loại của Tập đoàn Vũ khí Harrington tại 221B."]
      },
      "key_hints": ["Thủ phạm có chìa khóa két sắt và mang huy hiệu Harrington."]
    },
    "13SW": {
      "id": "13SW",
      "title": "Sở cảnh sát Scotland Yard (Thanh tra Lestrade)",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "x": 210, "y": 590 },
      "content": "Thanh tra Lestrade đau đớn xác nhận: 'Chúng tôi nhận được tin báo hỏa hoạn lúc 2 giờ sáng. Thi thể bị cháy xém nặng nhưng có nhân chứng thấy một người đàn ông cao lớn vội vã rời khỏi Baker Street hướng về phía ga chốt chặn Harrington'.",
      "unlocks": {
        "nodes": ["10EC"],
        "evidence_items": ["Kẻ nghi vấn rời Baker Street hướng về ga chốt chặn Harrington."]
      },
      "key_hints": ["Manh mối dẫn trực tiếp tới khu vực Tập đoàn Harrington."]
    },
    "38EC": {
      "id": "38EC",
      "title": "Phòng khám nghiệm tử thi St. Bartholomew (Sir Jasper Meeks)",
      "area": "EC",
      "type": "clue_inspection",
      "map_coords": { "x": 550, "y": 320 },
      "content": "Bác sĩ Sir Jasper Meeks xem xét thi thể và thì thầm chi tiết chấn động: 'Thi thể bị cháy xém này tử vong do vết đạn bắn xuyên tim từ đằng sau trước khi ngọn lửa bùng phát. Tuy nhiên, chiều cao và cấu trúc xương vai của tử thi ngắn hơn Holmes gần 2 inch! Đây không phải là Sherlock Holmes!'.",
      "unlocks": {
        "nodes": ["10EC"],
        "evidence_items": ["Thi thể bị cháy xém không phải là Sherlock Holmes."]
      },
      "key_hints": ["Sherlock Holmes vẫn còn sống và đang ẩn mình điều tra ngầm."]
    },
    "10EC": {
      "id": "10EC",
      "title": "Trụ sở Tập đoàn Vũ khí Harrington",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "x": 530, "y": 280 },
      "content": "Lord Harrington bồn chồn thừa nhận: 'Đêm qua cuộn bản thiết kế pháo đài mật của chúng tôi bị đánh trộm. Chúng tôi đã nhờ Holmes cất giữ nhưng không ngờ kẻ thù đã ra tay trước'.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Tài liệu bị đánh cắp là bản thiết kế pháo đài mật của Lord Harrington."]
      },
      "key_hints": ["Động cơ vụ án liên quan đến bản thiết kế pháo đài mật."]
    }
  },
  "directory": [
    { "name": "Holmes, Sherlock (Căn hộ 221B)", "code": "221B", "category": "Căn hộ", "address": "221B Baker St", "desc": "Căn hộ hiện trường vụ hỏa hoạn bí ẩn." },
    { "name": "Scotland Yard (Cảnh sát)", "code": "13SW", "category": "Cơ quan", "address": "13 South West St", "desc": "Sở cảnh sát London." },
    { "name": "Bệnh viện St. Bartholomew", "code": "38EC", "category": "Bệnh viện", "address": "38 East Central St", "desc": "Phòng khám nghiệm tử thi Bác sĩ Sir Jasper Meeks." },
    { "name": "Tập đoàn Vũ khí Harrington", "code": "10EC", "category": "Tập đoàn", "address": "10 East Central St", "desc": "Trụ sở sản xuất vũ khí quốc phòng Harrington." }
  ],
  "newspaper": {
    "paper_name": "THE DAILY TELEGRAPH",
    "issue_date": "THỨ BẢY, NGÀY 2 THÁNG 12 NĂM 1893",
    "articles": [
      {
        "date": "2 THÁNG 12, 1893",
        "title": "THẢM HỌA TẠI 221B BAKER STREET",
        "summary": "Vụ hỏa hoạn dữ dội thiêu rụi căn hộ thám tử Sherlock Holmes. Cảnh sát đang điều tra nghi vấn sát hại.",
        "related_code": "221B"
      }
    ]
  },
  "questions": {
    "part_1_main_case": [
      {
        "id": "q1",
        "question": "Thi thể cháy xém phát hiện tại hiện trường 221B Baker Street có phải là Sherlock Holmes không?",
        "options": [
          "Không phải, Bác sĩ Sir Jasper Meeks kết luận xương vai và chiều cao ngắn hơn Holmes 2 inch",
          "Chính là Sherlock Holmes",
          "Là Bác sĩ John Watson",
          "Là Thanh tra Lestrade"
        ],
        "correct_option_index": 0,
        "explanation": "Bác sĩ Sir Jasper Meeks tại 38EC xác nhận cấu trúc xương thi thể ngắn hơn Holmes 2 inch, chứng tỏ Holmes vẫn sống."
      },
      {
        "id": "q2",
        "question": "Mục tiêu bị đánh cắp khỏi két sắt tại căn hộ 221B Baker Street là gì?",
        "options": [
          "Cuộn bản thiết kế pháo đài mật của Tập đoàn Vũ khí Harrington",
          "Bộ sưu tập kim cương hoàng gia",
          "Sổ tay nhật ký cá nhân của Watson",
          "Số tiền mặt 10,000 Bảng"
        ],
        "correct_option_index": 0,
        "explanation": "Lord Harrington xác nhận tài liệu bị cắp là bản thiết kế pháo đài mật quốc phòng."
      },
      {
        "id": "q3",
        "question": "Mảnh bằng chứng nào thu được dưới sàn nhà làm việc 221B chỉ ra liên hệ với Tập đoàn Harrington?",
        "options": [
          "Mảnh huy hiệu kim loại của Tập đoàn Vũ khí Harrington",
          "Chiếc kính nhòm mạ vàng",
          "Hộp thuốc hít bằng bạc",
          "Tấm danh thiếp của Moriarty"
        ],
        "correct_option_index": 0,
        "explanation": "Thám tử tìm thấy mảnh huy hiệu kim loại mang biểu tượng Harrington dưới sàn nhà."
      },
      {
        "id": "q4",
        "question": "Nguyên nhân tử vong thực sự của thi thể tại hiện trường là gì?",
        "options": [
          "Trúng đạn bắn từ đằng sau trước khi ngọn lửa bùng phát",
          "Bị chết cháy do khói",
          "Bị ngạt nước",
          "Bị trúng độc"
        ],
        "correct_option_index": 0,
        "explanation": "Khám nghiệm 38EC xác nhận nạn nhân bị bắn từ sau lưng trước khi căn hộ bị đốt cháy."
      },
      {
        "id": "q5",
        "question": "Sherlock Holmes đang ở đâu sau khi vụ hỏa hoạn xảy ra?",
        "options": [
          "Ẩn mình bí mật điều tra ngầm vụ án",
          "Đã qua đời",
          "Đang điều trị tại bệnh viện",
          "Bị bắt giữ tại Scotland Yard"
        ],
        "correct_option_index": 0,
        "explanation": "Holmes cố tình dàn dựng giả chết để đánh lừa kẻ thù và âm thầm truy vết cuộn tài liệu mật."
      }
    ],
    "part_2_side_mysteries": [
      {
        "id": "q6",
        "question": "Tên người bạn đồng hành thân thiết của Sherlock Holmes là gì?",
        "options": [
          "Bác sĩ John Watson",
          "Thanh tra Lestrade",
          "Sir Jasper Meeks",
          "Wiggins"
        ],
        "correct_option_index": 0,
        "explanation": "Bác sĩ John Watson là bạn thân và người ghi chép các vụ án của Holmes."
      },
      {
        "id": "q7",
        "question": "Vụ hỏa hoạn xảy ra vào thời gian nào trong ngày?",
        "options": [
          "Lúc 2 giờ sáng",
          "Lúc 12 giờ trưa",
          "Lúc 6 giờ tối",
          "Lúc 8 giờ sáng"
        ],
        "correct_option_index": 0,
        "explanation": "Thanh tra Lestrade cho biết cảnh sát nhận tin báo cháy lúc 2 giờ sáng."
      },
      {
        "id": "q8",
        "question": "Nhóm thám tử thiếu niên hỗ trợ Holmes có tên là gì?",
        "options": [
          "Nhóm thám tử phố Baker (Baker Street Irregulars)",
          "Nhóm thám tử Scotland Yard",
          "Biệt đội London",
          "Hội trinh thám Hoàng gia"
        ],
        "correct_option_index": 0,
        "explanation": "Các thiếu niên đường phố hỗ trợ Holmes có tên Baker Street Irregulars đứng đầu bởi Wiggins."
      },
      {
        "id": "q9",
        "question": "Tên tờ nhật báo đưa tin về thảm họa 221B Baker Street là gì?",
        "options": [
          "The Daily Telegraph",
          "The Times",
          "London Gazette",
          "Daily News"
        ],
        "correct_option_index": 0,
        "explanation": "Nhật báo The Daily Telegraph đăng bài trang nhất về thảm họa."
      },
      {
        "id": "q10",
        "question": "Bác sĩ khám nghiệm tử thi nổi tiếng tại Bệnh viện St. Bartholomew tên là gì?",
        "options": [
          "Sir Jasper Meeks",
          "Dr. Murray",
          "Dr. Trevelyan",
          "Dr. Mason"
        ],
        "correct_option_index": 0,
        "explanation": "Bác sĩ khám nghiệm tử thi chính của London là Sir Jasper Meeks."
      }
    ]
  },
  "solution_summary": {
    "mastermind": "Sherlock Holmes (dàn dựng) & Kẻ trộm tài liệu Harrington",
    "motive": "Holmes dàn dựng giả chết để bảo vệ bản thân và âm thầm truy bắt kẻ trộm tài liệu mật quốc phòng.",
    "full_truth": "Vụ án là màn kịch cao tay do Sherlock Holmes dàn dựng sau khi phát hiện kẻ thù âm mưu đột nhập két sắt 221B để trộm bản thiết kế pháo đài mật của Tập đoàn Harrington. Holmes đã tráo một thi thể vô danh bị bắn chết trước đó vào căn hộ và phóng hỏa đánh lừa dư luận. Nhờ khám nghiệm của Bác sĩ Sir Jasper Meeks (38EC), nhóm thám tử phố Baker đã nhận ra Holmes vẫn còn sống và đang bí mật thu hồi cuộn tài liệu mật!"
  }
};
