<template>
    <div>
        <navbar></navbar>
        <sidebar></sidebar>

        <div class="p-8 sm:ml-64 mt-14">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import sidebar from '../components/layouts/sidebar.vue';
import navbar from '../components/layouts/navbar.vue';

export default {
    name: "DefaultLayout",
    components: {
        sidebar,
        navbar
    }
};
</script>
