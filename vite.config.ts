import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
// defineConfig工具函数 为了获取类型提示
export default ({ command, mode }) => {
  // command: serve; mode: development
  	const baseConfig = {
		mode,
		plugins: [
			vue(),
		],
		resolve: {
			alias: [
				{ find: '@', replacement: path.resolve(__dirname, 'src') }
			]
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import '@/style/global.scss';`
				}
			}
		}
  	}

	let config = {}
	if (command === 'serve') {
			config = {
			// dev 独有配置
			...baseConfig,
			server: {
				port: 8800,
				open: true,
				proxy: {
					'/api': {
						target: '',
						changeOrigin: true,
						rewrite: (path) => path.replace(/^\/api/, '')
					},
				},
			},
		}
	} else {
		// command === 'build'
		config = {
			// build 独有配置
			...baseConfig
		}
	}

  	return defineConfig(config)
}
