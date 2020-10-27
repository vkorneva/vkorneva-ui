<template>
    <ul class="breadcrumbs-kvv">
        <li class="breadcrumb-kvv__item"
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index">
            <a class="link-kvv"
               v-if="!isLastBreadcrumb(index)"
               :href="breadcrumb.url">
                {{ breadcrumb.title }}
            </a>
            <span v-else>{{ breadcrumb.title }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name   : 'kvv-breadcrumbs',
    props  : {
        breadcrumbs: {
            type    : Array,
            required: true,
            default () {
                return [];
            },
        },
    },
    methods: {
        isLastBreadcrumb (index) {
            return index !== this.breadcrumbs.length - 1;
        },
    },
};
</script>

<style lang="scss"
       scoped>
    @import "scss/breadcrumbs-kvv";
</style>
