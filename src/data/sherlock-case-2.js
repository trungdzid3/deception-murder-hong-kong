export const SHERLOCK_CASE_2 = {
  "case_id": "sherlock_case_2",
  "title": "Vụ Án 2: Cái Chết Của Sherlock Holmes (The Death of Sherlock Holmes)",
  "author": "Cody Fleming",
  "setting_date": "Ngày 2 tháng 12 năm 1893",
  "intro": {
    "story_text": "Chúng ta chưa từng thấy Bác sĩ John Watson suy sụp như lúc này khi bước tới hiện trường vụ án. Đầu ông nghiêng sang một bên, ngồi tựa vào một chiếc thùng gỗ trên vỉa hè, gương mặt thất thần. Đống đổ nát của căn hộ 221B Baker Street vẫn còn bốc khói âm ỉ. Phía sau hàng rào cảnh sát, đám đông hiếu kỳ đang tụ tập ngày một đông. Dưới tấm vải liệm trắng gần Bác sĩ Watson là thi thể cháy xém được cho là của Sherlock Holmes.\n\nThanh tra Lestrade thì thầm: 'Đây là hiện trường tồi tệ nhất tôi từng thấy. Holmes là bạn của tất cả chúng ta, đặc biệt là Watson. Chúng ta nợ anh ấy sự công bằng, phải tìm ra sự thật trước khi dấu vết nguội lạnh'. Watson đồng ý thực hiện cuộc khám nghiệm tử thi nhanh chóng tại phòng thí nghiệm của Bác sĩ Murray.\n\nTrong khi đó, Wiggins tìm thấy một chiếc hộp sắt lớn được cứu ra từ phòng làm việc của Holmes. Chiếc hộp chứa một số chương trình kịch nghệ gần đây, một biên nhận xe ngựa từ hôm qua, một hộp quẹt diêm đã sử dụng một nửa và hai mảnh giấy nhắn bí ẩn.\n\nWiggins báo cáo thêm: 'Chúng tôi nhặt được một đống mảnh kính vỡ lả tả rơi từ cửa sổ tầng trên của Nhà nghỉ Camden House ở phía đối diện đường 221B Baker St. Ngoài ra có báo cáo về tiếng phụ nữ thét lên cùng thời điểm vụ cháy bắt đầu. Đặc biệt, chúng tôi có một nhân chứng sống tại căn hộ đối diện là bà Olivia Robins báo rằng đã thấy Sherlock gặp một người đàn ông nghi là anh trai Mycroft Holmes lúc 8:30 tối, trước khi vụ cháy bùng phát khoảng 9:00 tối'.",
    "initial_clues": [
      {
        "title": "Thư tay bí mật thu thập trong hộp sắt (#1)",
        "type": "letter",
        "issuer": "BẮT ĐƯỢC TRONG HỘP SẮT - 221B BAKER ST",
        "detail": "NỘI DUNG THƯ TAY NGUYÊN BẢN:\n\n\"S,\nNo harm will come of it, I promise!\n- M.\"\n\n----------------------------------------\nBẢN DỊCH (BÁC SĨ WATSON):\n\"S,\nSẽ không có hại gì xảy ra đâu, tôi hứa!\n- M.\""
      },
      {
        "title": "Mảnh thư tay nhắn gửi Thanh tra Lestrade (#2)",
        "type": "letter",
        "issuer": "MẢNH GIẤY CỨU ĐƯỢC TỪ CĂN HỘ 221B",
        "detail": "NỘI DUNG THƯ TAY NGUYÊN BẢN:\n\n\"Lestrade,\nAnalysis will further aid.\nBest examine remaining...\"\n\n----------------------------------------\nBẢN DỊCH (BÁC SĨ WATSON):\n\"Lestrade,\nViệc phân tích sẽ giúp ích thêm.\nTốt nhất nên kiểm tra phần còn lại...\""
      },
      {
        "title": "Cuống vé xe ngựa (Central Carriage Stables)",
        "type": "ticket",
        "issuer": "CENTRAL CARRIAGE STABLES - LONDON",
        "cert_no": "TICKET #1893-1201",
        "detail": "CUỐNG VÉ CHUYẾN XE NGỰA ĐÊM HÔM QUA\n----------------------------------------\n- Xuất phát: Baker Street (221B).\n- Điểm đến: Regent's Park.\n- Thời gian khởi hành: 8:15 PM (20:15) ngày 01/12/1893.\n- Tình trạng: Đã thanh toán cước phí."
      },
      {
        "title": "Cuống vé chương trình kịch tại Nhà hát Lyceum",
        "type": "ticket",
        "issuer": "LYCEUM THEATRE - LONDON",
        "cert_no": "VIP SEAT A-12",
        "detail": "VÉ VÀO CỔNG ĐÊM DIỄN NGHỆ THUẬT\n----------------------------------------\n- Vở kịch: 'The Initiative of Dharma'.\n- Vị trí ghế ngồi: Hàng A (Khu vực VIP).\n- Tình trạng: Vé thu thập bên trong chương trình kịch kẹp ở hộp sắt."
      },
      {
        "title": "Báo cáo giám định Chiếc hộp sắt bảo mật",
        "type": "evidence",
        "issuer": "SCOTLAND YARD - KHÁM NGHIỆM VẬT CHỨNG",
        "detail": "BIÊN BẢN GIÁM ĐỊNH CHIẾC HỘP SẮT (221B BAKER ST)\n----------------------------------------\n- Tình trạng vật lý: Chiếc hộp sắt lớn được cứu ra từ phòng làm việc của Holmes.\n- Dấu vết biến dạng: Vành nắp hộp bị móp nhẹ do nhiệt độ cao, cho thấy có lực ép đóng vội nắp hộp khi ngọn lửa bùng phát.\n- Vật phẩm bên trong: 2 mảnh thư tay, cuống vé xe ngựa, chương trình kịch Lyceum và hộp diêm dùng dở."
      }
    ],
    "unlocked_nodes": ["1NW"]
  },
  "nodes": {
    "1NW": {
      "id": "1NW",
      "title": "221B Baker Street - Căn hộ của Sherlock Holmes (Hiện trường vụ án)",
      "area": "NW",
      "type": "crime_scene",
      "map_coords": { "left": "18%", "top": "22%" },
      "content": "Đống đổ nát của căn hộ 221B Baker Street vẫn còn bốc khói âm ỉ. Watson bị suy sụp, ngồi tựa vào một chiếc thùng gỗ trên vỉa hè, gương mặt thất thần. Phía sau hàng rào cảnh sát, đám đông hiếu kỳ đang tụ tập ngày một đông.\n\nThanh tra Lestrade nhỏ giọng: 'Đây là hiện trường tồi tệ nhất tôi từng thấy. Holmes là bạn của tất cả chúng ta, đặc biệt là Watson. Chúng ta nợ anh ấy sự công bằng, phải tìm ra sự thật trước khi dấu vết nguội lạnh'.\n\nWatson thực hiện khám nghiệm nhanh tử thi: 'Nạn nhân bị thiêu rụi khoảng 85% người. Nhưng có một vết thương thứ hai – viên đạn xuyên vào lưng và ra bụng, cỡ đạn .44 Webley. Không thể xác định vết bắn hay lửa xảy ra trước'.\n\nWiggins báo thêm: 'Chúng tôi nhặt được một đống mảnh kính vỡ lả tả trên vỉa hè phía sau của tòa nhà đối diện 221B Baker St – tức Nhà nghỉ Camden House! Ngoài ra, còn có nhân chứng sống là bà Olivia Robins ở số 50 NW báo rằng đã thấy Sherlock gặp một người đàn ông nghi là anh trai Mycroft Holmes lúc 8:30 tối, trước khi vụ cháy bùng phát khoảng 9:00 tối'.",
      "unlocks": {
        "nodes": ["50NW", "53NW", "8SW", "22SW"],
        "evidence_items": [
          "Hiện trường 221B Baker Street bị thiêu rụi, phát hiện thi thể có vết đạn súng ngắm .44 Webley xuyên tim.",
          "Mảnh kính vỡ rơi trên vỉa hè đối diện 221B chỉ ra vị trí bắn tỉa xuất phát từ cửa sổ tầng 2 Nhà nghỉ Camden House.",
          "Nhân chứng bà Olivia Robins ở căn hộ đối diện 221B quan sát toàn bộ diễn biến trước khi xảy ra vụ cháy."
        ]
      },
      "key_hints": [
        "Tra cứu Nhà nghỉ Camden House trong Danh bạ London để tìm vị trí bắn tỉa và vỏ đạn súng ngắm.",
        "Tra cứu nhân chứng Olivia Robins trong Danh bạ London để lấy lời khai nhân chứng.",
        "Tra cứu Mycroft Holmes và Bác sĩ Murray trong Danh bạ London."
      ]
    },
    "50NW": {
      "id": "50NW",
      "title": "Nhà bà Olivia Robins (Nhân chứng sống đối diện 221B Baker St)",
      "area": "NW",
      "type": "suspect_interview",
      "map_coords": { "left": "22%", "top": "16%" },
      "content": "Bà Olivia Robins, một phụ nữ lưng hơi còng, ra mở cửa và gắt ngay: 'Mấy người mất nhiều thời gian quá đấy mới chịu đến gặp tôi! Tôi đã báo các sĩ quan bên ngoài đám cháy là tôi có thông tin, rằng tôi đã thấy nhiều thứ, vậy mà họ cứ gạt tôi đi!'.\n\n'Tôi sống một mình. Sở thích của tôi là quan sát. Tôi nhìn qua cửa sổ cả ngày. Tôi theo dõi tin tức. Tôi là công dân có hiểu biết của London!'.\n\n'Đây là sự thật: Sherlock đứng ngoài nhà ông ấy lúc 8:30 khi anh trai ông ấy đến, và họ nói chuyện khoảng một phút. Anh trai rời đi, còn tôi quay vào xem ấm trà. Khi tôi nhìn lại thì Sherlock đã vào trong nhà. Tôi đã nhận ra anh trai ông ấy rõ ràng vì tôi đã thấy ông ta đến thăm nhiều lần trong những năm qua'.\n\n'Sau đó lúc 9:00 tối, có một gã trông rất giống Edward Beaupre đứng ngoài nhà Sherlock. Tôi biết mặt hắn vì đã đọc báo. Beaupre đi cùng một phụ nữ mặc chiếc váy màu đỏ rực rỡ và đeo một chiếc mặt nạ kịch nghệ hình mặt cười. Tôi thấy Beaupre tưới dầu hỏa xung quanh các bức tường nhà Sherlock, rồi người phụ nữ cầm một que diêm giơ lên trời, ném vào ngôi nhà. Họ bỏ đi ngay khi những người đầu tiên xuất hiện tại hiện trường. Lúc đó tôi chạy ra ngoài kêu cứu'.",
      "unlocks": {
        "nodes": ["8SW", "52SW", "85WC"],
        "evidence_items": ["Nhân chứng Olivia Robins tại 50NW xác nhận Edward Beaupre và phụ nữ mặc váy đỏ đeo mặt nạ kịch tưới dầu hỏa đốt 221B lúc 9:00 tối."]
      },
      "key_hints": ["Edward Beaupre và phụ nữ đeo mặt nạ kịch châm lửa đốt 221B Baker St.", "Sherlock gặp anh trai lúc 8:30 tối."]
    },
    "8SW": {
      "id": "8SW",
      "title": "Mycroft Holmes",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "left": "28%", "top": "74%" },
      "content": "Mycroft Holmes, anh trai Sherlock người có vóc dáng lớn hơn, ra đón chúng ta: 'Các anh có manh mối gì chưa? Ai đó sẽ phải trả giá cho việc này'.\n\nSau phần an ủi, Mycroft kể: 'Tôi đã gặp em trai mình hai lần vào ngày hôm qua. Chúng tôi ăn trưa cùng nhau lúc 1 giờ chiều. Mọi thứ bình thường. Sherlock bảo tôi ghé qua căn hộ tối muộn. Tôi đến lúc 8:30 tối – Sherlock đón tôi ngay trước cửa thay vì mời vào nhà, điều mà tôi thấy kỳ lạ nhưng không đáng lo ngại. Nó khá cộc lốc với tôi, và bảo tôi rời đi ngay'.\n\n'Một điều kỳ lạ là nó mặc một bộ vest màu đỏ burgundy thay vì bộ đồ vải thô màu nâu thường ngày. Bộ đồ đó trông có vẻ mới tinh. Sherlock thích để quần áo cũ đi theo cách riêng của mình; ông ấy từng nói trông quá bóng bẩy là điều không phù hợp. Hmm. Nó cũng đi về phía tôi khi tôi bước tới căn hộ, và trông có vẻ vui vẻ, bước đi nhẹ nhàng'.\n\n'Về nội dung trò chuyện – nó cứ gọi tên tôi liên tục trong suốt câu chuyện, điều mà tôi thấy hơi lạ. Cuối cùng nó chỉ hỏi tôi có muốn đi xem kịch tối hôm sau không. Và nó cũng hỏi vay tôi tiền – điều chưa bao giờ xảy ra. Tôi đưa cho nó. Đó là tất cả. Điều đó có giúp ích được không?'.",
      "unlocks": {
        "nodes": ["88SE"],
        "evidence_items": ["Sherlock giả mặc vest đỏ burgundy mới toanh, cư xử kỳ lạ và vay tiền Mycroft lúc 8:30 tối."]
      },
      "key_hints": ["Sherlock gặp Mycroft lúc 8:30 tối thực chất là kẻ giả mạo (Marvin Pemberton) vì mặc vest đỏ burgundy và vay tiền.", "Kẻ giả mạo liên tục gọi nhầm tên Mycroft."]
    },
    "22SW": {
      "id": "22SW",
      "title": "Phòng thí nghiệm của Murray",
      "area": "SW",
      "type": "clue_inspection",
      "map_coords": { "left": "34%", "top": "84%" },
      "content": "Murray đang khám nghiệm chiếc hộp sắt lấy từ đống tro tàn và lắc đầu: 'Xin chào, các vị. Tôi e là không thể giúp ích nhiều. Tôi đang kiểm tra chiếc hộp sắt thu được từ 221B Baker Street'.\n\n'Nội dung bên trong không có gì đặc biệt. Nhưng không phải nội dung làm tôi chú ý. Là chiếc vành kim loại bên trong mép nắp hộp – nó bị biến dạng một phần do nhiệt của đám cháy'.\n\n'Điều này cho tôi biết rằng nắp hộp không được đóng và khóa chốt đúng cách. Nếu phải đoán, tôi sẽ nói rằng ai đó đã đóng vội chiếc hộp này trong khi ngọn lửa đang thiêu rụi căn phòng. Điều đó có nghĩa là lúc đó còn có người ở trong phòng khi đám cháy bắt đầu'.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Nắp hộp sắt đóng vội vàng trong đám cháy."]
      },
      "key_hints": ["Chiếc hộp sắt được đóng lại sau khi lửa đã bùng lên, chứng tỏ có người ở trong phòng lúc đám cháy bắt đầu."]
    },
    "53NW": {
      "id": "53NW",
      "title": "Nhà nghỉ Camden House (Wilkie Gunderson)",
      "area": "NW",
      "type": "location",
      "map_coords": { "left": "26%", "top": "28%" },
      "content": "Chủ nhà nghỉ Wilkie Gunderson mỉm cười chào đón từ bàn lễ tân: 'Các ngài cần gì ạ?'. Sau khi nghe về đống kính vỡ tìm thấy bên ngoài nhà nghỉ, ông đề nghị kiểm tra các phòng hướng ra 221B Baker St.\n\nHai phòng tầng trệt đều có khách và không phát hiện gì bất thường. Phòng đầu tiên tầng lầu cũng có khách và không có gì khả nghi. Còn lại một phòng trống cuối hành lang.\n\nGunderson đẩy nhẹ cửa phòng trống, nó từ từ mở ra: 'Tại sao phòng này lại không khóa?' Mùi khét lẹt xộc vào ngay khi mở cửa. Căn phòng trống trơn, giường được dọn gọn. Nhưng cửa sổ hướng ra 221B Baker St bị vỡ vụn – các mảnh kính rơi đầy trên chiếc bàn bầu dục nhỏ phía dưới. Trên sàn nhà cạnh bàn, chúng ta tìm thấy một vỏ đạn súng ngắn.\n\nGunderson giật nảy: 'Phòng này đáng lẽ phải khóa! Tôi luôn giữ phòng khóa khi không có khách thuê. Chỉ có đội dọn dẹp mới có thể lấy chìa khóa từ tủ dưới nhà. Hôm nay chỉ có một nhân viên vắng mặt không phép là Israel Jacobs. Anh ấy mới làm được một tuần – một người chăm chỉ, tôi không thể tin anh ấy dính đến chuyện này'.",
      "unlocks": {
        "nodes": ["53EC", "5EC"],
        "evidence_items": ["Vỏ đạn .44 Webley Bull Dog tìm thấy tại phòng trống Camden House hướng sang nhà Holmes.", "Israel Jacobs có chìa khóa phòng này và vắng mặt."]
      },
      "key_hints": ["Phát súng ám sát được bắn từ cửa sổ phòng trống của Camden House.", "Vỏ đạn là cỡ .44 Webley.", "Israel Jacobs là nhân viên dọn dẹp có chìa khóa phòng và đã bỏ trốn."]
    },
    "5EC": {
      "id": "5EC",
      "title": "Cửa hàng vũ khí Grant Arms (Oliver Perkins)",
      "area": "EC",
      "type": "location",
      "map_coords": { "left": "78%", "top": "18%" },
      "content": "Chúng ta bị đón bằng tiếng súng khi tiến vào khu vực Grant Arms Company – thực ra chỉ là trường bắn ở ngõ sau tòa nhà. Bên trong cửa hàng gỗ cũ nhỏ bé là rất nhiều khách ngắm súng và dao. Một người đàn ông to lớn có hình xăm đại bàng trên má tiến lại: 'Scotland Yard cần gì ở đây?'.\n\n'Ồ, cái tay cầm súng lú ra khỏi bao súng của các anh. Đó là súng tiêu chuẩn của Scotland Yard. Tôi là Oliver Perkins, chủ và điều hành Grant Arms'.\n\nSau khi nghe về vụ bắn tỉa, Perkins xem xét vỏ đạn chúng ta đưa: 'Đây là vỏ đạn .44 caliber của Webley, nhưng là loại nhỏ gọi là Bull Dog. Loại này tầm bắn tối đa chỉ khoảng 50 feet. Những gì anh mô tả là một phát bắn cực kỳ khó – tại sao không mở cửa sổ? Và ở khoảng cách đó, tại sao không dùng súng tầm xa? Chúng tôi có súng ở đây có thể bắn hạ răng người từ 100 yards'.\n\n'Vậy có bao nhiêu người ở London bắn được phát súng đó với khẩu đó? Hai người. Chandler Davenport và tôi'. Perkins đứng dậy lau nòng súng. 'Davenport rất giỏi nhưng kiêu ngạo. Hắn từng bắn mắt nhắm, bắn táo trên tay người... Tôi đã đuổi hắn ra khỏi cửa hàng vì điều đó'.\n\n'Về Israel Jacobs – thằng bé là con riêng của vợ tôi. Vợ tôi đang ở tù. Tôi không ưa thằng bé, nhưng nó bị một chứng bệnh khiến hai tay run liên tục bẩm sinh. Nó không thể bắn súng được. Tuy nhiên, khi Davenport còn lui tới cửa hàng tôi, họ hay chơi với nhau. Tôi không ngạc nhiên nếu chúng vẫn còn liên hệ'.",
      "unlocks": {
        "nodes": ["28WC", "53EC"],
        "evidence_items": ["Khẩu súng ám sát là .44 Webley Bull Dog có tầm bắn ngắn.", "Sát thủ bắn tỉa chỉ có thể là Chandler Davenport.", "Israel Jacobs bị run tay bẩm sinh, không thể là sát thủ nhưng là đồng phạm của Davenport."]
      },
      "key_hints": ["Chandler Davenport là tay súng bắn tỉa duy nhất khả nghi.", "Israel Jacobs không thể bắn súng do tay run, nhưng có liên hệ với Davenport."]
    },
    "53EC": {
      "id": "53EC",
      "title": "Nhà riêng của Israel Jacobs",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "left": "80%", "top": "36%" },
      "content": "Chúng ta gõ cửa nhà Israel Jacobs. Một người đàn ông trẻ, yếu ớt, vẻ mặt lo lắng ra mở cửa, nhìn qua nhìn lại giữa hai chúng ta.\n\n'Anh đáng lẽ phải đến chỗ làm chứ?' – 'Anh đến kiểm tra vì tôi không có mặt ở chỗ làm? Ai sai anh đến?' – 'Chúng tôi đến từ Scotland Yard. Chúng tôi điều tra một vụ án. Anh có sở hữu súng không?' – 'Không' – 'Anh có kinh nghiệm dùng súng không?' – 'Không' – 'Anh đã từng bắn súng bao giờ chưa?' – 'Chưa, và nếu tôi thử cũng chẳng bắn được'. Anh ta giơ hai bàn tay lên, và chúng ta quan sát chúng run liên tục không kiểm soát.\n\n'Tôi bị chứng bệnh này từ nhỏ. Anh thấy đấy – tôi không thể cầm súng được cho dù muốn. Điều đó khiến tôi rất khó xin việc. May mắn là tôi có được công việc hiện tại. Giờ nếu các anh không cần gì thêm...'\n\n'Một điều nữa, anh Jacobs. Nếu anh không có kinh nghiệm với súng, tại sao anh lại có tập giấy này?' Chúng ta nhặt lên một cuốn sổ nhỏ màu vàng gần cửa có tiêu đề: 'Ai bảo anh không thể? Hãy đến thăm Grant! Grant Firearms – Đáp ứng mọi nhu cầu súng đạn của bạn'.\n\nJacobs tái mặt: 'Mẹ tôi cưới ông ta – người chủ tiệm Grant đó. Tôi không ưa ông ta, nhưng giấy thì tiện dùng. Bây giờ nếu các anh cho phép'. Anh ta đẩy chúng ta ra và khép nhẹ cửa lại'.",
      "unlocks": {
        "nodes": ["5EC"],
        "evidence_items": ["Israel Jacobs bị run tay nặng, có giấy nháp từ tiệm súng Grant."]
      },
      "key_hints": ["Chứng minh Israel Jacobs không phải là kẻ bóp cò do run tay nặng.", "Jacobs thừa nhận mẹ mình cưới chủ tiệm súng Grant."]
    },
    "28WC": {
      "id": "28WC",
      "title": "Căn hộ của Chandler Davenport",
      "area": "WC",
      "type": "location",
      "map_coords": { "left": "42%", "top": "42%" },
      "content": "Căn hộ nhỏ của Chandler Davenport không có ai ở nhà. Cửa trước không khóa nên chúng ta bước vào. Bên trong, chúng ta tìm thấy một hòm chứa nhiều loại súng và đạn dược đủ chủng loại. Dưới mặt trong nắp hòm có dán một mảnh báo cắt ra:\n\nBài báo ngày 25/11/1891 – 'Tuyên Án Các Đối Tượng Buôn Lậu': Scotland Yard công bố số phận của 8 người bị bắt liên quan đến đường dây buôn lậu. Bằng chứng đã chứng minh 8 người tham gia vào hoạt động buôn lậu ngầm. Bảy nghi phạm bị bắt tại chỗ, một người bị bắt tại nhà. Người thứ 9, Chandler Davenport, được tuyên trắng án do thiếu bằng chứng tại hiện trường. Những người bị kết tội lãnh án từ mười đến ba mươi năm tù'.",
      "unlocks": {
        "nodes": ["5EC", "34WC"],
        "evidence_items": ["Tài liệu về vụ án băng buôn lậu cảng cũ năm 1891, Davenport thoát tội."]
      },
      "key_hints": ["Davenport từng tham gia băng buôn lậu 2 năm trước nhưng được tha bổng.", "Băng buôn lậu này bị bắt do tin báo của Sherlock Holmes."]
    },
    "34WC": {
      "id": "34WC",
      "title": "Nhà Gerald Locke",
      "area": "WC",
      "type": "suspect_interview",
      "map_coords": { "left": "52%", "top": "38%" },
      "content": "Gerald Locke đang ngồi trên hiên nhà tận hưởng ánh nắng buổi chiều.\n\n'Mấy anh trông có vẻ công việc. Tôi có thể giúp gì?' – 'Anh có phải là anh của John Locke không?' – Gerald thở dài và bắt đầu: 'John là em trai tôi. Chuyện gì vậy?'\n\n'John đã buôn lậu và bị bắt, đó là đáng đời. Tôi không giữ oán giận gì về chuyện xảy ra. Anh làm điều xấu, anh phải trả giá – đó là quan điểm của tôi. Tuy nhiên, tôi nghe qua những lời đồn rằng tôi thuộc thiểu số đó. Anh phải nghĩ xem – đã có chồng vợ cha mẹ bị đưa đi tù rất lâu. Nhiều người trong số họ rất căm phẫn'.\n\n'Lần cuối tôi nói chuyện với John là trong tù vài ngày trước. Nó nói sắp có việc lớn xảy ra, nhưng không biết rõ là gì. Nó cũng không thể tiết lộ nguồn tin. Đó là tất cả những gì tôi biết'.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Thông tin về động cơ trả thù của người thân các thành viên băng buôn lậu."]
      },
      "key_hints": ["Động cơ vụ án là trả thù Sherlock Holmes vì phá đường dây buôn lậu của người thân bọn chúng 2 năm trước."]
    },
    "52SW": {
      "id": "52SW",
      "title": "Căn hộ của Ambroise Beaupre",
      "area": "SW",
      "type": "location",
      "map_coords": { "left": "24%", "top": "80%" },
      "content": "Căn hộ nhỏ tối tăm của Ambroise Beaupre trông như đã bị bỏ trống vài ngày. Cửa trước không khóa và mở ra khi đẩy nhẹ. Trên bàn bếp nhỏ có ổ bánh mì đã mốc và thối. Cũng trên bàn có một mảnh giấy ghi một địa chỉ: '85 WC'.\n\nPhòng ngủ cũng bừa bộn như vậy, nhưng phòng tắm lại có thứ đáng chú ý: một tờ giấy ghim trên tường, trông như một loại thư mã hóa bí ẩn – các chữ cái sắp xếp thành từng hàng dọc và hàng ngang, trong đó một số chữ được viết hoa. Nếu nhìn kỹ vào chữ ngay bên phải mỗi chữ hoa, chúng ghép lại thành tên: M-O-R-I-A-R-T-Y.",
      "unlocks": {
        "nodes": ["85WC"],
        "evidence_items": ["Mật mã ẩn danh tại nhà Ambroise Beaupre.", "Địa chỉ ghi chú 85 WC."]
      },
      "key_hints": ["Chứa mật mã dẫn đến chủ mưu Moriarty (chữ cái bên phải các chữ hoa ghép lại thành M-O-R-I-A-R-T-Y).", "Gợi ý địa điểm tiếp theo 85 WC."]
    },
    "85WC": {
      "id": "85WC",
      "title": "Nhà Laura Parker",
      "area": "WC",
      "type": "suspect_interview",
      "map_coords": { "left": "48%", "top": "30%" },
      "content": "Chúng ta gõ cửa căn hộ theo địa chỉ tìm được tại nhà Beaupre. Một người phụ nữ tóc nâu bình thường tự giới thiệu là Laura Parker.\n\n'Vâng, tôi giúp được gì ạ?' – 'Chúng tôi đang tìm Ambroise Beaupre. Địa chỉ này ghi trong nhà anh ta. Chị có biết Ambroise không?' – 'Có, tôi biết anh ta. Tôi từng hẹn hò với anh trai anh ta là Edward, trước khi... ừ, chắc các anh biết rồi'.\n\n'Gần đây chị có gặp một trong hai anh em nhà Beaupre không?' – 'Không, tôi xin lỗi. Ambroise rất tức giận sau khi Edward bị bắt. Tôi nghĩ anh ta đã rời London từ khi Edward... Ừ, tôi xin lỗi vì không thể giúp ích nhiều hơn'.",
      "unlocks": {
        "nodes": ["52SW"],
        "evidence_items": ["Mối quan hệ giữa anh em nhà Beaupre và động cơ trả thù."]
      },
      "key_hints": ["Ambroise Beaupre cực kỳ căm ghét Holmes vì anh trai Edward bị bắt."]
    },
    "73EC": {
      "id": "73EC",
      "title": "Căn hộ của Marvin Pemberton",
      "area": "EC",
      "type": "location",
      "map_coords": { "left": "82%", "top": "14%" },
      "content": "Không có ai trả lời, nhưng cửa mở nên chúng ta bước vào. Không có gì đặc biệt ở các phòng đầu tiên, nhưng vào phòng ngủ thì chúng ta bị choáng váng: tường phủ đầy những mẩu báo cắt về các vụ án của Sherlock Holmes. Wiggins kiểm tra kỹ: 'Tất cả những mẩu báo này đều là về các vụ án Holmes giúp Scotland Yard phá!'\n\nTủ quần áo chứa toàn áo khoác dạ tweed và mũ thợ săn deerstalker – đúng kiểu Holmes thường mặc. Trên bàn làm việc có ba tờ giấy nhắn viết tay từ 'S' (Sherlock gửi cho Pemberton – ký tự 'M'):  \n\nTờ 1: 'M, Anh bắt chước rất giỏi, tôi thừa nhận. Tuy nhiên, tôi không thích việc vào một nhà hàng và thấy hóa đơn đã được thanh toán dưới tên tôi. - S'  \nTờ 2: 'M, Hãy ghé qua lúc 8:45 tối. Tôi rất tiếc phải nói đây không phải điều anh mong đợi. - S'  \nTờ 3: 'M, Với sự tâng bốc chân thành nhất, tôi đã ghé cửa hàng hôm nọ. Thật ấn tượng. Người duy nhất anh không thể lừa được chính là tôi. - S'.\n\nCác tờ giấy không theo thứ tự và không ghi ngày tháng.",
      "unlocks": {
        "nodes": ["16NW", "88SE", "83EC"],
        "evidence_items": ["Tài liệu chứng minh Marvin Pemberton đóng giả làm Sherlock Holmes.", "Lịch hẹn giữa Sherlock và Pemberton lúc 8:45 tối."]
      },
      "key_hints": ["Marvin Pemberton là người chuyên đóng giả Holmes để quỵt tiền và thể hiện.", "Sherlock đã biết việc này và hẹn gặp Pemberton lúc 8:45 tối tại nhà mình."]
    },
    "16NW": {
      "id": "16NW",
      "title": "Cửa hàng mũ Tetley & Butler",
      "area": "NW",
      "type": "location",
      "map_coords": { "left": "32%", "top": "14%" },
      "content": "Khi bước vào cửa hàng Tetley & Butler, người đàn ông ở quầy hàng hầu như không thèm ngẩng đầu nhìn chúng ta.\n\nChúng ta hỏi liệu Sherlock Holmes có từng ghé vào và mua đồ không. Người bán không nhận ra cái tên đó. Nhưng khi Lestrade để ý thấy phần phụ nhỏ bán mũ thợ săn deerstalker phía sau cửa hàng, ông hỏi tiếp: 'Các anh bán nhiều loại mũ deerstalker này không?' – 'Không nhiều lắm. Đây là kiểu mũ hơi cổ. Nhưng chúng tôi có một quý ông hay mua loại này. Người đàn ông cao, lớn tuổi, trông lịch lãm, tinh tế ấy... Tên ông ta là... Pemberton, tôi nghĩ vậy'.",
      "unlocks": {
        "nodes": ["73EC"],
        "evidence_items": ["Marvin Pemberton thường xuyên mua mũ thợ săn deerstalker tại đây."]
      },
      "key_hints": ["Xác nhận Pemberton chủ động mua trang phục giả làm Holmes."]
    },
    "88SE": {
      "id": "88SE",
      "title": "Cửa hàng thời trang Roberts & Parfitt",
      "area": "SE",
      "type": "location",
      "map_coords": { "left": "80%", "top": "76%" },
      "content": "Khi bước vào Roberts & Parfitt, chúng ta ngay lập tức thấy một ma-nơ-canh được trang điểm trông giống hệt Sherlock Holmes. Người chủ nhỏ bé năng động ra chào: 'Ông ấy đẹp lắm phải không? Tôi lấy cảm hứng từ vị thám tử lừng danh Sherlock Holmes – thám tử giỏi nhất London. Sherlock mua đồ ở cửa hàng chúng tôi đấy!'.\n\nKhi nghe tin Sherlock đã qua đời, người chủ sụp xuống tựa vào bàn. 'Chết rồi à? Tôi... tôi không biết phải nói gì. Tôi rất tiếc'.\n\n'Lần cuối ông Sherlock ghé cửa hàng là khi nào?' – 'Ồ, Sherlock có ghé qua hôm qua khoảng 5 giờ chiều. Ông ấy lấy một chiếc áo khoác tweed màu burgundy và ghi nợ vào tài khoản – ông ấy hay mua kiểu áo đó. Gần đây ông ấy mua chịu khá nhiều. Tôi cứ nghĩ ông ấy nổi tiếng như vậy sẽ trả nợ đàng hoàng...'.\n\n'Có gì bất thường không?' – 'Không, ông ấy hoạt bát, vào thẳng ra ngay, và khi tôi hỏi có thể làm ma-nơ-canh giống ông ấy không, ông ấy nói 'tất nhiên''.\n\nWiggins thì thầm sau khi ra ngoài: 'Sherlock thật không bao giờ ghi nợ – ông ấy chỉ nhận quà hoặc trả tiền mặt. Và ông ấy cực kỳ ghét việc phô trương làm ma-nơ-canh, ông ấy luôn giữ thái độ khiêm tốn'.",
      "unlocks": {
        "nodes": ["8SW"],
        "evidence_items": ["Kẻ giả danh Sherlock mua áo khoác burgundy lúc 5 giờ chiều qua."]
      },
      "key_hints": ["Người mua áo khoác burgundy ghi nợ lúc 5:00 chiều qua là kẻ giả mạo (Pemberton). Đồ giả mạo này trùng với mô tả bộ đồ Mycroft thấy lúc 8:30 tối."]
    },
    "74EC": {
      "id": "74EC",
      "title": "Nhà Gertrude Helwig",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "left": "88%", "top": "22%" },
      "content": "Ngôi nhà của Gertrude Helwig màu trắng sáng bóng, cỏ và bụi cây được cắt tỉa gọn gàng, hàng rào màu đỏ thẫm bao quanh. Trên bậc thềm có một gói hàng từ Bon Marche. Chúng ta gõ cửa ba lần trước khi cô ấy ra mở. Cô ấy là người phụ nữ quyến rũ ngoài ba mươi tuổi, mặc một chiếc váy xanh đẹp với hoa văn hình chữ chi và áo khoác màu hồng.\n\n'Cô Helwig?' Chúng ta đưa tay phải ra bắt, nhưng Helwig chỉ mỉm cười không đáp lại.\n\n'Tối qua cô ở đâu?' – 'Tôi ở Nhà hát Lyceum tập duyệt cho vở diễn mới tối nay. Tôi là diễn viên chính'. – 'Cô có gần khu vực 221B Baker Street tối qua không?' – Cô mỉm cười: 'Không, chúa ơi. Tôi không có thời gian lang thang khắp thành phố. Tôi có buổi diễn khai màn tối nay. Giờ nếu các anh cho phép, tôi phải chuẩn bị đồ'.\n\n'Chắc chắn rồi. Cảm ơn cô. À, một điều nữa' – Lestrade dừng lại nhặt gói hàng trên thềm – 'Thư cho cô'. – 'Ồ? Quần áo mới đấy. Cảm ơn'. Helwig dễ dàng đưa tay trái ra nhận, nhưng nhăn mặt đau đớn khi phải đưa thêm cánh tay phải để đỡ trọng lượng gói hàng.",
      "unlocks": {
        "nodes": ["18WC"],
        "evidence_items": ["Gertrude Helwig bị bỏng nặng ở cánh tay phải dù phủ nhận việc có mặt tại vụ cháy."]
      },
      "key_hints": ["Gertrude Helwig chính là người phụ nữ mặc váy đỏ đốt nhà bị bỏng tay."]
    },
    "18WC": {
      "id": "18WC",
      "title": "Nhà hát Lyceum (Wayne Nelson)",
      "area": "WC",
      "type": "location",
      "map_coords": { "left": "46%", "top": "36%" },
      "content": "Khi bước vào Nhà hát Lyceum, chúng ta nghe thấy tiếng la hét và tranh luận ầm ĩ từ sân khấu. 'Làm sao chúng ta có buổi khai màn tối nay nếu một trong những ngôi sao còn chưa đến?' một người đàn ông gầy có ria mép mỏng hét lên. Một phụ nữ váy hoa an ủi: 'Anh biết Gerty mà. Cô ấy hay muộn, nhưng lúc nào cũng đến đúng lúc'.\n\nNgười đàn ông cuối cùng chú ý đến chúng ta: 'Ồ, xin lỗi. Chúng tôi chưa mở cửa đâu nhé. Anh phải đến tối nay xem buổi khai màn. Ai cũng muốn xem vở hài kịch mới của chúng tôi – The Initiative of Dharma. Một người phụ nữ xinh đẹp mặc váy đỏ cố gắng tìm ý nghĩa cuộc sống. Tôi chắc chắn rằng hầu hết mọi vấn đề trên thế giới đều có thể giải quyết với một người phụ nữ xinh đẹp mặc váy đỏ'.\n\n'Tôi là Wayne Nelson, quản lý chương trình ở Lyceum. Tôi không biết người anh đề cập – Sherlock Holmes – nên không thể trả lời được'.\n\n'Vở kịch diễn viên chính chưa đến có làm anh lo ngại không?' – 'À, diễn viên chính là Gertrude Helwig vẫn chưa đến, nhưng tôi chắc cô ấy sẽ đến trước giờ diễn. Không có gì bất thường. Chúc các anh may mắn! Và nếu hoàn thành sứ mệnh đó, có thể giúp chúng tôi tìm xem ai đã lấy chiếc mặt nạ kịch hình mặt cười khỏi tường phòng hóa trang không?'.",
      "unlocks": {
        "nodes": ["74EC"],
        "evidence_items": ["Vở kịch mới có nhân vật nữ mặc váy đỏ.", "Mặt nạ kịch vui vẻ bị mất trộm hôm qua."]
      },
      "key_hints": ["Trùng khớp với nhân chứng mô tả người phụ nữ mặc váy đỏ và đeo mặt nạ kịch đốt nhà."]
    },
    "83EC": {
      "id": "83EC",
      "title": "Quán ăn Ship and Turtle",
      "area": "EC",
      "type": "location",
      "map_coords": { "left": "84%", "top": "40%" },
      "content": "Tấm bảng hiệu cũ kỹ hình rùa xanh và tàu biển treo bên ngoài. Ship and Turtle – hay 'Shit and Purtle' theo cách người địa phương gọi – là một quán ăn xuống cấp chuyên hải sản.\n\n'Hai người dùng bữa ạ?' – 'Không, cảm ơn. Chúng tôi ở đây vì việc công. Cho hỏi Sherlock Holmes có thường ghé đây không?' – 'Tôi không biết ông ta'.\n\nSau khi mô tả Holmes, cô phục vụ nhớ ra: 'À! Có, tôi nhớ rồi. Hôm qua khoảng 5 giờ chiều, có một cụ già mặc áo nâu đang đi trên vỉa hè thì một thùng gỗ đựng dưa muối từ kho hàng của chúng tôi tuột ra va trúng chân ông ấy. Tội nghiệp ông ấy. Ông ấy có sao không?'\n\n'Ông ta đã qua đời' – Cô há hốc miệng, đứng ngẩn ra – 'Sao vậy? Không phải vì cái thùng đó chứ...' – 'Không phải do thùng gỗ, thưa cô'.\n\n'Ai đã để thùng tuột ra?' – 'Tôi không chắc. Chúng tôi có hai nhân viên kho hôm qua: Mitchell Rourke – anh chàng to lớn, có hình xăm trên cánh tay, người tốt. Và Israel – tôi không biết nhiều về anh ấy, nhưng có vẻ thậm chí còn tốt bụng hơn Mitchell'.",
      "unlocks": {
        "nodes": ["53EC", "5WC"],
        "evidence_items": ["Sherlock thật bị chấn thương chân do thùng gỗ va phải lúc 5 giờ chiều qua."]
      },
      "key_hints": ["Jacobs đã cố ý thả thùng gỗ va trúng chân Sherlock thật làm ông bị thương đi tập tễnh.", "Chi tiết này giúp phân biệt Sherlock thật (bị thọt chân) và kẻ giả mạo Pemberton (đi đứng nhanh nhẹn)."]
    },
    "5WC": {
      "id": "5WC",
      "title": "Trạm xe ngựa Trung tâm (Central Carriage Stables)",
      "area": "WC",
      "type": "location",
      "map_coords": { "left": "40%", "top": "26%" },
      "content": "Điều phối viên chính tại Central Carriage Stables cho biết: Sherlock Holmes được xe chở đi hai lần vào hôm qua. Lần đầu khoảng 1:45 chiều theo hướng NW, nhưng ông từ chối cho biết điểm đến cuối cùng, chỉ bảo tài xế dừng tại một điểm ngẫu nhiên. Lần hai là ngay trước 6:00 chiều về hướng WC, cũng chọn một góc ngẫu nhiên để xuống xe.\n\nMột tài xế bước lên: 'Tôi thấy Sherlock bị thùng gỗ va vào chân hôm qua trước quán Ship and Turtle – khoảng 5 giờ chiều. Một cậu nhân viên trẻ đang khuân hàng vào kho thì để một thùng dưa muối nặng tuột ra trúng vào chân ông ấy. Ông ấy trông rất đau nhưng từ chối đến gặp bác sĩ. Điều đáng chú ý là cậu nhân viên đó có vẻ không hề bị rung chuyển gì cả'.\n\nMột tài xế khác góp thêm: 'Tuần trước tôi chở Sherlock trong tình trạng say rượu nặng. Ông ấy loạng choạng qua đường và vấp phải vỉa hè. May là tôi đã từng chở ông ấy vài lần trước. Tôi đưa ông về Baker St nhưng ông ấy cứ ngồi dưới vỉa hè trước nhà. Ông ấy không nhớ mình sống ở đâu. Cứ bảo tôi đi sai đường'.",
      "unlocks": {
        "nodes": ["83EC"],
        "evidence_items": ["Lịch trình di chuyển của Sherlock hôm qua."]
      },
      "key_hints": ["Xác nhận Sherlock thật bị thương ở chân lúc 5 giờ chiều."]
    },
    "20NW": {
      "id": "20NW",
      "title": "Quán rượu The Pavilion (Elle Fanning)",
      "area": "NW",
      "type": "suspect_interview",
      "map_coords": { "left": "14%", "top": "34%" },
      "content": "Chúng ta bước vào quán rượu tối tăm và tai tiếng The Pavilion, ngồi vào một gian booth tối ở góc. Một cô hầu bàn tóc đỏ rực đến tiếp và chúng ta gọi hai pint bia. Cô tự giới thiệu là Annette Verlaine.\n\n'Sherlock Holmes? Hôm qua lúc 2 giờ chiều có một người tên Holmes ngồi đây. Tôi nhớ như in vì mới hôm qua mà. Anh ấy vào ngồi im cả tiếng đồng hồ. Tôi hỏi ba lần mới chịu gọi một tách trà. Tôi đi chuẩn bị thì bà chủ Elle chặn lại ở quầy, bảo cô ấy tự mang ra và tự pha luôn. Tôi đưa trà cho anh Holmes. Anh ấy ngồi đó một lúc, nhìn chằm chằm xung quanh. Nhìn chằm chằm vào Elle và ngửi tách trà. Rồi ngửi lần nữa. Đứng dậy, để tiền lại trên bàn và đi ra. Tôi chưa thấy anh ấy trước đó, cũng không thấy lại từ đó'.\n\n'Bà chủ Elle này hiện có ở đây không?' – 'Ồ, xin lỗi, tôi đang nói đến bà chủ Elle Fanning – chủ nhân của The Pavilion. Cô ấy là người phụ nữ tuyệt vời. Mặc dù cô ấy đôi khi tiếp những người trông rất nguy hiểm. Vài ngày trước, cô ấy chủ trì một cuộc họp nhỏ trong phòng riêng phía sau. Tôi thấy hai người đàn ông cuối cùng bước vào và họ trông rất đáng sợ. Một người cứ xoay khẩu súng trên ngón tay khi đi qua quán, người kia thì liên tục đập một cây gậy vào lòng bàn tay. Rất đe dọa. Dù sao, Elle hôm nay nghỉ'.",
      "unlocks": {
        "nodes": ["90NW", "72NW"],
        "evidence_items": ["Sherlock nghi ngờ chén trà do Elle Fanning pha lúc 2:00 chiều qua.", "Elle Fanning gặp gỡ các đối tượng nguy hiểm trước đó."]
      },
      "key_hints": ["Elle Fanning đã cố đầu độc Sherlock thật bằng chén trà lúc 2:00 chiều.", "Sherlock phát hiện chất độc nên đã bỏ đi."]
    },
    "72NW": {
      "id": "72NW",
      "title": "Cửa hàng hóa chất John Taylor Chemist",
      "area": "NW",
      "type": "clue_inspection",
      "map_coords": { "left": "24%", "top": "38%" },
      "content": "Căn phòng nhỏ của John Taylor Chemist chứa đầy bình cầu, ống nghiệm và đèn Bunsen. John Taylor tiếp đón chúng ta.\n\n'Các anh cần gì?' – 'Chúng tôi đang điều tra và cần tra cứu hồ sơ khách hàng. Anh có thể cho biết anh đã bán gì cho cô Elle Fanning?' – 'Elle Fanning? Cái tên nghe quen'. – 'Cô ấy là chủ quán rượu The Pavilion'.\n\n'À, tôi nhớ rồi. Cô ấy đã mua một thùng chất Cyanide'.\n\n'Cyanide? Chủ một quán rượu mua Cyanide là chuyện bình thường?' – Taylor cười: 'Không phải cho quán đâu. Cô ấy là nhiếp ảnh gia nghiệp dư. Cyanide được dùng để tạo tông màu sepia trong ảnh nghệ thuật. Tôi không phải nhiếp ảnh gia nên không thể giải thích sức hút của tông màu sepia, nhưng tôi có thể vẽ ra công thức hóa học cho các anh nếu muốn'. – 'Không cần, cảm ơn'.",
      "unlocks": {
        "nodes": ["20NW", "90NW"],
        "evidence_items": ["Hóa đơn mua Cyanide của Elle Fanning."]
      },
      "key_hints": ["Xác nhận Elle Fanning đã mua chất kịch độc Cyanide trước khi vụ ám sát diễn ra."]
    },
    "89NW": {
      "id": "89NW",
      "title": "Sở cảnh sát Tichfield (Dick Alpert's case)",
      "area": "NW",
      "type": "location",
      "map_coords": { "left": "30%", "top": "36%" },
      "content": "Chúng ta vào Sở cảnh sát Tichfield và được vị đại úy ra bắt tay: 'Thanh tra Lestrade. Cảnh sát viên Wiggins. Chúng tôi rất tiếc khi nghe tin về Sherlock Holmes. Tin lan nhanh lắm. Holmes đã dành cả đời để chống lại cái sai và đẩy lùi tội phạm. Dù ông ấy chưa bao giờ chính thức là cảnh sát, nhưng theo nhiều cách, ông ấy là biểu tượng của trách nhiệm công dân hơn cả chúng tôi'.\n\n'Chúng tôi nghi ngờ đây không phải tai nạn. Một trong những manh mối dẫn chúng tôi đến đây. Anh có biết một người tên Elle Fanning không?' – 'Bé Elle?' vị đại úy hỏi. 'Tất nhiên, những ai làm ở đây lâu đều biết cô ấy. Cô ấy lớn lên gần như trong sở cảnh sát này. Cha cô là Dick Alpert – một trong những sĩ quan xuất sắc nhất chúng tôi từng có. Ông ấy là sĩ quan kỳ cựu hoạt động đến tận bảy mươi mấy tuổi. Trông như không bao giờ chịu về hưu'.\n\n'Chuyện gì xảy ra với ông ấy?' – 'Ông ấy là nạn nhân duy nhất trong vụ phá đường dây buôn lậu ở Outer Docks, một – không, hai – năm trước. Chúng tôi chưa bao giờ tìm ra ai đã bắn ông ấy, nhưng chắc là một trong những tên buôn lậu đó'. – 'Tôi nhớ vụ đó rồi. Tôi phải hỏi – Sherlock Holmes có liên quan không?' – 'Tất nhiên, ông ấy đã báo tin dẫn đến vụ bắt giữ và triệt phá đường dây. Đây, để tôi đưa anh xem bài báo. Chúng tôi giữ nó trên tường vì cái chết của sĩ quan Alpert'.",
      "unlocks": {
        "nodes": ["20NW", "90NW"],
        "evidence_items": ["Mối quan hệ giữa Elle Fanning và cảnh sát quá cố Dick Alpert."]
      },
      "key_hints": ["Elle Fanning căm ghét Holmes vì cho rằng tin báo của Holmes gián tiếp gây ra cái chết của bố cô."]
    },
    "90NW": {
      "id": "90NW",
      "title": "Nhà riêng của Elle Fanning",
      "area": "NW",
      "type": "suspect_interview",
      "map_coords": { "left": "28%", "top": "44%" },
      "content": "Elle Fanning mở cửa căn hộ nhỏ màu đỏ: 'Tôi có thể giúp gì cho các anh?' – 'Chúng tôi đến từ Scotland Yard. Chúng tôi có thể vào hỏi vài câu không?' – 'Được chứ, mời vào'.\n\nChúng ta bước vào căn hộ bừa bộn: đống bát đĩa cạnh bồn rửa, quần áo vứt khắp sàn, đồ vật ngổn ngang. Sau ghế sofa, một chiếc thùng gỗ nhỏ bị che khuất một phần. Chỉ nhìn thấy chữ 'Taylor'.\n\n'Tôi có thể giúp gì? Tôi biết cách này hoạt động. Cha tôi là cảnh sát. Các anh cứ hỏi'.\n\n'Cảm ơn cô Fanning. Chúng tôi đã ghé quán The Pavilion của cô và nói chuyện với Annette Verlaine. Cô ấy cho biết Sherlock Holmes đã vào quán hôm qua' – 'Vâng, đúng. Tôi biết Sherlock Holmes. Cha tôi làm việc tại Tichfield và đã cộng tác với ông ấy nhiều lần. Tôi rất kính trọng những vụ án Sherlock Holmes đã giải quyết. Dù sao, ông ấy có vào quán hôm qua, khoảng 2 giờ chiều. Ông ấy hành xử rất kỳ lạ – nhưng tôi nghe nói ông ấy vốn là người rất kỳ lạ. Cha tôi từng bảo ông ấy nhìn thế giới theo cách khác chúng ta. Ông ấy có vẻ hoang mang. Tôi đã tự tay pha trà vì tôi rất hâm mộ ông ấy từ lâu, nhưng thật bất ngờ là ông ấy không uống. Ông ấy chỉ đứng dậy và đi. Tôi không gặp ông ấy sau đó nữa. Xin lỗi vì không thể giúp nhiều hơn'.",
      "unlocks": {
        "nodes": ["72NW"],
        "evidence_items": ["Thùng gỗ hóa chất Taylor giấu tại nhà Elle Fanning."]
      },
      "key_hints": ["Elle Fanning ngụy trang chất độc Cyanide bằng lý do rửa ảnh nghệ thuật."]
    },
    "98E": {
      "id": "98E",
      "title": "Cảng Outer Docks (Phía Đông)",
      "area": "E",
      "type": "location",
      "map_coords": { "left": "94%", "top": "28%" },
      "content": "Cảng Outer Docks tấp nập nhộn nhịp khi chúng ta đến. Hàng trăm công nhân khuân vác, những thùng gỗ khổng lồ lăn qua lăn lại, hàng hóa vận chuyển khắp nơi. Không biết nói chuyện với ai, và nói chuyện với tất cả thì phải mất cả tuần.\n\nMột người tiếp cận: 'Anh là nhân viên bảo vệ mới à? Ôi, các sĩ quan. Xin lỗi. Tôi không nhận ra. Tôi đang tìm Ambroise. Không thấy anh ta đâu cả, mà chúng tôi cần bảo vệ cho lô hàng này. Các anh có muốn kiếm thêm không?' – 'Không, cảm ơn. Ý anh là Ambroise Beaupre?' – 'Anh biết anh ấy? Anh ấy làm bảo vệ cho chúng tôi. Một người dữ tướng. Tôi chưa thấy ai có thể đuổi được những kẻ vũ trang chỉ bằng cây gậy sồi shillelagh của anh ấy, nhưng anh ấy làm được. Đây là lần đầu tiên anh ấy bỏ làm từ trước đến nay mà không báo trước' – 'Xin lỗi vì không giúp được, nhưng hãy cho chúng tôi biết nếu anh ấy xuất hiện'.",
      "unlocks": {
        "nodes": ["52SW"],
        "evidence_items": ["Ambroise Beaupre mang gậy shillelagh và vắng mặt không lý do."]
      },
      "key_hints": ["Ambroise Beaupre chính là gã mang gậy shillelagh họp kín với Elle Fanning."]
    },
    "30EC": {
      "id": "30EC",
      "title": "Tòa soạn báo London Times (Henry Ellis)",
      "area": "EC",
      "type": "suspect_interview",
      "map_coords": { "left": "72%", "top": "32%" },
      "content": "Henry Ellis ra chào khi chúng ta vào văn phòng tòa soạn London Times: 'Lestrade. Tôi đang giữ bài báo về Sherlock Holmes lại chưa đăng. Tôi chỉ cho anh vài tiếng thôi, vì đây là nghĩa vụ báo chí của tôi dù đó là về Sherlock Holmes'.\n\n'Bây giờ, tôi hiểu sao về tin tức này – có ba nghi phạm tại hiện trường?' – 'Ba nghi phạm?' – 'Anh không xác nhận điều đó?' – 'Không'. – 'Tôi nhận được tin từ một người tên Dirkin Topper. Hắn đang đi qua một lúc sau 9 giờ tối thì thấy ba người rời khỏi hiện trường. Một người đàn ông, một người phụ nữ, và một bóng hình thứ ba mặc đồ đen. Người đàn ông và người phụ nữ đi cùng nhau, còn bóng hình đen rời đi sau khi hai người kia đã đi khỏi'.",
      "unlocks": {
        "nodes": [],
        "evidence_items": ["Nhân chứng nhìn thấy 3 người rời hiện trường vụ cháy."]
      },
      "key_hints": ["Bóng đen mặc đồ đen chính là Sherlock Holmes thật trốn thoát sau khi ngôi nhà bị phóng hỏa."]
    },
    "96NW": {
      "id": "96NW",
      "title": "Tiệm thuộc da Henderson",
      "area": "NW",
      "type": "decoy",
      "content": "Xưởng chế tác da thuộc hoạt động bình thường. Không có manh mối nào liên quan tới vụ án.",
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
      "content": "Xưởng đóng tàu Albert Jenkins làm việc bận rộn. Không có thông tin gì về vụ án mạng.",
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
    "39EC": {
      "id": "39EC",
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
    "54SW": {
      "id": "54SW",
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
      "content": "Bệnh viện tiếp nhận bệnh nhân thông thường, không tiếp nhận nạn nhân nào liên quan vụ cháy.",
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
        "question": "Động cơ chính khiến Elle Fanning đứng ra tổ chức kế hoạch trả thù Sherlock Holmes là gì?",
        "options": [
          "Muốn chiếm đoạt số tiền bảo hiểm căn hộ 221B Baker Street",
          "Trả thù cho cha cô (Officer Dick Alpert) vì gián tiếp thiệt mạng trong đợt triệt phá cảng Outer Docks",
          "Do bị Giáo sư Moriarty tống tiền buộc phải làm theo",
          "Muốn giải cứu Edward Beaupre ra khỏi tù"
        ],
        "correct_option_index": 1,
        "explanation": "Elle Fanning là con gái của Officer Dick Alpert, người bị bắn chết trong vụ vây bắt băng buôn lậu Outer Docks 2 năm trước. Cô đổ lỗi cho Sherlock Holmes vì tin báo của ông gián tiếp khiến cha cô thiệt mạng."
      },
      {
        "id": "q2",
        "question": "Tại sao cửa sổ phòng trống ở nhà nghỉ Camden House đối diện căn hộ 221B lại không được mở khi vụ ám sát diễn ra?",
        "options": [
          "Vì cửa sổ bị kẹt chốt không mở được",
          "Sát thủ Chandler Davenport cố ý để cửa đóng và bắn xuyên kính để tăng độ khó phát bắn nhằm khẳng định mình là xạ thủ giỏi nhất",
          "Do gió to giật mạnh làm sập cửa",
          "Để tránh tiếng nổ súng vang ra ngoài"
        ],
        "correct_option_index": 1,
        "explanation": "Davenport là một tay súng kiêu ngạo. Hắn chọn bắn xuyên qua hai lớp kính để phô diễn trình độ bắn tỉa thượng thừa của mình."
      },
      {
        "id": "q3",
        "question": "Ai là nạn nhân thực sự bị bắn chết dưới tấm vải liệm cháy xém tại 221B Baker Street?",
        "options": [
          "Sherlock Holmes",
          "Marvin Pemberton (kẻ đóng giả Sherlock Holmes)",
          "Edward Beaupre",
          "Israel Jacobs"
        ],
        "correct_option_index": 1,
        "explanation": "Marvin Pemberton - kẻ chuyên đóng giả Holmes để quỵt tiền và thể hiện - đến nhà Holmes lúc 8:30 tối và bị Davenport bắn nhầm từ Camden House qua cửa kính."
      },
      {
        "id": "q4",
        "question": "Người phụ nữ mặc váy đỏ đeo mặt nạ kịch châm lửa đốt nhà Sherlock là ai?",
        "options": [
          "Elle Fanning",
          "Olivia Robins",
          "Gertrude Helwig",
          "Laura Parker"
        ],
        "correct_option_index": 2,
        "explanation": "Gertrude Helwig là diễn viên kịch tại Lyceum Theatre. Cô ta mặc trang phục kịch váy đỏ, đeo mặt nạ trộm từ nhà hát và bị lửa bén làm bỏng tay phải lúc châm hỏa hoạn."
      },
      {
        "id": "q5",
        "question": "Sherlock Holmes thật hiện đang ẩn náu ở đâu?",
        "options": [
          "Tại biệt thự của Mycroft Holmes",
          "Tại Sở cảnh sát Tichfield",
          "Tại cửa hàng văn phòng phẩm A. W. Faber",
          "Tại nhà hát Lyceum"
        ],
        "correct_option_index": 2,
        "explanation": "Bức thư viết dở gửi Lestrade có các chữ cái đầu tiên ghép lại thành L-A-w-f-a-B-e-r (L. A. W. Faber - Tên cửa hàng văn phòng phẩm nơi Sherlock thật trốn thoát và ẩn náu để hồi phục chân bị thương)."
      }
    ],
    "part_2_side_mysteries": [
      {
        "id": "q6",
        "question": "Nguyên nhân nào gây ra tiếng hét lớn tại hiện trường vụ cháy căn hộ?",
        "options": [
          "Tiếng hét của bà Olivia Robins khi thấy lửa",
          "Gertrude Helwig vô tình bị lửa bén vào tay phải gây bỏng nặng trong lúc châm lửa đốt nhà",
          "Tiếng hét của Marvin Pemberton khi bị bắn",
          "Tiếng hét của Bác sĩ Watson khi thấy xác"
        ],
        "correct_option_index": 1,
        "explanation": "Gertrude Helwig là người phụ nữ mặc váy đỏ châm lửa đốt nhà. Cô ta sơ ý để lửa bén ngược lại làm bỏng nặng cánh tay phải, gây ra tiếng hét lúc châm hỏa hoạn."
      },
      {
        "id": "q7",
        "question": "Nhân vật nào luôn mang theo một cây gậy gỗ sồi shillelagh nặng?",
        "options": [
          "Chandler Davenport",
          "Oliver Perkins",
          "Ambroise Beaupre",
          "Mitchell Rourke"
        ],
        "correct_option_index": 2,
        "explanation": "Ambroise Beaupre, cựu thành viên băng buôn lậu và bảo vệ cảng, nổi tiếng với việc luôn mang theo cây gậy gỗ sồi nặng shillelagh bên mình để đe dọa người khác."
      },
      {
        "id": "q8",
        "question": "Israel Jacobs làm công việc bán thời gian tại những địa điểm nào?",
        "options": [
          "Tiệm súng Grant & Cảng Outer Docks",
          "Nhà nghỉ Camden House & Quán ăn Ship and Turtle",
          "Nhà hát Lyceum & Nhà hát Olympia",
          "Cửa hàng Tetley & Butler & Cửa hàng Roberts & Parfitt"
        ],
        "correct_option_index": 1,
        "explanation": "Israel Jacobs làm dọn dẹp tại nhà nghỉ Camden House (giúp Davenport có chìa khóa phòng bắn tỉa) và làm nhân viên kho tại quán Ship and Turtle (giúp đẩy thùng gỗ va chân Holmes)."
      },
      {
        "id": "q9",
        "question": "Vở kịch nào sẽ được công diễn tại Nhà hát Lyceum tối nay?",
        "options": [
          "The Scratchings on the Lighthouse",
          "The Initiative of Dharma",
          "The Death of Sherlock",
          "The Pentacle Plot"
        ],
        "correct_option_index": 1,
        "explanation": "Đạo diễn Wayne Nelson tại nhà hát Lyceum xác nhận vở kịch mới tối nay tên là 'The Initiative of Dharma' với vai nữ chính mặc váy đỏ."
      },
      {
        "id": "q10",
        "question": "Người anh em song sinh của John Locke (thành viên băng buôn lậu bị bắt) tên là gì?",
        "options": [
          "Gerald",
          "Oliver",
          "Israel",
          "Chandler"
        ],
        "correct_option_index": 0,
        "explanation": "Gerald Locke là anh em song sinh của John Locke. Anh ta sống tại WC và đã cung cấp tin đồn về kế hoạch trả thù của nhóm."
      }
    ]
  },
  "solution_summary": {
    "full_truth": "Băng buôn lậu Outer Docks bị Sherlock Holmes tố giác 2 năm trước đã quyết định lên kế hoạch trả thù sau khi ra tù dưới sự giật dây của Giáo sư Moriarty. Elle Fanning (con gái cảnh sát đã mất Dick Alpert) đứng ra tổ chức cuộc họp tại The Pavilion với Ambroise Beaupre, Gertrude Helwig và Israel Jacobs. Chandler Davenport (tay súng bắn tỉa thoát án) nhận nhiệm vụ ám sát. Jacobs nhận việc tại Ship & Turtle để đẩy thùng gỗ làm thương chân Sherlock thật, đồng thời nhận việc tại Camden House để mở khóa phòng cho Davenport bắn tỉa. Elle Fanning tìm cách đầu độc Sherlock bằng Cyanide vào 2:00 chiều hôm trước nhưng thất bại. Cùng lúc đó, diễn viên đóng giả Sherlock là Marvin Pemberton liên tục quỵt tiền dưới danh nghĩa Holmes. Sherlock thật phát hiện ra và hẹn gặp Pemberton lúc 8:45 tối tại nhà mình. Pemberton đến sớm và đuổi Mycroft đi lúc 8:30 tối. Khi Pemberton vào nhà, Davenport ngắm bắn tỉa qua kính và hạ sát Pemberton vì nhầm là Holmes thật. Beaupre và Helwig châm dầu hỏa đốt nhà để phi tang, Helwig bị bỏng tay. Sherlock thật (người đang bị thương ở chân) trốn thoát qua ngõ sau dưới lớp áo đen và ẩn náu tại cửa hàng văn phòng phẩm A. W. Faber, đồng thời để lại mảnh giấy nhắn mật mã chữ cái đầu gửi Lestrade.",
    "mastermind": "Giáo sư Moriarty (Professor Moriarty) thông qua sát thủ bắn tỉa Chandler Davenport và băng nhóm Pentacle.",
    "motive": "Trả thù Sherlock Holmes vì đã triệt phá băng nhóm buôn lậu Outer Docks hai năm trước và đòi lại công lý méo mó cho những người thân bị đi tù."
  },
  "directory": [
    { "name": "Albert Jenkins", "category": "Thợ đóng tàu", "address": "11 EC Minories", "code": "11EC", "desc": "Chủ xưởng đóng tàu gỗ sông Thames." },
    { "name": "Alfred Higgins", "category": "Đồng hồ cổ", "address": "24 WC Strand", "code": "24WC", "desc": "Tiệm sửa đồng hồ quả lắc lâu đời." },
    { "name": "Ambroise Beaupre", "category": "Bảo vệ cảng", "address": "52 SW Whitechapel", "code": "52SW", "desc": "Cựu buôn lậu luôn mang gậy sồi nặng shillelagh." },
    { "name": "Andrew Montgomery", "category": "Ngân hàng", "address": "39 EC Fleet St", "code": "39EC", "desc": "Giám đốc chi nhánh Barings Bank." },
    { "name": "Annette Verlaine", "category": "Phục vụ", "address": "20 NW Marylebone", "code": "20NW", "desc": "Phục vụ tại quán rượu The Pavilion." },
    { "name": "Arthur Pendelton", "category": "Thợ kim hoàn", "address": "12 SW Pall Mall", "code": "12SW", "desc": "Cửa hàng trang sức lâu đời." },
    { "name": "Beatrice Smith", "category": "Bánh ngọt", "address": "41 NW Regent St", "code": "41NW", "desc": "Tiệm trà và bánh quy bơ béo." },
    { "name": "Olivia Robins", "category": "Nhân chứng", "address": "50 NW Baker St", "code": "50NW", "desc": "Nhân chứng sống đối diện 221B Baker Street." },
    { "name": "Robins, Olivia", "category": "Nhân chứng", "address": "50 NW Baker St", "code": "50NW", "desc": "Nhân chứng nhìn thấy vụ đốt nhà." },
    { "name": "Charles Darwin (Bác sĩ)", "category": "Y tế", "address": "27 EC Fleet St", "code": "27EC", "desc": "Phòng khám tư nhân lâu đời." },
    { "name": "John Watson (Bác sĩ)", "category": "Đồng sự Holmes", "address": "221B Baker Street", "code": "50NW", "desc": "Bác sĩ quân y và người ghi chép các kỳ án." },
    { "name": "Benjamin Finch", "category": "Sách cũ", "address": "63 WC High Holborn", "code": "63WC", "desc": "Tiệm bán sách triết học & lịch sử cổ." },
    { "name": "Bernard Vance", "category": "Luật sư", "address": "81 SW Victoria", "code": "81SW", "desc": "Văn phòng tư vấn pháp lý hoàng gia." },
    { "name": "Bến xe ngựa Trung tâm", "category": "Giao thông", "address": "5 WC High Holborn", "code": "5WC", "desc": "Dịch vụ xe ngựa chở Holmes hôm qua." },
    { "name": "Bệnh viện đại học University College", "category": "Bệnh viện", "address": "78 NW Gower St", "code": "78NW", "desc": "Bệnh viện đại học y khoa." },
    { "name": "Cảng Outer Docks", "category": "Bến cảng", "address": "98 E Wapping", "code": "98E", "desc": "Trụ sở cũ của băng buôn lậu bị Holmes phá." },
    { "name": "Chandler Davenport", "category": "Sát thủ súng", "address": "28 WC Strand", "code": "28WC", "desc": "Tay súng bắn tỉa giải vô địch London." },
    { "name": "Christopher Gable", "category": "Xưởng dệt", "address": "46 NW Regent St", "code": "46NW", "desc": "Chủ xưởng dệt vải dạ nỉ thượng hạng." },
    { "name": "Công ty Vận tải Blackwood", "category": "Vận chuyển", "address": "61 EC Minories", "code": "61EC", "desc": "Dịch vụ kho bãi và vận tải biển." },
    { "name": "Cửa hàng dụng cụ câu cá Miller", "category": "Thể thao", "address": "49 NW Oxford St", "code": "49NW", "desc": "Bán cần câu và mồi câu cá sông." },
    { "name": "Cửa hàng súng Grant Arms", "category": "Vũ khí", "address": "5 EC Minories", "code": "5EC", "desc": "Tiệm bán súng Webley .44 Bull Dog của Oliver Perkins." },
    { "name": "Daniel Caine", "category": "Giao thông", "address": "33 WC High Holborn", "code": "33WC", "desc": "Quản lý bến đỗ xe ngựa tư nhân." },
    { "name": "Dirkin Topper", "category": "Nhân chứng", "address": "30 EC Fleet St", "code": "30EC", "desc": "Nhân chứng cung cấp thông tin tin đồn." },
    { "name": "Douglas Haig", "category": "Tẩu thuốc", "address": "77 EC Leadenhall St", "code": "77EC", "desc": "Cửa hàng bán tẩu thuốc gỗ thạch nam." },
    { "name": "Đại lý vận tải biển Xavier", "category": "Đại lý tàu", "address": "82 EC Minories", "code": "82EC", "desc": "Hãng vận tải và vé tàu biển." },
    { "name": "Edward Beaupre", "category": "Trùm buôn lậu", "address": "52 SW Whitechapel", "code": "52SW", "desc": "Gã trùm buôn lậu vượt ngục bị Holmes tố giác." },
    { "name": "Elle Fanning", "category": "Nghi phạm", "address": "90 NW Marylebone", "code": "90NW", "desc": "Con gái cố cảnh sát Dick Alpert chủ mưu cuộc họp." },
    { "name": "Eugene Sterling", "category": "Đồ gỗ cổ", "address": "19 SW Pall Mall", "code": "19SW", "desc": "Xưởng mộc và bàn ghế gỗ sồi cổ." },
    { "name": "Francis Bacon Society", "category": "Hội văn thư", "address": "86 EC Leadenhall St", "code": "86EC", "desc": "Thư viện và hội thảo triết học." },
    { "name": "Frederick Cross", "category": "Phòng tranh", "address": "58 WC Strand", "code": "58WC", "desc": "Cửa hàng đóng khung tranh nghệ thuật." },
    { "name": "Gerald Locke", "category": "Nhân chứng", "address": "34 WC High Holborn", "code": "34WC", "desc": "Anh em song sinh của John Locke." },
    { "name": "Gertrude Helwig", "category": "Nữ diễn viên", "address": "74 EC Minories", "code": "74EC", "desc": "Minh tinh mặc váy đỏ đeo mặt nạ châm hỏa hoạn." },
    { "name": "George Harrison", "category": "Xưởng nến", "address": "93 EC Whitechapel", "code": "93EC", "desc": "Sản xuất nến sáp ong và đèn dầu." },
    { "name": "Gregory Antiques", "category": "Cửa hàng đồ cũ", "address": "35 WC Strand", "code": "35WC", "desc": "Mua bán đồ cổ và kỷ vật chiến tranh." },
    { "name": "Harold Finch", "category": "Đóng giày", "address": "84 SW Victoria", "code": "84SW", "desc": "Xưởng đóng giày da nam cao cấp." },
    { "name": "Henderson Leather", "category": "Sản xuất da", "address": "96 NW Marylebone", "code": "96NW", "desc": "Xưởng chế tác sản phẩm da thuộc." },
    { "name": "Henry Ellis", "category": "Nhà báo", "address": "30 EC Fleet St", "code": "30EC", "desc": "Báo cáo viên chuyên đề tội phạm tờ London Times." },
    { "name": "Hội động vật học Zoological Society", "category": "Hội nghiên cứu", "address": "99 NW Regent's Park", "code": "99NW", "desc": "Trụ sở hội nghiên cứu động vật học." },
    { "name": "Hội luật gia Middle Temple", "category": "Luật pháp", "address": "67 WC Fleet St", "code": "67WC", "desc": "Văn phòng tư vấn pháp lý dân sự." },
    { "name": "Hội trường Victoria Memorial", "category": "Hội trường", "address": "54 SW Victoria St", "code": "54SW", "desc": "Hội trường sinh hoạt cộng đồng." },
    { "name": "Isaac Newton Optics", "category": "Quang học", "address": "29 WC Strand", "code": "29WC", "desc": "Bán kính thiên văn và thấu kính." },
    { "name": "Israel Jacobs", "category": "Nghi phạm", "address": "53 EC Whitechapel", "code": "53EC", "desc": "Nhân viên dọn dẹp kho Ship & Turtle và Camden House." },
    { "name": "John Locke", "category": "Buôn lậu", "address": "34 WC High Holborn", "code": "34WC", "desc": "Thành viên băng Outer Docks đang thụ án." },
    { "name": "John Taylor Chemist", "category": "Hóa chất độc", "address": "72 NW Baker St", "code": "72NW", "desc": "Tiệm bán chất kịch độc Cyanide." },
    { "name": "Jonathan Pryce", "category": "Tiệm mũ", "address": "65 NW Oxford St", "code": "65NW", "desc": "Bán mũ quý tộc và mũ thợ săn." },
    { "name": "Kensington Tea Rooms", "category": "Quán trà", "address": "14 SW Kensington", "code": "14SW", "desc": "Quán trà thượng lưu yên tĩnh." },
    { "name": "Kenneth Branagh", "category": "Nhiếp ảnh", "address": "71 WC High Holborn", "code": "71WC", "desc": "Tiệm chụp ảnh chân dung thạch cao." },
    { "name": "Khách sạn Victoria Club", "category": "Khách sạn", "address": "98 SW Victoria", "code": "98SW", "desc": "Nơi lưu trú cho du khách phương xa." },
    { "name": "Laura Parker", "category": "Thư ký", "address": "85 WC Strand", "code": "85WC", "desc": "Thư ký lưu trữ hồ sơ vụ án." },
    { "name": "Leonard Cohen", "category": "Rượu vang", "address": "44 EC Leadenhall St", "code": "44EC", "desc": "Nhà nhập khẩu rượu vang Bordeaux." },
    { "name": "Lyceum Theatre", "category": "Nhà hát", "address": "18 WC Wellington St", "code": "18WC", "desc": "Nơi diễn kịch 'The Initiative of Dharma'." },
    { "name": "Marvin Pemberton", "category": "Kẻ giả mạo", "address": "73 EC Minories", "code": "73EC", "desc": "Kẻ đóng giả Holmes quỵt tiền bị bắn chết nhầm." },
    { "name": "Mitchell Rourke", "category": "Nhân viên kho", "address": "83 EC Leadenhall St", "code": "83EC", "desc": "Nhân viên bốc xếp kho bãi cảng." },
    { "name": "Murray Laboratory", "category": "Pháp y", "address": "22 SW Whitechapel", "code": "22SW", "desc": "Phòng khám nghiệm tử thi và chiếc hộp sắt." },
    { "name": "Mycroft Holmes", "category": "Diogenes Club", "address": "8 SW Pall Mall", "code": "8SW", "desc": "Anh trai Sherlock Holmes." },
    { "name": "Nathaniel Hawthorne", "category": "Nhà xuất bản", "address": "37 WC High Holborn", "code": "37WC", "desc": "In ấn và xuất bản tiểu thuyết." },
    { "name": "Newgate Prison Office", "category": "Quản ngục", "address": "21 EC Fleet St", "code": "21EC", "desc": "Văn phòng quản lý phạm nhân." },
    { "name": "Nhà máy in ấn Hansard", "category": "Xưởng in", "address": "15 WC High Holborn", "code": "15WC", "desc": "In ấn hồ sơ nghị viện và báo chí." },
    { "name": "Nhà nghỉ Camden House", "category": "Hiện trường súng bắn", "address": "53 NW Camden St", "code": "53NW", "desc": "Nơi phát hiện vỏ đạn súng bắn tỉa." },
    { "name": "Oliver Perkins", "category": "Tiệm súng", "address": "5 EC Minories", "code": "5EC", "desc": "Chủ tiệm súng Grant Arms." },
    { "name": "Oxford Street Watchmaker", "category": "Đồng hồ", "address": "45 NW Oxford St", "code": "45NW", "desc": "Cửa hàng bán đồng hồ quả lắc." },
    { "name": "Patrick Stewart", "category": "Tiệm cầm đồ", "address": "17 SW Pall Mall", "code": "17SW", "desc": "Cầm đồ và thu mua kỷ vật." },
    { "name": "Peter Radcliffe", "category": "Ngân hàng", "address": "92 EC Threadneedle St", "code": "92EC", "desc": "Văn phòng Ngân hàng Anh quốc." },
    { "name": "Pavilion Pub", "category": "Quán rượu", "address": "20 NW Marylebone", "code": "20NW", "desc": "Quán rượu nơi Elle Fanning pha trà độc." },
    { "name": "Queen Victoria Hall", "category": "Hội trường", "address": "54 SW Victoria St", "code": "54SW", "desc": "Hội trường sinh hoạt cộng đồng." },
    { "name": "Quán ăn Ship and Turtle", "category": "Quán ăn", "address": "83 EC Leadenhall St", "code": "83EC", "desc": "Nơi xảy ra sự cố thùng gỗ va trúng chân Holmes." },
    { "name": "Quán rượu Blind Beggar", "category": "Quán bia", "address": "91 EC Whitechapel", "code": "91EC", "desc": "Quán rượu nghèo bình dân đông đúc." },
    { "name": "Quintin Hogg", "category": "Nhà in", "address": "35 EC Minories", "code": "35EC", "desc": "Tòa soạn báo độc lập London." },
    { "name": "Rạp xiếc Royal Amphitheatre", "category": "Giải trí", "address": "79 SW Victoria St", "code": "79SW", "desc": "Sân khấu diễn xiếc và thú lạ." },
    { "name": "Richard Alpert (Dick)", "category": "Cố cảnh sát", "address": "89 NW Baker St", "code": "89NW", "desc": "Sĩ quan quá cố cha của Elle Fanning." },
    { "name": "Roberts & Parfitt", "category": "Thời trang", "address": "88 SE Borough", "code": "88SE", "desc": "Tiệm bán đồ âu phục cao cấp." },
    { "name": "Samuel Beckett", "category": "Nhà hát", "address": "62 WC Strand", "code": "62WC", "desc": "Nhà hát Opera cổ điển." },
    { "name": "Sherlock Holmes", "category": "Thám tử", "address": "221B Baker Street", "code": "50NW", "desc": "Thám tử lừng danh phố Baker." },
    { "name": "Tetley & Butler", "category": "Trang phục", "address": "16 NW Marylebone", "code": "16NW", "desc": "Cửa hàng bán mũ thợ săn và áo choàng." },
    { "name": "Thomas Cook Tourist Office", "category": "Du lịch", "address": "23 SW Victoria St", "code": "23SW", "desc": "Đại lý vé tàu hỏa và du lịch." },
    { "name": "Union Bank of London", "category": "Ngân hàng", "address": "66 EC Threadneedle St", "code": "66EC", "desc": "Chi nhánh ngân hàng thương mại." },
    { "name": "Victor Hugo Books", "category": "Hiệu sách", "address": "56 NW Marylebone", "code": "56NW", "desc": "Bán sách văn học Pháp và ngoại văn." },
    { "name": "Wayne Nelson", "category": "Đạo diễn", "address": "18 WC Wellington St", "code": "18WC", "desc": "Đạo diễn vở kịch tại Lyceum." },
    { "name": "Wiggins", "category": "Thám tử nhí", "address": "221B Baker Street", "code": "50NW", "desc": "Đội trưởng thám tử nhí Baker Street." },
    { "name": "Wilkie Gunderson", "category": "Nhà nghỉ", "address": "53 NW Camden St", "code": "53NW", "desc": "Chủ nhà nghỉ Camden House." },
    { "name": "William Blake Studio", "category": "Phòng tranh", "address": "31 WC High Holborn", "code": "31WC", "desc": "Phòng triển lãm tranh nghệ thuật." },
    { "name": "Xavier Shipping Agency", "category": "Đại lý tàu", "address": "82 EC Minories", "code": "82EC", "desc": "Hãng vận tải và vé tàu biển." },
    { "name": "Yorkshire Steamship Co.", "category": "Hàng hải", "address": "95 EC Whitechapel", "code": "95EC", "desc": "Hãng tàu hơi nước đường sông." },
    { "name": "Zachary Taylor Horns", "category": "Nhạc cụ", "address": "87 WC Strand", "code": "87WC", "desc": "Tiệm chế tác nhạc cụ bằng đồng." }
  ],
  "newspaper": {
    "issue_date": "Saturday, 2 December 1893",
    "paper_name": "THE DAILY TELEGRAPH - LONDON EDITION",
    "articles": [
      {
        "title": "HỎA HOẠN KINH HOÀNG TẠI 221B BAKER STREET: NGHI VẤN VỤ MẠNG",
        "date": "2 Dec 1893",
        "summary": "Đêm qua lúc 9:00 tối, ngọn lửa đã thiêu rụi căn hộ của vị thám tử nổi tiếng Sherlock Holmes. Thi thể cháy xém được tìm thấy tại hiện trường với vết đạn xuyên tim. Cảnh sát Scotland Yard đang phong tỏa khu vực.",
        "related_code": "50NW",
        "full_text": "HORRIFIC FIRE AT 221B BAKER STREET (2 Dec 1893)\nLate last night at approximately 9:00 PM, a devastating fire erupted at the famous residence of consulting detective Mr. Sherlock Holmes at 221B Baker Street. Fire brigades rushed to the scene but the blaze quickly consumed the upper chambers. After the inferno was brought under control, investigators made a tragic discovery inside the charred ruins: a body was found bearing a gunshot wound through the chest. Scotland Yard officers under Inspector Lestrade have cordoned off the entire street while a formal investigation is underway."
      },
      {
        "title": "TRUY NÃ TÊN TỘI PHẠM NGUY HIỂM EDWARD BEAUPRE VƯỢT NGỤC",
        "date": "1 Dec 1893",
        "summary": "Bộ Nội An phát lệnh truy nã Edward Beaupre - gã trùm buôn lậu bị bắt 2 năm trước tại cảng Outer Docks. Y được nhìn thấy lảng vảng gần khu vực Regent's Park và Marylebone.",
        "related_code": "98E",
        "full_text": "MANHUNT FOR DANGEROUS ESCAPED CONVICT EDWARD BEAUPRE (1 Dec 1893)\nThe Home Office has issued an urgent public alert following the escape of Edward Beaupre, a notorious smuggling kingpin sentenced two years ago. Beaupre escaped custody during a transport transfer yesterday evening. Authorities report sightings of a suspicious male matching his description around Regent's Park and Marylebone. Citizens are warned that the suspect is considered armed and extremely dangerous."
      },
      {
        "title": "VỞ KỊCH MỚI 'THE INITIATIVE OF DHARMA' TẠI NHÀ HÁT LYCEUM",
        "date": "29 Nov 1893",
        "summary": "Đạo diễn Wayne Nelson ra mắt vở kịch đầy kịch tính với sự tham gia của nữ minh tinh Gertrude Helwig trong trang phục dạ hội màu đỏ nổi bật.",
        "related_code": "18WC",
        "full_text": "NEW THEATRICAL PRODUCTION 'THE INITIATIVE OF DHARMA' AT LYCEUM THEATRE (29 Nov 1893)\nRenowned director Wayne Nelson presents his captivating new stage thriller at the Lyceum Theatre this weekend. The production features star actress Gertrude Helwig, whose dramatic performance in a striking crimson gown has drawn praise from opening night critics. Tickets are available at the Lyceum box office for all upcoming evening performances."
      },
      {
        "title": "CẢNH BÁO MẤT TRỘM HÓA CHẤT ĐỘC TẠI MARYLEBONE",
        "date": "30 Nov 1893",
        "summary": "Cửa hàng hóa chất John Taylor báo cáo bán lượng lớn chất xyanua cho khách hàng mua rửa ảnh. Cảnh sát khuyến cáo công chúng cẩn trọng.",
        "related_code": "72NW",
        "full_text": "CHEMICAL THEFT WARNING IN MARYLEBONE (30 Nov 1893)\nJohn Taylor Chemist in Marylebone reported to local police that a large quantity of toxic cyanide compound was purchased under false pretenses yesterday afternoon. Police officers are urging chemical vendors across London to verify customer credentials and report suspicious purchases immediately."
      },
      {
        "title": "BẮT GIỮ BĂNG NHÓM BUÔN LẬU TẠI CẢNG OUTER DOCKS (SMUGGLING RING APPREHENDED AT OUTER DOCKS)",
        "date": "18 Nov 1891",
        "summary": "Trong một đợt truy bắt lớn tại cảng Outer Docks, cảnh sát phá thành công đường dây buôn lậu. Sĩ quan Dick Alpert hy sinh. Các đối tượng bị bắt: Edward Beaupre, Jonathon Helwig, Chandler Davenport, Faynola Jacobs, John Locke.",
        "related_code": "98E",
        "full_text": "SMUGGLING RING APPREHENDED AT OUTER DOCKS (18 Nov 1891)\nIn what can only be described as one of the largest apprehensions in recent London history, the Tichfield Police Station working in cooperation with the Thames Division Police Station were tipped off about a smuggling ring involving rare artifacts and other precious items being stolen and sold on the docks of Outer Dock. Five smugglers were apprehended in the arrest, and officers believe everyone involved with the operation was present. The community will mourn of the loss of Officer Dick Alpert, who was killed in the operation. Alpert was a long-standing, respected member of the Tichfield Police Station. He was shot in the line of duty by an unknown shooter. Constituting the apprehended were Edward Beaupre, Jonathon Helwig, Chandler Davenport, Faynola Jacobs, and John Locke. The operation has been going on from some months according to documents seized at the scene of apprehension. London police agencies were tipped off by an anonymous citizen, and remind denizens of London to report suspicious activity to local police forces."
      },
      {
        "title": "TUYÊN ÁN CÁC ĐỐI TƯỢNG BUÔN LẬU (SENTENCES HANDED OUT TO WOULD-BE SMUGGLERS)",
        "date": "25 Nov 1891",
        "summary": "Scotland Yard công bố bản án dành cho 8 đối tượng buôn lậu từ 10 đến 30 năm tù. Chandler Davenport được tuyên trắng án do thiếu chứng cứ.",
        "related_code": "28WC",
        "full_text": "SENTENCES HANDED OUT TO WOULD-BE SMUGGLERS (25 Nov 1891)\nScotland Yard has made public the fate of the eight persons arrested in relation to a would-be smuggling ring at a London establishment. Evidence has implicated eight in an underground smuggling scheme. Seven suspects were arrested on site, while an eighth was picked up at her home. A ninth, Chandler Davenport was found innocent due to lack of evidence found at the crime scene. Those found guilty have been issued sentences ranging from ten to thirty years in prison."
      }
    ]
  }
};
