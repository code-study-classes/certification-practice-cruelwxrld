import { ModuleMap } from "jest-haste-map";
import { completion } from "yargs";

export const calculateDistance = (x1, x2) => x2 > x1 ? x2 - x1 : x1 - x2;

export const calculateSegmentProduct = (A, B, C) => {
    const resultB = B - C;
    const resultC = C - A;
    
    if (A <= C && B >= C) {
        return resultB * resultC;
    };
};

export const calculateKilobytes = (fileSizeinBytes) => {
    
    let kb = 1024;

    const result = Math.trunc(fileSizeinBytes / kb);

    return result;

};

export const calculateSegments = (lengthA, lengthB) => {

    const result = Math.trunc(lengthA / lengthB);

    if (lengthA % lengthB === 0) {
        return lengthA / lengthB;
    } else {
        return result;
    }

};

export const calculateDigitSum = (twoDigitNumber) => {
    const isTwoDigit = String(twoDigitNumber).length;
    if (isTwoDigit === 2) {
        const result = String(twoDigitNumber).split('');
        const sum = parseInt(result[0]) + parseInt(result[1]);
        return sum;
    } else {
        return "This is not a two-digit number!";
    }    
}; 

export const swapHundredsAndTens = (twoDigitNumber) => {
    const result = String(twoDigitNumber).split('').splice(0, 2).reverse().join('');
    const ref = parseInt(String(twoDigitNumber).split('').splice(2).join(''));
    const sum = result + ref;
    const sum1 = parseInt(sum);
    
    return sum1;
};

export const getHundredsDigit = (number) => {
    if (number < 999) {
        return 0;
    } else { 
       const divide = Math.trunc((number / 100) % 10);
       return divide;
    }
};

export const getFullHours = (seconds) => {
    const secondInHours = 3600;
    const result = Math.trunc(seconds / secondInHours);

    if (Number.isInteger(seconds) === false || seconds < 0) {
        return toThrow();
    } else if (seconds === 0) {
        return 0;
    } else {
        return result;
    }
};

export const getDayOfWeek = (dayOfYear) => {
    switch (dayOfYear % 7) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;               
        default:
            return 0;
    }
};

export const countSquares = (a, b, c) => Math.floor((a * b) / (c ** 2));

