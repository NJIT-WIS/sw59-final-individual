import { test, expect } from '@playwright/test';

test.describe('test suite', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://127.0.0.1:3000/', { waitUntil: 'domcontentloaded' });
    });
  
    // 添加一个新的测试用例来验证HTTP状态码
    test('root route status code', async ({ page }) => {
      const response = await page.goto('http://127.0.0.1:3000/');
      if (response !== null) {
        expect(response.status()).toBe(200);
      } else {
        throw new Error('No response received');
      }
    });
    
  });