// 類似 Vue2 mixin.js 的功能
import { ref, toRefs, withDefaults, defineEmits, computed, defineProps } from 'vue';
// 註冊通用規則
import {
  checkEnglish,
  checkChineseWords,
  checkTaiwanPhoneNumber,
  checkTaiwanTelephoneNumber,
  checkTaxNumber,
  checkEnglishIntegrate,
  // checkNumberRange,
  checkTaiwanId,
  checkForeignerId,
  checkNewForeignerId,
  checkTaiwanAndForeignerId,
  checkNumberAndSymbol,
  checkNumber,
  checkDate,
  // checkDateRange,
  // checkStartDateRange,
  // checkEndDateRange,
  // checkIntAndDecimal,
  checkInteger,
  checkIntegerZeroToNinetyNine,
  // checkIntegerRange,
  // check100WithFloat,
  // checkIntegerDecimal,
  checkPositiveNumber,
  checkPositiveInteger,
  checkOver6Decimals,
  checkSymbol,
  checkEnglishInteger,
  checkEnglishNumberLength8To16,
  checkEmail,
  checkValidEmail,
  checkURL,
  checkHttpUrl,
  checkRegURL,
  checkRegHttpUrl,
} from '@/utils/validation';

// 註冊通用 format
import {
  toDec,
  toCDB,
  toRocDate,
  toRound,
  toPad0AfterPoint,
  toClearPrefix0,
  toCurrency,
  toHalfWidth,
  toFullWidth,
} from '@/utils/format';

export interface Props {
  value?: string;
  label?: string;
  type?: string;
  inputType?: string;
  hasChanged?: boolean;
  rules?: Array<T>;
  /*******************************Rules-Start**********************************************/
  required?: boolean;
  checkEnglish?: boolean;
  checkChineseWords?: boolean;
  checkTaiwanPhoneNumber?: boolean;
  checkTaiwanTelephoneNumber?: boolean;
  checkTaxNumber?: boolean;
  checkEnglishIntegrate?: boolean;
  // checkNumberRange?: boolean;
  checkTaiwanId?: boolean;
  checkForeignerId?: boolean;
  checkNewForeignerId?: boolean;
  checkTaiwanAndForeignerId?: boolean;
  checkNumberAndSymbol?: boolean;
  checkNumber?: boolean;
  checkDate?: boolean;
  // checkDateRange?: boolean;
  // checkStartDateRange?: boolean;
  // checkEndDateRange?: boolean;
  // checkIntAndDecimal?: boolean;
  checkInteger?: boolean;
  checkIntegerZeroToNinetyNine?: boolean;
  // checkIntegerRange?: boolean;
  // check100WithFloat?: boolean;
  // checkIntegerDecimal?: boolean;
  checkPositiveNumber?: boolean;
  checkPositiveInteger?: boolean;
  checkOver6Decimals?: boolean;
  checkSymbol?: boolean;
  checkEnglishInteger?: boolean;
  checkEnglishNumberLength8To16?: boolean;
  checkEmail?: boolean;
  checkValidEmail?: boolean;
  checkURL?: boolean;
  checkHttpUrl?: boolean;
  checkRegURL?: boolean;
  checkRegHttpUrl?: boolean;
  /*******************************Rules-End**********************************************/
  /*******************************Format-Start**********************************************/
  toDec?: boolean;
  toCDB?: boolean;
  toRocDate?: boolean;
  toRound?: boolean;
  toPad0AfterPoint?: boolean;
  toClearPrefix0?: boolean;
  toCurrency?: boolean;
  toHalfWidth?: boolean;
  toFullWidth?: boolean;
  /*******************************Format-End**********************************************/
}

export const propsBase = {
  // props
  value: '',
  label: '',
  type: 'text',
  inputType: '', // 外部標記用，若未來有需要改變寫法時方便批量調整   ['text','email','id','name','address'...]
  hasChanged: false,
  rules: [],
};

export class InputRules {
  inputProps?: Props;
  constructor(props: Props) {
    this.inputProps = props;
  }
  required(value: any) {
    return !!value || '請輸入!';
  }
  // checkMinLength(value: any) {
  //   if (['', 0, '0', null, 'null', undefined, false].includes(value)) return true
  //   if (['', 0, '0', null, 'null', undefined, false].includes(this.minLength)) return true

  //   return String(value).length >= this.minLength || `此欄位請輸入至少${this.minLength}個字`
  //}

