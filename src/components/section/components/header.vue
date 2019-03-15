// stroke-linecap: butt/round/square

<template>
    <header>
        <div class="back" @click="$back">
            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <path d="M13,8 L2,20 L13,32 M2,20 L30,20" fill="none" stroke="#fff" stroke-width="3"></path>
            </svg>
        </div>
        <slot>
            <h1>header</h1>
        </slot>
    </header>
</template>

<style scoped lang="scss">
    header {
        display: flex;
        align-items: center;
        position: relative;

        .back {
            display: flex;
            align-items: center;
            padding-left: 15px;
        }

        h1 {
            text-transform: uppercase;
        }
    }

</style>

<script>
    export default {
        name: "v-header"
    }
</script>
