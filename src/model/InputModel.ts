// 類似 Vue2 mixin.js 的功能
import { ref, toRefs, withDefaults, defineEmits, computed, defineProps } from 'vue';
export interface Props {
  value?: string;
  label?: string;
  inputType?: string;
  hasChanged?: boolean;
  rules?: Array<T>;
  required?: boolean;
}

export const propsBase = {
  // props
  value: '',
  label: '',
  inputType: '', // 外部標記用，若未來有需要改變寫法時方便批量調整   ['text','email','id','name','address'...]
  hasChanged: false,
  rules: [],
  required: false,
};

export class InputRules {
  inputProps?: Props;
  constructor(props: Props) {
    this.inputProps = props;
  }
  required(value: any) {
    return !!value || '請輸入!';
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
