测试时，如果本地没有`node_modules`则需先运行`npm install vue`命令安装vue


### 基本语法
- `v-bind`:**单向数据绑定**,从Vue对象的data中取值,简写方式:`(:)`
- `v-model`:**双向数据绑定**,它修改其他用到的地方会跟着修改
- `v-on`:**事件操作**,例子：`v-on:click="search()`,简写方式:`@click="search()"`、括号也可以不加`@click="search"`
- `修饰符"."指明的特殊后缀`:作用是阻止其默认行为，如：`v-on:submit.prevent="onSubmit"`
- `v-if`&`v-else`:**条件指令**
- `v-show`:**条件指令**,效果同`v-if`
- `v-for`:**列表渲染**
- `v-html`:**渲染内容中的HTML标签**