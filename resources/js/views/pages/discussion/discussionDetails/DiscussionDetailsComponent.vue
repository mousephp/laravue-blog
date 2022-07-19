<template>
    <div>
        <app-discussion-details-breadcrumb-component></app-discussion-details-breadcrumb-component>
        <app-discussion-details-content></app-discussion-details-content>
    </div>
</template>


<script>
    import DiscussionDetailsBreadcrumbComponent from './DiscussionDetailsBreadcrumbComponent.vue';
    import DiscussionDetailsContent from './DiscussionDetailsContent.vue';

    export default {
        components: {
            appDiscussionDetailsBreadcrumbComponent: DiscussionDetailsBreadcrumbComponent,
            appDiscussionDetailsContent: DiscussionDetailsContent,
        }
    }
</script>