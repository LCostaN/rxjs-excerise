import { httpGetRequest } from "../utils/http";
import { FETCH_EXAMPLE } from "../utils/endpoints";

/**
 * fetch Dashboard
 */
export async function fetchExample() {
  return await httpGetRequest(FETCH_EXAMPLE);
}
