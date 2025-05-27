import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
export class UsernameValidators {
    static containsInvalidChars(invalidChars: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const charsToCheck: string[] = [...invalidChars];
            for(let c of charsToCheck) {
                if ((control.value as string).includes(c))
                    return {invalidChar: charsToCheck};
            };
            return null;
        }
    }

    static mustContainChars(mustChars: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const charsToCheck: string[] = [...mustChars];
            for(let c of charsToCheck) {
                if ((control.value as string).includes(c))
                    return null;
            };
            return {mustContain: mustChars};
        }
    }

    static mustContainNumber(control: AbstractControl): ValidationErrors | null {
        if(!/\d/.test(control.value as string)) {
            return {mustContainNumber: true};
        }
        return null;
    }

    static isUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if((control.value as string).includes("q")) {
                    res({notUnique: true});
                } else {
                    res(null);
                }
            }, 2500);
        });
    }
}