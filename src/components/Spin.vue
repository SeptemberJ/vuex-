<template>
	<Spin fix>
	    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
	    <div>加载中</div>
	</Spin>
</template>
<script>
    // 部分样式代码冗长，未作展示
    export default {
        
    }
</script>
<style>
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
}
</style>