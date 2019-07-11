import { useEffect, useState, useCallback } from 'react';
import validator from 'validator';
import dot from 'dot-object';


let formErrors:string[] = [];

interface InputData {
    name: string,
    validation: string,
    values: any,
    setValues: (values: any) => void,
    defaultInvalidAttr: { error: boolean, className?: string}
}

interface FieldValidation {
    rule:string,
    options?: any
}

function handleError (name:string, isValid:boolean) {
    if (!isValid) {
        formErrors.push(name);
    } else {
        const index = formErrors.findIndex(error => error === name);
        if (index > -1) formErrors.splice(index, 1);
    }

    formErrors = Array.from(new Set(formErrors));
}

export function useFormInput({
                                 name,
                                 validation = '',
                                 values: formData,
                                 setValues: setFormData,
                                 defaultInvalidAttr
                             }: InputData) {
    const formValue = dot.pick(name, formData) || '';
// console.log('validator', formData);
    const [value, setValue] = useState(formValue);
    const [isValid, setIsValid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const [validationRules] = useState(validation);

    const handleValidation = useCallback(() => {
        const isValid = validate(value, validationRules);
        setIsValid(isValid);
        handleError(name, isValid);
    }, [setIsValid, validationRules, name, value]);

    // watch for external parent data changes
    useEffect(() => {
        if (value !== formValue) {
            setValue(formValue);
            setIsTouched(false);
            setIsFocused(false);
        }
    }, [formValue, value, setValue, setIsFocused, setIsTouched]);

    // validate on value change
    useEffect(() => {
        handleValidation();
    }, [handleValidation, name]);

    // rewrite self and parent's value
    const handleChange = useCallback(({ target }) => {
        const { value, checked, type } = target;
        const newValue = type === 'checkbox' ? checked : value;

        const data: any = { ...formData, [name]: newValue };

        setValue(newValue);
        setFormData(data);
    }, [setValue, formData, setFormData, name]);

    const handleFocus = useCallback(() => {
        setIsTouched(true);
        setIsFocused(true);
        handleValidation();
    }, [setIsTouched, setIsFocused, handleValidation]);

    const handleBlur = useCallback(() => {
        setIsFocused(false);
    }, [setIsFocused]);

    const showError = !isValid && isTouched && !isFocused;
    const invalidAttr = showError ? defaultInvalidAttr : null;

    return {
        value,
        name,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        ...invalidAttr
    };
}

export function useFormValidator(defaultValues: any, invalidAttr: any = { error: true }) {
    const [values, setValues] = useState(defaultValues);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => {
            formErrors = [];
        };
    }, []);

    const useInput = (name: string, validation: any) => useFormInput({
        name,
        validation,
        values,
        setValues,
        defaultInvalidAttr: invalidAttr
    });

    return {
        values,
        setValues,
        useInput,
        errors: formErrors,
        isValid: mounted && !formErrors.length
    };
}

/**
 * Returns either unmet rule, or null
 * @param value
 * @param validation
 * @returns {*}
 */
export function validate(value: string, validation: any) {
    const fields:FieldValidation[] = [];

    let trimmedValidation;
    let validatingFields;

    switch (typeof validation) {
        case 'object':
            Object.keys(validation).forEach(property => {
                fields.push({
                    rule: property,
                    options: validation[property]
                });
            });
            break;

        case 'string':
        default:
            if (!validation.length) return true;
            trimmedValidation = validation.replace(/ /g, '');
            validatingFields = trimmedValidation.split(',');
            validatingFields.forEach((fieldName: string) => {
                fields.push({
                    rule: fieldName
                });
            });
    }

    let isValid = true;

    fields.forEach(field => {
        const { rule, options = null } = field;

        switch (rule.trim()) {
            case 'isRequired':
                if (!value) isValid = false;
                break;
            default:
                if (isValid) {
                    if (options) {
                        // @ts-ignore
                        isValid = validator[rule](value, options);
                    }
                    else {
                        // @ts-ignore
                        isValid = validator[rule](value);
                    }
                }
                break;
        }
    });

    return isValid;
}
