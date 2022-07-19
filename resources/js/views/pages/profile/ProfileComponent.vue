<template>
    <div>
        <app-profile-breadcrumb-component></app-profile-breadcrumb-component>
        <app-profile-content></app-profile-content>
    </div>
</template>

<script>
    import ProfileBreadcrumbComponent from '../../../components/pages/BreadcrumbComponent.vue';
    import ProfileContent from './ProfileContent.vue';

    export default {
        components:{
            appProfileBreadcrumbComponent: ProfileBreadcrumbComponent,
            appProfileContent: ProfileContent
        }
    }
</script>