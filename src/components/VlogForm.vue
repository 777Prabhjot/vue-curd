<script setup>
import { ref } from 'vue';
import {addVlogs} from '@/services/vlogs'


const title = ref("");
const desc = ref("");


const handleSubmit = async () => {
    const data = await addVlogs({title: title.value, desc: desc.value});
}

</script>

<template>
    <div class="mt-7 flex justify-center">
        <form  class="flex flex-col border-2 p-3" @submit.prevent="handleSubmit">
            <input type="text"  placeholder="Title" v-model="title" />
            <input type="text" placeholder="Description" v-model="desc"/>
            <button class="bg-blue-300 mt-2">Submit</button>
        </form>
    </div>
</template>