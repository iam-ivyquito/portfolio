<template>
    <Icon :name="name" :class="iconClass" />
</template>

<script lang="ts" setup>
    defineProps({
        name: {
            type: String,
            required: true
        },
        iconClass: {
            type: String,
            default: ""
        }
    })
</script>
