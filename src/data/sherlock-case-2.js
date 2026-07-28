export const SHERLOCK_CASE_2 = {
  "case_id": "sherlock_case_2",
  "title": "Vụ án mạng tại 221B Baker Street: Cái chết của Sherlock Holmes",
  "author": "Cody Fleming",
  "setting_date": "Ngày 2 tháng 12 năm 1893",
  "intro": {
    "story_text": "Chúng ta chưa từng thấy Bác sĩ John Watson suy sụp như lúc này khi bước tới hiện trường vụ án. Đầu ông nghiêng sang một bên, ngồi tựa vào một chiếc thùng gỗ trên vỉa hè, gương mặt thất thần. Đống đổ nát của căn hộ 221B Baker Street vẫn còn bốc khói âm ỉ. Phía sau hàng rào cảnh sát, đám đông hiếu kỳ đang tụ tập ngày một đông. Dưới tấm vải liệm trắng gần Bác sĩ Watson là thi thể cháy xém được cho là của Sherlock Holmes. Thanh tra Lestrade thì thầm: 'Đây là hiện trường tồi tệ nhất tôi từng thấy. Holmes là bạn của tất cả chúng ta, đặc biệt là Watson. Chúng ta nợ anh ấy sự công bằng, phải tìm ra sự thật trước khi dấu vết nguội lạnh'. Watson đồng ý thực hiện cuộc khám nghiệm tử thi nhanh chóng. Trong khi đó, Wiggins tìm thấy một chiếc hộp sắt lớn được cứu ra từ phòng làm việc của Holmes. Chiếc hộp chứa một số chương trình kịch nghệ gần đây, một biên nhận xe ngựa từ hôm qua, một hộp quẹt diêm đã sử dụng một nửa và hai mảnh giấy nhắn bí ẩn. Vụ án chính thức bắt đầu!",
    "initial_clues": [
      "Thi thể cháy xém có vết đạn bắn xuyên từ lưng ra bụng của một khẩu .44 Webley.",
      "Chiếc hộp sắt trên bàn làm việc bị méo nhẹ phần vành nắp, cho thấy nó được đóng vội vàng trong lúc đám cháy đang diễn ra.",
      "Mảnh giấy nhắn 1 trong hộp sắt: 'S, Sẽ không có hại gì xảy ra đâu, tôi hứa! - M.'",
      "Mảnh giấy nhắn 2 trong hộp sắt: 'Ngày 2 tháng 12 năm 1893. Gửi Lestrade: Hãy phân tích kỹ để được trợ giúp thêm. Tốt nhất nên kiểm tra phần còn lại của hiện trường.'",
      "Nhân chứng Olivia Robins báo cáo đã nhìn thấy Sherlock gặp một người đàn ông giống Mycroft lúc 8:30 tối, và lúc 9:00 tối thấy Edward Beaupre cùng một phụ nữ mặc váy đỏ đeo mặt nạ kịch tưới dầu hỏa đốt nhà."
    ],
    "unlocked_nodes": ["50NW", "8SW", "22SW"]
  },
  "nodes": {
    "50NW": {
      "id": "50NW",
      "title": "Nhà bà Olivia Robins (Nhân chứng)",
      "area": "NW",
      "type": "suspect_interview",
      "map_coords": { "x": 120, "y": 420 },
      "content": "Bà lão Olivia Robins sống đối diện căn hộ 221B Baker Street kể lại: 'Hôm qua lúc 8:30 tối, tôi thấy Sherlock đứng nói chuyện với một người đàn ông cao lớn giống hệt em trai ông ấy (Mycroft) khoảng một phút trước khi đi vào nhà. Sau đó lúc 9:00 tối, tôi nhìn thấy một gã trông rất giống Edward Beaupre (gã buôn lậu đáng lẽ phải ở trong tù) đi cùng một người phụ nữ mặc váy đỏ nổi bật và đeo mặt nạ kịch hài hước. Tên Beaupre đổ dầu hỏa quanh tường nhà Sherlock, còn người phụ nữ châm lửa ném vào. Họ rời đi ngay khi ngọn lửa bùng lên và tôi bắt đầu hét lên cầu cứu. Người phụ nữ đó dường như cũng bị lửa bén vào tay trong lúc châm'.",
      "unlocks": {
        "nodes": ["8SW", "52SW", "85WC"],
        "evidence_items": ["Nhân chứng xác nhận Edward Beaupre và một phụ nữ đeo mặt nạ đốt nhà lúc 9:00 tối."]
      },
      "key_hints": ["Edward Beaupre và một phụ nữ mặc váy đỏ, đeo mặt nạ kịch đã châm lửa đốt nhà.", "Sherlock gặp em/anh trai lúc 8:30 tối.", "Người phụ nữ đốt nhà bị bỏng ở cánh tay."]
    },
    "8SW": {
      "id": "8SW",
      "title": "Mycroft Holmes",
      "area": "SW",
      "type": "suspect_interview",
      "map_coords": { "x": 80, "y": 620 },
      "content": "Mycroft Holmes đau buồn chia sẻ: 'Tôi đã gặp em trai mình hai lần vào ngày hôm qua. Chúng tôi ăn trưa cùng nhau lúc 1 giờ chiều và mọi thứ vẫn bình thường. Sherlock bảo tôi ghé qua căn hộ của nó vào tối muộn. Tôi đến lúc 8:30 tối, Sherlock đón tôi ngay trước cửa thay vì mời vào nhà. Nó ăn mặc rất kỳ lạ - mặc một bộ vest màu đỏ burgundy bóng bẩy thay vì đồ vải thô màu nâu xám quen thuộc, và trông bộ quần áo có vẻ mới toanh. Sherlock cũng tỏ ra rất vội vã, thậm chí còn hỏi vay tôi một số tiền (điều nó chưa từng làm) rồi bảo tôi rời đi ngay vì có việc gấp. Nó liên tục gọi nhầm tên tôi trong cuộc trò chuyện ngắn'.",
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
      "map_coords": { "x": 150, "y": 600 },
      "content": "Murray đang khám nghiệm chiếc hộp sắt lấy từ đống tro tàn: 'Nội dung bên trong không có gì đặc biệt, nhưng vành kim loại bên trong nắp hộp bị biến dạng nhẹ do nhiệt độ cao. Điều này chứng tỏ nắp hộp không được khóa chốt cẩn thận khi đám cháy xảy ra. Ai đó đã đóng vội chiếc hộp này lại trong lúc ngọn lửa đang thiêu rụi căn phòng'.",
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
      "map_coords": { "x": 110, "y": 390 },
      "content": "Chủ nhà nghỉ Wilkie Gunderson dẫn chúng ta lên phòng trống trên tầng lầu nhìn thẳng sang 221B Baker St. Căn phòng nồng nặc mùi thuốc súng cháy. Cửa kính bị vỡ vụn, các mảnh kính rơi đầy trên chiếc bàn bầu dục nhỏ phía dưới. Trên sàn nhà cạnh bàn, chúng ta tìm thấy một vỏ đạn súng ngắn đã bắn. Gunderson hoảng hốt: 'Phòng này đáng lẽ phải khóa vì không có khách thuê. Chỉ có tôi và đội dọn dẹp có chìa khóa. Hôm nay chỉ có một nhân viên dọn dẹp mới nghỉ việc không phép là Israel Jacobs'.",
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
      "map_coords": { "x": 620, "y": 280 },
      "content": "Chủ cửa hàng Oliver Perkins xem xét vỏ đạn Webley .44: 'Đây là vỏ đạn .44 Webley nhưng bắn từ một khẩu Bull Dog cỡ nhỏ. Khẩu này chỉ có tầm bắn tối đa khoảng 50 feet. Để bắn trúng tim nạn nhân qua hai lớp kính từ khoảng cách 50 feet là một phát bắn cực kỳ khó. Ở London này chỉ có 2 người làm được: tôi và Chandler Davenport. Về Israel Jacobs, nó là con riêng của vợ tôi. Vợ tôi đang ở tù. Thằng bé bị bệnh run tay bẩm sinh từ nhỏ, nó không thể bắn súng được đâu. Nhưng gần đây nó hay qua lại với Chandler Davenport tại trường bắn sau ngõ của tôi'.",
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
      "map_coords": { "x": 680, "y": 300 },
      "content": "Israel Jacobs mở cửa với vẻ mặt đầy lo lắng, hai bàn tay run rẩy liên tục không kiểm soát: 'Tôi không sở hữu khẩu súng nào và cũng chưa từng bắn súng. Tay tôi bị thế này từ nhỏ rồi'. Khi chúng ta nhặt lên một cuốn sổ ghi chú có tiêu đề 'Grant Firearms - Đáp ứng mọi nhu cầu súng đạn của bạn', Jacobs tái mặt: 'Mẹ tôi cưới ông chủ tiệm súng Grant. Tôi không ưa ông ta nhưng lấy giấy này viết nháp thôi'.",
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
      "map_coords": { "x": 420, "y": 320 },
      "content": "Căn hộ của Davenport mở cửa nhưng không có ai ở nhà. Khám xét phòng, chúng ta thấy một hòm sắt chứa nhiều loại súng đạn. Dưới nắp hòm dán một bài báo cũ ngày 25/11/1891 tiêu đề 'Tuyên án băng nhóm buôn lậu tại cảng phía Đông': 'Tòa án kết án 8 thành viên của băng nhóm buôn lậu cổ vật và ma túy. Chandler Davenport là người thứ 9 được tuyên trắng án do thiếu chứng cứ'.",
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
      "map_coords": { "x": 480, "y": 350 },
      "content": "Gerald Locke, anh em song sinh của John Locke (thành viên băng buôn lậu đang ở tù) cho biết: 'John là em trai tôi. Nó đi buôn lậu và bị bắt là đáng đời. Nhưng tôi nghe nói những gia đình khác của băng nhóm rất căm phẫn Sherlock Holmes vì tin báo của ông ta khiến người thân của họ đi tù 10-30 năm. Lần cuối tôi gặp John trong tù vài ngày trước, nó nói sắp có một vụ lớn xảy ra trả thù Holmes nhưng không chịu tiết lộ chi tiết'.",
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
      "map_coords": { "x": 190, "y": 660 },
      "content": "Căn hộ của Ambroise Beaupre (em trai Edward Beaupre) trống trơn như đã bỏ đi vài ngày. Bánh mì trên bàn đã mốc. Trên bàn có một mảnh giấy ghi địa chỉ '85 WC'. Trong phòng tắm, có một bức thư mật mã kỳ lạ dán trên tường: các chữ cái xếp thành hàng dọc và hàng ngang hỗn loạn, trong đó có một số chữ viết hoa (A, T, A, C, T, C, P).",
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
      "map_coords": { "x": 510, "y": 380 },
      "content": "Laura Parker cho biết: 'Tôi từng hẹn hò với Edward Beaupre trước khi anh ta bị bắt vào tù. Tôi biết em trai anh ta là Ambroise Beaupre rất tức giận sau vụ bắt giữ đó. Tôi nghĩ anh ta đã rời London cách đây vài ngày vì quá tức giận'.",
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
      "map_coords": { "x": 710, "y": 340 },
      "content": "Căn hộ của Pemberton không khóa. Trong phòng ngủ treo đầy những mẩu báo viết về các vụ án của Sherlock Holmes. Trong tủ quần áo chứa toàn áo khoác dạ tweed và mũ thợ săn giống hệt trang phục của Holmes. Trên bàn làm việc có ba bức thư từ viết tay gửi từ 'S' (Sherlock): \n1. 'M, Hãy ghé qua lúc 8:45 tối nay. Tôi rất tiếc phải nói rằng việc này không như anh mong đợi đâu. - S'\n2. 'M, Anh bắt chước rất giỏi, tôi thừa nhận. Tuy nhiên, tôi không thích việc đi vào một nhà hàng và thấy hóa đơn đã được thanh toán dưới tên tôi. - S'\n3. 'M, Với sự tâng bốc sâu sắc nhất, tôi đã ở cửa hàng hôm nọ. Thật ấn tượng. Nhưng người duy nhất anh không thể lừa được là tôi. - S'.",
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
      "map_coords": { "x": 130, "y": 450 },
      "content": "Người bán hàng cho biết: 'Chúng tôi không bán được nhiều mũ thợ săn deerstalker, nhưng gần đây có một quý ông trung niên trông lịch lãm, tinh tế hay ghé mua loại mũ này. Ông ta nói tên mình là Pemberton'.",
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
      "map_coords": { "x": 890, "y": 620 },
      "content": "Chủ tiệm Roberts & Parfitt kể lại: 'Sherlock Holmes thường xuyên mua đồ ở đây. Hôm qua khoảng 5 giờ chiều, ông ấy có ghé qua lấy một chiếc áo khoác tweed màu burgundy và ghi nợ vào tài khoản. Ông ấy tỏ ra rất cởi mở, trò chuyện vui vẻ và đồng ý cho tôi làm một ma-nơ-canh giống ông ấy đặt trước cửa'. Wiggins thì thầm: 'Sherlock thật không bao giờ dùng thẻ tín dụng ghi nợ, ông ấy chỉ nhận quà hoặc trả tiền mặt, và ông ấy cực kỳ ghét việc phô trương làm ma-nơ-canh'.",
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
      "map_coords": { "x": 740, "y": 360 },
      "content": "Gertrude Helwig, một phụ nữ trẻ xinh đẹp, tiếp đón chúng ta: 'Tối qua tôi ở Nhà hát Lyceum để tập duyệt cho vở diễn mới tối nay. Tôi không hề bén mảng tới Baker Street'. Tuy nhiên, khi nhấc gói bưu phẩm giúp cô ấy, cô ấy dễ dàng dùng tay trái nhưng khẽ nhăn mặt đau đớn khi đưa cánh tay phải ra đỡ. Chúng ta thấy vết bỏng đỏ lớn được che dưới lớp áo pink overcoat.",
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
      "map_coords": { "x": 450, "y": 280 },
      "content": "Đạo diễn Wayne Nelson đang la hét vì nữ diễn viên chính Gertrude Helwig chưa đến. Ông cho biết thêm: 'Vở kịch tối nay của chúng tôi tên là The Initiative of Dharma. Nhân vật chính là một phụ nữ xinh đẹp mặc váy đỏ. À, hôm qua ai đó đã lấy cắp chiếc mặt nạ kịch vui vẻ (happy theater mask) treo trên tường phòng hóa trang'.",
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
      "map_coords": { "x": 780, "y": 380 },
      "content": "Nữ phục vụ quán Ship and Turtle kể lại: 'Hôm qua khoảng 5 giờ chiều, có một cụ già mặc áo khoác nâu (giống Holmes) đi trên vỉa hè thì một thùng gỗ đựng dưa chuột muối từ kho của chúng tôi tuột ra va trúng chân ông ấy khiến ông ấy đi tập tễnh. Hai nhân viên kho làm việc hôm qua là Mitchell Rourke và Israel Jacobs. Israel là một cậu bé rất tốt'.",
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
      "map_coords": { "x": 400, "y": 250 },
      "content": "Điều hành trạm xe ngựa báo cáo: 'Sherlock Holmes được xe chở đi hai lần hôm qua. Một lần lúc 1:45 chiều hướng NW nhưng xuống giữa chừng không rõ lý do. Lần hai lúc gần 6:00 chiều về hướng WC. Tài xế phụ kể thêm: Hôm qua lúc 5:00 chiều thấy ông Holmes bị một thùng gỗ va trúng chân trước quán Ship and Turtle, trông rất đau nhưng ông ấy từ chối đi bác sĩ'.",
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
      "map_coords": { "x": 100, "y": 480 },
      "content": "Cô phục vụ Annette Verlaine kể lại: 'Hôm qua lúc 2 giờ chiều, có một người trông giống Sherlock Holmes vào quán ngồi im lặng suốt một giờ. Khi ông ta gọi trà, bà chủ Elle Fanning đã gạt tôi ra, tự tay pha trà và mang ra cho ông ta. Tôi thấy ông Holmes nhìn chằm chằm vào cô ấy, ngửi chén trà hai lần rồi đứng dậy bỏ tiền lại và đi thẳng. Mấy ngày trước, tôi thấy Elle Fanning họp kín trong phòng sau với hai gã trông rất đáng sợ, một gã cứ xoay khẩu súng trên ngón tay, gã kia thì đập cây gậy vào lòng bàn tay'.",
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
      "map_coords": { "x": 180, "y": 420 },
      "content": "Nhà hóa học John Taylor kiểm tra sổ sách: 'Gần đây tôi có bán một lượng chất độc Cyanide đóng trong thùng gỗ cho cô Elle Fanning. Cô ấy nói mua để làm chất tráng ảnh nghệ thuật sepia vì cô ấy là nhiếp ảnh gia nghiệp dư'.",
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
      "map_coords": { "x": 190, "y": 490 },
      "content": "Đại úy cảnh sát chia sẻ hồ sơ: 'Cô Elle Fanning là con gái của Dick Alpert, một cảnh sát kỳ cựu đã hy sinh trong vụ vây bắt băng buôn lậu Outer Docks hai năm trước. Sherlock Holmes là người đã cung cấp thông tin mật giúp cảnh sát phá vụ án đó. Tên Alpert bị bắn chết bởi một phát súng không rõ thủ phạm'.",
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
      "map_coords": { "x": 210, "y": 480 },
      "content": "Căn hộ của Elle Fanning bừa bộn. Sau ghế sofa giấu một chiếc thùng gỗ nhỏ có nhãn của tiệm hóa chất 'Taylor'. Cô ta thừa nhận: 'Sherlock Holmes có ghé quán tôi hôm qua lúc 2 giờ chiều. Tôi rất ngưỡng mộ ông ấy nên tự tay pha trà mời ông ấy, nhưng ông ấy hành xử rất kỳ lạ rồi bỏ đi không uống'.",
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
      "map_coords": { "x": 920, "y": 300 },
      "content": "Quản lý cảng cho biết: 'Tên Ambroise Beaupre làm bảo vệ cho chúng tôi ở đây. Gã là một kẻ hung tợn, chuyên mang theo một cây gậy gỗ sồi shillelagh rất nặng để hăm dọa người khác. Hôm nay là lần đầu tiên gã bỏ làm không lý do'.",
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
      "map_coords": { "x": 650, "y": 320 },
      "content": "Nhà báo Henry Ellis cho biết: 'Tôi nhận được tin báo từ Dirkin Topper. Hắn đi ngang qua Baker Street lúc hơn 9:00 tối qua và thấy ba người vội vã rời khỏi căn hộ đang cháy của Sherlock: một người đàn ông, một người phụ nữ mặc váy đỏ và một bóng đen mặc đồ đen đi sau cùng'.",
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
        "related_code": "50NW"
      },
      {
        "title": "TRUY NÃ TÊN TỘI PHẠM NGUY HIỂM EDWARD BEAUPRE VƯỢT NGỤC",
        "date": "1 Dec 1893",
        "summary": "Bộ Nội An phát lệnh truy nã Edward Beaupre - gã trùm buôn lậu bị bắt 2 năm trước tại cảng Outer Docks. Y được nhìn thấy lảng vảng gần khu vực Regent's Park và Marylebone.",
        "related_code": "98E"
      },
      {
        "title": "VỞ KỊCH MỚI 'THE INITIATIVE OF DHARMA' TẠI NHÀ HÁT LYCEUM",
        "date": "29 Nov 1893",
        "summary": "Đạo diễn Wayne Nelson ra mắt vở kịch đầy kịch tính với sự tham gia của nữ minh tinh Gertrude Helwig trong trang phục dạ hội màu đỏ nổi bật.",
        "related_code": "18WC"
      },
      {
        "title": "CẢNH BÁO MẤT TRỘM HÓA CHẤT ĐỘC TẠI MARYLEBONE",
        "date": "30 Nov 1893",
        "summary": "Cửa hàng hóa chất John Taylor báo cáo bán lượng lớn chất xyanua cho khách hàng mua rửa ảnh. Cảnh sát khuyến cáo công chúng cẩn trọng.",
        "related_code": "72NW"
      }
    ]
  }
};
