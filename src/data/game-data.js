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
    'Dao bếp', 'Dao cạo', 'Dây kim loại', 'Rìu', 'Kéo', 'Mảnh thủy tinh', 'Kiếm', 'Chân nến', 'Búa', 'Tạ tay',
    'Gậy bóng chày', 'Đèn bàn', 'Gạch', 'Gối ôm', 'Dây thừng', 'Súng ngắn', 'Súng bắn tỉa', 'Dầu hỏa', 'Bật lửa', 'Thuốc độc',
    'Rắn độc', 'Bọ cạp độc', 'Axit', 'Thuốc bảo vệ thực vật', 'Cá nóc', 'Khí gas', 'Arsenic', 'Máy tính', 'Dây điện', 'Tiêm không khí',
    'Kim tiêm nhiễm trùng', 'Điện giật', 'Cuốc nhỏ', 'Trâm cài', 'Nồi đất', 'Đĩa ném', 'Cây lao', 'Bút máy kim loại', 'Laser công suất cao', 'Đèn sưởi',
    'Bình chữa cháy', 'Đai an toàn', 'Ống thép', 'Dây xích', 'Móc câu cá', 'Dao phay', 'Dây dù', 'Súng phun lửa', 'Thuốc chuột', 'Xyanua',
    'Cồn công nghiệp', 'Dây cao su', 'Khóa cửa', 'Máy cắt cỏ', 'Nỏ bắn tên', 'Mảnh gốm sứ', 'Băng keo bịt miệng', 'Bình Gas mini', 'Dao gấp', 'Thuốc ngủ liều cao',
    'Cưa máy', 'Quả tạ đôi', 'Nĩa kim loại', 'Bàn ủi điện', 'Kìm cắt cáp', 'Chày đâm tiêu', 'Cuốc đất', 'Xẻng quân dụng', 'Mỏ lết trọng lực', 'Mảnh gương vỡ',
    'Thắt lưng da', 'Cáp thép', 'Xăng sinh học', 'Búa tạ', 'Trám kim loại', 'Dây xích xe máy', 'Bình xịt hơi cay', 'Máy sấy tóc', 'Súng đinh', 'Gậy nát gia đình',
    'Ống tiêm thủy tinh', 'Súng săn', 'Dao mổ y tế', 'Cây lau nhà', 'Thùng hóa chất', 'Lò vi sóng', 'Con lăn lò xo', 'Cán ô dù', 'Quạt trần mini', 'Gậy golf'
  ];
  return {
    id: `m_${i + 1}`,
    name: baseMeans[i] || `Hung khí ${i + 1}`,
    english: `Means ${i + 1}`,
    type: 'base'
  };
});

