// Cơ sở dữ liệu Chuẩn Bộ Cơ Sở Deception: Murder in Hong Kong (Base Game 100% Chính Xác)
// Thành phần: 200 Thẻ Đầu Mối | 90 Thẻ Công Cụ | 12 Thẻ Vai Trò | 32 Thẻ Bối Cảnh | 6 Viên Đạn

export const ROLES = [
  {
    id: 'forensic_scientist',
    name: 'Giám định viên Pháp y',
    english: 'Forensic Scientist',
    faction: 'investigators',
    isHost: true,
    minPlayers: 4,
    description: 'Nắm giữ toàn bộ đáp án (1 Thẻ Manh mối + 1 Thẻ Phương tiện). Không được nói, ra hiệu bằng cử chỉ hay ánh mắt; chỉ được truyền tin bằng cách đặt đạn gỗ lên Thẻ Hiện trường.',
    avatar: '🔬'
  },
  {
    id: 'murderer',
    name: 'Hung thủ',
    english: 'Murderer',
    faction: 'crimes',
    isHost: false,
    minPlayers: 4,
    description: 'Bí mật chọn 1 Thẻ Manh mối và 1 Thẻ Phương tiện trước mặt mình làm đáp án. Phải cố gắng ngụy trang để đổ lỗi cho người vô tội.',
    avatar: '🩸'
  },
  {
    id: 'investigator',
    name: 'Điều tra viên',
    english: 'Investigator',
    faction: 'investigators',
    isHost: false,
    minPlayers: 4,
    description: 'Không có thông tin ban đầu. Sử dụng lập luận logic và gợi ý đặt đạn từ Pháp y để tìm ra Hung thủ cùng bộ thẻ đáp án.',
    avatar: '🔍'
  },
  {
    id: 'accomplice',
    name: 'Đồng phạm',
    english: 'Accomplice',
    faction: 'crimes',
    isHost: false,
    minPlayers: 6,
    description: 'Biết rõ danh tính Hung thủ và bộ thẻ đáp án. Nhiệm vụ là tung tin đồn nhảm, làm lạc hướng điều tra và bảo vệ Hung thủ.',
    avatar: '🤝'
  },
  {
    id: 'witness',
    name: 'Nhân chứng',
    english: 'Witness',
    faction: 'investigators',
    isHost: false,
    minPlayers: 6,
    description: 'Biết được ai thuộc phe Tội phạm nhưng không biết cụ thể ai là Hung thủ/Đồng phạm và cách thức gây án. Nếu phe Điều tra thắng, Hung thủ có cơ hội chỉ định đúng Nhân chứng để lật ngược bài.',
    avatar: '👁️'
  }
];

export const CAUSE_OF_DEATH = {
  id: 'cause_of_death',
  name: 'Nguyên nhân tử vong',
  english: 'Cause of Death',
  color: 'purple',
  options: [
    { label: 'Ngạt thở', english: 'Suffocation', desc: 'Dây thừng, Túi nilon, Gối, Khói độc, Nước (Chết đuối), Dây điện...' },
    { label: 'Chấn thương nghiêm trọng', english: 'Severe Injury', desc: 'Rìu, Búa, Gậy bóng chày, Súng ngắn, Dao bếp, Tạ, Gạch...' },
    { label: 'Mất máu', english: 'Loss of Blood', desc: 'Cắt mạch máu, Mảnh thủy tinh, Dao cạo, Kiếm, Kéo, Vết cắn...' },
    { label: 'Bệnh tật / Nhiễm trùng', english: 'Illness / Disease', desc: 'Vi khuẩn, Virus, Tiêm không khí, Kim tiêm nhiễm trùng, Bọ cạp...' },
    { label: 'Ngộ độc / Nhiễm độc', english: 'Poisoning', desc: 'Thuốc độc, Khí gas, Arsenic, Thức ăn độc, Rắn độc, Cá nóc...' },
    { label: 'Tai nạn', english: 'Accident', desc: 'Điện giật, Thảm họa giao thông, Ngã từ trên cao, Cháy nhà...' }
  ]
};

