import { SHERLOCK_CASE_1 } from './sherlock-case-1';
import { SHERLOCK_CASE_2 } from './sherlock-case-2';
import { SHERLOCK_CASE_3 } from './sherlock-case-3';
import { SHERLOCK_CASE_4 } from './sherlock-case-4';
import { SHERLOCK_CASE_5 } from './sherlock-case-5';
import { SHERLOCK_CASE_6 } from './sherlock-case-6';

export { SHERLOCK_CASE_1, SHERLOCK_CASE_2, SHERLOCK_CASE_3, SHERLOCK_CASE_4, SHERLOCK_CASE_5, SHERLOCK_CASE_6 };

export const ALL_SHERLOCK_CASES = {
  sherlock_case_6: SHERLOCK_CASE_6,
  sherlock_case_1: SHERLOCK_CASE_1,
  sherlock_case_2: SHERLOCK_CASE_2,
  sherlock_case_3: SHERLOCK_CASE_3,
  sherlock_case_4: SHERLOCK_CASE_4,
  sherlock_case_5: SHERLOCK_CASE_5
};

/**
 * DANH SÁCH VỤ ÁN – SẮP XẾP CHUẨN THEO THỨ TỰ ĐỘ KHÓ TĂNG DẦN
 *
 * HỆ THỐNG TÍNH ĐIỂM CHUẨN SHCD:
 * - Holmes điểm cơ sở luôn là 100 điểm (dùng số bước tối ưu của Holmes).
 * - Điểm tối đa người chơi = Phần 1 (100đ) + Phần 2 câu hỏi phụ (30đ).
 * - Phạt: Trừ 5 điểm cho mỗi địa điểm thừa so với Holmes.
 */
export const SHERLOCK_CASES_LIST = [
  {
    id: "sherlock_case_6",
    title: "Vụ Án 1: Bản Thiết Kế Bị Đánh Cắp (The Stolen Blueprint)",
    setting_date: "Ngày 14 tháng 10 năm 1890",
    difficulty: "Tân thủ (Dễ nhất)",
    diffLevel: "beginner",
    holmes_clues: 3,
    scoring: {
      part1_max: 100,
      part2_max: 30,
      total_max: 130,
      penalty_per_extra_clue: 5
    },
    desc: "Bản thiết kế hệ thống điều khiển động cơ hơi nước bị đánh cắp ngay trước kỳ thi tốt nghiệp. Cửa sổ vỡ nhưng kính lại rơi ra ngoài… Holmes phá án chỉ cần đúng 3 bước đi!"
  },
  {
    id: "sherlock_case_1",
    title: "Vụ Án 2: Bức Tranh Bị Đánh Tráo (The Swapped Canvas)",
    setting_date: "Ngày 10 tháng 9 năm 1890",
    difficulty: "Nhập môn",
    diffLevel: "easy",
    holmes_clues: 4,
    scoring: {
      part1_max: 100,
      part2_max: 30,
      total_max: 130,
      penalty_per_extra_clue: 5
    },
    desc: "Bức tranh kiệt tác 'Hoàng hôn trên sông Thames' bị đánh tráo trước buổi đấu giá lớn nhất thập kỷ. Holmes phá án trong 4 bước – bạn có thể đua điểm cùng ông không?"
  },
  {
    id: "sherlock_case_2",
    title: "Vụ Án 3: Cái Chết Của Sherlock Holmes (Baker Street)",
    setting_date: "Ngày 2 tháng 12 năm 1893",
    difficulty: "Nhập môn nâng cao",
    diffLevel: "easy",
    holmes_clues: 4,
    scoring: {
      part1_max: 100,
      part2_max: 30,
      total_max: 130,
      penalty_per_extra_clue: 5
    },
    desc: "Vụ hỏa hoạn và án mạng bí ẩn tại căn hộ 221B Baker Street. Thi thể bị cháy xém nhưng Holmes vẫn còn sống... Thám tử làm quen với bản đồ, niên giám London."
  },
  {
    id: "sherlock_case_3",
    title: "Vụ Án 4: Người Phụ Nữ Hoang Tưởng (The Mystified Murderess)",
    setting_date: "Ngày 5 tháng 3 năm 1889",
    difficulty: "Trung bình",
    diffLevel: "medium",
    holmes_clues: 5,
    scoring: {
      part1_max: 100,
      part2_max: 30,
      total_max: 130,
      penalty_per_extra_clue: 5
    },
    desc: "Frances Nolan bị nghi là kẻ cuồng sát sau khi thôi miên giết người. Thám tử cần bóc gỡ âm mưu thao túng tâm lý tinh vi để chiếm đoạt gia tài."
  },
  {
    id: "sherlock_case_4",
    title: "Vụ Án 5: Lời Nguyền Của Xác Ướp (The Mummy's Curse)",
    setting_date: "Ngày 11 tháng 4 năm 1890",
    difficulty: "Khó",
    diffLevel: "hard",
    holmes_clues: 5,
    scoring: {
      part1_max: 100,
      part2_max: 30,
      total_max: 130,
      penalty_per_extra_clue: 5
    },
    desc: "Chuỗi cái chết giội xuống đoàn thám hiểm lăng mộ Ai Cập Katebet. Mạo danh tâm linh, cổ vật Toutankhamon bị đánh tráo và buôn lén ra thị trường đen."
  },
  {
    id: "sherlock_case_5",
    title: "Vụ Án 6: Cán Cân Công Lý Bất Ổn (The Case of the Unsettled Balance)",
    setting_date: "Ngày 4 tháng 6 năm 1890",
    difficulty: "Chuyên gia (Rất khó)",
    diffLevel: "expert",
    holmes_clues: 6,
    scoring: {
      part1_max: 100,
      part2_max: 30,
      total_max: 130,
      penalty_per_extra_clue: 5
    },
    desc: "Chuỗi án mạng theo nghi thức 4 nguyên tố cổ đại Thủy, Hỏa, Phong, Thổ giội xuống London. Cuồng tín triết học Empedocles và độc tố Belladonna – vụ án khó nhất!"
  }
];
