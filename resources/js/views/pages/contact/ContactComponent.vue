<template>
    <div>
        <app-contact-breadcrumb-component></app-contact-breadcrumb-component>
        <app-contact-content></app-contact-content>
    </div>
</template>

<script>
    import ContactBreadcrumbComponent from '../../../components/pages/BreadcrumbComponent.vue';
    import ContactContent from './ContactContent.vue';

    export default {
        components:{
            appContactBreadcrumbComponent: ContactBreadcrumbComponent,
            appContactContent: ContactContent
        }
    }
</script>