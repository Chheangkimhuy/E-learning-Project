import axios from "axios";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
export const UseMyStore = defineStore("store", () => {
  const items = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const fetchData = async () => {
    loading.value = true;
    error.value = null;
    try {
      const res = await axios.get(
        "https://e-learning-json-data-ttfr.onrender.com/course"
      );
      items.value = res.data;
      console.log(items.value);
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };
  onMounted(() => {
    fetchData();
  });
  return {
    items,
    loading,
    error,
    fetchData,
  };
});
