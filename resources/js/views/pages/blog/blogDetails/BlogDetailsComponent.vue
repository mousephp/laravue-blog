<template>
    <div>
        <app-blog-details-breadcrumb></app-blog-details-breadcrumb>
        <app-blog-details-content></app-blog-details-content>
    </div>
</template>


<script>
    const BlogDetailsBreadcrumb = () => import(/* webpackChunkName: "component-C" */ '././BlogDetailsBreadcrumb.vue');
    const BlogDetailsContent = () => import(/* webpackChunkName: "component-C" */ '././BlogDetailsContent.vue');

    export default {
        components: {
            appBlogDetailsBreadcrumb: BlogDetailsBreadcrumb,
            appBlogDetailsContent: BlogDetailsContent
        }
    }
</script>