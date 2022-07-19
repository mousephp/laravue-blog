<template>
    <div>
        <app-discussion-breadcrumb-component></app-discussion-breadcrumb-component>
        <app-discussion-new></app-discussion-new>
        <app-discussion></app-discussion>
    </div>
</template>

<script>
    import DiscussionBreadcrumbComponent from '../../../components/pages/BreadcrumbComponent.vue';
    import Discussion from './Discussion.vue';
    import DiscussionNew from './DiscussionNew.vue';

    export default {
        components:{
            appDiscussionBreadcrumbComponent: DiscussionBreadcrumbComponent,
            appDiscussion: Discussion,
            appDiscussionNew: DiscussionNew
        }
    }
</script>