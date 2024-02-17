<script setup>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import VlogForm from './components/VlogForm.vue';

import {getVlogs} from '@/services/vlogs';
import { onMounted, ref } from 'vue';

const vlogs = ref([]);


onMounted(async () => {
    vlogs.value = await getVlogs();
});

onMounted(async () => {
  const response = await getVlogs();

  vlogs.value = response.data;
})


</script>

<template>
  <Header />
  <div class="mt-5 flex justify-center">
  <Card :vlogs="vlogs"/>
</div>
<VlogForm />
</template>


