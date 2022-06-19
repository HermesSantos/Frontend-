<template>
    <div class="Contador">
        <div class="container">
            <div>
                <conversor/>
            </div>
        </div>
    </div>
</template>

<script>
import BintodecComponent from '@/components/BintodecComponent'
    export default {
        components: {
            conversor: BintodecComponent
        }
    }
</script>

<style>
.Contador{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container{
    background-color: #f0eedc;
    align-items: center;
    justify-content: center;
    display: flex;
    overflow: hidden;
    height: 80vh;
    width: 30vw;
    box-shadow: 0px 0px 3px 0px;
    border-radius: 5px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    color: #212529
}
</style>