// JSDoc
// 코멘트로 이루어진 문법
// 그냥 자바스크립트 파일 안에 JSDoc 코멘트만 더하면 타입스크립트가 그것을 지원해줌.
// 활용 : 자바스크립트 파일 안에 몇 천 줄일 때 수정하기가 어려움이 있을 때 유용함.

// 자바스크립트에 보호 장치를 더하는 방법 
// 아래 한 줄 코드는 타입스크립트 파일가 자바스크립트 파일을 확인하라고 알리는 것임.
// @ts-check
/** 
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @return boolean
 */ 
export function init(config) {
    return true;
}
/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code) {
    return code + 1;
}