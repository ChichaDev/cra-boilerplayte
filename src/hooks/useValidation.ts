import { useTranslation } from 'react-i18next';

export const useValidation = () => {
  const { t } = useTranslation();
  const REQUIRED_FIELD = `${t('errorRequired')}`;
  const CYRILLIC_LETTERS_REGEXP = /[а-яА-Я]/;

  const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
      if (value.match(CYRILLIC_LETTERS_REGEXP)) {
        return `${t('errorEnLetters')}`;
      }

      if (value.length < 4) {
        return `${t('errorLoginLength')}`;
      }

      return true;
    },
  };

  const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
      if (value.match(CYRILLIC_LETTERS_REGEXP)) {
        return `${t('errorEnLetters')}`;
      }

      if (value.length < 5) {
        return `${t('errorPasswordLength')}`;
      }

      if (value.length > 12) {
        return `${t('errorPasswordLimit')}`;
      }

      return true;
    },
  };

  return { loginValidation, passwordValidation };
};