  // checkMaxLength(value: any) {
  //   if (['', 0, '0', null, 'null', undefined, false].includes(value)) return true
  //   if (['', 0, '0', null, 'null', undefined, false].includes(this.maxLength)) return true
  //   if (
  //     this.format.includes('toCurrency') &&
  //     this.type === 'number' &&
  //     this.isFocused === false
  //   ) {
  //     const diff = [...String(value)].filter((text) => text === ',').length
  //     return (
  //       String(value).length <= Number(this.maxLength) + Number(diff) ||
  //       '此欄位值超過可輸入之長度'
  //     )
  //   }
  //   return String(value).length <= this.maxLength || '此欄位值超過可輸入之長度'
  //}

  checkEnglish(value: any) {
    if (!value) return true;
    return checkEnglish(value) || '請輸入英文';
  }

  checkChineseWords(value: any) {
    if (!value) return true;
    return checkChineseWords(value) || '請輸入中文字';
  }

  checkTaiwanPhoneNumber(value: any) {
    if (!value) return true;
    return checkTaiwanPhoneNumber(value) || '開頭必須為 09 且欄位長度限定10碼';
  }

  checkTaiwanTelephoneNumber(value: any) {
    if (!value) return true;
    return checkTaiwanTelephoneNumber(value) || '輸入區碼並檢視長度是否正確';
  }

  checkTaxNumber(value: any) {
    if (!value) return true;
    return checkTaxNumber(value) || '統編錯誤（ 8 個數字）';
  }

  checkEnglishIntegrate(value: any) {
    if (!value) return true;
    return checkEnglishIntegrate(value) || '限輸入英文數字';
  }

  // checkNumberRange(value: any) {
  //   if (!value) return true;
  //   return checkNumberRange(value, this.min, this.max) || '數值超出限制';
  // }

  // ID

  checkTaiwanId(value: any) {
    if (!value) return true;
    return checkTaiwanId(value) || '身份證驗證錯誤';
  }

  checkForeignerId(value: any) {
    if (!value) return true;
    return checkForeignerId(value) || '居留證號碼驗證錯誤';
  }

  checkNewForeignerId(value: any) {
    if (!value) return true;
    return checkNewForeignerId(value) || '居留證號碼驗證錯誤';
  }

  // checkForeignerOtherId(otherId, id = '') {
  //   if (![null, 'null', '', undefined].includes(id)) {
  //     // 身分證 為舊式統一證號 其他ID不可輸入
  //     if (checkForeignerId(id) && ![null, ''].includes(otherId)) {
  //       return '身分證ID非新式外來人口統一證號,其他ID不可輸入';
  //     }
  //     // 身分證 為新式統一證號 其他ID不可輸入 新式統一證號
  //     if (
  //       checkNewForeignerId(id) &&
  //       ![null, 'null', ''].includes(otherId) &&
  //       checkNewForeignerId(otherId)
  //     ) {
  //       return '(角色)ID欄位應輸入為新式統一證號、其他ID欄位英數入為舊式統一證號';
  //     }
  //   }
  //   return true;
  // }

  checkTaiwanAndForeignerId(value: any) {
    if (!value) return true;
    return checkTaiwanAndForeignerId(value) || '身分證字號與統一證號格式驗證錯誤';
  }

  checkNumberAndSymbol(value: any) {
    if (!value) return true;
    return checkNumberAndSymbol(value) || '必須為數字或+#-的符號';
  }

  // date

  checkDate(value: any) {
    return checkDate(value) || '日期格式錯誤';
  }

  // checkDateRange(value, startDate, endDate, checkDateTimeFlag, text = '日期') {
  //   return (
  //     checkDateRange(value, startDate, endDate, checkDateTimeFlag) ||
  //     `${text}區間(迄日)不可小於${text}區間(起日)`
  //   );
  // }

  // checkStartDateRange(startDate, endDate) {
  //   return checkStartDateRange(startDate, endDate) || '日期不可大於迄日';
  // }

  // checkEndDateRange(startDate, endDate) {
  //   return checkEndDateRange(startDate, endDate) || '日期不可小於起日';
  // }

  // // number

  // checkIntAndDecimal(value, int, decimal) {
  //   if (!value) return true;
  //   return checkIntAndDecimal(value, int, decimal) || `限制整數位${int}位及小數點${decimal}位`;
  // }

  checkNumber(value: any) {
    if (!value) return true;
    return checkNumber(value) || '必須為數字';
  }

