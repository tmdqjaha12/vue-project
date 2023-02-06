import vue from "@vitejs/plugin-vue";
import type { OutgoingHttpHeaders } from "http";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import {
  createLogger,
  type AliasOptions,
  type BuildOptions,
  type CorsOptions,
  type CSSOptions,
  type Logger,
  type LogLevel,
  type LogOptions,
  type PluginOption,
  type ResolveOptions,
  type ServerOptions,
} from "vite";

//! build
//* https://vitejs.dev/config/build-options.html
export const build: BuildOptions = {
  /**
   * vite는 비동기적으로 불러오는 chunk내에 css코드가 포함된 경우, 이를 자동으로 추출해 파일로 분리하고 해당 chunk를 불러올 떄
   * link태그를 이용해 분리된 css코드를 불러오고 css가 모두 계산된 후에 chunk를 렌더링 한다.
   * css가 렌더링될 때 화면이 깜빡이는 FOUC현상을 회피하기 위해서
   *
   * 모든 css가 일반적인 각각의 파일로 저장된 경우라면 굳이 codeSplit을 사용할 필요가 없기 때문에 false를 사용하면 된다.
   */
  cssCodeSplit: false, // default: true,
  chunkSizeWarningLimit: 2048, // default: 500
  /**
   * minify: boolean | 'terser' | 'esbuild'
   *
   * build:
   * 필요없는 공백 및 주석 삭제하여 파일용량 최소화
   * 서버측에서 이해할 수 있는 언어로의 변환 또는 스크립트 해석이 불가능 하도록 암호화
   *
   * boolean: 코드 경량화 사용 여부
   *
   * terser:
   * minifier 빌드툴
   * 복호화 수준이 그리 높지 않다. 변수명을 줄이는 정도
   *
   * esbuild:
   * 기본값
   * terser보다 20~40배 빠르며 압축률은 1~2%정도밖에 떨어지지 않음
   */
  // 콘솔로그 제거하기
  minify: "terser",
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
  },
};

//! define
export const define = (env: Record<string, string>): Record<string, any> => {
  return {
    "process.env.VUE_APP_API_BASE_URL": JSON.stringify(
      env.VITE_APP_API_BASE_URL
    ),
    "process.env.VUE_APP_GRAPHQL_URL": JSON.stringify(env.VITE_APP_GRAPHQL_URL),
    "process.env.VUE_APP_PUBLIC_PATH": JSON.stringify(env.VITE_APP_PUBLIC_PATH),
  };
};

//! css
export const css: CSSOptions = {
  postcss: {
    plugins: [
      /** autoprefixer(),
    px2vw({
      viewportWidth: 375,
    }), **/
    ],
  },
};

//!
// export const envDir

//!
// export const envPrefix:string | string[] = 'VITE_'

//! clearScreen
//* 특정 메시지를 기록할 때 Vite가 터미널 화면을 지우지 않도록 하려면 로 설정
export const clearScreen = true;

//! logLevel
//* 콘솔 출력 세부 정보를 조정합니다. 기본값은 'info'입니다.
export const logLevel: LogLevel = "info"; // 'info' | 'warn' | 'error' | 'silent'

//! logger
export const logger = createLogger();
export const customLogger: Logger = {
  ...logger,
  info: (msg: string, options?: LogOptions) => {
    // console.log(msg.length, msg);
    const _msg = "r: 재시작\nu: 접속정보\no: 브라우저열기\nq: 종료\n";
    if (msg.length === 81) {
      return logger.info(
        "======================================================================",
        options
      );
    } else if (msg.length === 74) {
      return logger.info(msg.replace("Local", "접속정보"), options);
    } else if (msg.length === 74) {
      // return logger.info(msg, options);
    } else if (msg.length === 84) {
      // return logger.info(msg, options);
      return logger.info(_msg, options);
    } else if (msg.length === 71) {
      return logger.info(
        "=========================자, 개발을 시작하지.=========================",
        options
      );
    } else if (msg.length === 17) {
      return logger.info("*서버재시작완료\n" + _msg, options);
    } else {
      return logger.info(msg + "\n" + _msg, options);
    }
  },
  warn(msg, options) {
    return logger.warn("w: " + msg, options);
  },
  error(msg, options) {
    return logger.error("e: " + msg, options);
  },
};

