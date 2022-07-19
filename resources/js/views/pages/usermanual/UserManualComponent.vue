<template>
    <div>
        <app-user-manual-breadcrumb-component></app-user-manual-breadcrumb-component>
        <app-user-manual-content></app-user-manual-content>
    </div>
</template>

<script>
    import UserManualBreadcrumbComponent from '../../../components/pages/BreadcrumbComponent.vue';
    import UserManualContent from './UserManualContent.vue';

    export default {
        components:{
            appUserManualBreadcrumbComponent: UserManualBreadcrumbComponent,
            appUserManualContent: UserManualContent
        }
    }
</script>