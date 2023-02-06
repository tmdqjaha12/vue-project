/**
 * 현재 브라우저가 모바일인지 확인
 */
export const mobile = () => {
  return Boolean(
    navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
};

/**
 * 현재 브라우저 언어를 확인
 */
export const language = () => {
  return navigator.language;
};

/**
 * 현재 브라우저가 ios인지 확인
 */
export const ios = () => {
  return Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i));
};

/**
 * 1. 모바일인지 확인: desktop(pc)
 * 2. 가로/세로 확인: portrait(세로), landscape(가로)
 */
export const orientation = () => {
  return !navigator.maxTouchPoints
    ? "desktop"
    : !window.orientation
    ? "portrait"
    : "landscape";
};

//** input validate **/
/**
 * 입력값의 필수값 체크
 */
export const required = (value: string): null | string => {
  return value ? null : "필수 항목입니다.";
};

/**
 * 입력값의 이메일여부 체크
 */
export const email = (value: string): null | string => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? null
    : "Email 형식이 아닙니다.";
};

/**
 * 입력값의 숫자 체크
 */
export const numOnly = (value: string): null | string => {
  return /[^0-9]/g.test(value) ? null : "숫자만 입력 가능합니다.";
};

/**
 * 입력값의 max length 체크
 */
export const maxLength =
  (max: number) =>
  (value: string): null | string => {
    return value.length < max ? null : max + "자 이하 입력해주세요.";
  };

/**
 * 입력값의 min length 체크
 */
export const minLength =
  (min: number) =>
  (value: string): null | string => {
    return value.length > min ? null : min + "자 이상 입력해주세요.";
  };

/**
 * 입력값의 url 형식 체크
 */
export const url = (value: string): null | string => {
  return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
    value
  )
    ? null
    : "url만 입력 가능합니다.";
};

/**
 * 입력값의 ip 형식 체크
 */
export const ip = (value: string): null | string => {
  return /^(((([*]|[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([*]|[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]){1})|[*]{1})$/.test(
    value
  )
    ? null
    : "ex) '*', '*.*.*.*', '192.168.0.*', '192.168.0.100'";
};

/**
 * 입력값의 url 또는 ip 형식 체크
 */
export const IPorURL = (value: string): null | string => {
  const ip_regExp =
    /^(((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]){1}))$/;
  const url_regExp =
    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  if (ip_regExp.test(value) || url_regExp.test(value)) {
    return null;
  } else {
    return "ex) '192.168.0.1', 'http://www.abc.com'";
  }
};

/**
 * 입력값의 휴대폰 형식 체크 01XxxxxXXXX
 */
export const numPhone = (value: string): null | string => {
  return /(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/.test(value)
    ? null
    : "01XxxxxXXXX 방식으로 입력해주세요";
};

/**
 * 입력값의 휴대폰 형식 체크 01X-XXXX-XXXX
 */
export const hyphenPhone = (value: string): null | string => {
  return /(01[016789])[-]([1-9]{1}[0-9]{2,3})[-]([0-9]{4})$/.test(value)
    ? null
    : "01X-XXXX-XXXX 방식으로 입력해주세요";
};

/**
 * 입력값의 휴대폰 형식 체크 01XxxxxXXXX or 01X-XXXX-XXXX
 */
export const NUMorHYPEN_Phone = (value: string): null | string => {
  const numPhone_regExp = /(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;
  const hyphenPhone_regExp =
    /(01[016789])[-]([1-9]{1}[0-9]{2,3})[-]([0-9]{4})$/;
  if (numPhone_regExp.test(value) || hyphenPhone_regExp.test(value)) {
    return null;
  } else {
    return "01XxxxxXXXX or 01X-XXXX-XXXX";
  }
};

/**
 * 설정숫자범위 입력값 체크
 * min <= value <= max
 */
export const betweenInteger =
  (min: number, max: number) =>
  (value: number): null | string => {
    if (min <= value && value <= max) return null;
    return `${min} ~ ${max}`;
  };

/**
 * 설정숫자범위 입력값 체크
 * min <= value
 */
export const minInteger =
  (min: number) =>
  (value: number): null | string => {
    if (min <= value) return null;

    return `최소 설정: ${min}`;
  };

/**
 * 설정숫자범위 입력값 체크
 * value <= max
 */
export const maxInteger =
  (max: number) =>
  (value: number): null | string => {
    if (value <= max) return null;

    return `최대 설정: ${max}`;
  };

/**
 * 설정날짜범위 입력값 체크
 * min <= value
 */
export const maxDate =
  (min: Date) =>
  (value: Date): null | string => {
    if (min <= value) return null;
    return (
      "날짜를 옳바르게 설정해주세요. " +
      "최소설정: " +
      new Date(min).toLocaleDateString()
    );
  };

/**
 * 설정날짜범위 입력값 체크
 * value <= max
 */
export const minDate =
  (max: Date) =>
  (value: Date): null | string => {
    if (value <= max) return null;
    return (
      "날짜를 옳바르게 설정해주세요. " +
      "최대설정: " +
      new Date(max).toLocaleDateString()
    );
  };

/**
 * 비밀번호 패턴 체크
 * 알파벳, 숫자, 특수문자, length
 */
export const password_level3 =
  (min: number, max: number) =>
  (value: string): null | string => {
    const regExp = new RegExp(
      `(?=.*\\d)(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&'*_+?\\\\-]).{${min},${max}}`,
      ""
    );

    return regExp.test(value)
      ? null
      : `알파벳, 숫자, 특수문자( ~!@#$%^&'*_+?- )를 포함 ${min}~${max}자여야 합니다.`;
  };

/**
 * 대소문자, 숫자 조합 패턴
 * 알파벳, 숫자, length
 */
export const password_level2 =
  (min: number, max: number) =>
  (value: string): null | string => {
    const regExp = new RegExp(
      `(?=.*\\d)(?=.*[0-9])(?=.*[a-zA-Z]).{${min},${max}}`,
      ""
    );
    return regExp.test(value)
      ? null
      : `알파벳, 숫자를 포함 ${min}~${max}자여야 합니다.`;
  };

/**
 * 비밀번호 동일성 체크
 * value1 === value2
 */
export const compare_password =
  (value1: string) =>
  (value2: string): null | string => {
    return value1 === value2 ? null : "비밀번호가 정확하지 않습니다.";
  };
