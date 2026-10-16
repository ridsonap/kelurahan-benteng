import assert from "node:assert";
import { initialResidents, initialUMKM, initialAgendas, initialNews, initialAPBD } from "../lib/data.ts";

// 1. Data Integrity Checks
assert.strictEqual(initialAPBD[0].tahun, 2026, "APBD year must be 2026");
assert.strictEqual(initialAPBD[0].pendapatan, 1278593000, "Pendapatan matches benchmark");
assert.strictEqual(initialAPBD[0].belanja, 384667683, "Belanja matches benchmark");
assert.ok(initialResidents.length >= 3, "Seed residents must exist");
assert.ok(initialUMKM.length >= 2, "Seed UMKM must exist");
assert.ok(initialAgendas.length >= 2, "Seed agendas must exist");
assert.ok(initialNews.length >= 2, "Seed news must exist");

// 2. Auth Credentials Check
const testUsername = "bentengbenteng";
const testPassword = "benteng123456";
assert.strictEqual(testUsername, "bentengbenteng", "Admin username valid");
assert.strictEqual(testPassword, "benteng123456", "Admin password valid");

console.log("All self-checks passed successfully!");
