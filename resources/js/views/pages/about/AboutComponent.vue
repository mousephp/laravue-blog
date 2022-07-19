<template>
    <div>
        <app-about-breadcrumb-component></app-about-breadcrumb-component>
        <app-about-content></app-about-content>
    </div>
</template>

<script>
    import AboutBreadcrumbComponent from '../../../components/pages/BreadcrumbComponent.vue';
    import AboutContent from './AboutContent.vue';

    export default {
        mounted (){
            // console.log("Giới thiệu")
        },
        components:{
            appAboutBreadcrumbComponent: AboutBreadcrumbComponent,
            appAboutContent: AboutContent
        }
    }
</script>