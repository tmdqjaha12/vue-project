import { loadEnv, type ConfigEnv, type UserConfig } from "vite";
import {
  build,
  css,
  customLogger,
  define,
  plugins,
  resolve,
  server,
} from "./vite.config.constants";

//* https://vitejs.dev/config/
export default async ({
  command,
  mode,
  ssrBuild,
}: ConfigEnv): Promise<UserConfig> => {
  // const data = await asyncFunction() // config 구성에 비동기 함수를 호출해야 할 경우

  // mode를 기준으로 env를 로드
  // 세 번째 매개변수를 ""로 설정하여 "VITE_"접두사에 관계없이 모든 env를 로드
  const env = loadEnv(mode, process.cwd(), "");
  if (command === "serve") {
    //* dev specific config // dev or serve시 사용될 config
    return {
      root: process.cwd(), // default: process.cwd(), index.html 위치
      base: env.VITE_APP_PUBLIC_PATH, // default: "/"
      //* env를 재 정의
      define: define(env),
      //* css
      css: css,
      //* logger
      customLogger: customLogger,
      //* resolve
      resolve: resolve,
      //* server
      server: server(env),
      //* 플러그인
      plugins: plugins,
      // preview
    };
  } else {
    // command === 'build'
    //* build specific config // build시 사용될 config
    return {
      root: process.cwd(), // default: process.cwd(), index.html 위치
      //* env를 재 정의
      define: define(env),
      //* css
      css: css,
      //* logger
      customLogger: customLogger,
      //* resolve
      resolve: resolve,
      //* server
      server: server(env),
      //* 플러그인
      plugins: plugins,
      // preview
      base: env.VITE_APP_PUBLIC_PATH,
      build: build,
    };
  }
};

// "@": fileURLToPath(new URL("./src", import.meta.url)),
