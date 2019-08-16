<template>
    <div class="loading">
        <div></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    body{background:#000}

    .loading{
        width:100%;
        height:100%;
        display:block;
        position:absolute
	}

    .loading:before,
    .loading:after,
    .loading>div{
        width:200px;
        height:200px;
        top:50%;
        left:50%;
        display:block;
        position:absolute;
        border-radius:50%;
        border:4px solid #ffcc00
	}

    .loading:before
	    {content:"";animation:scale 1s ease-in infinite}

    .loading:after
	    {content:"";animation:scale 2s ease-in infinite}

    .loading>div{animation:scale 3s ease-in infinite}

    @keyframes scale{
        from{transform:translate(-50%,-50%) scale(0,0)}
        to{transform:translate(-50%,-50%) scale(1,1)}
	}
</style>