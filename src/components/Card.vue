<script setup>

    import {deleteVlog} from '@/services/vlogs'

    const {vlogs} = defineProps(["vlogs"]);

    const handleDelete = async (id) => {
        const data = await deleteVlog(id);
        console.log(data);
    }

</script>

<template>
    <div class="border-2 m-2 w-fit p-3" v-for="vlog in vlogs" :key="vlog.id">
       <h1> Title: {{vlog.title}}</h1>
        <h3>Description: {{ vlog.desc }}</h3>
        <button class="mt-3 bg-red-400 text-white  hover:bg-red-500" @click="handleDelete(vlog.id)" >Delete</button>
        <button class="mt-3 bg-green-400 text-white ms-2  hover:bg-green-500" >Update</button>
    </div>
</template>