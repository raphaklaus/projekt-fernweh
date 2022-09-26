import { bulkInsert } from "../repo/firestore/repo";
import { streamBatch } from "./helpers/streamer";

streamBatch("data/sentences.jsonl", bulkInsert);
