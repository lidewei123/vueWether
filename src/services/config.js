const env = process.env.NODE_ENV
export const CONFIG = {
  host: env ? 'https://api.seniverse.com' : '这里配置生产环境host',
  key: 'cftnpqr1akt88fte' // 你的API密钥
}
