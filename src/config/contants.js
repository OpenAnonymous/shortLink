import { config } from "dotenv";
config();

export const MONGOPASS = process.env.MONGOPASS || "Manh.1000"
export const JWTPASS = process.env.JWTPASS || "Manh28"


export const validationMessages = {
    'string.empty': '{#label} không được để trống.',
    'string.min': '{#label} phải chứa ít nhất {#limit} ký tự.',
    'any.required': '{#label} là bắt buộc.',
    'string.email': 'Định dạng {#label} không hợp lệ.',
    // Thêm các thông báo khác nếu cần...
};


export const APP_URL_API = 'http://localhost:4000'
