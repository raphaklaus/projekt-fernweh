import { count, rank, print } from "./helpers/counter";
import { stream } from "./helpers/streamer";

stream("data/sentences.jsonl", { count: count, rank: rank, print: print });
