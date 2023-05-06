import app from "./clientApp";
import { getStorage } from "firebase/storage";

const storage = getStorage(app)
export default storage;
