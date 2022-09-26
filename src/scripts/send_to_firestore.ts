import { bulkInsert } from "../repo/firestore/repo";
import { stream } from "./helpers/streamer";

stream("data/sentences.jsonl", bulkInsert);