  checkInteger(value: any) {
    if (!value) return true;
    return checkInteger(value) || '必須為整數';
  }

  checkIntegerZeroToNinetyNine(value: any) {
    if (!value) return true;
    return checkIntegerZeroToNinetyNine || '輸入範圍0~99';
  }

  // checkIntegerRange(value, min, max) {
  //   if (!value) return true;
  //   return checkIntegerRange(value) || `輸入範圍${min}~${max - 1}`;
  // }

  // check100WithFloat(value, allowNegative = false) {
  //   if (!value) return true;
  //   return check100WithFloat(value) || `請輸入範圍${!allowNegative ? '-10' : ''}0.00~100.00`;
  // }

  // checkIntegerDecimal(value, integer, decimal) {
  //   if (!value) return true;
  //   return (
  //     checkIntegerDecimal(value, integer, decimal) || `限制整數${integer}位及小數點${decimal}位`
  //   );
  // }

  checkPositiveNumber(value: any) {
    if (!value) return true;
    return checkPositiveNumber(value) || '輸入正數';
  }

  checkPositiveInteger(value: any) {
    if (!value) return true;
    return checkPositiveInteger(value) || '請輸入正整數';
  }

  checkOver6Decimals(value: any) {
    if (!value) return true;
    return checkOver6Decimals(value) || '輸入小數位數需在 6 位以內';
  }

  // mix

  checkSymbol(value: any) {
    if (!value) return true;
    return checkSymbol(value) || '請輸入符號';
  }

  checkEnglishInteger(value: any) {
    if (!value) return true;
    return checkEnglishInteger(value) || '只能輸入半形英文正整數';
  }

  checkEnglishNumberLength8To16(value: any) {
    if (!value) return true;
    return checkEnglishNumberLength8To16(value) || '請輸入8-16位英文數字';
  }

  // Email
  checkEmail(value: any) {
    if (!value) return true;
    return checkEmail(value) || '電子郵件格式有誤';
  }
  checkValidEmail(value: any) {
    if (!value) return true;
    return checkValidEmail(value) || '電子郵件格式有誤';
  }
  // 網址
  checkURL(value: any) {
    if (!value) return true;
    return checkURL(value) || '網址格式有誤';
  }
  checkHttpUrl(value: any) {
    if (!value) return true;
    return checkHttpUrl(value) || '網址格式有誤';
  }
  checkRegURL(value: any) {
    if (!value) return true;
    return checkRegURL(value) || '網址格式有誤';
  }
  checkRegHttpUrl(value: any) {
    if (!value) return true;
    return checkRegHttpUrl(value) || '網址格式有誤';
  }

  getRulesFromProps() {
    const defaultRules = [];
    Object.keys(this.inputProps).forEach((key) => {
      if (this[key] && this.inputProps[key]) {
        defaultRules.push(this[key]);
      }
    });
    return defaultRules;
  }
}

export class InputFormat {
  inputProps?: Props;
  constructor(props: Props) {
    this.inputProps = props;
    this.formatValue = this.formatValue.bind(this); // <- Add this
  }

  toString(value: any) {
    return typeof value === 'string' ? value : '';
  }
  toTrim(value: any) {
    return String(value).replaceAll(' ', '');
  }

  toUpperCase(value: any) {
    return String(value).toUpperCase();
  }

  toHalfWidth(value: any) {
    return toHalfWidth(value);
  }

  toFullWidth(value: any) {
    return toFullWidth(value);
  }

  ToDec(value: any) {
    return toDec(value);
  }
  ToCDB(value: any) {
    return toCDB(value);
  }
  toRocDate() {
    console.log(rocDate);
  }

  toRound(value: any) {
    return toRound(value);
  }

  toPad0AfterPoint(value: any) {
    return toPad0AfterPoint(value);
  }

  toClearPrefix0(value: any) {
    return toClearPrefix0(value);
  }

  toCurrency(value: any) {
    return toCurrency(value);
  }

  getFormatFromProps() {
    console.log(this);

    const defaultFormat = [];
    Object.keys(this.inputProps).forEach((key) => {
      if (this[key] && this.inputProps[key]) {
        defaultFormat.push(this[key]);
      }
    });
    return defaultFormat;
  }

  formatValue(value: any) {
    console.log(value);

    const defaultFormat = this.getFormatFromProps();
    const result = defaultFormat.reduce((curResult, fn) => {
      if (!fn) return curResult;
      return fn(curResult);
    }, value);

    return result;
  }
}