//! cacheDir
/**
 ** 캐시 파일을 저장할 디렉토리
 ** 이 디렉터리의 파일은 vite에서 생성한 미리 번들된 dep 또는 기타 캐시 파일이므로 성능을 향상시킬 수 있습니다.
 ** --force 플래그를 사용하거나 디렉토리를 수동으로 삭제하여 캐시 파일을 재생성할 수 있습니다.
 ** default: "node_modules/.vite"
 */
export const cacheDir = "node_modules/.vite";

//! resolve
export const resolve: ResolveOptions & {
  alias?: AliasOptions | undefined;
} = {
  alias: {
    "@": path.join(__dirname, "./src"),
    // "@components": path.join(__dirname, "./src/components"),
    // "@assets": path.join(__dirname, "./src/assets"),
  },
};

//! server
//* https://vitejs.dev/config/server-options.html
export const server = (env: Record<string, string>): ServerOptions => {
  return {
    port: Number(env.VITE_APP_PORT),
    strictPort: true, // 이미 사용중인 포트에 대한 자동 실행 여부
    open: env.VITE_APP_DEV_OPEN_URL + ":" + env.VITE_APP_PORT, // 서버 시작 시 브라우저 자동 open
    // proxy: { buyhistory: "http://192.168.68.111:4000" } as Record<string, string | ProxyOptions> | undefined,
    // cors: false as boolean | CorsOptions ,
    // headers: {} as OutgoingHttpHeaders,
    // hmr: ?? as boolean | { protocol?: string, host?: string, port?: number, path?: string, timeout?: number, overlay?: boolean, clientPort?: number, server?: Server },
    // middlewareMode: false as boolean,
  };
};

//! preview
//* https://vitejs.dev/config/preview-options.html
export const preview = (env: Record<string, string>): ServerOptions => {
  return {
    port: Number(env.VITE_APP_P_PORT),
    strictPort: true, // 이미 사용중인 포트에 대한 자동 실행 여부
    open: env.VITE_APP_DEV_OPEN_URL + ":" + env.VITE_APP_P_PORT, // 서버 시작 시 브라우저 자동 open
    // proxy: { buyhistory: "http://192.168.68.111:4000" } as Record<string, string | ProxyOptions> | undefined,
    // cors: false as boolean | CorsOptions ,
    // headers: {} as OutgoingHttpHeaders,
    // hmr: ?? as boolean | { protocol?: string, host?: string, port?: number, path?: string, timeout?: number, overlay?: boolean, clientPort?: number, server?: Server },
    // middlewareMode: false as boolean,
  };
};

//! plugins
//*
export const plugins: PluginOption[] = [
  vue(),
  AutoImport({
    // targets to transform
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],

    // global imports to register
    imports: [
      // presets
      "vue",
      "vue-router",
      "vitest",
      // custom
      {
        "@vueuse/core": [
          // named imports
          "useMouse", // import { useMouse } from '@vueuse/core',
          // alias
          ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
        ],
        axios: [
          // default imports
          ["default", "axios"], // import { default as axios } from 'axios',
        ],
        "vue-i18n": [["i18n", "$t"]],
        "@vue/apollo-composable": [
          // default imports
          ["useQuery", "useQuery"],
          ["useMutation", "useMutation"],
        ],
        // "[package-name]": [
        //   "[import-names]",
        //   // alias
        //   ["[from]", "[alias]"],
        // ],
      },
    ],
    // Enable auto import by filename for default module exports under directories
    defaultExportByFilename: false,

    // Auto import for module exports under directories
    // by default it only scan one level of modules under the directory
    dirs: [
      // './hooks',
      // './composables' // only root modules
      // './composables/**', // all nested modules
      // ...
    ],

    // Filepath to generate corresponding .d.ts file.
    // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
    // Set `false` to disable.
    dts: "./src/auto-imports.d.ts",

    // Auto import inside Vue template
    // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
    vueTemplate: false,

    // Custom resolvers, compatible with `unplugin-vue-components`
    // see https://github.com/antfu/unplugin-auto-import/pull/23/
    resolvers: [
      /* ... */
    ],

    // Generate corresponding .eslintrc-auto-import.json file.
    // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    eslintrc: {
      enabled: false, // Default `false`
      filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  }),
];
