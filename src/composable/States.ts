import { ref, reactive } from "vue";
import Themas from "../assets/themas.json";

export const useThema = reactive(Themas.light);

export const useTema: "dark" | "light" = ref<any>("light");

export const useCor = ref(useThema?.primaria);