export const LOCATIONS = [
  {
    id: 'location_1',
    name: 'Địa điểm hiện trường 1',
    english: 'Location Tile 1',
    color: 'green',
    options: ['Phòng khách (Living Room)', 'Phòng ngủ (Bedroom)', 'Phòng kho (Storeroom)', 'Phòng tắm (Bathroom)', 'Nhà bếp (Kitchen)', 'Ban công (Balcony)']
  },
  {
    id: 'location_2',
    name: 'Địa điểm hiện trường 2',
    english: 'Location Tile 2',
    color: 'green',
    options: ['Quán rượu (Pub)', 'Nhà sách (Bookstore)', 'Nhà hàng (Restaurant)', 'Khách sạn (Hotel)', 'Bệnh viện (Hospital)', 'Công trường (Building Site)']
  },
  {
    id: 'location_3',
    name: 'Địa điểm hiện trường 3',
    english: 'Location Tile 3',
    color: 'green',
    options: ['Sân chơi (Playground)', 'Lớp học (Classroom)', 'Ký túc xá (Dormitory)', 'Quán ăn tự phục vụ (Cafeteria)', 'Thang máy (Elevator)', 'Nhà vệ sinh công cộng (Toilet)']
  },
  {
    id: 'location_4',
    name: 'Địa điểm hiện trường 4',
    english: 'Location Tile 4',
    color: 'green',
    options: ['Nhà nghỉ dưỡng (Vacation Home)', 'Bãi đậu xe / Công viên (Park)', 'Siêu thị (Supermarket)', 'Trường học (School)', 'Rừng rậm (Woods)', 'Ngân hàng (Bank)']
  },
  {
    id: 'location_unknown',
    name: 'Địa điểm không rõ ràng',
    english: 'Unknown Location',
    color: 'green',
    options: ['Không gian công cộng', 'Khu vực riêng tư', 'Nơi hoang dã', 'Khu đô thị', 'Khu vực công nghiệp', 'Không xác định']
  }
];

export const SCENE_TILES = [
  {
    id: 'corpse_condition',
    name: 'Tình trạng thi thể',
    english: 'Corpse Condition',
    color: 'orange',
    options: ['Còn ấm (Still Warm)', 'Co cứng (Stiff)', 'Phân hủy (Decayed)', 'Không nguyên vẹn (Incomplete)', 'Nguyên vẹn (Intact)', 'Biến dạng (Twisted)']
  },
  {
    id: 'day_of_crime',
    name: 'Thời điểm vụ án',
    english: 'Day of Crime',
    color: 'orange',
    options: ['Ngày thường (Weekday)', 'Cuối tuần (Weekend)', 'Mùa xuân (Spring)', 'Mùa hè (Summer)', 'Mùa thu (Autumn)', 'Mùa đông (Winter)']
  },
  {
    id: 'duration_of_crime',
    name: 'Thời gian diễn ra',
    english: 'Duration of Crime',
    color: 'orange',
    options: ['Tức thì (Instantaneous)', 'Ngắn / Nhanh (Brief)', 'Từ từ (Gradual)', 'Kéo dài (Prolonged)', 'Vài ngày (Few Days)', 'Bất định (Unclear)']
  },
  {
    id: 'state_of_the_scene',
    name: 'Hiện trạng hiện trường',
    english: 'State of the Scene',
    color: 'orange',
    options: ['Mảnh vỡ (Bits and Pieces)', 'Tro tàn (Ashes)', 'Vết nước (Water Stain)', 'Nứt vỡ (Cracked)', 'Hỗn loạn (Disorderly)', 'Gọn gàng (Tidy)']
  },
  {
    id: 'evidence_left_behind',
    name: 'Loại bằng chứng để lại',
    english: 'Evidence Left Behind',
    color: 'orange',
    options: ['Tự nhiên (Natural)', 'Nghệ thuật (Artistic)', 'Văn bản / Chữ viết (Written)', 'Nhân tạo / Tổng hợp (Synthetic)', 'Kim loại / Cứng', 'Dễ bay hơi']
  },
  {
    id: 'in_progress',
    name: 'Hành động đang diễn ra',
    english: 'In Progress',
    color: 'orange',
    options: ['Giải trí (Entertainment)', 'Thư giãn (Relaxation)', 'Luyện tập (Exercise)', 'Làm việc (Working)', 'Ăn uống (Dining)', 'Di chuyển (Traveling)']
  },
  {
    id: 'victim_clothing',
    name: 'Trang phục nạn nhân',
    english: "Victim's Clothing",
    color: 'orange',
    options: ['Lịch sự / Vest (Formal)', 'Thường ngày (Casual)', 'Đồ ngủ (Sleepwear)', 'Thiếu vải (Undressed)', 'Thể thao (Sportswear)', 'Đầy vết bẩn (Dirty)']
  },
  {
    id: 'victim_expression',
    name: 'Biểu cảm nạn nhân',
    english: "Victim's Expression",
    color: 'orange',
    options: ['Yên bình (Peaceful)', 'Hoảng sợ (Terrified)', 'Đau đớn (Painful)', 'Bất ngờ (Surprised)', 'Tức giận (Angry)', 'Không cảm xúc (Blank)']
  },
  {
    id: 'weather',
    name: 'Thời tiết',
    english: 'Weather',
    color: 'orange',
    options: ['Nắng ấm (Sunny)', 'Mưa bão (Rainy)', 'U ám / Mây mù (Cloudy)', 'Gió lớn (Windy)', 'Tuyết rơi (Snowy)', 'Nóng nực / Oi bức (Hot)']
  },
  {
    id: 'sound',
    name: 'Âm thanh tại hiện trường',
    english: 'Sound',
    color: 'orange',
    options: ['Yên tĩnh (Silent)', 'Tiếng ồn ào (Noisy)', 'Âm nhạc (Music)', 'Tiếng la hét (Screaming)', 'Tiếng thiên nhiên (Nature)', 'Tiếng động cơ (Engine)']
  },
  {
    id: 'scent',
    name: 'Mùi hương đặc trưng',
    english: 'Scent',
    color: 'orange',
    options: ['Mùi nước hoa (Perfume)', 'Mùi khét (Burnt)', 'Mùi hóa chất (Chemical)', 'Mùi thối rữa (Rotten)', 'Mùi thức ăn (Food)', 'Không mùi (Odorless)']
  },
  {
    id: 'social_relations',
    name: 'Mối quan hệ xã hội',
    english: 'Social Relations',
    color: 'orange',
    options: ['Người thân (Family)', 'Đồng nghiệp (Colleague)', 'Người yêu (Lover)', 'Bạn bè (Friend)', 'Kẻ thù (Enemy)', 'Người lạ (Stranger)']
  }
];

