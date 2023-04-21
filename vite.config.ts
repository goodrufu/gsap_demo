import { ConfigEnv, UserConfig } from 'vite'

export default ({ command }: ConfigEnv): UserConfig => {
  const config: UserConfig = {
    server: {
      host: true,
      port: 3000
    }
  }

  return config
}
