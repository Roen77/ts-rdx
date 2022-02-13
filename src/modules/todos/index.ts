// modules/todos/index.ts
// 리듀서를 불러와서 default로 내보내겠다는 의미
export { default } from "./reducer";
// 모든 action 생성 함수를 불러와서 같은 이름들로 내부내겠다는 의미
export * from "./actions";
export * from "./types";

//  덕스 타입은 리듀서만 디폴트로 내보냄