// CHUẨN 90 THẺ CÔNG CỤ / HUNG KHÍ (MEANS CARDS)
export const MEANS_CARDS = Array.from({ length: 90 }, (_, i) => {
  const baseMeans = [
    'Dao bếp chặt xương', 'Dao cạo râu bén', 'Dây đàn Guitar', 'Rìu đốn gỗ', 'Kéo may sắt', 'Mảnh thủy tinh sắc', 'Kiếm Nhật Samurai', 'Chân nến bằng đồng', 'Búa đập đá', 'Tạ tay 10kg',
    'Gậy bóng chày gãy', 'Đèn bàn kim loại', 'Viên gạch nung', 'Gối lông vũ ép', 'Dây thừng thắt nút', 'Súng ngắn ổ quay', 'Súng bắn tỉa', 'Chai dầu hỏa', 'Bật lửa Zippo', 'Lọ thuốc độc',
    'Rắn hổ mang', 'Bọ cạp sa mạc', 'Bình Axit đậm đặc', 'Thuốc trừ sâu', 'Cá nóc tươi', 'Bình khí Gas rò rỉ', 'Bột Arsenic độc', 'Máy tính xách tay', 'Dây điện cao thế', 'Bơm tiêm không khí',
    'Kim tiêm rỉ sét', 'Dây cắm điện hở', 'Cuốc làm vườn', 'Trâm cài tóc nhọn', 'Nồi đất nướng', 'Đĩa sắt ném', 'Cây lao săn cá', 'Bút máy đầu vàng', 'Đèn Laser công suất cao', 'Đèn sưởi thạch anh',
    'Bình chữa cháy', 'Dây đai an toàn', 'Ống thép giàn giáo', 'Dây xích đỏ', 'Móc câu cá ngừ', 'Dao phay chặt thịt', 'Dây dù nhảy', 'Súng phun lửa mini', 'Thuốc diệt chuột', 'Xyanua dạng bột',
    'Cồn công nghiệp 90 độ', 'Dây cao su bắn chim', 'Ổ khóa cổng sắt', 'Máy cắt cỏ cầm tay', 'Nỏ bắn tên gỗ', 'Mảnh sứ bát vỡ', 'Băng dính đen bịt miệng', 'Bình Gas du lịch', 'Dao gấp đa năng', 'Thuốc ngủ quá liều',
    'Cưa máy xăng', 'Tạ đĩa sắt', 'Nĩa ăn bít tết', 'Bàn ủi hơi nước', 'Kìm cắt cáp điện', 'Chày đâm tiêu bằng đá', 'Cuốc đất làm ruộng', 'Xẻng quân dụng gấp', 'Mỏ lết vặn ốc', 'Mảnh gương vỡ',
    'Thắt lưng da trâu', 'Cáp thép cẩu hàng', 'Chai xăng pha Cồn', 'Búa tạ 5kg', 'Cây gậy như ý', 'Dây xích xe máy', 'Bình xịt hơi cay', 'Máy sấy tóc', 'Súng bắn đinh bê tông', 'Gậy golf sắt',
    'Ống tiêm thủy tinh', 'Súng săn 2 nòng', 'Dao mổ phẫu thuật', 'Cây lau nhà đứt cán', 'Thùng hóa chất tẩy', 'Lò vi sóng mini', 'Con lăn ép gỗ', 'Cán ô dù kim loại', 'Quạt trần mini', 'Dây xích khóa xe'
  ];
  return {
    id: `m_${i + 1}`,
    name: baseMeans[i] || `Hung khí ${i + 1}`,
    english: `Means ${i + 1}`,
    type: 'base'
  };
});