// CHUẨN 200 THẺ ĐẦU MỐI (CLUE CARDS)
export const CLUE_CARDS = Array.from({ length: 200 }, (_, i) => {
  const baseClues = [
    'Giày cao gót', 'Tàn thuốc lá', 'Gạt tàn', 'Báo cũ', 'Điều khiển từ xa', 'Thư rác', 'Kính cận', 'Son môi', 'Nhẫn cưới', 'Đồng hồ đeo tay',
    'Chìa khóa', 'Ví tiền', 'Bánh bao hấp', 'Túi gạo', 'Vết máu', 'Sợi vải', 'Răng rụng', 'Sợi tóc', 'Dấu vân tay', 'Vết bùn',
    'Bã cao su', 'Táo cắn dở', 'Xửng hấp tre', 'Đũa ăn', 'Chim dây cót', 'Tượng rồng', 'Mặt nạ', 'Tranh sơn dầu', 'Báo cáo y tế', 'Cuốn nhật ký',
    'Tác phẩm Cộng hòa', 'Bản đồ thành phố', 'Thư tình', 'Chi phiếu giả', 'Bánh gạo Tteok', 'Bạch tuộc sống', 'Phô mai Feta', 'Bọt biển thiên nhiên', 'Vé xem phim', 'Tai nghe Bluetooth',
    'Bút mực chảy', 'Dây chuyền vàng', 'Kính áp tròng', 'Nước hoa đắt tiền', 'Bông tai ngọc trai', 'Vết cà phê', 'Mảnh sơn móng tay', 'Chiếc cúc áo bị rứt', 'Lông chó mèo', 'Túi nilon rác',
    'Hóa đơn thanh toán', 'Báo cáo khám nghiệm', 'Dây thắt lưng đứt', 'Dấu chân giầy dơ', 'Mảnh băng gạc', 'Khăn tay thêu chữ', 'Hộp quẹt diêm cháy', 'USB nén dữ liệu', 'Metal Hair Clip', 'Vé máy bay khứ hồi',
    'Brooch cài áo', 'Chìa khóa xe hơi', 'Vết son trên ly', 'Bông tai kim cương', 'Bút chì gãy', 'Sổ tay bỏ túi', 'Kính lúp nhỏ', 'Dây thắt nơ', 'Hạt nếp nương', 'Khăn len đan tay',
    'Vết dầu mỡ', 'Vết tàn thuốc ngắt', 'Mảnh báo rách', 'Móc chìa khóa hình gấu', 'Bột phấn trang điểm', 'Hạt cúc áo kim loại', 'Bìa hồ sơ lưu trữ', 'Mảnh lụa tơ tằm', 'Fingernail Piece', 'Vết sơn tường',
    'Băng cassette cũ', 'Lông vũ thiên nga', 'Mảnh đĩa CD vỡ', 'Đèn pin cá nhân', 'Đồng xu cổ', 'Hạt chuỗi tràng hạt', 'Bao thư đóng dấu', 'Bút dạ quang', 'Mảnh sứ cổ', 'Khăn bạt nhựa',
    'Hộp phấn nụ', 'Vết bùn đất đỏ', 'Thẻ căn cước', 'Sổ tiết kiệm', 'Gương soi bỏ túi', 'Vé xổ số kiến thiết', 'Dây nịt quấn', 'Mảnh vải nhung', 'Dấu vết dầu hỏa', 'Vết chân chó',
    'Túi xách da', 'Bao tay y tế', 'Bông tẩy trang', 'Lọ thuốc nắp đỏ', 'Chiếc nhẫn ngọc bích', 'Mảnh gạch hoa', 'Bao lì xì đỏ', 'Vết mực xanh', 'Chiếc kẹp ghim', 'Miếng dán hạ sốt',
    'Chiếc chìa khóa đồng', 'Bản thiết kế', 'Hóa đơn khách sạn', 'Vé tàu hỏa', 'Bao thuốc lá dẹt', 'Chiếc bờm tóc', 'Lông chim công', 'Hạt cườm lấp lánh', 'Đầu mẩu diêm', 'Miếng bọt biển',
    'Dây buộc tóc hồng', 'Chiếc tất chân', 'Găng tay len', 'Mảnh gỗ vụn', 'Mảnh dây xích', 'Chiếc mũ lưỡi trai', 'Cặp kính râm', 'Bao súng da', 'Chiếc ghim cài', 'Tờ tiền mệnh giá nhỏ',
    'Bao thư niêm phong', 'Mảnh kim loại', 'Dấu chân cát', 'Dây tai nghe cuộn', 'Vết dầu ăn', 'Túi đựng mỹ phẩm', 'Lọ nước hoa mini', 'Khăn lau kính', 'Cúc áo nhựa', 'Chiếc nơ buộc',
    'Bàn chải đánh răng', 'Lược chải tóc', 'Lọ sơn móng tay', 'Mảnh giấy ghi chú', 'Chiếc thắt lưng vải', 'Hạt dưa đỏ', 'Chiếc móc áo', 'Lọ dầu gió', 'Miếng cao dán', 'Dây thun cột',
    'Tấm bưu thiếp', 'Sổ nốt nhạc', 'Chiếc còi cứu hộ', 'Gương chiếu hậu', 'Vết cà chua', 'Chiếc khẩu trang', 'Thẻ từ thang máy', 'Chìa khóa két sắt', 'Mảnh kính vỡ nhỏ', 'Hạt nút gỗ',
    'Chiếc thìa inox', 'Vết son sẫm', 'Túi trà lọc', 'Mảnh dây thừng rơm', 'Lọ keo 502', 'Bao ni lông đen', 'Chiếc bật lửa dẹt', 'Vé bãi xe', 'Hộp quẹt diêm', 'Mảnh giấy khen',
    'Tờ rơi quảng cáo', 'Sổ khám bệnh', 'Bút xóa', 'Bao bì bánh snack', 'Lọ vitamin', 'Chiếc ví cầm tay', 'Thẻ thành viên', 'Nhẫn bạc S925', 'Bông tai bạc', 'Dây chuyền bạc'
  ];
  return {
    id: `c_${i + 1}`,
    name: baseClues[i] || `Manh mối ${i + 1}`,
    english: `Clue ${i + 1}`,
    type: 'base'
  };
});
