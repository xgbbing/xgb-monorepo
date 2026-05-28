---
  title: 组件分组1
  order: 1
---

# MarkDownTableParse

```tsx
import { MarkDownTableParse } from "@xgb/business-components";

const defaultJson =
  "### 商户\n日均营业商户，[点击此处查看](http://www.baidu.com)文档看这里：<http://www.baidu.com>";

export default () => <MarkDownTableParse markdownContent={defaultJson} />;
```

## 属性

| 属性  | 说明 | 类型            | 默认值 |
| ----- | ---- | --------------- | ------ |
| style | 样式 | `CSSProperties` | `-`    |