export const CLUE_CARDS = Array.from({ length: 200 }, (_, i) => {
  const baseClues = [
    'Giày cao gót đỏ', 'Tàn thuốc lá thơm', 'Gạt tàn bằng ngọc', 'Tờ báo cũ ố vàng', 'Điều khiển TV hỏng', 'Thư rác niêm phong', 'Mảnh kính cận vỡ', 'Thỏi son môi đỏ tươi', 'Nhẫn cưới khắc tên', 'Đồng hồ vàng ròng',
    'Chìa khóa két sắt', 'Ví da bò sần', 'Bánh bao hấp dở', 'Túi gạo nếp', 'Vết máu khô', 'Sợi vải lụa đỏ', 'Răng cửa bị gãy', 'Sợi tóc kim tuyến', 'Dấu vân tay dính mực', 'Vết bùn đỏ',
    'Bã kẹo cao su dính', 'Táo cắn dở dính son', 'Xửng hấp tre cũ', 'Đôi đũa lệch', 'Chim dây cót đồ chơi', 'Tượng rồng đá', 'Mặt nạ hóa trang', 'Tranh sơn dầu cổ', 'Báo cáo y tế bảo mật', 'Cuốn nhật ký khóa',
    'Bản đồ thành phố ngầm', 'Thư tình viết tay', 'Chi phiếu ngân hàng giả', 'Bánh gạo Tteok chiên', 'Bạch tuộc sống tươi', 'Phô mai Feta vụn', 'Bọt biển biển sâu', 'Vé xem phim rách', 'Tai nghe Bluetooth', 'Bút mực chảy lem',
    'Dây chuyền ngọc trai', 'Kính áp tròng xanh', 'Chai nước hoa đắt tiền', 'Bông tai kim cương', 'Vết cà phê sánh', 'Mảnh sơn móng tay đỏ', 'Chiếc cúc áo bị rứt', 'Lông mèo Ba Tư', 'Túi nilon rác đen', 'Hóa đơn siêu thị',
    'Báo cáo khám nghiệm tử thi', 'Dây thắt lưng đứt đôi', 'Dấu chân giày da dơ', 'Mảnh băng gạc dính máu', 'Khăn tay thêu tên', 'Hộp quẹt diêm cháy rụi', 'Thẻ nhớ USB nén', 'Kẹp tóc kim loại', 'Vé máy bay 1 chiều', 'Brooch cài áo mạ vàng',
    'Chìa khóa xe Mercedes', 'Vết son trên mép ly', 'Bông tai nụ bạc', 'Bút chì khúc gãy', 'Sổ tay bỏ túi da', 'Kính lúp trinh thám', 'Dây thắt nơ nhung', 'Hạt nếp nương thơm', 'Khăn len đan tay', 'Vết dầu nhớt đen',
    'Vết tàn thuốc ngắt nửa', 'Mảnh báo rách góc', 'Móc chìa khóa hình gấu', 'Hộp phấn trang điểm', 'Hạt cúc áo kim loại', 'Bìa hồ sơ bảo mật', 'Mảnh lụa tơ tằm', 'Mảnh móng tay giả', 'Vết sơn tường tươi', 'Băng cassette nhạc cũ',
    'Lông vũ thiên nga trắng', 'Mảnh đĩa CD vỡ đôi', 'Đèn pin cá nhân siêu sáng', 'Đồng xu cổ thời Pháp', 'Hạt chuỗi tràng hạt wood', 'Bao thư đóng dấu mật', 'Bút dạ quang vàng', 'Mảnh sứ cổ ngàn năm', 'Khăn bạt nhựa xanh', 'Hộp phấn nụ huế',
    'Vết bùn đất sét', 'Thẻ căn cước công dân', 'Sổ tiết kiệm ngân hàng', 'Gương soi bỏ túi mini', 'Vé xổ số độc đắc', 'Dây nịt quấn da trâu', 'Mảnh vải nhung đen', 'Dấu vết dầu hỏa', 'Vết chân chó mực', 'Túi xách da Chanel',
    'Bao tay y tế mỏng', 'Bông tẩy trang dùng dở', 'Lọ thuốc nắp đỏ mysterious', 'Chiếc nhẫn ngọc bích', 'Mảnh gạch hoa cổ', 'Bao lì xì đỏ may mắn', 'Vết mực xanh rớt', 'Chiếc kẹp ghim giấy', 'Miếng dán hạ sốt', 'Chiếc chìa khóa đồng cổ',
    'Bản thiết kế tòa nhà', 'Hóa đơn khách sạn 5 sao', 'Vé tàu hỏa đêm', 'Bao thuốc lá 3 số', 'Chiếc bờm tóc ngọc trai', 'Lông chim công xòe', 'Hạt cườm lấp lánh', 'Đầu mẩu diêm quẹt', 'Miếng bọt biển rửa bát', 'Dây buộc tóc hồng',
    'Chiếc tất chân thổ cẩm', 'Găng tay len mùa đông', 'Mảnh gỗ vụn cháy', 'Mảnh dây xích rỉ', 'Chiếc mũ lưỡi trai đen', 'Cặp kính râm đen', 'Bao súng da thật', 'Chiếc ghim cài áo', 'Tờ tiền mệnh giá 500k', 'Bao thư niêm phong đỏ',
    'Mảnh kim loại nhọn', 'Dấu chân trên cát', 'Dây tai nghe cuộn rối', 'Vết dầu ăn chiên', 'Túi đựng mỹ phẩm cao cấp', 'Lọ nước hoa mini', 'Khăn lau kính mắt', 'Cúc áo nhựa màu đốm', 'Chiếc nơ buộc quà', 'Bàn chải đánh răng',
    'Lược chải tóc bằng gỗ', 'Lọ sơn móng tay bóng', 'Mảnh giấy ghi chú vội', 'Chiếc thắt lưng vải dù', 'Hạt dưa đỏ Tết', 'Chiếc móc áo nhựa', 'Lọ dầu gió xanh', 'Miếng cao dán Salonpas', 'Dây thun cột tóc', 'Tấm bưu thiếp du lịch',
    'Sổ nốt nhạc tay', 'Chiếc còi cứu hộ nhôm', 'Gương chiếu hậu vỡ', 'Vết cà chua sốt', 'Chiếc khẩu trang y tế', 'Thẻ từ thang máy cư dân', 'Chìa khóa két sắt nhỏ', 'Mảnh kính vỡ nhỏ', 'Hạt nút gỗ tròn', 'Chiếc thìa inox sáng',
    'Vết son sẫm màu', 'Túi trà lọc ngâm', 'Mảnh dây thừng rơm', 'Lọ keo 502 dính', 'Bao ni lông đen bí ẩn', 'Chiếc bật lửa dẹt', 'Vé bãi xe trung tâm', 'Hộp quẹt diêm gỗ', 'Mảnh giấy khen học sinh', 'Tờ rơi quảng cáo nhà đất',
    'Sổ khám bệnh định kỳ', 'Bút xóa nước', 'Bao bì bánh snack cay', 'Lọ vitamin C', 'Chiếc ví cầm tay da', 'Thẻ thành viên VIP', 'Nhẫn bạc S925 đính đá', 'Bông tai bạc tròn', 'Dây chuyền bạc nam', 'Bình xịt tạo màu Graffiti',
    'Bàn nạo phô mai inox', 'Thẻ xe buýt tháng', 'Túi chườm đá lạnh', 'Khăn trải bàn đốm', 'Nút chai rượu vang Pháp', 'Hộp quẹt khè gas', 'Cây gãi lưng bằng trúc', 'Con tem bưu chính cổ', 'Tấm vé xem kịch rối', 'Mảnh gạch men ốp',
    'Lọ hồ dán khô', 'Tờ giấy nốt dán dạ quang', 'Chiếc nơ cài tóc tím', 'Túi đựng kính mắt', 'Lọ tăm xỉa răng tre', 'Chiếc la bàn cổ bằng đồng', 'Túi muối y tế truyền', 'Hạt nút áo gỗ thủ công', 'Chiếc nhẫn đính hôn kim cương', 'Đôi dép tổ ong huyền thoại'
  ];
  return {
    id: `c_${i + 1}`,
    name: baseClues[i] || `Manh mối ${i + 1}`,
    english: `Clue ${i + 1}`,
    type: 'base'
  };
});
