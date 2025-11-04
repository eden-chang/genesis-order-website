import { ApplicationForm } from "./types";

export function validateApplicationForm(data: Partial<ApplicationForm>): {
  isValid: boolean;
  errors: Partial<Record<keyof ApplicationForm, string>>;
} {
  const errors: Partial<Record<keyof ApplicationForm, string>> = {};

  if (!data.characterName || data.characterName.trim().length < 2) {
    errors.characterName = "캐릭터 이름은 2자 이상이어야 합니다.";
  }

  if (!data.race || data.race.trim().length === 0) {
    errors.race = "종족을 선택해주세요.";
  }

  if (!data.class || data.class.trim().length === 0) {
    errors.class = "클래스를 선택해주세요.";
  }

  if (!data.background || data.background.trim().length < 50) {
    errors.background = "배경은 최소 50자 이상 작성해주세요.";
  }

  if (!data.discord || !data.discord.includes("#")) {
    errors.discord = "올바른 디스코드 아이디를 입력해주세요.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
