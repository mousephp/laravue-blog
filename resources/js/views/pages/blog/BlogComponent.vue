<template>
    <div>
        <app-blog-breadcrumb></app-blog-breadcrumb>
        <app-blog-featured></app-blog-featured>
        <app-blog-new></app-blog-new>
        <app-blog-all></app-blog-all>

    </div>
</template>


<script>
    export default {
        components: {
            appBlogBreadcrumb: () => import(/* webpackPrefetch: true */ '../../../components/pages/BreadcrumbComponent.vue'),
            appBlogNew: () => import(/* webpackPrefetch: true */ './BlogNew.vue'),
            appBlogFeatured: () => import(/* webpackPrefetch: true */ './BlogFeatured.vue'),
            appBlogAll: () => import(/* webpackPrefetch: true */ './BlogAll.vue'),
        }
    }
</script>
