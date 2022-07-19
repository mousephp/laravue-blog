<template>
    <div>
        <app-profile-user-breadcrumb-component></app-profile-user-breadcrumb-component>
        <app-profile-user-content></app-profile-user-content>
    </div>
</template>

<script>
    import ProfileUserBreadcrumbComponent from '../../../../components/pages/BreadcrumbComponent.vue';
    import ProfileUserContent from './ProfileUserContent.vue';

    export default {
        components:{
            appProfileUserBreadcrumbComponent: ProfileUserBreadcrumbComponent,
            appProfileUserContent: ProfileUserContent
        }
    }
</script>