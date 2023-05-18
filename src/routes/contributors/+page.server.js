// return 503, under construction
import {
    error
} from "@sveltejs/kit";

export const load = async () => {
    throw error(503, "Page Temporarily Unavailable (Under Construction)");
};