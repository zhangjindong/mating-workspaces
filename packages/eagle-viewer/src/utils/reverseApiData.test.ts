import { reverseApiData } from './reverseApiData';

// 测试用例名字表明测试的目的
test('reverseApiData use fetcher to request url', async () => {
  // 测试用例以 3A 的结构来写

  // Arrange 准备阶段，准备 mock 函数或者数据
  const fetcher = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({data: {foo: 'bar'}}),
  });

  // Act 执行被测对象
  await reverseApiData('https://api.end/point', fetcher);

  // Assert 断言测试结果
  expect(fetcher).toBeCalledWith('https://api.end/point');
});
test('reverseApiData reverse simple object', async () => {
  const fetcher = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({ data: { a: 'b' } }),
  });

  const reversed = await reverseApiData('url', fetcher);

  expect(reversed).toEqual({ b: 'a' });
});
