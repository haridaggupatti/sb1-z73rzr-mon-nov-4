import { useState, useCallback } from 'react';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validate?: (value: string) => boolean | string;
}

interface Errors {
  [key: string]: string;
}

export function useForm<T extends { [key: string]: any }>(
  initialValues: T,
  validationRules: { [K in keyof T]?: ValidationRules } = {}
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<{ [K in keyof T]?: boolean }>({});

  const validateField = useCallback((name: keyof T, value: any) => {
    const rules = validationRules[name];
    if (!rules) return '';

    if (rules.required && !value) {
      return 'This field is required';
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Invalid format';
    }

    if (rules.validate) {
      const result = rules.validate(value);
      if (typeof result === 'string') return result;
      if (!result) return 'Invalid value';
    }

    return '';
  }, [validationRules]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    const error = validateField(name as keyof T, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  const validateForm = useCallback(() => {
    const newErrors: Errors = {};
    let isValid = true;

    Object.keys(values).forEach(key => {
      const error = validateField(key as keyof T, values[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validateField]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    setValues,
    setErrors,
  };
}