import { toMoney } from "./utils";

test("toMoney should return a number", () => {
  // Assert 断言测试结果
  expect(toMoney(`12,345.676`)).toBe(12345.676);
});
