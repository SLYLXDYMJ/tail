# jason-leadto-alert
> 力图数字科技弹框样式插件，基于 sweetalert

## 安装

```bash
npm i --save jason-leadto-alert
```

```javascript
import alert from 'jason-leadto-alert';
// ...
alert({
  icon: 'success/error/warning/info',
  text: '提示文字',
  /* ...other swal options */
})
```

or

```html
<script src="dist/leadto-alert.umd.min.js">
<script>
  window.leadtoAlert({
    icon: 'success/error/warning/info',
    text: '提示文字',
    /* ...other swal options */
 });
</script>
```
