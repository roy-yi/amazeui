# AmazeUI data-am-selected bug fix
--
#####注意：此方法仅可在jQuery下使用
######解决AmazeUI在IOS下，JS动态给\<select data-am-selected\>赋值时出现多选的BUG
###使用方法：
$q(selector).val(); //selector: 和jQuery的查找器一样
####例：
```javascript
//HTML
<select data-am-selected="{btnWidth: '100%', btnSize: 'sm'}" id="gender" name="gender">
  <option value="1">男</option>
  <option value="2">女</option>
</select>
```
```javascript
//JavaScript
<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script type=="text/javascript">
  $q("#gender").val("1");
</script>
```
#####Attention: This function is based on jQuery
######To fix the bug that when using JavaScript to set value to \<select data-am-selected\> of AmazeUI, it will display as multiple select.
###How to use?
$q(selector).val(); //selector: jQuery selector, eg: $("#mySelect").val("1");
####For Example：
```javascript
//HTML
<select data-am-selected="{btnWidth: '100%', btnSize: 'sm'}" id="gender" name="gender">
  <option value="1">男</option>
  <option value="2">女</option>
</select>
```
```javascript
//JavaScript
<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script type=="text/javascript">
  $q("#gender").val("1");
</script>
```
